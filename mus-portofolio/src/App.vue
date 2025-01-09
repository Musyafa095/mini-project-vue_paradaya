<template>
  <div class="bg-[#111827] min-h-screen">
    <header>
      <Navbar />
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
    <BackToTop />
  </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

const Navbar = defineAsyncComponent(()=> import ('@/components/NavBar.vue'));
const BackToTop = defineAsyncComponent (() => import ('@/components/BackToTop.vue'));
const loadingSpinner = defineAsyncComponent (() => import ('@/components/LoadingSpinner.vue'));
const Footer = defineAsyncComponent (() => import ('@/components/Footer.vue'));
</script>

<style>
*{
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}
</style>