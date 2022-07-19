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
  <div
    class="flex flex-wrap justify-center items-center space-y-2 p-4 sm:p-6 mb-2"
  >
    <div>
      <button
        class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
        title="Създай оферта"
        @click.stop="createOffer()"
      >
        <svg
          class="w-6 h-6 fill-current text-blue-600 mr-1 shrink-0"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z"
          />
        </svg>
      </button>
    </div>
  </div>
  <ul class="mb-6">
    <li v-for="offer in getOffers()" :key="offer.id" class="-mx-2 mb-1">
      <button
        class="w-full p-2 rounded bg-sky-200 border border-sky-300"
        @click.stop="editOffer(offer.idnomber)"
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

export default {
  name: 'Oferti',

  setup() {
    const store = inject('store')

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

    const getOffers = () => {
      return store.state.oferti_temp
    }

    const createOffer = () => {
      store.state.current_oferti = 0
      store.methods.changePage('Offer')
    }

    const editOffer = (offer_idnomber) => {
      store.state.current_oferti = offer_idnomber
      store.state.current_suboffer = 0
      store.methods.changePage('Offer')
    }

    return {
      store,
      typeUser,
      getOffers,
      editOffer,
      createOffer,
    }
  },
}
</script>
