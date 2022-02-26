<template>
  <div
    class="fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200"
    :class="
      store.state.sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    "
    aria-hidden="true"
  ></div>
  <div
    id="sidebar"
    ref="sidebar"
    class="flex flex-col justify-between absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-auto no-scrollbar w-64 lg:w-20 2xl:!w-64 shrink-0 bg-gray-800 p-4 transition-all duration-200 ease-in-out"
    :class="store.state.sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
  >
    <div class="flex justify-between mb-10 pr-3 sm:px-2">
      <button
        ref="trigger"
        class="lg:hidden text-gray-500 hover:text-gray-400"
        @click.stop="store.methods.closeSidebar()"
        aria-controls="sidebar"
        :aria-expanded="store.state.sidebarOpen"
      >
        <span class="sr-only">Затвори менюто</span>
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
        </svg>
      </button>
      <button @click="store.methods.changePage('Dashboard')" class="block">
        <svg class="w-8 h-8 text-lime-400" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z"
          />
        </svg>
      </button>
    </div>
    <div class="space-y-8">
      <div>
        <h3 class="text-xs uppercase text-gray-500 font-semibold pl-3">
          <span
            class="hidden lg:block 2xl:hidden text-center w-6"
            aria-hidden="true"
            >•••</span
          >
          <span class="lg:hidden 2xl:block">{{ store.state.name }}</span>
        </h3>
        <ul class="mt-3">
          <!-- Dashboard -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Dashboard' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Dashboard'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Dashboard')"
            >
              <div class="flex items-center">
                <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                  <path
                    :class="
                      store.state.page == 'Dashboard'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M4,1H20A1,1 0 0,1 21,2V6A1,1 0 0,1 20,7H4A1,1 0 0,1 3,6V2A1,1 0 0,1 4,1M4,9H20A1,1 0 0,1 21,10V14A1,1 0 0,1 20,15H4A1,1 0 0,1 3,14V10A1,1 0 0,1 4,9M4,17H20A1,1 0 0,1 21,18V22A1,1 0 0,1 20,23H4A1,1 0 0,1 3,22V18A1,1 0 0,1 4,17M9,5H10V3H9V5M9,13H10V11H9V13M9,21H10V19H9V21M5,3V5H7V3H5M5,11V13H7V11H5M5,19V21H7V19H5Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Етапна визуализация</span
                >
              </div>
            </div>
          </li>
          <!-- Messages -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Messages' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Messages'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Messages')"
            >
              <div class="flex items-center">
                <svg
                  class="shrink-0 w-6 h-6"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    :class="
                      store.state.page == 'Messages'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z"
                  />
                  <path
                    :class="
                      store.state.page == 'Messages'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Съобщения</span
                >
              </div>
            </div>
          </li>
          <!-- Firm -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Firm' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Firm'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Firm')"
            >
              <div class="flex items-center">
                <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                  <path
                    :class="
                      store.state.page == 'Firm'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M4,18V20H8V18H4M4,14V16H14V14H4M10,18V20H14V18H10M16,14V16H20V14H16M16,18V20H20V18H16M2,22V8L7,12V8L12,12V8L17,12L18,2H21L22,12V22H2Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Фирма</span
                >
              </div>
            </div>
          </li>
          <!-- Nomenklatures -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Nomenklatures' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Nomenklatures'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Nomenklatures')"
            >
              <div class="flex items-center">
                <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                  <path
                    :class="
                      store.state.page == 'Nomenklatures'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M19,15V19H5V15H19M20,13H4A1,1 0 0,0 3,14V20A1,1 0 0,0 4,21H20A1,1 0 0,0 21,20V14A1,1 0 0,0 20,13M7,18.5A1.5,1.5 0 0,1 5.5,17A1.5,1.5 0 0,1 7,15.5A1.5,1.5 0 0,1 8.5,17A1.5,1.5 0 0,1 7,18.5M19,5V9H5V5H19M20,3H4A1,1 0 0,0 3,4V10A1,1 0 0,0 4,11H20A1,1 0 0,0 21,10V4A1,1 0 0,0 20,3M7,8.5A1.5,1.5 0 0,1 5.5,7A1.5,1.5 0 0,1 7,5.5A1.5,1.5 0 0,1 8.5,7A1.5,1.5 0 0,1 7,8.5Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Номенклатури</span
                >
              </div>
            </div>
          </li>
          <!-- Contragents -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Contragents' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Contragents'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Contragents')"
            >
              <div class="flex items-center">
                <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                  <path
                    :class="
                      store.state.page == 'Contragents'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Контрагенти</span
                >
              </div>
            </div>
          </li>
          <!-- Products -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Products' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Products'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Products')"
            >
              <div class="flex items-center">
                <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                  <path
                    :class="
                      store.state.page == 'Products'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Продуктова база</span
                >
              </div>
            </div>
          </li>
          <!-- Documents -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Documents' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Documents'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Documents')"
            >
              <div class="flex items-center">
                <svg
                  class="shrink-0 w-6 h-6"
                  :class="
                    store.state.page == 'Documents'
                      ? '!text-lime-500'
                      : 'text-gray-400'
                  "
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Документи</span
                >
              </div>
            </div>
          </li>
          <!-- Register -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Register' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Register'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Register')"
            >
              <div class="flex items-center">
                <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                  <path
                    :class="
                      store.state.page == 'Register'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Регистър</span
                >
              </div>
            </div>
          </li>
          <!-- Shop -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
            :class="store.state.page == 'Shop' ? 'bg-gray-900' : ''"
          >
            <div
              class="block text-gray-200 truncate transition duration-150"
              :class="
                store.state.page == 'Shop'
                  ? 'hover:text-gray-200'
                  : 'hover:text-white'
              "
              @click="store.methods.changePage('Shop')"
            >
              <div class="flex items-center">
                <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                  <path
                    :class="
                      store.state.page == 'Shop'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M5.06 3C4.63 3 4.22 3.14 3.84 3.42S3.24 4.06 3.14 4.5L2.11 8.91C1.86 10 2.06 10.95 2.72 11.77L3 12.05V19C3 19.5 3.2 20 3.61 20.39S4.5 21 5 21H19C19.5 21 20 20.8 20.39 20.39S21 19.5 21 19V12.05L21.28 11.77C21.94 10.95 22.14 10 21.89 8.91L20.86 4.5C20.73 4.06 20.5 3.7 20.13 3.42C19.77 3.14 19.38 3 18.94 3H5.06M18.89 4.97L19.97 9.38C20.06 9.81 19.97 10.2 19.69 10.55C19.44 10.86 19.13 11 18.75 11C18.44 11 18.17 10.9 17.95 10.66C17.73 10.43 17.61 10.16 17.58 9.84L16.97 5L18.89 4.97M5.06 5H7.03L6.42 9.84C6.3 10.63 5.91 11 5.25 11C4.84 11 4.53 10.86 4.31 10.55C4.03 10.2 3.94 9.81 4.03 9.38L5.06 5M9.05 5H11V9.7C11 10.05 10.89 10.35 10.64 10.62C10.39 10.88 10.08 11 9.7 11C9.36 11 9.07 10.88 8.84 10.59S8.5 10 8.5 9.66V9.5L9.05 5M13 5H14.95L15.5 9.5C15.58 9.92 15.5 10.27 15.21 10.57C14.95 10.87 14.61 11 14.2 11C13.89 11 13.61 10.88 13.36 10.62C13.11 10.35 13 10.05 13 9.7V5M7.45 12.05C8.08 12.67 8.86 13 9.8 13C10.64 13 11.38 12.67 12 12.05C12.69 12.67 13.45 13 14.3 13C15.17 13 15.92 12.67 16.55 12.05C17.11 12.67 17.86 13 18.8 13H19.03V19H5V13H5.25C6.16 13 6.89 12.67 7.45 12.05Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Онлайн магазин</span
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Expand / collapse button -->
    <div class="space-y-8 flex-grow flex flex-col justify-end">
      <!-- Pages group -->
      <div>
        <ul class="mt-3">
          <!-- Exit -->
          <li
            class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
          >
            <a
              href="/login/logout.php"
              class="block text-gray-200 truncate transition duration-150 hover:text-lime-500"
            >
              <div class="flex items-center">
                <svg class="shrink-0 h-6 w-6 rotate-180" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19,3H5C3.89,3 3,3.89 3,5V9H5V5H19V19H5V15H3V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M10.08,15.58L11.5,17L16.5,12L11.5,7L10.08,8.41L12.67,11H3V13H12.67L10.08,15.58Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Изход</span
                >
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, inject, onMounted, onUnmounted } from 'vue'
import moment from 'moment'

export default {
  name: 'Sidebar',

  setup() {
    const store = inject('store')

    const trigger = ref(null)
    const sidebar = ref(null)

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return
      if (
        !store.state.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      )
        return
      store.methods.closeSidebar()
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!store.state.sidebarOpen || keyCode !== 27) return
      store.methods.closeSidebar()
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    return { store, trigger, sidebar }
  },
}
</script>
