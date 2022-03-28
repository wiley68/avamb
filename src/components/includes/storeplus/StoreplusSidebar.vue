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
                @click.stop="newStoreminus()"
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
                  @click.stop="changeStoreminusi(storeminus.id)"
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
                      <div>
                        {{ storeminus.contragent_id }}&nbsp;-&nbsp;{{
                          getClientName(storeminus.contragent_id)
                        }}
                      </div>
                      <div>{{ formatDateTime(storeminus.dateon) }}</div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
                    >
                      <div>
                        <span>Цена:&nbsp;{{ storeminus.price }}</span>
                      </div>
                      <div
                        class="w-32 flex flex-row justify-center items-center"
                        :class="
                          storeminus.status == 0
                            ? 'bg-gray-300 text-gray-600'
                            : 'bg-green-600 text-white'
                        "
                      >
                        {{ getStatusText(storeminus.status) }}
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
                <div
                  v-if="
                    storeminus.id == store.state.current_storeminus_id &&
                    sub_storeminusi.length > 0
                  "
                  class="flex flex-col w-full rounded-b text-left bg-orange-50 border-l border-r border-b border-orange-200"
                >
                  <div
                    class="flex flex-row justify-between border-b border-dotted border-gray-200 hover:bg-orange-100 px-1 py-0.5"
                    v-for="sub_storeminus in sub_storeminusi"
                    :key="sub_storeminus.id"
                    :class="
                      sub_storeminus.id == store.state.current_sub_storeminus_id
                        ? 'bg-orange-100'
                        : ''
                    "
                  >
                    <button
                      class="text-sm flex justify-between flex-grow whitespace-nowrap overflow-hidden overflow-ellipsis"
                      @click.stop="changeSubstoreminus(sub_storeminus.id)"
                    >
                      <div>{{ sub_storeminus.product_name }}</div>
                      <div>{{ sub_storeminus.quantity }}</div>
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'StoreplusSidebar',

  setup() {
    const store = inject('store')

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY')
      }
    }

    const changeStoreminusi = (storeminus_id) => {
      store.methods.changeStoreminusi(storeminus_id)
      store.methods.closeStoreminusiSidebar()
    }

    const getClientName = (contragent_id) => {
      if (contragent_id != 0) {
        return store.state.clienti.find(
          (element) => element.id == contragent_id
        ).name
      } else {
        return ''
      }
    }

    const newStoreminus = () => {
      const new_storeminus = {
        id: -1,
        contragent_id: 0,
        dateon: moment().format('YYYY-MM-DD'),
        parvicen: '',
        price: '0.00',
        stat_bg: '#dcdcdc',
        stat_color: '#708090',
        status: 0,
        status_txt: 'Типова',
      }
      store.state.storeminusi.splice(0, 0, new_storeminus)
      store.state.storeminusi_temp.splice(0, 0, new_storeminus)
      store.state.current_storeminus_id = new_storeminus.id
      store.methods.toggleStoreminusiSidebar()
    }

    const sub_storeminusi = computed(() => {
      return store.state.sub_storeminusi
    })

    const getStatusText = (status) => {
      if (status == 0) {
        return 'Типова'
      } else {
        return 'Приключена'
      }
    }

    return {
      store,
      formatDateTime,
      changeStoreminusi,
      getClientName,
      newStoreminus,
      sub_storeminusi,
      getStatusText,
    }
  },
}
</script>
