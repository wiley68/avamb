<template>
  <main>
    <div class="relative flex">
      <ProformaSidebar />
    </div>
  </main>
</template>

<script>
import { inject } from "vue";
import ProformaSidebar from "./includes/proformi/ProformaSidebar.vue";

export default {
  name: "Proforma",

  components: {
    ProformaSidebar,
  },

  setup() {
    const store = inject("store");

    return { store };
  },
};
</script>
