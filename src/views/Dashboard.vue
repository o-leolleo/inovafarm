<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <sensor-card
        v-for="({ id, name, readings }, key) in sensors"
        :key="key"
        :id="id"
        :name="name"
        :flow="readings[readings.length - 1].flow"
        :flow-min="10"
        :flow-max="40"
        @detail="onClickDetail"
        @location="onClickLocation"
      />
    </v-layout>

  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import SensorCard from '@/components/app/SensorCard'

export default {
  components: {
    SensorCard
  },

  computed: {
    ...mapState(['sensors'])
  },

  methods: {
    onClickDetail (sensorId) {
      this.$router.push(`/table-list/${sensorId}`)
    },

    onClickLocation (sensorId) {
      console.log(sensorId)
    }
  }
}
</script>
