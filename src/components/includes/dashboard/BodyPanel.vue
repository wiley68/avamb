<template>
  <div
    v-for="offer in getOffers()"
    :key="offer.id"
    class="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-2"
  ></div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'BodyPanel',

  setup() {
    const store = inject('store')

    const getOffers = () => {
      return store.state.offers
    }

    return { store, getOffers }
  },
}
</script>
