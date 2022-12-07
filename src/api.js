import axios from "axios";

const gamesReviewsApi = axios.create({
  baseURL: "https://fatfroggo-games-database.cyclic.app/api",
});

export const getReviews = (category) => {
  console.log(category)
  return gamesReviewsApi.get("/reviews", { params: { category : category }}).then((res) => {
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

export const getUsers = () => {
  return gamesReviewsApi.get("/users").then((res) => {
    return res.data.users
  })
}

export const addVotes = (review_id) => {

  const patchBody = {
    incVotes: 1
  }

  return gamesReviewsApi.patch(`/reviews/${review_id}`, patchBody).then((res) => {
    return res.data
  })
}

export const removeVotes = (review_id) => {
  const patchBody = {
    incVotes: -1,
  };

  return gamesReviewsApi
    .patch(`/reviews/${review_id}`, patchBody)
    .then((res) => {
      return res.data;
    });
};

export const getCategories = () => {
  return gamesReviewsApi.get("/categories").then((res) => {
    return res.data.categories
  })
}

export const addComment = (newComment, review_id, user) => {
  const postBody = {
    username: user.username,
    body: newComment
  }

  return gamesReviewsApi.post(`/reviews/${review_id}/comments`, postBody).then((res) => {
    return res.data.comment
  }
  )
};

export const deleteComment = (comment_id) => {
  return gamesReviewsApi.delete(`/comments/${comment_id}`)
}