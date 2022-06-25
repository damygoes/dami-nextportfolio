import Image from "next/image";
import Link from "next/link";

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

            <form className={styles.form}>
              <ul>
                <li className={styles.half}>
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className={styles.half}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className={styles.full}>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li className={styles.full}>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <div className={styles.buttonContainer}>
                  <button type="submit"> send </button>
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
