<template>
  <main>
    <div class="relative flex">
      <ContragentSidebar />
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import ContragentSidebar from './includes/contragent/ContragentSidebar.vue'

export default {
  name: 'Contragent',

  components: {
    ContragentSidebar,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
