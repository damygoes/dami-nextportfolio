import { MongoClient } from "mongodb";

import "@animxyz/core";

import ProjectCard from "../../components/projectcard/ProjectCard";

// import ProjectOne from "../../assets/project1.jpg";
// import ProjectTwo from "../../assets/project2.jpg";
// import ProjectThree from "../../assets/project3.jpg";
// import ProjectFour from "../../assets/project4.jpg";

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
				<h3 className="xyz-in" xyz="fade in-left duration-5">
					My recent projects
				</h3>
				<div className="xyz-in" xyz="fade in-right delay-1 duration-5"></div>
			</div>
			<div className={styles.body}>
				<ProjectCard projects={projects} />
			</div>
		</section>
	);
};

export async function getStaticProps() {
	// connecting to our MongoDB database to fetch data
	const client = await MongoClient.connect(
		`mongodb+srv://damygoes:${process.env.DB_PASSWORD}@cluster0.nf34c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
	);

	const db = client.db();
	const portfolio = db.collection("projects");
	const projects = await portfolio.find({}).toArray();
	client.close();

	return {
		props: {
			projects: projects.map((project) => ({
				title: project.title,
				description: project.description,
				image: project.image,
				isDone: project.isDone,
				deployed: project.deployed,
				github: project.github,
				id: project._id.toString(),
			})),
		},
	};
}

export default Projects;
