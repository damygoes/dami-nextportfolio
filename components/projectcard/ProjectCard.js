import Image from "next/image";
import Link from "next/link";

import { GrGithub } from "react-icons/gr";
import { HiOutlineEye } from "react-icons/hi";

import ProjectOne from "../../assets/project1.jpg";
import ProjectTwo from "../../assets/project2.jpg";
import ProjectThree from "../../assets/project3.jpg";
import ProjectFour from "../../assets/project4.jpg";
import ComingSoon from "../../assets/coming-soon.svg";
import styles from "./Projectcard.module.css";

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

/* NOTE:
() => {} explicit returning, we must use the return keyword to return something
() =>  () implicit return, everything inside the braces will be returned
*/

const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => {
        return project.isDone ? (
          <div className={styles.projectCard} key={project.id}>
            <div className={styles.imageContainer}>
              <Image src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h4> {project.title} </h4>
              <p> {project.description} </p>
              <div className={styles.projectLinks}>
                <Link href="#" target="_blank" rel="noreferrer">
                  <HiOutlineEye />
                </Link>
                <Link href="#" target="_blank" rel="noreferrer">
                  <GrGithub />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.comingSoon} key={project.id}>
            <div className={styles.imageContainer}>
              <Image src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h4> {project.title} </h4>
              <p> {project.description} </p>
              <div className={styles.projectLinks}>
                <Link href="#" target="_blank" rel="noreferrer">
                  <HiOutlineEye />
                </Link>
                <Link href="#" target="_blank" rel="noreferrer">
                  <GrGithub />
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCard;
