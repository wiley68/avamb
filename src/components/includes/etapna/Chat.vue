<template>
  <main>
    <ChatBody />
  </main>
</template>

<script>
import { inject } from 'vue'
import ChatBody from './chat/ChatBody.vue'

export default {
  name: 'Chat',

  components: { ChatBody },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
