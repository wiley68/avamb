<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-3xl mx-auto">
      <div class="sm:flex sm:justify-between sm:items-center mb-8">
        <div class="mb-4 sm:mb-0">
          <h1 class="text-2xl md:text-3xl text-gray-800 font-bold">
            Контрагенти
          </h1>
        </div>
        <div class="relative w-full sm:w-72">
          <label for="contragents-search" class="sr-only">Търси ...</label>
          <input
            id="contragents-search"
            v-model="search"
            class="w-full border border-gray-200 rounded-sm focus:ring-transparent placeholder-gray-400 appearance-none py-2 pl-9 pr-4 text-sm"
            type="search"
            placeholder="Търси ..."
            @input="searchFor()"
          />
          <div
            class="absolute inset-0 right-auto flex items-center pointer-events-none"
          >
            <svg
              class="w-4 h-4 shrink-0 fill-current text-gray-400 ml-3 mr-2"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
              />
              <path
                d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
              />
            </svg>
          </div>
        </div>
      </div>

      <ul class="mb-6">
        <li
          v-for="contragent in store.state.contragents_temp"
          :key="contragent.id"
          class="-mx-2 mb-2"
        >
          <div
            class="flex w-full p-2 text-left bg-gray-100 border border-gray-200"
          >
            <div class="grow">
              <div
                class="flex justify-between text-sm text-gray-500 font-medium truncate mb-2"
              >
                <div>
                  <span class="text-red-600">№&nbsp;{{ contragent.id }}</span>
                </div>
                <div class="font-medium text-gray-800">
                  {{ contragent.contragent_name }}
                </div>
              </div>
              <div
                class="flex justify-between text-sm text-gray-500 font-medium truncate"
              >
                <div>
                  <span>Тел.:&nbsp;{{ contragent.contragent_phone_m_o }}</span>
                </div>
                <div class="overflow-clip">
                  <span>{{ contragent.contragent_mail }}</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          v-if="store.state.contragents_temp.length == 0"
          class="-mx-2 mb-2"
        >
          <div
            class="flex w-full p-4 justify-center text-sm text-gray-500 bg-gray-100 border border-gray-200"
          >
            Няма намерени контрагенти
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'Contragents',

  setup() {
    const store = inject('store')

    const search = ref('')

    const searchFor = () => {
      if (search.value != '') {
        const term = search.value.toLowerCase()
        store.state.contragents_temp = store.state.contragents.filter(
          (element) => {
            return (
              String(element.id).toLowerCase().includes(term) ||
              String(element.contragent_name).toLowerCase().includes(term) ||
              String(element.contragent_phone_m_o)
                .toLowerCase()
                .includes(term) ||
              String(element.contragent_mail).toLowerCase().includes(term)
            )
          }
        )
      } else {
        store.state.contragents_temp = store.state.contragents
      }
    }

    return { store, search, searchFor }
  },
}
</script>
