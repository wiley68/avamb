<template>
  <main>
    <div class="relative flex">
      <!-- <DashboardSidebar /> -->
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.dashboardSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <!-- <DashboardBody /> -->
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
// import DashboardSidebar from './includes/dashboard/DashboardSidebar.vue'
// import DashboardBody from './includes/dashboard/DashboardBody.vue'

export default {
  name: 'Oferti',

  components: {
    // DashboardSidebar,
    // DashboardBody,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
