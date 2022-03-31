<template>
  <div class="relative h-14 bg-gray-50 border-b border-gray-200 mb-1">
    <button
      class="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
      @click.stop="store.methods.changePage('Dashboard')"
    >
      <span class="sr-only">Екземпляр за посещение на работник на обект</span>
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
  </div>
  <div class="flex flex-col p-2">
    <div
      class="flex flex-row justify-between items-center p-1 rounded bg-sky-200 border border-sky-300 mb-3"
    >
      <div class="text-sm font-medium text-gray-800 mr-1">
        {{ offer().client_name }}
      </div>
      <div class="text-sm font-medium text-orange-700">
        {{ offer().idnomber }}
      </div>
    </div>
    <div
      class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
    >
      <div class="w-full flex flex-row justify-between items-center pb-2">
        <div class="text-sm text-gray-800 mr-1">№-2-ПО</div>
        <div
          class="flex flex-row justify-center items-center text-sm text-gray-800"
        >
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white mr-2"
              :class="
                store.state.doc_poseshtenia.length > 0
                  ? 'bg-green-600'
                  : 'bg-white'
              "
            >
              {{ store.state.doc_poseshtenia.length }}
            </div>
          </div>
        </div>
      </div>
      <div class="text-sm text-gray-800 mr-1">
        Екземпляр за посещение на работник на обект
      </div>
    </div>
    <div
      v-for="doc_poseshtenie in store.state.doc_poseshtenia"
      :key="doc_poseshtenie.id"
      class="flex flex-col p-2 rounded bg-gray-50 border border-gray-200 shadow mb-2"
    >
      <div class="flex flex-row justify-between items-center">
        <div class="flex-grow">
          <a
            target="_blank"
            :href="
              '/dist/img/files/visits/' +
              store.state.current_poseshtenie_id +
              '/' +
              doc_poseshtenie.file
            "
            ><svg class="w-8 h-8 text-blue-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M5,3C3.89,3 3,3.89 3,5V19C3,20.11 3.89,21 5,21H19C20.11,21 21,20.11 21,19V5C21,3.89 20.11,3 19,3H5M5,5H19V19H5V5M7,7V9H17V7H7M7,11V13H17V11H7M7,15V17H14V15H7Z"
              /></svg
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from 'vue'

export default {
  name: 'DocposeshteniaBody',

  setup() {
    const store = inject('store')

    const offer = () => {
      return store.state.offers.find(
        (element) => element.id == store.state.current_dashboard_offer
      )
    }

    return {
      store,
      offer,
    }
  },
}
</script>
