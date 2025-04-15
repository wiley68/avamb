<template>
  <main>
    <!-- <div class="relative flex">
      <Modul4Sidebar />
      <Modul4Body v-if="store.state.current_modul4_id != 0" />
    </div> -->
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
