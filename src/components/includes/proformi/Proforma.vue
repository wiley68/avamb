<template>
    <div class="flex w-full items-center">
        <div class="relative bg-sky-700 p-2 rounded overflow-hidden flex-grow">
            <div class="relative">
                <h1 class="text-base text-white font-medium">
                    Проформа по оферта -
                    {{ proforma.offer_idnomber }}
                </h1>
            </div>
        </div>
        <a class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
            aria-controls="success-modal" :href="
              '/print_proforma.php?pid=' +
              proforma.id +
              '&guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
            " target="_blank">
            <svg class="w-6 h-6 fill-current text-blue-600 shrink-0" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z" />
            </svg>
        </a>
        <div class="flex items-center">
            <button
                class="flex flex-row justify-center items-center p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"
                aria-controls="success-modal" @click.stop="updateProforma()">
                <svg class="w-6 h-6 fill-current text-blue-600 shrink-0" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" />
                </svg>
            </button>
        </div>
    </div>
    <div class="grow pt-4">
        <div
            class="flex flex-col items-start justify-between bg-indigo-50 shadow-lg rounded-t-sm border border-indigo-200 px-6 pb-3 mb-3">
            <div class="flex flex-col mt-2 w-full">
                <input type="date" class="w-full text-sm border rounded-sm border-gray-100 p-1"
                    placeholder="Дата на проформа" v-model="proforma.dateon" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { inject, computed, onMounted } from 'vue'

export default {
    name: 'Proforma',

    setup() {
        const store = inject('store')

        const proforma = computed(() => {
            return store.state.proformi_temp.find(
                (element) => element.idnomber == store.state.current_proformi
            )
        })

        onMounted(() => {
            store.methods.getShabloni()
        })

        const updateProforma = () => {
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

        return { store, proforma, updateProforma }
    },
}
</script>
  