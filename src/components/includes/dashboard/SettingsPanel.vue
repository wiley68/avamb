<template>
  <div class="flex flex-row justify-center items-center p-4 sm:p-6 mb-2">
    <Datepicker />
    <button
      class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
      title="Изтрий"
    >
      <svg class="w-6 h-6 fill-current text-blue-600" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M18.6,6.62C17.16,6.62 15.8,7.18 14.83,8.15L7.8,14.39C7.16,15.03 6.31,15.38 5.4,15.38C3.53,15.38 2,13.87 2,12C2,10.13 3.53,8.62 5.4,8.62C6.31,8.62 7.16,8.97 7.84,9.65L8.97,10.65L10.5,9.31L9.22,8.2C8.2,7.18 6.84,6.62 5.4,6.62C2.42,6.62 0,9.04 0,12C0,14.96 2.42,17.38 5.4,17.38C6.84,17.38 8.2,16.82 9.17,15.85L16.2,9.61C16.84,8.97 17.69,8.62 18.6,8.62C20.47,8.62 22,10.13 22,12C22,13.87 20.47,15.38 18.6,15.38C17.7,15.38 16.84,15.03 16.16,14.35L15,13.34L13.5,14.68L14.78,15.8C15.8,16.81 17.15,17.37 18.6,17.37C21.58,17.37 24,14.96 24,12C24,9 21.58,6.62 18.6,6.62Z"
        />
      </svg>
    </button>
    <button
      class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
      title="Изтрий"
      @click.stop="showActive()"
    >
      <svg class="w-6 h-6 fill-current text-blue-600" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { inject } from 'vue'
import Datepicker from '../components/Datepicker.vue'

export default {
  name: 'SettingsPanel',

  components: {
    Datepicker,
  },

  setup() {
    const store = inject('store')

    const showActive = () => {
      console.log(store.state)
    }

    return { store, showActive }
  },
}
</script>
