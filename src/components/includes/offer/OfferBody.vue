<template>
  <div class="flex relative h-14 bg-gray-50 border-b border-gray-200 mb-1">
    <div class="flex items-center">
      <button
        class="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
        @click.stop="store.methods.toggleOfferSidebar()"
        aria-controls="about-sidebar"
        :aria-expanded="store.state.offerSidebarOpen"
      >
        <span class="sr-only">Оферта</span>
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="text-gray-500"
            d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
          />
        </svg>
      </button>
      <div class="flex items-center ml-16">
        Оферта
        {{
          store.state.current_offer == 0
            ? ': нова'
            : ': ' + store.state.current_offer
        }}
        <svg class="w-6 h-6 text-slate-500" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
          />
        </svg>
        Етап {{ store.state.offerEtap }}
      </div>
    </div>
  </div>
  <div v-if="store.state.offerEtap == 1" class="grow p-4">
    <div
      class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 mb-3"
    >
      <div class="flex flex-col mt-2 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="offer.client_id"
        >
          <option value="0">Избери клиент</option>
          <option
            v-for="client in store.state.offer_clienti"
            :key="client.id"
            :value="client.id"
          >
            {{ clentName(client.first_name, client.last_name, client.name) }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-2 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="offer.obekt_id"
        >
          <option value="0">Избери обект</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'OfferBody',

  setup() {
    const store = inject('store')

    const offer = computed(() => {
      if (store.state.current_offer == 0) {
        return {
          client_id: 0,
          obekt_id: 0,
        }
      } else {
        return store.state.offers_temp.find(
          (element) => element.id == store.state.current_offer
        )
      }
    })

    const clentName = (first_name, last_name, name) => {
      let client_name = first_name
      if (first_name != '') {
        client_name += ' '
      }
      client_name += last_name
      if ((first_name != '' || last_name != '') && name != '') {
        client_name += ' - '
      }
      client_name += name
      return client_name
    }

    return { store, offer, clentName }
  },
}
</script>
