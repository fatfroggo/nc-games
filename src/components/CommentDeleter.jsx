import { deleteComment } from "../api";

const CommentDelete = ({ comment_id, setComments }) => {
  const handleCommentDelete = () => {
    setComments((comments) => {
      const newComments = [...comments];
      for (let i = 0; i < newComments.length; i++) {
        if (newComments[i].comment_id === comment_id) {
          newComments.splice(i, 1);
          return newComments;
        }
      }
    })
    deleteComment(comment_id);
  };

  return (
    <button
      className="button"
      onClick={() => {
        handleCommentDelete();
      }}
    >
      Delete
    </button>
  );
};

export default CommentDelete;
