<template>
  <v-app>
    <core-toolbar @input="setFilter"/>

    <core-drawer />

    <core-view />
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('filter', ['setFilter'])
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
