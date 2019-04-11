export default{
    namespaced: true,
    state:{
      works:[]
    },
    mutations:{
          SET_WORKS: (state, works) => {
            state.works = works;
          },
          ADD_WORKS: (state, newReview) => {
            state.works.push(newReview);
          },
          REMOVE_WORKS: (state, deletedSkillId) => {
            state.reviews = state.reviews.filter(review => review.id !== deletedSkillId);
          },
          EDIT_WORKS: (state, editedSkill) => {
            state.reviews = state.skills.map(review =>
              review.id === editedSkill.id ? editedSkill : review
            );
          }
    },
    actions:{
        async addWork({ commit }, work) {
            try {
              const formData = new FormData();
              formData.append('title', work.title);
              formData.append('photo', work.photo);
              formData.append('techs', work.techs);
              formData.append('link', work.link);
              formData.append('description', work.description);
              const response = await this.$axios.post("/works", formData);
              commit("ADD_WORKS", response.data);
              return response;
            } catch (error) {
              // error handling
            }
          },      
          async fetchReviews({ commit }, review) {
            try {
              const response = await this.$axios.get("/reviews/113", review);
              commit("SET_WORKS", response.data);
              return response;
            } catch (error) {
              // error handling
            }
          },
          async removeReviews({ commit }, reviewId) {
            try {
              const response = await this.$axios.delete(`/reviews/${reviewId}`);
              commit("REMOVE_WORKS", reviewId);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },
          async editSkill({ commit }, review) {
            try {
              const response = await this.$axios.post(`/reviews/${skill.id}`, review);
              commit('EDIT_WORKS', response.data.review);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },

         
    }
}