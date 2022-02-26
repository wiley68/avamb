<template>
  <div class="relative bg-sky-700 p-2 rounded overflow-hidden mb-2">
    <div class="relative">
      <h1 class="text-xl text-white font-medium">
        AVAMB-LOGICIEL - {{ typeUser() }}
      </h1>
      <p class="text-xl text-white">
        {{ store.state.user.username }}
      </p>
    </div>
  </div>
  <div class="flex flex-row justify-center items-center p-4 sm:p-6 mb-2">
    <Datepicker />
    <button
      class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
      title="Покажи всички"
      @click.stop="showAll()"
    >
      <svg class="w-6 h-6 fill-current text-blue-600" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z"
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
          d="M19,15V19H5V15H19M20,13H4A1,1 0 0,0 3,14V20A1,1 0 0,0 4,21H20A1,1 0 0,0 21,20V14A1,1 0 0,0 20,13M7,18.5A1.5,1.5 0 0,1 5.5,17A1.5,1.5 0 0,1 7,15.5A1.5,1.5 0 0,1 8.5,17A1.5,1.5 0 0,1 7,18.5M19,5V9H5V5H19M20,3H4A1,1 0 0,0 3,4V10A1,1 0 0,0 4,11H20A1,1 0 0,0 21,10V4A1,1 0 0,0 20,3M7,8.5A1.5,1.5 0 0,1 5.5,7A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 8.5,7A1.5,1.5 0 0,1 7,8.5Z"
        />
      </svg>
    </button>
  </div>
  <ul class="mb-6">
    <li v-for="offer in getOffers()" :key="offer.id" class="-mx-2 mb-1">
      <button
        class="w-full p-2 rounded bg-sky-200 border border-sky-300"
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
      store.state.offers_filter_status = 'Yes'
      store.state.offers_temp = store.state.offers
      console.log(store.state)
    }

    const showActive = () => {
      store.state.offers_filter_status = 'No'
      store.state.offers_temp = store.state.offers.filter(
        (element) => element.status == 'No'
      )
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
