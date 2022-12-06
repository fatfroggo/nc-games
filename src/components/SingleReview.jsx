import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getReviewById } from "../api"
import Comments from "./Comments"
import Votes from "./Votes"

const SingleReview = () => {

    const { review_id } = useParams()
    const [singleReview, setSingleReview] = useState({})
    const [currentVotes, setVotes] = useState();

    useEffect(() => {
        getReviewById(review_id).then((review) => {
            setSingleReview(review)
            setVotes(review.votes)
        })
    }, [])

    return (
      <section className="single-review">
        <h2 className="review-title">{singleReview.title}</h2>
        <p>{singleReview.review_body}</p>
        <img
          className="images"
          src={singleReview.review_img_url}
          alt={singleReview.title}
        ></img>
        <p>User: {singleReview.owner}</p>
        <p>Category: {singleReview.category}</p>
        <section>
          <p>Votes: {currentVotes}</p>
          <Votes review_id={review_id} currentVotes={currentVotes} setVotes={setVotes} />
        </section>
        <p>Created at: {singleReview.created_at}</p>
        <Comments review_id={review_id} />
      </section>
    );
}

export default SingleReview

