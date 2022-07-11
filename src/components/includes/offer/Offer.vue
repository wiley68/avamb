<template>
  <div class="flex w-full items-center">
    <div class="relative bg-sky-700 p-2 rounded overflow-hidden flex-grow">
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
    <a
      v-if="store.state.current_oferti != 0"
      class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
      aria-controls="success-modal"
      :href="
        '/print_offer.php?oid=' +
        store.state.oferti.find(
          (element) => element.idnomber == store.state.current_oferti
        ).id
      "
      target="_blank"
    >
      <svg
        class="w-8 h-8 fill-current text-blue-600 shrink-0"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"
        />
      </svg>
    </a>
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
