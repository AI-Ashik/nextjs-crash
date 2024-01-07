import Link from "next/link";

const Blogs = () => {
  const data = [
    {
      id: 1,
      title: "blog 1",
      description: "blog decription 1",
    },
    {
      id: 2,
      title: "blog 2",
      description: "blog decription 2",
    },
    {
      id: 3,
      title: "blog 3",
      description: "blog decription 3",
    },
  ];
  return (
    <div>
      <ul>
        {data.map((blog) => (
          <li className="my-2" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
