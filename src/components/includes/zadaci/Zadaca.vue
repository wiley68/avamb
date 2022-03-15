<template>
  <div class="py-6 w-full">
    <header class="w-full flex items-start">
      <div class="w-full sm:flex items-start justify-between mb-1">
        <div class="xl:flex items-center mb-2 sm:mb-0">
          <span class="text-sm font-semibold text-gray-800 text-left truncate">
            Служител&nbsp;-&nbsp;111
          </span>
          <div class="text-sm text-gray-400 hidden xl:block mx-1">·</div>
          <div
            class="flex flex-row w-full justify-between items-center text-sm"
          >
            <div class="">Дата:&nbsp;222</div>
            <div class="text-right">№&nbsp;{{ zadaca.id }}</div>
          </div>
        </div>
      </div>
    </header>
    <div class="flex flex-col justify-start items-start text-sm text-gray-800">
      444
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'Zadaca',

  setup() {
    const store = inject('store')

    const zadaca = computed(() => {
      return store.state.zadaci_temp.find(
        (element) => element.id == store.state.current_zadaca_id
      )
    })

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    return { store, zadaca, formatDateTime }
  },
}
</script>
