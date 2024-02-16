<template>
  <div class="selectedList" v-if="selectedTeam != undefined"> 

    <div class="selectedTeam">
      {{ selectedTeam.teamNm }}
      <!-- {{ selectedTeam != undefined ? selectedTeam.teamNm : undefined }} -->
    </div>

    <div class="selectedTeamLogo">
      <img :src="iconUrl + selectedTeam.teamId + '.png'">
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
      iconUrl : 'https://www.kleague.com/assets/images/emblem/emblem_',
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

.selectedTeamLogo{
  margin-top: 5%;
}
</style>