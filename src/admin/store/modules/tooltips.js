export default{
    namespaced: true,
    state:{
        showed: false,
        text: "",
        type: "success"
    },
    mutations:{
        SET_SHOWED: (state, trueOrFalse) => {
            state.showed = trueOrFalse;
          },
          SET_TEXT: (state, text) => {
            state.text=text;
          },
          SET_TYPE: (state, type) => {
            state.type = type;
          }
    },
    actions:{
      showTooltip({commit, dispatch}, payLoad){
        commit('SET_SHOWED', true);
        commit('SET_TEXT', payLoad.text);
        commit('SET_TYPE', payLoad.type);
        setTimeout(()=>{
          dispatch('closeTooltip')
        }, 1500)
      },
      closeTooltip({commit}){
        commit('SET_SHOWED', false)
      }

    }
}