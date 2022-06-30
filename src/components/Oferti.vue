<template>
  <main>
    <div class="relative flex">
      <OfertiSidebar />
    </div>
  </main>
</template>

<script>
import { inject, onMounted } from 'vue'
import OfertiSidebar from './includes/oferti/OfertiSidebar.vue'

export default {
  name: 'Oferti',

  components: {
    OfertiSidebar,
  },

  setup() {
    const store = inject('store')

    onMounted(() => {
      store.methods.getOferti()
    })

    return { store }
  },
}
</script>
