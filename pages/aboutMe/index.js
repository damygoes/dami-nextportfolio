import Link from "next/link";
import Image from "next/image";
import "@animxyz/core";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { CgFormatSlash } from "react-icons/cg";

import LinkedIn from "../../assets/linkedin-app.svg";
import Twitter from "../../assets/twitter-app.svg";
import Instagram from "../../assets/ig-instagram.svg";
import Github from "../../assets/github.svg";
import ME1 from "../../assets/me1.jpg";
import Portrait from "../../assets/portrait.png";
import styles from "./Aboutme.module.css";
// import ME2 from "../../assets/me2.jpg";
// import ME3 from "../../assets/me3.jpg";
// import ME4 from "../../assets/me4.jpg";
// import ME5 from "../../assets/me5.jpg";

const Aboutme = () => {
	return (
		<section className={styles.aboutMe}>
			<div className={styles.title}>
				<h3 className="xyz-in" xyz="fade in-left duration-2">
					About Me
				</h3>
				<div className="xyz-in" xyz="fade in-right delay-1 duration-2"></div>
			</div>
			<section className={styles.main}>
				<div className={styles.content}>
					<p className={styles.text}>
						My name is <span>Damilola Bada</span>. I am a motivated and goal-oriented
						front-end developer. I am passionate about building intuitive,
						user-friendly and yet creative web applications. I am focused on providing
						pixel-perfect designs and writing clean code. In addition, I have a
						curious personality that makes me crave knowledge and self-development and
						learn from every challenge I encounter.
					</p>
					<p className={styles.text}>
						With an environmental science background and experience in the finance
						industry, I have learned how to work in high-pressure situations, deal
						with demanding clients and requests, manage available resources, provide
						creative solutions, contribute to teamwork and collaborate with others.
					</p>
				</div>
				<div className={styles.portraitOne}>
					<Image
						src={Portrait}
						alt="Dami's Portrait"
						layout="responsive"
						objectFit="contain"
						className="xyz-in"
						xyz="fade flip-left perspective-5 delay-1 duration-5"
					/>
				</div>
				<p className={styles.discoveryText + " " + styles.text}>
					I discovered web development while exploring how to create a journal for my
					cycling adventures. As a result, I decided to change my career path and use
					my transferable skills to pursue a career as a Front-end Developer.
				</p>
				<div className={styles.portraitTwo}>
					<Image
						src={ME1}
						alt="Dami's Portrait"
						layout="responsive"
						objectFit="contain"
						className="xyz-in"
						xyz="fade flip-left perspective-5 delay-1 duration-5"
					/>
				</div>
				<p className={styles.goalText + " " + styles.text}>
					I aim to continue learning and refining my skills while seeking
					collaboration with other developers and opportunities to work in an
					inclusive team that promotes professional growth, empathy and creativity.
				</p>
			</section>
			<div className={styles.socials}>
				<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
					check out my socials:
				</p>
				<div className={styles.iconContainer}>
					<Link href="https://www.linkedin.com/in/damilolabada/">
						<a
							target="_blank"
							rel="noreferrer"
							className="xyz-in"
							xyz="fade front flip-left delay-4 duration-2"
						>
							<Image src={LinkedIn} alt="LinkedIn Logo" />
						</a>
					</Link>
				</div>
				<div className={styles.iconContainer}>
					<Link href="https://github.com/damygoes">
						<a
							target="_blank"
							rel="noreferrer"
							className="xyz-in"
							xyz="fade front flip-left delay-6 duration-2"
						>
							<Image src={Github} alt="Github Logo" />
						</a>
					</Link>
				</div>
				<div className={styles.iconContainer}>
					<Link href="https://twitter.com/damygoes">
						<a
							target="_blank"
							rel="noreferrer"
							className="xyz-in"
							xyz="fade front flip-left delay-8 duration-2"
						>
							<Image src={Twitter} alt="TwitterLogo" />
						</a>
					</Link>
				</div>
				<div className={styles.iconContainer}>
					<Link href="https://www.instagram.com/damy.goes/">
						<a
							target="_blank"
							rel="noreferrer"
							className="xyz-in"
							xyz="fade front flip-left delay-10 duration-2"
						>
							<Image src={Instagram} alt="Instagram Logo" />
						</a>
					</Link>
				</div>
			</div>
			<Link href={"/projects"}>
				<div
					className={styles.pageBackNav + " " + "xyz-in"}
					xyz="fade in-left delay-6 duration-5"
				>
					<HiOutlineChevronLeft /> <p>portfolio</p> <CgFormatSlash />
					<HiOutlineChevronRight />
				</div>
			</Link>
		</section>
	);
};

{
	/* <Link href={"/blog"}>
				<div
					className={styles.pageNav + " " + "xyz-in"}
					xyz="fade in-right delay-6 duration-5"
				>
					<HiOutlineChevronLeft /> <p>blog</p> <CgFormatSlash />{" "}
					<HiOutlineChevronRight />
				</div>
			</Link> */
}

export default Aboutme;
