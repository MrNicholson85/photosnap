import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/variable.scss'
import './assets/styles/typography.scss'
import './assets/styles/buttons.scss'
import router from './router'

createApp(App).use(router).mount('#app')
