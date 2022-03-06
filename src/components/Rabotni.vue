<template>
  <main>
    <div class="relative flex">
      <RabotniSidebar />
      <RabotniBody
        v-if="
          store.state.current_raboten_id != 0 &&
          store.state.current_poseshtenie_id == 0
        "
      />
      <PoseshteniaBody v-if="store.state.current_poseshtenie_id != 0" />
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import RabotniSidebar from './includes/rabotni/RabotniSidebar.vue'
import RabotniBody from './includes/rabotni/RabotniBody.vue'
import PoseshteniaBody from './includes/poseshtenia/PoseshteniaBody.vue'

export default {
  name: 'Rabotni',

  components: { RabotniSidebar, RabotniBody, PoseshteniaBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
