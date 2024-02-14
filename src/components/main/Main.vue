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
      // map : {},
      mapOptions : {
          center: new naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 10,
          lat: 36.3595704,
          lng: 127.705399,
      },
      geojsonData : {},
      geojsonUrl : '/geojson/TL_SCCO_CTPRVN.json',
    }
  },
  components:{

  },
  mounted(){
    // var map = new naver.maps.Map('map', this.mapOptions);
    let map = new naver.maps.Map('map', {
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
    // this.drawGeojson(),

    // this.startDataLayer(map , this.geojsonUrl),

  
    );
    this.startDataLayer(map),
    console.log('map',map)

  },
  methods:{
    drawGeojson(){
      console.log('drawGeojson');
      
      // 대한민국 geosjon 영역 불러오기 테스트
      axios.get("/geojson/TL_SCCO_CTPRVN.json").then(res=>{
        // console.log('res',res.data.features)
        let features = res.data.features;
        startDataLayer

        features.forEach(feature=>{
          console.log('features',feature.properties.CTP_KOR_NM,feature.geometry.coordinates)
        })

      })

    },

    startDataLayer(map) {   

        // 대한민국 전국 geojson 파일 불러오기
        axios.get("/geojson/TL_SCCO_CTPRVN.json").then(res=>{
          let features = res.data.features;

          features.forEach(feature=>{
            // console.log('features',feature.properties.CTP_KOR_NM,feature.geometry.coordinates)
            // 네이버 맵에 geojson 정보 올려주기
            map.data.addGeoJson(feature);
            // 맵에 올린 geosjon 설정
            map.data.setStyle(function(feature) {
                let color = 'blue';

                if (feature.getProperty('isColorful')) {
                    color = feature.getProperty('color');
                }

                return {
                    fillColor: color,
                    strokeColor: color,
                    strokeWeight: 2,
                    icon: null
                };
            });

            // 해당영역 클릭 이벤트
            map.data.addListener('click', function(e) {
                // e.feature.setProperty('isColorful', true);
                console.log('e',e)
            });

          })

        })

        // map.data.addListener('click', function(e) {
        //     e.feature.setProperty('isColorful', true);
        // });

        // map.data.addListener('dblclick', function(e) {
        //     var bounds = e.feature.getBounds();

        //     if (bounds) {
        //         map.panToBounds(bounds);
        //     }
        // });

        // map.data.addListener('mouseover', function(e) {
        //     map.data.overrideStyle(e.feature, {
        //         strokeWeight: 8,
        //         icon: HOME_PATH +'/img/example/pin_spot.png'
        //     });
        // });

        // map.data.addListener('mouseout', function(e) {
        //     map.data.revertStyle();
        // });
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