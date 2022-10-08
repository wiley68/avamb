<template>
  <div class="sticky top-0 z-10 bg-white">
    <div class="flex items-center bg-white border-b border-gray-200 px-5 h-16">
      <div class="w-full flex items-center justify-between">
        <div class="">
          <button
            v-if="store.state.current_oferti !== 0"
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            @click.stop="store.methods.createProforma(store.state.current_oferti)"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 mr-1 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z"
              />
            </svg>
          </button>
        </div>
        <div class="font-medium">Проформи</div>
      </div>
    </div>
  </div>
  <div class="px-5 py-4">
    <ul class="mb-6">
      <li v-for="proforma in getProformi()" :key="proforma.id" class="-mx-2 mb-1">
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
              <span class="text-sm font-medium text-red-700">{{ proforma.price }}</span>
            </div>
          </div>
          <div class="flex w-full">
            <div class="flex-none">
              <span class="text-sm font-medium text-gray-500 mr-1"
                >Частично плащане - {{ formatDateTime(proforma.dateon) }}</span
              ><span class="text-gray-400">|</span>
            </div>
            <div class="flex-grow ml-1 text-right">
              <span class="text-sm font-medium text-red-700">{{ proforma.avansi }}</span>
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
import { inject } from "vue";
import moment from "moment";

export default {
  name: "Proformi",

  setup() {
    const store = inject("store");

    const getProformi = () => {
      if (store.state.current_oferti !== 0) {
        return store.state.proformi.filter(
          (element) => element.offer_idnomber == store.state.current_oferti
        );
      } else {
        return store.state.proformi;
      }
    };

    const editProforma = (proforma_idnomber) => {
      store.state.current_proformi = proforma_idnomber;
      setTimeout(() => {
        store.methods.changePage("Proforma");
      }, 500);
    };

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format("DD.MM.YYYY");
      }
    };

    return {
      store,
      getProformi,
      editProforma,
      formatDateTime,
    };
  },
};
</script>
