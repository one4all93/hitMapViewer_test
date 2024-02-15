<template>
  <!-- 로고 k리그 관련 이미지로 바꾸기 -->
  <img class="mainLogo" alt="K-league logo" src="./assets/images/kMarker.svg">

  <div class="mainSection">
    <!-- 구단 리스트 -->
    <TeamList />

    <!-- naver_map -->
    <Map />

    <!-- 선택한 팀 정보 팝업 -->
    <SelectedList />
  </div>

</template>

<script>
import TeamList from '@/components/main/TeamList.vue'
import Map from '@/components/main/Main.vue'
import SelectedList from '@/components/main/SelectedList.vue'

// import axios from 'axios'

export default {
  name: 'App',
  components: {
    TeamList,
    Map,
    SelectedList,
  },
  data(){
    return{
      lat:37.3595704,
      lng:127.105399,
    }
  },
  created(){
    // fetch('https://www.kleague.com/record/teamRank.do?leagueId=1&year=2024&stadium=all&recordType=rank').then(res=>{
    //   console.log('res',res);
    // })
  },
  mounted(){
    // axios.get('https://jsonplaceholder.typicode.com/posts/1')
    //   .then(function(response) {
    //     console.log(response);
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
  }
}
</script>

<style>

@font-face {
  font-family: 'kLeague';
  src: url(../src/assets/fonts/KLeagueBasic-Medium.otf);
}

body{
  background-color: #001c48 ;
}

#app {
  font-family: kLeague;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* background-color: #001c48 ; */
  margin-top: 60px;
  height: 100%;
  width: 100%;
}

.mainLogo{
  height: 10%;
  width: 10%;
  margin-bottom: 2%;
}

.mainSection{
  /* position: absolute; */
  width: 100%;
  height: 700px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
</style>
