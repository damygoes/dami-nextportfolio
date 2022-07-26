import Link from "next/link";
import Image from "next/image";
import { MongoClient } from "mongodb";
import "@animxyz/core";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { CgFormatSlash } from "react-icons/cg";

import ProjectCard from "../../components/projectcard/ProjectCard";

import Bootstrap from "../../assets/bootstrap-5-logo.svg";
import Expressjs from "../../assets/expressjs.svg";
import Mongodb from "../../assets/mongodb.svg";
import Nodejs from "../../assets/node-js.svg";
import Reactjs from "../../assets/react-js.svg";
import Tailwind from "../../assets/tailwindcss.svg";
import Nextjs from "../../assets/nextjs.svg";

import styles from "./Projects.module.css";

const Projects = ({ projects }) => {
	// const [loadedProjects, setLoadedProjects] = useState([]);
	// useEffect(() => {
	//   // send http request to fetch data
	//   setLoadedProjects(projects);
	// }, []);

	return (
		<div className={styles.pageContainer}>
			<div className={styles.head}>
				<h3 className="xyz-in" xyz="fade in-left duration-2">
					My recent projects
				</h3>
				<div className="xyz-in" xyz="fade in-right delay-1 duration-2"></div>
			</div>
			<section className={styles.skills}>
				<div className={styles.title}>
					{/* <h3>Skills</h3> */}
					<p className="xyz-in" xyz="fade in-left duration-2">
						I use these tools to bring my ideas to reality.{" "}
					</p>
				</div>
				<div className={styles.content}>
					<div className={styles.contentCard}>
						<h4 className="xyz-in" xyz="fade in-left delay-2 duration-2">
							Frontend
						</h4>
						<div className={styles.cardGroup}>
							<div className="xyz-in" xyz="fade front flip-left delay-3 duration-2">
								<Image src={Nextjs} alt="next-js" />
								<p>Next JS</p>
							</div>
							<div className="xyz-in" xyz="fade front flip-left delay-4 duration-2">
								<Image src={Reactjs} alt="react-js" />
								<p>React</p>
							</div>
							<div className="xyz-in" xyz="fade front flip-left delay-5 duration-2">
								<Image src={Bootstrap} alt="bootstrap" />
								<p>Bootstrap</p>
							</div>
							<div className="xyz-in" xyz="fade front flip-left delay-5 duration-2">
								<Image src={Tailwind} alt="tailwind-css" />
								<p>Tailwind CSS</p>
							</div>
						</div>
					</div>
					<div className={styles.contentCard}>
						<h4 className="xyz-in" xyz="fade in-left delay-2 duration-2">
							Backend
						</h4>
						<div className={styles.cardGroup}>
							<div className="xyz-in" xyz="fade front flip-left delay-3 duration-2">
								<Image src={Nodejs} alt="node-js" />
								<p>Node JS</p>
							</div>
							<div className="xyz-in" xyz="fade front flip-left delay-3 duration-2">
								<Image src={Expressjs} alt="express-js" />
								<p>Express JS</p>
							</div>
							<div className="xyz-in" xyz="fade front flip-left delay-3 duration-2">
								<Image src={Mongodb} alt="mongo-db" />
								<p>Mongo DB</p>
							</div>
						</div>
					</div>
					{/* <div className={styles.contentCard}>
						<h4 className="xyz-in" xyz="fade in-left delay-2 duration-2">
							IDE & Version Control
						</h4>
						<div className={styles.cardGroup}>
							<div className="xyz-in" xyz="fade front flip-left delay-3 duration-2">
								<Image src={Github} alt="github" />
								<p>Github</p>
							</div>
							<div className="xyz-in" xyz="fade front flip-left delay-3 duration-2">
								<Image src={VSCode} alt="visual-studio-code" />
								<p>Visual Studio Code</p>
							</div>
						</div>
					</div> */}
				</div>
				{/* <Link href={"/"}>
					<div
						className={styles.pageBackNav + " " + "xyz-in"}
						xyz="fade in-left delay-6 duration-5"
					>
						<HiOutlineChevronLeft /> <p>home</p> <CgFormatSlash />{" "}
						<HiOutlineChevronRight />
					</div>
				</Link>
				<Link href={"/projects"}>
					<div
						className={styles.pageNav + " " + "xyz-in"}
						xyz="fade in-right delay-6 duration-5"
					>
						<HiOutlineChevronLeft /> <p>projects</p> <CgFormatSlash />{" "}
						<HiOutlineChevronRight />
					</div>
				</Link> */}
			</section>
			<section className={styles.projects}>
				<div className={styles.cardContainer}>
					<ProjectCard projects={projects} />
				</div>
				<Link href={"/"}>
					<div
						className={styles.pageBackNav + " " + "xyz-in"}
						xyz="fade in-left delay-6 duration-5"
					>
						<HiOutlineChevronLeft /> <p>home</p> <CgFormatSlash />
						<HiOutlineChevronRight />
					</div>
				</Link>
				<Link href={"/aboutMe"}>
					<div
						className={styles.pageNav + " " + "xyz-in"}
						xyz="fade in-right delay-6 duration-5"
					>
						<HiOutlineChevronLeft /> <p>aboutMe</p> <CgFormatSlash />
						<HiOutlineChevronRight />
					</div>
				</Link>
			</section>
		</div>
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
				slug: project.slug,
				tech: project.tech,
				id: project._id.toString(),
			})),
		},
	};
}

export default Projects;
