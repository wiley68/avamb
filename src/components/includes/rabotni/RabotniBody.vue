<template>
  <div
    class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
    :class="
      store.state.rabotniSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
    "
    v-if="raboten"
  >
    <div class="sticky top-16">
      <div
        class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 sm:px-6 md:px-5 h-16"
      >
        <div class="flex">
          <button
            class="md:hidden text-gray-400 hover:text-gray-500 mr-4"
            @click.stop="store.methods.toggleRabotniSidebar()"
            aria-controls="inbox-sidebar"
            :aria-expanded="store.state.rabotniSidebarOpen"
          >
            <span class="sr-only">Затвори</span>
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
              />
            </svg>
          </button>
          <button
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
            @click.stop="updateRaboten(raboten.id)"
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
            :modalOpen="store.state.successUpdateRaboten"
            @close-modal="store.methods.changeSuccessUpdateRaboten(false)"
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
                  <div class="text-lg font-semibold text-gray-800">
                    Съобщение
                  </div>
                </div>
                <div class="text-sm mb-10">
                  <div class="space-y-2">
                    <p>Промените са записани успешно</p>
                  </div>
                </div>
                <div class="flex flex-wrap justify-end space-x-2">
                  <button
                    class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                    @click.stop="
                      store.methods.changeSuccessUpdateRaboten(false)
                    "
                  >
                    Затвори
                  </button>
                </div>
              </div>
            </div>
          </ModalBlank>
          <button
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="danger-modal"
            @click.stop="deleteRabotenCheck()"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
              />
            </svg>
          </button>
          <ModalBlank
            id="danger-modal"
            :modalOpen="store.state.deleteRabotenModal"
            @close-modal="store.methods.changeDeleteRabotenModal(flase)"
          >
            <div class="p-5 flex space-x-4">
              <div
                class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-red-100"
              >
                <svg
                  class="w-4 h-4 shrink-0 fill-current text-red-600"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                  />
                </svg>
              </div>
              <div>
                <div class="mb-2">
                  <div class="text-lg font-semibold text-gray-800">
                    Внимание!
                  </div>
                </div>
                <!-- Modal content -->
                <div class="text-sm mb-10">
                  <div class="space-y-2">
                    <p>Желаете ли да изтриете работния лист?</p>
                  </div>
                </div>
                <div class="flex flex-wrap justify-end space-x-2">
                  <button
                    class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                    @click.stop="store.methods.changeDeleteRabotenModal(flase)"
                  >
                    Откажи
                  </button>
                  <button
                    class="btn-sm bg-red-500 hover:bg-red-600 text-white"
                    @click.stop="deleteRaboten()"
                  >
                    Изтрий
                  </button>
                </div>
              </div>
            </div>
          </ModalBlank>
          <button
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
            @click.stop="newPoseshtenie(raboten.id)"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M13,9H11V12H8V14H11V17H13V14H16V12H13M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="grow p-4">
      <div
        class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 divide-y divide-gray-200 mb-3"
      >
        <Raboten />
      </div>
      <div
        class="flex flex-col justify-center items-center bg-orange-50 shadow-lg rounded-sm border border-orange-200 px-2 py-2 mb-3"
        v-for="poseshtenie in poseshtenia"
        :key="poseshtenie.id"
      >
        <div class="flex flex-row w-full justify-between items-center text-sm">
          <div class="">Посещение №:&nbsp;{{ poseshtenie.id }}</div>
          <div class="">Оферта №:&nbsp;{{ poseshtenie.offer_id }}</div>
        </div>
        <div class="flex flex-row w-full justify-between items-center text-sm">
          <div
            class="flex-1 flex flex-col h-24 justify-end items-start border rounded border-cyan-600 p-1"
          >
            <div v-if="raboten.isdriver == 1">
              Тръгване&nbsp;-&nbsp;{{ poseshtenie.tragvane }}
            </div>
            <div v-if="raboten.isdriver == 1">
              Км.:&nbsp;{{ poseshtenie.kmtragvane }}
            </div>
            <div>{{ poseshtenie.address_tragvane }}</div>
            <div>Работа старт:&nbsp;{{ poseshtenie.zapocvane }}</div>
          </div>
          <div class="w-1"></div>
          <div
            class="flex-1 flex flex-col h-24 justify-end items-start border rounded border-lime-600 p-1"
          >
            <div v-if="raboten.isdriver == 1">
              Пристигане&nbsp;-&nbsp;{{ poseshtenie.pristigane }}
            </div>
            <div v-if="raboten.isdriver == 1">
              Км.:&nbsp;{{ poseshtenie.kmpristigane }}
            </div>
            <div>{{ poseshtenie.address_pristigane }}</div>
            <div>Работа стоп:&nbsp;{{ poseshtenie.priklucvane }}</div>
          </div>
        </div>
        <div class="flex flex-row w-full justify-between items-center text-sm">
          <div class="flex-1 flex flex-col justify-end items-startp-1">
            Работни ч.&nbsp;{{ poseshtenie.vreme_rabota }}
          </div>
          <div class="w-1"></div>
          <div class="flex-1 flex flex-col justify-end items-startp-1">
            Шофиране ч.&nbsp;{{ poseshtenie.vreme_shofirane }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'
import Raboten from './Raboten.vue'
import moment from 'moment'

export default {
  name: 'RabotniBody',

  components: { ModalBlank, Raboten },

  setup() {
    const store = inject('store')

    const raboten = computed(() => {
      return store.state.rabotni.find(
        (element) => element.id == store.state.current_raboten_id
      )
    })

    const poseshtenia = computed(() => {
      return store.state.poseshtenia
    })

    const updateRaboten = (raboten_id) => {
      store.methods.saveRaboten(raboten_id)
    }

    const deleteRabotenCheck = () => {
      store.methods.changeDeleteRabotenModal(true)
    }

    const deleteRaboten = () => {
      const deleted_id = raboten.value.id
      store.methods.deleteRaboten(deleted_id)
    }

    const newPoseshtenie = (raboten_id) => {
      //store.methods.newTask(project_id)
    }

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    return {
      store,
      raboten,
      poseshtenia,
      updateRaboten,
      deleteRabotenCheck,
      deleteRaboten,
      newPoseshtenie,
      formatDateTime,
    }
  },
}
</script>
