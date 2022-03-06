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
            class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
            @click.stop="updateRaboten()"
          >
            <svg
              class="w-4 h-4 fill-current text-green-500"
              viewBox="0 0 16 16"
            >
              <path
                d="M14.3 2.3L5 11.6 1.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0z"
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
                  <div class="text-lg font-semibold text-gray-800">OK</div>
                </div>
                <div class="text-sm mb-10">
                  <div class="space-y-2">
                    <p>Saved</p>
                  </div>
                </div>
                <div class="flex flex-wrap justify-end space-x-2">
                  <button
                    class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                    @click.stop="
                      store.methods.changeSuccessUpdateRaboten(false)
                    "
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </ModalBlank>
          <button
            class="flex flex-row justify-center items-center bg-white p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            @click.stop="newPoseshtenie(raboten.id)"
          >
            <svg
              class="w-4 h-4 fill-current text-orange-500 mr-1 flex-none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
              />
            </svg>
            <span class="text-xs">Ново посещение</span>
          </button>
        </div>
      </div>
    </div>
    <div class="grow p-4">
      <div
        class="bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 divide-y divide-gray-200"
      >
        Poseshtenie
      </div>
      <div
        class="bg-orange-50 shadow-lg rounded-sm border border-orange-200 px-6 py-2"
        v-if="poseshtenia.length > 0"
      >
        <div
          class="flex flex-col border-b border-gray-300 border-dotted mb-2"
          v-for="poseshtenie in poseshtenia"
          :key="poseshtenie.id"
        >
          <div class="flex flex-row justify-between items-center mb-1">
            <div
              class="flex flex-none text-xs text-gray-500 font-medium w-10 pr-1"
            >
              {{ poseshtenie.id }}
            </div>
            <button
              class="flex flex-grow font-semibold text-sm text-gray-500 hover:text-indigo-600 hover:bg-orange-100"
              @click.close="store.methods.changePoseshtenie(poseshtenie.id)"
            >
              {{ poseshtenie.id }}
            </button>
          </div>
          <div class="flex flex-row justify-between items-center mb-1">
            <div
              class="flex flex-none text-xs text-gray-500 font-medium w-10"
            ></div>
            <div
              class="flex flex-grow justify-start items-center text-xs font-medium text-gray-500 whitespace-nowrap mb-2 sm:mb-0"
            >
              <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21,10.12H14.22L16.96,7.3C14.23,4.6 9.81,4.5 7.08,7.2C4.35,9.91 4.35,14.28 7.08,17C9.81,19.7 14.23,19.7 16.96,17C18.32,15.65 19,14.08 19,12.1H21C21,14.08 20.12,16.65 18.36,18.39C14.85,21.87 9.15,21.87 5.64,18.39C2.14,14.92 2.11,9.28 5.62,5.81C9.13,2.34 14.76,2.34 18.27,5.81L21,3V10.12M12.5,8V12.25L16,14.33L15.28,15.54L11,13V8H12.5Z"
                />
              </svg>
              {{ formatDateTime(poseshtenie.dateon) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'
import moment from 'moment'

export default {
  name: 'RabotniBody',

  components: { ModalBlank },

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

    const updateRaboten = () => {
      //store.methods.updateProject()
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
      newPoseshtenie,
      formatDateTime,
    }
  },
}
</script>
