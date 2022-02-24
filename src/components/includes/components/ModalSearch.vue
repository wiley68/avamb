<template>
  <transition
    enter-active-class="transition ease-out duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition ease-out duration-100"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-show="modalOpen"
      class="fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity"
      aria-hidden="true"
    ></div>
  </transition>
  <transition
    enter-active-class="transition ease-in-out duration-200"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition ease-in-out duration-200"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-show="modalOpen"
      class="fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref="modalContent"
        class="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg"
      >
        <div class="border-b border-gray-200">
          <div class="relative">
            <label for="search-id" class="sr-only">Търси ...</label>
            <input
              :id="searchInput"
              ref="searchInput"
              class="w-full border-0 focus:ring-transparent placeholder-gray-400 appearance-none py-3 pl-10 pr-4"
              type="search"
              :placeholder="store.state.language.search_anything"
              @input="searchFor()"
            />
            <button
              class="absolute inset-0 right-auto group"
              type="submit"
              aria-label="Search"
            >
              <svg
                class="w-4 h-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-4 mr-2"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"
                />
                <path
                  d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="py-4 px-2">
          <div v-if="projects.length > 0" class="mb-3 last:mb-0">
            <div
              class="text-xs font-semibold text-gray-400 uppercase px-2 mb-2"
            >
              {{ store.state.language.projects }}
            </div>
            <ul class="text-sm">
              <li v-for="project in projects" :key="project.id">
                <button
                  class="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                  @click="showProject(project.id)"
                >
                  <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M5,8V6H19V8H5M10.56,18.46L16.5,12.53L15.43,11.47L10.56,16.34L8.45,14.23L7.39,15.29L10.56,18.46Z"
                    />
                  </svg>
                  <span>{{ project.title }}</span>
                </button>
              </li>
            </ul>
          </div>
          <div v-if="tasks.length > 0" class="mb-3 last:mb-0">
            <div
              class="text-xs font-semibold text-gray-400 uppercase px-2 mb-2"
            >
              {{ store.state.language.tasks }}
            </div>
            <ul class="text-sm">
              <li v-for="task in tasks" :key="task.id">
                <button
                  class="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                  @click="showTask(task.id, task.project_id)"
                >
                  <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z"
                    />
                  </svg>
                  <span>{{ task.title }}</span>
                </button>
              </li>
            </ul>
          </div>
          <div v-if="files.length > 0" class="mb-3 last:mb-0">
            <div
              class="text-xs font-semibold text-gray-400 uppercase px-2 mb-2"
            >
              {{ store.state.language.documents }}
            </div>
            <ul class="text-sm">
              <li v-for="file in files" :key="file.id">
                <a
                  :href="file.url"
                  target="_blanc"
                  class="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                  @click="$emit('close-modal')"
                  ><svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M16,15H9V13H16V15M19,11H9V9H19V11M19,7H9V5H19V7M3,5V21H19V23H3A2,2 0 0,1 1,21V5H3M21,1A2,2 0 0,1 23,3V17C23,18.11 22.11,19 21,19H7A2,2 0 0,1 5,17V3C5,1.89 5.89,1 7,1H21M7,3V17H21V3H7Z"
                    />
                  </svg>
                  <span>{{ file.post_title }}</span>
                </a>
              </li>
            </ul>
          </div>
          <div v-if="inbox.length > 0" class="mb-3 last:mb-0">
            <div
              class="text-xs font-semibold text-gray-400 uppercase px-2 mb-2"
            >
              {{ store.state.language.inbox }}
            </div>
            <ul class="text-sm">
              <li v-for="mail in inbox" :key="mail.id">
                <button
                  class="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                  @click="showInbox(mail.id)"
                >
                  <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                    />
                  </svg>
                  <span>{{ mail.subject }}</span>
                </button>
              </li>
            </ul>
          </div>
          <div v-if="messages.length > 0" class="mb-3 last:mb-0">
            <div
              class="text-xs font-semibold text-gray-400 uppercase px-2 mb-2"
            >
              {{ store.state.language.messages }}
            </div>
            <ul class="text-sm">
              <li v-for="message in messages" :key="message.id">
                <button
                  class="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                  @click="showMessage()"
                >
                  <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 3C6.5 3 2 6.58 2 11C2.05 13.15 3.06 15.17 4.75 16.5C4.75 17.1 4.33 18.67 2 21C4.37 20.89 6.64 20 8.47 18.5C9.61 18.83 10.81 19 12 19C17.5 19 22 15.42 22 11S17.5 3 12 3M12 17C7.58 17 4 14.31 4 11S7.58 5 12 5 20 7.69 20 11 16.42 17 12 17M17 12V10H15V12H17M13 12V10H11V12H13M9 12V10H7V12H9Z"
                    />
                  </svg>
                  <span>{{ message.body }}</span>
                </button>
              </li>
            </ul>
          </div>
          <div v-if="notes.length > 0" class="mb-3 last:mb-0">
            <div
              class="text-xs font-semibold text-gray-400 uppercase px-2 mb-2"
            >
              {{ store.state.language.notes }}
            </div>
            <ul class="text-sm">
              <li v-for="note in notes" :key="note.id">
                <button
                  class="flex items-center p-2 text-gray-800 hover:text-white hover:bg-indigo-500 rounded group"
                  @click="showNote(note.id)"
                >
                  <svg class="w-4 h-4 mr-1" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M18.13 12L19.39 10.74C19.83 10.3 20.39 10.06 21 10V9L15 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11V19.13L11.13 19H5V5H12V12H18.13M14 4.5L19.5 10H14V4.5M19.13 13.83L21.17 15.87L15.04 22H13V19.96L19.13 13.83M22.85 14.19L21.87 15.17L19.83 13.13L20.81 12.15C21 11.95 21.33 11.95 21.53 12.15L22.85 13.47C23.05 13.67 23.05 14 22.85 14.19Z"
                    />
                  </svg>
                  <span>{{ note.title }}</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { ref, nextTick, onMounted, onUnmounted, watch, inject } from 'vue'

