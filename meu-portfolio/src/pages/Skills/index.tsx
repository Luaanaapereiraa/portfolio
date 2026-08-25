import { Icon } from '@iconify/react'
import { skillGroups } from '../../data/skills'
import { useSectionInView } from '../../hooks/useSectionInView'
import { SectionTitle } from '../../styles/shared'
import { CategoryTitle, ContainerSkills, Grid, ImageWrapper, SkillCategory } from './styles'

const Skills = () => {
  const { ref, inView } = useSectionInView()

  return (
    <ContainerSkills id="skills-section" $isActive={inView} ref={ref}>
      <SectionTitle data-kicker="// skills">Skills</SectionTitle>
      {skillGroups.map((group) => (
        <SkillCategory key={group.title}>
          <CategoryTitle>{group.title}</CategoryTitle>
          <Grid>
            {group.items.map((skill) => (
              <ImageWrapper key={skill.name}>
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
