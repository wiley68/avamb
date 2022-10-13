<template>
  <main>
    <div class="relative flex">
      <AvansovaSidebar />
    </div>
  </main>
</template>

<script>
import { inject, onMounted } from "vue";
import AvansovaSidebar from "./includes/avansovi/AvansovaSidebar.vue";

export default {
  name: "Avansova",

  components: {
    AvansovaSidebar,
  },

  setup() {
    const store = inject("store");

    onMounted(() => {
      store.methods.getDds();
    });

    return { store };
  },
};
</script>
