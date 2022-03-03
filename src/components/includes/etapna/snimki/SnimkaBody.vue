<template>
  <div class="relative h-14 bg-gray-50 border-b border-gray-200 mb-1">
    <button
      class="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
      @click.stop="store.methods.changePage('Dashboard')"
    >
      <span class="sr-only">{{ store.state.user.ctxtlong }}</span>
      <svg
        class="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="text-gray-500"
          d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
        />
      </svg>
    </button>
  </div>
  <div class="flex flex-col p-2">
    <div
      class="flex flex-row justify-between items-center p-1 rounded bg-sky-200 border border-sky-300 mb-3"
    >
      <div class="text-sm font-medium text-gray-800 mr-1">
        {{ offer().client_name }}
      </div>
      <div class="text-sm font-medium text-orange-700">
        {{ offer().idnomber }}
      </div>
    </div>
    <div
      class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
    >
      <div class="w-full flex flex-row justify-between items-center pb-2">
        <div class="text-sm text-gray-800 mr-1">
          №-18-{{ store.state.user.ctxt }}
        </div>
        <div
          class="flex flex-row justify-center items-center text-sm text-gray-800"
        >
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white mr-2"
              :class="
                store.state.snimki.length > 0 ? 'bg-green-600' : 'bg-white'
              "
            >
              {{ store.state.snimki.length }}
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-800 mr-1">
        {{ store.state.user.ctxtlong }}
      </div>
    </div>
    <div
      v-for="snimka in store.state.snimki"
      :key="snimka.id"
      class="flex flex-col p-2 rounded bg-gray-50 border border-gray-200 shadow mb-2"
    >
      <div class="flex flex-row justify-between items-center">
        <div class="flex-grow">
          <a
            target="_blank"
            :href="'/dist/img/files/snimki/' + offer().id + '/' + snimka.file"
            ><svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z"
              /></svg
          ></a>
        </div>
        <button
          class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
          @click.stop="deleteSnimkaCheck(snimka)"
        >
          <svg class="w-4 h-4 text-blue-600 mr-1" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
            />
          </svg>
          <span class="text-xs">Изтрий</span>
        </button>
        <ModalBlank
          id="danger-modal"
          :modalOpen="store.state.deleteSnimkaModal"
          @close-modal="store.methods.changeDeleteSnimkaModal(false)"
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
                  Изтриване на файл
                </div>
              </div>
              <!-- Modal content -->
              <div class="text-sm mb-10">
                <div class="space-y-2">
                  <p>Файлът ще бъде изтрит. Тази операция е невъзвратима!</p>
                </div>
              </div>
              <div class="flex flex-wrap justify-end space-x-2">
                <button
                  class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                  @click.stop="store.methods.changeDeleteSnimkaModal(false)"
                >
                  Откажи
                </button>
                <button
                  class="btn-sm bg-red-500 hover:bg-red-600 text-white"
                  @click.stop="deleteSnimka()"
                >
                  Изтрий
                </button>
              </div>
            </div>
          </div>
        </ModalBlank>
      </div>
    </div>
    <div
      class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
    >
      <div class="w-full flex flex-row justify-between items-center pb-2">
        <input
          ref="file"
          v-on:change="handleFileUpload(offer().id)"
          type="file"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
import ModalBlank from '../../components/ModalBlank.vue'

export default {
  name: 'SnimkaBody',

  components: { ModalBlank },

  setup() {
    const store = inject('store')

    const file = ref(null)
    const snimka_current = ref(null)

    const offer = () => {
      return store.state.offers.find(
        (element) => element.id == store.state.current_dashboard_offer
      )
    }

    const deleteSnimkaCheck = (_snimka) => {
      snimka_current.value = _snimka
      store.methods.changeDeleteSnimkaModal(true)
    }

    const deleteSnimka = () => {
      store.methods.deleteSnimka(
        snimka_current.value.id,
        snimka_current.value.file,
        snimka_current.value.offer_id
      )
    }

    const handleFileUpload = async (snimka_id) => {
      store.methods.uploadFile(file.value.files, snimka_id, 'snimki')
    }

    return {
      store,
      offer,
      deleteSnimkaCheck,
      deleteSnimka,
      file,
      handleFileUpload,
    }
  },
}
</script>
