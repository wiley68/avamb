<template>
  <div class="sticky top-0 z-10 bg-white">
    <div class="flex items-center bg-white border-b border-gray-200 px-5 h-16">
      <div class="w-full flex items-center justify-end">
        <div class="font-medium">Проформи</div>
      </div>
    </div>
  </div>
  <div class="px-5 py-4">
    <ul class="mb-6">
      <li
        v-for="proforma in getProformi()"
        :key="proforma.id"
        class="-mx-2 mb-1"
      >
        <button
          class="flex flex-col w-full p-1 text-left bg-gray-100 rounded border border-gray-200"
          @click.stop="editProforma(proforma.idnomber)"
        >
          <div class="flex w-full">
            <div class="flex-none">
              <span class="text-sm font-medium text-red-700 mr-1">{{
                proforma.idnomber
              }}</span
              ><span class="text-gray-400">|</span>
            </div>
            <div class="ml-1 flex-grow text-left">
              <span class="text-sm font-medium text-gray-500"
                >Оферта - {{ proforma.offer_idnomber }}</span
              >
            </div>
            <div class="ml-1 text-right">
              <span class="text-sm font-medium text-red-700">{{
                proforma.price
              }}</span>
            </div>
          </div>
          <div class="flex w-full">
            <div class="flex-none">
              <span class="text-sm font-medium text-gray-500 mr-1"
                >Частично плащане - {{ proforma.dateon }}</span
              ><span class="text-gray-400">|</span>
            </div>
            <div class="flex-grow ml-1 text-right">
              <span class="text-sm font-medium text-red-700">{{
                proforma.avansi
              }}</span>
            </div>
          </div>
          <div class="flex w-full">
            <div class="flex-grow">
              <span class="text-sm font-medium text-gray-500">{{
                proforma.client_name
              }}</span>
            </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Proformi',

  setup() {
    const store = inject('store')

    const getProformi = () => {
      return store.state.proformi_temp
    }

    const editProforma = (proforma_idnomber) => {
      //   store.state.current_proformi = proforma_idnomber
      //   setTimeout(() => {
      //     store.methods.changePage('Proforma')
      //   }, 500)
    }

    return {
      store,
      getProformi,
      editProforma,
    }
  },
}
</script>
