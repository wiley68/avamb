<template>
  <main>
    <div class="relative flex">
      <OfferSidebar />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.offerSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
        "
      >
        <OfferBody />
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import OfferSidebar from './includes/offer/OfferSidebar.vue'
import OfferBody from './includes/offer/OfferBody.vue'

export default {
  name: 'Offer',

  components: {
    OfferSidebar,
    OfferBody,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
