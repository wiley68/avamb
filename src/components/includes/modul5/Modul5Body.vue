<template>
  <div>Modul 5 Body</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul5Body',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
