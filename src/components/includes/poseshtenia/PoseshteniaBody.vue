<template>
  <div
    class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
    :class="
      store.state.rabotniSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
    "
    v-if="poseshtenie"
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
            v-if="parseInt(poseshtenie.id) > 0"
            class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            @click.stop="deletePoseshtenieCheck()"
          >
            <svg class="w-4 h-4 fill-current text-red-600" viewBox="0 0 16 16">
              <path
                d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z"
              />
            </svg>
          </button>
          <button
            class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
            @click.stop="updatePoseshtenie()"
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
          <button
            class="flex flex-row justify-center items-center bg-white p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            @click.stop="newPoseshtenie()"
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
        class="bg-orange-50 shadow-lg rounded-t-sm border border-orange-200 p-2 divide-y divide-gray-200"
      >
        <Poseshtenie />
      </div>
    </div>
  </div>
  <ModalBlank
    id="success-modal"
    :modalOpen="store.state.successUpdatePoseshtenie"
    @close-modal="store.methods.changeSuccessUpdatePoseshtenie(false)"
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
          <div class="text-lg font-semibold text-gray-800">Съобщение</div>
        </div>
        <div class="text-sm mb-10">
          <div class="space-y-2">
            <p>Успешно записахте промените.</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
            @click.stop="store.methods.changeSuccessUpdatePoseshtenie(false)"
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  </ModalBlank>
  <ModalBlank
    id="danger-modal"
    :modalOpen="deletePoseshtenieModal"
    @close-modal="deletePoseshtenieModal = false"
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
          <div class="text-lg font-semibold text-gray-800">Внимание!</div>
        </div>
        <div class="text-sm mb-10">
          <div class="space-y-2">
            <p>Желаете ли да изтриете посещението?</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
            @click.stop="deletePoseshtenieModal = false"
          >
            Откажи
          </button>
          <button
            class="btn-sm bg-red-500 hover:bg-red-600 text-white"
            @click.stop="deletePoseshtenie()"
          >
            Изтрий
          </button>
        </div>
      </div>
    </div>
  </ModalBlank>
</template>

<script>
import { inject, ref, computed } from 'vue'
import moment from 'moment'
import Poseshtenie from './Poseshtenie.vue'
import ModalBlank from './../components/ModalBlank.vue'

export default {
  name: 'PoseshteniaBody',

  components: {
    Poseshtenie,
    ModalBlank,
  },

  setup() {
    const store = inject('store')
    const deletePoseshtenieModal = ref(false)

    const poseshtenie = computed(() => {
      return store.state.poseshtenia.find(
        (element) => element.id == store.state.current_poseshtenie_id
      )
    })

    const updatePoseshtenie = () => {
      if (poseshtenie.value.offer_id != 0) {
        store.methods.savePoseshtenie(poseshtenie.value)
      } else {
        alert('Моля изберете оферта!')
      }
    }

    const deletePoseshtenieCheck = () => {
      deletePoseshtenieModal.value = true
    }

    const deletePoseshtenie = () => {
      const deleted_id = poseshtenie.value.id
      store.methods.deletePoseshtenie(deleted_id)
      deletePoseshtenieModal.value = false
    }

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    const newPoseshtenie = () => {
      const new_poseshtenie = {
        id: -1,
        offer_id: 0,
        raboten_id: store.state.current_raboten_id,
        tragvane: moment().format('hh:mm'),
        pristigane: moment().format('hh:mm'),
        kmtragvane: 0,
        kmpristigane: 0,
        address_tragvane: '',
        address_pristigane: '',
        zapocvane: moment().format('hh:mm'),
        priklucvane: moment().format('hh:mm'),
        address_pocivka: '',
        pocivka1: 0,
        pocivka2: 0,
        pocivka3: 0,
        faktura: 0,
        rabota: '',
        starttime1: moment().format('hh:mm'),
        stoptime1: moment().format('hh:mm'),
        starttime2: moment().format('hh:mm'),
        stoptime2: moment().format('hh:mm'),
        starttime3: moment().format('hh:mm'),
        stoptime3: moment().format('hh:mm'),
        zapocvane_status: 0,
        priklucvane_status: 0,
        starttime1_status: 0,
        stoptime1_status: 0,
        starttime2_status: 0,
        stoptime2_status: 0,
        starttime3_status: 0,
        stoptime3_status: 0,
        address_tragvane_lat: '00.000000',
        address_tragvane_long: '00.000000',
        address_pristigane_lat: '00.000000',
        address_pristigane_long: '00.000000',
        address_pocivka_lat: '00.000000',
        address_pocivka_long: '00.000000',
        vreme_rabota: '00:00',
      }
      store.state.poseshtenia.splice(0, 0, new_poseshtenie)
      store.state.current_poseshtenie_id = new_poseshtenie.id
      store.methods.changePoseshtenie(new_poseshtenie.id)
    }

    return {
      store,
      poseshtenie,
      deletePoseshtenieModal,
      updatePoseshtenie,
      deletePoseshtenieCheck,
      deletePoseshtenie,
      formatDateTime,
      newPoseshtenie,
    }
  },
}
</script>
