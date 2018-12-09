<template>
  <v-app>
    <core-toolbar />

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
import { config } from '@/utils/firebase'
import firebase from 'firebase'

export default {
  mounted () {
    firebase.initializeApp(config)
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
