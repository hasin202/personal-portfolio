import { SkillBox, SkillsFlexContainer } from "./Skills.styled";

const Skills = () => {
  return (
    <>
      <SkillsFlexContainer>
        <SkillBox>NextJS</SkillBox>
        <SkillBox>TypeScript</SkillBox>
        <SkillBox>Redux</SkillBox>
        <SkillBox>NodeJS</SkillBox>
        <SkillBox>SQL</SkillBox>
        <SkillBox>TailwindCSS</SkillBox>
      </SkillsFlexContainer>
    </>
  );
};

export default Skills;
