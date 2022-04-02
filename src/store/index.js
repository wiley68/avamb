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

const state = reactive({
  page: 'Landing',
  sidebarOpen: false,
  name: '',
  user: {},
  offers: [],
  offers_temp: [],
  tekushta:
    moment().startOf('year').format('DD.MM.YYYY') +
    ' to ' +
    moment().format('DD.MM.YYYY'),
  offers_filter_status: 'No',
  dashboardSidebarOpen: true,
  current_dashboard_offer: 0,
  razmeri: [],
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
  zadaci_temp: [],
  zadaciSidebarOpen: true,
  current_zadaca_id: 0,
  successUpdateZadaca: false,
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
  sub_storeminusi: [],
  current_sub_storeminus_id: 0,
  deleteSubstoreminusModal: false,
  produkti: [],
  produkti_temp: [],
  produkti_plus: [],
  produkti_plus_temp: [],
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
  toggleStoreminusiSidebar() {
    state.storeminusiSidebarOpen = !state.storeminusiSidebarOpen
  },
  toggleStoreplusiSidebar() {
    state.storeplusiSidebarOpen = !state.storeplusiSidebarOpen
  },
  closeZadaciSidebar() {
    state.zadaciSidebarOpen = false
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
  openStoreminusiSidebar() {
    state.storeminusiSidebarOpen = true
  },
  openStoreplusiSidebar() {
    state.storeplusiSidebarOpen = true
  },
  changeZadaci(zadaca_id) {
    state.current_zadaca_id = zadaca_id
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
      methods.getZadaci()
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
  changeSuccessUpdateRaboten(successUpdateRaboten) {
    state.successUpdateRaboten = successUpdateRaboten
  },
  changeSuccessUpdateZadaca(successUpdateZadaca) {
    state.successUpdateZadaca = successUpdateZadaca
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/getparams.php'
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
    const tekushta_start = state.tekushta.substring(0, 10)
    const tekushta_end = state.tekushta.substring(14)
    data.append('tekushta_start', tekushta_start)
    data.append('tekushta_end', tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_offers.php'
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
        state.offers = JSON.parse(this.response).offers
        state.offers_temp = state.offers.filter(
          (element) => element.status == 'No'
        )
      }
    }
    xmlhttpro.send(data)
  },
  getRazmeri(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_razmeri.php'
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
        state.razmeri = JSON.parse(this.response).razmeri
      } else {
        state.razmeri = []
      }
    }
    xmlhttpro.send(data)
  },
  getOtclienti(offer_id) {
    var data = new FormData()
    data.append('firm_id', state.user.firm_id)
    data.append('offer_id', offer_id)
    data.append('type', 'otklient')
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
      'https://dograma.avalonbg.com/function/mobile/get_doc_poseshtenia.php'
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
      'https://dograma.avalonbg.com/function/mobile/get_doc_poseshtenia_all.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
      'https://dograma.avalonbg.com/function/mobile/delete_doc_poseshtenie.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
        'https://dograma.avalonbg.com/function/submit_snimki.php?oid=' +
          offer_id +
          '&guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
      )
    } else {
      var xmlhttpro = createCORSRequest(
        'POST',
        'https://dograma.avalonbg.com/function/submit_doc.php?oid=' +
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
      'https://dograma.avalonbg.com/function/submit_visit.php?vid=' +
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_doc.php'
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/save_doc.php'
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
    const tekushta_start = state.tekushta.substring(0, 10)
    const tekushta_end = state.tekushta.substring(14)
    data.append('tekushta_start', tekushta_start)
    data.append('tekushta_end', tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_rabotni.php'
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
    const tekushta_start = state.tekushta.substring(0, 10)
    const tekushta_end = state.tekushta.substring(14)
    data.append('tekushta_start', tekushta_start)
    data.append('tekushta_end', tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_zadaci.php'
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
        state.zadaci = JSON.parse(this.response).zadaci
        state.zadaci_temp = JSON.parse(this.response).zadaci
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
      'https://dograma.avalonbg.com/function/poseshtenia.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/poseshtenia.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/mobile/get_poseshtenia.php'
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
    info[2] = state.offers.find(
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
      'https://dograma.avalonbg.com/function/subposeshtenia.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/subposeshtenia.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/tasks.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
  deleteZadaca(zadaca_id) {
    var data = new FormData()
    var info = []
    info[0] = 'DELETE'
    info[1] = zadaca_id
    data.append('info', JSON.stringify(info))
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/tasks.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
  getMessages() {
    var data = new FormData()
    data.append('token', '2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z')
    data.append('user_id', state.user.id)
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/get_messages.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/delete_message.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
  createMessage(from_user_id, to_user_id, body) {
    var data = new FormData()
    data.append('token', '2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z')
    data.append('from_user_id', from_user_id)
    data.append('to_user_id', to_user_id)
    data.append('body', body)
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/create_message.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
          from_user_id: JSON.parse(this.response).from_user_id,
          to_user_id: JSON.parse(this.response).to_user_id,
          body: JSON.parse(this.response).body,
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
    const tekushta_start = state.tekushta.substring(0, 10)
    const tekushta_end = state.tekushta.substring(14)
    data.append('tekushta_start', tekushta_start)
    data.append('tekushta_end', tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_storeminusi.php'
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
    const tekushta_start = state.tekushta.substring(0, 10)
    const tekushta_end = state.tekushta.substring(14)
    data.append('tekushta_start', tekushta_start)
    data.append('tekushta_end', tekushta_end)
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_storeplusi.php'
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
      'https://dograma.avalonbg.com/function/storeminus.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/storeplus.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/mobile/get_substoreminusi.php'
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
      'https://dograma.avalonbg.com/function/mobile/get_substoreplusi.php'
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
      'https://dograma.avalonbg.com/function/storeminus_edit.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/storeplus_edit.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/getproductiaddstoreminus.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      } catch (err) {}
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
      'https://dograma.avalonbg.com/function/getproductiaddstore.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      } catch (err) {}
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
      'https://dograma.avalonbg.com/function/storeminus_edit.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
      'https://dograma.avalonbg.com/function/storeplus_edit.php?guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
}

export default { state, methods }
