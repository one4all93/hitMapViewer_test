<template>
  <!-- 로고 k리그 관련 이미지로 바꾸기 -->
  <img alt="Vue logo" src="./assets/logo.png">
  
  <Main />
</template>

<script>
import Main from '@/components/main/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  },
  data(){
    return{
      lat:37.3595704,
      lng:127.105399,
    }
  },
  mounted(){
    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };

    // function success(pos) {
    //   var crd = pos.coords;

    //   // if(crd){
    //   //   this.lat = crd.latitude;
    //   //   this.lng = crd.longitude;
    //   // }else{
    //   //   this.lat = crd.latitude;
    //   //   this.lng = crd.longitude;
    //   // }
    //   this.lat = crd.latitude;
    //   this.lng = crd.longitude;

    //   console.log('Your current position is:');
    //   console.log('Latitude : ' + crd.latitude);
    //   console.log('Longitude: ' + crd.longitude);
    //   console.log('More or less ' + crd.accuracy + ' meters.');
    // };

    // function error(err) {
    //   console.warn('ERROR(' + err.code + '): ' + err.message);
    // };

    // navigator.geolocation.getCurrentPosition(success, error, options);
    //console.log(this.mapOptions.lat,this.mapOptions.lng)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: aqua;
  margin-top: 60px;
  height: 100%;
  width: 100%;
}
</style>
