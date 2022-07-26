import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { createClient } from "contentful";
import "@animxyz/core";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { CgFormatSlash } from "react-icons/cg";
import { motion } from "framer-motion";

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
import LinkedIn from "../../assets/linkedin-app.svg";
import Twitter from "../../assets/twitter-app.svg";
import Instagram from "../../assets/ig-instagram.svg";
import Github from "../../assets/github.svg";
import ME1 from "../../assets/me1.jpg";
import ME2 from "../../assets/me2.jpg";
import ME3 from "../../assets/me3.jpg";
import ME4 from "../../assets/me4.jpg";
import ME5 from "../../assets/me5.jpg";

import Portrait from "../../assets/portrait.png";
import styles from "./Blog.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

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
		<section className={styles.aboutMe}>
			<div className={styles.title}>
				<h3 className="xyz-in" xyz="fade in-left duration-2">
					About Me
				</h3>
				<div className="xyz-in" xyz="fade in-right delay-1 duration-2"></div>
			</div>
			<section className={styles.upper}>
				<div className={styles.left}>
					<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
						My name is <span>Damilola Bada</span>. I have a background in
						Environmental Science and experience in marketing and selling a brand.
						These have influenced my
						<span>curious, creative and competitive approach</span> to solving
						problems.
					</p>
					<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
						I am passionate about <span>solving problems</span>,
						<span>expanding my knowledge</span> and helping brands make a profit. As a
						former Marketing Manager, I learned that the most efficient way to grow a
						brand&apos;s influence and profit is by providing a great customer and
						<span>user experience</span>. With this strategy; and my data analysis
						skills, I increased my team&apos;s profit by 21%.
					</p>
					<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
						My <span>determination</span> to provide useful products and solutions
						that will help businesses grow a strong yet profitable brand led me to
						make a career change to <span>web development</span>.
					</p>
					<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
						When I&apos;m not working, I am either riding my race bike, gracing events
						as a Disc Jockey (DJ), playing video games or spending time with my wife
						and daughter.
					</p>

					<div className={styles.socials}>
						<p className="xyz-in" xyz="fade in-left delay-1 duration-2">
							check out my socials:
						</p>
						<div className={styles.iconContainer}>
							<Link href="https://www.linkedin.com/in/damilolabada/">
								<a
									target="_blank"
									rel="noreferrer"
									className="xyz-in"
									xyz="fade front flip-left delay-4 duration-2"
								>
									<Image src={LinkedIn} alt="LinkedIn Logo" />
								</a>
							</Link>
						</div>
						<div className={styles.iconContainer}>
							<Link href="https://github.com/damygoes">
								<a
									target="_blank"
									rel="noreferrer"
									className="xyz-in"
									xyz="fade front flip-left delay-6 duration-2"
								>
									<Image src={Github} alt="Github Logo" />
								</a>
							</Link>
						</div>
						<div className={styles.iconContainer}>
							<Link href="https://twitter.com/damygoes">
								<a
									target="_blank"
									rel="noreferrer"
									className="xyz-in"
									xyz="fade front flip-left delay-8 duration-2"
								>
									<Image src={Twitter} alt="TwitterLogo" />
								</a>
							</Link>
						</div>
						<div className={styles.iconContainer}>
							<Link href="https://www.instagram.com/damy.goes/">
								<a
									target="_blank"
									rel="noreferrer"
									className="xyz-in"
									xyz="fade front flip-left delay-10 duration-2"
								>
									<Image src={Instagram} alt="Instagram Logo" />
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.card}>
						<Image
							src={ME2}
							alt="Dami's Portrait"
							className="xyz-in"
							xyz="fade flip-left perspective-5 delay-1 duration-5"
						/>
					</div>
					<div className={styles.card}>
						<Image
							src={ME1}
							alt="Dami's Portrait"
							className="xyz-in"
							xyz="fade flip-left perspective-5 delay-3 duration-5"
						/>
					</div>
					<div className={styles.card}>
						<Image
							src={ME5}
							alt="Dami's Portrait"
							className="xyz-in"
							xyz="fade flip-right perspective-5 delay-7 duration-5"
						/>
					</div>
					<div className={styles.card}>
						<Image
							src={ME3}
							alt="Dami's Portrait"
							className="xyz-in"
							xyz="fade flip-left perspective-5 delay-5 duration-5"
						/>
					</div>
				</div>
			</section>

			<section className={styles.bloghead}>
				<h4 className="xyz-in" xyz="fade in-left duration-2">
					My Diary
				</h4>
				<div className="xyz-in" xyz="fade in-right delay-1 duration-2"></div>
			</section>
			<section className={styles.blogbody}>
				{blogs.map((blog) => (
					<BlogCard blog={blog} key={blog.sys.id} />
				))}
			</section>
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
