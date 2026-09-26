"""Separa os elementos flutuantes da ilustração da Home em camadas.

Uso: python scripts/split-hero-layers.py <ilustracao-com-paineis.png> <foto-sem-paineis.webp> src/assets/hero
(requer Pillow e NumPy)

Saída: base.webp + layer-<id>.webp e layers.json com as posições em % da
imagem base (copiar para src/pages/Home/heroLayers.ts). As coordenadas dos
polígonos estão no PNG original (1216x1293), que está no histórico do git em
meu-portfolio/src/assets/home-illustration.png.

A base é a foto sem painéis + as linhas de órbita extraídas da ilustração.
Camadas `behind` ficam atrás da base (o notebook/blazer as cobrem) e são
estendidas alguns px por baixo do que as cobre, então o movimento de até
~6px nunca revela buraco.
"""
import json
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SRC, CLEAN, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
TARGET_W = 900

orig = Image.open(SRC).convert('RGBA')
OW, OH = orig.size
s = TARGET_W / OW
W, H = TARGET_W, round(OH * s)
img = orig.resize((W, H), Image.LANCZOS)
# versão sem os painéis (mesmo enquadramento; pode ter 1px a mais de altura)
clean = Image.open(CLEAN).convert('RGBA').crop((0, 0, OW, OH)).resize((W, H), Image.LANCZOS)


def circle(cx, cy, r, n=48):
    return [(cx + r * np.cos(t), cy + r * np.sin(t)) for t in np.linspace(0, 2 * np.pi, n)]


# polígonos (coords do original); cada layer = união de polígonos menos exclusões
LAPTOP = [(0, 585), (20, 580), (252, 543), (265, 547), (318, 657), (405, 836), (0, 860)]
# painel de código: substituído por um painel HTML "vivo" (LiveCodePanel) no mesmo lugar
CODE_PANEL = [(47, 240), (386, 339), (386, 629), (47, 532)]
LAYERS = [
    {
        'id': 'phone',
        'behind': True,
        'shapes': [[(40, 60), (436, 60), (436, 622), (40, 622)]],
        'exclude': [LAPTOP, CODE_PANEL],
    },
    {
        'id': 'cloud',
        'behind': True,
        'shapes': [[
            (895, 85), (1216, 85), (1216, 640), (1002, 640), (1000, 620), (995, 580),
            (988, 540), (978, 503), (963, 468), (943, 443), (936, 420), (936, 300), (895, 300),
        ]],
        'exclude': [],
    },
    {
        'id': 'network',
        'shapes': [[(859, 598), (1180, 682), (1182, 920), (859, 829)]],
        'exclude': [],
    },
    {
        'id': 'chart',
        'shapes': [[(85, 849), (327, 949), (329, 1093), (245, 1095), (85, 1010)]],
        'exclude': [],
    },
    {
        'id': 'cube',
        'shapes': [[(240, 1086), (286, 1109), (286, 1168), (240, 1191), (199, 1168), (199, 1109)]],
        'exclude': [],
    },
    {
        'id': 'spheres',
        'shapes': [
            circle(961, 1078, 51),
            circle(1087, 971, 33),
            [(993, 1045), (1063, 986), (1073, 998), (1003, 1058)],
        ],
        'exclude': [],
    },
]


def mask_for(layer):
    m = Image.new('L', (W, H), 0)
    d = ImageDraw.Draw(m)
    for poly in layer['shapes']:
        d.polygon([(x * s, y * s) for x, y in poly], fill=255)
    for poly in layer['exclude']:
        d.polygon([(x * s, y * s) for x, y in poly], fill=0)
    return m


arr = np.asarray(img).astype(np.float32) / 255.0
alpha = arr[..., 3:4]
premult = np.concatenate([arr[..., :3] * alpha, alpha], axis=-1)
REACH = 12  # px (na escala final) que o movimento pode revelar, com folga

OFFSETS = [(-1, -1), (-1, 0), (-1, 1), (0, -1), (0, 1), (1, -1), (1, 0), (1, 1)]


def propagate(src, known, allowed, steps=REACH):
    """Estende `src` a partir de `known` para dentro de `allowed`, no máximo `steps` px."""
    out = src.copy()
    known = known.copy()
    out[~known] = 0
    for _ in range(steps):
        acc = np.zeros_like(out)
        cnt = np.zeros(known.shape, np.float32)
        for dy, dx in OFFSETS:
            k = np.roll(np.roll(known, dy, 0), dx, 1)
            acc += np.roll(np.roll(out, dy, 0), dx, 1) * k[..., None]
            cnt += k
        frontier = (~known) & allowed & (cnt > 0)
        if not frontier.any():
            break
        out[frontier] = acc[frontier] / cnt[frontier][:, None]
        known |= frontier
    out[~known] = 0
    return out


