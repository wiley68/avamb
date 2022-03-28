<template>
  <main>
    <div class="relative flex">
      <StoreplusSidebar />
      <StoreplusBody v-if="store.state.current_storeplus_id != 0" />
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import StoreplusSidebar from './includes/storeplus/StoreplusSidebar.vue'
import StoreplusBody from './includes/storeplus/StoreplusBody.vue'

export default {
  name: 'Storeplusi',

  components: { StoreplusSidebar, StoreplusBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
