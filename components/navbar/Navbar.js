import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Logo from "../../assets/logo2.svg";

import styles from "./Navbar.module.css";

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	return (
		<header className={styles.header + " " + "xyz-in"} xyz="fade delay-0.5">
			<Link href="/">
				<div
					className={styles.logo}
					onClick={() => {
						setToggleMenu(false);
					}}
				>
					{" "}
					<Image
						src={Logo}
						alt="logo"
						onClick={() => {
							setToggleMenu(false);
						}}
					/>{" "}
				</div>
			</Link>
			<nav>
				<ul>
					<li className={styles.hvrUnderlineFromLeft}>
						<Link href="/skills"> Skills </Link>
					</li>
					<li className={styles.hvrUnderlineFromLeft}>
						<Link href="/projects"> Projects </Link>
					</li>
					<li className={styles.hvrUnderlineFromLeft}>
						<Link href="/blog"> Blog </Link>
					</li>
					<li className={styles.hvrUnderlineFromLeft}>
						<Link href="/contact"> Contact </Link>
					</li>
				</ul>

				<div className={styles.buttonContainer}>
					<Link href="/contact">
						<button className={styles.hvrSweepToRight}> Hire Me </button>
					</Link>
				</div>
			</nav>
			<div className={styles.mobileContainer}>
				{toggleMenu ? (
					<HiOutlineX size={37} onClick={() => setToggleMenu(false)} />
				) : (
					<HiOutlineMenu size={37} onClick={() => setToggleMenu(true)} />
				)}
				{toggleMenu && (
					<div className={styles.mobileLinks + " " + styles.scaleUpCenter}>
						<div>
							<ul>
								<li
									onClick={() => {
										setToggleMenu(false);
									}}
								>
									<Link href="/skills"> Skills </Link>
								</li>
								<li
									onClick={() => {
										setToggleMenu(false);
									}}
								>
									<Link href="/projects"> Projects </Link>
								</li>
								<li
									onClick={() => {
										setToggleMenu(false);
									}}
								>
									<Link href="/blog"> Blog </Link>
								</li>
								<li
									onClick={() => {
										setToggleMenu(false);
									}}
								>
									<Link href="/contact"> Contact </Link>
								</li>
							</ul>

							<div className={styles.buttonContainer}>
								<Link href="/contact">
									<button> Hire Me </button>
								</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
};

export default Navbar;
