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
              <td>{{ item.dateTime }}</td>
              <td>{{ item.flow }}</td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
        text: 'Data hora',
        value: 'dateTime'
      },
      {
        sortable: false,
        text: 'Vazão',
        value: 'flow'
      }
    ],
    items: [
      {
        dateTime: '20/12/2018 12:00',
        flow: '20'
      },
      {
        dateTime: '20/12/2018 12:15',
        flow: '25'
      }, {
        dateTime: '20/12/2018 12:30',
        flow: '26'
      }, {
        dateTime: '20/12/2018 12:45',
        flow: '29'
      }, {
        dateTime: '20/12/2018 13:00',
        flow: '30'
      }, {
        dateTime: '20/12/2018 13:15',
        flow: '40'
      }
    ]
  })
}
</script>
