<template>
  <main><ZapitvaneBody /></main>
</template>

<script>
import { inject } from 'vue'
import ZapitvaneBody from './includes/etapna/zapitvane/ZapitvaneBody.vue'

export default {
  name: 'Zapitvane',

  components: { ZapitvaneBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
