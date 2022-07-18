import Link from "next/link";
import { createClient } from "contentful";
import "@animxyz/core";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { CgFormatSlash } from "react-icons/cg";

import BlogCard from "../../components/blogcard/BlogCard";

import styles from "./Blog.module.css";

const Blog = ({ blogs }) => {
	console.log(blogs);
	return (
		<section className={styles.blog}>
			<div className={styles.bloghead}>
				<h3 className="xyz-in" xyz="fade in-left duration-2">
					My Development Logbook
				</h3>
				<div className="xyz-in" xyz="fade in-right delay-1 duration-2"></div>
			</div>
			<div className={styles.blogbody}>
				{blogs.map((blog) => (
					<BlogCard blog={blog} key={blog.sys.id} />
				))}
			</div>
			<Link href={"/projects"}>
				<div
					className={styles.pageBackNav + " " + "xyz-in"}
					xyz="fade in-left delay-6 duration-5"
				>
					<HiOutlineChevronLeft /> <p>projects</p> <CgFormatSlash />{" "}
					<HiOutlineChevronRight />
				</div>
			</Link>
			<Link href={"/contact"}>
				<div
					className={styles.pageNav + " " + "xyz-in"}
					xyz="fade in-right delay-6 duration-5"
				>
					<HiOutlineChevronLeft /> <p>contact</p> <CgFormatSlash />{" "}
					<HiOutlineChevronRight />
				</div>
			</Link>
		</section>
	);
};

export async function getStaticProps() {
	// connecting to our MongoDB database to fetch data
	// const client = await MongoClient.connect(
	// 	`mongodb+srv://damygoes:${process.env.DB_PASSWORD}@cluster0.nf34c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
	// );

	// const db = client.db();
	// const blogData = db.collection("blog");
	// const blogs = await blogData.find({}).toArray();
	// client.close();

	// connecting to Contentful database to fetch data
	const client = createClient({
		space: process.env.SPACE_ID,
		accessToken: process.env.CONTENT_DELIVERY_API_TOKEN,
	});

	const blogs = await client.getEntries({ content_type: "blog" });
	// console.log(blogs);

	return {
		props: {
			blogs: blogs.items,
			// blogs: blogs.map((blog) => ({
			// 	title: blog.title,
			// 	description: blog.description,
			// 	image: blog.image,
			// 	tag: blog.tag,
			// 	date: blog.date,
			// 	slug: blog.slug,
			// 	author: blog.author,
			// 	authorImage: blog.authorImage,
			// 	summary: blog.summary,
			// 	id: blog._id.toString(),
			// })), //from MongoDB
		},
	};
}

export default Blog;
