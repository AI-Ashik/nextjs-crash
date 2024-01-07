import PostButton from "@/app/components/PostButton";
import Comments from "@/lib/comments";
import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import { Suspense } from "react";

// dynamic meta data and the name should be same
export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title,
    description: post.body,
  };
}

const PostPage = async ({ params }) => {
  const { id } = params;
  const postPromise = getPost(id);
  const commentsPromise = getPostComments(id);
  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;
  return (
    <div>
      <div className="mt-6">
        <h2 className="text-center">Post {post.id} </h2>
        <h3 className="my-2 text-green-600">{post.title}</h3>
        <p>{post.body}</p>

        <hr className="mt-5" />

        <Suspense fallback="<h2>Comments loading...</h2>">
          <Comments promise={commentsPromise} />
        </Suspense>
      </div>
      <PostButton />
    </div>
  );
};

// to make dynamic rendering to static rendered but dynamic values
export async function getStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default PostPage;
