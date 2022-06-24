import Image from "next/image";
import Link from "next/link";

import Fizzbuzz from "../../assets/fizzbuzz.jpg";
import OOP from "../../assets/oop.jpg";
import Palindrome from "../../assets/palindrome.jpg";
import Hook from "../../assets/react-hooks.jpg";

import styles from "./Blogcard.module.css";

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

const BlogCard = () => {
  return (
    <>
      {blogs.map((blog) => {
        return (
          <Link href="#" target="_blank" rel="noreferrer">
            <div className={styles.blogcard} key={blog.id}>
              <div className={styles.imageContainer}>
                <Image src={blog.image} />
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
