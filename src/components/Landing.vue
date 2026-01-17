<template>
  <main>
    <div class="relative flex">
      <div id="dashboard-sidebar"
        class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px">
        <div
          class="sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]">
          <div>
            <div class="px-5 py-4">
              <ul class="mb-6">
                <li class="-mx-2 mb-1">
                  <button class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="store.methods.changePage('Dashboard')">
                    <div class="flex items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z" />
                      </svg>
                      <div class="ml-3">
                        <span class="text-lg font-medium text-gray-900">Етапна визуализация</span>
                      </div>
                    </div>
                  </button>
                </li>
                <li v-if="store.state.user.role != 'sluz'" class="-mx-2 mb-1">
                  <button class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="store.methods.changePage('Oferti')">
                    <div class="flex items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z" />
                      </svg>
                      <div class="ml-3">
                        <span class="text-lg font-medium text-gray-900">Оферти</span>
                      </div>
                    </div>
                  </button>
                </li>
                <li class="-mx-2 mb-1">
                  <button class="w-full p-2 rounded-lg border-2 border-blue-600" @click.stop="changePageRabotni()">
                    <div class="flex items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z" />
                      </svg>
                      <div class="ml-3">
                        <span class="text-lg font-medium text-gray-900">Работни листи</span>
                      </div>
                    </div>
                  </button>
                </li>
                <li v-if="store.state.user.role != 'sluz' || store.state.user.role != 'targ' || store.state.user.role != 'client'" class="-mx-2 mb-1">
                  <button class="w-full p-2 rounded-lg border-2 border-blue-600" @click.stop="changePageZadaci()">
                    <div class="flex flex-row justify-between items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z" />
                      </svg>
                      <div class="ml-3 flex-grow text-left">
                        <span class="text-lg font-medium text-gray-900">Фирмени задачи</span>
                      </div>
                      <div v-if="getZadaciIzticashti() > 0"
                        class="flex justify-center items-center h-6 px-2 bg-red-600 rounded-full">
                        <span class="text-lg font-medium text-gray-100">{{
                        getZadaciIzticashti()
                        }}</span>
                      </div>
                    </div>
                  </button>
                </li>
                <li class="-mx-2 mb-1">
                  <button class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="store.methods.changePage('Messages')">
                    <div class="flex flex-row justify-between items-center">
                      <svg class="w-8 h-8" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-current text-blue-600"
                          d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
                        <path class="fill-current text-blue-600"
                          d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
                      </svg>
                      <div class="ml-3 flex-grow text-left">
                        <span class="text-lg font-medium text-gray-900">Съобщения</span>
                      </div>
                      <div v-if="getMessagesLength() > 0"
                        class="flex justify-center items-center h-6 px-2 bg-red-600 rounded-full">
                        <span class="text-lg font-medium text-gray-100">{{
                        getMessagesLength()
                        }}</span>
                      </div>
                    </div>
                  </button>
                </li>
                <li v-if="store.state.user.role != 'sluz'" class="-mx-2 mb-1">
                  <button class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="store.methods.changePage('Storeplusi')">
                    <div class="flex flex-row justify-between items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M20 13.09V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.46 21 12.9 21 13.33 20.94C13.12 20.33 13 19.68 13 19L13 18.95C12.68 19 12.35 19 12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.65 16 13.27 15.96 13.88 15.89C14.93 14.16 16.83 13 19 13C19.34 13 19.67 13.04 20 13.09M18 12.45C16.7 13.4 14.42 14 12 14S7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5 18 6.5 18 7 15.87 9 12 9M22 18V20H18V22L15 19L18 16V18H22Z" />
                      </svg>
                      <div class="ml-3 flex-grow text-left">
                        <span class="text-lg font-medium text-gray-900">Внос - Склад</span>
                      </div>
                    </div>
                  </button>
                </li>
                <li v-if="store.state.user.role != 'sluz'" class="-mx-2 mb-1">
                  <button class="w-full p-2 rounded-lg border-2 border-blue-600"
                    @click.stop="store.methods.changePage('Storeminusi')">
                    <div class="flex flex-row justify-between items-center">
                      <svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
                        <path fill="currentColor"
                          d="M4 7C4 4.79 7.58 3 12 3S20 4.79 20 7 16.42 11 12 11 4 9.21 4 7M19.72 13.05C19.9 12.71 20 12.36 20 12V9C20 11.21 16.42 13 12 13S4 11.21 4 9V12C4 14.21 7.58 16 12 16C12.65 16 13.28 15.96 13.88 15.89C14.93 14.16 16.83 13 19 13C19.24 13 19.5 13 19.72 13.05M13.1 17.96C12.74 18 12.37 18 12 18C7.58 18 4 16.21 4 14V17C4 19.21 7.58 21 12 21C12.46 21 12.9 21 13.33 20.94C13.12 20.33 13 19.68 13 19C13 18.64 13.04 18.3 13.1 17.96M23 19L20 16V18H16V20H20V22L23 19Z" />
                      </svg>
                      <div class="ml-3 flex-grow text-left">
                        <span class="text-lg font-medium text-gray-900">Износ - Склад</span>
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
import moment from 'moment'

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

    const getZadaciIzticashti = () => {
      return store.state.zadaci.filter(
        (element) => element.status == 0 || element.status == 2
      ).length
    }

    const getMessagesLength = () => {
      return store.state.messages.filter((element) => {
        return (
          moment(element.created_at).date() == moment().date() &&
          (element.to_user_id == store.state.user.id ||
            element.from_user_id == store.state.user.id)
        )
      }).length
    }

    return {
      store,
      changePageRabotni,
      changePageZadaci,
      getZadaciIzticashti,
      getMessagesLength,
    }
  },
}
</script>
