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
          class="w-6 h-6 fill-current text-blue-600 shrink-0"
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
      <div class="flex">
        <input
          readonly
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Продукт"
          v-model="suboffer.products_code"
        /><button
          @click.stop="product_search_div = !product_search_div"
          class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
          aria-controls="success-modal"
        >
          <svg
            class="w-6 h-6 fill-current text-blue-600 shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z"
            />
          </svg>
        </button>
        <button
          class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
          aria-controls="success-modal"
        >
          <svg
            class="w-6 h-6 fill-current text-blue-600 shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-show="product_search_div"
      class="bg-red-50 w-full mt-2 rounded p-2 border border-red-300 flex flex-col items-center justify-center"
    >
      <input
        type="text"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        placeholder="Търси продукт ..."
        v-model="product_code_search"
      />
      <select
        size="8"
        class="w-full text-sm border rounded-sm border-gray-100 p-1"
        v-model="product"
      >
        <option
          v-for="product in products"
          :key="product.code"
          :value="product"
        >
          {{ product.code }} - {{ product.name }}
        </option>
      </select>
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
        @input.stop="changeQuantity()"
      />
    </div>
    <div class="flex flex-col mt-2 w-full">
      <div class="text-sm text-slate-600">ДДС:</div>
      <select
        class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
        v-model="suboffer.dds"
        @change.stop="changeDds()"
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
  <ModalBlank
    id="success-modal"
    :modalOpen="store.state.successUpdateSuboffer"
    @close-modal="store.methods.changeSuccessUpdateSuboffer(false)"
  >
    <div class="p-5 flex space-x-4">
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-green-100"
      >
        <svg
          class="w-4 h-4 shrink-0 fill-current text-green-500"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"
          />
        </svg>
      </div>
      <div>
        <div class="mb-2">
          <div class="text-lg font-semibold text-gray-800">Съобщение</div>
        </div>
        <div class="text-sm mb-10">
          <div class="space-y-2">
            <p>Промените са записани успешно</p>
          </div>
        </div>
        <div class="flex flex-wrap justify-end space-x-2">
          <button
            class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
            @click.stop="store.methods.changeSuccessUpdateSuboffer(false)"
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  </ModalBlank>
</template>

<script>
import { inject, computed, ref, watch } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'

export default {
  name: 'OfferBodyProduct',

  components: { ModalBlank },

  setup() {
    const store = inject('store')

    const product_code_search = ref('')
    const product_search_div = ref(false)
    const products = ref(store.state.produkti_main)
    const product = ref({})

    const suboffer = computed(() => {
      if (store.state.current_suboffer == 0) {
        return {
          id: 0,
          products_code: '',
          grupa1: null,
          grupa2: null,
          grupa3: '',
          quantity: '0.00',
          dds: '-1',
          h: '1',
          l: '1',
          p: '1',
          description: '',
          price: '0.00',
          picture_url: null,
          picture_is: 1,
          description_is: 1,
          order_id: 0,
          isstat: 'Yes',
          isbroi: 'No',
          subproducts_code_1: null,
          subproducts_code_1_q: null,
          subproducts_code_1_price: null,
          subproducts_code_2: null,
          subproducts_code_2_q: null,
          subproducts_code_2_price: null,
          subproducts_code_3: null,
          subproducts_code_3_q: null,
          subproducts_code_3_price: null,
          subproducts_code_4: null,
          subproducts_code_4_q: null,
          subproducts_code_4_price: null,
          subproducts_code_5: null,
          subproducts_code_5_q: null,
          subproducts_code_5_price: null,
          subproducts_code_1_description: null,
          subproducts_code_2_description: null,
          subproducts_code_3_description: null,
          subproducts_code_4_description: null,
          subproducts_code_5_description: null,
          zakupnaprice: '0.00',
          subproducts_code_1_zakupnaprice: '0.00',
          subproducts_code_2_zakupnaprice: '0.00',
          subproducts_code_3_zakupnaprice: '0.00',
          subproducts_code_4_zakupnaprice: '0.00',
          subproducts_code_5_zakupnaprice: '0.00',
          otstapka: '0.00',
        }
      } else {
        const suboffer_current = store.state.suboffers.find(
          (element) => element.id == store.state.current_suboffer
        )
        return suboffer_current
      }
    })

    watch(product_code_search, async (newSearch, oldSearch) => {
      if (newSearch.length > 0) {
        products.value = store.state.produkti_main.filter((element) => {
          return element.code.toLowerCase().includes(newSearch.toLowerCase())
        })
      } else {
        products.value = store.state.produkti_main
      }
    })

    watch(product, async (newProduct, oldProduct) => {
      let current_product = store.state.suboffers.find(
        (element) => element.id == store.state.current_suboffer
      )
      current_product.products_code = newProduct.code
      current_product.product_name = newProduct.name
      current_product.price = (
        parseFloat(newProduct.price) *
        ((100 - parseFloat(current_product.otstapka)) / 100)
      ).toFixed(2)
      calculatePrice()
    })

    const changeQuantity = () => {
      calculatePrice()
    }

    const changeDds = () => {
      calculatePrice()
    }

    const calculatePrice = () => {
      let current_suboffer = store.state.suboffers.find(
        (element) => element.id == store.state.current_suboffer
      )
      current_suboffer.allprice = (
        (parseFloat(current_suboffer.price) +
          parseFloat(current_suboffer.price) *
            (parseFloat(current_suboffer.dds) / 100)) *
        parseFloat(current_suboffer.quantity)
      ).toFixed(2)
    }

    const updateProduct = () => {
      const current_product = store.state.suboffers.find(
        (element) => element.id == store.state.current_suboffer
      )
      store.methods.checkL2(
        current_product.products_code,
        current_product.l,
        current_product.h
      )
    }

    return {
      store,
      suboffer,
      product_code_search,
      product_search_div,
      products,
      product,
      updateProduct,
      calculatePrice,
      changeQuantity,
      changeDds,
    }
  },
}
</script>
