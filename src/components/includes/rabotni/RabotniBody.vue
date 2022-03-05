<template>
  <div></div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'RabotnidBody',

  setup() {
    const store = inject('store')

    return {
      store,
    }
  },
}
</script>
