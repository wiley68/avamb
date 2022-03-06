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
              rabotni
              <button
                class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
              >
                <svg
                  class="w-4 h-4 fill-current text-indigo-500 mr-1 flex-none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                  />
                </svg>
                <span class="text-xs">Нов работен лист</span>
              </button>
            </div>
          </div>
        </div>
        <div class="px-5 py-4">
          <div class="mt-4">
            <ul class="mb-6">
              <li
                v-for="raboten in store.state.rabotni"
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
                      class="flex text-sm text-gray-500 font-medium truncate"
                    >
                      Оферта&nbsp;-&nbsp;
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
                      class="text-sm flex flex-grow whitespace-nowrap overflow-hidden overflow-ellipsis"
                      @click.stop="changePoseshtenie(poseshtenie.id)"
                    >
                      {{ poseshtenie.id }}
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
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    const changeRaboten = (raboten_id) => {
      store.methods.changeRabotni(raboten_id)
      store.methods.closeRabotniSidebar()
    }

    const changePoseshtenie = (poseshtenie_id) => {
      store.methods.changePoseshtenie(task_id)
      store.methods.closeRabotniSidebar()
    }

    const poseshtenia = computed(() => {
      return store.state.poseshtenia
    })

    return {
      store,
      formatDateTime,
      changeRaboten,
      changePoseshtenie,
      poseshtenia,
    }
  },
}
</script>
