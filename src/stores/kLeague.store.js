import { createStore } from "vuex";

export default createStore({
    state: {
        selectedArea : undefined,
        selectedTeam : undefined,
    },
    getters: {
        getSelectedArea(state){
            return state.selectedArea;
        },
        getSelectedTeam(state){
            return state.selectedTeam;
        }
    },
    mutations: {
        SELECTED_AREA(state,selectedArea){
            state.selectedArea = selectedArea;
        },
        SELECTED_TEAM(state,selectedTeam){
            state.selectedTeam = selectedTeam;
        }
    },
    actions: {
        FETCH_SELECTED_AREA({commit},selectedArea){
            // console.log('FETCH_SELECTED_AREA',selectedArea);
            commit('SELECTED_AREA',selectedArea);
        },
        FETCH_SELECTED_TEAM({commit},selectedTeam){
            console.log('FETCH_SELECTED_TEAM',selectedTeam);
            commit('SELECTED_TEAM',selectedTeam);
        }
    },
});
