<template>
  <main>
    <div class="relative flex">
      <div
        id="dashboard-sidebar"
        class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px"
      >
        <div
          class="sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]"
        >
          <div>
            <div class="px-5 py-4">
              <div
                class="flex flex-wrap justify-center items-center space-y-2 p-4 sm:p-6 mb-2"
              >
                <Datepicker class="mt-2" />
              </div>
              <ul class="mb-6">
                <li class="-mx-2 mb-1">
                  <button
                    class="w-full p-2 rounded-lg border-2 border-blue-600"
                  >
                    <div class="flex items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z"
                        />
                      </svg>
                      <button
                        class="ml-3"
                        @click="store.methods.changePage('Dashboard')"
                      >
                        <span class="text-lg font-medium text-grya-900"
                          >Етапна визуализация</span
                        >
                      </button>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import Datepicker from './includes/components/Datepicker.vue'

export default {
  name: 'Landing',

  components: {
    Datepicker,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
