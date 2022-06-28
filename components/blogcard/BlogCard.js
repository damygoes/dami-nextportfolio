import Image from "next/image";
import Link from "next/link";

import styles from "./Blogcard.module.css";

const BlogCard = ({ blogs }) => {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <Link href={`blog/${blog.id}`}>
            <div className={styles.blogcard} key={blog.id}>
              <div className={styles.imageContainer}>
                <Image src={blog.image}  width={300}
                  height={300}/>
              </div>
              <div className={styles.blogContent}>
                <h4> {blog.title} </h4>
                <p> {blog.description} </p>
                <div className={styles.blogTags}>
                  <p>
                    <span>{blog.date}</span>
                  </p>
                  <p>
                    Tag: <span>{blog.tag}</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BlogCard;
