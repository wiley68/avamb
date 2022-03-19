<template>
  <div class="mt-4">
    <div class="text-xs font-semibold text-gray-400 uppercase mb-3">111</div>
    <ul class="mb-6">
      <li class="-mx-2 mb-1" v-for="user in getUsers" :key="user.id">
        <button
          class="flex items-center justify-between w-full p-2 rounded hover:bg-indigo-100"
          :class="user.id == store.state.current_user_id ? 'bg-indigo-100' : ''"
          @click.stop="changeUser(user.id)"
        >
          <div class="flex items-center truncate">
            <img
              v-if="user.user_gravatar != ''"
              class="w-7 h-7 rounded-full mr-2"
              :src="'https://www.gravatar.com/avatar/' + user.user_gravatar"
            />
            <svg
              v-if="user.user_gravatar == ''"
              class="w-7 h-7 mr-2"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
              />
            </svg>
            <div class="truncate">
              <span class="text-sm font-medium text-gray-800"
                >{{ user.first_name }} {{ user.last_name }}
                <span class="text-xs text-gray-400"
                  >({{ user.nickname }})</span
                ></span
              >
            </div>
          </div>
          <div class="flex items-center ml-2">
            <svg
              v-if="getMessagesByUserLength(user.id) == 0"
              class="w-3 h-3 shrink-0 fill-current text-gray-400"
              viewBox="0 0 12 12"
            >
              <path
                d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
              />
            </svg>
            <div
              v-if="getMessagesByUserLength(user.id) > 0"
              class="text-xs inline-flex font-medium bg-indigo-400 text-white rounded-full text-center leading-5 px-2"
            >
              {{ getMessagesByUserLength(user.id) }}
            </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'DirectMessages',

  props: ['msgSidebarOpen'],

  emits: ['close-msgsidebar'],

  setup(props, { emit }) {
    const store = inject('store')

    const changeUser = (user_id) => {
      store.state.current_user_id = user_id
      emit('close-msgsidebar')
    }

    const getUsers = computed(() => {
      return store.state.users.filter((element) => {
        return element.id != store.state.user_id
      })
    })

    const getMessagesByUserLength = (user_id) => {
      return store.state.messages.filter((element) => {
        return (
          moment(element.created_at).date() == moment().date() &&
          ((element.from_user_id == user_id &&
            element.to_user_id == store.state.user_id) ||
            (element.to_user_id == user_id &&
              element.from_user_id == store.state.user_id))
        )
      }).length
    }

    return {
      store,
      changeUser,
      getUsers,
      getMessagesByUserLength,
    }
  },
}
</script>
