import Link from "next/link";
import Image from "next/image";
import { createClient } from "contentful";
import "@animxyz/core";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { CgFormatSlash } from "react-icons/cg";

import BlogCard from "../../components/blogcard/BlogCard";

// import {
// 	Github,
// 	LinkedIn,
// 	Twitter,
// 	Instagram,
// 	ME1,
// 	ME2,
// 	ME3,
// 	ME4,
// 	ME5,
// } from "./assets";

import styles from "./Blog.module.css";

const Blog = ({ blogs }) => {
	// const [width, setWidth] = useState(0);
	// const carouselContainer = useRef();

	// useEffect(() => {
	// 	// console.log(
	// 	// 	carouselContainer.current.scrollWidth,
	// 	// 	carouselContainer.current.offsetWidth
	// 	// );
	// 	setWidth(
	// 		carouselContainer.current.scrollWidth,
	// 		carouselContainer.current.offsetWidth
	// 	);
	// }, []);
	return (
		<section className={styles.blog}>
			<section className={styles.bloghead}>
				<h3 className="xyz-in" xyz="fade in-left duration-2">
					My Blog
				</h3>
				<div className="xyz-in" xyz="fade in-right delay-1 duration-2"></div>
			</section>
			<section className={styles.blogbody}>
				{blogs.map((blog) => (
					<BlogCard blog={blog} key={blog.sys.id} />
				))}
			</section>
			<Link href={"/aboutMe"}>
				<div
					className={styles.pageBackNav + " " + "xyz-in"}
					xyz="fade in-left delay-6 duration-5"
				>
					<HiOutlineChevronLeft /> <p>aboutMe</p> <CgFormatSlash />
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

export async function getServerSideProps() {
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

	const blogs = await client.getEntries({
		content_type: "blog",
		order: "-sys.createdAt",
	});
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
