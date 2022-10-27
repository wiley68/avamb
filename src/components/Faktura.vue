<template>
  <main>
    <div class="relative flex">
      <FakturaSidebar />
    </div>
  </main>
</template>

<script>
import { inject, onMounted } from "vue";
import FakturaSidebar from "./includes/fakturi/FakturaSidebar.vue";

export default {
  name: "Faktura",

  components: {
    FakturaSidebar,
  },

  setup() {
    const store = inject("store");

    return { store };
  },
};
</script>
