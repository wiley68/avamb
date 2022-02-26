<template>
  <div v-if="store.state.current_dashboard_offer != 0">
    <div class="relative h-14 bg-gray-200">
      <button
        class="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
        @click.stop="store.methods.toggleDashboardSidebar()"
        aria-controls="about-sidebar"
        :aria-expanded="store.state.dashboardSidebarOpen"
      >
        <span class="sr-only">Етапна визуализация</span>
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
        </svg>
      </button>
    </div>
    <div class="">{{ store.state.current_dashboard_offer }}</div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'DashboardBody',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
