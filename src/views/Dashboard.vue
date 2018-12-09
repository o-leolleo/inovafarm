<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        v-for="({ id, name, readings }, key) in sensorList"
        :key="key"
        xs12
        sm6
        md6
      >
        <sensor-card
          v-if="readings[readings.length - 1]"
          :id="id"
          :name="name"
          :flow="readings[readings.length - 1].flow "
          :flow-min="10"
          :flow-max="40"
          @detail="onClickDetail"
        />
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import SensorCard from '@/components/app/SensorCard'
import _ from 'lodash'

const normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default {
  components: {
    SensorCard
  },

  computed: {
    ...mapState(['sensors']),

    ...mapState('filter', {
      filter: ({ value }) => value
    }),

    sensorList () {
      return _.filter(this.sensors, ({ name }) => normalize(name).match(new RegExp(normalize(this.filter))))
    }
  },

  methods: {
    onClickDetail (sensorId) {
      this.$router.push(`/table-list/${sensorId}`)
    }
  }
}
</script>
