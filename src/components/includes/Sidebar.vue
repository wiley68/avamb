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
            d="M21 13.1C20.9 13.1 20.7 13.2 20.6 13.3L19.6 14.3L21.7 16.4L22.7 15.4C22.9 15.2 22.9 14.8 22.7 14.6L21.4 13.3C21.3 13.2 21.2 13.1 21 13.1M19.1 14.9L13 20.9V23H15.1L21.2 16.9L19.1 14.9M21 3H13V9H21V3M19 7H15V5H19V7M13 18.06V11H21V11.1C20.24 11.1 19.57 11.5 19.19 11.89L18.07 13H15V16.07L13 18.06M11 3H3V13H11V3M9 11H5V5H9V11M11 20.06V15H3V21H11V20.06M9 19H5V17H9V19Z"
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
                    d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z"
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
                <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                  <path
                    :class="
                      store.state.page == 'Messages'
                        ? '!text-lime-500'
                        : 'text-gray-400'
                    "
                    fill="currentColor"
                    d="M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M5,8V6H19V8H5M10.56,18.46L16.5,12.53L15.43,11.47L10.56,16.34L8.45,14.23L7.39,15.29L10.56,18.46Z"
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
                    d="M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17C23,18.11 22.11,19 21,19H7A2,2 0 0,1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z"
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
                    d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
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
                    d="M12 3C6.5 3 2 6.58 2 11C2.05 13.15 3.06 15.17 4.75 16.5C4.75 17.1 4.33 18.67 2 21C4.37 20.89 6.64 20 8.47 18.5C9.61 18.83 10.81 19 12 19C17.5 19 22 15.42 22 11S17.5 3 12 3M12 17C7.58 17 4 14.31 4 11S7.58 5 12 5 20 7.69 20 11 16.42 17 12 17M17 12V10H15V12H17M13 12V10H11V12H13M9 12V10H7V12H9Z"
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
                    d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Продукти</span
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
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,8.39C13.57,9.4 15.42,10 17.42,10C18.2,10 18.95,9.91 19.67,9.74C19.88,10.45 20,11.21 20,12C20,16.41 16.41,20 12,20C9,20 6.39,18.34 5,15.89L6.75,14V13A1.25,1.25 0 0,1 8,11.75A1.25,1.25 0 0,1 9.25,13V14H12M16,11.75A1.25,1.25 0 0,0 14.75,13A1.25,1.25 0 0,0 16,14.25A1.25,1.25 0 0,0 17.25,13A1.25,1.25 0 0,0 16,11.75Z"
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
                    d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
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
                    d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z"
                  />
                </svg>
                <span
                  class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                  >Магазин</span
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
