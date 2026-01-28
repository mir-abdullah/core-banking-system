import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import 'primeicons/primeicons.css'
import './style.css'

import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      option:{
        cssLayer:{
          name:'primevue',
          order:'primevue ./style.css'
        }
      }
    }
  })
  .mount('#app')
