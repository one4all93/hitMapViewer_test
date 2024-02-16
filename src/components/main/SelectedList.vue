<template>
  <div class="selectedList"> 

    <div class="selectedTeam">
      {{ selectedTeam != undefined ? selectedTeam.teamNm : undefined }}
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import { computed } from "vue";
import { mapGetters, useStore } from "vuex";

export default {
  name : 'selectedList',
  data(){
    return{

    }
  },
  setup(){
    const store = useStore();

    const selectedTeam = computed(()=> store.getters.getSelectedTeam);
    // const clickTeam = (team) => store.dispatch('FETCH_SELECTED_TEAM',team);

    return {
      selectedTeam,
    }
  },
}
</script>

<style>
.selectedList{
    width: 30%;
    height: 100%;
}

.selectedTeam{
  font-size: 150%;
  color: aliceblue;
}
</style>