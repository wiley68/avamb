<template>
  <main>
    <div class="relative flex">
      <Modul1Sidebar />
      <Modul1Body v-if="store.state.current_modul1_id != 0" />
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