export default {
  name: 'ModalSearch',

  props: ['modalOpen'],

  emits: ['open-modal', 'close-modal'],

  setup(props, { emit }) {
    const store = inject('store')

    const modalContent = ref(null)
    const searchInput = ref(null)
    const projects = ref([])
    const tasks = ref([])
    const files = ref([])
    const inbox = ref([])
    const messages = ref([])
    const notes = ref([])

    const clickHandler = ({ target }) => {
      if (!props.modalOpen || modalContent.value.contains(target)) return
      emit('close-modal')
      searchInput.value.value = ''
      projects.value = []
      tasks.value = []
      files.value = []
      inbox.value = []
      messages.value = []
      notes.value = []
    }

    const keyHandler = ({ keyCode }) => {
      if (!props.modalOpen || keyCode !== 27) return
      emit('close-modal')
      searchInput.value.value = ''
      projects.value = []
      tasks.value = []
      files.value = []
      inbox.value = []
      messages.value = []
      notes.value = []
    }

    onMounted(() => {
      document.addEventListener('click', clickHandler)
      document.addEventListener('keydown', keyHandler)
    })

    onUnmounted(() => {
      document.removeEventListener('click', clickHandler)
      document.removeEventListener('keydown', keyHandler)
    })

    watch(
      () => props.modalOpen,
      (open) => {
        open && nextTick(() => searchInput.value.focus())
      }
    )

    const searchFor = () => {
      if (searchInput.value.value != '') {
        projects.value = store.state.projects_temp.filter((project) => {
          return project.title
            .toLowerCase()
            .includes(searchInput.value.value.toLowerCase())
        })
        tasks.value = store.state.tasks_temp.filter((task) => {
          return task.title
            .toLowerCase()
            .includes(searchInput.value.value.toLowerCase())
        })
        files.value = store.state.files_temp.filter((file) => {
          return file.post_title
            .toLowerCase()
            .includes(searchInput.value.value.toLowerCase())
        })
        inbox.value = store.state.inbox_messages_temp.filter((mail) => {
          return (
            mail.subject
              .toLowerCase()
              .includes(searchInput.value.value.toLowerCase()) ||
            mail.excerpt
              .toLowerCase()
              .includes(searchInput.value.value.toLowerCase())
          )
        })
        messages.value = store.state.messages.filter((message) => {
          return message.body
            .toLowerCase()
            .includes(searchInput.value.value.toLowerCase())
        })
        notes.value = store.state.notes_temp.filter((note) => {
          return note.title
            .toLowerCase()
            .includes(searchInput.value.value.toLowerCase())
        })
      } else {
        projects.value = []
        tasks.value = []
        files.value = []
        inbox.value = []
        messages.value = []
        notes.value = []
      }
    }

    const showProject = (project_id) => {
      searchInput.value.value = ''
      projects.value = []
      tasks.value = []
      files.value = []
      inbox.value = []
      messages.value = []
      notes.value = []
      store.methods.changeProjectFilter('All', '')
      store.methods.changeProject(project_id)
      store.methods.changePage('Projects')
      emit('close-modal')
    }

    const showTask = (task_id, project_id) => {
      searchInput.value.value = ''
      projects.value = []
      tasks.value = []
      files.value = []
      inbox.value = []
      messages.value = []
      notes.value = []
      store.methods.changeProjectFilter('All', '')
      store.methods.changeProject(project_id)
      store.methods.changeTaskFilter('All', '')
      store.methods.changeTask(task_id)
      store.methods.changePage('Projects')
      emit('close-modal')
    }

    const showInbox = (mail_id) => {
      searchInput.value.value = ''
      projects.value = []
      tasks.value = []
      files.value = []
      inbox.value = []
      messages.value = []
      notes.value = []
      store.methods.changeInboxMessage(mail_id)
      store.methods.changePage('Inbox')
      emit('close-modal')
    }

    const showMessage = () => {
      searchInput.value.value = ''
      projects.value = []
      tasks.value = []
      files.value = []
      inbox.value = []
      messages.value = []
      notes.value = []
      store.methods.changePage('Messages')
      emit('close-modal')
    }

    const showNote = (note_id) => {
      searchInput.value.value = ''
      projects.value = []
      tasks.value = []
      files.value = []
      inbox.value = []
      messages.value = []
      notes.value = []
      store.methods.changeNote(note_id)
      store.methods.changePage('Notes')
      emit('close-modal')
    }

    return {
      store,
      modalContent,
      searchInput,
      searchFor,
      projects,
      tasks,
      files,
      inbox,
      messages,
      notes,
      showProject,
      showTask,
      showInbox,
      showMessage,
      showNote,
    }
  },
}
</script>
