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
        lg3
      >
        <material-stats-card
          color="green"
          icon="mdi-arrow-right-bold-box"
          title="Revenue"
          value="$34,245"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
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
