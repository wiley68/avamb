<template>
  <div class="relative h-14 bg-gray-50 border-b border-gray-200 mb-1">
    <button
      class="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
      @click.stop="store.methods.changePage('Dashboard')"
    >
      <span class="sr-only">Екземпляр за вземане на размери</span>
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
        <div class="text-sm text-gray-800 mr-1">№-3-ВР</div>
        <div
          class="flex flex-row justify-center items-center text-sm text-gray-800"
        >
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-blue-800 text-white"
              :class="offer().razmeri_broi > 0 ? 'bg-blue-600' : 'bg-white'"
            >
              {{ offer().razmeri_broi }}
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-800 mr-1">
        Екземпляр за вземане на размери
      </div>
    </div>
    <div
      v-for="razmer in store.state.razmeri"
      :key="razmer.id"
      class="flex flex-row justify-between p-2 rounded bg-gray-50 border border-gray-200 shadow mb-2"
    >
      <div class="">
        {{ razmer.id }} - {{ razmer.certez_name }} - {{ razmer.opisanie }}
      </div>
      <a
        target="_blanc"
        :href="
          '/print_certezi.php?oid=' +
          offer().id +
          '&guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
        "
      >
        <svg class="w-8 h-8" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18A2,2 0 0,1 18,20H6A2,2 0 0,1 4,18V6A2,2 0 0,1 6,4H18A2,2 0 0,1 20,6M9.5,10.5A1.5,1.5 0 0,0 8,9H5.5V15H7V13H8A1.5,1.5 0 0,0 9.5,11.5V10.5M14.5,10.5A1.5,1.5 0 0,0 13,9H10.5V15H13A1.5,1.5 0 0,0 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'RazmeridBody',

  setup() {
    const store = inject('store')

    const offer = () => {
      return store.state.offers.find(
        (element) => element.id == store.state.current_dashboard_offer
      )
    }

    return { store, offer }
  },
}
</script>
