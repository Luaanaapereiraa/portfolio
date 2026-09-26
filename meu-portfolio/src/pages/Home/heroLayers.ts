import chart from '../../assets/hero/layer-chart.webp'
import cloud from '../../assets/hero/layer-cloud.webp'
import cube from '../../assets/hero/layer-cube.webp'
import network from '../../assets/hero/layer-network.webp'
import phone from '../../assets/hero/layer-phone.webp'
import spheres from '../../assets/hero/layer-spheres.webp'

export interface HeroLayer {
  id: string
  src: string
  /** posição e largura em % da imagem base (gerado por scripts/split-hero-layers.py) */
  left: number
  top: number
  width: number
  /** fica atrás da base: o notebook/blazer cobrem parte do elemento */
  behind: boolean
  /** deslocamento vertical máximo em px — até 6px o recorte não revela buraco */
  floatY: number
  duration: number
  delay: number
}

export const heroLayers: HeroLayer[] = [
  { id: 'phone', src: phone, left: 7.778, top: 5.434, width: 28.333, behind: true, floatY: 5, duration: 6.5, delay: 2.8 },
  { id: 'cloud', src: cloud, left: 74.111, top: 7.21, width: 25.889, behind: true, floatY: 5, duration: 7, delay: 2.1 },
  { id: 'network', src: network, left: 70.222, top: 45.977, width: 26.222, behind: false, floatY: 5, duration: 5.5, delay: 1 },
  { id: 'chart', src: chart, left: 6.556, top: 66.458, width: 19.333, behind: false, floatY: 5, duration: 6.5, delay: 3.2 },
  { id: 'cube', src: cube, left: 16.667, top: 83.699, width: 6.556, behind: false, floatY: 6, duration: 4.5, delay: 0.6 },
  { id: 'spheres', src: spheres, left: 74.444, top: 73.041, width: 17.556, behind: false, floatY: 6, duration: 5, delay: 1.7 },
]

/**
 * Painel de código da ilustração, recriado em HTML (LiveCodePanel).
 * Geometria medida no PNG original: paralelogramo inclinado com skewY.
 */
export const codePanel = {
  left: 4.276,
  top: 19.026,
  width: 26.974,
  height: 21.655,
  skewY: 16.7,
  floatY: 5,
  duration: 6,
  delay: 0,
}
