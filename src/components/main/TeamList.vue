<template>
  <div class="teamList"> 
    <h1> 
      <!-- <a class="division" @click="selectDiv('k리그1')">k리그1</a> | 
      <a class="division" @click="selectDiv('k리그2')">k리그2</a>  -->
      <a class="division " @click="selectDiv(div)"
         v-for="div in Object.keys(teamIfo)" :key="div">
         {{ div }}
        </a> 
    </h1>
    <h2 class="tit">팀 리스트 </h2>
    <div class="list">
      <div class="teamBox" 
           v-for="(team,idx) in teamIfo[selctedDiv].teamList" :key="idx"> {{ team }} </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name : 'teamList',
  data(){
    return{
      selctedDiv : 'k리그1',
      teamIfo : {
        'k리그1':{
          teamList : {},
        },
        'k리그2':{
          teamList2 : {},
        },
      },
      // teamList : {},
      // teamList2 : {},
    }
  },
  created(){
    console.log('teamIfo',this.teamIfo[this.selctedDiv])
    // k리그1 팀 리스트 불러오기
    axios.get("/etc/teamList1.json").then(res=>{
      let team = res.data.data;
      let teamList = team.teamNameList;
      // console.log('k리그1',team,teamList);
      this.teamIfo['k리그1'].teamList = teamList;
    })

    // k리그2 팀 리스트 불러오기
    axios.get("/etc/teamList2.json").then(res=>{
      let team = res.data.data;
      let teamList = team.teamNameList;
      console.log('k리그2',team,teamList);
      this.teamIfo['k리그2'].teamList2 = teamList;
      // this.teamList2 = teamList;
    })
  },
  methods:{
    selectDiv(div){
      console.log('selectDiv',div)
    }
  }
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