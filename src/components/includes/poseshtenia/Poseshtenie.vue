<template>
  <div class="py-6">
    <header class="flex items-start">
      <svg class="w-12 h-12 shrink-0 mr-3 flex-none" viewBox="0 0 40 40">
        <path
          fill="currentColor"
          d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z"
        />
      </svg>
      <div class="grow">
        <div class="sm:flex items-start justify-between mb-0.5">
          <div class="xl:flex items-center mb-2 sm:mb-0">
            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M5,8V6H19V8H5M10.56,18.46L16.5,12.53L15.43,11.47L10.56,16.34L8.45,14.23L7.39,15.29L10.56,18.46Z"
              />
            </svg>
            <span
              class="text-sm font-semibold text-gray-800 text-left truncate"
            >
              {{ raboten.id }}
            </span>
            <div class="text-sm text-gray-400 hidden xl:block mx-1">·</div>
            <div class="text-xs">
              {{ raboten.id }}
            </div>
          </div>
          <div
            class="flex text-xs font-medium text-gray-500 whitespace-nowrap mb-2 sm:mb-0"
          >
            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7,13V11H21V13H7M7,19V17H21V19H7M7,7V5H21V7H7M3,8V5H2V4H4V8H3M2,17V16H5V20H2V19H4V18.5H3V17.5H4V17H2M4.25,10A0.75,0.75 0 0,1 5,10.75C5,10.95 4.92,11.14 4.79,11.27L3.12,13H5V14H2V13.08L4,11H2V10H4.25Z"
              />
            </svg>
            {{ poseshtenie.id }}
          </div>
        </div>
        <div class="sm:flex items-start justify-between mb-0.5">
          <div class="flex text-xs font-medium text-gray-500">
            111
            <div class="text-sm text-gray-400 hidden xl:block mx-1">·</div>
            <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M10.54,14.53L8.41,12.4L7.35,13.46L10.53,16.64L16.53,10.64L15.47,9.58L10.54,14.53M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
              />
            </svg>
            {{ formatDateTime(poseshtenie.dateon) }}
          </div>
          <div
            class="flex text-xs font-medium text-gray-500 whitespace-nowrap mb-2 sm:mb-0"
          >
            222
            <div class="text-sm text-gray-400 hidden xl:block mx-1">·</div>
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
    </header>
    <div class="text-sm text-gray-800 mt-4 space-y-2">333</div>
    <div class="flex flex-row items-center text-sm text-gray-800 ml-2 mt-2">
      <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z"
        />
      </svg>
      444
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

    return {
      store,
      poseshtenie,
      raboten,
      formatDateTime,
    }
  },
}
</script>
