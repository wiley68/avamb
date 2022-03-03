<template>
  <main><PdogovorBody /></main>
</template>

<script>
import { inject } from 'vue'
import PdogovorBody from './includes/etapna/pdogovor/PdogovorBody.vue'

export default {
  name: 'Pdogovori',

  components: { PdogovorBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
