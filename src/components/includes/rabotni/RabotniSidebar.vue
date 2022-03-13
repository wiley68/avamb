<template>
  <div
    id="inbox-sidebar"
    class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out"
    :class="
      store.state.rabotniSidebarOpen ? 'translate-x-0' : '-translate-x-full'
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
                @click.stop="store.methods.saveRaboten(0)"
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
              <div class="font-medium">Работни листи</div>
              <div class="font-medium">
                Заплата:&nbsp;<span class="text-red-600">{{
                  allZaplata()
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 py-4">
          <div class="mt-4">
            <ul class="mb-6">
              <li
                v-for="raboten in store.state.rabotni_temp"
                :key="raboten.id"
                class="-mx-2 mb-2"
              >
                <button
                  class="flex w-full p-1 text-left hover:bg-indigo-100 border hover:border-indigo-200"
                  :class="[
                    raboten.id == store.state.current_raboten_id
                      ? 'bg-indigo-100 border-indigo-200'
                      : 'bg-gray-100 border-gray-200',
                    poseshtenia.length > 0 ? 'rounded-t' : 'rounded',
                  ]"
                  @click.stop="changeRaboten(raboten.id)"
                >
                  <div class="grow truncate">
                    <div class="flex items-center justify-between mb-0.5">
                      <div
                        class="flex text-sm text-gray-500 font-medium truncate"
                      >
                        {{ formatDateTime(raboten.dateon) }}&nbsp;-&nbsp;{{
                          raboten.sluzitel_name
                        }}&nbsp;-&nbsp;{{ raboten.mps_regnomer }}
                      </div>
                    </div>
                    <div
                      class="flex justify-between text-sm text-gray-500 font-medium truncate"
                    >
                      <div>
                        <span class="text-red-600">№&nbsp;{{ raboten.id }}</span
                        >&nbsp;<span class="text-gray-300">|</span
                        >&nbsp;Оферта&nbsp;-&nbsp;{{ raboten.idnomber }}
                      </div>
                      <div class="text-red-600">{{ raboten.zaplata_all }}</div>
                    </div>
                  </div>
                </button>
                <div
                  v-if="
                    raboten.id == store.state.current_raboten_id &&
                    poseshtenia.length > 0
                  "
                  class="flex flex-col w-full rounded-b text-left bg-orange-50 border-l border-r border-b border-orange-200"
                >
                  <div
                    class="flex flex-row justify-between border-b border-dotted border-gray-200 hover:bg-orange-100 px-1 py-0.5"
                    v-for="poseshtenie in poseshtenia"
                    :key="poseshtenie.id"
                    :class="
                      poseshtenie.id == store.state.current_poseshtenie_id
                        ? 'bg-orange-100'
                        : ''
                    "
                  >
                    <button
                      class="text-sm flex justify-between flex-grow whitespace-nowrap overflow-hidden overflow-ellipsis"
                      @click.stop="changePoseshtenie(poseshtenie.id)"
                    >
                      <div>Посещение №&nbsp;{{ poseshtenie.id }}</div>
                      <div>Оферта №&nbsp;{{ poseshtenie.offer_id }}</div>
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
  name: 'RabotniSidebar',

  setup() {
    const store = inject('store')

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
      }
    }

    const changeRaboten = (raboten_id) => {
      const raboten = store.state.rabotni_temp.find(
        (element) => element.id == raboten_id
      )
      if (moment(String(raboten.dateon)).isSame(new Date(), 'day')) {
        store.methods.changeRabotni(raboten_id)
        store.methods.closeRabotniSidebar()
      }
    }

    const changePoseshtenie = (poseshtenie_id) => {
      store.methods.changePoseshtenie(poseshtenie_id)
      store.methods.closeRabotniSidebar()
    }

    const poseshtenia = computed(() => {
      return store.state.poseshtenia
    })

    const allZaplata = () => {
      return store.state.rabotni_temp
        .map((element) => element.zaplata_all)
        .reduce(
          (prev, curr) => (parseFloat(prev) + parseFloat(curr)).toFixed(2),
          0
        )
    }

    return {
      store,
      formatDateTime,
      changeRaboten,
      changePoseshtenie,
      poseshtenia,
      allZaplata,
    }
  },
}
</script>
