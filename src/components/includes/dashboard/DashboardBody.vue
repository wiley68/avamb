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
        class="flex flex-col items-center p-2 rounded font-medium text-white bg-slate-500 border border-orange-200 shadow mb-2"
        v-if="store.state.user.etapna2 == '1'"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm mr-1">№-2-ПО</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white mr-2"
              :class="
                offer().poseshtenie_broi > 0 ? 'bg-green-600' : 'bg-white'
              "
              @click.stop="goToDocPoseshtenia()"
            >
              {{ offer().poseshtenie_broi }}
            </div>
            <button
              class="flex flex-row justify-center items-center w-20 h-7 border border-blue-800 text-white"
              :class="
                offer().sub_poseshtenie_broi > 0 ? 'bg-blue-600' : 'bg-white'
              "
              @click.stop="goToRabotni()"
            >
              {{ offer().sub_poseshtenie_broi }}
            </button>
          </div>
        </div>
        <div class="text-sm mr-1">
          Екземпляр за посещение на работник на обект
        </div>
      </div>
      <div
        v-if="store.state.user.etapna3 == '1'"
        class="flex flex-col items-center p-2 rounded font-medium text-white bg-zinc-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm mr-1">№-3-ВР</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center text-sm text-gray-800"
            >
              <button
                class="flex flex-row justify-center items-center w-20 h-7 border border-blue-800 text-white"
                :class="offer().razmeri_broi > 0 ? 'bg-blue-600' : 'bg-white'"
                @click.stop="goToRazmeri()"
              >
                {{ offer().razmeri_broi }}
              </button>
            </div>
          </div>
        </div>
        <div class="text-sm mr-1">Екземпляр за вземане на размери</div>
      </div>
      <div
        v-if="store.state.user.etapna4 == '1'"
        class="flex flex-col items-center p-2 rounded font-medium bg-stone-400 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-4-И-З</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <button
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white mr-2"
              :class="offer().otklient_broi > 0 ? 'bg-green-600' : 'bg-white'"
              @click.stop="goToOtclienti()"
            >
              {{ offer().otklient_broi }}
            </button>
            <button
              class="flex flex-row justify-center items-center w-20 h-7 border border-blue-800 text-white"
              :class="offer().tasks_broi > 0 ? 'bg-blue-600' : 'bg-white'"
              :style="{ backgroundColor: colorTasksRaboti() }"
              @click.stop="goToZadaci()"
            >
              {{ offer().tasks_broi == 0 ? '' : offer().tasks_broi }}
            </button>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Обща информация и задачи</div>
      </div>
      <div
        v-if="store.state.user.etapna5 == '1'"
        class="flex flex-col items-center p-2 rounded font-medium bg-red-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-5-{{ store.state.user.zdtxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <button
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white"
              :class="offer().zapitvane_broi > 0 ? 'bg-green-600' : 'bg-white'"
              @click.stop="goToZapitvane()"
            >
              {{ offer().zapitvane_broi }}
            </button>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.zdtxtlong }}
        </div>
      </div>
      <div
        v-if="store.state.user.etapna6 == '1'"
        class="flex flex-col items-center p-2 rounded font-medium bg-orange-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-6-{{ store.state.user.odtxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white"
              :class="offer().odostavcik_broi > 0 ? 'bg-green-600' : 'bg-white'"
              @click.stop="goToOtgovor()"
            >
              {{ offer().odostavcik_broi }}
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
        class="flex flex-col items-center p-2 rounded font-medium bg-yellow-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-7-ОФ</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white mr-2"
              :class="offer().oferti_broi > 0 ? 'bg-green-600' : 'bg-white'"
              @click.stop="goToEoffers()"
            >
              {{ offer().oferti_broi }}
            </div>
            <div
              class="flex flex-row justify-center items-center w-20 h-7 bg-blue-600 border border-blue-800 text-white"
              @click.stop="editOffer(offer().idnomber)"
            ></div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Оферти</div>
      </div>
      <div
        v-if="
          store.state.user.etapna8 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium bg-lime-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-8-ДК</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 px-1 h-7 bg-blue-600 border border-blue-800 text-white"
            >
              {{ offer().allprice_after_to }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Договор с клиент</div>
      </div>
      <div
        v-if="
          store.state.user.etapna9 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium bg-green-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-9-{{ store.state.user.dkptxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white"
              :class="offer().pdogovor_broi > 0 ? 'bg-green-600' : 'bg-white'"
              @click.stop="goToPdogovori()"
            >
              {{ offer().pdogovor_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.dkptxtlong }}
        </div>
      </div>
      <div
        v-if="
          store.state.user.etapna10 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium bg-teal-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-10-{{ store.state.user.gtxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white"
              :class="offer().dds_broi > 0 ? 'bg-green-600' : 'bg-white'"
              @click.stop="goToDdsta()"
            >
              {{ offer().dds_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.gtxtlong }}
        </div>
      </div>
      <div
        v-if="
          store.state.user.etapna11 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium bg-sky-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-11-{{ store.state.user.ofptxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white"
              :class="offer().poffer_broi > 0 ? 'bg-green-600' : 'bg-white'"
              @click.stop="goToPoffers()"
            >
              {{ offer().poffer_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.ofptxtlong }}
        </div>
      </div>
      <div
        v-if="
          store.state.user.etapna12 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium bg-indigo-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-12-ПР</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 px-1 h-7 border border-blue-800 text-white"
              :class="offer().proformi_sum == 0 ? 'bg-white' : 'bg-blue-600'"
            >
              {{ offer().proformi_sum == 0 ? '' : offer().proformi_sum }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Проформа фактура</div>
      </div>
      <div
        v-if="
          store.state.user.etapna13 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium bg-fuchsia-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-13-ФА</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 px-1 h-7 border border-blue-800"
              :class="
                offer().avansi_sum == 0
                  ? 'bg-white text-gray-800'
                  : 'bg-blue-600 text-white'
              "
            >
              {{ offer().avansi_sum }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Ф. Аванс</div>
      </div>
      <div
        v-if="
          store.state.user.etapna14 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium bg-pink-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">
            №-14-{{ store.state.user.rptxt }}
          </div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white"
              :class="offer().casti_broi == 0 ? 'bg-white' : 'bg-green-600'"
              @click.stop="goToCasti()"
            >
              {{ offer().casti_broi == 0 ? '' : offer().casti_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">
          {{ store.state.user.rptxtlong }}
        </div>
      </div>
      <div
        v-if="
          store.state.user.etapna15 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium bg-rose-500 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm text-gray-800 mr-1">№-15-ПД</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white mr-2"
              :class="
                offer().poracki_files_broi == 0 ? 'bg-white' : 'bg-green-600'
              "
              @click.stop="goToPoracki()"
            >
              {{
                offer().poracki_files_broi == 0
                  ? ''
                  : offer().poracki_files_broi
              }}
            </div>
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-blue-800 text-white"
              :class="offer().poracki_broi == 0 ? 'bg-white' : 'bg-blue-600'"
            >
              {{ offer().poracki_broi == 0 ? '' : offer().poracki_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm text-gray-800 mr-1">Поръчка към доставчик</div>
      </div>
      <div
        v-if="
          store.state.user.etapna16 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium text-white bg-red-900 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm mr-1">№-16-ППП</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white mr-2"
              :class="offer().pp_files_broi == 0 ? 'bg-white' : 'bg-green-600'"
              @click.stop="goToPps()"
            >
              {{ offer().pp_files_broi == 0 ? '' : offer().pp_files_broi }}
            </div>
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-blue-800 text-white"
              :class="offer().pp_broi == 0 ? 'bg-white' : 'bg-blue-600'"
            >
              {{ offer().pp_broi == 0 ? '' : offer().pp_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm mr-1">Приемо Предвателен Протокол</div>
      </div>
      <div
        v-if="
          store.state.user.etapna17 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium text-white bg-amber-900 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm mr-1">№-17-{{ store.state.user.ppptxt }}</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white"
              :class="offer().ppr_broi == 0 ? 'bg-white' : 'bg-green-600'"
              @click.stop="goToPprs()"
            >
              {{ offer().ppr_broi == 0 ? '' : offer().ppr_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm mr-1">
          {{ store.state.user.ppptxtlong }}
        </div>
      </div>
      <div
        v-if="store.state.user.etapna18 == '1'"
        class="flex flex-col items-center p-2 rounded font-medium text-white bg-lime-900 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm mr-1">№-18-{{ store.state.user.ctxt }}</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white"
              :class="offer().snimki_broi == 0 ? 'bg-white' : 'bg-green-600'"
              @click.stop="goToSnimki()"
            >
              {{ offer().snimki_broi == 0 ? '' : offer().snimki_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm mr-1">
          {{ store.state.user.ctxtlong }}
        </div>
      </div>
      <div
        v-if="
          store.state.user.etapna19 == '1' && store.state.user.role != 'sluz'
        "
        class="flex flex-col items-center p-2 rounded font-medium text-white bg-cyan-900 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm mr-1">№-19-ИФ</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800"
              :class="
                offer().fakturi_broi == 0
                  ? 'bg-white text-gray-800'
                  : 'bg-green-600 text-white'
              "
            >
              {{
                offer().fakturi_broi > 0
                  ? offer().fakturi_broi
                  : offer().ostatak.toFixed(2)
              }}
            </div>
          </div>
        </div>
        <div class="text-sm mr-1">Изплатена фактура</div>
      </div>
      <div
        v-if="store.state.user.etapna20 == '1'"
        class="flex flex-col items-center p-2 rounded font-medium text-white bg-indigo-900 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm mr-1">№-20-ФП</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-green-800 text-white mr-2"
              :class="offer().fakturip_broi == 0 ? 'bg-white' : 'bg-green-600'"
              @click.stop="goToFakturip()"
            >
              {{ offer().fakturip_broi == 0 ? '' : offer().fakturip_broi }}
            </div>
            <div
              class="flex flex-row justify-center items-center w-20 h-7 border border-blue-800 text-white"
              :class="offer().pokupki_broi == 0 ? 'bg-white' : 'bg-blue-600'"
            >
              {{ offer().pokupki_broi == 0 ? '' : offer().pokupki_broi }}
            </div>
          </div>
        </div>
        <div class="text-sm mr-1">Фактури за покупки</div>
      </div>
      <div
        class="flex flex-col items-center p-2 rounded font-medium text-white bg-slate-800 border border-orange-200 shadow mb-2"
      >
        <div class="w-full flex flex-row justify-between items-center pb-2">
          <div class="text-sm mr-1">№-21-№</div>
          <div
            class="flex flex-row justify-center items-center text-sm text-gray-800"
          >
            <div
              class="flex flex-row justify-center items-center w-20 h-7 bg-orange-600 border border-orange-800 text-white"
            >
              {{ offer().idnomber }}
            </div>
          </div>
        </div>
        <div class="text-sm mr-1">Номер на оферта активирала поръчката</div>
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
      return store.state.offers_temp.find(
        (element) => element.id == store.state.current_dashboard_offer
      )
    }

    const colorTasksRaboti = () => {
      if (parseInt(store.state.user.tasks_raboti) > 0) {
        return '#7F7F7F'
      } else {
        switch (parseInt(store.state.user.task_status)) {
          case 0:
            return '#22B14C'
            break
          case 1:
            return '#7092BE'
            break
          case 2:
            return '#7F7F7F'
            break
          case 3:
            return '#FF7F27'
            break
          case 4:
            return '#00A2E8'
            break
          case 5:
            return '#3F48CC'
            break
          case 6:
            return '#DDA0DD'
            break
          case 7:
            return '#A0522D'
            break
          case 8:
            return '#AFEEEE'
            break
          default:
            return '#22B14C'
            break
        }
      }
    }

    const goToRabotni = () => {
      store.state.rabotni_temp = store.state.rabotni.filter((element) =>
        element.idnomber.includes(offer().idnomber)
      )
      store.methods.changePage('Rabotni')
    }

    const goToRazmeri = () => {
      store.methods.getRazmeri(store.state.current_dashboard_offer)
      store.methods.changePage('Razmeri')
    }

    const goToOtclienti = () => {
      store.methods.getOtclienti(store.state.current_dashboard_offer)
      store.methods.changePage('Client')
    }

    const goToDocPoseshtenia = () => {
      store.methods.changePage('Docposeshtenia')
    }

    const goToZadaci = () => {
      store.state.zadaci_temp = store.state.zadaci.filter(
        (element) => element.offer_id == store.state.current_dashboard_offer
      )
      store.methods.changePage('Zadaci')
    }

    const goToZapitvane = () => {
      store.methods.getZapitvane(store.state.current_dashboard_offer)
      store.methods.changePage('Zapitvane')
    }

    const goToOtgovor = () => {
      store.methods.getOtgovori(store.state.current_dashboard_offer)
      store.methods.changePage('Otgovor')
    }

    const goToEoffers = () => {
      store.methods.getEoffers(store.state.current_dashboard_offer)
      store.methods.changePage('Eoffers')
    }

    const goToPdogovori = () => {
      store.methods.getPdogovori(store.state.current_dashboard_offer)
      store.methods.changePage('Pdogovori')
    }

    const goToDdsta = () => {
      store.methods.getDdsta(store.state.current_dashboard_offer)
      store.methods.changePage('Ddsta')
    }

    const goToPoffers = () => {
      store.methods.getPoffers(store.state.current_dashboard_offer)
      store.methods.changePage('Poffers')
    }

    const goToCasti = () => {
      store.methods.getCasti(store.state.current_dashboard_offer)
      store.methods.changePage('Casti')
    }

    const goToPoracki = () => {
      store.methods.getPoracki(store.state.current_dashboard_offer)
      store.methods.changePage('Poracki')
    }

    const goToPps = () => {
      store.methods.getPps(store.state.current_dashboard_offer)
      store.methods.changePage('Pps')
    }

    const goToPprs = () => {
      store.methods.getPprs(store.state.current_dashboard_offer)
      store.methods.changePage('Pprs')
    }

    const goToSnimki = () => {
      store.methods.getSnimki(store.state.current_dashboard_offer)
      store.methods.changePage('Snimki')
    }

    const goToFakturip = () => {
      store.methods.getFakturip(store.state.current_dashboard_offer)
      store.methods.changePage('Fakturip')
    }

    const editOffer = (offer_idnomber) => {
      store.methods.openOfferSidebar()
      store.state.current_oferti = offer_idnomber
      store.methods.changePage('Offer')
    }

    return {
      store,
      offer,
      colorTasksRaboti,
      goToRazmeri,
      goToOtclienti,
      goToZapitvane,
      goToOtgovor,
      goToEoffers,
      goToPdogovori,
      goToDdsta,
      goToPoffers,
      goToCasti,
      goToPoracki,
      goToPps,
      goToPprs,
      goToSnimki,
      goToFakturip,
      goToZadaci,
      goToRabotni,
      goToDocPoseshtenia,
      editOffer,
    }
  },
}
</script>
