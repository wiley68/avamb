<template>
  <main><PdogovorBody /></main>
</template>

<script>
import { inject } from 'vue'
import PdogovorBody from './pdogovor/PdogovorBody.vue'

export default {
  name: 'Pdogovori',

  components: { PdogovorBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
