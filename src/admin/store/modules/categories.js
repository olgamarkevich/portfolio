export default{
    namespaced: true,
    state:{
        categories:[]
    },
    mutations:{
        SET_CATEGORIES: (state, categories) => {
            state.categories = categories
        },
        REMOVE_CATEGORY: (state, categoryId) => {
            state.categories = state.categories.filter(category => categoryId != category.id);
        },
        ADD_CATEGORY: (state, newCategory) => {
            state.categories.push(newCategory);
        }
    },
    actions:{
        async addNewSkillsGroup({commit}, groupTitle){
            try {
            const response = await this.$axios.post("/categories", {
                title: groupTitle
            });
            commit("ADD_CATEGORY", response.data);
            return response;
        } catch (error) {
            throw new Error(
                error.response.data.error || error.response.data.message
              );
            }
        },
        async fetchCategories({commit}){
            try {
            const response = await this.$axios.get("/categories");
            commit("SET_CATEGORIES", response.data);
            return response;
        } catch (error) {
            throw new Error(
                error.response.data.error || error.response.data.message
              );
            }
        },
        async deleteCategory({commit}, categoryId) {
            try {
                const response = await this.$axios.delete(`/categories/${categoryId}`);
                commit("REMOVE_CATEGORY", categoryId);
                return response;
            }
            catch (error) {
                generateStdError(error);
            }
        }
    }
}