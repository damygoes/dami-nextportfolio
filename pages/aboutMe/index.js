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
import ME2 from "../../assets/me2.jpg";
import ME3 from "../../assets/me3.jpg";
import ME4 from "../../assets/me4.jpg";
import ME5 from "../../assets/me5.jpg";

import Portrait from "../../assets/portrait.png";

import styles from "./Aboutme.module.css";

const Aboutme = () => {
	return (
		<section className={styles.aboutMe}>
			<div className={styles.title}>
				<h3 className="xyz-in" xyz="fade in-left duration-2">
					About Me
				</h3>
				<div className="xyz-in" xyz="fade in-right delay-1 duration-2"></div>
			</div>
			<section className={styles.upper}>
				<div className={styles.left}>
					<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
						My name is <span>Damilola Bada</span>. I have a background in
						Environmental Science and experience in marketing and selling a brand.
						These have influenced my
						<span>curious, creative and competitive approach</span> to solving
						problems.
					</p>
					<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
						As a former Marketing Manager, I learned that the most efficient way to
						grow a brand&apos;s influence and profit is by providing a great customer
						and <span>user experience</span>. With this strategy; combined with my
						data analysis skills, I increased my team&apos;s profit by 21%. My
						continued interest in <span>delivering top-notch user experience</span>,
						and my <span>passion for learning and development</span>, led me to pursue
						<span>web development</span> as a career.
					</p>
					<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
						I have a great passion for building
						<span>mordern, creative and dynamic</span>
						websites, applications and products for the web. I also enjoy the
						challenge of <span>learning and working with different technologies</span>
						because, there is no one tool that fits all situation.
					</p>
					<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
						When I&apos;m not working, I am either riding my race bike, gracing events
						as a Disc Jockey (DJ), playing video games or spending time with my wife
						and daughter.
					</p>

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
				</div>
				<div className={styles.right}>
					<div className={styles.card}>
						<Image
							src={ME5}
							alt="Dami's Portrait"
							className="xyz-in"
							xyz="fade flip-left perspective-5 delay-1 duration-5"
						/>
					</div>
					<div className={styles.card}>
						<Image
							src={ME1}
							alt="Dami's Portrait"
							className="xyz-in"
							xyz="fade flip-left perspective-5 delay-3 duration-5"
						/>
					</div>
					<div className={styles.card}>
						<Image
							src={ME2}
							alt="Dami's Portrait"
							className="xyz-in"
							xyz="fade flip-right perspective-5 delay-7 duration-5"
						/>
					</div>
					<div className={styles.card}>
						<Image
							src={ME3}
							alt="Dami's Portrait"
							className="xyz-in"
							xyz="fade flip-left perspective-5 delay-5 duration-5"
						/>
					</div>
				</div>
			</section>
			<Link href={"/projects"}>
				<div
					className={styles.pageBackNav + " " + "xyz-in"}
					xyz="fade in-left delay-6 duration-5"
				>
					<HiOutlineChevronLeft /> <p>portfolio</p> <CgFormatSlash />
					<HiOutlineChevronRight />
				</div>
			</Link>
			<Link href={"/blog"}>
				<div
					className={styles.pageNav + " " + "xyz-in"}
					xyz="fade in-right delay-6 duration-5"
				>
					<HiOutlineChevronLeft /> <p>blog</p> <CgFormatSlash />{" "}
					<HiOutlineChevronRight />
				</div>
			</Link>
		</section>
	);
};

export default Aboutme;