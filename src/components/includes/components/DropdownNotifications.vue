<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition duration-150 rounded-full"
      :class="{ 'bg-gray-200': dropdownOpen }"
      aria-haspopup="true"
      @click.stop="showLog()"
      :aria-expanded="dropdownOpen"
    >
      <span class="sr-only">Съобщения</span>
      <svg
        class="w-4 h-4"
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
          Съобщения
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
  name: 'DropdownNotifications',

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

    const showLog = () => {
      console.log(store.state)
    }

    return {
      store,
      dropdownOpen,
      trigger,
      dropdown,
      getNewMessage,
      formatDateTime,
      showMessage,
      showLog,
    }
  },
}
</script>
