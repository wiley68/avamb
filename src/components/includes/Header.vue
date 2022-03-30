<template>
  <header class="sticky top-0 bg-white border-b border-gray-200 z-30">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 -mb-px">
        <div class="flex">
          <button
            class="text-gray-500 hover:text-gray-600 lg:hidden"
            @click.stop="store.methods.toggleSidebar()"
            aria-controls="sidebar"
            :aria-expanded="store.state.sidebarOpen"
          >
            <span class="sr-only">Отвори менюто</span>
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>
        <div class="flex items-center space-x-3">
          <button
            class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full ml-3"
            :class="{ 'bg-gray-200': searchModalOpen }"
            @click.stop="searchModalOpen = true"
            aria-controls="search-modal"
          >
            <span class="sr-only">Търси ...</span>
            <svg
              class="w-4 h-4"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-current text-blue-600"
                d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
              />
              <path
                class="fill-current text-blue-600"
                d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
              />
            </svg>
          </button>
          <SearchModal
            :modalOpen="searchModalOpen"
            @open-modal="searchModalOpen = true"
            @close-modal="searchModalOpen = false"
          />
          <button
            class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
            @click.stop="store.methods.changePage('Messages')"
          >
            <svg
              class="w-5 h-5"
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
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
            @click.stop="changePageZadaci()"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                class="fill-current text-blue-600"
                d="M12,8H4A2,2 0 0,0 2,10V14A2,2 0 0,0 4,16H5V20A1,1 0 0,0 6,21H8A1,1 0 0,0 9,20V16H12L17,20V4L12,8M21.5,12C21.5,13.71 20.54,15.26 19,16V8C20.53,8.75 21.5,10.3 21.5,12Z"
              />
            </svg>
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
            @click.stop="store.methods.changePage('Rabotni')"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                class="fill-current text-blue-600"
                d="M12,15C7.58,15 4,16.79 4,19V21H20V19C20,16.79 16.42,15 12,15M8,9A4,4 0 0,0 12,13A4,4 0 0,0 16,9M11.5,2C11.2,2 11,2.21 11,2.5V5.5H10V3C10,3 7.75,3.86 7.75,6.75C7.75,6.75 7,6.89 7,8H17C16.95,6.89 16.25,6.75 16.25,6.75C16.25,3.86 14,3 14,3V5.5H13V2.5C13,2.21 12.81,2 12.5,2H11.5Z"
              />
            </svg>
          </button>
          <hr class="w-px h-6 bg-gray-200" />
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, inject } from 'vue'
import SearchModal from './components/ModalSearch.vue'
import UserMenu from './components/DropdownProfile.vue'

export default {
  name: 'Header',

  components: {
    SearchModal,
    UserMenu,
  },

  setup() {
    const store = inject('store')

    const showLog = () => {
      console.log(store.state)
    }

    const searchModalOpen = ref(false)

    const changePageZadaci = () => {
      store.state.zadaci_temp = store.state.zadaci
      store.methods.changePage('Zadaci')
    }

    return { store, searchModalOpen, showLog, changePageZadaci }
  },
}
</script>
