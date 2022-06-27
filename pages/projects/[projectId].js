import { MongoClient, ObjectId } from "mongodb";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { HiOutlineArrowLeft } from "react-icons/hi";

import styles from "./Project.module.css";

const ProjectDetail = ({ project }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div
          onClick={() => {
            router.push("/projects");
          }}
        >
          {" "}
          <HiOutlineArrowLeft
            onClick={() => {
              router.push("/projects");
            }}
          />{" "}
          <p
            onClick={() => {
              router.push("/projects");
            }}
          >
            Back to projects
          </p>{" "}
        </div>
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.head}>
          <h3> {project.title} </h3>
          <p> {project.detail} </p>
        </div>
        <div className={styles.tags}>
          <p>
            {" "}
            Project: <span> {project.description}</span>{" "}
          </p>
          <p>
            {" "}
            Technologies: <span> {project.tech} </span>
          </p>
        </div>
        <div className={styles.linksContainer}>
          <Link href={project.deployed}>
            <a target="_blank" rel="noreferrer">
              {" "}
              <button type="button">live demo</button>
            </a>
          </Link>
          <Link href={project.github}>
            <a target="_blank" rel="noreferrer">
              {" "}
              <button type="button">Github Repo</button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

// We could use useRouter to fetch the project id from the url path and match it to the project id from the data on order to get details for a particular project using it's id. However, useRoute hook or generally react hooks cannot and does not work within the getStaticProps code block, therefore this is not an option. Instead, we use the "context" method which we can use to assess params for our url

export async function getStaticProps(context) {
  // fetch project id from url path
  const projectId = context.params.projectId;

  // connecting to our MongoDB database to fetch data
  const client = await MongoClient.connect(
    "mongodb+srv://damygoes:s72XtMS8P2g6D8UI@cluster0.nf34c.mongodb.net/portfolioData?retryWrites=true&w=majority"
  );

  const db = client.db();
  const projectsCollection = db.collection("projects");
  const project = await projectsCollection.findOne({
    _id: ObjectId(projectId),
  });
  client.close();

  return {
    props: {
      project: {
        id: project._id.toString(),
        title: project.title,
        description: project.description,
        image: project.image,
        isDone: project.isDone,
        deployed: project.deployed,
        github: project.github,
        slug: project.slug,
        detail: project.detail,
        tech: project.tech,
      },
    },
  };
}

export async function getStaticPaths() {
  // connecting to our MongoDB database to fetch data
  const client = await MongoClient.connect(
    "mongodb+srv://damygoes:s72XtMS8P2g6D8UI@cluster0.nf34c.mongodb.net/portfolioData?retryWrites=true&w=majority"
  );
  const db = client.db();
  const portfolio = db.collection("projects");
  const projects = await portfolio.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: projects.map((project) => ({
      params: {
        projectId: project._id.toString(),
      },
    })),
  };
}

export default ProjectDetail;
