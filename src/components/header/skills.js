import { SkillBox, SkillsFlexContainer } from "./Skills.styled";

const Skills = () => {
  return (
    <>
      <SkillsFlexContainer>
        <SkillBox>NextJS</SkillBox>
        <SkillBox>TypeScript</SkillBox>
        <SkillBox>Express</SkillBox>
        <SkillBox>NodeJS</SkillBox>
        <SkillBox>Supabase</SkillBox>
        <SkillBox>SQL</SkillBox>
        <SkillBox>TailwindCSS</SkillBox>
      </SkillsFlexContainer>
    </>
  );
};

export default Skills;
