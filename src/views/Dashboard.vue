<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
        <v-flex
            sm12
            xs12
            md12
        >
            <v-card>
                <v-list>
                    <v-list-tile @click="clicked()">
                        <v-list-tile-action>
                        <v-icon color="red">mdi-alarm-light</v-icon>

                        </v-list-tile-action>
                            <v-list-tile-title
                                color="danger"
                            >
                                Sensor da linha 1
                            </v-list-tile-title>
                        <div class="d-flex">
                            <v-tooltip
                                top
                                content-class="top"
                            >
                                <v-btn
                                    slot="activator"
                                    class="v-btn--simple"
                                    icon
                                >
                                    <v-icon color="grey">mdi-map-marker</v-icon>
                                </v-btn>
                                <span>Localização</span>
                            </v-tooltip>
                        </div>
                    </v-list-tile>
                </v-list>
            </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
    data () {
        return {
            tabs: 0,
            list: {
                0: false,
                1: false,
                2: false
            }
        }
    },

    methods: {
        clicked() {
            console.log('cliquei');
        }
    }
}
</script>