def dilate(m, px):
    im = Image.fromarray((m * 255).astype(np.uint8)).filter(ImageFilter.MaxFilter(px * 2 + 1))
    return np.asarray(im) > 127


hard, feather = {}, {}
for layer in LAYERS:
    m = mask_for(layer)
    hard[layer['id']] = np.asarray(m) > 127
    feather[layer['id']] = np.asarray(m.filter(ImageFilter.GaussianBlur(1.2))).astype(np.float32) / 255.0

union = np.zeros((H, W), bool)
for m in hard.values():
    union |= m
union_feather = np.zeros((H, W), np.float32)
for f in feather.values():
    union_feather = np.maximum(union_feather, f)

carr = np.asarray(clean).astype(np.float32) / 255.0
clean_pm = np.concatenate([carr[..., :3] * carr[..., 3:4], carr[..., 3:4]], axis=-1)
person = carr[..., 3] > 0.5
# "opaque" = o que cobre os painéis de trás (você + notebook)
opaque = person

# detalhes estáticos da original que não existem na versão limpa (linhas de órbita):
# - no fundo: tudo, exceto uma faixa de 3px colada na silhueta (evita contorno duplicado)
# - sobre o corpo: só pixels bem mais claros e saturados (as linhas de luz)
lum = lambda a: a[..., :3].mean(-1)
sat = lambda a: a[..., :3].max(-1) - a[..., :3].min(-1)
near_person = dilate(person, 3)
on_bg = ~near_person
on_body = person & (lum(arr) - lum(carr) > 0.22) & (sat(arr) > 0.35)
# áreas recortadas dos painéis (e das exclusões, ex.: notebook) não recebem detalhes estáticos
no_detail = union.copy()
for layer in LAYERS:
    ex = Image.new('L', (W, H), 0)
    d = ImageDraw.Draw(ex)
    for poly in layer['exclude']:
        d.polygon([(x * s, y * s) for x, y in poly], fill=255)
    no_detail |= np.asarray(ex) > 127
no_detail = dilate(no_detail, 2)
detail_mask = (on_bg | on_body) & ~no_detail
detail_f = np.asarray(
    Image.fromarray((detail_mask * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8))
).astype(np.float32) / 255.0
detail_f *= 1 - union_feather
details = premult * detail_f[..., None]
base_pm = details + clean_pm * (1 - details[..., 3:4])

layer_pm = {}
for layer in LAYERS:
    f = feather[layer['id']]
    pm = premult * f[..., None]
    if layer.get('behind'):
        # estende o painel por baixo do que o tampa (notebook/blazer)
        m = hard[layer['id']]
        ex = Image.new('L', (W, H), 0)
        d = ImageDraw.Draw(ex)
        for poly in layer['exclude']:
            d.polygon([(x * s, y * s) for x, y in poly], fill=255)
        covered = dilate(opaque, 4) | (np.asarray(ex) > 127)
        allowed = dilate(m, REACH) & ~m & covered
        # parte do miolo (3px pra dentro) para não arrastar a borda brilhante
        core = ~dilate(~m, 3)
        ext = propagate(premult, core, allowed | m, steps=REACH + 3)
        pm = np.where((allowed & ~(f > 0.5))[..., None], ext, pm)
    layer_pm[layer['id']] = pm


def to_image(pm):
    a = pm[..., 3:4]
    rgb = np.where(a > 1e-4, pm[..., :3] / np.maximum(a, 1e-4), 0)
    out = np.concatenate([rgb, a], axis=-1)
    return Image.fromarray((np.clip(out, 0, 1) * 255 + 0.5).astype(np.uint8), 'RGBA')


to_image(base_pm).save(f'{OUT}/base.webp', 'WEBP', quality=88, method=6)

meta = []
for layer in LAYERS:
    pm = layer_pm[layer['id']]
    ys, xs = np.nonzero(pm[..., 3] > 0.004)
    x0, x1, y0, y1 = xs.min(), xs.max() + 1, ys.min(), ys.max() + 1
    to_image(pm[y0:y1, x0:x1]).save(f"{OUT}/layer-{layer['id']}.webp", 'WEBP', quality=88, method=6)
    meta.append({
        'id': layer['id'],
        'left': round(x0 / W * 100, 3),
        'top': round(y0 / H * 100, 3),
        'width': round((x1 - x0) / W * 100, 3),
        'behind': bool(layer.get('behind')),
    })

json.dump({'size': [W, H], 'layers': meta}, open(f'{OUT}/layers.json', 'w'), indent=2)
print(json.dumps(meta, indent=2))
