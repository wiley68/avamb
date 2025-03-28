<template>
  <div>Modul 4</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul4',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
