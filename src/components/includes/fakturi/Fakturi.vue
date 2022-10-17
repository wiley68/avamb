<template>
  <div class="sticky top-0 z-10 bg-white">
    <div class="flex items-center bg-white border-b border-gray-200 px-5 h-16">
      <div class="w-full flex items-center justify-between">
        <div class="">
          <button
            v-if="store.state.current_oferti !== 0"
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            @click.stop="store.methods.createFaktura(store.state.current_oferti)"
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
        <div class="font-medium">Фактури (продажби)</div>
      </div>
    </div>
  </div>
  <div class="px-5 py-4">
    <ul class="mb-6">
      <li v-for="faktura in getFakturi()" :key="faktura.id" class="-mx-2 mb-1">
        <button
          class="flex flex-col w-full p-1 text-left bg-gray-100 rounded border border-gray-200"
          @click.stop="editFaktura(faktura.idnomber)"
        >
          <div class="flex w-full">
            <div class="flex-none">
              <span class="text-sm font-medium text-red-700 mr-1">{{
                faktura.idnomber
              }}</span
              ><span class="text-gray-400">|</span>
            </div>
            <div class="ml-1 flex-grow text-left">
              <span class="text-sm font-medium text-gray-500 mr-1"
                >Оферта - {{ faktura.offer_idnomber }}</span
              ><span class="text-gray-400">|</span
              ><span class="text-sm font-medium text-gray-500 ml-1">{{
                formatDateTime(faktura.dateon)
              }}</span>
            </div>
            <div class="ml-1 text-right">
              <span class="text-sm font-medium text-red-700">{{ faktura.price }}</span>
            </div>
          </div>
          <div class="flex w-full">
            <div class="flex-grow">
              <span class="text-sm font-medium text-gray-500">{{
                faktura.client_name
              }}</span>
            </div>
            <div
              class="ml-1 text-right w-12 flex justify-center items-center text-gray-100"
              :class="faktura.status == 'Yes' ? 'bg-green-600' : 'bg-gray-400'"
            >
              <span class="text-sm font-medium">{{ faktura.status }}</span>
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
  name: "Fakturi",

  setup() {
    const store = inject("store");

    const getFakturi = () => {
      if (store.state.current_oferti !== 0) {
        return store.state.fakturi(
          (element) => element.offer_idnomber == store.state.current_oferti
        );
      } else {
        return store.state.fakturi;
      }
    };

    const editFaktura = (faktura_idnomber) => {
      store.state.current_fakturi = faktura_idnomber;
      //   setTimeout(() => {
      //     store.methods.changePage("Faktura");
      //   }, 500);
    };

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format("DD.MM.YYYY");
      }
    };

    return {
      store,
      getFakturi,
      editFaktura,
      formatDateTime,
    };
  },
};
</script>
