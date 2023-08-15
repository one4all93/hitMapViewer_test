<template>
  <div class="naverMap" id="map"></div>
</template>

<script>

export default {
  name:'naverMap',
  data(){
    return{
      mapOptions : {
          center: new naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 8,
          lat: 37.3595704,
          lng: 127.105399,
      },
    }
  },
  components:{

  },
  mounted(){
    // var map = new naver.maps.Map('map', this.mapOptions);
    var map = new naver.maps.Map('map', {
          center: new naver.maps.LatLng(this.mapOptions.lat,this.mapOptions.lng), //좌표
          zoom: 6, //지도의 초기 줌 레벨
          minZoom: 6, //지도의 최소 줌 레벨,
          maxZoom : 14, // 지도 최대 줌 레벨
          draggable: true,
          pinchZoom: true,
          scrollWheel: true,
          disableKineticPan: false, // 관성드래깅
          scaleControl: false, // 스케일 컨트롤러
          logoControl: true, // 로고 컨트롤러
          logoControlOptions: {
              position: naver.maps.Position.BOTTOM_RIGHT
          },
          mapDataControl: false, 
          zoomControl: true, //줌컨트롤러
          zoomControlOptions: {
              position: naver.maps.Position.TOP_LEFT
          },
          mapTypeControl: false
    });

    // var options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };

    // function success(pos) {
    //   var crd = pos.coords;

    //   if(crd){
    //     this.mapOptions.lat = crd.latitude;
    //     this.mapOptions.lng = crd.longitude;
    //   }else{
    //     this.mapOptions.lat = crd.latitude;
    //     this.mapOptions.lng = crd.longitude;
    //   }

    //   console.log('Your current position is:');
    //   console.log('Latitude : ' + crd.latitude);
    //   console.log('Longitude: ' + crd.longitude);
    //   console.log('More or less ' + crd.accuracy + ' meters.');
    // };

    // function error(err) {
    //   console.warn('ERROR(' + err.code + '): ' + err.message);
    // };

    // navigator.geolocation.getCurrentPosition(success, error, options);
    // console.log(this.mapOptions.lat,this.mapOptions.lng)
  }
}  
</script>

<style>
.naverMap{
  width: 400px;
  height: 400px;
}
</style>