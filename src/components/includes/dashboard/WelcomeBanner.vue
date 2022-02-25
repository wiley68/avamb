<template>
  <div class="relative bg-sky-700 p-2 rounded overflow-hidden mb-2">
    <div class="relative">
      <h1 class="text-xl text-white font-medium">
        AVAMB-LOGICIEL - {{ typeUser() }}
      </h1>
      <p class="text-xl text-white">
        {{ store.state.user.username }}
      </p>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'WelcomeBanner',

  setup() {
    const store = inject('store')

    const typeUser = () => {
      if (store.state.user.admin == 'Yes') {
        return 'Суперадминистратор'
      } else {
        if (store.state.user.firmadmin == 'Yes') {
          return 'Администратор'
        } else {
          switch (store.state.user.role) {
            case 'scet':
              return 'АС-2'
              break
            case 'sluz':
              return 'АС-3'
              break
            case 'targ':
              return 'АС-1'
              break
            default:
              return ''
              break
          }
        }
      }
    }

    return { store, typeUser }
  },
}
</script>
