const ProjectDetail = ({ project }) => {
  return (
    <>
      <h1> {project.title} </h1>
      <p> {project.description} </p>
      {/* <h1>Project Title</h1>
      <p> Project Detail</p> */}
    </>
  );
};

// We could use useRouter to fetch the project id from the url path and match it to the project id from the data on order to get details for a particular project using it's id. However, useRoute hook or generally react hooks cannot and does not work within the getStaticProps code block, therefore this is not an option. Instead, we use the "context" method which we can use to assess params for our url

export async function getStaticProps(context) {
  // send http request to fetch data for a single project

  const projectId = context.params.projectId;

  return {
    props: {
      project: {
        id: projectId,
        title: "Driven",
        description: "A modern e-commerce store",
        image:
          "https://images.unsplash.com/photo-1491947153227-33d59da6c448?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=800&q=60",
        isDone: true,
        deployed: "https://www.google.com",
        github: "https://github.com/damygoes",
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
          projectId: "001",
        },
      },
      {
        params: {
          projectId: "002",
        },
      },
      {
        params: {
          projectId: "003",
        },
      },
    ],
  };
}

export default ProjectDetail;
