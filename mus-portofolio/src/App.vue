<template>
      <header>
      <Navbar />
    </header>
    <main>
      <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
      <loadingSpinner />
    </div>
    <router-view v-else />
    </main>
    <footer>
      <Footer/>
    </footer>
    <BackToTop />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { defineAsyncComponent } from 'vue';
import { useThemeStore } from '@/stores/ThemeStore';
const { theme, setTheme } = useThemeStore();

const isLoading = ref(true); 
const themeClass = ref('');

const Navbar = defineAsyncComponent(()=> import ('@/components/NavBar.vue'));
const BackToTop = defineAsyncComponent (() => import ('@/components/BackToTop.vue'));
const loadingSpinner = defineAsyncComponent (() => import ('@/components/LoadingSpinner.vue'));
const Footer = defineAsyncComponent (() => import ('@/components/Footer.vue'));

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
    setTheme(theme.value);
    themeClass.value = theme.value;
  }, 2000);
});

</script>
<style>
*{
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}

</style>