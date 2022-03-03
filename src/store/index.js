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
  page: 'Dashboard',
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
  deleteClientModal: false,
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
  changePage(page) {
    state.page = page
    methods.closeSidebar()
    if (page == 'Dashboard') {
      methods.getOffers()
    }
  },
  changeDeleteClientModal(deleteClientModal) {
    state.deleteClientModal = deleteClientModal
  },
  deleteClientById(id) {
    state.otclienti = state.otclienti.filter((element) => {
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
        methods.changePage('Dashboard')
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/submit_doc.php?oid=' +
        offer_id +
        '&doc=' +
        type +
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
}

export default { state, methods }
