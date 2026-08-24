import { skills } from '../../data/skills'
import { useSectionInView } from '../../hooks/useSectionInView'
import { SectionTitle } from '../../styles/shared'
import { ContainerSkills, Grid, ImageWrapper } from './styles'

const Skills = () => {
  const { ref, inView } = useSectionInView()

  return (
    <ContainerSkills id="skills-section" $isActive={inView} ref={ref}>
      <SectionTitle>Skills</SectionTitle>
      <Grid>
        {skills.map((skill) => (
          <ImageWrapper key={skill.name}>
            <img src={skill.icon} alt="" />
            <span>{skill.name}</span>
          </ImageWrapper>
        ))}
      </Grid>
    </ContainerSkills>
  )
}

export default Skills
