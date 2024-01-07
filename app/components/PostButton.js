import Link from "next/link";

const PostButton = () => {
  return (
    <div className="my-5">
      <Link href="/posts">
        <button className="bg-green-500 rounded-sm px-2">Return</button>
      </Link>
    </div>
  );
};

export default PostButton;
