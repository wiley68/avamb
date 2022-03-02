<template>
  <div class="flex flex-row h-screen bg-white">
    <Sidebar></Sidebar>
    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <Header />
      <Dashboard v-if="store.state.page == 'Dashboard'"></Dashboard>
      <Razmeri v-if="store.state.page == 'Razmeri'"></Razmeri>
      <Client v-if="store.state.page == 'Client'"></Client>
      <Zapitvane v-if="store.state.page == 'Zapitvane'"></Zapitvane>
      <Otgovor v-if="store.state.page == 'Otgovor'"></Otgovor>
      <Eoffers v-if="store.state.page == 'Eoffers'"></Eoffers>
    </div>
  </div>
</template>

<script>
import { onMounted, provide } from 'vue'
import store from './store'
import Sidebar from './components/includes/Sidebar.vue'
import Header from './components/includes/Header.vue'
import Dashboard from './components/Dashboard.vue'
import Razmeri from './components/Razmeri.vue'
import Client from './components/Client.vue'
import Zapitvane from './components/Zapitvane.vue'
import Otgovor from './components/Otgovor.vue'
import Eoffers from './components/Eoffers.vue'

export default {
  name: 'App',

  components: {
    Sidebar,
    Header,
    Dashboard,
    Razmeri,
    Client,
    Zapitvane,
    Otgovor,
    Eoffers,
  },

  setup() {
    provide('store', store)

    onMounted(() => {
      store.methods.loadData()
    })

    return { store }
  },
}
</script>
