import {ref} from 'vue'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'; 

export const useThemeStore = defineStore('theme', () => {
    const theme = ref(useStorage('theme', 'night'))
    const isMenuOpen = ref(false);
    function toggleMenu() {
        isMenuOpen.value = !isMenuOpen.value;
      }

    function setTheme(newTheme) {
      theme.value = newTheme
      document.documentElement.setAttribute('data-theme', newTheme)
    }
  
    return {theme, setTheme, isMenuOpen, toggleMenu}
  })