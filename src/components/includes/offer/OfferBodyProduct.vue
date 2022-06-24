<template>
  <div class="flex relative h-14 bg-gray-50 border-b border-gray-200 mb-1">
    <div class="flex justify-between items-center w-full mr-4">
      <button
        class="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
        @click.stop="store.methods.toggleOfferSidebarProduct()"
        aria-controls="about-sidebar"
        :aria-expanded="store.state.offerSidebarProductOpen"
      >
        <span class="sr-only">Етап 4</span>
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="text-gray-500"
            d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
          />
        </svg>
      </button>
      <div class="flex items-center ml-16">
        {{
          store.state.current_suboffer == 0
            ? 'Нов продукт'
            : suboffer.product_name
        }}
      </div>
      <button
        class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
        aria-controls="success-modal"
        @click.stop="updateProduct()"
      >
        <svg
          class="w-6 h-6 fill-current text-blue-600 mr-1 shrink-0"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
          />
        </svg>
      </button>
    </div>
  </div>
  <div
    class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 m-3"
  >
    <div class="flex flex-col mt-2 w-full">
      <div class="text-sm text-slate-600">Продукт:</div>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Продукт"
        v-model="suboffer.products_code"
      />
    </div>
    <div class="flex flex-col mt-2 w-full">
      <div class="text-sm text-slate-600">Местонахождение 3:</div>
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Местонахождение 3"
        v-model="suboffer.grupa3"
      />
    </div>
    <div class="flex flex-col mt-2 w-full">
      <div class="text-sm text-slate-600">Количество:</div>
      <input
        type="number"
        step="0.01"
        min="0"
        max="9999.99"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Количество"
        v-model="suboffer.quantity"
      />
    </div>
    <div class="flex flex-col mt-2 w-full">
      <div class="text-sm text-slate-600">ДДС:</div>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="suboffer.dds"
      >
        <option value="-1">Избери ДДС</option>
        <option
          v-for="dds in store.state.ddsfirm"
          :key="dds.value"
          :value="dds.value"
        >
          {{ dds.name }}
        </option>
      </select>
    </div>
    <div class="flex flex-col mt-2 w-full">
      <div class="text-sm text-slate-600">Височина H:</div>
      <input
        type="number"
        step="1"
        min="0"
        max="999999"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Височина H"
        v-model="suboffer.h"
      />
    </div>
    <div class="flex flex-col mt-2 w-full">
      <div class="text-sm text-slate-600">Ширина L:</div>
      <input
        type="number"
        step="1"
        min="0"
        max="999999"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Ширина L"
        v-model="suboffer.l"
      />
    </div>
    <div class="flex flex-col mt-2 w-full">
      <div class="text-sm text-slate-600">Дълбочина P:</div>
      <input
        type="number"
        step="1"
        min="0"
        max="999999"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Дълбочина P"
        v-model="suboffer.p"
      />
    </div>
    <div class="flex flex-col mt-1 w-full">
      <div class="text-sm text-slate-600">Описание:</div>
      <textarea
        rows="5"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="suboffer.description"
      />
    </div>
    <div class="flex flex-col mt-2 mb-4 w-full">
      <div class="text-sm text-slate-600">Ед. цена:</div>
      <input
        type="number"
        step="0.01"
        min="0"
        max="99999999.99"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Ед. цена"
        v-model="suboffer.price"
      />
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'OfferBodyProduct',

  setup() {
    const store = inject('store')

    const suboffer = computed(() => {
      if (store.state.current_suboffer == 0) {
        return {
          id: 0,
          products_code: '',
          grupa3: '',
          quantity: '0.00',
          dds: '-1',
          h: '1',
          l: '1',
          p: '1',
          description: '',
          price: '0.00',
        }
      } else {
        return store.state.suboffers.find(
          (element) => element.id == store.state.current_suboffer
        )
      }
    })

    return {
      store,
      suboffer,
    }
  },
}
</script>
