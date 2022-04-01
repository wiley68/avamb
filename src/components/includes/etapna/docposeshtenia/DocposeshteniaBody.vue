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
      v-for="doc_poseshtenie in store.state.doc_poseshtenia_view"
      :key="doc_poseshtenie.id"
      class="flex flex-col p-2 rounded bg-gray-50 border border-gray-200 shadow mb-2"
    >
      <div class="flex flex-row justify-center items-center">
        <a
          target="_blank"
          :href="
            '/dist/img/files/visits/' +
            doc_poseshtenie.poseshtenie_id +
            '/' +
            doc_poseshtenie.file
          "
          ><img
            :src="
              '/dist/img/files/visits/' +
              doc_poseshtenie.poseshtenie_id +
              '/' +
              doc_poseshtenie.file
            "
          />
        </a>
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
