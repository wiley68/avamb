<template>
  <div id="dashboard-sidebar" class="absolute z-20 top-0 bottom-0 w-full">
    <div
      class="sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]"
    >
      <div><!-- <div class="px-5 py-4"><Dashboard /></div> -->oferti</div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
// import Dashboard from './Dashboard.vue'

export default {
  name: 'OfertiSidebar',

  //   components: { Dashboard },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
