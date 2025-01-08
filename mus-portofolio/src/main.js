import './style.css'
import {OhVueIcon, addIcons} from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({...FaIcons}); 

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

addIcons(...Fa);
app.component('v-icon', OhVueIcon);
app.mount('#app')
