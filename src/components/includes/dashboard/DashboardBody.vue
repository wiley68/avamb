<template>
  <div v-if="store.state.current_dashboard_offer != 0">
    <div class="relative h-14 bg-gray-50 border-b border-gray-200 mb-1">
      <button
        class="md:hidden absolute top-4 left-4 sm:left-6 text-white opacity-80 hover:opacity-100"
        @click.stop="store.methods.toggleDashboardSidebar()"
        aria-controls="about-sidebar"
        :aria-expanded="store.state.dashboardSidebarOpen"
      >
        <span class="sr-only">Етапна визуализация</span>
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
        v-if="store.state.user.etapna2 == '1'"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-2-ПО</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 border border-green-800 text-white mr-2"
              :class="
                offer().poseshtenie_broi > 0 ? 'bg-green-600' : 'bg-white'
              "
            >
              {{ offer().poseshtenie_broi }}
            </div>
            <div
              class="flex flex-row justify-center items-center w-12 h-7 border border-blue-800 text-white"
              :class="offer().poseshtenie_broi > 0 ? 'bg-blue-600' : 'bg-white'"
            >
              {{ offer().poseshtenie_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          Екземпляр за посещение на работник на обект
        </div>
      </div>
      <div
        v-if="store.state.user.etapna3 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-3-ВР</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center text-sm text-gray-800"
            >
              <div
                class="flex flex-row justify-center items-center w-12 h-7 border border-blue-800 text-white"
                :class="offer().razmeri_broi > 0 ? 'bg-blue-600' : 'bg-white'"
              >
                {{ offer().razmeri_broi }}
              </div>
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          Екземпляр за вземане на размери
        </div>
      </div>
      <div
        v-if="store.state.user.etapna4 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-4-И</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white mr-2"
            >
              1
            </div>
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          Информация получена от клиент
        </div>
      </div>
      <div
        v-if="store.state.user.etapna5 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-5-{{ store.state.user.zdtxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.zdtxtlong }}
        </div>
      </div>
      <div
        v-if="store.state.user.etapna6 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-6-{{ store.state.user.odtxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.odtxtlong }}
        </div>
      </div>
      <div
        v-if="
          store.state.user.etapna7 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-7-ОФ</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white mr-2"
            >
              1
            </div>
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Оферти</div>
      </div>
      <div
        v-if="store.state.user.etapna8 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-8-ДК</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Договор с клиент</div>
      </div>
      <div
        v-if="store.state.user.etapna9 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-9-{{ store.state.user.dkptxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.dkptxtlong }}
        </div>
      </div>
      <div
        v-if="store.state.user.etapna10 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-10-{{ store.state.user.gtxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.gtxtlong }}
        </div>
      </div>
      <div
        v-if="store.state.user.etapna11 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-11-{{ store.state.user.ofptxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.ofptxtlong }}
        </div>
      </div>
      <div
        v-if="store.state.user.etapna12 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-12-ПР</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Проформа фактура</div>
      </div>
      <div
        v-if="store.state.user.etapna13 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-13-ФА</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Ф. Аванс</div>
      </div>
      <div
        v-if="store.state.user.etapna14 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-14-{{ store.state.user.rptxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.rptxtlong }}
        </div>
      </div>
      <div
        v-if="store.state.user.etapna15 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-15-ПД</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white mr-2"
            >
              1
            </div>
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Поръчка към доставчик</div>
      </div>
      <div
        v-if="store.state.user.etapna16 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-16-ППП</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white mr-2"
            >
              1
            </div>
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          Приемо Предвателен Протокол
        </div>
      </div>
      <div
        v-if="store.state.user.etapna17 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-17-{{ store.state.user.ppptxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.ppptxtlong }}
        </div>
      </div>
      <div
        v-if="store.state.user.etapna18 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-18-{{ store.state.user.ctxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.ctxtlong }}
        </div>
      </div>
      <div
        v-if="
          store.state.user.etapna19 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-19-ИФ</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Изплатена фактура</div>
      </div>
      <div
        v-if="store.state.user.etapna20 == '1'"
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-20-ФП</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-green-600 border border-green-800 text-white mr-2"
            >
              1
            </div>
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              1
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Фактури за покупки</div>
      </div>
      <div
        class="flex flex-col items-center p-2 rounded bg-orange-50 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-21-№</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-12 h-7 bg-orange-600 border border-orange-800 text-white"
            >
              {{ offer().idnomber }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          Номер на оферта активирала поръчката
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'DashboardBody',

  setup() {
    const store = inject('store')

    const offer = () => {
      return store.state.offers.find(
        (element) => element.id == store.state.current_dashboard_offer
      )
    }

    return { store, offer }
  },
}
</script>
