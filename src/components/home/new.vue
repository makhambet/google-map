<template>
    <div class="map-block">
        <GoogleMap
            class="map"
        :center="{ lat: 43.245324, lng: 76.937071 }"
        :zoom="13"
        :clickActive="true"
        :getLatLng="true"
        :mapType="'hybrid'"
        :moveActive="false"
         disableDefaultUI="true"
         mapTypeControl="true"
        @mousedown="onMouseDown"
        :polylines="{
      strokeColor: '#FF0000',
      coords: [
        { lat: 37.772, lng: -122.214 },
        { lat: 21.291, lng: -157.821 },
        { lat: -18.142, lng: 178.431 },
        { lat: -27.467, lng: 153.027 },
      ],
    }"
        :markers="[
      {
        lat: 43.214324,
        lng: 76.937071,
        draggable: false,
        title: 'Точка А',
        infoWindow: '<h1>Точка А</h1>'
      },
      {
        lat: 43.245324,
        lng: 76.916071,
        draggable: false,
        title: 'Точка Б',
        infoWindow: '<h2>Точка Б</h2>'
      },
    ]"
    />
</div>
</template>

<script>
    export default {
    name: 'HomeMap',
    methods: {
    onMouseDown(e) {
    console.log(e)
}
},
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
