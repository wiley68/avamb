<template>
  <div class="flex w-full items-center">
    <div class="relative bg-sky-700 p-2 rounded overflow-hidden flex-grow">
      <div class="relative">
        <h1 class="text-base text-white font-medium">
          Ф. аванс по оферта -
          {{ avansova.offer_idnomber }}
        </h1>
      </div>
    </div>
    <a
      class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
      aria-controls="success-modal"
      :href="
        '/print_afaktura.php?fid=' +
        avansova.id +
        '&guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
      "
      target="_blank"
    >
      <svg class="w-6 h-6 fill-current text-blue-600 shrink-0" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"
        />
      </svg>
    </a>
    <div class="flex items-center">
      <button
        class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
        aria-controls="success-modal"
        @click.stop="updateAvansova()"
      >
        <svg class="w-6 h-6 fill-current text-blue-600 shrink-0" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z"
          />
        </svg>
      </button>
    </div>
  </div>
  <div class="grow pt-4">
    <div
      class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 pb-3 mb-3"
    >
      <div class="flex flex-col mt-2 w-full">
        {{ formatDateTime(avansova.dateon) }}&nbsp;издадена
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          type="date"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Дата на дан. събитие"
          v-model="avansova.datedanacno"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="avansova.textavans"
        >
          <option value="1" :selected="avansova.textavans == '1'">
            Текст аванс (Да)
          </option>
          <option value="0" :selected="avansova.textavans == '0'">
            Текст аванс (Не)
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-2 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="shablon1"
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
          v-model="avansova.description"
        ></textarea>
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          type="text"
          class="w-full text-sm border rounded-sm border-gray-100 p-1"
          placeholder="Цена без ДДС"
          v-model="avansova.price_bezdds"
        />
      </div>
      <div class="flex flex-col mt-2 w-full">
        <select
          class="w-full text-sm border rounded-sm border-gray-100 p-1 bg-blue-300"
          v-model="avansova.type_dds"
        >
          <option value="0">Избери ДДС</option>
          <option v-for="dds in store.state.ddsfirm" :key="dds.value" :value="dds.value">
            {{ dds.name }}
          </option>
        </select>
      </div>
      <div class="flex flex-col mt-2 w-full">
        <input
          readonly
          type="text"
          class="w-full font-medium border rounded-sm border-gray-100 p-1 bg-gray-300 text-gray-900"
          placeholder="Крайна цена"
          v-model="avansova.price"
        />
      </div>
      <div
        class="flex items-center mt-5 w-full border border-gray-300 rounded-md shadow-md"
      >
        <div class="bg-gray-50 w-1/2 px-2 py-1 border-l border-gray-300 rounded-l-md">
          Остатък
        </div>
        <div
          class="bg-green-50 w-1/2 px-2 py-1 border-r border-gray-300 text-right rounded-r-md"
        >
          {{ avansova.ostatak_price }}
        </div>
      </div>
      <div
        class="flex items-center font-medium mt-2 w-full border border-gray-300 rounded-md shadow-md"
      >
        <div class="bg-gray-50 w-1/2 px-2 py-1 border-l border-gray-300 rounded-l-md">
          Обща цена
        </div>
        <div
          class="bg-green-50 w-1/2 px-2 py-1 border-r border-gray-300 text-right rounded-r-md"
        >
          {{ avansova.all_price }}
        </div>
      </div>
    </div>
  </div>
  <ModalBlank
    id="success-modal"
    :modalOpen="store.state.successUpdateAvansova"
    @close-modal="store.methods.changeSuccessUpdateAvansova(false)"
  >
    <div class="p-5 flex space-x-4">
      <div
        class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-green-100"
      >
        <svg class="w-4 h-4 shrink-0 fill-current text-green-500" viewBox="0 0 16 16">
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
            @click.stop="store.methods.changeSuccessUpdateAvansova(false)"
          >
            Затвори
          </button>
        </div>
      </div>
    </div>
  </ModalBlank>
</template>

<script>
import { inject, computed, onMounted, ref, watch } from "vue";
import ModalBlank from "./../components/ModalBlank.vue";
import moment from "moment";

export default {
  name: "Avansova",

  components: { ModalBlank },

  setup() {
    const store = inject("store");

    const shablon1 = ref("");

    const avansova = computed(() => {
      const av = store.state.avansovi_temp.find(
        (element) => element.idnomber == store.state.current_avansovi
      );
      return av;
    });

    watch(avansova.value, (av) => {
      const price_bezdds = parseFloat(av.price_bezdds);
      const dds = parseFloat(av.type_dds);
      const price = price_bezdds + price_bezdds * (dds / 100);
      av.price = price.toFixed(2);
    });

    onMounted(() => {
      store.methods.getShabloni();
    });

    const updateAvansova = () => {
      store.methods.saveAvansova(avansova.value);
      if (store.state.current_avansovi == 0) {
        store.methods.changePage("Landing");
      }
      setTimeout(
        () => {
          store.methods.changePage("Avansova");
        },
        "1000",
        store
      );
    };

    const changeDescription = () => {
      avansova.value.description = shablon1.value;
    };

    const formatDateTime = (value) => {
      if (value) {
        return moment(String(value)).format("DD.MM.YYYY");
      }
    };

    return {
      store,
      avansova,
      updateAvansova,
      shablon1,
      changeDescription,
      formatDateTime,
    };
  },
};
</script>
