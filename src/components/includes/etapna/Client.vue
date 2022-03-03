<template>
  <main><ClientBody /></main>
</template>

<script>
import { inject } from 'vue'
import ClientBody from './client/ClientBody.vue'

export default {
  name: 'Client',

  components: { ClientBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
