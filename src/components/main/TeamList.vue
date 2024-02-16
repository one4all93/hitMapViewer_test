<template>
  <div class="teamList"> 
    <h1> 
      <a :class="'division_tit ' + (selctedDiv == div ? 'on' : 'off') " 
         @click.prevent="selectDiv(div)" 
         v-for="div in Object.keys(teamIfo)" :key="div">
        {{ div }}
      </a> 
    </h1>
    <h1 class="tit">팀 리스트 </h1>
    <div class="list">
      <div class="teamBox" 
           @click.prevent="selectTeam(team)"
           v-for="(team,idx) in teamIfo[selctedDiv].teamList" :key="idx"> 
          {{ team.teamNm }} 
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { computed } from "vue";
import { mapGetters, useStore } from "vuex";
import { defineComponent } from 'vue'

export default {
  name : 'teamList',
  data(){
    return{
      selctedDiv : undefined,
      teamIfo : {
        'k리그1':{
          teamList : {
          },
        },
        'k리그2':{
          teamList : {},
        },
      },
    }
  },
  setup(){
    const store = useStore();

    const selectedTeam = computed(()=> store.getters.getSelectedTeam);
    const clickTeam = (team) => store.dispatch('FETCH_SELECTED_TEAM',team);

    return {
      selectedTeam,
      clickTeam,
    }
  },
  created(){
    // mounted 전에 리그 값 선택
    // console.log('created',Object.keys(this.teamIfo)[0]);
    this.selectDiv(Object.keys(this.teamIfo)[0]);

    // console.log('teamIfo',this.teamIfo[this.selctedDiv])

    // k리그1 팀 리스트 불러오기 + teamInfo에 담아주기
    axios.get("/etc/teamList1.json").then(res=>{
      let team = res.data.data;           
      let teamList = team.teamNameList;
      // this.teamIfo['k리그1'].teamList = teamList;
      let teamInfo = this.teamIfo['k리그1'].teamList;
      // 팀명 지정
      teamList.forEach((info,idx)=>{
        if(teamInfo[idx] == undefined){
          teamInfo[idx] = {};
        }
        teamInfo[idx].teamNm = info;
      })
      // 팀 세부 정보 지정
      team.teamRank.forEach((info,idx)=>{
        teamInfo[idx].region = info.teamName;
        teamInfo[idx].homepage = info.homepage;
        teamInfo[idx].teamId = info.teamId;
      })
    })

    // k리그2 팀 리스트 불러오기
    axios.get("/etc/teamList2.json").then(res=>{
      let team = res.data.data;           console.log('team2',team)
      let teamList = team.teamNameList;
      
      let teamInfo = this.teamIfo['k리그2'].teamList;
      // 팀명 지정
      teamList.forEach((info,idx)=>{
        if(teamInfo[idx] == undefined){
          teamInfo[idx] = {};
        }
        teamInfo[idx].teamNm = info;
      })
      // 팀 세부 정보 지정
      team.teamRank.forEach((info,idx)=>{
        teamInfo[idx].region = info.teamName;
        teamInfo[idx].homepage = info.homepage;
        teamInfo[idx].teamId = info.teamId;
      })
    })

    console.log('created::teamIfo',this.teamIfo)

  },
  methods:{
    selectDiv(div){
      console.log('selectDiv',div, this.teamIfo[div]);
      this.selctedDiv = div;
    },
    selectTeam(team){
      console.log('selectTeam', team , this);
      this.clickTeam(team);
    }
  }
}
</script>

<style>
.division_tit{
  cursor: pointer;
  font-size: 150%;
  margin: 2%;
}

.off:hover{
  color: red;
}

.on{
  color: aliceblue;
}

.off{
  color: #2c3e50;
}

.teamList{
    width: 30%;
    height: 100%;
}

.teamList .tit{
  color: aliceblue;
}

.teamList .teamBox{
  font-size: 150%;
  color: aliceblue;
  cursor: pointer;
  margin: 1%;
}

.teamList .teamBox:hover{
  color: skyblue;
}

.teamList .list{
  /* width: 50%; */
  height: 80%;
  text-align: center;
}


</style>