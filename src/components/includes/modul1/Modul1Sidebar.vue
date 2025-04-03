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
                      : modul1.status == 0 || modul1.status == 2
                      ? 'bg-yellow-100 border-yellow-200'
                      : 'bg-gray-100 border-gray-200'
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
                      <div>
                        {{ modul1.sazdadena }}&nbsp;-&nbsp;{{ modul1.srok }}
                      </div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
                    >
                      <div>
                        <span>Оферта&nbsp;-&nbsp;{{ modul1.idnomber }}</span
                        ><span class="text-gray-300">&nbsp;|&nbsp;</span
                        >{{ modul1.tasks_users_txt }}
                      </div>
                      <div
                        class="bg-green-600 w-32 flex flex-row justify-center items-center text-white"
                        :style="{
                          color: modul1.stat_color,
                          backgroundColor: modul1.stat_bg,
                        }"
                      >
                        {{ modul1.stat }}
                      </div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
                    >
                      <div class="overflow-clip">
                        <span>{{ modul1.subject }}</span>
                      </div>
                      <button @click.stop="show = modul1.id">
                        <svg
                          class="w-6 h-6 shrink text-blue-600"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      class="break-all text-sm text-gray-500 font-medium border-t border-indigo-200 border-dot pt-2"
                      v-if="show == modul1.id"
                    >
                      {{ modul1.description }}
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
import { inject, ref } from 'vue'
import Modul1 from './Modul1.vue'

export default {
  name: 'Modul1Sidebar',

  components: { Modul1 },

  setup() {
    const store = inject('store')

    const show = ref(0)

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
      }
    }

    const changeModul1 = (modul1_id) => {
      const modul1 = store.state.moduli1_temp.find(
        (element) => element.id == modul1_id
      )
      store.methods.changeModuli1(modul1_id)
      store.methods.closeModul1Sidebar()
    }

    return { store, formatDateTime, changeModul1, show }
  },
}
</script>
