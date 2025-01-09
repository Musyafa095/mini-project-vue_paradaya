<template>
<section class="text-white mt-20">
 <div class="px-4 xl:pl-16">
  <div class="mb-4 md:flex md:justify-between xl:pr-16">
    <h2 class="text-4xl font-bold text-white">My Latest Project</h2>
    <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
        <button class="hover:text-primary" v-for="category in ['all', 'web development', 'design']"
            :key="category" @click=""
            {{ category }}>
        </button>
    </div>
  </div>
  <ul class="px-4 sm:py-16 xl:pr-16 gird grid-cols-1 gap-6 pt-10 sm:grid-col-2 md:gap-10 md:pt-12 lg:grid-cols-3" data-aos="fade-right">
    <div v-for="Project in filteredProject" :key="Project.id"></div>
  </ul>
 </div>    
</section>
</template>
<script setup>
import {ref} from 'vue'
const preoject = ref ([
    {
        id: 1,
        title: 'project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut egestas felis. Sed consectetur, quam sed pellentesque elementum, ipsum elit sollicitudin lectus, at condimentum massa neque vel enim.',
        category: 'web development',
        image: 'src/assets/project.jpg',
        technologies: ['vue.js', 'vuex', 'Express']
    },
])

</script>