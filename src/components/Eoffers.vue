<template>
  <main><EofferBody /></main>
</template>

<script>
import { inject } from 'vue'
import EofferBody from './includes/etapna/eoffers/EofferBody.vue'

export default {
  name: 'Eoffers',

  components: { EofferBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
