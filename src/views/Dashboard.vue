<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <sensor-card
        v-for="({ id, name, flow }, key) in sensors"
        :key="key"
        :id="id"
        :name="name"
        :flow="flow"
        @detail="onClickDetail"
        @location="onClickLocation"
      />
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SensorCard from '@/components/app/SensorCard'
import { nodesRef } from '../utils/firebase'

export default {
  components: {
    SensorCard
  },

  firebase: {
    sensors: nodesRef
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
