import styles from "./Cta.module.css";

const Cta = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.text}>
        <h4>Let's work together</h4>
        <p> I am available for fulltime or freelance. </p>
      </div>
      <div className={styles.buttonContainer}>
        <button type="button">Hire Me</button>
      </div>
    </div>
  );
};

export default Cta;
