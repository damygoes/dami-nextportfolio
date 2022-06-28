import Image from "next/image";
import Link from "next/link";
import { HiOutlineDownload } from "react-icons/hi";

import Portrait from "../assets/portrait.jpg";

import styles from "../styles/Home.module.css";

const HomePage = () => {
	return (
		<div className={styles.header}>
			<div className={styles.content}>
				<h2>
					<div></div>
					damilola bada
				</h2>
				<div className={styles.description}>
					<h1>web developer & creative thinker</h1>
				</div>
				<p>
					I am passionate about using various web development tools to create
					fun products that solve problems in various industries. Let's connect
					if you're looking for a creative mind to join your team
				</p>
				<div className={styles.cta}>
					<div className={styles.ctaButtonContainer}>
						<button type="button">Hire Me</button>
					</div>
					<div className={styles.ctaResumeContainer}>
						<Link href="https://drive.google.com/file/d/1pOHoa9EKXqd2i3ST0V4Y8a-Zl3NLZDds/view?usp=sharing">
							<a target="_blank" rel="noopener noreferrer">
								Resume <HiOutlineDownload />
							</a>
						</Link>
					</div>
				</div>
				<div className={styles.horizontalLine}></div>
				<p className={styles.headerFooter}> I am currently open for work.</p>
			</div>
			<div className={styles.headerImageContainer}>
				<Image src={Portrait} alt="Dami's Portrait" />
			</div>
		</div>
	);
};

export default HomePage;
