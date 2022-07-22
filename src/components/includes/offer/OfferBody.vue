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
        Оферта-{{ store.state.current_oferti }} Етап
        {{ store.state.offerEtap }}
      </div>
      <div class="flex items-center">
        <button
          v-if="
            store.state.offerEtap == 4 && store.state.offerSidebarProductOpen
          "
          class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
          aria-controls="success-modal"
          @click.stop="addProduct()"
        >
          <svg
            class="w-6 h-6 fill-current text-blue-600 shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M3 16H10V14H3M18 14V10H16V14H12V16H16V20H18V16H22V14M14 6H3V8H14M14 10H3V12H14V10Z"
            />
          </svg>
        </button>
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
      </div>
    </div>
  </div>
  <div v-if="store.state.offerEtap == 1" class="grow p-4">
    <div
      class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 mb-3"
    >
      <div class="flex flex-col mt-2 w-full">
        <div class="flex justify-between items-center">
          <input
            readonly
            type="text"
            class="w-12 text-sm border rounded-sm border-gray-100 p-1"
            placeholder="Избери клиент"
            v-model="offer.client_id"
          /><input
            readonly
            type="text"
            class="flex-grow text-sm border rounded-sm border-gray-100 p-1"
            placeholder="Избери клиент"
            v-model="offer.client_name"
          /><button
            @click.stop="client_search_div = !client_search_div"
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        v-show="client_search_div"
        class="bg-red-50 w-full mt-2 rounded p-2 border border-red-300 flex flex-col items-center justify-center"
      >
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Търси клиент ..."
          v-model="client_search"
        />
        <select
          size="8"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="client"
          @change.stop="changeClient()"
        >
          <option v-for="client in clients" :key="client.id" :value="client">
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
  <div v-if="store.state.offerEtap == 2" class="grow p-4">
    <div
      class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 mb-3"
    >
      <div class="flex flex-col mt-5 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="shablon1"
          @change.stop="changeInfo1()"
        >
          <option value="">Избери от моите шаблони</option>
          <option
            v-for="shablon in store.state.shabloni"
            :key="shablon.name"
            :value="shablon.description"
          >
            {{ shablon.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-1 w-full">
        <textarea
          rows="8"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="offer.info1"
        />
      </div>
      <div class="flex flex-col mt-5 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="shablon2"
          @change.stop="changeInfo2()"
        >
          <option value="">Избери от моите шаблони</option>
          <option
            v-for="shablon in store.state.shabloni"
            :key="shablon.name"
            :value="shablon.description"
          >
            {{ shablon.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-1 w-full mb-5">
        <textarea
          rows="8"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="offer.info2"
        />
      </div>
    </div>
  </div>
  <div v-if="store.state.offerEtap == 4" class="grow">
    <div class="relative flex">
      <OfferSidebarProduct />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="
          store.state.offerSidebarProductOpen
            ? 'translate-x-1/3'
            : 'translate-x-0'
        "
      >
        <OfferBodyProduct />
      </div>
    </div>
  </div>
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
</template>

<script>
import { inject, computed, ref, onMounted, watch } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'
import OfferSidebarProduct from './OfferSidebarProduct.vue'
import OfferBodyProduct from './OfferBodyProduct.vue'

export default {
  name: 'OfferBody',

  components: { ModalBlank, OfferSidebarProduct, OfferBodyProduct },

  setup() {
    const store = inject('store')

    const shablon1 = ref('')
    const shablon2 = ref('')
    const client_search_div = ref(false)
    const client_search = ref('')
    const clients = ref(store.state.offer_clienti)
    const client = ref({})

    const offer = computed(() => {
      if (store.state.current_oferti == 0) {
        return {
          id: 0,
          idnomber: 0,
          client_id: 0,
          client_name: '',
          obekt_id: 0,
          text1: '',
          text2: '',
          dds: '-1',
          status_offer: '0',
          info1: '',
          info2: '',
        }
      } else {
        return store.state.oferti_temp.find(
          (element) => element.idnomber == store.state.current_oferti
        )
      }
    })

    onMounted(() => {
      store.methods.getObekti(offer.value.client_id)
      if (offer.value.id != 0) {
        store.methods.getSuboffers(offer.value.id)
        store.methods.getProduktiMain()
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
      if (offer.value.dds == '-1') {
        alert('Моля изберете ДДС!')
        return
      }
      if (offer.value.status == '0') {
        alert('Моля изберете статус!')
        return
      }
      store.methods.saveOffer(offer.value)
      if (store.state.current_oferti == 0) {
        store.methods.changePage('Landing')
      }
      setTimeout(
        () => {
          store.methods.changePage('Offer')
        },
        '1000',
        store
      )
    }

    const changeInfo1 = () => {
      offer.value.info1 = shablon1.value
    }

    const changeInfo2 = () => {
      offer.value.info2 = shablon2.value
    }

    const addProduct = () => {
      store.state.current_suboffer = 0
      store.methods.closeOfferSidebarProduct()
    }

    watch(client_search, async (newSearch, oldSearch) => {
      if (newSearch.length > 0) {
        clients.value = store.state.offer_clienti.filter((element) => {
          return element.first_name
            .toLowerCase()
            .includes(newSearch.toLowerCase())
        })
      } else {
        clients.value = store.state.offer_clienti
      }
    })

    watch(client, async (newClient, oldClient) => {
      offer.value.client_id = newClient.id
      offer.value.client_name = clentName(
        newClient.first_name,
        newClient.last_name,
        newClient.name
      )
    })

    return {
      store,
      offer,
      clentName,
      changeClient,
      updateOffer,
      changeInfo1,
      shablon1,
      shablon2,
      changeInfo2,
      addProduct,
      client_search_div,
      client_search,
      clients,
      client,
    }
  },
}
</script>
