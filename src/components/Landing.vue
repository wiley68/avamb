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
              <ul class="mb-6">
                <li class="-mx-2 mb-1">
                  <button
                    class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="store.methods.changePage('Dashboard')"
                  >
                    <div class="flex items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z"
                        />
                      </svg>
                      <div class="ml-3">
                        <span class="text-lg font-medium text-grya-900"
                          >Етапна визуализация</span
                        >
                      </div>
                    </div>
                  </button>
                </li>
                <li class="-mx-2 mb-1">
                  <button
                    class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="changePageRabotni()"
                  >
                    <div class="flex items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z"
                        />
                      </svg>
                      <div class="ml-3">
                        <span class="text-lg font-medium text-grya-900"
                          >Работни листи</span
                        >
                      </div>
                    </div>
                  </button>
                </li>
                <li class="-mx-2 mb-1">
                  <button
                    class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="changePageZadaci()"
                  >
                    <div class="flex items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z"
                        />
                      </svg>
                      <div class="ml-3">
                        <span class="text-lg font-medium text-grya-900"
                          >Фирмени задачи</span
                        >
                      </div>
                    </div>
                  </button>
                </li>
                <li class="-mx-2 mb-1">
                  <button
                    class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="store.methods.changePage('Messages')"
                  >
                    <div class="flex items-center">
                      <svg
                        class="w-8 h-8"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="fill-current text-blue-600"
                          d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
                        />
                        <path
                          class="fill-current text-blue-600"
                          d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
                        />
                      </svg>
                      <div class="ml-3">
                        <span class="text-lg font-medium text-grya-900"
                          >Съобщения</span
                        >
                      </div>
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

export default {
  name: 'Landing',

  setup() {
    const store = inject('store')

    const changePageRabotni = () => {
      store.state.rabotni_temp = store.state.rabotni
      store.methods.changePage('Rabotni')
    }

    const changePageZadaci = () => {
      store.state.zadaci_temp = store.state.zadaci
      store.methods.changePage('Zadaci')
    }

    return { store, changePageRabotni, changePageZadaci }
  },
}
</script>
