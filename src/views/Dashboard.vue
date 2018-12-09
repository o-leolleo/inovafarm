<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        xs12
        sm12
        md12
        lg12
      >
        <p class="headline">Sistemas de irrigação {{ flow ? 'funcionando' : 'desligado' }} 
          <v-icon :color="flow ? 'green' : 'red'">{{ flow ? 'check_circle' : 'info' }}</v-icon>
        </p>
      </v-flex>

      <v-flex
        v-for="({ id, name, readings }, key) in sensorList"
        :key="key"
        xs12
        sm6
        md6
      >
        <sensor-card
          :id="id"
          :name="name"
          :readings="readings"
          :flow-min="10"
          :flow-max="40"
          @detail="onClickDetail"
        />
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import SensorCard from '@/components/app/SensorCard'
import _ from 'lodash'

const normalize = (str) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()

export default {
  components: {
    SensorCard
  },

  computed: {
    ...mapGetters(['flow']),

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
