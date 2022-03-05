<template>
  <div
    id="rabotni-sidebar"
    class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out"
    :class="
      store.state.rabotniSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    "
  >
    <div
      class="sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]"
    >
      <div>
        <div class="px-5 py-4"><Raboten /></div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import Raboten from './Raboten.vue'

export default {
  name: 'RabotniSidebar',

  components: { Raboten },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
