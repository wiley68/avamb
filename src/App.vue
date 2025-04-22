<template>
  <div class="flex flex-row h-screen bg-white">
    <Sidebar />
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <Header></Header>
      <component :is="currentPageComponent" v-if="currentPageComponent" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent, computed, onMounted, provide } from 'vue'
import store from './store'

import Sidebar from './components/includes/Sidebar.vue'
import Header from './components/includes/Header.vue'

export default {
  name: 'App',
  components: {
    Sidebar,
    Header,
  },
  setup() {
    provide('store', store)

    const currentPageComponent = computed(() => {
      const page = store.state.page
      if (!page) return null

      const etapnaPages = [
        'Client',
        'Zapitvane',
        'Otgovor',
        'Eoffers',
        'Pdogovori',
        'Ddsta',
        'Poffers',
        'Casti',
        'Poracki',
        'Pps',
        'Pprs',
        'Snimki',
        'Fakturip',
        'Docposeshtenia',
      ]

      if (etapnaPages.includes(page)) {
        return defineAsyncComponent(() =>
          import(`./components/includes/etapna/${page}.vue`)
        )
      }

      return defineAsyncComponent(() => import(`./components/${page}.vue`))
    })

    onMounted(() => {
      store.methods.loadData()
    })

    return {
      store,
      currentPageComponent,
    }
  },
}
</script>
