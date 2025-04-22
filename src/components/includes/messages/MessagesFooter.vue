<template>
  <div class="sticky bottom-0 bg-white">
    <div
      class="flex items-center justify-between bg-white border-t border-gray-200 px-4 sm:px-6 md:px-5"
    >
      <div class="grow mr-3 mt-1">
        <select
          id="offer_id"
          v-model="offer_id"
          name="offer_id"
          class="grow w-full pl-2 border border-gray-200 py-1 rounded hover:border-indigo-200 hover:bg-gray-50 focus:border-indigo-200 focus:bg-gray-50 outline-none"
        >
          <option value="0">Избери номер на оферта</option>
          <option
            v-for="offer in store.state.alloffers"
            :key="offer.id"
            :value="offer.id"
          >
            {{ offer.idnomber }} - {{ offer.client_name }}
          </option>
        </select>
      </div>
    </div>
    <div class="flex items-center justify-between px-4 sm:px-6 md:px-5 h-16">
      <div class="grow mr-3">
        <label for="message-input" class="sr-only">Въведи съобщение</label>
        <input
          id="message-input"
          class="w-full pl-2 border border-gray-200 py-1 rounded hover:border-indigo-200 hover:bg-gray-50 focus:border-indigo-200 focus:bg-gray-50 outline-none"
          type="text"
          placeholder="Aa"
          v-model="message"
          v-on:keyup.enter="sendMessage()"
        />
      </div>
      <button
        type="submit"
        title="Изпрати текста като съобщение"
        class="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap"
        @click.stop="sendMessage()"
      >
        <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
          <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
        </svg>
        Изпрати
      </button>
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
    const offer_id = ref(store.state.current_dashboard_offer)

    const sendMessage = () => {
      if (message.value.length > 0) {
        store.state.users.find(
          (element) => element.id == store.state.current_user_id
        ).checked = true
        const users_checked = store.state.users.filter((element) => {
          return element.id != store.state.user.id && element.checked
        })
        users_checked.forEach((element) => {
          store.methods.createMessage(
            store.state.user.id,
            element.id,
            message.value,
            offer_id.value
          )
        })
        message.value = ''
        store.state.users
          .filter((element) => {
            return element.id != store.state.current_user_id
          })
          .forEach((element) => {
            element.checked = false
          })
      }
    }

    return { store, message, offer_id, sendMessage }
  },
}
</script>
