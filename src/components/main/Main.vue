<template>
  <div class="naverMap" id="map">
    <!-- <img src="../../assets/geojson/hangjeongdong_gwd.geojson" alt=""> -->
  </div>
</template>

<script>
import axios from 'axios';
import { computed } from "vue";
import { mapGetters, useStore } from "vuex";
import { defineComponent } from 'vue'

export default defineComponent({
  name:'naverMap',
  // data(){
  //   return{
  //     // map : {},
  //     mapOptions : {
  //         center: new naver.maps.LatLng(37.3595704, 127.105399),
  //         zoom: 10,
  //         lat: 36.3595704,
  //         lng: 127.705399,
  //     },
  //     geojsonData : {},
  //     geojsonUrl : '/geojson/TL_SCCO_CTPRVN.json',

  //     // selectedFeature : {},
  //   }
  // },
  setup(){
    
    const mapOptions = {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
      lat: 36.3595704,
      lng: 127.705399,
    }

    const geojsonData = {};
    const geojsonUrl = '/geojson/TL_SCCO_CTPRVN.json';

    const store = useStore();

    const selectedArea = computed(()=> store.getters.getSelectedArea);
    const clickArea = (areaCd) => store.dispatch('FETCH_SELECTED_AREA',areaCd);

    return {
      mapOptions,
      geojsonData,
      geojsonUrl,

      selectedArea,
      clickArea
    }
  },
  components:{

  },
  created(){
    console.log('created',this)
  },
  mounted(){
    // console.log('mounted',this)
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
    }
    // 지도 그려진 후에 geojson 그리기
    // this.drawGeojson(),

    // this.startDataLayer(map , this.geojsonUrl),

  
    );

    this.startDataLayer(map),
    console.log('map',map)

    // this.clickArea(46);

    console.log('selectedArea',this.selectedArea)

  },
  methods:{
    // drawGeojson(){
    //   console.log('drawGeojson');
    // },
    test(test){
      console.log('test',test)
    },

    startDataLayer(map) {     console.log('startDataLayer',this)

        // 대한민국 전국 geojson 파일 불러오기
        return axios.get("/geojson/TL_SCCO_CTPRVN.json").then(res=>{
          // let features = res.data.features;

          res.data.features.forEach(feature=>{
            // console.log('features',feature.properties.CTP_KOR_NM,feature.geometry.coordinates)

            // 네이버 맵에 geojson 정보 올려주기
            map.data.addGeoJson(feature);
            // 맵에 올린 geosjon 설정
            map.data.setStyle(function(feature) {
                let color = 'blue';

                if (feature.getProperty('isColorful')) {
                    // color = feature.getProperty('color');
                    color = 'red';
                }

                return {
                    fillColor: color,
                    strokeColor: color,
                    strokeWeight: 2,
                    icon: null
                };
            });

          })

          // 해당영역 클릭 이벤트
          map.data.addListener('click', function(e) {
            // 단일 영역만 선택이 되어야함
            // this.clickArea(e.feature.property_CTPRVN_CD);
            console.log('this',this)

            e.feature.setProperty('isColorful', true);
            console.log('영역 클릭', e.feature.property_CTP_KOR_NM , e)
          });

          // 해당영역 마우스 오버
          map.data.addListener('mouseover', function(e) {
              map.data.overrideStyle(e.feature, {
                  strokeWeight: 4,
                  // icon: HOME_PATH +'/img/example/pin_spot.png'
              });
          });

          // 해당영역 마우스 아웃
          map.data.addListener('mouseout', function(e) {
              map.data.revertStyle();
          });

        });

        // map.data.addListener('click', function(e) {
        //     e.feature.setProperty('isColorful', true);
        // });

        // map.data.addListener('dblclick', function(e) {
        //     var bounds = e.feature.getBounds();

        //     if (bounds) {
        //         map.panToBounds(bounds);
        //     }
        // });


    }
  },
})  
</script>

<style>
.naverMap{
  width: 40%;
  height: 100%;
}
</style>