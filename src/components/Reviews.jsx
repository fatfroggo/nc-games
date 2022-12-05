import { useEffect, useState } from "react";
import { getReviews } from "../api";

const Reviews = () => {
  const [reviewsList, setReviewsList] = useState([
    {
      title: "One Night Ultimate Werewolf",
      designer: "Akihisa Okui",
      owner: "happyamy2016",
      review_img_url:
        "https://images.pexels.com/photos/5350049/pexels-photo-5350049.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      category: "hidden-roles",
      created_at: 1610964101251,
      votes: 5,
    },
  ]);

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
