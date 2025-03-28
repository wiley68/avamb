<template>
  <div class="flex flex-row h-screen bg-white">
    <Sidebar></Sidebar>
    <!-- Content area -->
    <div
      class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"
    >
      <!-- Site header -->
      <Header />
      <Landing v-if="store.state.page == 'Landing'"></Landing>
      <Dashboard v-if="store.state.page == 'Dashboard'"></Dashboard>
      <Oferti v-if="store.state.page == 'Oferti'"></Oferti>
      <Dogovori v-if="store.state.page == 'Dogovori'"></Dogovori>
      <Proformi v-if="store.state.page == 'Proformi'"></Proformi>
      <Avansovi v-if="store.state.page == 'Avansovi'"></Avansovi>
      <Fakturi v-if="store.state.page == 'Fakturi'"></Fakturi>
      <Faktura v-if="store.state.page == 'Faktura'"></Faktura>
      <Chat v-if="store.state.page == 'Chat'"></Chat>
      <Client v-if="store.state.page == 'Client'"></Client>
      <Zapitvane v-if="store.state.page == 'Zapitvane'"></Zapitvane>
      <Otgovor v-if="store.state.page == 'Otgovor'"></Otgovor>
      <Eoffers v-if="store.state.page == 'Eoffers'"></Eoffers>
      <Pdogovori v-if="store.state.page == 'Pdogovori'"></Pdogovori>
      <Ddsta v-if="store.state.page == 'Ddsta'"></Ddsta>
      <Poffers v-if="store.state.page == 'Poffers'"></Poffers>
      <Casti v-if="store.state.page == 'Casti'"></Casti>
      <Poracki v-if="store.state.page == 'Poracki'"></Poracki>
      <Pps v-if="store.state.page == 'Pps'"></Pps>
      <Pprs v-if="store.state.page == 'Pprs'"></Pprs>
      <Snimki v-if="store.state.page == 'Snimki'"></Snimki>
      <Fakturip v-if="store.state.page == 'Fakturip'"></Fakturip>
      <Rabotni v-if="store.state.page == 'Rabotni'"></Rabotni>
      <Zadaci v-if="store.state.page == 'Zadaci'"></Zadaci>
      <Messages v-if="store.state.page == 'Messages'"></Messages>
      <Storeminusi v-if="store.state.page == 'Storeminusi'"></Storeminusi>
      <Storeplusi v-if="store.state.page == 'Storeplusi'"></Storeplusi>
      <Offer v-if="store.state.page == 'Offer'"></Offer>
      <Dogovor v-if="store.state.page == 'Dogovor'"></Dogovor>
      <Proforma v-if="store.state.page == 'Proforma'"></Proforma>
      <Avansova v-if="store.state.page == 'Avansova'"></Avansova>
      <Docposeshtenia
        v-if="store.state.page == 'Docposeshtenia'"
      ></Docposeshtenia>
      <Modul1 v-if="store.state.page == 'Modul1'"></Modul1>
      <Modul2 v-if="store.state.page == 'Modul2'"></Modul2>
      <Modul3 v-if="store.state.page == 'Modul3'"></Modul3>
      <Modul4 v-if="store.state.page == 'Modul4'"></Modul4>
      <Modul5 v-if="store.state.page == 'Modul5'"></Modul5>
    </div>
  </div>
</template>

<script>
import { onMounted, provide } from 'vue'
import store from './store'
import Sidebar from './components/includes/Sidebar.vue'
import Header from './components/includes/Header.vue'
import Landing from './components/Landing.vue'
import Dashboard from './components/Dashboard.vue'
import Oferti from './components/Oferti.vue'
import Dogovori from './components/Dogovori.vue'
import Proformi from './components/Proformi.vue'
import Avansovi from './components/Avansovi.vue'
import Fakturi from './components/Fakturi.vue'
import Chat from './components/includes/etapna/Chat.vue'
import Client from './components/includes/etapna/Client.vue'
import Zapitvane from './components/includes/etapna/Zapitvane.vue'
import Otgovor from './components/includes/etapna/Otgovor.vue'
import Eoffers from './components/includes/etapna/Eoffers.vue'
import Pdogovori from './components/includes/etapna/Pdogovori.vue'
import Ddsta from './components/includes/etapna/Ddsta.vue'
import Poffers from './components/includes/etapna/Poffers.vue'
import Casti from './components/includes/etapna/Casti.vue'
import Poracki from './components/includes/etapna/Poracki.vue'
import Pps from './components/includes/etapna/Pps.vue'
import Pprs from './components/includes/etapna/Pprs.vue'
import Snimki from './components/includes/etapna/Snimki.vue'
import Fakturip from './components/includes/etapna/Fakturip.vue'
import Rabotni from './components/Rabotni.vue'
import Zadaci from './components/Zadaci.vue'
import Messages from './components/Messages.vue'
import Storeminusi from './components/Storeminusi.vue'
import Storeplusi from './components/Storeplusi.vue'
import Docposeshtenia from './components/includes/etapna/Docposeshtenia.vue'
import Offer from './components/Offer.vue'
import Dogovor from './components/Dogovor.vue'
import Proforma from './components/Proforma.vue'
import Avansova from './components/Avansova.vue'
import Faktura from './components/Faktura.vue'
import Modul1 from './components/Modul1.vue'
import Modul2 from './components/Modul2.vue'
import Modul3 from './components/Modul3.vue'
import Modul4 from './components/Modul4.vue'
import Modul5 from './components/Modul5.vue'

export default {
  name: 'App',

  components: {
    Sidebar,
    Header,
    Landing,
    Dashboard,
    Oferti,
    Dogovori,
    Proformi,
    Avansovi,
    Fakturi,
    Chat,
    Client,
    Zapitvane,
    Otgovor,
    Eoffers,
    Pdogovori,
    Ddsta,
    Poffers,
    Casti,
    Poracki,
    Pps,
    Pprs,
    Snimki,
    Fakturip,
    Rabotni,
    Zadaci,
    Messages,
    Storeminusi,
    Storeplusi,
    Docposeshtenia,
    Offer,
    Dogovor,
    Proforma,
    Avansova,
    Faktura,
    Modul1,
    Modul2,
    Modul3,
    Modul4,
    Modul5,
  },

  setup() {
    provide('store', store)

    onMounted(() => {
      store.methods.loadData()
    })

    return { store }
  },
}
</script>
