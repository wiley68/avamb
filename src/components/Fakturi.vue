<template>
  <main>
    <div class="relative flex">
      <FakturiSidebar />
    </div>
  </main>
</template>

<script>
import { inject } from "vue";
import FakturiSidebar from "./includes/fakturi/FakturiSidebar.vue";

export default {
  name: "Fakturi",

  components: {
    FakturiSidebar,
  },

  setup() {
    const store = inject("store");

    return { store };
  },
};
</script>
