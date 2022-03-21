<template>
  <div class="flex flex-col py-3 w-full">
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Регистрация</span>
      111
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Приключване</span>
      222
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Напомняне</span>
      333
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Статус</span>
      444
    </div>
    <div class="flex flex-row justify-between items-center mb-1">
      <span class="p-1 text-sm w-3/12">Потребители</span>
      555
    </div>
    <div class="flex flex-row justify-between items-center mb-1">666</div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Тема</span>
      777
    </div>
    <div class="flex flex-col mb-1">
      <span class="p-1 text-sm">Описание</span>
      888
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
