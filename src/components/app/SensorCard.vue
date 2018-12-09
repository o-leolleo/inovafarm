<template>
  <v-flex
    xs12
    sm6
    md6
  >
    <v-card>
      <v-card-title
        class="pb-0"
      >
        <div class="headline">
          {{ name }}
        </div>
      </v-card-title>

      <v-card-text>
        <v-layout
          row
          justify-space-around
          class="pl-3 pr-3"
        >
          <span
            :class="irregular ? 'red--text' : 'grey--text'"
            class="display-1 font-weight-thin mr-auto"
          >
            {{ flow }} l/h

            <v-icon
              v-if="irregular"
              color="red"
              large
            >
              {{ icon }}
            </v-icon>
          </span>

          <v-tooltip
            bottom
            color="black"
          >
            <v-icon
              v-if="irregular"
              slot="activator"
              color="yellow"
              x-large
            >
              mdi-alert
            </v-icon>

            <span class="white--text">{{ alertTooltipMessage }}</span>
          </v-tooltip>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-btn
          flat
          color="success"
          @click="$emit('detail', id)"
        >
          Detalhes
        </v-btn>

        <v-btn
          flat
          color="success"
          @click="$emit('location', id)"
        >
          Localização
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      deafult: ''
    },

    flow: {
      type: Number,
      default: 20
    },

    reference: {
      type: Number,
      default: 30
    }
  },

  computed: {
    irregular () {
      return this.flow >= this.reference || this.flow <= this.reference
    },

    alertTooltipMessage () {
      if (this.flow >= this.reference) return 'Fluxo acima do normal'
      else if (this.flow <= this.reference) return 'Fluxo abaixo do normal'
      return ''
    },

    icon () {
      if (this.flow >= this.reference) return 'arrow_upward'
      else if (this.flow <= this.reference) return 'arrow_downward'
      return ''
    }
  }
}
</script>
