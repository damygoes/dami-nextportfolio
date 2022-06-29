import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import {
	Github,
	Email,
	LinkedIn,
	Twitter,
	Instagram,
	ContactImage,
} from "./assets";

import styles from "./Contact.module.css";

const Contact = () => {
	// States for contact form fields
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	// Form validation state
	const [errors, setErrors] = useState({});

	// Setting button text on form submission
	const [buttonText, setButtonText] = useState("Send");

	// Setting success or failure messages states
	const [showSuccessMessage, setShowSuccessMessage] = useState(false);
	const [showFailureMessage, setShowFailureMessage] = useState(false);

	// Form Validation Check
	const handleValidation = () => {
		let tempErrors = {};
		let isValid = true;

		if (name.length <= 0) {
			tempErrors["name"] = true;
			isValid = false;
		}
		if (email.length <= 0) {
			tempErrors["email"] = true;
			isValid = false;
		}
		if (subject.length <= 0) {
			tempErrors["subject"] = true;
			isValid = false;
		}
		if (message.length <= 0) {
			tempErrors["message"] = true;
			isValid = false;
		}

		setErrors({ ...tempErrors });
		console.log("errors", errors);
		return isValid;
	};

	// Handling Form Submit
	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValidForm = handleValidation();

		if (isValidForm) {
			setButtonText("Sending");
			const res = await fetch("/api/sendgrid", {
				body: JSON.stringify({
					name: name,
					email: email,
					subject: subject,
					message: message,
				}),
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
			});

			const { error } = await res.json();
			if (error) {
				console.log(error);
				setShowSuccessMessage(false);
				setShowFailureMessage(true);
				setButtonText("Send");
				return;
			}

			setShowSuccessMessage(true);
			setShowFailureMessage(false);
			setButtonText("Send");

			setEmail(" ");
			setSubject(" ");
			setMessage(" ");
		}
		// console.log(name, email, subject, message);
	};

	return (
		<>
			<div className={styles.contact}>
				<div className={styles.contactMain}>
					<div className={styles.left}>
						<div className={styles.head}>
							<h1>Contact Me</h1>
							<div></div>
						</div>

						<p>
							{" "}
							I am interested in and currently looking for new job
							opportunities. However, if you have any question or request, don't
							hesitate to contact me using the form below or my social network
							links.
						</p>

						<form className={styles.form} onSubmit={handleSubmit}>
							<ul>
								<li className={styles.half}>
									<input
										type="text"
										name="name"
										placeholder="Name"
										required
										onChange={(e) => {
											setName(e.target.value);
											showSuccessMessage && setName(e.target.value === "");
										}}
									/>
								</li>
								<li className={styles.half}>
									<input
										type="text"
										name="email"
										placeholder="Email"
										required
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</li>
								<li className={styles.full}>
									<input
										type="text"
										name="subject"
										placeholder="Subject"
										required
										onChange={(e) => {
											setSubject(e.target.value);
										}}
									/>
								</li>
								<li className={styles.full}>
									<textarea
										placeholder="Message"
										name="message"
										required
										onChange={(e) => {
											setMessage(e.target.value);
										}}
									></textarea>
								</li>
								<div className={styles.buttonContainer}>
									<button type="submit"> {buttonText} </button>
									{showSuccessMessage && (
										<p>Thank you. I will get back to you as soon as possible</p>
									)}
									{showFailureMessage && (
										<p>Unfortunately!, something went wrong</p>
									)}
								</div>
							</ul>
						</form>
					</div>
					<div className={styles.right}>
						<div className={styles.imageContainer}>
							<Image src={ContactImage} />
						</div>
						<div className={styles.socials}>
							<div className={styles.iconContainer}>
								<Link href="mailto:badadamilola@gmx.de">
									<a target="_blank" rel="noreferrer">
										<Image src={Email} />
									</a>
								</Link>
							</div>
							<div className={styles.iconContainer}>
								<Link href="https://www.linkedin.com/in/damilolabada/">
									<a target="_blank" rel="noreferrer">
										<Image src={LinkedIn} />
									</a>
								</Link>
							</div>
							<div className={styles.iconContainer}>
								<Link href="https://github.com/damygoes">
									<a target="_blank" rel="noreferrer">
										<Image src={Github} />
									</a>
								</Link>
							</div>
							<div className={styles.iconContainer}>
								<Link href="https://twitter.com/damygoes">
									<a target="_blank" rel="noreferrer">
										<Image src={Twitter} />
									</a>
								</Link>
							</div>
							<div className={styles.iconContainer}>
								<Link href="https://www.instagram.com/damy.goes/">
									<a target="_blank" rel="noreferrer">
										<Image src={Instagram} />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.footer}>
				<p>
					{" "}
					Designed by <span>Damilola Bada</span>{" "}
				</p>
				<p> &copy;2022 </p>
			</div>
		</>
	);
};

export default Contact;
