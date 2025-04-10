<template>
  <div class="flex flex-col py-3 w-full">
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Дата</span>
      <input
        type="datetime-local"
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="modul1.dateon"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Оферта</span>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="offer_id"
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
      <span class="p-1 text-sm">Клиент</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        disabled
        :value="getOfferClientName(offer_id)"
      />
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Статус</span>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
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
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Текстово поле горе</span>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="shablon1"
        @change.stop="changeText1()"
      >
        <option value="">Избери от моите шаблони</option>
        <option
          v-for="shablon in store.state.shabloni"
          :key="shablon.name"
          :value="shablon.description"
        >
          {{ shablon.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-col mb-1">
      <textarea
        rows="8"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul1.text1"
      ></textarea>
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Текстово поле долу</span>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="shablon2"
        @change.stop="changeText2()"
      >
        <option value="">Избери от моите шаблони</option>
        <option
          v-for="shablon in store.state.shabloni"
          :key="shablon.name"
          :value="shablon.description"
        >
          {{ shablon.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-col mb-1">
      <textarea
        rows="8"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul1.text2"
      ></textarea>
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">{{ modul1.modul1_info1 }}</span>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="modul1.info1"
      />
    </div>
  </div>
</template>

<script>
import { inject, computed, ref, onMounted } from 'vue'
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

    onMounted(() => {
      store.methods.getShabloni()
    })

    const offer_id = ref(modul1.value.offer_id)
    const shablon1 = ref('')
    const shablon2 = ref('')

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY hh:mm')
      }
    }

    const getOfferClientName = (offer_id) => {
      const offer = store.state.offers.find((element) => element.id == offer_id)
      return offer ? offer.client_name : ''
    }

    const changeText1 = () => {
      modul1.value.text1 = shablon1.value
    }

    const changeText2 = () => {
      modul1.value.text2 = shablon2.value
    }

    return {
      store,
      modul1,
      formatDateTime,
      getOfferClientName,
      offer_id,
      shablon1,
      changeText1,
      shablon2,
    }
  },
}
</script>
