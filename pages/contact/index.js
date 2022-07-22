import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import "@animxyz/core";

import {
	Github,
	Email,
	LinkedIn,
	Twitter,
	Instagram,
	ContactImage,
	ContactImagePNG,
} from "./assets";

import styles from "./Contact.module.css";

const Contact = () => {
	const router = useRouter();

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

			// setEmail(" ");
			// setSubject(" ");
			// setMessage(" ");
			setTimeout(() => {
				router.push("/");
			}, 1500);
		}
		// console.log(name, email, subject, message);
	};

	return (
		<>
			<div className={styles.contact}>
				<div className={styles.contactMain}>
					<div className={styles.left}>
						<div className={styles.head}>
							<h1 className="xyz-in" xyz="fade in-left duration-2">
								Contact Me
							</h1>
							<div className="xyz-in" xyz="fade in-right delay-1 duration-2"></div>
						</div>

						<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
							{" "}
							I am interested in and currently looking for new job opportunities.
							However, if you have any question or request, don't hesitate to contact
							me using the form below or my social network links.
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
										className="xyz-in"
										xyz="fade in delay-4 duration-2"
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
										className="xyz-in"
										xyz="fade in delay-5 duration-2"
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
										className="xyz-in"
										xyz="fade in delay-6 duration-2"
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
										className="xyz-in"
										xyz="fade in delay-7 duration-2"
									></textarea>
								</li>
								<div className={styles.buttonContainer}>
									<button
										type="submit"
										className={"xyz-in"}
										xyz="fade in-left delay-5 duration-2"
									>
										{buttonText}
									</button>
									{showSuccessMessage && (
										<p>Thank you. I will get back to you as soon as possible</p>
									)}
									{showFailureMessage && <p>Unfortunately!, something went wrong</p>}
								</div>
							</ul>
						</form>
					</div>
					<div className={styles.right}>
						<div
							className={styles.imageContainer + " " + "xyz-in"}
							xyz="fade flip-right perspective-5 delay-3 duration-2"
						>
							<Image src={ContactImagePNG} />
						</div>
						<div className={styles.socials}>
							<div className={styles.iconContainer}>
								<Link href="mailto:badadamilola@gmx.de">
									<a
										target="_blank"
										rel="noreferrer"
										className="xyz-in"
										xyz="fade front flip-left delay-2 duration-2"
									>
										<Image src={Email} />
									</a>
								</Link>
							</div>
							<div className={styles.iconContainer}>
								<Link href="https://www.linkedin.com/in/damilolabada/">
									<a
										target="_blank"
										rel="noreferrer"
										className="xyz-in"
										xyz="fade front flip-left delay-4 duration-2"
									>
										<Image src={LinkedIn} />
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
										<Image src={Github} />
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
										<Image src={Twitter} />
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
										<Image src={Instagram} />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.divider + " " + "xyz-in"} xyz="fade delay-4"></div>
			<div className={styles.footer}>
				<p className="xyz-in" xyz="fade in delay-6">
					{" "}
					Designed by <span>Damilola Bada</span>{" "}
				</p>
				<p> &copy;2022 </p>
			</div>
		</>
	);
};

export default Contact;
