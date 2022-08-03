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
          <SidebarLinkGroup
            v-slot="parentLink"
            :activeCondition="store.state.activeConditionFirms"
            ><a
              class="block text-gray-200 hover:text-white truncate transition duration-150"
              :class="store.state.activeConditionFirms && 'hover:text-gray-200'"
              href="#0"
              @click.prevent="
                store.state.sidebarOpen
                  ? parentLink.handleClick()
                  : (store.state.sidebarOpen = true)
              "
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24">
                    <path
                      :class="
                        store.state.page == 'Zadaci'
                          ? '!text-lime-500'
                          : 'text-gray-400'
                      "
                      fill="currentColor"
                      d="M4,18V20H8V18H4M4,14V16H14V14H4M10,18V20H14V18H10M16,14V16H20V14H16M16,18V20H20V18H16M2,22V8L7,12V8L12,12V8L17,12L18,2H21L22,12V22H2Z"
                    />
                  </svg>
                  <span
                    class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                    >Фирма
                  </span>
                </div>
                <!-- Icon -->
                <div class="flex shrink-0 ml-2">
                  <svg
                    class="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400"
                    :class="parentLink.expanded && 'transform rotate-180'"
                    viewBox="0 0 12 12"
                  >
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                  </svg>
                </div>
              </div>
            </a>
            <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
              <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="showMessage('Не е активно за мобилната версия.')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Данни</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="showMessage('Не е активно за мобилната версия.')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M14 2H6C4.89 2 4 2.9 4 4V20C4 21.11 4.89 22 6 22H18C19.11 22 20 21.11 20 20V8L14 2M18 20H6V4H13V9H18V20M17.35 10L15.25 19H13.85L12.05 12.21L10.25 19H8.85L6.65 10H8.15L9.55 16.81L11.35 10H12.65L14.45 16.81L15.85 10H17.35Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Бланки</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="showMessage('Не е активно за мобилната версия.')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >МПС</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="showMessage('Не е активно за мобилната версия.')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M13.07 10.41A5 5 0 0 0 13.07 4.59A3.39 3.39 0 0 1 15 4A3.5 3.5 0 0 1 15 11A3.39 3.39 0 0 1 13.07 10.41M5.5 7.5A3.5 3.5 0 1 1 9 11A3.5 3.5 0 0 1 5.5 7.5M7.5 7.5A1.5 1.5 0 1 0 9 6A1.5 1.5 0 0 0 7.5 7.5M16 17V19H2V17S2 13 9 13 16 17 16 17M14 17C13.86 16.22 12.67 15 9 15S4.07 16.31 4 17M15.95 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Потребители</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                  :class="store.state.page == 'Zadaci' ? 'bg-gray-900' : ''"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    :class="
                      store.state.page == 'Zadaci'
                        ? 'hover:text-gray-200'
                        : 'hover:text-white'
                    "
                    @click="changePageZadaci()"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Zadaci'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22A9,9 0 0,0 21,13A9,9 0 0,0 12,4M12.5,8H11V14L15.75,16.85L16.5,15.62L12.5,13.25V8M7.88,3.39L6.6,1.86L2,5.71L3.29,7.24L7.88,3.39M22,5.72L17.4,1.86L16.11,3.39L20.71,7.25L22,5.72Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Задачи</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="showMessage('Не е активно за мобилната версия.')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Статистики</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="showMessage('Не е активно за мобилната версия.')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M6,16.5L3,19.44V11H6M11,14.66L9.43,13.32L8,14.64V7H11M16,13L13,16V3H16M18.81,12.81L17,11H22V16L20.21,14.21L13,21.36L9.53,18.34L5.75,22H3L9.47,15.66L13,18.64"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Отчет</span
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </div></SidebarLinkGroup
          >
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
          <SidebarLinkGroup
            v-slot="parentLink"
            :activeCondition="store.state.activeConditionDocuments"
            ><a
              class="block text-gray-200 hover:text-white truncate transition duration-150"
              :class="
                store.state.activeConditionDocuments && 'hover:text-gray-200'
              "
              href="#0"
              @click.prevent="
                store.state.sidebarOpen
                  ? parentLink.handleClick()
                  : (store.state.sidebarOpen = true)
              "
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <svg
                    class="w-6 h-6 shrink-0"
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
                    class="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"
                    >Документи
                  </span>
                </div>
                <!-- Icon -->
                <div class="flex shrink-0 ml-2">
                  <svg
                    class="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400"
                    :class="parentLink.expanded && 'transform rotate-180'"
                    viewBox="0 0 12 12"
                  >
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                  </svg>
                </div>
              </div>
            </a>
            <div class="lg:hidden lg:sidebar-expanded:block 2xl:block">
              <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="store.methods.changePage('Oferti')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Documents'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M7,2H17A2,2 0 0,1 19,4V20A2,2 0 0,1 17,22H7A2,2 0 0,1 5,20V4A2,2 0 0,1 7,2M7,4V8H17V4H7M7,10V12H9V10H7M11,10V12H13V10H11M15,10V12H17V10H15M7,14V16H9V14H7M11,14V16H13V14H11M15,14V16H17V14H15M7,18V20H9V18H7M11,18V20H13V18H11M15,18V20H17V18H15Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Оферти</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="store.methods.changePage('Dogovori')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Documents'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M19.7 12.9L14 18.6H11.7V16.3L17.4 10.6L19.7 12.9M23.1 12.1C23.1 12.4 22.8 12.7 22.5 13L20 15.5L19.1 14.6L21.7 12L21.1 11.4L20.4 12.1L18.1 9.8L20.3 7.7C20.5 7.5 20.9 7.5 21.2 7.7L22.6 9.1C22.8 9.3 22.8 9.7 22.6 10C22.4 10.2 22.2 10.4 22.2 10.6C22.2 10.8 22.4 11 22.6 11.2C22.9 11.5 23.2 11.8 23.1 12.1M3 20V4H10V9H15V10.5L17 8.5V8L11 2H3C1.9 2 1 2.9 1 4V20C1 21.1 1.9 22 3 22H15C16.1 22 17 21.1 17 20H3M11 17.1C10.8 17.1 10.6 17.2 10.5 17.2L10 15H8.5L6.4 16.7L7 14H5.5L4.5 19H6L8.9 16.4L9.5 18.7H10.5L11 18.6V17.1Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Договори</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="showMessage('Не е активно за мобилната версия.')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Documents'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M12.6,12.3H10.6V15.5H12.7C13.3,15.5 13.6,15.3 13.9,15C14.2,14.7 14.3,14.4 14.3,13.9C14.3,13.4 14.2,13.1 13.9,12.8C13.6,12.5 13.2,12.3 12.6,12.3M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M15.2,16C14.6,16.5 14.1,16.7 12.8,16.7H10.6V20H9V11H12.8C14.1,11 14.7,11.3 15.2,11.8C15.8,12.4 16,13 16,13.9C16,14.8 15.8,15.5 15.2,16M13,9V3.5L18.5,9H13Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Проформи</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="showMessage('Не е активно за мобилната версия.')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Documents'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Авансови фактури</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                  :class="store.state.page == 'Zadaci' ? 'bg-gray-900' : ''"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    :class="
                      store.state.page == 'Zadaci'
                        ? 'hover:text-gray-200'
                        : 'hover:text-white'
                    "
                    @click="store.methods.changePage('Zadaci')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Documents'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H10V20.09L12.09,18H6V16H14.09L16.09,14H6V12H18.09L20,10.09V8L14,2H6M13,3.5L18.5,9H13V3.5M20.15,13C20,13 19.86,13.05 19.75,13.16L18.73,14.18L20.82,16.26L21.84,15.25C22.05,15.03 22.05,14.67 21.84,14.46L20.54,13.16C20.43,13.05 20.29,13 20.15,13M18.14,14.77L12,20.92V23H14.08L20.23,16.85L18.14,14.77Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Фактури (продажби)</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="store.methods.changePage('Storeplusi')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Documents'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M20 13.09V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.46 21 12.9 21 13.33 20.94C13.12 20.33 13 19.68 13 19L13 18.95C12.68 19 12.35 19 12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.65 16 13.27 15.96 13.88 15.89C14.93 14.16 16.83 13 19 13C19.34 13 19.67 13.04 20 13.09M18 12.45C16.7 13.4 14.42 14 12 14S7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5 18 6.5 18 7 15.87 9 12 9M22 18V20H18V22L15 19L18 16V18H22Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Складова разписка</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <div
                    class="block text-gray-200 truncate transition duration-150"
                    @click="store.methods.changePage('Storeminusi')"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Documents'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M4 7C4 4.79 7.58 3 12 3S20 4.79 20 7 16.42 11 12 11 4 9.21 4 7M19.72 13.05C19.9 12.71 20 12.36 20 12V9C20 11.21 16.42 13 12 13S4 11.21 4 9V12C4 14.21 7.58 16 12 16C12.65 16 13.28 15.96 13.88 15.89C14.93 14.16 16.83 13 19 13C19.24 13 19.5 13 19.72 13.05M13.1 17.96C12.74 18 12.37 18 12 18C7.58 18 4 16.21 4 14V17C4 19.21 7.58 21 12 21C12.46 21 12.9 21 13.33 20.94C13.12 20.33 13 19.68 13 19C13 18.64 13.04 18.3 13.1 17.96M23 19L20 16V18H16V20H20V22L23 19Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Експедиционна бележка</span
                      >
                    </div>
                  </div>
                </li>
                <li
                  class="px-3 py-2 rounded-sm mb-0.5 last:mb-0 cursor-pointer hover:bg-gray-900"
                >
                  <button
                    class="block text-gray-200 truncate transition duration-150"
                    @click="changePageRabotni()"
                  >
                    <div class="flex items-center">
                      <svg class="shrink-0 w-6 h-6" viewBox="0 0 24 24">
                        <path
                          :class="
                            store.state.page == 'Documents'
                              ? '!text-lime-500'
                              : 'text-gray-400'
                          "
                          fill="currentColor"
                          d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z"
                        />
                      </svg>
                      <span
                        class="text-sm font-medium ml-3 lg:opacity-0 2xl:opacity-100 duration-200"
                        >Работни листи</span
                      >
                    </div>
                  </button>
                </li>
              </ul>
            </div></SidebarLinkGroup
          >
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
import SidebarLinkGroup from './SidebarLinkGroup.vue'

export default {
  name: 'Sidebar',

  components: { SidebarLinkGroup },

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

    const showMessage = (message) => {
      alert(message)
    }

    const changePageZadaci = () => {
      store.state.zadaci_temp = store.state.zadaci
      store.methods.changePage('Zadaci')
    }

    const changePageRabotni = () => {
      store.state.rabotni_temp = store.state.rabotni
      store.methods.changePage('Rabotni')
    }

    return {
      store,
      trigger,
      sidebar,
      showMessage,
      changePageZadaci,
      changePageRabotni,
    }
  },
}
</script>
