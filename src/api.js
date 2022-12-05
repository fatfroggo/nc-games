import axios from "axios"

const gamesReviewsApi = axios.create({
    baseURL: "https://fatfroggo-games-database.cyclic.app/api"
})

export const getReviews = () => {
    return gamesReviewsApi.get("/reviews").then((res) => {
        return res.data.reviews;
    })
}