export interface Skill {
  name: string
  icon: string
  color?: string
}

export interface SkillGroup {
  title: string
  items: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: [
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'React', icon: 'logos:react' },
      { name: 'React Native', icon: 'tabler:brand-react-native', color: '#61DAFB' },
      { name: 'Next.js', icon: 'simple-icons:nextdotjs', color: '#FFFFFF' },
      { name: 'Axios', icon: 'simple-icons:axios', color: '#5A29E4' },
      { name: 'Material UI', icon: 'logos:material-ui' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Bootstrap', icon: 'logos:bootstrap' },
      { name: 'Vite', icon: 'logos:vitejs' },
      { name: 'Figma', icon: 'logos:figma' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'logos:nodejs-icon' },
      { name: 'NestJS', icon: 'logos:nestjs' },
      { name: 'GraphQL', icon: 'logos:graphql' },
      { name: 'REST APIs', icon: 'mdi:api', color: '#8519ff' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon' },
      { name: 'MySQL', icon: 'logos:mysql' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'Azure', icon: 'logos:microsoft-azure' },
      { name: 'Docker', icon: 'logos:docker-icon' },
      { name: 'CI/CD', icon: 'simple-icons:githubactions', color: '#2088FF' },
    ],
  },
  {
    title: 'Qualidade',
    items: [
      { name: 'Jest', icon: 'logos:jest' },
      { name: 'Testing Library', icon: 'simple-icons:testinglibrary', color: '#E33332' },
      { name: 'Vitest', icon: 'logos:vitest' },
      { name: 'Playwright', icon: 'logos:playwright' },
      { name: 'Cypress', icon: 'simple-icons:cypress', color: '#69D3A7' },
    ],
  },
  {
    title: 'Colaboração',
    items: [
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'GitHub', icon: 'simple-icons:github', color: '#FFFFFF' },
      { name: 'GitLab', icon: 'logos:gitlab' },
    ],
  },
]

export const skills: Skill[] = skillGroups.flatMap((group) => group.items)
