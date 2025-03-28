<template>
  <main>
    <div class="relative flex">
      <Modul3Sidebar />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.modul3SidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <Modul3Body />
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import Modul3Sidebar from './includes/modul3/Modul3Sidebar.vue'
import Modul3Body from './includes/modul3/Modul3Body.vue'

export default {
  name: 'Modul3',

  components: {
    Modul3Sidebar,
    Modul3Body,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
