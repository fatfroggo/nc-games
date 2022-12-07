import { useContext, useEffect, useState } from "react";
import { getCommentsById } from "../api";
import "../App.css";
import { UserContext } from "../contexts/User";
import CommentAdder from "./CommentAdder";
import CommentDelete from "./CommentDeleter";

const Comments = ({ review_id }) => {
  const {user} = useContext(UserContext)
  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    getCommentsById(review_id).then((comments) => {
      setComments(comments);
      setLoading(false)
    });
  }, [review_id]);


  if (isLoading) {
    return (
      <main>
        <img className="loading-img"
          src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
          alt="loading-bar"
        ></img>
      </main>
    );
  }

  return (
    <div className="review-comments">
      <h2>Comments:</h2>
      <ul className="comment-list">
        {comments.map((comment) => {
          return (
            <li className="singleComment" key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>User: {comment.author}</p>
              <p>Created at: {comment.created_at}</p>
              {user.username === comment.author ? <CommentDelete comment_id = {comment.comment_id} setComments={setComments}/> : ""}
            </li>
          );
        })}
      </ul>
      <CommentAdder review_id={review_id} setComments={setComments}/>
    </div>
  );
};

export default Comments;
