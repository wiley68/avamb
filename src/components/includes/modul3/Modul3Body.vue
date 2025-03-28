<template>
  <div>Modul 3 Body</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul3Body',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
