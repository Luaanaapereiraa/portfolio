import { Icon } from '@iconify/react'
import { skillGroups } from '../../data/skills'
import { useStaggerReveal, type RevealGroup } from '../../animations/useStaggerReveal'
import { useSectionInView } from '../../hooks/useSectionInView'
import { SectionTitle } from '../../styles/shared'
import {
  CategoryCount,
  CategoryTitle,
  ContainerSkills,
  Grid,
  ImageWrapper,
  SkillCategory,
} from './styles'

const revealGroups: RevealGroup[] = [
  {
    trigger: '[data-anim="skill-group"]',
    items: '[data-anim="skill"]',
    from: { autoAlpha: 0, y: 18, scale: 0.92 },
    stagger: 0.04,
  },
]

const Skills = () => {
  const { ref, inView } = useSectionInView()
  const revealScope = useStaggerReveal<HTMLElement>(revealGroups)

  return (
    <ContainerSkills
      id="skills-section"
      $isActive={inView}
      ref={(node: HTMLElement | null) => {
        ref(node)
        revealScope.current = node
      }}
    >
      <SectionTitle data-kicker="[02] // stack técnica">Skills</SectionTitle>
      {skillGroups.map((group) => (
        <SkillCategory key={group.title} data-anim="skill-group">
          <CategoryTitle>
            {group.title}
            <CategoryCount aria-hidden="true">
              {String(group.items.length).padStart(2, '0')}
            </CategoryCount>
          </CategoryTitle>
          <Grid>
            {group.items.map((skill) => (
              <ImageWrapper key={skill.name} data-anim="skill">
                <Icon
                  icon={skill.icon}
                  width={48}
                  height={48}
                  color={skill.color}
                  aria-hidden
                />
                <span>{skill.name}</span>
              </ImageWrapper>
            ))}
          </Grid>
        </SkillCategory>
      ))}
    </ContainerSkills>
  )
}

export default Skills
