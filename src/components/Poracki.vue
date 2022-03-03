<template>
  <main><PorackaBody /></main>
</template>

<script>
import { inject } from 'vue'
import PorackaBody from './includes/etapna/poracki/PorackaBody.vue'

export default {
  name: 'Poracki',

  components: { PorackaBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
