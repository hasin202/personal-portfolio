import {
  CardImg,
  CardInfo,
  CardHeading,
  ProjectDescription,
  ProjectSkills,
  Icon,
} from "./Projects.styled";
import github from "../../assets/GitHub.svg";
import open from "../../assets/open.svg";

const ProjectCard = ({ img, title, skills, description, gitLink, link }) => {
  return (
    <>
      <CardImg src={img} />
      <CardInfo>
        <CardHeading>{title}</CardHeading>
        <ProjectSkills>{skills}</ProjectSkills>
        <ProjectDescription>{description}</ProjectDescription>
        <a href={gitLink}>
          <Icon src={github} />
        </a>
        <a href={link}>
          <Icon src={open} />
        </a>
      </CardInfo>
    </>
  );
};

export default ProjectCard;
