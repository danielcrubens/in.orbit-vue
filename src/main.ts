import { createApp } from 'vue'
import '../style.css'
import App from './App.vue'
import { VueQueryPlugin } from '@tanstack/vue-query'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App)
app.use(VueQueryPlugin)
app.use(Toast)
app.mount('#app')
