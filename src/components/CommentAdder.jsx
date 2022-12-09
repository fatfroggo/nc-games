import {useContext, useState} from 'react'
import { addComment } from '../api';
import { UserContext } from '../contexts/User';

const CommentAdder = ({review_id, setComments}) => {

const {user} = useContext(UserContext)
const [newComment, setNewComment] = useState("");

const handleSubmit = (e) => {
    e.preventDefault()
    setComments((currentComments) => {
      const newComments = [...currentComments];
      newComments.unshift({ body: newComment, author: user.username, created_at: new Date().toJSON(), comment_id: currentComments.length + 1});
      return newComments;
    });
    addComment(newComment, "purple", user).then((comment) => {
        setNewComment('')
    })
}

return (

<form className="comment-adder" onSubmit={handleSubmit}>
  <label htmlFor="newComment">Add a comment:   </label>
  <textarea
    className='newComment'
    id="newComment"
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    required
  ></textarea>
  <button className='button'>Add</button>
</form>
)
}

export default CommentAdder