<template>
  <main>
    <div class="relative flex">
      <Modul2Sidebar />
      <Modul2Body v-if="store.state.current_modul2_id != 0" />
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
