<template>
  <div class="flex flex-col justify-center">
    <div class="mb-1">
      <select
        class="w-full border rounded-sm border-gray-100 p-1 text-sm"
        v-model="poseshtenie.offer_id"
      >
        <option value="0">Избери оферта</option>
        <option
          v-for="offer in store.state.offers"
          :key="offer.id"
          :value="offer.idnomber"
        >
          {{ offer.idnomber }}&nbsp;-&nbsp;{{ offer.client_name }}
        </option>
      </select>
    </div>
    <div
      v-if="raboten.isdriver == 1"
      class="flex flex-row justify-between items-center mb-1"
    >
      <span class="p-1 text-sm w-3/12">Час на тр.</span>
      <input
        type="time"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="poseshtenie.tragvane"
      />
      <div class="w-2/12"></div>
    </div>
    <div
      v-if="raboten.isdriver == 1"
      class="flex flex-row justify-between items-center mb-1"
    >
      <span class="p-1 text-sm w-3/12">Км. на тр.</span>
      <input
        type="text"
        class="w-7/12 text-sm border rounded-sm border-gray-100 bg-blue-300 p-1 text-right"
        v-model="poseshtenie.kmtragvane"
      />
      <button class="w-2/12" @click.stop="getKm()">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="raboten.isdriver == 1"
      class="flex flex-row justify-between items-center mb-1"
    >
      <span class="p-1 text-sm w-3/12">Адр. на тр.</span>
      <input
        type="text"
        class="w-7/12 text-sm border rounded-sm border-gray-100 bg-blue-300 p-1 text-right"
        v-model="poseshtenie.address_tragvane"
      />
      <button class="w-2/12" @click.stop="getPosition('tragvane')">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"
          />
        </svg>
      </button>
    </div>
    <div
      v-if="raboten.isdriver == 1"
      class="flex flex-row justify-between items-center mb-1"
    >
      <span class="p-1 text-sm w-3/12">Час на пр.</span>
      <input
        type="time"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.pristigane"
      />
      <div class="w-2/12"></div>
    </div>
    <div
      v-if="raboten.isdriver == 1"
      class="flex flex-row justify-between items-center mb-1"
    >
      <span class="p-1 text-sm w-3/12">Км. на пр.</span>
      <input
        type="text"
        class="w-7/12 text-sm border rounded-sm border-gray-100 bg-green-300 p-1 text-right"
        v-model="poseshtenie.kmpristigane"
      />
      <div class="w-2/12"></div>
    </div>
    <div
      v-if="raboten.isdriver == 1"
      class="flex flex-row justify-between items-center mb-1"
    >
      <span class="p-1 text-sm w-3/12">Адр. на пр.</span>
      <input
        type="text"
        class="w-7/12 text-sm border rounded-sm border-gray-100 bg-green-300 p-1 text-right"
        v-model="poseshtenie.address_pristigane"
      />
      <button class="w-2/12" @click.stop="getPosition('pristigane')">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-row justify-center items-center mb-1">
      <span class="p-1 text-sm w-32">Работен процес</span>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <input
        readonly
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.zapocvane"
      />
      <button
        :disabled="poseshtenie.zapocvane_status == 1"
        class="w-2/12"
        :class="
          poseshtenie.zapocvane_status == 1 ? 'text-gray-400' : 'text-blue-600'
        "
        @click.stop="zapocvaneStart()"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
          />
        </svg>
      </button>
      <input
        readonly
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.priklucvane"
      />
      <button
        :disabled="poseshtenie.priklucvane_status == 1"
        class="w-2/12"
        :class="
          poseshtenie.priklucvane_status == 1
            ? 'text-gray-400'
            : 'text-blue-600'
        "
        @click.stop="priklucvaneStart()"
      >
        <svg class="w-6 h-6" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13A9,9 0 0,0 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6A7,7 0 0,1 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-row mb-1">
      <textarea
        rows="5"
        class="w-full text-sm border rounded-sm border-gray-100 bg-green-300 p-1"
        v-model="poseshtenie.rabota"
      ></textarea>
    </div>
    <div class="flex flex-row justify-center items-center mb-1">
      <span class="p-1 text-sm w-32">Почивка 1, 2, 3</span>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <input
        readonly
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.starttime1"
      />
      <button
        :disabled="poseshtenie.starttime1_status == 1"
        @click.stop="starttime1Start()"
        class="w-2/12"
        :class="
          poseshtenie.starttime1_status == 1 ? 'text-gray-400' : 'text-blue-600'
        "
      >
        <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
          />
        </svg>
      </button>
      <input
        readonly
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.stoptime1"
      />
      <button
        :disabled="poseshtenie.stoptime1_status == 1"
        @click.stop="stoptime1Start()"
        class="w-2/12"
        :class="
          poseshtenie.stoptime1_status == 1 ? 'text-gray-400' : 'text-blue-600'
        "
      >
        <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13A9,9 0 0,0 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6A7,7 0 0,1 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <input
        readonly
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.starttime2"
      />
      <button
        :disabled="poseshtenie.starttime2_status == 1"
        @click.stop="starttime2Start()"
        class="w-2/12"
        :class="
          poseshtenie.starttime2_status == 1 ? 'text-gray-400' : 'text-blue-600'
        "
      >
        <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
          />
        </svg>
      </button>
      <input
        readonly
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.stoptime2"
      />
      <button
        :disabled="poseshtenie.stoptime2_status == 1"
        @click.stop="stoptime2Start()"
        class="w-2/12"
        :class="
          poseshtenie.stoptime2_status == 1 ? 'text-gray-400' : 'text-blue-600'
        "
      >
        <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13A9,9 0 0,0 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6A7,7 0 0,1 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
          />
        </svg>
      </button>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <input
        readonly
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.starttime3"
      />
      <button
        :disabled="poseshtenie.starttime3_status == 1"
        @click.stop="starttime3Start()"
        class="w-2/12"
        :class="
          poseshtenie.starttime3_status == 1 ? 'text-gray-400' : 'text-blue-600'
        "
      >
        <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
          />
        </svg>
      </button>
      <input
        readonly
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.stoptime3"
      />
      <button
        :disabled="poseshtenie.stoptime3_status == 1"
        @click.stop="stoptime3Start()"
        class="w-2/12"
        :class="
          poseshtenie.stoptime3_status == 1 ? 'text-gray-400' : 'text-blue-600'
        "
      >
        <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13A9,9 0 0,0 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6A7,7 0 0,1 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
          />
        </svg>
      </button>
    </div>
  </div>
  <ModalBlank
    id="error-modal"
    :modalOpen="errorOfferModal == true"
    @close-modal="errorOfferModal = false"
  >
    <div class="p-5 flex space-x-4">
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-red-100"
      >
        <svg
          class="w-4 h-4 shrink-0 fill-current text-red-500"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
          />
        </svg>
      </div>
      <div>
        <div class="mb-2">
          <div class="text-lg font-semibold text-gray-800">Грешка</div>
        </div>
        <div class="text-sm mb-10">
          <div class="space-y-2">
            <p class="text-lg">Моля изберете оферта!</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
            @click.stop="errorOfferModal = false"
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  </ModalBlank>
</template>

