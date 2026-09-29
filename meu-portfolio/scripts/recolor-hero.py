"""Recolore a ilustração do hero para o tema HUD (roxo → ciano).

Uso: python scripts/recolor-hero.py src/assets/hero/*.webp   (sobrescreve; requer Pillow e NumPy)

Rode depois de scripts/split-hero-layers.py. Só a faixa azul→roxo→magenta é afetada:
tons claros/saturados (painéis, luzes) viram ciano; tons escuros arroxeados (blazer,
notebook) viram cinza-frio neutro. Pele e cabelo castanho ficam como estão.
"""
import sys
import numpy as np
from PIL import Image

TARGET_HUE = 191 / 360      # ciano levemente azulado (não puxa para o verde)
BAND = (200 / 360, 335 / 360)  # azul → roxo → magenta
FEATHER = 18 / 360           # transição suave nas bordas da faixa


def recolor(img: Image.Image) -> Image.Image:
    rgba = np.asarray(img.convert('RGBA')).astype(np.float32) / 255
    alpha = rgba[..., 3:]
    hsv = np.asarray(Image.fromarray((rgba[..., :3] * 255).astype(np.uint8)).convert('HSV')).astype(np.float32) / 255
    h, s, v = hsv[..., 0], hsv[..., 1], hsv[..., 2]

    lo, hi = BAND
    inside = np.clip(np.minimum((h - (lo - FEATHER)) / FEATHER, ((hi + FEATHER) - h) / FEATHER), 0, 1)
    colorful = np.clip((s - 0.12) / 0.2, 0, 1)   # ignora quase-cinzas
    bright = np.clip((v - 0.28) / 0.22, 0, 1)    # 0 = tons escuros (blazer, notebook), 1 = luzes/painéis

    # claros e saturados: matiz → ciano, mantendo a saturação
    shift = inside * colorful * bright
    dh = (TARGET_HUE - h + 0.5) % 1 - 0.5
    h2 = (h + dh * shift) % 1
    # escuros arroxeados: neutraliza para cinza-frio em vez de colorir
    neutral = inside * (1 - bright)
    s2 = s * (1 - 0.8 * neutral)
    h2 = (h2 + dh * neutral) % 1
    v2 = v

    out = Image.fromarray((np.stack([h2, s2, v2], -1) * 255).astype(np.uint8), 'HSV').convert('RGB')
    rgb = np.asarray(out).astype(np.float32) / 255
    return Image.fromarray((np.concatenate([rgb, alpha], -1) * 255 + 0.5).astype(np.uint8), 'RGBA')


if __name__ == '__main__':
    for path in sys.argv[1:]:
        src = Image.open(path)
        recolor(src).save(path, 'WEBP', quality=88, method=6)
