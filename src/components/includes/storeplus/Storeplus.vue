<template>
  <div class="flex flex-col py-3 w-full">
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 w-full font-medium"
        >Складова разписка №:
        <span class="text-red-600">{{ storeplus.id }}</span></span
      >
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="storeplus.contragent_id"
        @change.stop="changeDostavcik()"
      >
        <option value="0" selected>Избери клиент</option>
        <option
          v-for="dostavcik in store.state.dostavcici"
          :key="dostavcik.id"
          :value="dostavcik.id"
        >
          {{ dostavcik.id }}&nbsp;-&nbsp;{{ dostavcik.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Приключване</span>
      <input
        type="date"
        v-model="storeplus.dateon"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
      />
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Първ. док.</span>
      <input
        type="text"
        v-model="storeplus.parvicen"
        class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
      />
    </div>
    <div class="flex flex-row justify-end items-center mb-1">
      <div
        class="w-32 flex flex-row justify-center items-center"
        :class="
          storeplus.status == 0
            ? 'bg-gray-300 text-gray-600'
            : 'bg-green-600 text-white'
        "
      >
        {{ getStatusText(storeplus.status) }}
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'
import moment from 'moment'

export default {
  name: 'Storeplus',

  setup() {
    const store = inject('store')

    const storeplus = computed(() => {
      const storeplus_current = store.state.storeplusi_temp.find(
        (element) => element.id == store.state.current_storeplus_id
      )
      return storeplus_current
    })

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    const getStatusText = (status) => {
      if (status == 0) {
        return 'Типова'
      } else {
        return 'Приключена'
      }
    }

    const changeDostavcik = () => {
      store.methods.getProduktiPlus()
      store.state.category = ''
      store.state.code = ''
      store.state.produkti_plus_temp = store.state.produkti_plus.filter(
        (element) => element.category_name == store.state.category
      )
    }

    return { store, storeplus, formatDateTime, getStatusText, changeDostavcik }
  },
}
</script>
