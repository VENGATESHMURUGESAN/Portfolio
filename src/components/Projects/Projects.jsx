import projects from "../Data/projects.json";
import { ProjectCard } from "./ProjectCard";
import "./projects.scss";

const baseCls = "projects";
export const Projects = () => {
  const renderProjectCard = () => {
    return projects.map((project, id) => {
      return <ProjectCard key={id} project={project} />;
    });
  };

  return (
    <section className={`${baseCls}__container`} id="projects">
      <h2 className={`${baseCls}__title`}>Projects</h2>
      <div className={`${baseCls}__projects`}>{renderProjectCard()}</div>
    </section>
  );
};
