<template>
  <main>
    <div class="px-4 sm:px-6 lg:px-8 py-4 w-full max-w-9xl mx-auto">
      <WelcomeBanner />
      <SettingsPanel />
      <BodyPanel />
    </div>
  </main>
</template>

<script>
import { inject } from 'vue'
import WelcomeBanner from './includes/dashboard/WelcomeBanner.vue'
import SettingsPanel from './includes/dashboard/SettingsPanel.vue'
import BodyPanel from './includes/dashboard/BodyPanel.vue'

export default {
  name: 'Dashboard',

  components: {
    WelcomeBanner,
    SettingsPanel,
    BodyPanel,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
