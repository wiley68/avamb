<template>
  <main>Фирмени задачи</main>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'FirmZadaci',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
