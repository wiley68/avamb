<template>
  <div class="flex flex-col py-3 w-full">
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">№</span>
      <div
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 text-red-600 font-medium"
      >
        {{ modul1.id }}
      </div>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Дата</span>
      <input
        type="datetime-local"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="modul1.output_date"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Клиент</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul1.client_id_txt"
      />
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Статус</span>
      <select
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="modul1.statusi_id"
      >
        <option
          v-for="item in modul1.select_statusi"
          :key="item.id"
          :value="item.id"
        >
          {{ item.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="modul1.offer_id"
      >
        <option value="0">Избери оферта</option>
        <option
          v-for="offer in store.state.offers"
          :key="offer.id"
          :value="offer.id"
        >
          {{ offer.idnomber }}&nbsp;-&nbsp;{{ offer.client_name }}
        </option>
      </select>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Потребители</span>
      <select
        multiple
        size="8"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul1.currentmembers"
      >
        <option
          v-for="member in modul1.members"
          :key="member.id"
          :value="member.id"
        >
          {{ member.username }}
        </option>
      </select>
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Тема</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul1.subject"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Описание</span>
      <textarea
        rows="8"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul1.description"
      ></textarea>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'Modul1',

  setup() {
    const store = inject('store')

    const modul1 = computed(() => {
      return store.state.moduli1_temp.find(
        (element) => element.id == store.state.current_modul1_id
      )
    })

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    return { store, modul1, formatDateTime }
  },
}
</script>
