import BlogCard from "../../components/blogcard/BlogCard";

import styles from "./Blog.module.css";

const Blog = () => {
  return (
    <section className={styles.blog}>
      <div className={styles.bloghead}>
        <h3>My Blog</h3>
        <div></div>
      </div>
      <div className={styles.blogbody}>
        <BlogCard />
      </div>
    </section>
  );
};

export default Blog;
