import { createApp } from 'vue'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import "/node_modules/flag-icons/css/flag-icons.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

createApp(App)
      .component('font-awesome-icon', FontAwesomeIcon)
      .mount('#app')
