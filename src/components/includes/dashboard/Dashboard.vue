<template>
  <div class="relative bg-sky-700 p-2 rounded overflow-hidden mb-2">
    <div class="relative">
      <h1 class="text-xl text-white font-medium text-center">
        Етапна визуализация
      </h1>
    </div>
  </div>
  <div
    class="flex flex-wrap justify-center items-center space-y-2 p-4 sm:p-6 mb-2"
  >
    <Datepicker class="mt-2" />
    <div>
      <button
        class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
        title="Покажи всички"
        @click.stop="showAll()"
      >
        <svg class="w-6 h-6 fill-current text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18Z"
          />
        </svg>
      </button>
      <button
        class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
        title="Покажи активните"
        @click.stop="showActive()"
      >
        <svg class="w-6 h-6 fill-current text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9Z"
          />
        </svg>
      </button>
    </div>
  </div>
  <ul class="mb-6">
    <li v-for="offer in getOffers()" :key="offer.id" class="-mx-2 mb-1">
      <button
        class="w-full p-2 rounded bg-sky-200 border border-sky-300"
        @click.stop="openOffer(offer.id)"
      >
        <div class="flex items-start justify-between">
          <div class="flex-grow text-left">
            <span class="text-sm font-medium text-gray-800 mr-1">{{
              offer.client_name
            }}</span>
          </div>
          <div class="ml-1">
            <span class="text-sm font-medium text-orange-700">{{
              offer.idnomber
            }}</span>
          </div>
        </div>
        <div class="flex items-start justify-between">
          <div class="flex-grow text-left"></div>
          <div class="ml-1">
            <span class="text-sm font-medium text-red-700">{{
              offer.allprice_after_to
            }}</span>
          </div>
        </div>
      </button>
    </li>
  </ul>
</template>

<script>
import { inject } from 'vue'
import Datepicker from '../components/Datepicker.vue'

export default {
  name: 'Dashboard',

  components: {
    Datepicker,
  },

  setup() {
    const store = inject('store')

    const changeDashboardOffer = (offer_id) => {
      store.methods.changeDashboardOffer(offer_id)
      store.methods.closeDashboardSidebar()
    }

    const typeUser = () => {
      if (store.state.user.admin == 'Yes') {
        return 'Суперадминистратор'
      } else {
        if (store.state.user.firmadmin == 'Yes') {
          return 'Администратор'
        } else {
          switch (store.state.user.role) {
            case 'scet':
              return 'АС-2'
              break
            case 'sluz':
              return 'АС-3'
              break
            case 'targ':
              return 'АС-1'
              break
            default:
              return ''
              break
          }
        }
      }
    }

    const showAll = () => {
      store.state.finished_offers = 0
      store.methods.getOffers()
    }

    const showActive = () => {
      store.state.finished_offers = 1
      store.methods.getOffers()
    }

    const getOffers = () => {
      return store.state.offers_temp
    }

    const openOffer = (offer_id) => {
      store.methods.changeDashboardOffer(offer_id)
      store.methods.closeDashboardSidebar()
    }

    return {
      store,
      changeDashboardOffer,
      typeUser,
      showAll,
      showActive,
      getOffers,
      openOffer,
    }
  },
}
</script>
