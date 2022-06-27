const Blog = ({ blog }) => {
  return (
    <>
      <h1> {blog.title} </h1>
      <p> {blog.description} </p>
    </>
  );
};

export async function getStaticProps(context) {
  // send http request to fetch data for a single project

  const blogId = context.params.blogId;

  return {
    props: {
      blog: {
        id: blogId,
        title: "Object Oriented Programming Explained",
        description:
          "I use OOP all the time and I explain here what it means, in simple terms",
        image:
          "https://images.unsplash.com/photo-1491947153227-33d59da6c448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        tag: "article",
        date: "07 June, 2021",
      }, //from dummy data
    },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          blogId: "001",
        },
      },
      {
        params: {
          blogId: "002",
        },
      },
      {
        params: {
          blogId: "003",
        },
      },
      {
        params: {
          blogId: "004",
        },
      },
    ],
  };
}

export default Blog;
