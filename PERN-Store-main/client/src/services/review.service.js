import API from "../api/axios.config";

const user_id = localStorage.getItem("user_id");

class ReviewService {
  getReviews(product_id) {
    console.log(localStorage);
    return API.get(`/products/${product_id}/reviews/?user=${user_id}`);
  }
  addReview(product_id, rating, content) {
    return API.post(`/products/${product_id}/reviews`, {
      product_id,
      rating,
      content,
    });
  }

  updateReview(id, product_id, content, rating) {
    return API.put(`/products/${id}/reviews`, {
      id,
      content,
      rating,
      product_id,
    });
  }
}

export default new ReviewService();
