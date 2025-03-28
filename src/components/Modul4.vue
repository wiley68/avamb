<template>
  <main>
    <div class="relative flex">
      <Modul4Sidebar />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.modul4SidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <Modul4Body />
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import Modul4Sidebar from './includes/modul4/Modul4Sidebar.vue'
import Modul4Body from './includes/modul4/Modul4Body.vue'

export default {
  name: 'Modul4',

  components: {
    Modul4Sidebar,
    Modul4Body,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
