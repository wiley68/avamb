<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="modalOpen"
      class="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
      aria-hidden="true"
    ></div>
  </transition>
  <transition
    enter-active-class="transition ease-in-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-show="modalOpen"
      class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref="modalContent"
        class="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
      >
        <div class="border-b border-gray-200">
          <div class="relative">
            <label for="search-id" class="sr-only">Търси ...</label>
            <input
              :id="searchInput"
              ref="searchInput"
              class="w-full border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4"
              type="search"
              placeholder="Търси ..."
              @input="searchFor()"
            />
            <button
              class="absolute inset-0 right-auto group"
              type="submit"
              aria-label="Search"
              @click.stop="clearSearch()"
            >
              <svg
                class="w-4 h-4 shrink-0 fill-current text-blue-600 group-hover:text-gray-500 ml-4 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, nextTick, onMounted, onUnmounted, watch, inject } from 'vue'

export default {
  name: 'ModalSearch',

  props: ['modalOpen'],

  emits: ['open-modal', 'close-modal'],

  setup(props, { emit }) {
    const store = inject('store')

    const modalContent = ref(null)
    const searchInput = ref(null)

    const clickHandler = ({ target }) => {
      if (!props.modalOpen || modalContent.value.contains(target)) return
      emit('close-modal')
      searchInput.value.value = ''
      searchFor()
    }

    const keyHandler = ({ keyCode }) => {
      if (!props.modalOpen || keyCode !== 27) return
      emit('close-modal')
      searchInput.value.value = ''
      searchFor()
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(
      () => props.modalOpen,
      (open) => {
        open && nextTick(() => searchInput.value.focus())
      }
    )

    const clearSearch = () => {
      emit('close-modal')
      searchInput.value.value = ''
      searchFor()
    }

    const searchFor = () => {
      if (searchInput.value.value != '') {
        if (store.state.offers_filter_status == 'No') {
          store.state.offers_temp = store.state.offers.filter((element) => {
            return (
              element.client_name
                .toLowerCase()
                .includes(searchInput.value.value.toLowerCase()) &&
              element.status == 'No'
            )
          })
        } else {
          store.state.offers_temp = store.state.offers.filter((element) => {
            return element.client_name
              .toLowerCase()
              .includes(searchInput.value.value.toLowerCase())
          })
        }
      } else {
        if (store.state.offers_filter_status == 'No') {
          store.state.offers_temp = store.state.offers.filter((element) => {
            return element.status == 'No'
          })
        } else {
          store.state.offers_temp = store.state.offers
        }
      }
    }

    return {
      store,
      modalContent,
      searchInput,
      searchFor,
      clearSearch,
    }
  },
}
</script>
