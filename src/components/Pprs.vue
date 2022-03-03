<template>
  <main><PprBody /></main>
</template>

<script>
import { inject } from 'vue'
import PprBody from './includes/etapna/ppr/PprBody.vue'

export default {
  name: 'Pprs',

  components: { PprBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
