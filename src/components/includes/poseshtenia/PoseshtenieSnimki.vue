<template>
  <div class="flex flex-col justify-center">
    <div
      v-for="doc_poseshtenie in store.state.doc_poseshtenia"
      :key="doc_poseshtenie.id"
      class="flex flex-col p-2 rounded bg-gray-50 border border-gray-200 shadow mb-2"
    >
      <div class="flex flex-row justify-between items-center">
        <div class="flex-grow">
          <a
            target="_blank"
            :href="
              '/dist/img/files/visits/' +
              store.state.current_poseshtenie_id +
              '/' +
              doc_poseshtenie.file
            "
            ><svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z"
              /></svg
          ></a>
        </div>
        <button
          class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
          @click.stop="deleteDocPoseshtenieCheck(doc_poseshtenie)"
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
          :modalOpen="store.state.deleteDocPoseshtenieModal"
          @close-modal="store.methods.changeDeleteDocPoseshtenieModal(false)"
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
                  @click.stop="
                    store.methods.changeDeleteDocPoseshtenieModal(false)
                  "
                >
                  Откажи
                </button>
                <button
                  class="btn-sm bg-red-500 hover:bg-red-600 text-white"
                  @click.stop="deleteDocPoseshtenie()"
                >
                  Изтрий
                </button>
              </div>
            </div>
          </div>
        </ModalBlank>
      </div>
      <div class="mt-2">
        <textarea
          class="w-full border border-gray-200 p-1"
          rows="5"
          v-model="otclient.description"
        ></textarea>
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
          accept="text/html,application/msword,application/vnd.ms-excel,application/vnd.ms-powerpoint,text/plain,application/pdf,image/*,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed, ref } from 'vue'

export default {
  name: 'PoseshtenieSnimki',

  setup() {
    const store = inject('store')
    const doc_poseshtenie_current = ref(null)

    const deleteDocPoseshtenieCheck = (_doc_poseshtenie) => {
      doc_poseshtenie_current.value = _doc_poseshtenie
      store.methods.changeDeleteDocPoseshtenieModal(true)
    }

    const deleteDocPoseshtenie = () => {
      store.methods.deleteClient(
        otclient_current.value.id,
        otclient_current.value.file,
        otclient_current.value.offer_id
      )
    }

    return {
      store,
      deleteDocPoseshtenieCheck,
      deleteDocPoseshtenie,
    }
  },
}
</script>
