<template>
  <div class="relative bg-sky-700 p-2 rounded overflow-hidden mb-2">
    <div class="relative">
      <h1 class="text-xl text-white font-medium">
        Оферта
        {{
          store.state.current_oferti == 0
            ? ' - нова'
            : ' - ' + store.state.current_oferti
        }}
      </h1>
    </div>
  </div>
  <div>
    <div class="px-5 py-4">
      <ul class="mb-6">
        <li class="-mx-2 mb-1">
          <button
            class="w-full p-2 rounded-lg border-2 border-blue-600"
            @click.stop="goToEtap1()"
          >
            <div class="flex items-center">
              <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                />
              </svg>
              <div class="ml-3">
                <span class="text-lg font-medium text-gray-900">Етап 1</span>
              </div>
            </div>
          </button>
        </li>
        <li v-if="store.state.current_oferti != 0" class="-mx-2 mb-1">
          <button
            class="w-full p-2 rounded-lg border-2 border-blue-600"
            @click.stop="goToEtap2()"
          >
            <div class="flex items-center">
              <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                />
              </svg>
              <div class="ml-3">
                <span class="text-lg font-medium text-gray-900">Етап 2</span>
              </div>
            </div>
          </button>
        </li>
        <li v-if="store.state.current_oferti != 0" class="-mx-2 mb-1">
          <button
            class="w-full p-2 rounded-lg border-2 border-blue-600"
            @click.stop="goToEtap4()"
          >
            <div class="flex items-center">
              <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"
                />
              </svg>
              <div class="ml-3">
                <span class="text-lg font-medium text-gray-900">Етап 4</span>
              </div>
            </div>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'

export default {
  name: 'Offer',

  setup() {
    const store = inject('store')

    const goToEtap1 = () => {
      store.state.offerEtap = 1
      store.methods.closeOfferSidebar()
    }

    const goToEtap2 = () => {
      store.state.offerEtap = 2
      store.methods.closeOfferSidebar()
    }

    const goToEtap4 = () => {
      store.state.offerEtap = 4
      store.methods.closeOfferSidebar()
    }

    onMounted(() => {
      store.methods.getDds()
      store.methods.getStatusi()
      store.methods.getShabloni()
    })

    return { store, goToEtap1, goToEtap2, goToEtap4 }
  },
}
</script>
