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
          EDIT_REVIEWS: (state, editedSkill) => {
            state.reviews = state.skills.map(review =>
              review.id === editedSkill.id ? editedSkill : review
            );
          }
    },
    actions:{
        async addReview({ commit }, review) {
            try {
              const response = await this.$axios.post("/reviews", review);
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
          async removeSkill({ commit }, skillId) {
            try {
              const response = await this.$axios.delete(`/reviews/${skillId}`);
              commit("REMOVE_REVIEWS", skillId);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },
          async editSkill({ commit }, review) {
            try {
              const response = await this.$axios.post(`/reviews/${skill.id}`, review);
              commit('EDIT_REVIEWS', response.data.review);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },
    }
}