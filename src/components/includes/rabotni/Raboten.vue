<template>
  <div class="py-6 w-full">
    <header class="flex items-start">
      <div class="sm:flex items-start justify-between mb-1">
        <div class="xl:flex items-center mb-2 sm:mb-0">
          <span class="text-sm font-semibold text-gray-800 text-left truncate">
            Служител&nbsp;-&nbsp;{{ raboten.sluzitel_name }}
          </span>
          <div class="text-sm text-gray-400 hidden xl:block mx-1">·</div>
          <div class="text-sm">
            Дата:&nbsp;{{ formatDateTime(raboten.dateon) }}
          </div>
        </div>
      </div>
    </header>
    <div class="flex flex-row items-center text-sm text-gray-800 mb-2">
      <div class="mr-2">Ще шофирате ли днес:</div>
      <div class="flex items-center">
        <div class="form-switch focus-within:shadow-outline">
          <input
            type="checkbox"
            id="toggle-isdriver"
            class="sr-only"
            v-model="raboten.isdriver"
            true-value="1"
            false-value="0"
          />
          <label class="bg-gray-400" for="toggle-isdriver">
            <span class="bg-white shadow-sm" aria-hidden="true"></span>
            <span class="sr-only">1111111</span>
          </label>
        </div>
        <div class="text-sm text-gray-400 italic ml-2">
          {{ formatCheck(raboten.isdriver) }}
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-start items-start text-sm text-gray-800"
      v-if="raboten.isdriver == '1'"
    >
      <div class="flex flex-row items-center w-full mb-1">
        <div class="w-24">МПС:</div>
        <select
          v-model="raboten.mps_regnomer_id"
          class="flex-grow border border-gray-200 p-1 outline-none"
        >
          <option v-for="mps in raboten.mpsta" :key="mps.id" :value="mps.id">
            {{ mps.regnomer }}
          </option>
        </select>
      </div>
      <div class="flex flex-row items-center w-full mb-1">
        <div class="w-24">Цена гориво:</div>
        <input
          v-model="raboten.cena_gorivo"
          type="text"
          class="flex-grow border border-gray-200 p-1 outline-none"
        />
      </div>
    </div>
    <div class="flex flex-col justify-start items-start text-sm text-gray-800">
      <div class="flex flex-row items-center w-full mb-1">
        <div class="w-24">Аванс:</div>
        <input
          v-model="raboten.avans"
          type="text"
          class="flex-grow border border-gray-200 p-1 outline-none"
        />
      </div>
      <div class="flex flex-row items-center w-full mb-1">
        <div class="w-24">Заплащане +:</div>
        <input
          v-model="raboten.bonus"
          type="text"
          class="flex-grow border border-gray-200 p-1 outline-none"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'Raboten',

  setup() {
    const store = inject('store')

    const raboten = computed(() => {
      return store.state.rabotni.find(
        (element) => element.id == store.state.current_raboten_id
      )
    })

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    const formatCheck = (value) => {
      if (value == '1') {
        return 'Да'
      } else {
        return 'Не'
      }
    }

    return { store, raboten, formatDateTime, formatCheck }
  },
}
</script>
