const Comments = async ({ promise }) => {
  const comments = await promise;
  return (
    <div>
      <div>
        <ul>
          <h2 className="text-red-500 my-2">Comments</h2>
          {comments.map((comment) => (
            <li className="mb-2" key={comment.id}>
              {comment.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Comments;
