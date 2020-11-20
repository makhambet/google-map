<template>
  <div class="map-block">
    <div class="map" id="map" ref="map">
      <map-marker :lat="-27.344" :lng="133.036"></map-marker>
      <map-marker :lat="-26.344" :lng="132.036"></map-marker>
      <map-marker :lat="-25.344" :lng="131.036"></map-marker>
      <map-info-window :lat="-24.344" :lng="130.036">Test 1</map-info-window>
      <map-info-window :lat="-23.344" :lng="129.036">
        <span style="background:red;">Test 2</span>
      </map-info-window>
      <map-info-window :lat="-22.344" :lng="128.036">
        <img
          src="https://1.bp.blogspot.com/_S2Wkv5XI8JI/TUL5MbRnT-I/AAAAAAAAACA/g8V_yjojceA/s1600/woot.jpg"
          height="100px"
        />
      </map-info-window>
    </div>
  </div>
</template>

<script>
import { Loader } from "@googlemaps/js-api-loader"

import MapMarker from "@/components/map/MapMarker"
import MapInfoWindow from "@/components/map/MapInfoWindow"

const loader = new Loader({
  apiKey: "AIzaSyDYjhd-JDSwGWuiZBp_27RfSMOSCB-mTBQ",
  version: "weekly",
})
export default {
  name: 'HomeMap',
  data() {
    return {
      map: null,
      directionsDisplay: null,
      directionsService: null
    }
  },
  methods: {
    getMap(callback) {
      let vm = this
      function checkForMap() {
        if (vm.map) callback(vm.map)
        else setTimeout(checkForMap, 200)
      }
      checkForMap()
    }
  },
  components: {
    MapMarker,
    MapInfoWindow
  },
  mounted() {
    loader.load().then(() => {
      this.map = new window.google.maps.Map(this.$refs['map'], {
        center: {lat: 43.245324, lng: 76.937071},
        // minZoom: 3,
        // maxZoom: 15,
        language: 'en',
        mapTypeControl: false,
        rotateControl: false,
        scaleControl: false,
        streetViewControl: false,
        zoom: 5,
        mapTypeId: 'satellite', // 'terrain' || 'roadmap'
      })
      this.directionsDisplay = new window.google.maps.DirectionsRenderer()
      this.directionsService = new window.google.maps.DirectionsService()
      var request = {
        origin: new window.google.maps.LatLng(43.243605,76.927102), //точка старта
        destination: new window.google.maps.LatLng(51.154978,71.405936), //точка финиша
        travelMode: window.google.maps.DirectionsTravelMode.DRIVING //режим прокладки маршрута
      }



      this.directionsService.route(request, (response, status) => {
        if (status == window.google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response)
        }
      })
      this.directionsDisplay.setMap(this.map)
    })
  }
}
</script>

<style scoped>
  .map-block {
    width: calc(100% - 400px);
  }
  .map {
    width: 100%;
    height: 100%;
  }
</style>
