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
}

export default { state, methods }
