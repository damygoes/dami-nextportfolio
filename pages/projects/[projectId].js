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

// We need to be able to access the projectID fron the Url path and we could use useRouter to fetch the project id from the url path and match it to the project id from the data on order to get details for a particular project using it's id. However, useRoute hook or generally react hooks cannot and does not work within the getStaticProps code block, therefore this is not an option. Instead, we use the "context" method which we can use to assess params for our url

export async function getStaticProps(context) {
	// fetch project id from url path
	const projectId = context.params.projectId;

	// connecting to our MongoDB database to fetch data for just one project
	const client = await MongoClient.connect(
		`mongodb+srv://damygoes:${process.env.DB_PASSWORD}@cluster0.nf34c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
	);

	const db = client.db();
	const projectsCollection = db.collection("projects");
	const project = await projectsCollection.findOne({
		_id: ObjectId(projectId), //the projectId needs to be objectified, so it can be the same and comparable to what we have in the MongoDB database
	});
	client.close();

	return {
		props: {
			project: {
				//we don't need to use .map here because we are fetching only one project item. We only need to return all the properties related to a project item and convert _id back to string
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

// this helps dynamically fetch details for one blog post. However, we need to specify all possible paths in the paths array, as well as a fallback option. If fallback = true, that means not all possible paths are added/considered and if the client visits any path that is not in the array, the server will try to automatically generate content for such path. However, if fallback = false, that means all possible paths are defined/registered in our paths array and if the client visits any route/path that is not defined in the array, the server will return a 404 error.
export async function getStaticPaths() {
	// connecting to our MongoDB database to fetch data
	const client = await MongoClient.connect(
		`mongodb+srv://damygoes:${process.env.DB_PASSWORD}@cluster0.nf34c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
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
