import Image from "next/image";
import Link from "next/link";

import { GrGithub } from "react-icons/gr";
import { HiOutlineEye } from "react-icons/hi";

// import ProjectOne from "../../assets/project1.jpg";
// import ProjectTwo from "../../assets/project2.jpg";
// import ProjectThree from "../../assets/project3.jpg";
// import ProjectFour from "../../assets/project4.jpg";
import styles from "./Projectcard.module.css";

/* NOTE:
() => {} explicit returning, we must use the return keyword to return something
() =>  () implicit return, everything inside the braces will be returned
*/

const ProjectCard = ({ projects }) => {
  return (
    <>
      {projects.map((project) => {
        return project.isDone ? (
          <Link href={`projects/${project.id}`}>
            <div className={styles.projectCard} key={project.id}>
              <div className={styles.imageContainer}>
                <Image src={project.image} alt={project.title} />
              </div>
              <div className={styles.projectContent}>
                <h4> {project.title} </h4>
                <p> {project.description} </p>
                <div className={styles.projectLinks}>
                  <Link
                    href={project.deployed}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <HiOutlineEye />
                  </Link>
                  <Link href={project.github} target="_blank" rel="noreferrer">
                    <GrGithub />
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <div className={styles.comingSoon} key={project.id}>
            <div className={styles.imageContainer}>
              <Image src={project.image} alt={project.title} />
            </div>
            <div className={styles.projectContent}>
              <h4> {project.title} </h4>
              <p> {project.description} </p>
              <div className={styles.projectLinks}>
                <Link href={project.deployed} target="_blank" rel="noreferrer">
                  <HiOutlineEye />
                </Link>
                <Link href={project.github} target="_blank" rel="noreferrer">
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

// This function gets called at build time
// export async function getStaticProps() {
// Call an external API endpoint to get posts
// const res = await fetch("https://.../posts");
// const posts = await res.json();

// DUMMY DATA

// By returning { props: { posts } }, the Blog component
// will receive `posts` as a prop at build time
// return {
//   props: {
//     projects,
//   },
// };
// }

export default ProjectCard;
