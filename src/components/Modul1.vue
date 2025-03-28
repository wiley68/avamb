<template>
  <main>
    <div class="relative flex">
      <Modul1Sidebar />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.modul1SidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <Modul1Body />
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import Modul1Sidebar from './includes/modul1/Modul1Sidebar.vue'
import Modul1Body from './includes/modul1/Modul1Body.vue'

export default {
  name: 'Modul1',

  components: {
    Modul1Sidebar,
    Modul1Body,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
