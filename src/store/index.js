import { reactive } from 'vue'
import moment from 'moment'
import { useLoading } from 'vue-loading-overlay'

const $loading = useLoading()
const loader_params = {}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest()
  if ('withCredentials' in xhr) {
    xhr.open(method, url, true)
  } else if (typeof XDomainRequest != 'undefined') {
    xhr = new XDomainRequest()
    xhr.open(method, url)
  } else {
    xhr = null
  }
  return xhr
}

// const tekushta_local = localStorage.getItem('tekushta')

const state = reactive({
  page: 'Landing',
  sidebarOpen: false,
  name: '',
  user: {},
  offers: [],
  offers_temp: [],
  alloffers: [],
  oferti: [],
  oferti_temp: [],
  dogovori: [],
  dogovori_temp: [],
  proformi: [],
  proformi_temp: [],
  avansovi: [],
  avansovi_temp: [],
  fakturi: [],
  fakturi_temp: [],
  suboffers: [],
  finished_offers: 1,
  tekushta_start: moment().startOf('year').format('YYYY-MM-DD'),
  tekushta_end: moment().format('YYYY-MM-DD'),
  // tekushta: tekushta_local
  //   ? tekushta_local
  //   : moment().startOf('year').format('DD.MM.YYYY') +
  //     ' to ' +
  //     moment().format('DD.MM.YYYY'),
  dashboardSidebarOpen: true,
  offerSidebarOpen: true,
  modul1SidebarOpen: true,
  modul2SidebarOpen: true,
  modul3SidebarOpen: true,
  modul4SidebarOpen: true,
  modul5SidebarOpen: true,
  dogovorSidebarOpen: true,
  proformaSidebarOpen: true,
  avansovaSidebarOpen: true,
  fakturaSidebarOpen: true,
  offerSidebarProductOpen: true,
  offerEtap: 1,
  dogovorEtap: 1,
  obekti: [],
  ddsfirm: [],
  statusi: [],
  shabloni: [],
  current_dashboard_offer: 0,
  current_offer: 0,
  current_oferti: 0,
  current_dogovori: 0,
  current_proformi: 0,
  current_avansovi: 0,
  current_fakturi: 0,
  current_suboffer: 0,
  otclienti: [],
  doc_poseshtenia: [],
  doc_poseshtenia_view: [],
  deleteClientModal: false,
  deleteDocPoseshtenieModal: false,
  successUpdateClient: false,
  zapitvania: [],
  deleteZapitvaneModal: false,
  successUpdateZapitvane: false,
  otgovori: [],
  deleteOtgovorModal: false,
  successUpdateOtgovor: false,
  eoffers: [],
  deleteEofferModal: false,
  successUpdateEoffer: false,
  pdogovori: [],
  deletePdogovorModal: false,
  successUpdatePdogovor: false,
  ddsta: [],
  deleteDdsModal: false,
  successUpdateDds: false,
  poffers: [],
  deletePofferModal: false,
  successUpdatePoffer: false,
  casti: [],
  deleteCastModal: false,
  successUpdateCast: false,
  poracki: [],
  deletePorackaModal: false,
  successUpdatePoracka: false,
  pps: [],
  deletePpModal: false,
  successUpdatePp: false,
  pprs: [],
  deletePprModal: false,
  successUpdatePpr: false,
  snimki: [],
  deleteSnimkaModal: false,
  fakturip: [],
  deleteFakturapModal: false,
  successUpdateFakturap: false,
  activeConditionFirms: false,
  activeConditionDocuments: false,
  activeConditionRegister: false,
  rabotni: [],
  rabotni_temp: [],
  rabotniSidebarOpen: true,
  current_raboten_id: 0,
  successUpdateRaboten: false,
  deleteRabotenModal: false,
  poseshtenia: [],
  current_poseshtenie_id: 0,
  successUpdatePoseshtenie: false,
  deletePoseshtenieModal: false,
  zadaci: [],
  moduli1: [],
  moduli2: [],
  moduli3: [],
  moduli4: [],
  moduli5: [],
  zadaci_temp: [],
  moduli1_temp: [],
  moduli2_temp: [],
  moduli3_temp: [],
  moduli4_temp: [],
  moduli5_temp: [],
  zadaciSidebarOpen: true,
  current_zadaca_id: 0,
  current_modul1_id: 0,
  current_modul2_id: 0,
  current_modul3_id: 0,
  current_modul4_id: 0,
  current_modul5_id: 0,
  successUpdateZadaca: false,
  successUpdateModul1: false,
  successUpdateModul2: false,
  successUpdateModul3: false,
  successUpdateModul4: false,
  successUpdateModul5: false,
  successUpdateOffer: false,
  successUpdateDogovor: false,
  successUpdateProforma: false,
  successUpdateAvansova: false,
  successUpdateFaktura: false,
  successUpdateSuboffer: false,
  deleteZadacaModal: false,
  messages: [],
  users: [],
  user_gravatar: '',
  current_user_id: 0,
  deleteMessage: false,
  storeminusi: [],
  storeminusi_temp: [],
  storeminusiSidebarOpen: true,
  current_storeminus_id: 0,
  successUpdateStoreminus: false,
  deleteStoreminusModal: false,
  clienti: [],
  offer_clienti: [],
  sub_storeminusi: [],
  current_sub_storeminus_id: 0,
  deleteSubstoreminusModal: false,
  produkti: [],
  produkti_temp: [],
  produkti_plus: [],
  produkti_plus_temp: [],
  produkti_main: [],
  storeplusi: [],
  storeplusi_temp: [],
  storeplusiSidebarOpen: true,
  current_storeplus_id: 0,
  successUpdateStoreplus: false,
  deleteStoreplusModal: false,
  sub_storeplusi: [],
  current_sub_storeplus_id: 0,
  deleteSubstoreplusModal: false,
  dostavcici: [],
  code: '',
  category: '',
  deleteProductModal: false,
})

