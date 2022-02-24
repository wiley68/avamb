<template>
  <ul
    class="flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px"
  >
    <li>
      <img
        class="w-9 h-9 rounded-full"
        :src="'https://www.gravatar.com/avatar/'"
        width="36"
        height="36"
        :title="'Илко Иванов'"
      />
    </li>
    <li>
      <img
        class="w-9 h-9 rounded-full"
        :src="'https://www.gravatar.com/avatar/'"
        width="36"
        height="36"
        :title="'Илко Иванов'"
      />
    </li>
  </ul>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'DashboardAvatars',

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
