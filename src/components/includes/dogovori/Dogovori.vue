<template>
  <div class="sticky top-0 z-10 bg-white">
    <div class="flex items-center bg-white border-b border-gray-200 px-5 h-16">
      <div class="w-full flex items-center justify-end">
        <div class="font-medium">Договори</div>
      </div>
    </div>
  </div>
  <div class="px-5 py-4">
    <ul class="mb-6">
      <li v-for="dogovor in getDogovori()" :key="dogovor.id" class="-mx-2 mb-1">
        <button
          class="flex flex-col w-full p-1 text-left bg-gray-100 rounded border border-gray-200"
          @click.stop="editDogovor(dogovor.idnomber)"
        >
          <div class="flex w-full">
            <div class="flex-none">
              <span class="text-sm font-medium text-red-700 mr-1">{{
                dogovor.idnomber
              }}</span
              ><span class="text-gray-400">|</span>
            </div>
            <div class="ml-1 flex-grow text-left">
              <span class="text-sm font-medium text-gray-500"
                >Оферта - {{ dogovor.offer_idnomber }}</span
              >
            </div>
            <div class="ml-1 text-right">
              <span class="text-sm font-medium text-red-700">{{
                dogovor.price
              }}</span>
            </div>
          </div>
          <div class="flex w-full">
            <div class="flex-none">
              <span class="text-sm font-medium text-gray-500 mr-1">{{
                dogovor.dateon
              }}</span
              ><span class="text-gray-400">|</span>
            </div>
            <div class="flex-grow truncate ml-1">
              <span class="text-sm font-medium text-gray-500">{{
                dogovor.client_name
              }}</span>
            </div>
          </div>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'Dogovori',

  setup() {
    const store = inject('store')

    const typeUser = () => {
      if (store.state.user.admin == 'Yes') {
        return 'Суперадминистратор'
      } else {
        if (store.state.user.firmadmin == 'Yes') {
          return 'Администратор'
        } else {
          switch (store.state.user.role) {
            case 'scet':
              return 'АС-2'
              break
            case 'sluz':
              return 'АС-3'
              break
            case 'targ':
              return 'АС-1'
              break
            default:
              return ''
              break
          }
        }
      }
    }

    const getDogovori = () => {
      return store.state.dogovori_temp
    }

    const editDogovor = (dogovor_idnomber) => {
      store.state.current_dogovori = dogovor_idnomber
      setTimeout(() => {
        store.methods.changePage('Dogovor')
      }, 500)
    }

    return {
      store,
      typeUser,
      getDogovori,
      editDogovor,
    }
  },
}
</script>
