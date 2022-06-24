import ProjectCard from "../../components/projectcard/ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.head}>
        <h3>My recent projects</h3>
        <div></div>
      </div>
      <div className={styles.body}>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
