import Navbar from "../navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = (props) => {
  return (
    <div>
      <Navbar />
      <main className={styles.main}> {props.children} </main>
    </div>
  );
};

export default Layout;
