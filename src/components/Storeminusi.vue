<template>
  <main>
    <div class="relative flex">
      <StoreminusSidebar />
      <StoreminusBody v-if="store.state.current_storeminus_id != 0" />
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import StoreminusSidebar from './includes/storeminus/StoreminusSidebar.vue'
import StoreminusBody from './includes/storeminus/StoreminusBody.vue'

export default {
  name: 'Storeminus',

  components: { StoreminusSidebar, StoreminusBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
