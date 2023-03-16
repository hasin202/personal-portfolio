import {
  CardImg,
  CardInfo,
  CardHeading,
  CardDescription,
  ProjectSkills,
  Icon,
} from "./App.styled";
import github from "../assets/GitHub.svg";
import open from "../assets/open.svg";

const ProjectCard = ({ img, title, skills, description, gitLink, link }) => {
  return (
    <>
      <CardImg src={img} />
      <CardInfo>
        <CardHeading>{title}</CardHeading>
        <ProjectSkills>{skills}</ProjectSkills>
        <CardDescription>{description}</CardDescription>
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
