<template>
  <div class="flex flex-col py-3 w-full">
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Регистрация</span>
      <input
        type="datetime-local"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="zadaca.start"
      />
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Приключване</span>
      <input
        type="datetime-local"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="zadaca.stop"
      />
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Напомняне</span>
      <select
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="zadaca.reminder"
      >
        <option value="1">1 ден</option>
        <option value="3">3 дни</option>
        <option value="5">5 дни</option>
        <option value="10">10 дни</option>
      </select>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Статус</span>
      <select
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="zadaca.status"
      >
        <option value="0">Приета</option>
        <option value="1">Приключена</option>
        <option value="2">Работи се</option>
        <option value="3">Отложена</option>
        <option value="4">Изчакване</option>
        <option value="5">Изчаква одобрение</option>
        <option value="6">В производство</option>
        <option value="7">За монтаж</option>
        <option value="8">За доставка</option>
      </select>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Потребители</span>
      <select
        multiple
        size="8"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1"
        v-model="zadaca.currentmembers"
      >
        <option
          v-for="member in zadaca.members"
          :key="member.id"
          :value="member.id"
        >
          {{ member.username }}
        </option>
      </select>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="zadaca.offer_id"
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
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Тема</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="zadaca.subject"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Описание</span>
      <textarea
        rows="8"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="zadaca.description"
      />
    </div>
  </div>
</template>

<script>
import { inject, computed, ref } from 'vue'
import moment from 'moment'

export default {
  name: 'Storeminus',

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
