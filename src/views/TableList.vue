<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        md12
      >
        <material-card
          color="green"
          title="Dados históricos de vazão"
          text="Dados coletados a cada 15 min..."
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="subheading font-weight-light text-success text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ item }"
            >
              <td>{{ item.timestamp }}</td>
              <td>{{ item.flow }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    sensorId: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'Timestamp',
        value: 'timestamp'
      },
      {
        sortable: false,
        text: 'Vazão',
        value: 'flow'
      }
    ]
  }),

  computed: {
    ...mapGetters(['getSensorById']),

    sensor () {
      return this.getSensorById(this.$route.params.sensorId)
    },

    items () {
      return (this.sensor && this.sensor.readings) || []
    }
  }
}
</script>
