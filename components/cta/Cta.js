import Link from "next/link";
import "@animxyz/core";
import styles from "./Cta.module.css";

const Cta = () => {
	return (
		<div className={styles.cta + " " + "xyz-in"} xyz="fade in delay-6">
			<div className={styles.text}>
				<h4>Let's work together</h4>
				<p> I am available for fulltime or freelance work. </p>
			</div>
			<div className={styles.buttonContainer}>
				<Link href={"/contact"}>
					<button type="button" className={styles.hvrSweepToRight}>
						Hire Me
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Cta;
