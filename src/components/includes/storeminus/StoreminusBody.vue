<template>
  <div
    class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
    :class="
      store.state.storeminusiSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
    "
    v-if="storeminus"
  >
    <div class="sticky top-16">
      <div
        class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 sm:px-6 md:px-5 h-16"
      >
        <div class="flex">
          <button
            class="md:hidden text-gray-400 hover:text-gray-500 mr-4"
            @click.stop="store.methods.toggleStoreminusiSidebar()"
            aria-controls="inbox-sidebar"
            :aria-expanded="store.state.storeminusiSidebarOpen"
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
            @click.stop="updateStoreminus(storeminus.id)"
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
            :modalOpen="store.state.successUpdateStoreminus"
            @close-modal="store.methods.changeSuccessUpdateStoreminus(false)"
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
                      store.methods.changeSuccessUpdateStoreminus(false)
                    "
                  >
                    Затвори
                  </button>
                </div>
              </div>
            </div>
          </ModalBlank>
        </div>
      </div>
    </div>
    <div class="grow p-4">
      <div
        class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 divide-y divide-gray-200 mb-3"
      >
        <Storeminus />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'
import Storeminus from './Storeminus.vue'
import moment from 'moment'

export default {
  name: 'StoreminusBody',

  components: { ModalBlank, Storeminus },

  setup() {
    const store = inject('store')

    const storeminus = computed(() => {
      return store.state.storeminusi_temp.find(
        (element) => element.id == store.state.current_storeminus_id
      )
    })

    const updateStoreminus = (storeminus_id) => {
      store.methods.saveStoreminus(storeminus_id)
    }

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
      }
    }

    return {
      store,
      storeminus,
      updateStoreminus,
      formatDateTime,
    }
  },
}
</script>
