<template>
  <main><OtgovorBody /></main>
</template>

<script>
import { inject } from 'vue'
import OtgovorBody from './otgovor/OtgovorBody.vue'

export default {
  name: 'Otgovor',

  components: { OtgovorBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
