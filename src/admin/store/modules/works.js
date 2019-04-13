export default{
    namespaced: true,
    state:{
      works:[]
    },
    mutations:{
          SET_WORKS: (state, works) => {
            state.works = works;
          },
          ADD_WORK: (state, newWork) => {
            state.works.push(newWork);
          },
          REMOVE_WORK: (state, deletedWorkId) => {
            state.works = state.works.filter(works => works.id !== deletedWorkId);
          },
          EDIT_WORK: (state, editedWork) => {
            state.works = state.works.map(work =>
              work.id === editedWork.id ? editedWork : works
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
              commit("ADD_WORK", response.data);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },      
          async fetchWorks({ commit }) {
            try {
              const response = await this.$axios.get("/works/113");
              commit("SET_WORKS", response.data);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },
          async removeWork({ commit }, workId) {
            try {
              const response = await this.$axios.delete(`/works/${workId}`);
              commit("REMOVE_WORK", workId);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },
          async editWork({ commit }, work) {
            try {
              const response = await this.$axios.post(`/works/${work.id}`, work);
              commit('EDIT_WORK', response.data.work);
              return response;
            } catch (error) {
              generateStdError(error);
            }
          },

         
    }
}