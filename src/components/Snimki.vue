<template>
  <main><SnimkaBody /></main>
</template>

<script>
import { inject } from 'vue'
import SnimkaBody from './includes/snimki/SnimkaBody.vue'

export default {
  name: 'Snimki',

  components: { SnimkaBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
