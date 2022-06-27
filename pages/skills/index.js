import Image from "next/image";
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
        <p>I use these tools to bring my ideas to reality. </p>
      </div>
      <div className={styles.content}>
        <div className={styles.contentCard}>
          <h4>Frontend</h4>
          <div className={styles.cardGroup}>
            <div>
              <Image src={Nextjs} alt="next-js" />
              <p>Next JS</p>
            </div>
            <div>
              <Image src={Reactjs} alt="react-js" />
              <p>React</p>
            </div>
            <div>
              <Image src={Bootstrap} alt="bootstrap" />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div className={styles.contentCard}>
          <h4>Backend</h4>
          <div className={styles.cardGroup}>
            <div>
              <Image src={Nodejs} alt="node-js" />
              <p>Node JS</p>
            </div>
            <div>
              <Image src={Expressjs} alt="express-js" />
              <p>Express JS</p>
            </div>
            <div>
              <Image src={Mongodb} alt="mongo-db" />
              <p>Mongo DB</p>
            </div>
          </div>
        </div>
        <div className={styles.contentCard}>
          <h4>IDE & Version Control</h4>
          <div className={styles.cardGroup}>
            <div>
              <Image src={Github} alt="github" />
              <p>Github</p>
            </div>
            <div>
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