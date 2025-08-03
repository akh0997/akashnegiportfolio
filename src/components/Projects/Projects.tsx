import { PROJECT_LIST } from "@/lib/constant/constant";
import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {PROJECT_LIST.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
