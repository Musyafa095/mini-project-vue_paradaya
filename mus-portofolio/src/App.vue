<template>
<div class="bg-[#111827] min-h-screen">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <Skills />
</div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';

// Define Async Components
const Navbar = defineAsyncComponent(()=> import ('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import ('@/components/HeroSection.vue'));
const AboutSection = defineAsyncComponent(() => import ('@/components/AboutSection.vue'));
const Skills = defineAsyncComponent (() => import ('@/components/Skills.vue'));
</script>