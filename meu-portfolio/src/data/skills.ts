import Javascript from '../assets/javascript.svg'
import ReactIcon from '../assets/react.svg'
import Typescript from '../assets/typescript.svg'
import Html from '../assets/html.svg'
import Css from '../assets/css.svg'
import Materialui from '../assets/material-ui.svg'
import Tailwind from '../assets/tailwind.svg'
import Bootstrap from '../assets/bootstrap.svg'
import Jest from '../assets/jest.svg'
import Vite from '../assets/vitejs.svg'
import GitHub from '../assets/github.svg'
import GitLab from '../assets/gitlab.svg'
import NextJS from '../assets/nextjs.svg'
import Git from '../assets/git.svg'
import Figma from '../assets/figma.svg'

export interface Skill {
  name: string
  icon: string
}

export const skills: Skill[] = [
  { name: 'JavaScript', icon: Javascript },
  { name: 'React', icon: ReactIcon },
  { name: 'TypeScript', icon: Typescript },
  { name: 'HTML', icon: Html },
  { name: 'CSS', icon: Css },
  { name: 'Material UI', icon: Materialui },
  { name: 'Tailwind CSS', icon: Tailwind },
  { name: 'Bootstrap', icon: Bootstrap },
  { name: 'Jest', icon: Jest },
  { name: 'ViteJS', icon: Vite },
  { name: 'Next.JS', icon: NextJS },
  { name: 'GitHub', icon: GitHub },
  { name: 'GitLab', icon: GitLab },
  { name: 'Git', icon: Git },
  { name: 'Figma', icon: Figma },
]
