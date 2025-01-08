<template>
<div class="bg-[#111827] min-h-screen">
    <Navbar />
    <HeroSection />
</div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(()=> import ('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import ('@/components/HeroSection.vue'))
</script>