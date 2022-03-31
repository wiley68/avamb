<template>
  <main><DocposeshteniaBody /></main>
</template>

<script>
import { inject } from 'vue'
import DocposeshteniaBody from './docposeshtenia/DocposeshteniaBody.vue'

export default {
  name: 'Docposeshtenia',

  components: { DocposeshteniaBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
