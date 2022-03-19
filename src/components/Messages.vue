<template>
  <main>
    <div class="relative flex">
      <MessagesSidebar
        :msgSidebarOpen="msgSidebarOpen"
        @close-msgsidebar="msgSidebarOpen = false"
      />
      <div
        class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
        :class="msgSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'"
      >
        <MessagesHeader
          :msgSidebarOpen="msgSidebarOpen"
          @toggle-msgsidebar="msgSidebarOpen = !msgSidebarOpen"
        />
        <MessagesBody />
        <MessagesFooter />
      </div>
    </div>
  </main>
</template>

<script>
import { inject, ref } from 'vue'
import MessagesSidebar from './includes/messages/MessagesSidebar.vue'
import MessagesHeader from './includes/messages/MessagesHeader.vue'
import MessagesBody from './includes/messages/MessagesBody.vue'
import MessagesFooter from './includes/messages/MessagesFooter.vue'

export default {
  name: 'Messages',

  components: { MessagesSidebar, MessagesHeader, MessagesBody, MessagesFooter },

  setup() {
    const store = inject('store')
    const msgSidebarOpen = ref(true)

    return { store, msgSidebarOpen }
  },
}
</script>
