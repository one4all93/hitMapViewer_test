<template>
  <div class="teamList"> 
    <h2 class="tit"> 팀 리스트 </h2>
    <div class="list">
      <div class="teamBox" 
           v-for="(team,idx) in teamList" :key="idx"> {{ team }} </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name : 'teamList',
  data(){
    return{
      teamList : {},
      teamList2 : {},
    }
  },
  created(){
    // k리그1 팀 리스트 불러오기
    axios.get("/etc/teamList1.json").then(res=>{
      let team = res.data.data;
      let teamList = team.teamNameList;
      // console.log('team',team,teamList);
      this.teamList = teamList;
    })

    // k리그2 팀 리스트 불러오기
    axios.get("/etc/teamList2.json").then(res=>{
      let team = res.data.data;
      let teamList = team.teamNameList;
      // console.log('team',team,teamList);
      this.teamList2 = teamList;
    })
  },
}
</script>

<style>
.teamList{
    width: 30%;
    height: 100%;
}

.teamList .tit{
  color: aliceblue;
}

.teamList .teamBox{
  color: aliceblue;
}

.teamList .list{
  /* width: 50%; */
  height: 80%;
  text-align: center;
}


</style>