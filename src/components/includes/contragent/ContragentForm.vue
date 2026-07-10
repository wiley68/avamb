<template>
  <div v-if="contragent" class="flex w-full items-center">
    <button
      class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm mr-2"
      :title="
        store.state.contragentReturnToOffer
          ? 'Назад към оферта'
          : 'Назад към контрагенти'
      "
      @click.stop="goBack()"
    >
      <svg
        class="w-6 h-6 fill-current text-blue-600 shrink-0"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
      </svg>
    </button>
    <div class="relative bg-sky-700 p-2 rounded overflow-hidden flex-grow">
      <div class="relative">
        <h1 class="text-base text-white font-medium">
          Контрагент
          {{
            store.state.current_contragent_id == 0
              ? ' - нов'
              : ' - ' + store.state.current_contragent_id
          }}
        </h1>
      </div>
    </div>
    <div class="flex items-center">
      <button
        class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
        aria-controls="success-modal"
        @click.stop="updateContragent()"
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
  <div v-if="contragent" class="grow pt-4">
    <div
      class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 pb-3 mb-3"
    >
      <div class="flex flex-col mt-2 w-full">
        <label class="text-sm font-medium text-gray-600 mb-0.5">Категория</label>
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="contragent.category_id"
        >
          <option :value="0">Избери категория</option>
          <option
            v-for="category in store.state.categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-2 w-full">
        <label class="text-sm font-medium text-gray-600 mb-0.5">Фамилия</label>
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="contragent.last_name"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <label class="text-sm font-medium text-gray-600 mb-0.5">Фирма</label>
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="contragent.contragent_name"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <label class="text-sm font-medium text-gray-600 mb-0.5">Адрес</label>
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="contragent.address"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <label class="text-sm font-medium text-gray-600 mb-0.5">Град</label>
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="contragent.city"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <label class="text-sm font-medium text-gray-600 mb-0.5">Телефон</label>
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="contragent.contragent_phone_m_o"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <label class="text-sm font-medium text-gray-600 mb-0.5">Имейл</label>
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="contragent.contragent_mail"
        />
      </div>
    </div>
  </div>
  <ModalBlank
    id="success-modal"
    :modalOpen="store.state.successUpdateContragent"
    @close-modal="store.methods.changeSuccessUpdateContragent(false)"
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
            @click.stop="store.methods.changeSuccessUpdateContragent(false)"
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  </ModalBlank>
</template>

<script>
import { inject, computed } from 'vue'
import ModalBlank from '../components/ModalBlank.vue'

export default {
  name: 'ContragentForm',

  components: { ModalBlank },

  setup() {
    const store = inject('store')

    const contragent = computed(() => {
      return store.state.contragents_temp.find(
        (element) => element.id == store.state.current_contragent_id
      )
    })

    const updateContragent = () => {
      store.methods.saveContragent(contragent.value)
    }

    const goBack = () => {
      if (store.state.contragentReturnToOffer) {
        store.methods.cancelContragentFromOffer()
      } else {
        store.methods.changePage('Contragents')
      }
    }

    return { store, contragent, updateContragent, goBack }
  },
}
</script>
