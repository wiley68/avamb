<template>
  <main>
    <RazmeriBody />
  </main>
</template>

<script>
import { inject } from 'vue'
import RazmeriBody from './razmeri/RazmeriBody.vue'

export default {
  name: 'Razmeri',

  components: { RazmeriBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
