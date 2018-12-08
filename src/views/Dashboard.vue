<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <sensor-card
        id="1"
        name="Sensor da linha 1"
        :flow="20"
        :flowMin="30"
        :flowMax="100"
        @detail="onClickDetail"
        @location="onClickLocation"
      />

      <sensor-card
        id="2"
        name="Sensor da linha 2"
        :flow="20"
        :flowMin="10"
        :flowMax="100"
        @detail="onClickDetail"
        @location="onClickLocation"

      />

      <sensor-card
        id="3"
        name="Sensor da linha 3"
        :flow="110"
        :flowMin="10"
        :flowMax="100"
        @detail="onClickDetail"
        @location="onClickLocation"
      />
    </v-layout>
  </v-container>
</template>

<script>
import SensorCard from '@/components/app/SensorCard';

export default {
  components: {
    SensorCard
  },

  methods: {
    onClickDetail(sensorId) {
      console.log(sensorId);
    },

    onClickLocation(sensorId) {
      console.log(sensorId);
    }
  }
}
</script>
