<template>
  <main><DdsBody /></main>
</template>

<script>
import { inject } from 'vue'
import DdsBody from './dds/DdsBody.vue'

export default {
  name: 'Ddsta',

  components: { DdsBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
