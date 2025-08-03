import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  internal: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  link,
  internal,
}) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul className={styles.techList}>
        {tech.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {internal ? (
        <a rel="noopener noreferrer">Internal Project</a>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
