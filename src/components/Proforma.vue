<template>
    <main>
        <div class="relative flex">
            <ProformaSidebar />
            <div class="grow flex flex-col md:translate-x-0 transform transition-transform duration-300 ease-in-out"
                :class="
                  store.state.proformaSidebarOpen ? 'translate-x-1/3' : 'translate-x-0'
                ">
                <!-- <DogovorBody /> -->
            </div>
        </div>
    </main>
</template>
  
<script>
import { inject } from 'vue'
import ProformaSidebar from './includes/proformi/ProformaSidebar.vue'
// import DogovorBody from './includes/dogovori/DogovorBody.vue'

export default {
    name: 'Proforma',

    components: {
        ProformaSidebar,
        // DogovorBody,
    },

    setup() {
        const store = inject('store')

        return { store }
    },
}
</script>
  