import { MongoClient, ObjectId } from "mongodb";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import { HiOutlineArrowLeft } from "react-icons/hi";

import styles from "./Blogpost.module.css";

const BlogPost = ({ blog }) => {
	const router = useRouter();
	return (
		<section className={styles.container}>
			<div
				className={styles.backnav}
				onClick={() => {
					router.push("/blog");
				}}
			>
				{" "}
				<HiOutlineArrowLeft
					onClick={() => {
						router.push("/blog");
					}}
				/>{" "}
				<p
					onClick={() => {
						router.push("/blog");
					}}
				>
					Back to blogs
				</p>{" "}
			</div>
			<section className={styles.top}>
				<section className={styles.left}>
					<p className={styles.date}>
						Published: <span>{blog.date}</span>
					</p>
					<h3>{blog.title}</h3>
					<p className={styles.summary}> {blog.summary} </p>
					<div className={styles.author}>
						<div className={styles.authorImageContainer}>
							<Image
								src={blog.authorImage}
								alt={blog.author}
								width={50}
								height={50}
							/>
						</div>
						<div className={styles.authorDetails}>
							<h5> {blog.author} </h5>
							<p> {blog.authorPosition} </p>
						</div>
					</div>
				</section>
				<section className={styles.right}>
					<Image src={blog.image} alt={blog.title} width={500} height={500} />
				</section>
			</section>
			<section className={styles.bottom}>
				<h4 className={styles.highlight}> {blog.summary} </h4>
				<div className={styles.empty}></div>
				<p> {blog.content} </p>
			</section>
		</section>
	);
};

// We need to be able to access the blogID fron the Url path and we could use useRouter to fetch the blog id from the url path and match it to the blog id from the data on order to get details for a particular blog post using it's id. However, useRoute hook or generally react hooks cannot and does not work within the getStaticProps code block, therefore this is not an option. Instead, we use the "context" method which we can use to assess params for our url

export async function getStaticProps(context) {
	// fetch blog id from url path
	const blogId = context.params.blogId;

	// connecting to our MongoDB database to fetch data for just one blog post
	const client = await MongoClient.connect(
		`mongodb+srv://damygoes:${process.env.DB_PASSWORD}@cluster0.nf34c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
	);

	const db = client.db();
	const blogCollection = db.collection("blog");
	const blog = await blogCollection.findOne({
		_id: ObjectId(blogId), //the blogId needs to be objectified, so it can be the same and comparable to what we have in the MongoDB database
	});
	client.close();

	return {
		props: {
			blog: {
				//we don't need to use .map here because we are fetching only one blog post. We only need to return all the properties related to a blog post and convert _id back to string
				id: blog._id.toString(),
				title: blog.title,
				description: blog.description,
				image: blog.image,
				slug: blog.slug,
				author: blog.author,
				authorImage: blog.authorImage,
				summary: blog.summary,
				authorPosition: blog.authorPosition,
				content: blog.content,
				date: blog.date,
			},
		},
	};
}

// this helps dynamically fetch details for one blog post. However, we need to specify all possible paths in the paths array, as well as a fallback option. If fallback = true, that means not all possible paths are added/considered and if the client visits any path that is not in the array, the server will try to automatically generate content for such path. However, if fallback = false, that means all possible paths are defined/registered in our paths array and if the client visits any route/path that is not defined in the array, the server will return a 404 error.
export async function getStaticPaths() {
	// connecting to our MongoDB database to fetch data
	const client = await MongoClient.connect(
		`mongodb+srv://damygoes:${process.env.DB_PASSWORD}@cluster0.nf34c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
	);
	const db = client.db();
	const portfolio = db.collection("blog");
	const blogs = await portfolio.find({}, { _id: 1 }).toArray();
	client.close();

	return {
		fallback: false,
		paths: blogs.map((blog) => ({
			params: {
				blogId: blog._id.toString(),
			},
		})),
	};
}

export default BlogPost;
