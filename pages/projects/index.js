import { useEffect, useState } from "react";

import ProjectCard from "../../components/projectcard/ProjectCard";

import ProjectOne from "../../assets/project1.jpg";
import ProjectTwo from "../../assets/project2.jpg";
import ProjectThree from "../../assets/project3.jpg";
import ProjectFour from "../../assets/project4.jpg";

import styles from "./Projects.module.css";

const Projects = ({ projects }) => {
  // const [loadedProjects, setLoadedProjects] = useState([]);
  // useEffect(() => {
  //   // send http request to fetch data
  //   setLoadedProjects(projects);
  // }, []);

  return (
    <section className={styles.projects}>
      <div className={styles.head}>
        <h3>My recent projects</h3>
        <div></div>
      </div>
      <div className={styles.body}>
        <ProjectCard projects={projects} />
      </div>
    </section>
  );
};

export async function getStaticProps() {
  // send http request to fetch data

  // DUMMY DATA
  const projects = [
    {
      id: "001",
      title: "Driven",
      description: "A modern e-commerce store",
      image: ProjectOne,
      isDone: true,
      deployed: "https://www.google.com",
      github: "https://github.com/damygoes",
    },
    {
      id: "002",
      title: "SupPR",
      description: "A cycling app",
      image: ProjectFour,

      isDone: true,
      deployed: "https://www.google.com",
      github: "https://github.com/damygoes",
    },
    {
      id: "003",
      title: "Activate",
      description: "An activity app",
      image: ProjectThree,
      isDone: true,
      deployed: "https://www.google.com",
      github: "https://github.com/damygoes",
    },
    {
      id: "004",
      title: "NFT'ed",
      description: "A NFT-based memory game",
      image: ProjectTwo,
      isDone: false,
      deployed: "https://www.google.com",
      github: "https://github.com/damygoes",
    },
  ];

  return {
    props: {
      projects: projects, //from dummy data
    },
  };
}

export default Projects;
