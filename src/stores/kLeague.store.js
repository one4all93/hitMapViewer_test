import { createStore } from "vuex";

export default createStore({
    state: {
        selectedArea : undefined,
    },
    getters: {
        getSelectedArea(state){
            return state.selectedArea;
        }
    },
    mutations: {
        SELECTED_AREA(state,selectedArea){
            state.selectedArea = selectedArea;
        }
    },
    actions: {
        FETCH_SELECTED_AREA({commit},selectedArea){
            // console.log('FETCH_SELECTED_AREA',selectedArea);
            commit('SELECTED_AREA',selectedArea);
        }
    },
});
