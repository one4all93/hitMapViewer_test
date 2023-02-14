<template>
  <div class="naverMap" id="map" style="width:100%;height:400px;"></div>
</template>

<script>

export default {
  name:'naverMap',
  data(){
    return{
      mapOptions : {
          center: new naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 10
      },
    }
  },
  components:{

  },
  mounted(){
    var map = new naver.maps.Map('map', this.mapOptions);
  }
}  
</script>

<style>

</style>