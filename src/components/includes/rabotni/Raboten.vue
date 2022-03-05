<template>
  <div class="flex flex-row items-center space-y-2 p-4 sm:p-6 mb-2">
    <button
      class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
      title="Покажи всички"
    >
      <svg class="w-6 h-6 fill-current text-blue-600" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z"
        />
      </svg>
    </button>
    <span class="ml-2 font-medium">Работни листи</span>
    <span class="ml-2 font-medium">Заплата: </span>
  </div>
  <ul class="mb-6">
    <li
      v-for="raboten in store.state.rabotni"
      :key="raboten.id"
      class="-mx-2 mb-1"
    >
      <button class="w-full p-2 rounded bg-sky-200 border border-sky-300">
        <div class="flex items-center justify-between">
          <div class="truncate">
            <span class="text-sm font-medium text-gray-800 mr-1">{{
              raboten.id
            }}</span>
          </div>
          <div>
            <span class="text-sm font-medium text-orange-700">{{
              raboten.id
            }}</span>
          </div>
        </div>
      </button>
    </li>
  </ul>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Raboten',

  setup() {
    const store = inject('store')

    return {
      store,
    }
  },
}
</script>
