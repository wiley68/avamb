<template>
  <main>
    <!-- <div class="relative flex">
      <Modul5Sidebar />
      <Modul5Body v-if="store.state.current_modul5_id != 0" />
    </div> -->
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
