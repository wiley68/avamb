<template>
  <div class="flex flex-col py-3 w-full">
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Дата</span>
      <input
        type="datetime-local"
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="modul5.dateon"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Наименование на документа</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul5.name"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Оферта</span>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="offer_id"
      >
        <option value="0">Избери оферта</option>
        <option
          v-for="offer in store.state.oferti_temp"
          :key="offer.id"
          :value="offer.id"
        >
          {{ offer.idnomber }}&nbsp;-&nbsp;{{ offer.client_name }}
        </option>
      </select>
    </div>
    <div class="flex justify-between items-center">
      <input
        readonly
        type="text"
        class="w-12 text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Избери клиент"
        v-model="modul5.client_id"
      /><input
        readonly
        type="text"
        class="flex-grow text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Избери клиент"
        v-model="modul5.client_name"
      />
      <button
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
        <option
          v-for="client in clients"
          :key="client.id"
          :value="client"
        >
          {{ clentName(client.first_name, client.last_name, client.name) }}
        </option>
      </select>
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Статус</span>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="modul5.statusi_id"
      >
        <option
          v-for="item in modul5.select_statusi"
          :key="item.id"
          :value="item.id"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Текстово поле горе</span>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="shablon1"
        @change.stop="changeText1()"
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
    <div class="flex flex-col mb-1">
      <textarea
        rows="8"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul5.text1"
      ></textarea>
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Текстово поле долу</span>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="shablon2"
        @change.stop="changeText2()"
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
    <div class="flex flex-col mb-1">
      <textarea
        rows="8"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul5.text2"
      ></textarea>
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">{{ modul5.modul5_info1 }}</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul5.info1"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">{{ modul5.modul5_info2 }}</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul5.info2"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">{{ modul5.modul5_info3 }}</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul5.info3"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">{{ modul5.modul5_info4 }}</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul5.info4"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">{{ modul5.modul5_info5 }}</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul5.info5"
      />
    </div>
  </div>
</template>

<script>
import { inject, computed, ref, onMounted, watch } from 'vue'
import moment from 'moment'

export default {
  name: 'Modul5',

  setup() {
    const store = inject('store')

    const modul5 = computed(() => {
      return store.state.moduli5_temp.find(
        (element) => element.id == store.state.current_modul5_id
      )
    })

    onMounted(() => {
      store.methods.getShabloni()
    })

    const offer_id = ref(modul5.value.offer_id)
    const shablon1 = ref('')
    const shablon2 = ref('')
    const client_search_div = ref(false)
    const client_search = ref('')
    const clients = ref(store.state.offer_clienti)
    const client = ref({})

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    watch(offer_id, async (newOfferId, oldClient) => {
      modul5.value.offer_id = newOfferId
      const offer_selected = store.state.oferti_temp.find(
        (element) => element.id == newOfferId
      )
      if (offer_selected) {
        const client_selected = store.state.offer_clienti.find(
          (element) => element.id == offer_selected.client_id
        )
        if (client_selected) {
          modul5.value.client_id = client_selected.id
          modul5.value.client_name = clentName(
            client_selected.first_name,
            client_selected.last_name,
            client_selected.name
          )
        }
      }
    })

    const changeText1 = () => {
      modul5.value.text1 = shablon1.value
    }

    const changeText2 = () => {
      modul5.value.text2 = shablon2.value
    }

    watch(client_search, async (newSearch, oldSearch) => {
      if (newSearch.length > 0) {
        clients.value = store.state.offer_clienti.filter((element) => {
          return (
            element.first_name
              .toLowerCase()
              .includes(newSearch.toLowerCase()) ||
            element.last_name.toLowerCase().includes(newSearch.toLowerCase()) ||
            element.name.toLowerCase().includes(newSearch.toLowerCase())
          )
        })
      } else {
        clients.value = store.state.offer_clienti
      }
    })

    const clentName = (first_name, last_name, name) => {
      let client_name = name
      if (name != '') {
        client_name += ' - '
      }
      client_name += last_name
      if ((name != '' || last_name != '') && first_name != '') {
        client_name += ' - '
      }
      client_name += first_name
      return client_name
    }

    const changeClient = () => {
      store.methods.getObekti(modul5.value.client_id)
    }

    watch(client, async (newClient, oldClient) => {
      modul5.value.client_id = newClient.id
      modul5.value.client_name = clentName(
        newClient.first_name,
        newClient.last_name,
        newClient.name
      )
    })

    return {
      store,
      modul5,
      formatDateTime,
      offer_id,
      shablon1,
      changeText1,
      changeText2,
      shablon2,
      client_search_div,
      client_search,
      clients,
      clentName,
      client,
      changeClient,
    }
  },
}
</script>
