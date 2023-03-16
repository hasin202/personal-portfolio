import { SkillBox, SkillsFlexContainer } from "./Skills.styled";

const Skills = () => {
  return (
    <>
      <SkillsFlexContainer>
        <SkillBox>React</SkillBox>
        <SkillBox>Express</SkillBox>
        <SkillBox>NodeJS</SkillBox>
        <SkillBox>Supabase</SkillBox>
        <SkillBox>Figma</SkillBox>
        <SkillBox>TailwindCSS</SkillBox>
      </SkillsFlexContainer>
    </>
  );
};

export default Skills;
