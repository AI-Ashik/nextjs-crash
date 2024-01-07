import getAllPosts from "@/lib/getAllPosts";
import Link from "next/link";

const Posts = async () => {
  const posts = await getAllPosts();
  return (
    <div className="mt-6">
      <h2 className="text-center">All Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.id} : {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
