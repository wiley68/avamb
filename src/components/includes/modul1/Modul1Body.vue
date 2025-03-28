<template>
  <div>Modul 1 Body</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul1Body',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
