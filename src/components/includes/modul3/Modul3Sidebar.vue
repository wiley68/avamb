<template>
  <div
    id="inbox-sidebar"
    class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out"
    :class="
      store.state.modul3SidebarOpen ? 'translate-x-0' : '-translate-x-full'
    "
  >
    <div
      class="sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]"
    >
      <div>
        <div class="sticky top-0 z-10">
          <div
            class="flex items-center bg-white border-b border-gray-200 px-5 h-16"
          >
            <div class="w-full flex items-center justify-between">
              <button
                class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
                @click.stop="store.methods.saveModul3(0)"
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
              <div class="font-medium">Модул 3</div>
            </div>
          </div>
        </div>
        <div class="px-5 py-4">
          <div class="mt-4">
            <ul class="mb-6">
              <li
                v-for="modul3 in store.state.moduli3_temp"
                :key="modul3.id"
                class="-mx-2 mb-2"
              >
                <button
                  class="flex w-full p-1 text-left hover:bg-indigo-100 border hover:border-indigo-200"
                  :class="
                    modul3.id == store.state.current_modul3_id
                      ? 'bg-indigo-100 border-indigo-200'
                      : 'bg-yellow-100 border-yellow-200'
                  "
                  @click.stop="changeModul3Page(modul3.id)"
                >
                  <div class="grow">
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
                    >
                      <div>
                        <span class="text-red-600">№&nbsp;{{ modul3.id }}</span>
                      </div>
                      <div>
                        Оферта - {{ getOfferIdNomber(modul3.offer_id) }}
                      </div>
                      <div>{{ modul3.dateon }}</div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate"
                    >
                      <div>
                        {{ modul3.name }}
                      </div>
                      <div
                        class="bg-green-600 w-32 flex flex-row justify-center items-center text-white"
                        :style="{
                          backgroundColor: getStatusColor(modul3),
                        }"
                      >
                        {{ getStatusName(modul3) }}
                      </div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate"
                    >
                      <div class="overflow-clip">
                        <span>{{ getOfferClientName(modul3.offer_id) }}</span>
                      </div>
                    </div>
                    <div class="break-all text-sm text-gray-500 font-medium">
                      {{ modul3.modul3_info1 }} - {{ modul3.info1 }}
                    </div>
                    <div class="break-all text-sm text-gray-500 font-medium">
                      {{ modul3.modul3_info2 }} - {{ modul3.info2 }}
                    </div>
                    <div class="break-all text-sm text-gray-500 font-medium">
                      {{ modul3.modul3_info3 }} - {{ modul3.info3 }}
                    </div>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import Modul3 from './Modul3.vue'

export default {
  name: 'Modul3Sidebar',

  components: { Modul3 },

  setup() {
    const store = inject('store')

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
      }
    }

    const changeModul3Page = (modul3_id) => {
      store.methods.changeModul3(modul3_id)
      store.methods.closeModul3Sidebar()
    }

    const getStatusName = (modul3) => {
      const status_name = modul3.select_statusi.find(
        (element) => element.id == modul3.statusi_id
      )
      return status_name ? status_name.name : ''
    }

    const getStatusColor = (modul3) => {
      const status_color = modul3.select_statusi.find(
        (element) => element.id == modul3.statusi_id
      )
      return status_color ? status_color.color : ''
    }

    const getOfferIdNomber = (offer_id) => {
      const offer = store.state.oferti_temp.find(
        (element) => element.id == offer_id
      )
      return offer ? offer.idnomber : ''
    }

    const getOfferClientName = (offer_id) => {
      const offer = store.state.oferti_temp.find(
        (element) => element.id == offer_id
      )
      return offer ? offer.client_name : ''
    }

    return {
      store,
      formatDateTime,
      changeModul3Page,
      getStatusName,
      getStatusColor,
      getOfferIdNomber,
      getOfferClientName,
    }
  },
}
</script>
