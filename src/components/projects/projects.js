import { SectionHeading } from "../App.styled";
import ProjectCard from "./projectcard";
import breathe from "../../assets/breathe.svg";
import portfolio from "../../assets/portfolio.svg";

const Projects = () => {
  const projects = [
    {
      img: breathe,
      title: "breathe.",
      skills: "ReactJS, Express, Vercel, TailwindCSS, Supabase",
      description:
        "An IoT dashboard designed to display sensor readings from an Arduino in an easy to understand way accompanied by a chart so that users can visualise trends.",
      gitLink: "https://github.com/CO2Sesnsor/breathe.",
      link: "https://breathe-front-end.vercel.app/",
    },
    {
      img: portfolio,
      title: "hasin.io",
      skills: "ReactJS, Styled Components, Vercel, Figma",
      description:
        "Figured it was about time I made a portfolio to show my skills and stand out. ",
      gitLink: "https://github.com/hasin202/personal-portfolio",
      link: "",
    },
  ];
  return (
    <>
      <SectionHeading padding="140px">My Projects</SectionHeading>
      {projects.map((project, index) => {
        return <ProjectCard {...project} key={index} />;
      })}
    </>
  );
};

export default Projects;
