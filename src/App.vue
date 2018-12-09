<template>
  <v-app>
    <core-toolbar @input="setFilter"/>

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import firebase from '@/utils/firebase'

export default {
  mounted () {
    window.firebase = firebase
    this.fetchSensor('NODE1')
  },

  methods: {
    ...mapMutations('filter', ['setFilter']),

    ...mapActions(['fetchSensor'])
  }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';

/* Remove in 1.2 */
.v-datatable thead th.column.sortable i {
  vertical-align: unset;
}
</style>
