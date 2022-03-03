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
          <Notifications align="right" />
          <Zadaci align="right" />
          <button
            class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
            @click.stop="store.methods.changePage('Rabotni')"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                class="fill-current text-blue-600"
                d="M19 2V4H12C10.9 4 10 4.89 10 6V9H12V6H19V8L22 5L19 2M19 9V11H14V13H19V15L22 12L19 9M11.05 10C9.94 10 9.04 10.87 9.03 12S9.9 14 11 14C12.11 14 13 13.11 13 12C13 10.91 12.13 10.03 11.05 10M2 11V13H8V11H2M10 15V18C10 19.11 10.9 20 12 20H19V22L22 19L19 16V18H12V15H10Z"
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
import Notifications from './components/DropdownNotifications.vue'
import Zadaci from './components/DropdownZadaci.vue'
import UserMenu from './components/DropdownProfile.vue'

export default {
  name: 'Header',

  components: {
    SearchModal,
    Notifications,
    Zadaci,
    UserMenu,
  },

  setup() {
    const store = inject('store')

    const showLog = () => {
      console.log(store.state)
    }

    const searchModalOpen = ref(false)

    return { store, searchModalOpen, showLog }
  },
}
</script>
