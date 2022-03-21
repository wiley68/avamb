<template>
  <div class="flex flex-col py-3 w-full">
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 w-full font-medium"
        >Експедиционна бележка №:
        <span class="text-red-600">{{ storeminus.id }}</span></span
      >
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="storeminus.contragent_id"
      >
        <option value="0" selected>Избери клиент</option>
        <option
          v-for="client in store.state.clienti"
          :key="client.id"
          :value="client.id"
        >
          {{ client.id }}&nbsp;-&nbsp;{{ client.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Приключване</span>
      <input
        type="date"
        v-model="storeminus.dateon"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
      />
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Напомняне</span>
      <input
        type="text"
        v-model="storeminus.parvicen"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
      />
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'Storeminus',

  setup() {
    const store = inject('store')

    const storeminus = computed(() => {
      return store.state.storeminusi_temp.find(
        (element) => element.id == store.state.current_storeminus_id
      )
    })

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    return { store, storeminus, formatDateTime }
  },
}
</script>
