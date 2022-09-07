<template>
  <main>
    <div class="relative flex">
      <ProformiSidebar />
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import ProformiSidebar from './includes/proformi/ProformiSidebar.vue'

export default {
  name: 'Proformi',

  components: {
    ProformiSidebar,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
