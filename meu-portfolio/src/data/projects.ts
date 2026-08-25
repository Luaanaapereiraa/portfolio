import HomeIllustration from '../assets/developer.png'
import Avocat from '../assets/avocatfeed.png'
import Pomodoro from '../assets/pomodorodev.png'

export interface Project {
  id: number
  title: string
  image: string
  link: string
  description: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Meu Portfólio',
    image: HomeIllustration,
    link: 'https://github.com/Luaanaapereiraa/portfolio',
    description:
      'Projeto desse portfólio, criado usando React, TypeScript, Vite e Styled Components',
  },
  {
    id: 2,
    title: 'AvocatFeed',
    image: Avocat,
    link: 'https://github.com/Luaanaapereiraa/AvocatSocialFeed',
    description:
      'Projeto de feed com interações, criado usando React, TypeScript, Vite e CSS Modules',
  },
  {
    id: 3,
    title: 'PomodoroDev',
    image: Pomodoro,
    link: 'https://github.com/Luaanaapereiraa/pomodorodev',
    description:
      'Projeto de pomodoro para ajudar Devs, criado usando React, TypeScript, Vite e Styled Components',
  },
]
