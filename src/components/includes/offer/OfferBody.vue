<template>
  <div class="flex relative h-14 bg-gray-50 border-b border-gray-200 mb-1">
    <div class="flex justify-between items-center w-full mr-4">
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
        Етап {{ store.state.offerEtap }}
      </div>
      <button
        class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
        aria-controls="success-modal"
        @click.stop="updateOffer()"
      >
        <svg
          class="w-6 h-6 fill-current text-blue-600 shrink-0"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
          />
        </svg>
      </button>
      <ModalBlank
        id="success-modal"
        :modalOpen="store.state.successUpdateOffer"
        @close-modal="store.methods.changeSuccessUpdateOffer(false)"
      >
        <div class="p-5 flex space-x-4">
          <div
            class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-green-100"
          >
            <svg
              class="w-4 h-4 shrink-0 fill-current text-green-500"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
              />
            </svg>
          </div>
          <div>
            <div class="mb-2">
              <div class="text-lg font-semibold text-gray-800">Съобщение</div>
            </div>
            <div class="text-sm mb-10">
              <div class="space-y-2">
                <p>Промените са записани успешно</p>
              </div>
            </div>
            <div class="flex flex-wrap justify-end space-x-2">
              <button
                class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                @click.stop="store.methods.changeSuccessUpdateOffer(false)"
              >
                Затвори
              </button>
            </div>
          </div>
        </div>
      </ModalBlank>
    </div>
  </div>
  <div v-if="store.state.offerEtap == 1" class="grow p-4">
    <div
      class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 mb-3"
    >
      <div class="flex flex-col mt-5 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="offer.client_id"
          @change.stop="changeClient()"
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
          <option
            v-for="obekt in store.state.obekti"
            :key="obekt.id"
            :value="obekt.id"
          >
            {{ obekt.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Инфо 1"
          v-model="offer.text1"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Инфо 2"
          v-model="offer.text2"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="offer.dds"
        >
          <option value="-1">Избери ДДС</option>
          <option
            v-for="dds in store.state.ddsfirm"
            :key="dds.value"
            :value="dds.value"
          >
            {{ dds.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-2 w-full mb-5">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="offer.status_offer"
        >
          <option value="0">Съставена</option>
          <option
            v-for="status in store.state.statusi"
            :key="status.id"
            :value="status.id"
          >
            {{ status.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'

export default {
  name: 'OfferBody',

  components: { ModalBlank },

  setup() {
    const store = inject('store')

    const offer = computed(() => {
      if (store.state.current_offer == 0) {
        return {
          id: 0,
          idnomber: 0,
          client_id: 0,
          obekt_id: 0,
          text1: '',
          text2: '',
          dds: '-1',
          status_offer: '0',
        }
      } else {
        return store.state.offers.find(
          (element) => element.idnomber == store.state.current_offer
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

    const changeClient = () => {
      store.methods.getObekti(offer.value.client_id)
    }

    const updateOffer = () => {
      if (offer.value.client_id == 0) {
        alert('Моля изберете клиент!')
        return
      }
      if (offer.value.obekt_id == 0) {
        alert('Моля изберете обект!')
        return
      }
      if (offer.value.dds == '-1') {
        alert('Моля изберете ДДС!')
        return
      }
      if (offer.value.status == '0') {
        alert('Моля изберете статус!')
        return
      }
      store.methods.saveOffer(offer.value)
    }

    return { store, offer, clentName, changeClient, updateOffer }
  },
}
</script>
