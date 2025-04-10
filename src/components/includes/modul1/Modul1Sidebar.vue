<template>
  <div
    id="inbox-sidebar"
    class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out"
    :class="
      store.state.modul1SidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
                @click.stop="store.methods.saveModul1(0)"
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
              <div class="font-medium">Модул 1</div>
            </div>
          </div>
        </div>
        <div class="px-5 py-4">
          <div class="mt-4">
            <ul class="mb-6">
              <li
                v-for="modul1 in store.state.moduli1_temp"
                :key="modul1.id"
                class="-mx-2 mb-2"
              >
                <button
                  class="flex w-full p-1 text-left hover:bg-indigo-100 border hover:border-indigo-200"
                  :class="
                    modul1.id == store.state.current_modul1_id
                      ? 'bg-indigo-100 border-indigo-200'
                      : 'bg-yellow-100 border-yellow-200'
                  "
                  @click.stop="changeModul1(modul1.id)"
                >
                  <div class="grow">
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
                    >
                      <div>
                        <span class="text-red-600">№&nbsp;{{ modul1.id }}</span>
                      </div>
                      <div>Оферта - {{ modul1.offer_id_txt }}</div>
                      <div>{{ modul1.output_date }}</div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate"
                    >
                      <div>
                        {{ modul1.name }}
                      </div>
                      <div
                        class="bg-green-600 w-32 flex flex-row justify-center items-center text-white"
                        :style="{
                          backgroundColor: getStatusColor(modul1),
                        }"
                      >
                        {{ getStatusName(modul1) }}
                      </div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate"
                    >
                      <div class="overflow-clip">
                        <span>{{ modul1.client_id_txt }}</span>
                      </div>
                    </div>
                    <div class="break-all text-sm text-gray-500 font-medium">
                      {{ modul1.modul1_info1 }} - {{ modul1.info1 }}
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
import Modul1 from './Modul1.vue'

export default {
  name: 'Modul1Sidebar',

  components: { Modul1 },

  setup() {
    const store = inject('store')

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
      }
    }

    const changeModul1 = (modul1_id) => {
      const modul1 = store.state.moduli1_temp.find(
        (element) => element.id == modul1_id
      )
      store.methods.changeModul1(modul1_id)
      store.methods.closeModul1Sidebar()
    }

    const getStatusName = (modul1) => {
      const status_name = modul1.select_statusi.find(
        (element) => element.id == modul1.statusi_id
      )
      return status_name ? status_name.name : ''
    }

    const getStatusColor = (modul1) => {
      const status_color = modul1.select_statusi.find(
        (element) => element.id == modul1.statusi_id
      )
      return status_color ? status_color.color : ''
    }

    return {
      store,
      formatDateTime,
      changeModul1,
      getStatusName,
      getStatusColor,
    }
  },
}
</script>
