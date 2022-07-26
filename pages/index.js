import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
	HiOutlineDownload,
	HiOutlineChevronLeft,
	HiOutlineChevronRight,
} from "react-icons/hi";
import { CgFormatSlash } from "react-icons/cg";
import "@animxyz/core";

import Portrait from "../assets/portrait.png";
import Background from "../assets/background.png";

import styles from "../styles/Home.module.css";

const HomePage = () => {
	return (
		(
			<Head>
				<title>Damilola Bada | Web Developer </title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
		),
		(
			<div className={styles.header}>
				<div className={styles.content + " " + "xyz-in stagger"}>
					<h2 className="xyz-in" xyz="fade in-left duration-2">
						<div></div>
						damilola bada
					</h2>
					<div className={styles.description}>
						<h1 className="xyz-in" xyz="fade in-left delay-1 duration-2">
							web developer & creative thinker
						</h1>
					</div>
					<p className="xyz-in" xyz="fade in-left delay-2 duration-2">
						I am passionate about using various web development tools to create fun
						products that solve problems in various industries. Let&apos;s connect if
						you&apos;re looking for a creative mind to join your team
					</p>
					<div
						className={styles.cta + " " + "xyz-in"}
						xyz="fade in-left delay-3 duration-2"
					>
						<Link href="/contact">
							<a>
								<div className={styles.ctaButtonContainer}>
									<button type="button" className={styles.hvrBuzzOut}>
										Hire Me
									</button>
								</div>
							</a>
						</Link>
						<div className={styles.ctaResumeContainer}>
							<Link href="/Damilola Bada Resume.pdf">
								<a
									target="_blank"
									rel="noopener noreferrer"
									className={styles.hvrBuzzOut}
								>
									Resume <HiOutlineDownload />
								</a>
							</Link>
						</div>
					</div>
					<div
						className={styles.horizontalLine + " " + "xyz-in"}
						xyz="fade delay-4"
					></div>
					<p
						className={styles.headerFooter + " " + "xyz-in"}
						xyz="fade in-left delay-5 duration-2"
					>
						{" "}
						I am currently open for work.
					</p>
				</div>
				<div
					className={styles.headerImageContainer + " " + "xyz-in"}
					xyz="fade flip-right perspective-5 delay-5 duration-2"
				>
					<Image src={Portrait} alt="Dami's Portrait" />
				</div>
				<Link href={"/projects"}>
					<div
						className={styles.pageNav + " " + "xyz-in"}
						xyz="fade in-right delay-6 duration-5"
					>
						<HiOutlineChevronLeft /> <p>portfolio</p> <CgFormatSlash />{" "}
						<HiOutlineChevronRight />
					</div>
				</Link>
				<div className={styles.background}>
					<Image src={Background} alt="shapes background" />
				</div>
			</div>
		)
	);
};

export default HomePage;
