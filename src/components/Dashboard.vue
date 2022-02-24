<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
      <WelcomeBanner />
      <div class="sm:flex sm:justify-between sm:items-center mb-8">
        <DashboardAvatars />
        <div class="grid grid-flow-col sm:auto-cols-max justify-end gap-2">
          <FilterButton align="right" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import WelcomeBanner from './includes/dashboard/WelcomeBanner.vue'
import DashboardAvatars from './includes/dashboard/DashboardAvatars.vue'
import FilterButton from './includes/components/DropdownFilter.vue'

export default {
  name: 'Dashboard',

  components: {
    WelcomeBanner,
    DashboardAvatars,
    FilterButton,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
