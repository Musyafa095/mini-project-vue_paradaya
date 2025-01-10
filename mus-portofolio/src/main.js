import './style.css'
import router from './router';
import {createPinia} from 'pinia';


import { createApp } from 'vue'
import App from './App.vue'
import { useThemeStore } from './stores/ThemeStore';

const app = createApp(App)
const pinia = createPinia()


app.use(router)
app.use(pinia)
app.mount('#app')

const themeStrore = useThemeStore()
document.documentElement.setAttribute('data-theme', themeStrore.theme)