<template>
  <div class="grow px-4 sm:px-6 md:px-5 py-6">
    <div
      v-for="message in store.state.chat"
      :key="message.id"
      class="flex items-center mb-4 last:mb-0"
      :class="
        message.from_user_id == store.state.current_user_id
          ? 'justify-end'
          : 'justify-start'
      "
    >
      <img
        v-if="
          store.methods.getUserById(message.from_user_id).user_gravatar != ''
        "
        class="w-10 h-10 rounded-full mr-2"
        :src="
          'https://www.gravatar.com/avatar/' +
          store.methods.getUserById(message.from_user_id).user_gravatar
        "
      />
      <svg
        v-if="
          store.methods.getUserById(message.from_user_id).user_gravatar == ''
        "
        class="w-10 h-10 mr-2"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
        />
      </svg>
      <div>
        <div class="text-xs text-gray-500 font-medium">
          <span class="text-md text-red-600 font-bold">{{
            message.offer_idnomber
          }}</span>
          {{ store.methods.getUserById(message.from_user_id).username }}
        </div>
        <div
          class="text-sm p-3 rounded-lg rounded-tl-none border border-gray-200 shadow-md mb-1 min-w-44"
          :class="
            message.from_user_id == store.state.current_user_id
              ? 'bg-indigo-500 text-white'
              : 'bg-white text-gray-800'
          "
        >
          {{ message.body }}
        </div>
        <div class="flex items-center">
          <div class="flex-grow text-xs text-gray-500 font-medium">
            {{ formatDateTime(message.created_at) }}
          </div>
          <svg
            class="w-5 h-3 shrink-0 fill-current text-green-500"
            viewBox="0 0 20 12"
          >
            <path
              d="M10.402 6.988l1.586 1.586L18.28 2.28a1 1 0 011.414 1.414l-7 7a1 1 0 01-1.414 0L8.988 8.402l-2.293 2.293a1 1 0 01-1.414 0l-3-3A1 1 0 013.695 6.28l2.293 2.293L12.28 2.28a1 1 0 011.414 1.414l-3.293 3.293z"
            />
          </svg>
          <button
            @click.stop="deleteMessageCheck(message.id)"
            title="Изтрий избраното съобщение"
          >
            <svg
              class="w-5 h-5 text-red-400 hover:text-red-600"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-start mb-4 last:mb-0">
      <div>
        <div
          class="text-sm bg-white text-gray-800 p-3 rounded-lg rounded-tl-none border border-gray-200 shadow-md mb-1"
        >
          <svg
            class="fill-current text-gray-400"
            viewBox="0 0 15 3"
            width="15"
            height="3"
          >
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
            >
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"
              />
            </circle>
            <circle
              cx="7.5"
              cy="1.5"
              r="1.5"
            >
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.2"
              />
            </circle>
            <circle
              cx="13.5"
              cy="1.5"
              r="1.5"
            >
              <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.3"
              />
            </circle>
          </svg>
        </div>
      </div>
    </div>
    <ModalBlank
      id="danger-modal"
      :modalOpen="store.state.deleteMessage"
      @close-modal="store.methods.changeDeleteMessage(false)"
    >
      <div class="p-5 flex space-x-4">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-red-100"
        >
          <svg
            class="w-4 h-4 shrink-0 fill-current text-red-600"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
            />
          </svg>
        </div>
        <div>
          <div class="mb-2">
            <div class="text-lg font-semibold text-gray-800">
              Желаете ли да изтриете съобщението?
            </div>
          </div>
          <div class="text-sm mb-10">
            <div class="space-y-2">
              <p>
                Това съобщение ще бъде изтрито. Тази операция не може да се
                прекъсне!
              </p>
            </div>
          </div>
          <div class="flex flex-wrap justify-end space-x-2">
            <button
              class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
              @click.stop="store.methods.changeDeleteMessage(false)"
            >
              Откажи
            </button>
            <button
              class="btn-sm bg-red-500 hover:bg-red-600 text-white"
              @click.stop="deleteMessage()"
            >
              Да, Изтрий го!
            </button>
          </div>
        </div>
      </div>
    </ModalBlank>
  </div>
</template>

<script>
import { inject, ref } from 'vue'
import moment from 'moment'
import ModalBlank from './../../components/ModalBlank.vue'

export default {
  name: 'MessagesBody',

  components: {
    ModalBlank,
  },

  setup() {
    const store = inject('store')
    const delete_message_id = ref(0)

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    const deleteMessageCheck = (_delete_message_id) => {
      delete_message_id.value = _delete_message_id
      store.methods.changeDeleteMessage(true)
    }

    const deleteMessage = () => {
      store.methods.deleteMessage(delete_message_id.value)
      delete_message_id.value = 0
    }

    return {
      store,
      formatDateTime,
      deleteMessageCheck,
      delete_message_id,
      deleteMessage,
    }
  },
}
</script>
