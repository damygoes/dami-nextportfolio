import { MongoClient } from "mongodb";



import BlogCard from "../../components/blogcard/BlogCard";

// import Fizzbuzz from "../../assets/fizzbuzz.jpg";
// import OOP from "../../assets/oop.jpg";
// import Palindrome from "../../assets/palindrome.jpg";
// import Hook from "../../assets/react-hooks.jpg";

import styles from "./Blog.module.css";

const Blog = ({ blogs }) => {
  return (
    <section className={styles.blog}>
      <div className={styles.bloghead}>
        <h3>My Blog</h3>
        <div></div>
      </div>
      <div className={styles.blogbody}>
        <BlogCard blogs={blogs} />
      </div>
    </section>
  );
};

export async function getStaticProps() {
  // connecting to our MongoDB database to fetch data
  const client = await MongoClient.connect(`mongodb+srv://damygoes:${process.env.DB_PASSWORD}@cluster0.nf34c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`);

  const db = client.db();
  const blogData = db.collection("blog");
  const blogs = await blogData.find({}).toArray();
  client.close();

  

  return {
    props: {
      blogs: blogs.map((blog)=>({
        title: blog.title,
        description: blog.description,
        image: blog.image,
        tag: blog.tag,
        date: blog.date,
        slug: blog.slug,
        author: blog.author,
        authorImage: blog.authorImage,
        summary: blog.summary,
        id: blog._id.toString(),
      })) //from MongoDB
    },
  };
}

export default Blog;
