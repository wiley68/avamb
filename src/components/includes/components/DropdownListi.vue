<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
      :class="{ 'bg-gray-200': dropdownOpen }"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Работни листи</span>
      <svg class="w-5 h-5" viewBox="0 0 24 24">
        <path
          class="fill-current text-blue-600"
          d="M19 2V4H12C10.9 4 10 4.89 10 6V9H12V6H19V8L22 5L19 2M19 9V11H14V13H19V15L22 12L19 9M11.05 10C9.94 10 9.04 10.87 9.03 12S9.9 14 11 14C12.11 14 13 13.11 13 12C13 10.91 12.13 10.03 11.05 10M2 11V13H8V11H2M10 15V18C10 19.11 10.9 20 12 20H19V22L22 19L19 16V18H12V15H10Z"
        />
      </svg>
      <div
        v-if="getNewMessage().length > 0"
        class="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"
      ></div>
    </button>
    <transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-out duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="origin-top-right z-10 absolute top-full -mr-48 sm:mr-0 min-w-80 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        :class="align === 'right' ? 'right-0' : 'left-0'"
      >
        <div
          class="text-xs font-semibold text-gray-400 uppercase pt-1.5 pb-2 px-4"
        >
          Работни листи
        </div>
        <ul
          ref="dropdown"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >
          <li
            class="border-b border-gray-200 last:border-0"
            v-for="message in getNewMessage()"
            :key="message.id"
          >
            <button
              class="w-full block py-2 px-4 hover:bg-gray-50"
              @click="showMessage()"
            >
              <span class="block text-sm mb-2"
                ><svg class="w-4 h-4 mr-1 inline-block" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M12,13C14.67,13 20,14.33 20,17V20H4V17C4,14.33 9.33,13 12,13M12,14.9C9.03,14.9 5.9,16.36 5.9,17V18.1H18.1V17C18.1,16.36 14.97,14.9 12,14.9Z"
                  />
                </svg>
                <span class="font-medium text-gray-800">Илко:&nbsp;</span>
                {{ message.body }}</span
              >
              <span class="block text-xs font-medium text-gray-400">{{
                formatDateTime(message.created_at)
              }}</span>
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import moment from 'moment'

export default {
  name: 'DropdownListi',

  props: ['align'],

  setup() {
    const store = inject('store')

    const dropdownOpen = ref(false)
    const trigger = ref(null)
    const dropdown = ref(null)

    // close on click outside
    const clickHandler = ({ target }) => {
      if (
        !dropdownOpen.value ||
        dropdown.value.contains(target) ||
        trigger.value.contains(target)
      )
        return
      dropdownOpen.value = false
    }

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen.value || keyCode !== 27) return
      dropdownOpen.value = false
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    const getNewMessage = () => {
      return []
    }

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    const showMessage = () => {
      dropdownOpen.value = false
      store.methods.changePage('Messages')
    }

    return {
      store,
      dropdownOpen,
      trigger,
      dropdown,
      getNewMessage,
      formatDateTime,
      showMessage,
    }
  },
}
</script>
