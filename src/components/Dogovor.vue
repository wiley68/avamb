<template>
  <main>
    <div class="relative flex">
      <DogovorSidebar />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.dogovorSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <DogovorBody />
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import DogovorSidebar from './includes/dogovori/DogovorSidebar.vue'
import DogovorBody from './includes/dogovori/DogovorBody.vue'

export default {
  name: 'Dogovor',

  components: {
    DogovorSidebar,
    DogovorBody,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
