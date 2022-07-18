// import { MongoClient, ObjectId } from "mongodb";
import { createClient } from "contentful";
import Image from "next/image";
import { useRouter } from "next/router";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Highlight from "react-highlight";
import { HiOutlineArrowLeft } from "react-icons/hi";

import styles from "./Blogpost.module.css";
import "highlight.js/styles/agate.css";

const BlogPost = ({ blog }) => {
	const {
		image,
		title,
		description,
		tag,
		date,
		author,
		authorImage,
		summary,
		authorPosition,
		content,
	} = blog.fields;
	const router = useRouter();

	// Embedding Contentful
	const renderOptions = {
		renderNode: {
			// [INLINES.EMBEDDED_ENTRY]: (node, children) => {
			// 	// target the contentType of the EMBEDDED_ENTRY to display as you need
			// 	if (node.data.target.sys.contentType.sys.id === "blogPost") {
			// 		return (
			// 			<a href={`/blog/${node.data.target.fields.slug}`}>
			// 				{" "}
			// 				{node.data.target.fields.title}
			// 			</a>
			// 		);
			// 	}
			// },
			[BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
				// target the contentType of the EMBEDDED_ENTRY to display as you need
				if (node.data.target.sys.contentType.sys.id === "codeBlock") {
					return (
						<Highlight className="javascript">
							<pre>
								<code>{node.data.target.fields.codeContent}</code>
							</pre>
						</Highlight>
					);
				}

				// if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
				// 	return (
				// 		<iframe
				// 			src={node.data.target.fields.embedUrl}
				// 			height="100%"
				// 			width="100%"
				// 			frameBorder="0"
				// 			scrolling="no"
				// 			title={node.data.target.fields.title}
				// 			allowFullScreen={true}
				// 		/>
				// 	);
				// }
			},

			[BLOCKS.EMBEDDED_ASSET]: (node, children) => {
				// render the EMBEDDED_ASSET as you need
				return (
					<img
						src={`https://${node.data.target.fields.file.url}`}
						height={node.data.target.fields.file.details.image.height}
						width={node.data.target.fields.file.details.image.width}
						alt={node.data.target.fields.description}
					/>
				);
			},
		},
	};

	// ######################################
	return (
		// <h1> {title} </h1>
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
						Published: <span>{date}</span>
					</p>
					<h3>{title}</h3>
					<p className={styles.summary}> {summary} </p>
					<div className={styles.author}>
						<div className={styles.authorImageContainer}>
							<Image
								src={"https:" + authorImage.fields.file.url}
								width={authorImage.fields.file.details.image.width}
								height={authorImage.fields.file.details.image.height}
								alt={author}
							/>
						</div>
						<div className={styles.authorDetails}>
							<h5> {author} </h5>
							<p> {authorPosition} </p>
						</div>
					</div>
				</section>
				<section className={styles.right}>
					<Image
						src={"https:" + image.fields.file.url}
						width={image.fields.file.details.image.width}
						height={image.fields.file.details.image.height}
						alt={title}
					/>
				</section>
			</section>
			<section className={styles.bottom}>
				{/* <h4 className={styles.highlight}> {summary} </h4> */}
				<div className={styles.empty}></div>
				<article> {documentToReactComponents(content, renderOptions)} </article>
			</section>
		</section>
	);
};

// Database connection is done at a global level (i.e outside getStaticProps and getStaticProps function so that both functions can have access to it and I don't need to declare it twice)
// connecting to Contentful database to fetch data for just one blog
const client = createClient({
	space: process.env.SPACE_ID,
	accessToken: process.env.CONTENT_DELIVERY_API_TOKEN,
});

// We need to be able to access the blogID fron the Url path and we could use useRouter to fetch the blog id from the url path and match it to the blog id from the data on order to get details for a particular blog post using it's id. However, useRoute hook or generally react hooks cannot and does not work within the getStaticProps code block, therefore this is not an option. Instead, we use the "context" method which we can use to assess params for our url

export async function getStaticProps({ params }) {
	// fetch blog slug from url path
	// const slug = context.params.slug; //this can be simplified by destructuring params from context and passing params into getStaticProps instead of context.

	// connecting to Contentful database to fetch data for just one blog post
	const { items } = await client.getEntries({
		content_type: "blog",
		"fields.slug": params.slug,
	});

	// ********************************************************************
	// connecting to our MongoDB database to fetch data for just one blog post
	// const client = await MongoClient.connect(
	// 	`mongodb+srv://damygoes:${process.env.DB_PASSWORD}@cluster0.nf34c.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
	// );

	// const db = client.db();
	// const blogCollection = db.collection("blog");
	// const blog = await blogCollection.findOne({
	// 	_id: ObjectId(blogId), //the blogId needs to be objectified, so it can be the same and comparable to what we have in the MongoDB database
	// });
	// client.close();
	// ********************************************************************

	return {
		props: {
			blog: items[0],
			// blog: {
			// 	//we don't need to use .map here because we are fetching only one blog post. We only need to return all the properties related to a blog post and convert _id back to string
			// 	// id: blog._id.toString(),
			// 	// title: blog.title,
			// 	// description: blog.description,
			// 	// image: blog.image,
			// 	// slug: blog.slug,
			// 	// author: blog.author,
			// 	// authorImage: blog.authorImage,
			// 	// summary: blog.summary,
			// 	// authorPosition: blog.authorPosition,
			// 	// content: blog.content,
			// 	// date: blog.date,
			// },
		},
	};
}

// this helps dynamically fetch details for one blog post. However, we need to specify all possible paths in the paths array, as well as a fallback option. If fallback = true, that means not all possible paths are added/considered and if the client visits any path that is not in the array, the server will try to automatically generate content for such path. However, if fallback = false, that means all possible paths are defined/registered in our paths array and if the client visits any route/path that is not defined in the array, the server will return a 404 error.
export async function getStaticPaths() {
	// connecting to our MongoDB database to fetch data

	const blogs = await client.getEntries({ content_type: "blog" });
	console.log(blogs);

	return {
		fallback: false,
		paths: blogs.items.map((blog) => ({
			params: {
				slug: blog.fields.slug,
			},
		})),
	};
}

export default BlogPost;
