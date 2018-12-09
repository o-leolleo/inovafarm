<template>
  <div>
    <div class="mapouter">
      <div class="gmap_canvas">
        <gmap-map
          :center="center"
          :zoom="zoom"
          map-type-id="satellite"
          style="width: 100%; height: 100%"
        >
          <gmap-marker
            v-for="(position, key) in positions"
            :key="key"
            :position="position"
            @click="center=position"
          />
        </gmap-map>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    sensorId: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      zoom: 18
    }
  },

  computed: {
    ...mapState(['sensors']),

    positions () {
      return this.sensors.map(({ position }) => position) || []
    },

    sensor () {
      return this.sensors.filter(sensor => sensor.id === this.sensorId)[0]
    },

    center () {
      return (this.sensor && this.sensor.position) || this.positions[this.positions.length - 1] || { lat: -9.4092723, lng: -40.5091752 }
    }
  },
}
</script>

<style>
.mapouter {
  text-align:right;
  height:100%;
  width:100%;
  position: absolute;
}
.gmap_canvas {
  overflow:hidden;
  background:none!important;
  height:100%;
  width:100%;
}
</style>
