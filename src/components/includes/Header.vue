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
            @click.stop="loadData()"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                class="fill-current text-blue-600"
                d="M12,6V9L16,5L12,1V4A8,8 0 0,0 4,12C4,13.57 4.46,15.03 5.24,16.26L6.7,14.8C6.25,13.97 6,13 6,12A6,6 0 0,1 12,6M18.76,7.74L17.3,9.2C17.74,10.04 18,11 18,12A6,6 0 0,1 12,18V15L8,19L12,23V20A8,8 0 0,0 20,12C20,10.43 19.54,8.97 18.76,7.74Z"
              />
            </svg>
          </button>
          <button
            class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
            @click.stop="store.methods.changePage('Landing')"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24">
              <path
                class="fill-current text-blue-600"
                d="M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z"
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

    const searchModalOpen = ref(false)

    const loadData = () => {
      store.methods.getOffers()
      store.methods.getZadaci()
      store.methods.getRabotni()
      store.methods.getMessages()
      store.methods.getStoreminusi()
      store.methods.getStoreplusi()
      store.methods.getProduktiPlus()
      store.methods.getDocPoseshtenieView()
      store.methods.getProdukti()
    }

    return {
      store,
      searchModalOpen,
      loadData,
    }
  },
}
</script>
