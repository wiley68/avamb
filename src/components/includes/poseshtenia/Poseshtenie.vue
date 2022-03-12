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
          {{ offer.client_name }}
        </option>
      </select>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Час на тр.</span>
      <input
        type="time"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="poseshtenie.tragvane"
      />
      <div class="w-2/12"></div>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
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
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Адр. на тр.</span>
      <input
        type="text"
        class="w-7/12 text-sm border rounded-sm border-gray-100 bg-blue-300 p-1 text-right"
        v-model="poseshtenie.address_tragvane"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Час на пр.</span>
      <input
        type="time"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.pristigane"
      />
      <div class="w-2/12"></div>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Км. на пр.</span>
      <input
        type="text"
        class="w-7/12 text-sm border rounded-sm border-gray-100 bg-green-300 p-1 text-right"
        v-model="poseshtenie.kmpristigane"
      />
      <div class="w-2/12"></div>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Адр. на пр.</span>
      <input
        type="text"
        class="w-7/12 text-sm border rounded-sm border-gray-100 bg-green-300 p-1 text-right"
        v-model="poseshtenie.address_pristigane"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,10.84 21.79,9.69 21.39,8.61L19.79,10.21C19.93,10.8 20,11.4 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.6,4 13.2,4.07 13.79,4.21L15.4,2.6C14.31,2.21 13.16,2 12,2M19,2L15,6V7.5L12.45,10.05C12.3,10 12.15,10 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12C14,11.85 14,11.7 13.95,11.55L16.5,9H18L22,5H19V2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12H16A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8V6Z"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-row justify-center items-center mb-1">
      <span class="p-1 text-sm w-32">Работен процес</span>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <input
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.zapocvane"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
          />
        </svg>
      </div>
      <input
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.priklucvane"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13A9,9 0 0,0 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6A7,7 0 0,1 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-row justify-center items-center mb-1">
      <span class="p-1 text-sm w-32">Почивка 1, 2, 3</span>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <input
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.starttime1"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
          />
        </svg>
      </div>
      <input
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.stoptime1"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13A9,9 0 0,0 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6A7,7 0 0,1 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <input
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.starttime2"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
          />
        </svg>
      </div>
      <input
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.stoptime2"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13A9,9 0 0,0 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6A7,7 0 0,1 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
          />
        </svg>
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <input
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.starttime3"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z"
          />
        </svg>
      </div>
      <input
        type="time"
        class="w-4/12 text-sm border rounded-sm border-gray-100 p-1 bg-green-300"
        v-model="poseshtenie.stoptime3"
      />
      <div class="w-2/12">
        <svg class="w-6 h-6 shrink-0 text-blue-600" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,20A7,7 0 0,1 5,13C5,11.72 5.35,10.5 5.95,9.5L15.5,19.04C14.5,19.65 13.28,20 12,20M3,4L1.75,5.27L4.5,8.03C3.55,9.45 3,11.16 3,13A9,9 0 0,0 12,22C13.84,22 15.55,21.45 17,20.5L19.5,23L20.75,21.73L13.04,14L3,4M11,9.44L13,11.44V8H11M15,1H9V3H15M19.04,4.55L17.62,5.97C16.07,4.74 14.12,4 12,4C10.17,4 8.47,4.55 7.05,5.5L8.5,6.94C9.53,6.35 10.73,6 12,6A7,7 0 0,1 19,13C19,14.27 18.65,15.47 18.06,16.5L19.5,17.94C20.45,16.53 21,14.83 21,13C21,10.88 20.26,8.93 19.03,7.39L20.45,5.97L19.04,4.55Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'Poseshtenie',

  setup() {
    const store = inject('store')

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
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    const getKm = () => {
      const currentKm = raboten.value.mpsta.find(
        (element) => element.id == raboten.value.mps_regnomer_id
      ).kilometraz
      poseshtenie.value.kmtragvane = currentKm
      poseshtenie.value.kmpristigane = currentKm
    }

    return {
      store,
      poseshtenie,
      raboten,
      formatDateTime,
      getKm,
    }
  },
}
</script>
