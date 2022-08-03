<template>
  <main>
    <div class="relative flex">
      <DogovoriSidebar />
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import DogovoriSidebar from './includes/dogovori/DogovoriSidebar.vue'

export default {
  name: 'Dogovori',

  components: {
    DogovoriSidebar,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
