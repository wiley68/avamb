<template>
  <main>
    <div class="relative flex">
      <Modul5Sidebar />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.modul5SidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <Modul5Body />
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import Modul5Sidebar from './includes/modul5/Modul5Sidebar.vue'
import Modul5Body from './includes/modul5/Modul5Body.vue'

export default {
  name: 'Modul5',

  components: {
    Modul5Sidebar,
    Modul5Body,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
