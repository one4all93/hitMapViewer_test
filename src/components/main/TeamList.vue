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
    }
  },
  created(){
    axios.get("/etc/teamList.json").then(res=>{
        let team = res.data.data;
        let teamList = team.teamNameList;
        // console.log('team',team,teamList);
        this.teamList = teamList;
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