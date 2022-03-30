<template>
  <div
    class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
    :class="
      store.state.storeminusiSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
    "
    v-if="storeminus"
  >
    <div class="sticky top-16">
      <div
        class="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 sm:px-6 md:px-5 h-16"
      >
        <div class="flex">
          <button
            class="md:hidden text-gray-400 hover:text-gray-500 mr-4"
            @click.stop="store.methods.toggleStoreminusiSidebar()"
            aria-controls="inbox-sidebar"
            :aria-expanded="store.state.storeminusiSidebarOpen"
          >
            <span class="sr-only">Затвори</span>
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
              />
            </svg>
          </button>
          <button
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
            @click.stop="updateStoreminus(storeminus.id)"
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
          <ModalBlank
            id="success-modal"
            :modalOpen="store.state.successUpdateStoreminus"
            @close-modal="store.methods.changeSuccessUpdateStoreminus(false)"
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
                  <div class="text-lg font-semibold text-gray-800">
                    Съобщение
                  </div>
                </div>
                <div class="text-sm mb-10">
                  <div class="space-y-2">
                    <p>Промените са записани успешно</p>
                  </div>
                </div>
                <div class="flex flex-wrap justify-end space-x-2">
                  <button
                    class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                    @click.stop="
                      store.methods.changeSuccessUpdateStoreminus(false)
                    "
                  >
                    Затвори
                  </button>
                </div>
              </div>
            </div>
          </ModalBlank>
          <button
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
            @click.stop="openNewProdukt()"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 mr-1 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 13.09V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.46 21 12.9 21 13.33 20.94C13.12 20.33 13 19.68 13 19L13 18.95C12.68 19 12.35 19 12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.65 16 13.27 15.96 13.88 15.89C14.93 14.16 16.83 13 19 13C19.34 13 19.67 13.04 20 13.09M18 12.45C16.7 13.4 14.42 14 12 14S7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5 18 6.5 18 7 15.87 9 12 9M20 22V20H16V18H20V16L23 19L20 22Z"
              />
            </svg>
          </button>
          <button
            v-if="storeminus.status == 0"
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
            @click.stop="statusStoreminus(storeminus.id, 'STATUS')"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 mr-1 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 17H23L19 21L15 17H18V3H20V17M8 5C4.14 5 1 8.13 1 12C1 15.87 4.13 19 8 19C11.86 19 15 15.87 15 12C15 8.13 11.87 5 8 5M8 7.15C10.67 7.15 12.85 9.32 12.85 12C12.85 14.68 10.68 16.85 8 16.85C5.32 16.85 3.15 14.68 3.15 12C3.15 9.32 5.32 7.15 8 7.15M7 9V12.69L10.19 14.53L10.94 13.23L8.5 11.82V9"
              />
            </svg>
          </button>
          <button
            v-if="storeminus.status == 1"
            class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal"
            @click.stop="statusStoreminus(storeminus.id, 'STATUSBACK')"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 mr-1 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18 7H15L19 3L23 7H20V21H18V7M8 5C4.14 5 1 8.13 1 12C1 15.87 4.13 19 8 19C11.86 19 15 15.87 15 12C15 8.13 11.87 5 8 5M8 7.15C10.67 7.15 12.85 9.32 12.85 12C12.85 14.68 10.68 16.85 8 16.85C5.32 16.85 3.15 14.68 3.15 12C3.15 9.32 5.32 7.15 8 7.15M7 9V12.69L10.19 14.53L10.94 13.23L8.5 11.82V9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="grow p-4">
      <div
        class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 divide-y divide-gray-200 mb-3"
      >
        <Storeminus />
      </div>
      <div
        v-if="add_sub_storeminus"
        class="flex flex-col items-start justify-between bg-red-50 shadow-lg rounded-t-sm border border-red-200 px-6 divide-y divide-gray-200 mb-3"
      >
        <div class="flex flex-col py-3 w-full">
          <div class="flex flex-row justify-between items-center mb-1">
            <select
              class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-red-300"
              v-model="category"
              v-on:change.stop="changeCategory()"
            >
              <option value="" selected>Избери категория</option>
              <option
                v-for="category in getProduktiCategories()"
                :key="category"
                :value="category"
              >
                {{ category }}
              </option>
            </select>
          </div>
          <div class="flex flex-row justify-between items-center mb-1">
            <select
              class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-red-300"
              v-model="code"
            >
              <option value="" selected>Избери продукт</option>
              <option
                v-for="produkt in store.state.produkti_temp"
                :key="produkt.id"
                :value="produkt.code"
              >
                {{ produkt.name }}&nbsp;-&nbsp;{{ parseInt(produkt.quantity) }}
              </option>
            </select>
          </div>
          <div class="flex flex-row justify-between items-center mb-3">
            <span class="p-1 text-sm w-3/12">Бройка</span>
            <input
              type="number"
              v-model="quantity"
              class="w-7/12 text-sm border rounded-sm border-gray-100 p-1 bg-red-300"
            />
          </div>
          <button
            class="w-24 flex flex-row justify-center self-end p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm"
            aria-controls="success-modal"
            @click.stop="addProdukt()"
          >
            <svg
              class="w-6 h-6 fill-current text-blue-600 mr-1 shrink-0"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M20 13.09V7C20 4.79 16.42 3 12 3S4 4.79 4 7V17C4 19.21 7.59 21 12 21C12.46 21 12.9 21 13.33 20.94C13.12 20.33 13 19.68 13 19L13 18.95C12.68 19 12.35 19 12 19C8.13 19 6 17.5 6 17V14.77C7.61 15.55 9.72 16 12 16C12.65 16 13.27 15.96 13.88 15.89C14.93 14.16 16.83 13 19 13C19.34 13 19.67 13.04 20 13.09M18 12.45C16.7 13.4 14.42 14 12 14S7.3 13.4 6 12.45V9.64C7.47 10.47 9.61 11 12 11S16.53 10.47 18 9.64V12.45M12 9C8.13 9 6 7.5 6 7S8.13 5 12 5 18 6.5 18 7 15.87 9 12 9M20 22V20H16V18H20V16L23 19L20 22Z"
              /></svg
            ><span>Изпиши</span>
          </button>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center bg-orange-50 shadow-lg rounded-sm border border-orange-200 px-2 py-2 mb-3"
        v-for="sub_storeminus in sub_storeminusi"
        :key="sub_storeminus.id"
      >
        <div class="flex flex-col w-full items-start justify-start text-sm">
          <div class="flex flex-row justify-between w-full">
            <div class="flex-grow text-left">
              <span class="font-medium">{{ sub_storeminus.product_name }}</span>
            </div>
            <button
              class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
              aria-controls="danger-modal"
              @click.stop="deleteSubstoreminusCheck(sub_storeminus.id)"
            >
              <svg
                class="w-6 h-6 fill-current text-blue-600 shrink-0"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M17 4V6H3V4H6.5L7.5 3H12.5L13.5 4H17M4 19V7H16V19C16 20.1 15.1 21 14 21H6C4.9 21 4 20.1 4 19M19 15H21V17H19V15M19 7H21V13H19V7Z"
                />
              </svg>
            </button>
            <ModalBlank
              id="danger-modal"
              :modalOpen="store.state.deleteSubstoreminusModal"
              @close-modal="store.methods.changeDeleteSubstoreminusModal(false)"
            >
              <div class="p-5 flex space-x-4">
                <div
                  class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-red-100"
                >
                  <svg
                    class="w-4 h-4 shrink-0 fill-current text-red-600"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"
                    />
                  </svg>
                </div>
                <div>
                  <div class="mb-2">
                    <div class="text-lg font-semibold text-gray-800">
                      Внимание!
                    </div>
                  </div>
                  <!-- Modal content -->
                  <div class="text-sm mb-10">
                    <div class="space-y-2">
                      <p>Желаете ли да изтриете продукта?</p>
                    </div>
                  </div>
                  <div class="flex flex-wrap justify-end space-x-2">
                    <button
                      class="btn-sm border-gray-200 hover:border-gray-300 text-gray-600"
                      @click.stop="
                        store.methods.changeDeleteSubstoreminusModal(false)
                      "
                    >
                      Откажи
                    </button>
                    <button
                      class="btn-sm bg-red-500 hover:bg-red-600 text-white"
                      @click.stop="deleteSubstoreminus()"
                    >
                      Изтрий
                    </button>
                  </div>
                </div>
              </div>
            </ModalBlank>
          </div>
          <div class="text-left">
            {{ sub_storeminus.quantity }}&nbsp;x&nbsp;{{
              sub_storeminus.price
            }}&nbsp;-&nbsp;{{
              (
                parseFloat(sub_storeminus.quantity) *
                parseFloat(sub_storeminus.price)
              ).toFixed(2)
            }}
          </div>
          <div class="text-left">
            Наличност&nbsp;-&nbsp;{{ sub_storeminus.store_quantity }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed, ref } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'
