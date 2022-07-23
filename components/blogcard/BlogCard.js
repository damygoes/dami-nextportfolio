import Image from "next/image";
import Link from "next/link";
import "@animxyz/core";

import styles from "./Blogcard.module.css";

const BlogCard = ({ blog }) => {
	const { title, description, date, tag, image } = blog.fields;

	return (
		<>
			<Link href={`blog/${blog.fields.slug}`}>
				<div
					className={styles.blogcard + " " + "xyz-in"}
					key={blog.sys.id}
					xyz="fade front flip-left delay-2 duration-2 stagger"
				>
					<div className={styles.imageContainer}>
						<Image
							src={"https:" + image.fields.file.url}
							width={image.fields.file.details.image.width}
							height={image.fields.file.details.image.height}
							alt={title}
						/>
					</div>
					<div className={styles.blogContent}>
						<h4> {title} </h4>
						<p> {description} </p>
						<div className={styles.blogTags}>
							<p>
								<span>{date}</span>
							</p>
							<p>
								Tag: <span>{tag}</span>
							</p>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default BlogCard;
