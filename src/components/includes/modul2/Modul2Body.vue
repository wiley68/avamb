<template>
  <div>Modul 2 Body</div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Modul2Body',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
