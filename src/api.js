import axios from "axios";

const gamesReviewsApi = axios.create({
  baseURL: "https://fatfroggo-games-database.cyclic.app/api",
});

export const getReviews = (category, sorted_by, setErrorMessage) => {
  return gamesReviewsApi.get("/reviews", { params: { category : category, sort_by: sorted_by}}).then((res) => {
    return res.data.reviews;
  })
};

export const getReviewById = (review_id, setErrorMessage) => {
  return gamesReviewsApi
    .get(`/reviews/${review_id}`)
    .then((res) => {
      return res.data.review;
    })
};

export const getCommentsById = (review_id, setErrorMessage) => {
  return gamesReviewsApi
    .get(`/reviews/${review_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
};

export const getUsers = (setErrorMessage) => {
  return gamesReviewsApi
    .get("/users")
    .then((res) => {
      return res.data.users;
    })
};

export const addVotes = (review_id, setErrorMessage) => {
  const patchBody = {
    incVotes: 1,
  };

  return gamesReviewsApi
    .patch(`/reviews/${review_id}`, patchBody)
    .then((res) => {
      return res.data;
    })
};

export const removeVotes = (review_id, setErrorMessage) => {
  const patchBody = {
    incVotes: -1,
  };

  return gamesReviewsApi
    .patch(`/reviews/${review_id}`, patchBody)
    .then((res) => {
      return res.data;
    })
};

export const getCategories = (setErrorMessage) => {
  return gamesReviewsApi
    .get("/categories")
    .then((res) => {
      return res.data.categories;
    })
};

export const addComment = (newComment, review_id, user, setErrorMessage) => {
  const postBody = {
    username: user.username,
    body: newComment,
  };

  return gamesReviewsApi
    .post(`/reviews/${review_id}/comments`, postBody)
    .then((res) => {
      return res.data.comment;
    })
};

export const deleteComment = (comment_id, setErrorMessage) => {
  return gamesReviewsApi.delete(`/comments/${comment_id}`).catch((err) => {
    setErrorMessage(err);
  });
};