import Storeminus from './Storeminus.vue'
import moment from 'moment'

export default {
  name: 'StoreminusBody',

  components: { ModalBlank, Storeminus },

  setup() {
    const store = inject('store')

    const deleted_id = ref(0)

    const add_sub_storeminus = ref(false)

    const quantity = ref(0)

    const code = ref('')

    const category = ref('')

    const storeminus = computed(() => {
      return store.state.storeminusi_temp.find(
        (element) => element.id == store.state.current_storeminus_id
      )
    })

    const updateStoreminus = (storeminus_id) => {
      store.methods.saveStoreminus(storeminus_id, 'SAVE')
    }

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format('DD.MM.YYYY HH:mm')
      }
    }

    const sub_storeminusi = computed(() => {
      return store.state.sub_storeminusi
    })

    const deleteSubstoreminusCheck = (sub_storeminus_id) => {
      deleted_id.value = sub_storeminus_id
      store.methods.changeDeleteSubstoreminusModal(true)
    }

    const deleteSubstoreminus = () => {
      store.methods.deleteSubstoreminus(deleted_id.value)
    }

    const addProdukt = () => {
      if (category.value == 0 || code.value == '' || quantity.value == 0) {
        alert('Моля иаберете категория, продукт и количество!')
      } else {
        add_sub_storeminus.value = !add_sub_storeminus.value
        const price = store.state.produkti.find(
          (element) => element.code == code.value
        ).price
        store.methods.createSubstoreminus(
          storeminus.value.id,
          code.value,
          quantity.value,
          price
        )
      }
    }

    const statusStoreminus = (storeminus_id, status) => {
      if (status == 'STATUSBACK') {
        store.state.storeminusi_temp.find(
          (element) => element.id == storeminus_id
        ).status = 0
        store.state.storeminusi.find(
          (element) => element.id == storeminus_id
        ).status = 0
      }
      if (status == 'STATUS') {
        store.state.storeminusi_temp.find(
          (element) => element.id == storeminus_id
        ).status = 1
        store.state.storeminusi.find(
          (element) => element.id == storeminus_id
        ).status = 1
      }
      store.methods.saveStoreminus(storeminus_id, status)
    }

    const getUniqueValues = (array, key) => {
      var result = new Set()
      array.forEach(function (item) {
        if (item.hasOwnProperty(key)) {
          result.add(item[key])
        }
      })
      return result
    }

    const getProduktiCategories = () => {
      var categories = []
      categories = getUniqueValues(store.state.produkti, 'category_name')
      return categories
    }

    const changeCategory = () => {
      code.value = ''
      store.state.produkti_temp = store.state.produkti.filter(
        (element) => element.category_name == category.value
      )
    }

    const openNewProdukt = () => {
      category.value = ''
      code.value = ''
      quantity.value = 0
      add_sub_storeminus.value = !add_sub_storeminus.value
    }

    return {
      store,
      storeminus,
      updateStoreminus,
      formatDateTime,
      sub_storeminusi,
      deleteSubstoreminusCheck,
      deleteSubstoreminus,
      add_sub_storeminus,
      quantity,
      code,
      addProdukt,
      statusStoreminus,
      getProduktiCategories,
      category,
      changeCategory,
      openNewProdukt,
    }
  },
}
</script>
