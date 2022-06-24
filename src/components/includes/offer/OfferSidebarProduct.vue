<template>
  <div
    id="product-sidebar"
    class="absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out"
    :class="
      store.state.offerSidebarProductOpen
        ? 'translate-x-0'
        : '-translate-x-full'
    "
  >
    <div
      class="bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 md:w-72 xl:w-80 h-[calc(100vh-160px)]"
    >
      <ul class="mb-6 p-2">
        <li
          v-for="suboffer in store.state.suboffers"
          :key="suboffer.id"
          class="w-full p-2 rounded bg-slate-50 border border-slate-300 mb-2"
        >
          <div class="text-base">{{ suboffer.product_name }}</div>
          <div class="text-base font-medium">{{ suboffer.products_code }}</div>
          <div class="flex items-center justify-between">
            <div class="text-sm">{{ suboffer.quantity }}</div>
            <div class="text-sm">{{ suboffer.price }}</div>
            <div class="text-sm">{{ suboffer.dds }}&nbsp;%</div>
            <div class="text-sm">{{ suboffer.allprice }}</div>
          </div>
          <div class="flex items-center justify-between mt-2">
            <button
              @click.stop="editSuboffer(suboffer.id)"
              type="button"
              class="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 fill-current text-blue-600 mr-1 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12H20A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4V2M18.78,3C18.61,3 18.43,3.07 18.3,3.2L17.08,4.41L19.58,6.91L20.8,5.7C21.06,5.44 21.06,5 20.8,4.75L19.25,3.2C19.12,3.07 18.95,3 18.78,3M16.37,5.12L9,12.5V15H11.5L18.87,7.62L16.37,5.12Z"
                  /></svg
                ><span class="text-sm">Редакция</span>
              </div>
            </button>
            <button
              @click.stop="store.methods.closeOfferSidebarProduct()"
              type="button"
              class="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 fill-current text-blue-600 mr-1 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M4,2A2,2 0 0,0 2,4V14H4V4H14V2H4M8,6A2,2 0 0,0 6,8V18H8V8H18V6H8M20,12V20H12V12H20M20,10H12A2,2 0 0,0 10,12V20A2,2 0 0,0 12,22H20A2,2 0 0,0 22,20V12A2,2 0 0,0 20,10Z"
                  /></svg
                ><span class="text-sm">Клонирай</span>
              </div>
            </button>
            <button
              @click.stop="store.methods.closeOfferSidebarProduct()"
              type="button"
              class="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <div class="flex items-center">
                <svg
                  class="w-4 h-4 fill-current text-red-600 mr-1 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
                  /></svg
                ><span class="text-sm">Изтрий</span>
              </div>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'OfferSidebarProduct',

  setup() {
    const store = inject('store')

    const editSuboffer = (suboffer_id) => {
      store.state.current_suboffer = suboffer_id
      store.methods.closeOfferSidebarProduct()
    }

    return { store, editSuboffer }
  },
}
</script>
