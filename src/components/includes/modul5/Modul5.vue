<template>
  <div>Modul 5</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul5',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
