<template>
  <main>
    <div class="relative flex">
      <ZadaciSidebar />
      <ZadaciBody v-if="store.state.current_zadaca_id != 0" />
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import ZadaciSidebar from './includes/zadaci/ZadaciSidebar.vue'
import ZadaciBody from './includes/zadaci/ZadaciBody.vue'

export default {
  name: 'Zadaci',

  components: { ZadaciSidebar, ZadaciBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
