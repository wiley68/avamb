<template>
  <div
    class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
    :class="store.state.modul5SidebarOpen ? 'translate-x-1/3' : 'translate-x-0'"
    v-if="modul5"
  >
    <div class="sticky top-16">
      <div
        class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 sm:px-6 md:px-5 h-16"
      >
        <div class="flex w-full items-center justify-between">
          <button
            class="md:hidden text-gray-400 hover:text-gray-500 mr-4"
            @click.stop="store.methods.toggleModul5Sidebar()"
            aria-controls="inbox-sidebar"
            :aria-expanded="store.state.modul5SidebarOpen"
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
            @click.stop="updateModul5(modul5.id)"
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
            :modalOpen="store.state.successUpdateModul5"
            @close-modal="store.methods.changeSuccessUpdateModul5(false)"
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
                    @click.stop="store.methods.changeSuccessUpdateModul5(false)"
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
            @click.stop="deleteModul5Check()"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17 4V6H3V4H6.5L7.5 3H12.5L13.5 4H17M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M19 15H21V17H19V15M19 7H21V13H19V7Z"
              />
            </svg>
          </button>
          <ModalBlank
            id="danger-modal"
            :modalOpen="store.state.deleteModul5Modal"
            @close-modal="store.methods.changeDeleteModul5Modal(false)"
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
                    <p>Желаете ли да изтриете документа?</p>
                  </div>
                </div>
                <div class="flex flex-wrap justify-end space-x-2">
                  <button
                    class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                    @click.stop="store.methods.changeDeleteModul5Modal(false)"
                  >
                    Откажи
                  </button>
                  <button
                    class="btn-sm bg-red-500 hover:bg-red-600 text-white"
                    @click.stop="deleteModul5()"
                  >
                    Изтрий
                  </button>
                </div>
              </div>
            </div>
          </ModalBlank>
          <div class="grow"></div>
          <div class="flex flex-row justify-between items-center mb-1">
            <span class="p-1 text-sm w-3/12">№</span>
            <div
              class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 text-red-600 font-medium"
            >
              {{ modul5.id }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grow p-4">
      <div
        class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 divide-y divide-gray-200 mb-3"
      >
        <Modul5 />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'
import Modul5 from './Modul5.vue'
import moment from 'moment'

export default {
  name: 'Modul5Body',

  components: { ModalBlank, Modul5 },

  setup() {
    const store = inject('store')

    const modul5 = computed(() => {
      return store.state.moduli5_temp.find(
        (element) => element.id == store.state.current_modul5_id
      )
    })

    const updateModul5 = (modul5_id) => {
      store.methods.saveModul5(modul5_id)
    }

    const deleteModul5Check = () => {
      store.methods.changeDeleteModul5Modal(true)
    }

    const deleteModul5 = () => {
      const deleted_id = modul5.value.id
      store.methods.deleteModul5(deleted_id)
    }

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
      }
    }

    return {
      store,
      modul5,
      updateModul5,
      deleteModul5Check,
      deleteModul5,
      formatDateTime,
    }
  },
}
</script>
