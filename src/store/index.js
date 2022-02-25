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
  tekushta: '01.01.2022 to 25.02.2022',
})

const methods = {
  closeSidebar() {
    state.sidebarOpen = false
  },
  changePage(page) {
    state.page = page
    methods.closeSidebar()
    if (page == 'Dashboard') {
      methods.getOffers()
    }
  },
  toggleSidebar() {
    state.sidebarOpen = !state.sidebarOpen
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
      }
    }
    xmlhttpro.send(data)
  },
}

export default { state, methods }
