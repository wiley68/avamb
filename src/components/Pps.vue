<template>
  <main><PpBody /></main>
</template>

<script>
import { inject } from 'vue'
import PpBody from './includes/etapna/pp/PpBody.vue'

export default {
  name: 'Pps',

  components: { PpBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
