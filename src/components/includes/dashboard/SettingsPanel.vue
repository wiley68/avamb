<template>
  <div
    class="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-2"
  ></div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'SettingsPanel',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
