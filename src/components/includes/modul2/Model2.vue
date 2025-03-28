<template>
  <div>Modul 2</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul2',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
