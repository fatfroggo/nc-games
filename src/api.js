import axios from "axios";

const gamesReviewsApi = axios.create({
  baseURL: "https://fatfroggo-games-database.cyclic.app/api",
});

export const getReviews = () => {
  return gamesReviewsApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getReviewById = (review_id) => {
  return gamesReviewsApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getCommentsById = (review_id) => {
    return gamesReviewsApi.get(`/reviews/${review_id}/comments`).then((res) => {
        return res.data.comments;
    })
}