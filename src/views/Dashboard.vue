<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        lg12
      >
        <v-card>
          <v-card-title>
            Estado Atual da Irrigação
          </v-card-title>
          <v-card-text
            d-flex
          >
            <p md6>Sensor da linha 2 <v-chip color="blue lighten-4">OK</v-chip></p>
            <v-progress-linear
              indeterminate
              color="blue lighten-4"
            />

            <p md6>Sensor da linha 3 <v-chip color="red">Abaixo do recomendado</v-chip></p>
            <v-progress-linear
              color="red"
              indeterminate
            />

            <p md6>Sensor da linha 4 <v-chip color="red">Acima do normal</v-chip></p>
            <v-progress-linear
              color="red"
              indeterminate
            />
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
