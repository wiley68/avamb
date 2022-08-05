<template>
  <div class="flex relative h-14 bg-gray-50 border-b border-gray-200 mb-1">
    <div class="flex justify-between items-center w-full mr-4">
      <button
        class="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
        @click.stop="store.methods.toggleDogovorSidebar()"
        aria-controls="about-sidebar"
        :aria-expanded="store.state.dogovorSidebarOpen"
      >
        <span class="sr-only">Договор</span>
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
        Дог. по оферта - {{ dogovor.offer_idnomber }} Етап
        {{ store.state.dogovorEtap }}
      </div>
      <div class="flex items-center">
        <button
          class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
          aria-controls="success-modal"
          @click.stop="updateDogovor()"
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
  </div>
  <div v-if="store.state.dogovorEtap == 1" class="grow p-4">
    <div
      class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 pb-3 mb-3"
    >
      <div class="flex flex-col mt-2 w-full">
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Време за доставка"
          v-model="dogovor.vreme_dostavka"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Адрес на доставка"
          v-model="dogovor.adress_dostavka"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Коментар"
          v-model="dogovor.comment"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          type="date"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Дата на аванс 1"
          v-model="dogovor.date_avans1"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Сума на аванс 1"
          v-model="dogovor.price_avans1"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="dogovor.plashtane_avans1"
        >
          <option value="0">Избери начин на плащане</option>
          <option value="check" :selected="dogovor.plashtane_avans1 == 'check'">
            Чек
          </option>
          <option value="broi" :selected="dogovor.plashtane_avans1 == 'broi'">
            В брой
          </option>
          <option value="banka" :selected="dogovor.plashtane_avans1 == 'banka'">
            Банка
          </option>
        </select>
      </div>
      <div
        class="flex items-center mt-2 w-full border border-gray-300 rounded-md shadow-md"
      >
        <div
          class="bg-gray-50 w-1/2 px-2 py-1 border-l border-gray-300 rounded-l-md"
        >
          Цена без ддс
        </div>
        <div
          class="bg-green-50 w-1/2 px-2 py-1 border-r border-gray-300 text-right rounded-r-md"
        >
          {{ dogovor.price_bezdds }}
        </div>
      </div>
      <div
        v-for="dds in dogovor.dds"
        :key="dds.name"
        class="flex items-center mt-2 w-full border border-gray-300 rounded-md shadow-md"
      >
        <div
          class="bg-gray-50 w-1/2 px-2 py-1 border-l border-gray-300 rounded-l-md"
        >
          {{ dds.name }}
        </div>
        <div
          class="bg-green-50 w-1/2 px-2 py-1 border-r border-gray-300 text-right rounded-r-md"
        >
          {{ dds.price.toFixed(2) }}
        </div>
      </div>
      <div
        class="flex items-center font-medium mt-2 w-full border border-gray-300 rounded-md shadow-md"
      >
        <div
          class="bg-gray-50 w-1/2 px-2 py-1 border-l border-gray-300 rounded-l-md"
        >
          Крайна цена
        </div>
        <div
          class="bg-green-50 w-1/2 px-2 py-1 border-r border-gray-300 text-right rounded-r-md"
        >
          {{ dogovor.price }}
        </div>
      </div>
    </div>
  </div>
  <div v-if="store.state.dogovorEtap == 2" class="grow p-4">
    <div
      class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 pb-6 mb-3"
    >
      <div class="flex flex-col mt-5 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="shablon1"
          @change.stop="changeDescription2()"
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
      <div class="flex flex-col mt-1 w-full">
        <textarea
          rows="8"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="dogovor.description2"
        />
      </div>
      <div class="flex flex-col mt-5 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="shablon2"
          @change.stop="changeDescription()"
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
      <div class="flex flex-col mt-1 w-full">
        <textarea
          rows="8"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          v-model="dogovor.description"
        />
      </div>
    </div>
  </div>
  <ModalBlank
    id="success-modal"
    :modalOpen="store.state.successUpdateDogovor"
    @close-modal="store.methods.changeSuccessUpdateDogovor(false)"
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
            @click.stop="store.methods.changeSuccessUpdateDogovor(false)"
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
  name: 'DogovorBody',

  components: { ModalBlank },

  setup() {
    const store = inject('store')

    const shablon1 = ref('')
    const shablon2 = ref('')

    const dogovor = computed(() => {
      return store.state.dogovori_temp.find(
        (element) => element.idnomber == store.state.current_dogovori
      )
    })

    const updateDogovor = () => {
      store.methods.saveDogovor(dogovor.value)
      if (store.state.current_dogovori == 0) {
        store.methods.changePage('Landing')
      }
      setTimeout(
        () => {
          store.methods.changePage('Dogovor')
        },
        '1000',
        store
      )
    }

    const changeDescription2 = () => {
      dogovor.value.description2 = shablon1.value
    }

    const changeDescription = () => {
      dogovor.value.description = shablon2.value
    }

    return {
      store,
      dogovor,
      updateDogovor,
      changeDescription2,
      shablon1,
      shablon2,
      changeDescription,
    }
  },
}
</script>
