<template>
  <div>Modul 4 Body</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul4Body',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
