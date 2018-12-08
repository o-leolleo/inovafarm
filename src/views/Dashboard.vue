<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <sensor-card
        name="Sensor da linha 1"
        :flow="20"
        :flowMin="30"
        :flowMax="100"
      />

      <sensor-card
        name="Sensor da linha 2"
        :flow="20"
        :flowMin="10"
        :flowMax="100"
      />

      <sensor-card
        name="Sensor da linha 3"
        :flow="110"
        :flowMin="10"
        :flowMax="100"
      />
    </v-layout>
  </v-container>
</template>

<script>
import SensorCard from '@/components/app/SensorCard';

export default {
  components: {
    SensorCard
  }
};
</script>
