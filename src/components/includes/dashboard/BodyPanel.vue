<template>
  <ul class="mb-6">
    <li v-for="offer in getOffers()" :key="offer.id" class="-mx-2 mb-1">
      <button
        class="w-full p-2 rounded bg-indigo-100 border border-indigo-200"
        @click.stop="openOffer(offer.id)"
      >
        <div class="flex items-center justify-between">
          <div class="truncate">
            <span class="text-sm font-medium text-gray-800 mr-1">{{
              offer.client_name
            }}</span>
          </div>
          <div>
            <span class="text-sm font-medium text-orange-700">{{
              offer.idnomber
            }}</span>
          </div>
        </div>
      </button>
    </li>
  </ul>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'BodyPanel',

  setup() {
    const store = inject('store')

    const getOffers = () => {
      return store.state.offers_temp
    }

    const openOffer = (offer_id) => {}

    return { store, getOffers, openOffer }
  },
}
</script>
