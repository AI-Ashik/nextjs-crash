import { notFound } from "next/navigation";

const BlogPage = ({ params }) => {
  const { id } = params;

  if (id === "3") {
    notFound();
  }

  return (
    <div>
      <h3>The blog id is {id}</h3>
    </div>
  );
};

export default BlogPage;
