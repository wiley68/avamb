<template>
  <main><CastBody /></main>
</template>

<script>
import { inject } from 'vue'
import CastBody from './includes/casti/CastBody.vue'

export default {
  name: 'Casti',

  components: { CastBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
