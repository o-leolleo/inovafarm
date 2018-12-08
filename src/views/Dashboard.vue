<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        sm6
        xs12
        md6
      >
        <v-card>
          <v-card-title primary-title>
            <v-container fluid>
              <div
                class="headline"
              >
                Sensor da linha 1
              </div>

              <v-progress-linear
                indeterminate
              />
            </v-container>
          </v-card-title>
          <v-card-actions>
            <v-btn
              flat
              color="success"
            >
              Detalhes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
}
</script>
