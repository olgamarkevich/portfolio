export default{
    namespaced: true,
    state:{
      reviews:[]
    },
    mutations:{
          SET_REVIEWS: (state, reviews) => {
            state.reviews = reviews;
          },
          ADD_REVIEWS: (state, newReview) => {
            state.reviews.push(newReview);
          },
          REMOVE_REVIEWS: (state, deletedSkillId) => {
            state.reviews = state.reviews.filter(review => review.id !== deletedSkillId);
          },
          EDIT_REVIEWS: (state, editedReview) => {
            state.reviews = state.reviews.map(review =>
              review.id === editedReview.id ? editedReview : review
            );
          }
    },
    actions:{
        async addReview({ commit }, review) {
            try {
              const formData = new FormData();
              formData.append('author', review.author);
              formData.append('photo', review.photo);
              formData.append('text', review.text);
              formData.append('occ', review.occ);
              const response = await this.$axios.post("/reviews", formData);
              commit("ADD_REVIEWS", response.data);
              return response;
            } catch (error) {
              // error handling
            }
          },      
          async fetchReviews({ commit }, review) {
            try {
              const response = await this.$axios.get("/reviews/113", review);
              commit("SET_REVIEWS", response.data);
              return response;
            } catch (error) {
              // error handling
            }
          },
          async removeReviews({ commit }, reviewId) {
            try {
              const response = await this.$axios.delete(`/reviews/${reviewId}`);
              commit("REMOVE_REVIEWS", reviewId);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },
          async editReview({ commit }, review) {
            try {
              const formData = new FormData();
              formData.append('author', review.author);
              formData.append('text', review.text);
              formData.append('occ', review.occ);
              if (typeof(review.photo) == 'object') {
                formData.append('photo', review.photo);
              }
              const response = await this.$axios.post(`/reviews/${review.id}`, formData);
              commit('EDIT_REVIEWS', response.data.review);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },

         
    }
}