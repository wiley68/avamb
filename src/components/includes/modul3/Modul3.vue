<template>
  <div>Modul 3</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul3',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
