<template>
  <div class="flex flex-row h-screen bg-gray-100">
    <Sidebar></Sidebar>
    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <Header />
      <!-- <dashboard v-if="store.state.page == 'Dashboard'"></dashboard> -->
    </div>
  </div>
</template>

<script>
import { onMounted, provide } from 'vue'
import store from './store'
import Sidebar from './components/includes/Sidebar.vue'
import Header from './components/includes/Header.vue'
// import Dashboard from './components/Dashboard.vue'

export default {
  name: 'App',

  components: {
    Sidebar,
    Header,
    // Dashboard,
  },

  setup() {
    provide('store', store)

    onMounted(() => {
      //store.methods.loadData()
    })

    return { store }
  },
}
</script>
