<template>
  <div class="relative inline-flex">
    <button
      ref="trigger"
      class="inline-flex justify-center items-center group"
      aria-haspopup="true"
      @click.prevent="dropdownOpen = !dropdownOpen"
      :aria-expanded="dropdownOpen"
    >
      <img
        class="w-8 h-8 rounded-full mr-2"
        :src="'https://www.gravatar.com/avatar/' + store.state.user.gravatar"
      />
      <div class="flex items-center truncate">
        <span
          class="truncate ml-2 text-sm font-medium group-hover:text-gray-800"
          >{{ store.state.user.id }}</span
        >
        <svg
          class="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400"
          viewBox="0 0 12 12"
        >
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
        </svg>
      </div>
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
        class="origin-top-right z-10 absolute top-full min-w-44 bg-white border border-gray-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        :class="align === 'right' ? 'right-0' : 'left-0'"
      >
        <div class="pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200">
          <div class="font-medium text-gray-800">
            {{ store.state.user.username }}
          </div>
          <div class="text-xs text-gray-500 italic">
            {{ store.state.user.dlaznost }}
          </div>
        </div>
        <ul
          ref="dropdown"
          @focusin="dropdownOpen = true"
          @focusout="dropdownOpen = false"
        >
          <li>
            <a
              href="/login/logout.php"
              class="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
              @click="logout()"
              >Изход</a
            >
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, inject, onMounted, onUnmounted } from 'vue'

export default {
  name: 'DropdownProfile',

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

    const gotToSettings = () => {
      dropdownOpen.value = false
    }

    const logout = () => {
      localStorage.removeItem('tekushta')
      dropdownOpen.value = false
    }

    return {
      store,
      gotToSettings,
      dropdownOpen,
      trigger,
      dropdown,
      logout,
    }
  },
}
</script>
