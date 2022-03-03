<template>
  <main>
    <div class="relative flex">
      <RabotniSidebar />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.rabotniSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <RabotniBody />
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import RabotniSidebar from './includes/rabotni/RabotniSidebar.vue'
import RabotniBody from './includes/rabotni/RabotniBody.vue'

export default {
  name: 'Rabotni',

  components: { RabotniSidebar, RabotniBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
