<template>
  <div>
    <Datepicker />
  </div>
</template>

<script>
import { inject } from 'vue'
import Datepicker from '../components/Datepicker.vue'

export default {
  name: 'SettingsPanel',

  components: {
    Datepicker,
  },

  setup() {
    const store = inject('store')

    return { store }
  },
}
</script>
