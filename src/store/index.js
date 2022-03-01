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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/get_otclienti.php'
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
        state.otclienti = JSON.parse(this.response).otclienti
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
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/mobile/delete_otclient.php'
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
      'https://dograma.avalonbg.com/function/mobile/save_otclient.php'
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
  uploadClientFile(files, offer_id) {
    var data = new FormData()
    Object.entries(files).forEach((element) => {
      const [key, value] = element
      data.append(key, value)
    })
    var xmlhttpro = createCORSRequest(
      'POST',
      'https://dograma.avalonbg.com/function/submit_doc.php?oid=' +
        offer_id +
        '&doc=otklient&guid=2|2cEpMzPHz5mWtCaGqsER1Fe1t8YRBEg68CbfiU7Z'
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
        methods.getOtclienti(state.current_dashboard_offer)
      }
    }
    xmlhttpro.send(data)
  },
}

export default { state, methods }
