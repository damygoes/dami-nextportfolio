import Image from "next/image";
import "@animxyz/core";
import Cta from "../../components/cta/Cta";
import {
	Bootstrap,
	Expressjs,
	Github,
	Mongodb,
	Nodejs,
	Reactjs,
	VSCode,
	Nextjs,
} from "./assets";

import styles from "./Skills.module.css";

const Skills = () => {
	return (
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
				<div className={styles.contentCard}>
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
				</div>
			</div>
			<Cta />
		</section>
	);
};

export default Skills;
