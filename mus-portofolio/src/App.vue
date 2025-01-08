<template>
<div class="bg-[#111827] min-h-screen">
    <Navbar />
</div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
const Navbar = defineAsyncComponent(()=> import ('@/components/NavBar.vue'));
</script>