import BlogCard from "../../components/blogcard/BlogCard";

import Fizzbuzz from "../../assets/fizzbuzz.jpg";
import OOP from "../../assets/oop.jpg";
import Palindrome from "../../assets/palindrome.jpg";
import Hook from "../../assets/react-hooks.jpg";

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
  // send http request to fetch data

  // DUMMY DATA
  const blogs = [
    {
      id: "001",
      title: "Solving Fizz Buzz",
      description:
        "Fizz Buzz is a traditional coding challenge. Here I walked you through my approach to solving the challenge",
      image: Fizzbuzz,
      tag: "coding challenge",
      date: "01 June, 2021",
    },
    {
      id: "002",
      title: "Object Oriented Programming Explained",
      description:
        "I use OOP all the time and I explain here what it means, in simple terms",
      image: OOP,
      tag: "article",
      date: "07 June, 2021",
    },
    {
      id: "003",
      title: "React Hooks",
      description:
        "The most popular and used hooks in the react library are explained in this article",
      image: Hook,
      tag: "article",
      date: "15 June, 2021",
    },
    {
      id: "004",
      title: "Palindrome",
      description:
        "This is a common coding challenge. Read more about how I solved it",
      image: Palindrome,
      tag: "coding challenge",
      date: "18 June, 2021",
    },
  ];

  return {
    props: {
      blogs: blogs, //from dummy data
    },
  };
}

export default Blog;
