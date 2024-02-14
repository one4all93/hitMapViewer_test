<template>
  <div class="naverMap" id="map">
    <!-- <img src="../../assets/geojson/hangjeongdong_gwd.geojson" alt=""> -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name:'naverMap',
  data(){
    return{
      mapOptions : {
          center: new naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 10,
          lat: 36.3595704,
          lng: 127.705399,
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
    },
    
    // 지도 그려진 후에 geojson 그리기
    this.drawGeojson(),

  
    );

    console.log('map',map)

  },
  methods:{
    drawGeojson(){
      console.log('drawGeojson');
      
      // 대한민국 geosjon 영역 불러오기 테스트
      axios.get("/geojson/hangjeongdong_gwd.geojson").then(res=>{
        console.log('res',res)
      })

    }
  },
}  
</script>

<style>
.naverMap{
  width: 40%;
  height: 100%;
}
</style>