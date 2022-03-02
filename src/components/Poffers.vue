<template>
  <main><PofferBody /></main>
</template>

<script>
import { inject } from 'vue'
import PofferBody from './includes/poffer/PofferBody.vue'

export default {
  name: 'Poffers',

  components: { PofferBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
