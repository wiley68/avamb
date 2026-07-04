<template>
  <div class="shrink-0 bg-white border-b border-gray-200">
    <div class="flex items-center px-5 h-16">
      <div class="w-full flex items-center justify-between">
        <button
          class="p-1.5 shrink-0 rounded bg-white border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
          title="Създай контрагент"
          @click.stop="createContragent()"
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
        <div class="font-medium">Контрагенти</div>
      </div>
    </div>
  </div>
  <div class="shrink-0 bg-white border-b border-gray-200 px-5 py-4">
    <div class="relative">
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
  <div class="flex-1 overflow-x-hidden overflow-y-auto no-scrollbar px-5 py-4">
    <ul class="mb-6">
      <li
        v-for="contragent in store.state.contragents_temp"
        :key="contragent.id"
        class="-mx-2 mb-1"
      >
        <button
          class="w-full p-2 rounded bg-sky-200 border border-sky-300"
          @click.stop="editContragent(contragent.id)"
        >
          <div class="flex items-start justify-between">
            <div class="flex-grow text-left">
              <span class="text-sm font-medium text-gray-800 mr-1">{{
                getDisplayName(contragent)
              }}</span>
            </div>
            <div class="ml-1">
              <span class="text-sm font-medium text-orange-700">{{
                contragent.id
              }}</span>
            </div>
          </div>
          <div class="flex items-start justify-between">
            <div class="flex-grow text-left">
              <span class="text-sm font-medium text-gray-500">{{
                getCategoryName(contragent.category_id)
              }}</span>
            </div>
            <div class="ml-1">
              <span class="text-sm font-medium text-gray-500">{{
                contragent.city
              }}</span>
            </div>
          </div>
          <div class="flex items-start justify-between">
            <div class="flex-grow text-left">
              <span class="text-sm font-medium text-gray-500">{{
                contragent.contragent_phone_m_o
              }}</span>
            </div>
            <div class="ml-1 overflow-clip">
              <span class="text-sm font-medium text-gray-500">{{
                contragent.contragent_mail
              }}</span>
            </div>
          </div>
        </button>
      </li>
      <li v-if="store.state.contragents_temp.length == 0" class="-mx-2 mb-1">
        <div
          class="w-full p-4 text-center text-sm text-gray-500 bg-gray-100 rounded border border-gray-200"
        >
          Няма намерени контрагенти
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'ContragentsList',

  setup() {
    const store = inject('store')

    const search = ref('')

    const getDisplayName = (contragent) => {
      const lastName = contragent.last_name || ''
      const contragentName = contragent.contragent_name || ''
      return `${lastName} - ${contragentName}`
    }

    const getCategoryName = (category_id) => {
      if (!category_id) return ''
      const category = store.state.categories.find(
        (element) => element.id == category_id
      )
      return category ? category.name : ''
    }

    const searchFor = () => {
      if (search.value != '') {
        const term = search.value.toLowerCase()
        store.state.contragents_temp = store.state.contragents.filter(
          (element) => {
            const lastName = String(element.last_name || '').toLowerCase()
            const contragentName = String(
              element.contragent_name || ''
            ).toLowerCase()
            const displayName = `${lastName} - ${contragentName}`

            return (
              String(element.id).toLowerCase().includes(term) ||
              lastName.includes(term) ||
              contragentName.includes(term) ||
              displayName.includes(term) ||
              String(element.address || '').toLowerCase().includes(term) ||
              String(element.city || '').toLowerCase().includes(term) ||
              getCategoryName(element.category_id)
                .toLowerCase()
                .includes(term) ||
              String(element.contragent_phone_m_o || '')
                .toLowerCase()
                .includes(term) ||
              String(element.contragent_mail || '').toLowerCase().includes(term)
            )
          }
        )
      } else {
        store.state.contragents_temp = store.state.contragents
      }
    }

    const createContragent = () => {
      const existing = store.state.contragents_temp.find(
        (element) => element.id == 0
      )
      if (!existing) {
        const newContragent = {
          id: 0,
          category_id: 0,
          last_name: '',
          contragent_name: '',
          address: '',
          city: '',
          contragent_phone_m_o: '',
          contragent_mail: '',
        }
        store.state.contragents.unshift(newContragent)
        store.state.contragents_temp.unshift(newContragent)
      }
      store.state.current_contragent_id = 0
      setTimeout(() => {
        store.methods.changePage('Contragent')
      }, 500)
    }

    const editContragent = (contragent_id) => {
      store.state.current_contragent_id = contragent_id
      setTimeout(() => {
        store.methods.changePage('Contragent')
      }, 500)
    }

    return {
      store,
      search,
      searchFor,
      getDisplayName,
      getCategoryName,
      createContragent,
      editContragent,
    }
  },
}
</script>
