<template>
    <div class="bg-[#111827] min-h-screen">
       <Suspense>
        <template #default>
           <div>
              <Navbar />
              <HeroSection />
              <ServicesSection />
              <AboutSection />
              <Skills />
              <LatestProjectSection />
              <ContactSection />
              <Footer />
              <BackToTop />
        </div>
      </template>
      <template #fallback>
        <div class="flex justify-center items-center min-h-screen">
            <loadingSpinner />
        </div>
      </template>
    </Suspense>
    </div>
  </template>
  
<script setup>
import { defineAsyncComponent } from 'vue';

// Define Async Components
const Navbar = defineAsyncComponent(()=> import ('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import ('@/components/HeroSection.vue'));
const AboutSection = defineAsyncComponent(() => import ('@/components/AboutSection.vue'));
const Skills = defineAsyncComponent (() => import ('@/components/Skills.vue'));
const LatestProjectSection = defineAsyncComponent (() => import ('@/components/LatestProjectSection.vue'));
const ContactSection =defineAsyncComponent (() => import ('@/components/ContactSection.vue'));
const Footer = defineAsyncComponent (() => import ('@/components/Footer.vue'));
const BackToTop = defineAsyncComponent (() => import ('@/components/BackToTop.vue'));
import LoadingSpinner from './components/LoadingSpinner.vue';
</script>
<style>

*{
  scrollbar-width: thin;
  scrollbar-color: #111827 #f1f1f1;
}
</style>