<template>
  <main><FakturapBody /></main>
</template>

<script>
import { inject } from 'vue'
import FakturapBody from './includes/fakturip/FakturapBody.vue'

export default {
  name: 'Fakturip',

  components: { FakturapBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
