<template>
  <div
    id="inbox-sidebar"
    class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out"
    :class="
      store.state.storeminusiSidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
                @click.stop="store.methods.saveStoreminus(0)"
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
              <div class="font-medium">Експедиционни бележки</div>
            </div>
          </div>
        </div>
        <div class="px-5 py-4">
          <div class="mt-4">
            <ul class="mb-6">
              <li
                v-for="storeminus in store.state.storeminusi_temp"
                :key="storeminus.id"
                class="-mx-2 mb-2"
              >
                <button
                  class="flex w-full p-1 text-left hover:bg-indigo-100 border hover:border-indigo-200"
                  :class="
                    storeminus.id == store.state.current_storeminus_id
                      ? 'bg-indigo-100 border-indigo-200'
                      : 'bg-gray-100 border-gray-200'
                  "
                  @click.stop="changeStoreminus(storeminus.id)"
                >
                  <div class="grow">
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
                    >
                      <div>
                        <span class="text-red-600"
                          >№&nbsp;{{ storeminus.id }}</span
                        >
                      </div>
                      <div>{{ storeminus.client_name }}</div>
                      <div>{{ formatDateTime(storeminus.dateon) }}</div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
                    >
                      <div>
                        <span>Цена:&nbsp;{{ storeminus.price }}</span>
                      </div>
                      <div
                        class="bg-green-600 w-32 flex flex-row justify-center items-center text-white"
                        :style="{
                          color: storeminus.stat_color,
                          backgroundColor: storeminus.stat_bg,
                        }"
                      >
                        {{ storeminus.status_txt }}
                      </div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
                    >
                      <div class="overflow-clip">
                        <span>Първ. док.:&nbsp;{{ storeminus.parvicen }}</span>
                      </div>
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
import moment from 'moment'

export default {
  name: 'StoreminusSidebar',

  setup() {
    const store = inject('store')

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
      }
    }

    const changeStoreminus = (storeminus_id) => {
      store.methods.changeStoreminus(storeminus_id)
      store.methods.closeStoreminusSidebar()
    }

    return {
      store,
      formatDateTime,
      changeStoreminus,
    }
  },
}
</script>
