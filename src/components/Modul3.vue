<template>
  <main>
    <div class="relative flex">
      <Modul3Sidebar />
      <Modul3Body v-if="store.state.current_modul3_id != 0" />
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
