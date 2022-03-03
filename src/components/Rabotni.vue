<template>
  <main>Работни листи</main>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Rabotni',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
