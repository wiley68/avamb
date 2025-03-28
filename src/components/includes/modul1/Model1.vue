<template>
  <div>Model 1</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul1',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