<script>
import { inject, computed, ref } from 'vue'
import moment from 'moment'
import ModalBlank from './../components/ModalBlank.vue'

export default {
  name: 'Poseshtenie',

  components: {
    ModalBlank,
  },

  setup() {
    const store = inject('store')

    const errorOfferModal = ref(false)

    const poseshtenie = computed(() => {
      return store.state.poseshtenia.find(
        (element) => element.id == store.state.current_poseshtenie_id
      )
    })

    const raboten = computed(() => {
      return store.state.rabotni.find(
        (element) => element.id == poseshtenie.value.raboten_id
      )
    })

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
      }
    }

    const getKm = () => {
      const currentKm = raboten.value.mpsta.find(
        (element) => element.id == raboten.value.mps_regnomer_id
      ).kilometraz
      poseshtenie.value.kmtragvane = currentKm
      poseshtenie.value.kmpristigane = currentKm
    }

    const success_tragvane = (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      poseshtenie.value.address_tragvane_long = longitude
      poseshtenie.value.address_tragvane_lat = latitude
      store.methods.getStreetAddressFrom(latitude, longitude, 'tragvane')
    }

    const success_pristigane = (position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      poseshtenie.value.address_pristigane_long = longitude
      poseshtenie.value.address_pristigane_lat = latitude
      store.methods.getStreetAddressFrom(latitude, longitude, 'pristigane')
    }

    const error = (err) => {
      console.log(err)
    }

    const getPosition = (address) => {
      if (address == 'tragvane') {
        navigator.geolocation.getCurrentPosition(success_tragvane, error)
      }
      if (address == 'pristigane') {
        navigator.geolocation.getCurrentPosition(success_pristigane, error)
      }
    }

    const zapocvaneStart = () => {
      if (confirm('Start')) {
        poseshtenie.value.zapocvane = moment().format('HH:mm')
        poseshtenie.value.zapocvane_status = 1
        if (poseshtenie.value.offer_id != 0) {
          store.methods.savePoseshtenie(poseshtenie.value)
        } else {
          errorOfferModal.value = true
        }
      }
    }

    const priklucvaneStart = () => {
      if (confirm('Start')) {
        poseshtenie.value.priklucvane = moment().format('HH:mm')
        poseshtenie.value.priklucvane_status = 1
        if (poseshtenie.value.offer_id != 0) {
          store.methods.savePoseshtenie(poseshtenie.value)
        } else {
          errorOfferModal.value = true
        }
      }
    }

    const starttime1Start = () => {
      if (confirm('Start')) {
        poseshtenie.value.starttime1 = moment().format('HH:mm')
        poseshtenie.value.starttime1_status = 1
        if (poseshtenie.value.offer_id != 0) {
          store.methods.savePoseshtenie(poseshtenie.value)
        } else {
          errorOfferModal.value = true
        }
      }
    }

    const stoptime1Start = () => {
      if (confirm('Start')) {
        poseshtenie.value.stoptime1 = moment().format('HH:mm')
        poseshtenie.value.stoptime1_status = 1
        if (poseshtenie.value.offer_id != 0) {
          store.methods.savePoseshtenie(poseshtenie.value)
        } else {
          errorOfferModal.value = true
        }
      }
    }

    const starttime2Start = () => {
      if (confirm('Start')) {
        poseshtenie.value.starttime2 = moment().format('HH:mm')
        poseshtenie.value.starttime2_status = 1
        if (poseshtenie.value.offer_id != 0) {
          store.methods.savePoseshtenie(poseshtenie.value)
        } else {
          errorOfferModal.value = true
        }
      }
    }

    const stoptime2Start = () => {
      if (confirm('Start')) {
        poseshtenie.value.stoptime2 = moment().format('HH:mm')
        poseshtenie.value.stoptime2_status = 1
        if (poseshtenie.value.offer_id != 0) {
          store.methods.savePoseshtenie(poseshtenie.value)
        } else {
          errorOfferModal.value = true
        }
      }
    }

    const starttime3Start = () => {
      if (confirm('Start')) {
        poseshtenie.value.starttime3 = moment().format('HH:mm')
        poseshtenie.value.starttime3_status = 1
        if (poseshtenie.value.offer_id != 0) {
          store.methods.savePoseshtenie(poseshtenie.value)
        } else {
          errorOfferModal.value = true
        }
      }
    }

    const stoptime3Start = () => {
      if (confirm('Start')) {
        poseshtenie.value.stoptime3 = moment().format('HH:mm')
        poseshtenie.value.stoptime3_status = 1
        if (poseshtenie.value.offer_id != 0) {
          store.methods.savePoseshtenie(poseshtenie.value)
        } else {
          errorOfferModal.value = true
        }
      }
    }

    return {
      store,
      poseshtenie,
      raboten,
      formatDateTime,
      getKm,
      getPosition,
      zapocvaneStart,
      priklucvaneStart,
      starttime1Start,
      stoptime1Start,
      starttime2Start,
      stoptime2Start,
      starttime3Start,
      stoptime3Start,
      errorOfferModal,
    }
  },
}
</script>