const methods = {
  closeSidebar() {
    state.sidebarOpen = false
  },
  openSidebar() {
    state.sidebarOpen = true
  },
  toggleSidebar() {
    state.sidebarOpen = !state.sidebarOpen
  },
  toggleDashboardSidebar() {
    state.dashboardSidebarOpen = !state.dashboardSidebarOpen
  },
  closeDashboardSidebar() {
    state.dashboardSidebarOpen = false
  },
  openDashboardSidebar() {
    state.dashboardSidebarOpen = true
  },
  toggleOfferSidebar() {
    state.offerSidebarOpen = !state.offerSidebarOpen
  },
  toggleModul1Sidebar() {
    state.modul1SidebarOpen = !state.modul1SidebarOpen
  },
  toggleModul2Sidebar() {
    state.modul2SidebarOpen = !state.modul2SidebarOpen
  },
  toggleModul3Sidebar() {
    state.modul3SidebarOpen = !state.modul3SidebarOpen
  },
  toggleModul4Sidebar() {
    state.modul4SidebarOpen = !state.modul4SidebarOpen
  },
  toggleModul5Sidebar() {
    state.modul5SidebarOpen = !state.modul5SidebarOpen
  },
  toggleDogovorSidebar() {
    state.dogovorSidebarOpen = !state.dogovorSidebarOpen
  },
  toggleProformaSidebar() {
    state.proformaSidebarOpen = !state.proformaSidebarOpen
  },
  toggleAvansovaSidebar() {
    state.avansovaSidebarOpen = !state.avansovaSidebarOpen
  },
  toggleFakturaSidebar() {
    state.fakturaSidebarOpen = !state.fakturaSidebarOpen
  },
  toggleOfferSidebarProduct() {
    state.offerSidebarProductOpen = !state.offerSidebarProductOpen
  },
  closeOfferSidebar() {
    state.offerSidebarOpen = false
  },
  closeModul1Sidebar() {
    state.modul1SidebarOpen = false
  },
  closeModul2Sidebar() {
    state.modul2SidebarOpen = false
  },
  closeModul3Sidebar() {
    state.modul3SidebarOpen = false
  },
  closeModul4Sidebar() {
    state.modul4SidebarOpen = false
  },
  closeModul5Sidebar() {
    state.modul5SidebarOpen = false
  },
  closeDogovorSidebar() {
    state.dogovorSidebarOpen = false
  },
  closeProformaSidebar() {
    state.proformaSidebarOpen = false
  },
  closeAvansovaSidebar() {
    state.avansovaSidebarOpen = false
  },
  closeFakturaSidebar() {
    state.fakturaSidebarOpen = false
  },
  closeOfferSidebarProduct() {
    state.offerSidebarProductOpen = false
  },
  openOfferSidebar() {
    state.offerSidebarOpen = true
  },
  openModul1Sidebar() {
    state.modul1SidebarOpen = true
  },
  openModul2Sidebar() {
    state.modul2SidebarOpen = true
  },
  openModul3Sidebar() {
    state.modul3SidebarOpen = true
  },
  openModul4Sidebar() {
    state.modul4SidebarOpen = true
  },
  openModul5Sidebar() {
    state.modul5SidebarOpen = true
  },
  openOfferSidebarProduct() {
    state.offerSidebarProductOpen = true
  },
  changeDashboardOffer(offer_id) {
    state.current_dashboard_offer = offer_id
  },
  toggleRabotniSidebar() {
    state.rabotniSidebarOpen = !state.rabotniSidebarOpen
  },
  closeRabotniSidebar() {
    state.rabotniSidebarOpen = false
  },
  openRabotniSidebar() {
    state.rabotniSidebarOpen = true
  },
  changeRabotni(raboten_id) {
    state.current_poseshtenie_id = 0
    state.poseshtenia = []
    state.current_raboten_id = raboten_id
    methods.getPoseshtenia(state.current_raboten_id)
  },
  toggleZadaciSidebar() {
    state.zadaciSidebarOpen = !state.zadaciSidebarOpen
  },
  toggleModul1Sidebar() {
    state.modul1SidebarOpen = !state.modul1SidebarOpen
  },
  toggleModul2Sidebar() {
    state.modul2SidebarOpen = !state.modul2SidebarOpen
  },
  toggleModul3Sidebar() {
    state.modul3SidebarOpen = !state.modul3SidebarOpen
  },
  toggleModul4Sidebar() {
    state.modul4SidebarOpen = !state.modul4SidebarOpen
  },
  toggleModul5Sidebar() {
    state.modul5SidebarOpen = !state.modul5SidebarOpen
  },
  toggleStoreminusiSidebar() {
    state.storeminusiSidebarOpen = !state.storeminusiSidebarOpen
  },
  toggleStoreplusiSidebar() {
    state.storeplusiSidebarOpen = !state.storeplusiSidebarOpen
  },
  closeZadaciSidebar() {
    state.zadaciSidebarOpen = false
  },
  closeModul1Sidebar() {
    state.modul1SidebarOpen = false
  },
  closeModul2Sidebar() {
    state.modul2SidebarOpen = false
  },
  closeModul3Sidebar() {
    state.modul3SidebarOpen = false
  },
  closeModul4Sidebar() {
    state.modul4SidebarOpen = false
  },
  closeModul5Sidebar() {
    state.modul5SidebarOpen = false
  },
  closeStoreminusiSidebar() {
    state.storeminusiSidebarOpen = false
  },
  closeStoreplusiSidebar() {
    state.storeplusiSidebarOpen = false
  },
  openZadaciSidebar() {
    state.zadaciSidebarOpen = true
  },
  openModul1Sidebar() {
    state.modul1SidebarOpen = true
  },
  openModul2Sidebar() {
    state.modul2SidebarOpen = true
  },
  openModul3Sidebar() {
    state.modul1SidebarOpen = true
  },
  openModul4Sidebar() {
    state.modul4SidebarOpen = true
  },
  openModul5Sidebar() {
    state.modul5SidebarOpen = true
  },
  openStoreminusiSidebar() {
    state.storeminusiSidebarOpen = true
  },
  openStoreplusiSidebar() {
    state.storeplusiSidebarOpen = true
  },
  changeZadaci(zadaca_id) {
    state.current_zadaca_id = zadaca_id
  },
  changeModul1(modul1_id) {
    state.current_modul1_id = modul1_id
  },
  changeModul2(modul2_id) {
    state.current_modul2_id = modul2_id
  },
  changeModul3(modul3_id) {
    state.current_modul3_id = modul3_id
  },
  changeModul4(modul4_id) {
    state.current_modul4_id = modul4_id
  },
  changeModul5(modul5_id) {
    state.current_modul5_id = modul5_id
  },
  changeStoreminusi(storeminus_id) {
    state.current_sub_storeminus_id = 0
    state.sub_storeminusi = []
    state.current_storeminus_id = storeminus_id
    methods.getSubStoreminusi(state.current_storeminus_id)
  },
  changeStoreplusi(storeplus_id) {
    state.current_sub_storeplus_id = 0
    state.sub_storeplusi = []
    state.current_storeplus_id = storeplus_id
    methods.getSubStoreplusi(state.current_storeplus_id)
    methods.getProduktiPlus()
  },
  changePoseshtenie(poseshtenie_id) {
    state.current_poseshtenie_id = poseshtenie_id
  },
  changeSubstoreminus(sub_storeminus_id) {
    state.current_sub_storeminus_id = sub_storeminus_id
  },
  changeSubstoreplus(sub_storeplus_id) {
    state.current_sub_storeplus_id = sub_storeplus_id
  },
  changePage(page) {
    state.page = page
    methods.closeSidebar()
    if (page == 'Landing') {
      methods.getOffers()
      methods.getOferti()
      methods.getDogovori()
      methods.getProformi()
      methods.getAvansovi()
      methods.getFakturi()
      methods.getZadaci()
      methods.getModuli1()
      methods.getModuli2()
      methods.getModuli3()
      methods.getModuli4()
      methods.getModuli5()
      methods.getRabotni()
      methods.getMessages()
      methods.getStoreminusi()
      methods.getStoreplusi()
      methods.getProduktiPlus()
      methods.getDocPoseshtenieView()
      methods.getProdukti()
    }
    if (page == 'Messages') {
      methods.getMessages()
    }
    if (page == 'Storeminusi') {
      methods.getStoreminusi()
    }
    if (page == 'Storeplusi') {
      methods.getStoreplusi()
      methods.getProduktiPlus()
    }
    if (page == 'Docposeshtenia') {
      methods.getDocPoseshtenieView()
    }
  },
  changeDeleteClientModal(deleteClientModal) {
    state.deleteClientModal = deleteClientModal
  },
  changeDeleteDocPoseshtenieModal(deleteDocPoseshtenieModal) {
    state.deleteDocPoseshtenieModal = deleteDocPoseshtenieModal
  },
  deleteClientById(id) {
    state.otclienti = state.otclienti.filter((element) => {
      return element.id != id
    })
  },
  deleteDocPoseshtenieById(id) {
    state.doc_poseshtenia = state.doc_poseshtenia.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdateClient(successUpdateClient) {
    state.successUpdateClient = successUpdateClient
  },
  changeDeleteZapitvaneModal(deleteZapitvaneModal) {
    state.deleteZapitvaneModal = deleteZapitvaneModal
  },
  deleteZapitvaneById(id) {
    state.zapitvania = state.zapitvania.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdateZapitvane(successUpdateZapitvane) {
    state.successUpdateZapitvane = successUpdateZapitvane
  },
  changeDeleteOtgovorModal(deleteOtgovorModal) {
    state.deleteOtgovorModal = deleteOtgovorModal
  },
  deleteOtgovorById(id) {
    state.otgovori = state.otgovori.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdateOtgovor(successUpdateOtgovor) {
    state.successUpdateOtgovor = successUpdateOtgovor
  },
  changeDeleteEofferModal(deleteEofferModal) {
    state.deleteEofferModal = deleteEofferModal
  },
  deleteEofferById(id) {
    state.eoffers = state.eoffers.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdateEoffer(successUpdateEoffer) {
    state.successUpdateEoffer = successUpdateEoffer
  },
  changeDeletePdogovorModal(deletePdogovorModal) {
    state.deletePdogovorModal = deletePdogovorModal
  },
  deletePdogovorById(id) {
    state.pdogovori = state.pdogovori.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdatePdogovor(successUpdatePdogovor) {
    state.successUpdatePdogovor = successUpdatePdogovor
  },
  changeDeleteDdsModal(deleteDdsModal) {
    state.deleteDdsModal = deleteDdsModal
  },
  deleteDdsById(id) {
    state.ddsta = state.ddsta.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdateDds(successUpdateDds) {
    state.successUpdateDds = successUpdateDds
  },
  changeDeletePofferModal(deletePofferModal) {
    state.deletePofferModal = deletePofferModal
  },
  deletePofferById(id) {
    state.poffers = state.poffers.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdatePoffer(successUpdatePoffer) {
    state.successUpdatePoffer = successUpdatePoffer
  },
  changeDeleteCastModal(deleteCastModal) {
    state.deleteCastModal = deleteCastModal
  },
  deleteCastById(id) {
    state.casti = state.casti.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdateCast(successUpdateCast) {
    state.successUpdateCast = successUpdateCast
  },
  changeDeletePorackaModal(deletePorackaModal) {
    state.deletePorackaModal = deletePorackaModal
  },
  deletePorackaById(id) {
    state.poracki = state.poracki.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdatePoracka(successUpdatePoracka) {
    state.successUpdatePoracka = successUpdatePoracka
  },
  changeDeletePpModal(deletePpModal) {
    state.deletePpModal = deletePpModal
  },
  deletePpById(id) {
    state.pps = state.pps.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdatePp(successUpdatePp) {
    state.successUpdatePp = successUpdatePp
  },
  changeDeletePprModal(deletePprModal) {
    state.deletePprModal = deletePprModal
  },
  deletePprById(id) {
    state.pprs = state.pprs.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdatePpr(successUpdatePpr) {
    state.successUpdatePpr = successUpdatePpr
  },
  changeDeleteSnimkaModal(deleteSnimkaModal) {
    state.deleteSnimkaModal = deleteSnimkaModal
  },
  deleteSnimkaById(id) {
    state.snimki = state.snimki.filter((element) => {
      return element.id != id
    })
  },
  changeDeleteFakturapModal(deleteFakturapModal) {
    state.deleteFakturapModal = deleteFakturapModal
  },
  deleteFakturapById(id) {
    state.fakturip = state.fakturip.filter((element) => {
      return element.id != id
    })
  },
  changeSuccessUpdateFakturap(successUpdateFakturap) {
    state.successUpdateFakturap = successUpdateFakturap
  },
  changeDeleteRabotenModal(deleteRabotenModal) {
    state.deleteRabotenModal = deleteRabotenModal
  },
  changeDeleteSubstoreminusModal(deleteSubstoreminusModal) {
    state.deleteSubstoreminusModal = deleteSubstoreminusModal
  },
  changeDeleteSubstoreplusModal(deleteSubstoreplusModal) {
    state.deleteSubstoreplusModal = deleteSubstoreplusModal
  },
  changeDeleteZadacaModal(deleteZadacaModal) {
    state.deleteZadacaModal = deleteZadacaModal
  },
  changeDeleteModul1Modal(deleteModul1Modal) {
    state.deleteModul1Modal = deleteModul1Modal
  },
  changeDeleteModul2Modal(deleteModul2Modal) {
    state.deleteModul2Modal = deleteModul2Modal
  },
  changeDeleteModul3Modal(deleteModul3Modal) {
    state.deleteModul3Modal = deleteModul3Modal
  },
  changeDeleteModul4Modal(deleteModul4Modal) {
    state.deleteModul4Modal = deleteModul4Modal
  },
  changeDeleteModul5Modal(deleteModul5Modal) {
    state.deleteModul5Modal = deleteModul5Modal
  },
  changeDeleteProductModal(deleteProductModal) {
    state.deleteProductModal = deleteProductModal
  },
  changeSuccessUpdateRaboten(successUpdateRaboten) {
    state.successUpdateRaboten = successUpdateRaboten
  },
  changeSuccessUpdateZadaca(successUpdateZadaca) {
    state.successUpdateZadaca = successUpdateZadaca
  },
  changeSuccessUpdateModul1(successUpdateModul1) {
    state.successUpdateModul1 = successUpdateModul1
  },
  changeSuccessUpdateModul2(successUpdateModul2) {
    state.successUpdateModul2 = successUpdateModul2
  },
  changeSuccessUpdateModul3(successUpdateModul3) {
    state.successUpdateModul3 = successUpdateModul3
  },
  changeSuccessUpdateModul4(successUpdateModul4) {
    state.successUpdateModul4 = successUpdateModul4
  },
  changeSuccessUpdateModul5(successUpdateModul5) {
    state.successUpdateModul5 = successUpdateModul5
  },
  changeSuccessUpdateOffer(successUpdateOffer) {
    state.successUpdateOffer = successUpdateOffer
  },
  changeSuccessUpdateDogovor(successUpdateDogovor) {
    state.successUpdateDogovor = successUpdateDogovor
  },
  changeSuccessUpdateProforma(successUpdateProforma) {
    state.successUpdateProforma = successUpdateProforma
  },
  changeSuccessUpdateAvansova(successUpdateAvansova) {
    state.successUpdateAvansova = successUpdateAvansova
  },
  changeSuccessUpdateFaktura(successUpdateFaktura) {
    state.successUpdateFaktura = successUpdateFaktura
  },
  changeSuccessUpdateSuboffer(successUpdateSuboffer) {
    state.successUpdateSuboffer = successUpdateSuboffer
  },
  deleteRabotenById(id) {
    state.rabotni = state.rabotni.filter((element) => {
      return element.id != id
    })
    state.rabotni_temp = state.rabotni_temp.filter((element) => {
      return element.id != id
    })
    state.poseshtenia = []
  },
  deleteZadacaById(id) {
    state.zadaci = state.zadaci.filter((element) => {
      return element.id != id
    })
    state.zadaci_temp = state.zadaci_temp.filter((element) => {
      return element.id != id
    })
  },
  deleteModul1ById(id) {
    state.moduli1 = state.moduli1.filter((element) => {
      return element.id != id
    })
    state.moduli1_temp = state.moduli1_temp.filter((element) => {
      return element.id != id
    })
  },
  deleteModul2ById(id) {
    state.moduli2 = state.moduli2.filter((element) => {
      return element.id != id
    })
    state.moduli2_temp = state.moduli2_temp.filter((element) => {
      return element.id != id
    })
  },
  deleteModul3ById(id) {
    state.moduli3 = state.moduli3.filter((element) => {
      return element.id != id
    })
    state.moduli3_temp = state.moduli3_temp.filter((element) => {
      return element.id != id
    })
  },
  deleteModul4ById(id) {
    state.moduli4 = state.moduli4.filter((element) => {
      return element.id != id
    })
    state.moduli4_temp = state.moduli4_temp.filter((element) => {
      return element.id != id
    })
  },
  deleteModul5ById(id) {
    state.moduli5 = state.moduli5.filter((element) => {
      return element.id != id
    })
    state.moduli5_temp = state.moduli5_temp.filter((element) => {
      return element.id != id
    })
  },
  deleteProductById(id) {
    state.suboffers = state.suboffers.filter((element) => {
      return element.id != id
    })
  },
  changeDeletePoseshtenieModal(deletePoseshtenieModal) {
    state.deletePoseshtenieModal = deletePoseshtenieModal
  },
  changeSuccessUpdatePoseshtenie(successUpdatePoseshtenie) {
    state.successUpdatePoseshtenie = successUpdatePoseshtenie
  },
  deletePoseshtenieById(id) {
    state.poseshtenia = state.poseshtenia.filter((element) => {
      return element.id != id
    })
  },
  deleteSubstoreminusById(id) {
    state.sub_storeminusi = state.sub_storeminusi.filter((element) => {
      return element.id != id
    })
  },
  deleteSubstoreplusById(id) {
    state.sub_storeplusi = state.sub_storeplusi.filter((element) => {
      return element.id != id
    })
  },
  getUserById(user_id) {
    return state.users.find((element) => {
      return element.id == user_id
    })
  },
  changeDeleteMessage(deleteMessage) {
    state.deleteMessage = deleteMessage
  },
  deleteMessageById(id) {
    state.messages = state.messages.filter((element) => {
      return element.id != id
    })
  },
  changeDeleteStoreminusModal(deleteStoreminusModal) {
    state.deleteStoreminusModal = deleteStoreminusModal
  },
  changeDeleteStoreplusModal(deleteStoreplusModal) {
    state.deleteStoreplusModal = deleteStoreplusModal
  },
  changeSuccessUpdateStoreminus(successUpdateStoreminus) {
    state.successUpdateStoreminus = successUpdateStoreminus
  },
  changeSuccessUpdateStoreplus(successUpdateStoreplus) {
    state.successUpdateStoreplus = successUpdateStoreplus
  },
  deleteStoreminusById(id) {
    state.storeminusi = state.storeminusi.filter((element) => {
      return element.id != id
    })
    state.storeminusi_temp = state.storeminusi_temp.filter((element) => {
      return element.id != id
    })
  },
  deleteStoreplusById(id) {
    state.storeplusi = state.storeplusi.filter((element) => {
      return element.id != id
    })
    state.storeplusi_temp = state.storeplusi_temp.filter((element) => {
      return element.id != id
    })
  },
  loadData() {
    var data = new FormData()
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/getparams.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.user = JSON.parse(this.response).user
        methods.changePage('Landing')
      }
    }
    xmlhttpro.send(data)
  },
  getOffers() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    data.append('finished_offers', state.finished_offers)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_offers.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.offers = JSON.parse(this.response).offers
        state.offers_temp = JSON.parse(this.response).offers
        state.alloffers = JSON.parse(this.response).alloffers
        state.offer_clienti = JSON.parse(this.response).offer_clienti
      }
    }
    xmlhttpro.send(data)
  },
  getOferti() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_oferti.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.oferti = JSON.parse(this.response).offers
        state.oferti_temp = JSON.parse(this.response).offers
        state.offer_clienti = JSON.parse(this.response).offer_clienti
      }
    }
    xmlhttpro.send(data)
  },
  getDogovori() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_dogovori.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.dogovori = JSON.parse(this.response).dogovori
        state.dogovori_temp = JSON.parse(this.response).dogovori
      }
    }
    xmlhttpro.send(data)
  },
  getProformi() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_proformi.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.proformi = JSON.parse(this.response).proformi
        state.proformi_temp = JSON.parse(this.response).proformi
      }
    }
    xmlhttpro.send(data)
  },
  getAvansovi() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_avansovi.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.avansovi = JSON.parse(this.response).avansovi
        state.avansovi_temp = JSON.parse(this.response).avansovi
      }
    }
    xmlhttpro.send(data)
  },
  getFakturi() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_fakturi.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.fakturi = JSON.parse(this.response).fakturi
        state.fakturi_temp = JSON.parse(this.response).fakturi
      }
    }
    xmlhttpro.send(data)
  },
  getObekti(contragent_id) {
    var data = new FormData()
    data.append('contragent_id', contragent_id)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_obekti.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.obekti = JSON.parse(this.response).obekti
      } else {
        state.obekti = []
      }
    }
    xmlhttpro.send(data)
  },
  getSuboffers(offer_id) {
    var data = new FormData()
    data.append('offer_id', offer_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_suboffers.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.suboffers = JSON.parse(this.response).suboffers
      } else {
        state.suboffers = []
      }
    }
    xmlhttpro.send(data)
  },
  getProduktiMain() {
    var data = new FormData()
    var info = []
    info[0] = 'producti'
    info[1] = 0
    info[2] = state.user.firm_id
    info[3] = state.user.id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/getproductiadd.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      let result = []
      try {
        result = JSON.parse(this.response)
      } catch (err) { }
      if (this.readyState == 4 && result.success == 'success') {
        state.produkti_main = result.data
      }
    }
    xmlhttpro.send(data)
  },

  checkL2(suboffer) {
    var data = new FormData()
    data.append('products_code', suboffer.products_code)
    data.append('l', suboffer.l)
    data.append('h', suboffer.h)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/check_l2.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (JSON.parse(this.response).success == 'success') {
          methods.saveSubOffer(suboffer)
        } else {
          alert('Надвишавате стойностите за L/H')
        }
      }
    }
    xmlhttpro.send(data)
  },
  getDds() {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_dds.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.ddsfirm = JSON.parse(this.response).ddsfirm
      } else {
        state.ddsfirm = []
      }
    }
    xmlhttpro.send(data)
  },
  getStatusi() {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_statusi.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.statusi = JSON.parse(this.response).statusi
      } else {
        state.statusi = []
      }
    }
    xmlhttpro.send(data)
  },
  getShabloni() {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_shabloni.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.shabloni = JSON.parse(this.response).shabloni
      } else {
        state.shabloni = []
      }
    }
    xmlhttpro.send(data)
  },
  getOtclienti(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'otklient')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.otclienti = JSON.parse(this.response).result
      } else {
        state.otclienti = []
      }
    }
    xmlhttpro.send(data)
  },
  getDocPoseshtenie(poseshtenie_id) {
    var data = new FormData()
    data.append('poseshtenie_id', poseshtenie_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_doc_poseshtenia.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.doc_poseshtenia = JSON.parse(this.response).result
      } else {
        state.doc_poseshtenia = []
      }
    }
    xmlhttpro.send(data)
  },
  getDocPoseshtenieView() {
    var data = new FormData()
    data.append('offer_id', state.current_dashboard_offer)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_doc_poseshtenia_all.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.doc_poseshtenia_view = JSON.parse(this.response).result
      } else {
        state.doc_poseshtenia_view = []
      }
    }
    xmlhttpro.send(data)
  },
  deleteClient(client_id, file, offer_id) {
    var data = new FormData()
    data.append('id', client_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'otklient')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteClientById(client_id)
        state.deleteClientModal = false
      }
    }
    xmlhttpro.send(data)
  },
  deleteDocPoseshtenie(poseshtenie_id, file) {
    var data = new FormData()
    data.append('id', poseshtenie_id)
    data.append('sub_poseshtenie_id', state.current_poseshtenie_id)
    data.append('file', file)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/delete_doc_poseshtenie.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteDocPoseshtenieById(poseshtenie_id)
        state.deleteDocPoseshtenieModal = false
      }
    }
    xmlhttpro.send(data)
  },
  saveClient(client_id, file, offer_id) {
    var data = new FormData()
    let otclient = {}
    if (client_id != 0) {
      otclient = state.otclienti.find((element) => element.id == client_id)
    } else {
      otclient = {
        id: client_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', otclient.id)
    data.append('offer_id', offer_id)
    data.append('filename', otclient.file)
    data.append('description', otclient.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateClient(true)
      } else {
        methods.changeSuccessUpdateClient(false)
      }
    }
    xmlhttpro.send(data)
  },
  uploadFile(files, offer_id, type) {
    var data = new FormData()
    Object.entries(files).forEach((element) => {
      const [key, value] = element
      data.append(key, value)
    })
    if (type == 'snimki') {
      var xmlhttpro = createCORSRequest(
        'POST',
        '/function/submit_snimki.php?oid=' +
        offer_id +
        '&guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
      )
    } else {
      var xmlhttpro = createCORSRequest(
        'POST',
        '/function/submit_doc.php?oid=' +
        offer_id +
        '&doc=' +
        type +
        '&guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
      )
    }
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (type == 'otklient') {
          methods.getOtclienti(state.current_dashboard_offer)
        }
        if (type == 'zapitvane') {
          methods.getZapitvane(state.current_dashboard_offer)
        }
        if (type == 'odostavcik') {
          methods.getOtgovori(state.current_dashboard_offer)
        }
        if (type == 'oferti') {
          methods.getEoffers(state.current_dashboard_offer)
        }
        if (type == 'pdogovor') {
          methods.getPdogovori(state.current_dashboard_offer)
        }
        if (type == 'dds') {
          methods.getDdsta(state.current_dashboard_offer)
        }
        if (type == 'poffer') {
          methods.getPoffers(state.current_dashboard_offer)
        }
        if (type == 'casti') {
          methods.getCasti(state.current_dashboard_offer)
        }
        if (type == 'cf') {
          methods.getPoracki(state.current_dashboard_offer)
        }
        if (type == 'pp') {
          methods.getPps(state.current_dashboard_offer)
        }
        if (type == 'ppr') {
          methods.getPprs(state.current_dashboard_offer)
        }
        if (type == 'snimki') {
          methods.getSnimki(state.current_dashboard_offer)
        }
        if (type == 'fakturip') {
          methods.getFakturip(state.current_dashboard_offer)
        }
      }
    }
    xmlhttpro.send(data)
  },
  uploadFileDocPoseshtenie(files, poseshtenie_id) {
    var data = new FormData()
    Object.entries(files).forEach((element) => {
      const [key, value] = element
      data.append(key, value)
    })
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/submit_visit.php?vid=' +
      poseshtenie_id +
      '&guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.getDocPoseshtenie(poseshtenie_id)
      }
    }
    xmlhttpro.send(data)
  },
  getZapitvane(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'zapitvane')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.zapitvania = JSON.parse(this.response).result
      } else {
        state.zapitvania = []
      }
    }
    xmlhttpro.send(data)
  },
  deleteZapitvane(zapitvane_id, file, offer_id) {
    var data = new FormData()
    data.append('id', zapitvane_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'zapitvane')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteZapitvaneById(zapitvane_id)
        state.deleteZapitvaneModal = false
      }
    }
    xmlhttpro.send(data)
  },
  saveZapitvane(zapitvane_id, file, offer_id) {
    var data = new FormData()
    let zapitvane = {}
    if (zapitvane_id != 0) {
      zapitvane = state.zapitvania.find((element) => element.id == zapitvane_id)
    } else {
      zapitvane = {
        id: zapitvane_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', zapitvane.id)
    data.append('offer_id', offer_id)
    data.append('filename', zapitvane.file)
    data.append('description', zapitvane.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateZapitvane(true)
      } else {
        methods.changeSuccessUpdateZapitvane(false)
      }
    }
    xmlhttpro.send(data)
  },
  getOtgovori(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'odostavcik')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.otgovori = JSON.parse(this.response).result
      } else {
        state.otgovori = []
      }
    }
    xmlhttpro.send(data)
  },
  deleteOtgovor(otgovor_id, file, offer_id) {
    var data = new FormData()
    data.append('id', otgovor_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'odostavcik')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteOtgovorById(otgovor_id)
        state.deleteOtgovorModal = false
      }
    }
    xmlhttpro.send(data)
  },
  saveOtgovor(otgovor_id, file, offer_id) {
    var data = new FormData()
    let otgovor = {}
    if (otgovor_id != 0) {
      otgovor = state.otgovori.find((element) => element.id == otgovor_id)
    } else {
      otgovor = {
        id: otgovor_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', otgovor.id)
    data.append('offer_id', offer_id)
    data.append('filename', otgovor.file)
    data.append('description', otgovor.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateOtgovor(true)
      } else {
        methods.changeSuccessUpdateOtgovor(false)
      }
    }
    xmlhttpro.send(data)
  },
  getEoffers(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'oferti')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.eoffers = JSON.parse(this.response).result
      } else {
        state.eoffers = []
      }
    }
    xmlhttpro.send(data)
  },
  deleteEoffer(eoffer_id, file, offer_id) {
    var data = new FormData()
    data.append('id', eoffer_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'oferti')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteEofferById(eoffer_id)
        state.deleteEofferModal = false
      }
    }
    xmlhttpro.send(data)
  },
  saveEoffer(eoffer_id, file, offer_id) {
    var data = new FormData()
    let eoffer = {}
    if (eoffer_id != 0) {
      eoffer = state.eoffers.find((element) => element.id == eoffer_id)
    } else {
      eoffer = {
        id: eoffer_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', eoffer.id)
    data.append('offer_id', eoffer_id)
    data.append('filename', eoffer.file)
    data.append('description', eoffer.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateEoffer(true)
      } else {
        methods.changeSuccessUpdateEoffer(false)
      }
    }
    xmlhttpro.send(data)
  },
  getPdogovori(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'pdogovor')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.pdogovori = JSON.parse(this.response).result
      } else {
        state.pdogovori = []
      }
    }
    xmlhttpro.send(data)
  },
  deletePdogovor(pdogovor_id, file, offer_id) {
    var data = new FormData()
    data.append('id', pdogovor_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'pdogovor')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deletePdogovorById(pdogovor_id)
        state.deletePdogovorModal = false
      }
    }
    xmlhttpro.send(data)
  },
  savePdogovor(pdogovor_id, file, offer_id) {
    var data = new FormData()
    let pdogovor = {}
    if (pdogovor_id != 0) {
      pdogovor = state.pdogovori.find((element) => element.id == pdogovor_id)
    } else {
      pdogovor = {
        id: pdogovor_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', pdogovor.id)
    data.append('offer_id', pdogovor_id)
    data.append('filename', pdogovor.file)
    data.append('description', pdogovor.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdatePdogovor(true)
      } else {
        methods.changeSuccessUpdatePdogovor(false)
      }
    }
    xmlhttpro.send(data)
  },
  getDdsta(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'dds')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.ddsta = JSON.parse(this.response).result
      } else {
        state.ddsta = []
      }
    }
    xmlhttpro.send(data)
  },
  deleteDds(dds_id, file, offer_id) {
    var data = new FormData()
    data.append('id', dds_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'dds')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteDdsById(dds_id)
        state.deleteDdsModal = false
      }
    }
    xmlhttpro.send(data)
  },
  saveDds(dds_id, file, offer_id) {
    var data = new FormData()
    let dds = {}
    if (dds_id != 0) {
      dds = state.ddsta.find((element) => element.id == dds_id)
    } else {
      dds = {
        id: dds_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', dds.id)
    data.append('offer_id', dds_id)
    data.append('filename', dds.file)
    data.append('description', dds.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateDds(true)
      } else {
        methods.changeSuccessUpdateDds(false)
      }
    }
    xmlhttpro.send(data)
  },
  getPoffers(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'poffer')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.poffers = JSON.parse(this.response).result
      } else {
        state.poffers = []
      }
    }
    xmlhttpro.send(data)
  },
  deletePoffer(poffer_id, file, offer_id) {
    var data = new FormData()
    data.append('id', poffer_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'poffer')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deletePofferById(poffer_id)
        state.deletePofferModal = false
      }
    }
    xmlhttpro.send(data)
  },
  savePoffer(poffer_id, file, offer_id) {
    var data = new FormData()
    let poffer = {}
    if (poffer_id != 0) {
      poffer = state.poffers.find((element) => element.id == poffer_id)
    } else {
      poffer = {
        id: poffer_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', poffer.id)
    data.append('offer_id', poffer_id)
    data.append('filename', poffer.file)
    data.append('description', poffer.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdatePoffer(true)
      } else {
        methods.changeSuccessUpdatePoffer(false)
      }
    }
    xmlhttpro.send(data)
  },
  getCasti(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'casti')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.casti = JSON.parse(this.response).result
      } else {
        state.casti = []
      }
    }
    xmlhttpro.send(data)
  },
  deleteCast(cast_id, file, offer_id) {
    var data = new FormData()
    data.append('id', cast_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'casti')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteCastById(cast_id)
        state.deleteCastModal = false
      }
    }
    xmlhttpro.send(data)
  },
  saveCast(cast_id, file, offer_id) {
    var data = new FormData()
    let cast = {}
    if (cast_id != 0) {
      cast = state.casti.find((element) => element.id == cast_id)
    } else {
      cast = {
        id: cast_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', cast.id)
    data.append('offer_id', cast_id)
    data.append('filename', cast.file)
    data.append('description', cast.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateCast(true)
      } else {
        methods.changeSuccessUpdateCast(false)
      }
    }
    xmlhttpro.send(data)
  },
  getPoracki(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'poracki')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.poracki = JSON.parse(this.response).result
      } else {
        state.poracki = []
      }
    }
    xmlhttpro.send(data)
  },
  deletePoracka(poracka_id, file, offer_id) {
    var data = new FormData()
    data.append('id', poracka_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'poracki')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deletePorackaById(poracka_id)
        state.deletePorackaModal = false
      }
    }
    xmlhttpro.send(data)
  },
  savePoracka(poracka_id, file, offer_id) {
    var data = new FormData()
    let poracka = {}
    if (poracka_id != 0) {
      poracka = state.poracki.find((element) => element.id == poracka_id)
    } else {
      poracka = {
        id: poracka_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', poracka.id)
    data.append('offer_id', poracka_id)
    data.append('filename', poracka.file)
    data.append('description', poracka.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdatePoracka(true)
      } else {
        methods.changeSuccessUpdatePoracka(false)
      }
    }
    xmlhttpro.send(data)
  },
  getPps(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'pp')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.pps = JSON.parse(this.response).result
      } else {
        state.pps = []
      }
    }
    xmlhttpro.send(data)
  },
  deletePp(pp_id, file, offer_id) {
    var data = new FormData()
    data.append('id', pp_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'pp')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deletePpById(pp_id)
        state.deletePpModal = false
      }
    }
    xmlhttpro.send(data)
  },
  savePp(pp_id, file, offer_id) {
    var data = new FormData()
    let pp = {}
    if (pp_id != 0) {
      pp = state.pps.find((element) => element.id == pp_id)
    } else {
      pp = {
        id: pp_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', pp.id)
    data.append('offer_id', pp_id)
    data.append('filename', pp.file)
    data.append('description', pp.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdatePp(true)
      } else {
        methods.changeSuccessUpdatePp(false)
      }
    }
    xmlhttpro.send(data)
  },
  getPprs(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'ppr')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.pprs = JSON.parse(this.response).result
      } else {
        state.pprs = []
      }
    }
    xmlhttpro.send(data)
  },
  deletePpr(ppr_id, file, offer_id) {
    var data = new FormData()
    data.append('id', ppr_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'ppr')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deletePprById(ppr_id)
        state.deletePprModal = false
      }
    }
    xmlhttpro.send(data)
  },
  savePpr(ppr_id, file, offer_id) {
    var data = new FormData()
    let ppr = {}
    if (ppr_id != 0) {
      ppr = state.pprs.find((element) => element.id == ppr_id)
    } else {
      ppr = {
        id: ppr_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', ppr.id)
    data.append('offer_id', ppr_id)
    data.append('filename', ppr.file)
    data.append('description', ppr.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdatePpr(true)
      } else {
        methods.changeSuccessUpdatePpr(false)
      }
    }
    xmlhttpro.send(data)
  },
  getSnimki(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'snimki')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.snimki = JSON.parse(this.response).result
      } else {
        state.snimki = []
      }
    }
    xmlhttpro.send(data)
  },
  deleteSnimka(snimka_id, file, offer_id) {
    var data = new FormData()
    data.append('id', snimka_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'snimki')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteSnimkaById(snimka_id)
        state.deleteSnimkaModal = false
      }
    }
    xmlhttpro.send(data)
  },
  getFakturip(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'fakturip')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.fakturip = JSON.parse(this.response).result
      } else {
        state.fakturip = []
      }
    }
    xmlhttpro.send(data)
  },
  deleteFakturap(fakturap_id, file, offer_id) {
    var data = new FormData()
    data.append('id', fakturap_id)
    data.append('file', file)
    data.append('offer_id', offer_id)
    data.append('type', 'fakturip')
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/delete_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteFakturapById(fakturap_id)
        state.deleteFakturapModal = false
      }
    }
    xmlhttpro.send(data)
  },
  saveFakturap(fakturap_id, file, offer_id) {
    var data = new FormData()
    let fakturap = {}
    if (fakturap_id != 0) {
      fakturap = state.fakturip.find((element) => element.id == fakturap_id)
    } else {
      fakturap = {
        id: fakturap_id,
        offer_id: offer_id,
        file: file,
        description: '',
      }
    }
    data.append('id', fakturap.id)
    data.append('offer_id', fakturap_id)
    data.append('filename', fakturap.file)
    data.append('description', fakturap.description)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/save_doc.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateFakturap(true)
      } else {
        methods.changeSuccessUpdateFakturap(false)
      }
    }
    xmlhttpro.send(data)
  },
  getRabotni() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_rabotni.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.rabotni = JSON.parse(this.response).rabotni
        state.rabotni_temp = JSON.parse(this.response).rabotni
      }
    }
    xmlhttpro.send(data)
  },
  getZadaci() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest('POST', '/function/mobile/get_zadaci.php')
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.zadaci = JSON.parse(this.response).zadaci
        state.zadaci_temp = JSON.parse(this.response).zadaci
      }
    }
    xmlhttpro.send(data)
  },
  getModuli1() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_moduli1.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.moduli1 = JSON.parse(this.response).moduli1
        state.moduli1_temp = JSON.parse(this.response).moduli1
      }
    }
    xmlhttpro.send(data)
  },
  getModuli2() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_moduli2.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.moduli2 = JSON.parse(this.response).moduli2
        state.moduli2_temp = JSON.parse(this.response).moduli2
      }
    }
    xmlhttpro.send(data)
  },
  getModuli3() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_moduli3.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.moduli3 = JSON.parse(this.response).moduli3
        state.moduli3_temp = JSON.parse(this.response).moduli3
      }
    }
    xmlhttpro.send(data)
  },
  getModuli4() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_moduli4.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.moduli4 = JSON.parse(this.response).moduli4
        state.moduli4_temp = JSON.parse(this.response).moduli4
      }
    }
    xmlhttpro.send(data)
  },
  getModuli5() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_moduli5.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.moduli5 = JSON.parse(this.response).moduli5
        state.moduli5_temp = JSON.parse(this.response).moduli5
      }
    }
    xmlhttpro.send(data)
  },
  saveRaboten(raboten_id) {
    var data = new FormData()
    var info = []
    if (raboten_id > 0) {
      const raboten = state.rabotni_temp.find(
        (element) => element.id == raboten_id
      )
      info[0] = 'SAVE'
      info[1] = raboten_id
      info[2] = state.user.firm_id
      info[3] = raboten.dateon
      info[4] = raboten.sastavil_id
      info[5] = raboten.isdriver
      info[6] = raboten.mps_regnomer_id
      info[7] = raboten.cena_gorivo
      info[8] = raboten.avans
      info[9] = raboten.bonus
    } else {
      info[0] = 'SAVE'
      info[1] = 0
      info[2] = state.user.firm_id
      info[3] = moment().format()
      info[4] = state.user.id
      info[5] = 0
      info[6] = 0
      info[7] = 0.0
      info[8] = 0.0
      info[9] = 0.0
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/poseshtenia.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (raboten_id > 0) {
          methods.changeSuccessUpdateRaboten(true)
        } else {
          const raboten_id = JSON.parse(this.response).newid
          methods.getRabotni()
          methods.changeRabotni(raboten_id)
          methods.toggleRabotniSidebar()
        }
      } else {
        methods.changeSuccessUpdateRaboten(false)
      }
    }
    xmlhttpro.send(data)
  },
  deleteRaboten(raboten_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = raboten_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/poseshtenia.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteRabotenById(raboten_id)
        state.deleteRabotenModal = false
        state.current_raboten_id = state.rabotni[0] ? state.rabotni[0].id : 0
        methods.toggleRabotniSidebar()
        methods.getPoseshtenia(state.current_raboten_id)
      }
    }
    xmlhttpro.send(data)
  },
  getPoseshtenia(raboten_id) {
    var data = new FormData()
    data.append('pid', raboten_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_poseshtenia.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.poseshtenia = JSON.parse(this.response).poseshtenia
      }
    }
    xmlhttpro.send(data)
  },
  savePoseshtenie(poseshtenie) {
    var data = new FormData()
    var info = []
    info[0] = 'SAVE'
    if (parseInt(poseshtenie.id) > 0) {
      info[1] = poseshtenie.id
    } else {
      info[1] = 0
    }
    info[2] = state.alloffers.find(
      (element) => element.idnomber == poseshtenie.offer_id
    ).id
    info[3] = poseshtenie.raboten_id
    info[4] = poseshtenie.tragvane
    info[5] = poseshtenie.pristigane
    info[6] = poseshtenie.kmtragvane
    info[7] = poseshtenie.kmpristigane
    info[8] = poseshtenie.address_tragvane
    info[9] = poseshtenie.address_pristigane
    info[10] = poseshtenie.zapocvane
    info[11] = poseshtenie.priklucvane
    info[12] = poseshtenie.address_pocivka
    info[13] = poseshtenie.pocivka1
    info[14] = poseshtenie.pocivka2
    info[15] = poseshtenie.pocivka3
    info[16] = poseshtenie.faktura
    info[17] = poseshtenie.rabota
    info[18] = poseshtenie.starttime1
    info[19] = poseshtenie.stoptime1
    info[20] = poseshtenie.starttime2
    info[21] = poseshtenie.stoptime2
    info[22] = poseshtenie.starttime3
    info[23] = poseshtenie.stoptime3
    info[24] = poseshtenie.zapocvane_status
    info[25] = poseshtenie.priklucvane_status
    info[26] = poseshtenie.starttime1_status
    info[27] = poseshtenie.stoptime1_status
    info[28] = poseshtenie.starttime2_status
    info[29] = poseshtenie.stoptime2_status
    info[30] = poseshtenie.starttime3_status
    info[31] = poseshtenie.stoptime3_status
    info[32] = poseshtenie.address_tragvane_lat
    info[33] = poseshtenie.address_tragvane_long
    info[34] = poseshtenie.address_pristigane_lat
    info[35] = poseshtenie.address_pristigane_long
    info[36] = poseshtenie.address_pocivka_lat
    info[37] = poseshtenie.address_pocivka_long
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/subposeshtenia.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (parseInt(poseshtenie.id) > 0) {
          methods.changeSuccessUpdatePoseshtenie(true)
        } else {
          const poseshtenie_id = JSON.parse(this.response).newid
          methods.getPoseshtenia(state.current_raboten_id)
          methods.changePoseshtenie(poseshtenie_id)
        }
      } else {
        methods.changeSuccessUpdatePoseshtenie(false)
      }
    }
    xmlhttpro.send(data)
  },
  deletePoseshtenie(poseshtenie_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = poseshtenie_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/subposeshtenia.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deletePoseshtenieById(poseshtenie_id)
        state.deletePoseshtenieModal = false
        state.current_poseshtenie_id = state.poseshtenia[0]
          ? state.poseshtenia[0].id
          : 0
      }
    }
    xmlhttpro.send(data)
  },
  getStreetAddressFrom(lat, long, address) {
    var xmlhttpro = createCORSRequest(
      'GET',
      'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
      lat +
      ',' +
      long +
      '&key=AIzaSyBdHJScZ3v012SHvqhMZWrT-OV1UgGnvdc'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (this.readyState == 4) {
        const results = JSON.parse(this.response).results
        const result_address = results.find(
          (element) => element.types[0] == 'street_address'
        ).formatted_address
        if (address == 'tragvane') {
          state.poseshtenia.find(
            (element) => element.id == state.current_poseshtenie_id
          ).address_tragvane = result_address.replace(/['"]+/g, '')
        }
        if (address == 'pristigane') {
          state.poseshtenia.find(
            (element) => element.id == state.current_poseshtenie_id
          ).address_pristigane = result_address.replace(/['"]+/g, '')
        }
      }
    }
    xmlhttpro.send()
  },
  saveZadaca(zadaca_id) {
    var data = new FormData()
    var info = []
    if (zadaca_id > 0) {
      const zadaca = state.zadaci_temp.find(
        (element) => element.id == zadaca_id
      )
      info[0] = 'SAVE'
      info[1] = zadaca_id
      info[2] = zadaca.subject
      info[3] = zadaca.description
      info[4] = moment(zadaca.start).format('YYYY-MM-DD')
      info[5] = moment(zadaca.stop).format('YYYY-MM-DD')
      info[6] = zadaca.priority
      info[7] = zadaca.status
      info[8] = zadaca.note
      info[9] = zadaca.created_by
      info[10] = zadaca.firm_id
      info[11] = zadaca.currentmembers
      info[12] = moment(zadaca.start).format('HH:mm:ss')
      info[13] = moment(zadaca.stop).format('HH:mm:ss')
      info[14] = zadaca.offer_id
      info[15] = zadaca.ending
      info[16] = zadaca.endingtime
      info[17] = zadaca.reminder
      info[18] = state.user.id
    } else {
      info[0] = 'SAVE'
      info[1] = 0
      info[2] = ''
      info[3] = ''
      info[4] = moment().format('YYYY-MM-DD')
      info[5] = moment().add(5, 'days').format('YYYY-MM-DD')
      info[6] = 1
      info[7] = 0
      info[8] = ''
      info[9] = state.user.id
      info[10] = state.user.firm_id
      info[11] = []
      info[12] = moment().format('HH:mm:ss')
      info[13] = moment().format('HH:mm:ss')
      info[14] = 0
      info[15] = '1970-01-01'
      info[16] = moment().format('HH:mm:ss')
      info[17] = 10
      info[18] = state.user.id
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/tasks.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (zadaca_id > 0) {
          methods.changeSuccessUpdateZadaca(true)
        } else {
          const zadaca_id = JSON.parse(this.response).newid
          methods.getZadaci()
          methods.changeZadaci(zadaca_id)
          methods.toggleZadaciSidebar()
        }
      } else {
        methods.changeSuccessUpdateZadaca(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveModul1(modul1_id) {
    var data = new FormData()
    var info = []
    if (modul1_id > 0) {
      const modul1 = state.moduli1_temp.find(
        (element) => element.id == modul1_id
      )
      info[0] = 'SAVE'
      info[1] = modul1_id
      info[2] = modul1.firm_id
      info[3] = modul1.text1
      info[4] = modul1.text2
      info[5] = modul1.name
      info[6] = modul1.offer_id
      info[7] = modul1.client_id
      info[8] = moment(modul1.dateon).format('YYYY-MM-DD')
      info[9] = modul1.info1
      info[10] = modul1.user_id
      info[11] = modul1.tablica_id
      info[12] = modul1.info1_id
      info[13] = modul1.info2_id
      info[14] = modul1.sastavil_id
      info[15] = modul1.status_id
      info[16] = modul1.offernomber_id
      info[17] = modul1.creator_id
      info[18] = modul1.nomber
      info[19] = modul1.statusi_id
    } else {
      info[0] = 'SAVE'
      info[1] = 0
      info[2] = state.user.firm_id
      info[3] = ''
      info[4] = ''
      info[5] = ''
      info[6] = 0
      info[7] = state.offer_clienti[0]?.id
      info[8] = moment().format('YYYY-MM-DD')
      info[9] = ''
      info[10] = state.user.id
      info[11] = 0
      info[12] = 0
      info[13] = 0
      info[14] = 0
      info[15] = 0
      info[16] = 0
      info[17] = state.user.id
      info[18] = ''
      info[19] = 0
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul1.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (modul1_id > 0) {
          methods.changeSuccessUpdateModul1(true)
        } else {
          const new_modul1_id = JSON.parse(this.response).newid
          methods.getModuli1()
          methods.changeModul1(new_modul1_id)
          methods.closeModul1Sidebar()
        }
      } else {
        methods.changeSuccessUpdateModul1(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveModul2(modul2_id) {
    var data = new FormData()
    var info = []
    if (modul2_id > 0) {
      const modul2 = state.moduli2_temp.find(
        (element) => element.id == modul2_id
      )
      info[0] = 'SAVE'
      info[1] = modul2_id
      info[2] = modul2.firm_id
      info[3] = modul2.text1
      info[4] = modul2.text2
      info[5] = modul2.name
      info[6] = modul2.offer_id
      info[7] = modul2.client_id
      info[8] = moment(modul2.dateon).format('YYYY-MM-DD')
      info[9] = modul2.info1
      info[10] = modul2.user_id
      info[11] = modul2.tablica_id
      info[12] = modul2.info1_id
      info[13] = modul2.info2_id
      info[14] = modul2.sastavil_id
      info[15] = modul2.status_id
      info[16] = modul2.offernomber_id
      info[17] = modul2.info2
      info[18] = modul2.creator_id
      info[19] = modul2.nomber
      info[20] = modul2.statusi_id
    } else {
      info[0] = 'SAVE'
      info[1] = 0
      info[2] = state.user.firm_id
      info[3] = ''
      info[4] = ''
      info[5] = ''
      info[6] = 0
      info[7] = state.offer_clienti[0]?.id
      info[8] = moment().format('YYYY-MM-DD')
      info[9] = ''
      info[10] = state.user.id
      info[11] = 0
      info[12] = 0
      info[13] = 0
      info[14] = 0
      info[15] = 0
      info[16] = 0
      info[17] = ''
      info[18] = state.user.id
      info[19] = ''
      info[20] = 0
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul2.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (modul2_id > 0) {
          methods.changeSuccessUpdateModul2(true)
        } else {
          const new_modul2_id = JSON.parse(this.response).newid
          methods.getModuli2()
          methods.changeModul2(new_modul2_id)
          methods.closeModul2Sidebar()
        }
      } else {
        methods.changeSuccessUpdateModul2(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveModul3(modul3_id) {
    var data = new FormData()
    var info = []
    if (modul3_id > 0) {
      const modul3 = state.moduli3_temp.find(
        (element) => element.id == modul3_id
      )
      info[0] = 'SAVE'
      info[1] = modul3_id
      info[2] = modul3.firm_id
      info[3] = modul3.text1
      info[4] = modul3.text2
      info[5] = modul3.name
      info[6] = modul3.offer_id
      info[7] = modul3.client_id
      info[8] = moment(modul3.dateon).format('YYYY-MM-DD')
      info[9] = modul3.info1
      info[10] = modul3.user_id
      info[11] = modul3.tablica_id
      info[12] = modul3.info1_id
      info[13] = modul3.info2_id
      info[14] = modul3.sastavil_id
      info[15] = modul3.status_id
      info[16] = modul3.offernomber_id
      info[17] = modul3.info2
      info[18] = modul3.info3
      info[19] = modul3.creator_id
      info[20] = modul3.nomber
      info[21] = modul3.statusi_id
    } else {
      info[0] = 'SAVE'
      info[1] = 0
      info[2] = state.user.firm_id
      info[3] = ''
      info[4] = ''
      info[5] = ''
      info[6] = 0
      info[7] = state.offer_clienti[0]?.id
      info[8] = moment().format('YYYY-MM-DD')
      info[9] = ''
      info[10] = state.user.id
      info[11] = 0
      info[12] = 0
      info[13] = 0
      info[14] = 0
      info[15] = 0
      info[16] = 0
      info[17] = ''
      info[18] = ''
      info[19] = state.user.id
      info[20] = ''
      info[21] = 0
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul3.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (modul3_id > 0) {
          methods.changeSuccessUpdateModul3(true)
        } else {
          const new_modul3_id = JSON.parse(this.response).newid
          methods.getModuli3()
          methods.changeModul3(new_modul3_id)
          methods.closeModul3Sidebar()
        }
      } else {
        methods.changeSuccessUpdateModul3(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveModul4(modul4_id) {
    var data = new FormData()
    var info = []
    if (modul4_id > 0) {
      const modul4 = state.moduli4_temp.find(
        (element) => element.id == modul4_id
      )
      info[0] = 'SAVE'
      info[1] = modul4_id
      info[2] = modul4.firm_id
      info[3] = modul4.text1
      info[4] = modul4.text2
      info[5] = modul4.name
      info[6] = modul4.offer_id
      info[7] = modul4.client_id
      info[8] = moment(modul4.dateon).format('YYYY-MM-DD')
      info[9] = modul4.info1
      info[10] = modul4.user_id
      info[11] = modul4.tablica_id
      info[12] = modul4.info1_id
      info[13] = modul4.info2_id
      info[14] = modul4.sastavil_id
      info[15] = modul4.status_id
      info[16] = modul4.offernomber_id
      info[17] = modul4.info2
      info[18] = modul4.info3
      info[19] = modul4.info4
      info[20] = modul4.creator_id
      info[21] = modul4.nomber
      info[22] = modul4.statusi_id
    } else {
      info[0] = 'SAVE'
      info[1] = 0
      info[2] = state.user.firm_id
      info[3] = ''
      info[4] = ''
      info[5] = ''
      info[6] = 0
      info[7] = state.offer_clienti[0]?.id
      info[8] = moment().format('YYYY-MM-DD')
      info[9] = ''
      info[10] = state.user.id
      info[11] = 0
      info[12] = 0
      info[13] = 0
      info[14] = 0
      info[15] = 0
      info[16] = 0
      info[17] = ''
      info[18] = ''
      info[19] = ''
      info[20] = state.user.id
      info[21] = ''
      info[22] = 0
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul4.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (modul4_id > 0) {
          methods.changeSuccessUpdateModul4(true)
        } else {
          const new_modul4_id = JSON.parse(this.response).newid
          methods.getModuli4()
          methods.changeModul4(new_modul4_id)
          methods.closeModul4Sidebar()
        }
      } else {
        methods.changeSuccessUpdateModul4(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveModul5(modul5_id) {
    var data = new FormData()
    var info = []
    if (modul5_id > 0) {
      const modul5 = state.moduli5_temp.find(
        (element) => element.id == modul5_id
      )
      info[0] = 'SAVE'
      info[1] = modul5_id
      info[2] = modul5.firm_id
      info[3] = modul5.text1
      info[4] = modul5.text2
      info[5] = modul5.name
      info[6] = modul5.offer_id
      info[7] = modul5.client_id
      info[8] = moment(modul5.dateon).format('YYYY-MM-DD')
      info[9] = modul5.info1
      info[10] = modul5.user_id
      info[11] = modul5.tablica_id
      info[12] = modul5.info1_id
      info[13] = modul5.info2_id
      info[14] = modul5.sastavil_id
      info[15] = modul5.status_id
      info[16] = modul5.offernomber_id
      info[17] = modul5.info2
      info[18] = modul5.info3
      info[19] = modul5.info4
      info[20] = modul5.info5
      info[21] = modul5.creator_id
      info[22] = modul5.nomber
      info[23] = modul5.statusi_id
    } else {
      info[0] = 'SAVE'
      info[1] = 0
      info[2] = state.user.firm_id
      info[3] = ''
      info[4] = ''
      info[5] = ''
      info[6] = 0
      info[7] = state.offer_clienti[0]?.id
      info[8] = moment().format('YYYY-MM-DD')
      info[9] = ''
      info[10] = state.user.id
      info[11] = 0
      info[12] = 0
      info[13] = 0
      info[14] = 0
      info[15] = 0
      info[16] = 0
      info[17] = ''
      info[18] = ''
      info[19] = ''
      info[20] = ''
      info[21] = state.user.id
      info[22] = ''
      info[23] = 0
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul5.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (modul5_id > 0) {
          methods.changeSuccessUpdateModul5(true)
        } else {
          const new_modul5_id = JSON.parse(this.response).newid
          methods.getModuli5()
          methods.changeModul5(new_modul5_id)
          methods.closeModul5Sidebar()
        }
      } else {
        methods.changeSuccessUpdateModul5(false)
      }
    }
    xmlhttpro.send(data)
  },
  deleteZadaca(zadaca_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = zadaca_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/tasks.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteZadacaById(zadaca_id)
        state.deleteZadacaModal = false
        state.current_zadaca_id = state.zadaci[0] ? state.zadaci[0].id : 0
        methods.toggleZadaciSidebar()
      }
    }
    xmlhttpro.send(data)
  },
  deleteModul1(modul1_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = modul1_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul1.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteModul1ById(modul1_id)
        state.deleteModul1Modal = false
        state.current_modul1_id = state.moduli1[0] ? state.moduli1[0].id : 0
        methods.toggleModul1Sidebar()
      }
    }
    xmlhttpro.send(data)
  },
  deleteModul2(modul2_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = modul2_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul2.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteModul2ById(modul2_id)
        state.deleteModul2Modal = false
        state.current_modul2_id = state.moduli2[0] ? state.moduli2[0].id : 0
        methods.toggleModul2Sidebar()
      }
    }
    xmlhttpro.send(data)
  },
  deleteModul3(modul3_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = modul3_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul3.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteModul3ById(modul3_id)
        state.deleteModul3Modal = false
        state.current_modul3_id = state.moduli3[0] ? state.moduli3[0].id : 0
        methods.toggleModul3Sidebar()
      }
    }
    xmlhttpro.send(data)
  },
  deleteModul4(modul4_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = modul4_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul4.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteModul4ById(modul4_id)
        state.deleteModul4Modal = false
        state.current_modul4_id = state.moduli4[0] ? state.moduli4[0].id : 0
        methods.toggleModul4Sidebar()
      }
    }
    xmlhttpro.send(data)
  },
  deleteModul5(modul5_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = modul5_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/modul5.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteModul5ById(modul5_id)
        state.deleteModul5Modal = false
        state.current_modul5_id = state.moduli5[0] ? state.moduli5[0].id : 0
        methods.toggleModul5Sidebar()
      }
    }
    xmlhttpro.send(data)
  },
  deleteProduct(suboffer_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[13] = suboffer_id
    info[47] = state.user.id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/suboffer.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteProductById(suboffer_id)
        state.deleteProductModal = false
        state.current_suboffer = 0
      }
    }
    xmlhttpro.send(data)
  },
  getMessages() {
    var data = new FormData()
    data.append('token', '2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z')
    data.append('user_id', state.user.id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/get_messages.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.messages = JSON.parse(this.response).messages
        state.users = JSON.parse(this.response).users
        state.user_gravatar = JSON.parse(this.response).user_gravatar
      }
    }
    xmlhttpro.send(data)
  },
  deleteMessage(message_id) {
    var data = new FormData()
    data.append('token', '2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z')
    data.append('id', message_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/delete_message.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteMessageById(message_id)
        state.deleteMessage = false
      }
    }
    xmlhttpro.send(data)
  },
  createMessage(from_user_id, to_user_id, body, offer_id) {
    var data = new FormData()
    data.append('token', '2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z')
    data.append('from_user_id', from_user_id)
    data.append('to_user_id', to_user_id)
    data.append('body', body)
    data.append('offer_id', offer_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/create_message.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        const newMessage = {
          id: JSON.parse(this.response).id,
          firm_id: JSON.parse(this.response).firm_id,
          offer_id: JSON.parse(this.response).offer_id,
          offer_idnomber: JSON.parse(this.response).offer_idnomber,
          from_user_id: JSON.parse(this.response).from_user_id,
          to_user_id: JSON.parse(this.response).to_user_id,
          body: JSON.parse(this.response).body,
          status: JSON.parse(this.response).status,
          created_at: JSON.parse(this.response).created_at,
          updated_at: JSON.parse(this.response).updated_at,
        }
        state.messages.splice(0, 0, newMessage)
      }
    }
    xmlhttpro.send(data)
  },
  getStoreminusi() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_storeminusi.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.storeminusi = JSON.parse(this.response).storeminusi
        state.storeminusi_temp = JSON.parse(this.response).storeminusi
        state.clienti = JSON.parse(this.response).clienti
      }
    }
    xmlhttpro.send(data)
  },
  getStoreplusi() {
    var data = new FormData()
    data.append('user_id', state.user.id)
    data.append('firm_id', state.user.firm_id)
    data.append('role', state.user.role)
    // const tekushta_start = state.tekushta.substring(0, 10)
    // const tekushta_end = state.tekushta.substring(14)
    // data.append('tekushta_start', tekushta_start)
    data.append('tekushta_start', state.tekushta_start)
    // data.append('tekushta_end', tekushta_end)
    data.append('tekushta_end', state.tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_storeplusi.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.storeplusi = JSON.parse(this.response).storeplusi
        state.storeplusi_temp = JSON.parse(this.response).storeplusi
        state.dostavcici = JSON.parse(this.response).dostavcici
      }
    }
    xmlhttpro.send(data)
  },
  saveStoreminus(storeminus_id, type) {
    const storeminus = state.storeminusi_temp.find(
      (element) => element.id == storeminus_id
    )
    if (storeminus.contragent_id == 0) {
      alert('Моля изберете клиент!')
      return
    }
    let sid = 0
    if (storeminus_id > 0) {
      sid = storeminus_id
    }
    var data = new FormData()
    var info = []
    info[0] = type
    info[1] = sid
    info[2] = storeminus.dateon
    info[3] = ''
    info[4] = ''
    info[5] = storeminus.contragent_id
    info[6] = state.user.firm_id
    info[7] = state.user.id
    info[8] = storeminus.parvicen
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/storeminus.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (storeminus_id > 0) {
          methods.changeSuccessUpdateStoreminus(true)
        } else {
          const storeminus_id = JSON.parse(this.response).newid
          methods.getStoreminusi()
          methods.changeStoreminusi(storeminus_id)
          methods.toggleStoreminusiSidebar()
        }
      } else {
        methods.changeSuccessUpdateStoreminus(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveStoreplus(storeplus_id, type) {
    const storeplus = state.storeplusi_temp.find(
      (element) => element.id == storeplus_id
    )
    if (storeplus.contragent_id == 0) {
      alert('Моля изберете клиент!')
      return
    }
    let sid = 0
    if (storeplus_id > 0) {
      sid = storeplus_id
    }
    var data = new FormData()
    var info = []
    info[0] = type
    info[1] = sid
    info[2] = storeplus.dateon
    info[3] = ''
    info[4] = ''
    info[5] = storeplus.contragent_id
    info[6] = state.user.firm_id
    info[7] = state.user.id
    info[8] = storeplus.parvicen
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/storeplus.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (storeplus_id > 0) {
          methods.changeSuccessUpdateStoreplus(true)
        } else {
          const storeplus_id = JSON.parse(this.response).newid
          methods.getStoreplusi()
          methods.changeStoreplusi(storeplus_id)
          methods.toggleStoreplusiSidebar()
        }
      } else {
        methods.changeSuccessUpdateStoreplus(false)
      }
    }
    xmlhttpro.send(data)
  },
  getSubStoreminusi(storeminus_id) {
    var data = new FormData()
    data.append('sid', storeminus_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_substoreminusi.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.sub_storeminusi = JSON.parse(this.response).sub_storeminusi
      }
    }
    xmlhttpro.send(data)
  },
  getSubStoreplusi(storeplus_id) {
    var data = new FormData()
    data.append('sid', storeplus_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_substoreplusi.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        state.sub_storeplusi = JSON.parse(this.response).sub_storeplusi
      }
    }
    xmlhttpro.send(data)
  },
  deleteSubstoreminus(substoreminus_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = substoreminus_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/storeminus_edit.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteSubstoreminusById(substoreminus_id)
        state.deleteSubstoreminusModal = false
        state.current_sub_storeminus_id = state.sub_storeminusi[0]
          ? state.sub_storeminusi[0].id
          : 0
      }
    }
    xmlhttpro.send(data)
  },
  deleteSubstoreplus(substoreplus_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = substoreplus_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/storeplus_edit.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.deleteSubstoreplusById(substoreplus_id)
        state.deleteSubstoreplusModal = false
        state.current_sub_storeplus_id = state.sub_storeplusi[0]
          ? state.sub_storeplusi[0].id
          : 0
      }
    }
    xmlhttpro.send(data)
  },
  getProdukti() {
    var data = new FormData()
    var info = []
    info[0] = 'GET'
    info[1] = state.user.firm_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/getproductiaddstoreminus.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      let result = []
      try {
        result = JSON.parse(this.response)
      } catch (err) { }
      if (this.readyState == 4 && result.success == 'success') {
        state.produkti = result.data
      }
    }
    xmlhttpro.send(data)
  },
  getProduktiPlus() {
    var data = new FormData()
    var info = []
    info[0] = 'GET'
    if (state.current_storeplus_id != 0) {
      const storeplus_current = state.storeplusi_temp.find(
        (element) => element.id == state.current_storeplus_id
      )
      info[1] = storeplus_current.contragent_id
    } else {
      info[1] = 0
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/getproductiaddstore.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      let result = []
      try {
        result = JSON.parse(this.response)
      } catch (err) { }
      if (this.readyState == 4 && result.success == 'success') {
        state.produkti_plus = result.data
      }
    }
    xmlhttpro.send(data)
  },
  createSubstoreminus(storeminus_id, code, quantity, price) {
    var data = new FormData()
    var info = []
    info[0] = 'CREATE'
    info[1] = storeminus_id
    info[2] = code
    info[3] = quantity
    info[4] = price
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/storeminus_edit.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.getSubStoreminusi(storeminus_id)
      }
    }
    xmlhttpro.send(data)
  },
  createSubstoreplus(storeplus_id, code, quantity, price, dds) {
    var data = new FormData()
    var info = []
    info[0] = 'CREATE'
    info[1] = storeplus_id
    info[2] = code
    info[3] = quantity
    info[4] = price
    info[5] = dds
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/storeplus_edit.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.getSubStoreplusi(storeplus_id)
      }
    }
    xmlhttpro.send(data)
  },
  saveOffer(offer) {
    var data = new FormData()
    var info = []
    if (offer.id > 0) {
      info[0] = 'SAVE'
      info[1] = offer.id
      info[2] = offer.client_id
      info[3] = offer.dateon
      info[4] = offer.dateto
      info[5] = state.user.id
      info[6] = offer.obekt_id
      info[7] = offer.info1
      info[8] = offer.info2
      info[9] = ''
      info[10] = ''
      info[11] = ''
      info[12] = ''
      info[13] = '/dist/img/products/product_.jpg'
      info[14] = '/dist/img/products/product_.jpg'
      info[15] = '/dist/img/products/product_.jpg'
      info[16] = '/dist/img/products/product_.jpg'
      info[17] = 0
      info[18] = '0.00'
      info[19] = offer.idnomber
      info[20] = state.user.firm_id
      info[21] = state.user.id
      info[22] = ''
      info[23] = offer.dds
      info[24] = offer.status_offer
      info[25] = ''
      info[26] = '0.00'
      info[27] = ''
      info[28] = 0
      info[29] = offer.text1
      info[30] = offer.text2
      info[31] = 1
      info[32] = 1
    } else {
      info[0] = 'SAVE'
      info[1] = offer.id
      info[2] = offer.client_id
      info[3] = moment().format('YYYY-MM-DD HH:mm:ss')
      info[4] = moment().format('YYYY-MM-DD HH:mm:ss')
      info[5] = state.user.id
      info[6] = offer.obekt_id
      info[7] = ''
      info[8] = ''
      info[9] = ''
      info[10] = ''
      info[11] = ''
      info[12] = ''
      info[13] = '/dist/img/products/product_.jpg'
      info[14] = '/dist/img/products/product_.jpg'
      info[15] = '/dist/img/products/product_.jpg'
      info[16] = '/dist/img/products/product_.jpg'
      info[17] = 0
      info[18] = '0.00'
      info[19] = offer.idnomber
      info[20] = state.user.firm_id
      info[21] = state.user.id
      info[22] = ''
      info[23] = offer.dds
      info[24] = offer.status_offer
      info[25] = ''
      info[26] = '0.00'
      info[27] = ''
      info[28] = 0
      info[29] = offer.text1
      info[30] = offer.text2
      info[31] = 1
      info[32] = 1
    }
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/offer.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (offer.id > 0) {
          methods.changeSuccessUpdateOffer(true)
        } else {
          methods.getOferti()
          state.current_oferti = JSON.parse(this.response).newid
          methods.changeSuccessUpdateOffer(false)
        }
      } else {
        methods.changeSuccessUpdateOffer(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveDogovor(dogovor) {
    var data = new FormData()
    var info = []
    info[0] = 'SAVE'
    info[1] = dogovor.id
    info[2] = dogovor.dateon
    info[3] = dogovor.date_avans1
    info[4] = dogovor.price_avans1
    info[5] = dogovor.plashtane_avans1
    info[6] = dogovor.date_avans2
    info[7] = dogovor.price_avans2
    info[8] = dogovor.plashtane_avans2
    info[9] = dogovor.date_avans3
    info[10] = dogovor.price_avans3
    info[11] = dogovor.plashtane_avans3
    info[12] = dogovor.date_ostatak
    info[13] = dogovor.price_ostatak
    info[14] = dogovor.plashtane_ostatak
    info[15] = dogovor.vreme_dostavka
    info[16] = dogovor.kraen_srok_dostavka
    info[17] = dogovor.adress_dostavka
    info[18] = dogovor.date_poracka
    info[19] = dogovor.description
    info[20] = dogovor.price_bezdds
    info[21] = dogovor.dds20
    info[22] = dogovor.dds55
    info[23] = dogovor.price
    info[24] = ''
    info[25] = dogovor.adress_poracka
    info[26] = dogovor.dds10
    info[27] = dogovor.dds21
    info[28] = dogovor.comment
    info[29] = state.user.id
    info[30] = dogovor.description2
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/dogovor.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateDogovor(true)
      } else {
        methods.changeSuccessUpdateDogovor(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveProforma(proforma) {
    var data = new FormData()
    var info = []
    info[0] = 'SAVE'
    info[1] = proforma.id
    info[2] = proforma.dateon
    info[3] = proforma.price
    info[4] = proforma.price_bezdds
    info[5] = proforma.dds_20
    info[6] = proforma.dds_55
    info[7] = proforma.date_avans1
    info[8] = proforma.price_avans1
    info[9] = proforma.plashtane_avans1
    info[10] = proforma.date_avans2
    info[11] = proforma.price_avans2
    info[12] = proforma.plashtane_avans2
    info[13] = proforma.date_avans3
    info[14] = proforma.price_avans3
    info[15] = proforma.plashtane_avans3
    info[16] = proforma.date_ostatak
    info[17] = proforma.price_ostatak
    info[18] = proforma.plashtane_ostatak
    info[19] = proforma.description
    info[20] = proforma.dds10
    info[21] = proforma.dds21
    info[22] = state.user.id
    info[23] = proforma.smetka_id
    info[24] = proforma.other_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/proformi.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateProforma(true)
      } else {
        methods.changeSuccessUpdateProforma(false)
      }
    }
    xmlhttpro.send(data)
  },
  checkPicture(image_url) {
    var http = new XMLHttpRequest()
    http.open('HEAD', image_url, false)
    http.send()
    return http.status != 404
  },
  saveSubOffer(suboffer) {
    if (
      typeof suboffer.price === 'string' ||
      suboffer.price instanceof String
    ) {
      var price = suboffer.price
    } else {
      var price = suboffer.price.toFixed(2)
    }
    var offer_id = state.oferti_temp.find(
      (element) => element.idnomber == state.current_oferti
    ).id
    var newurl =
      '/dist/img/products/product_' +
      suboffer.products_code.slice(3, 6) +
      suboffer.products_code.slice(-4) +
      '.jpg'
    var oldurl = '/dist/img/products/product_.jpg'
    if (methods.checkPicture(newurl)) {
      suboffer.picture_url = newurl
    } else {
      suboffer.picture_url = oldurl
    }
    var data = new FormData()
    var info = []
    info[0] = 'SAVE'
    info[1] = offer_id
    info[2] = suboffer.grupa1
    info[3] = suboffer.grupa2
    info[4] = suboffer.grupa3
    info[5] = suboffer.products_code
    info[6] = suboffer.quantity
    info[7] = suboffer.dds
    info[8] = suboffer.h
    info[9] = suboffer.l
    info[10] = suboffer.p
    info[11] = suboffer.description
    info[12] = suboffer.picture_url
    info[13] = suboffer.id
    info[14] = price
    info[15] = suboffer.picture_is
    info[16] = suboffer.description_is
    info[17] = suboffer.order_id
    info[18] = suboffer.isstat
    info[19] = suboffer.isbroi
    info[20] = suboffer.subproducts_code_1
    info[21] = suboffer.subproducts_code_1_q
    info[22] = suboffer.subproducts_code_1_price
    info[23] = suboffer.subproducts_code_2
    info[24] = suboffer.subproducts_code_2_q
    info[25] = suboffer.subproducts_code_2_price
    info[26] = suboffer.subproducts_code_3
    info[27] = suboffer.subproducts_code_3_q
    info[28] = suboffer.subproducts_code_3_price
    info[29] = suboffer.subproducts_code_4
    info[30] = suboffer.subproducts_code_4_q
    info[31] = suboffer.subproducts_code_4_price
    info[32] = suboffer.subproducts_code_5
    info[33] = suboffer.subproducts_code_5_q
    info[34] = suboffer.subproducts_code_5_price
    info[35] = suboffer.subproducts_code_1_description
    info[36] = suboffer.subproducts_code_2_description
    info[37] = suboffer.subproducts_code_3_description
    info[38] = suboffer.subproducts_code_4_description
    info[39] = suboffer.subproducts_code_5_description
    info[40] = suboffer.zakupnaprice
    info[41] = suboffer.subproducts_code_1_zakupnaprice
    info[42] = suboffer.subproducts_code_2_zakupnaprice
    info[43] = suboffer.subproducts_code_3_zakupnaprice
    info[44] = suboffer.subproducts_code_4_zakupnaprice
    info[45] = suboffer.subproducts_code_5_zakupnaprice
    info[46] = suboffer.otstapka
    info[47] = state.user.id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/suboffer.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        if (suboffer.id == 0) {
          methods.getSuboffers(offer_id)
          state.current_suboffer = 0
          methods.toggleOfferSidebarProduct()
        } else {
          methods.changeSuccessUpdateSuboffer(true)
        }
      } else {
        methods.changeSuccessUpdateSuboffer(false)
      }
    }
    xmlhttpro.send(data)
  },
  cloneSubOffer(suboffer_id) {
    var suboffer = state.suboffers.find((element) => (element.id = suboffer_id))
    var offer_id = state.oferti.find(
      (element) => (element.idnomber = state.current_oferti)
    ).id
    var data = new FormData()
    var info = []
    info[0] = 'CLONE'
    info[1] = offer_id
    info[2] = suboffer.grupa1
    info[3] = suboffer.grupa2
    info[4] = suboffer.grupa3
    info[5] = suboffer.products_code
    info[6] = suboffer.quantity
    info[7] = suboffer.dds
    info[8] = suboffer.h
    info[9] = suboffer.l
    info[10] = suboffer.p
    info[11] = suboffer.description
    info[12] = suboffer.picture_url
    info[13] = suboffer.id
    info[14] = suboffer.price
    info[15] = suboffer.picture_is
    info[16] = suboffer.description_is
    info[17] = suboffer.order_id
    info[18] = suboffer.isstat
    info[19] = suboffer.isbroi
    info[20] = suboffer.subproducts_code_1
    info[21] = suboffer.subproducts_code_1_q
    info[22] = suboffer.subproducts_code_1_price
    info[23] = suboffer.subproducts_code_2
    info[24] = suboffer.subproducts_code_2_q
    info[25] = suboffer.subproducts_code_2_price
    info[26] = suboffer.subproducts_code_3
    info[27] = suboffer.subproducts_code_3_q
    info[28] = suboffer.subproducts_code_3_price
    info[29] = suboffer.subproducts_code_4
    info[30] = suboffer.subproducts_code_4_q
    info[31] = suboffer.subproducts_code_4_price
    info[32] = suboffer.subproducts_code_5
    info[33] = suboffer.subproducts_code_5_q
    info[34] = suboffer.subproducts_code_5_price
    info[35] = suboffer.subproducts_code_1_description
    info[36] = suboffer.subproducts_code_2_description
    info[37] = suboffer.subproducts_code_3_description
    info[38] = suboffer.subproducts_code_4_description
    info[39] = suboffer.subproducts_code_5_description
    info[40] = suboffer.zakupnaprice
    info[41] = suboffer.subproducts_code_1_zakupnaprice
    info[42] = suboffer.subproducts_code_2_zakupnaprice
    info[43] = suboffer.subproducts_code_3_zakupnaprice
    info[44] = suboffer.subproducts_code_4_zakupnaprice
    info[45] = suboffer.subproducts_code_5_zakupnaprice
    info[46] = suboffer.otstapka
    info[47] = state.user.id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/suboffer.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.getSuboffers(offer_id)
        state.current_suboffer = 0
      }
    }
    xmlhttpro.send(data)
  },
  getEdcenanew(suboffer) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('products_code', suboffer.products_code)
    data.append('h', suboffer.h)
    data.append('l', suboffer.l)
    data.append('p', suboffer.p)
    data.append('price', suboffer.price)
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/mobile/get_edcenanew.php'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        let suboffer_current = state.suboffers.find(
          (element) => element.id == suboffer.id
        )
        suboffer_current.price = parseFloat(
          JSON.parse(this.response).edcena
        ).toFixed(2)
      }
    }
    xmlhttpro.send(data)
  },
  createDogovor(oid) {
    var data = new FormData()
    var info = []
    info[0] = oid
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/createdogovor.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.getDogovori()
        setTimeout(() => {
          state.current_dogovori = JSON.parse(this.response).newid
          methods.changePage('Dogovor')
        }, 500)
      }
    }
    xmlhttpro.send(data)
  },
  createFaktura(offer) {
    var data = new FormData()
    var info = []
    info[0] = offer.id
    info[1] = offer.allprice_after_to
    info[2] = offer.allprice_bez_dds_after_to
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/createfaktura.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.getFakturi()
        setTimeout(() => {
          state.current_fakturi = JSON.parse(this.response).newid
          methods.changePage('Faktura')
        }, 500)
      }
    }
    xmlhttpro.send(data)
  },
  createProforma(oid) {
    const offer_id = state.alloffers.find(
      (element) => element.idnomber == oid
    ).id
    var data = new FormData()
    var info = []
    info[0] = offer_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/createproforma.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.getProformi()
        setTimeout(() => {
          state.current_proformi = JSON.parse(this.response).newid
          methods.changePage('Proforma')
        }, 500)
      }
    }
    xmlhttpro.send(data)
  },
  createAvansova(oid) {
    const offer_id = state.alloffers.find(
      (element) => element.idnomber == oid
    ).id
    var data = new FormData()
    var info = []
    info[0] = offer_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/createafaktura.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.getAvansovi()
        setTimeout(() => {
          state.current_avansovi = JSON.parse(this.response).newid
          methods.changePage('Avansova')
        }, 500)
      }
    }
    xmlhttpro.send(data)
  },
  saveAvansova(avansova) {
    var data = new FormData()
    var info = []
    info[0] = 'SAVE'
    info[1] = avansova.id
    info[2] = avansova.dateon
    info[3] = avansova.price
    info[4] = avansova.price_bezdds
    info[5] = avansova.type_dds
    info[6] = avansova.type_dds
    info[19] = avansova.description
    info[20] = avansova.komentar
    info[22] = state.user.id
    info[23] = avansova.dateonprevod
    info[24] = avansova.polucenprevod
    info[25] = avansova.plashtane_avans
    info[26] = avansova.datedanacno
    info[27] = avansova.city
    info[28] = avansova.smetka_id
    info[29] = avansova.textavans
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/afakturi.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateAvansova(true)
      } else {
        methods.changeSuccessUpdateAvansova(false)
      }
    }
    xmlhttpro.send(data)
  },
  saveFaktura(faktura) {
    var data = new FormData()
    var info = []
    info[0] = 'SAVE'
    info[1] = faktura.id
    info[2] = faktura.dateon
    info[3] = faktura.price
    info[4] = faktura.price_bezdds
    info[5] = faktura.dds20
    info[6] = faktura.dds55
    info[19] = faktura.description
    info[20] = faktura.dds10
    info[21] = faktura.dds21
    info[22] = state.user.id
    info[23] = faktura.dateonprevod
    info[24] = faktura.nacinplashtane
    info[25] = faktura.datedanacno
    info[26] = faktura.city
    info[27] = faktura.smetka_id
    info[28] = faktura.valuta
    info[29] = faktura.kurs_valuta
    info[30] = faktura.grif
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      '/function/fakturi.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
    )
    const loader = $loading.show(loader_params)
    xmlhttpro.addEventListener('loadend', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('error', (e) => {
      loader.hide()
    })
    xmlhttpro.addEventListener('abort', (e) => {
      loader.hide()
    })
    xmlhttpro.onreadystatechange = function () {
      if (
        this.readyState == 4 &&
        JSON.parse(this.response).success == 'success'
      ) {
        methods.changeSuccessUpdateFaktura(true)
      } else {
        methods.changeSuccessUpdateFaktura(false)
      }
    }
    xmlhttpro.send(data)
  },
}

export default { state, methods }
