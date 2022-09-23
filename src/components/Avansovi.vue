<template>
    <main>
        <div class="relative flex">
            <AvansoviSidebar />
        </div>
    </main>
</template>
  
<script>
import { inject } from 'vue'
import AvansoviSidebar from './includes/avansovi/AvansoviSidebar.vue'

export default {
    name: 'Avansovi',

    components: {
        AvansoviSidebar,
    },

    setup() {
        const store = inject('store')

        return { store }
    },
}
</script>
  