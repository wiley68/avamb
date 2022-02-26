<template>
  <div v-if="store.state.current_dashboard_offer != 0">dashboard</div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'DashboardBody',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
