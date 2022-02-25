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
})

const methods = {
  closeSidebar() {
    state.sidebarOpen = false
  },
  changePage(page) {
    state.page = page
    methods.closeSidebar()
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
        console.log(state)
      }
    }
    xmlhttpro.send(data)
  },
}

export default { state, methods }
