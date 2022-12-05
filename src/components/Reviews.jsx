import { useEffect, useState } from "react";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([]);

  useEffect(() => {
    getReviews().then((reviews) => {
      setReviewsList(reviews);
    });
  }, []);

  return (
    <ul className="review-list">
      {reviewsList.map((review) => {
        return (
          <li className="review-item" key={review.created_at}>
            <div className="content">
            <h2 className="review-title">{review.title}</h2>
            <img
              className="images"
              src={review.review_img_url}
              alt={review.title}
              review
            ></img>
              <p>User: {review.owner}</p>
              <p>Category: {review.category}</p>
              <p>Votes: {review.votes}</p>
              <p>Created at: {review.created_at}</p>
              </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
