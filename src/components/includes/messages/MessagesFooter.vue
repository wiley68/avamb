<template>
  <div class="sticky bottom-0">
    <div
      class="flex items-center justify-between bg-white border-t border-gray-200 px-4 sm:px-6 md:px-5 h-16"
    >
      <!-- Plus button -->
      <button class="shrink-0 text-gray-400 hover:text-gray-500 mr-3">
        <span class="sr-only">{{ store.state.language.add }}</span>
        <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12C23.98 5.38 18.62.02 12 0zm6 13h-5v5h-2v-5H6v-2h5V6h2v5h5v2z"
          />
        </svg>
      </button>
      <div class="grow flex">
        <div class="grow mr-3">
          <label for="message-input" class="sr-only">{{
            store.state.language.messages_type
          }}</label>
          <input
            id="message-input"
            class="w-full pl-2 border border-gray-200 py-1 rounded hover:border-indigo-200 hover:bg-gray-50 focus:border-indigo-200 focus:bg-gray-50 outline-none"
            type="text"
            placeholder="Aa"
            v-model="message"
          />
        </div>
        <button
          type="submit"
          class="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
          :title="
            store.state.options.show_help == 'On'
              ? store.state.language.messages_send
              : ''
          "
          @click.stop="sendMessage()"
        >
          <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
            <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
          </svg>
          {{ store.state.language.send }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'MessagesFooter',

  setup() {
    const store = inject('store')
    const message = ref('')

    const sendMessage = () => {
      if (message.value.length > 0) {
        store.methods.createMessage(
          store.state.user_id,
          store.state.current_user_id,
          message.value
        )
        message.value = ''
      }
    }

    return { store, message, sendMessage }
  },
}
</script>
