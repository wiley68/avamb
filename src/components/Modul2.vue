<template>
  <main>
    <div class="relative flex">
      <Modul2Sidebar />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.modul2SidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <Modul2Body />
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import Modul2Sidebar from './includes/modul2/Modul2Sidebar.vue'
import Modul2Body from './includes/modul2/Modul2Body.vue'

export default {
  name: 'Modul2',

  components: {
    Modul2Sidebar,
    Modul2Body,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
