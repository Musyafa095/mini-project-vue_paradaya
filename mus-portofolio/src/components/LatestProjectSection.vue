<template>
<section class="text-white mt-20">
 <div class="px-4 xl:pl-16">
  <div class="mb-4 md:flex md:justify-between xl:pr-16">
    <h2 class="text-4xl font-bold text-white">My Latest Project</h2>
    <div class="flex space-x-4 mb-4 mt-5 md:mt-0">
        <button class="hover:text-primary font-montserrat" v-for="category in ['All', 'Web Development', 'Grapic Designer']"
            :key="category" @click="() => selectedCategory = category">
            {{ category }}
        </button>
    </div>
  </div>
  <ul class="px-4 sm:py-16 xl:pr-16 grid grid-cols-1 gap-6 pt-10 sm:grid-col-2 md:gap-10 md:pt-12 lg:grid-cols-3" data-aos="fade-right">
    <div v-for="project in filteredProject" :key="project.id">
      <div class="h-52 md:h-[24rem] rounded-t-xl relative group"
    :style="{backgroundImage:'url('+project.image+')',backgroundSize:'cover'}">
     <div class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0
      hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
      <a class="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
        :href="project.webURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
            data-slot="icon"
             class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
      <path stroke-linecap="round" stroke-linejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5">
      </path>
     </svg></a><a
      class="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
       :href="project.gitURL"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
         viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"
           data-slot="icon"
             class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white">
      <path stroke-linecap="round" stroke-linejoin="round"
         d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z">
     </path>
     <path stroke-linecap="round" stroke-linejoin="round"
         d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
     </svg></a>
    </div>
  </div>
  <div class="text-white rounded-b-xl mt-3 bg-[#111a3e] shadow-lg border border-[#1f1641] py-6 px-4">
      <h3 class="text-lg font-semibold uppercase lg:text-xl text-primary"> {{ project.number}}</h3>
      <h5 class="text-lg font-mono font-bold capitalize lg:text-xl">{{project.title}}</h5>
          <p class="text-[#ADB7BE]">{{ project.description}}</p>
            <div class="flex flex-wrap p-2.5">
       <div v-for="technology in project.technologies" :key="technology" class="text-center ml-1 mt-1 rounded-3xl bg-[#111827]"
        style="box-shadow: 0 4px 30px gray; border: 1px solid #111827;backdrop-filter: blur(9px);-webkit-backdrop-filter: blur(9px);">
          <p class="px-1 py-2">{{ technology }}</p>
            </div>
        </div>
   </div>
    </div>
  </ul>
 </div>    
</section>
</template>
<script setup>
import {ref, computed} from 'vue'
const Projects = ref ([
    {
        id: 1,
        category: 'Web Development',
        description: 'Sebuah hotel yang berlokasi di destinasi wisata pantai terkenal di Sukabumi,Jawa Barat. Website ini dirancang untuk memberikan pengalaman pengguna yang mudah dan informatif bagi calon pengunjung yang ingin memesan, mengetahui fasilitas, dan mendapatkan informasi tentang atraksi wisata lokal.',
        image: '/assets/project.jpeg',
        number: 'project 1',
        title: 'Seaside',
        technologies: ['vue.js', 'vuex', 'Tailwind'],
        gitURL:'',
        webURL:'',
    },
    {
       id: 2,
        category: 'Grapic Designer',
        description: 'Kali ini bermain dengan nuansa ungu yang elegan dikombinasikan dengan ilustrasi yang fun. Simple tapi tetep eye-catching, Btw ini hasil eksplor desain landing page buat portfolio. Masih banyak yang perlu dipelajari, tapi happy sama hasilnya!, Kalau ada saran atau masukan, Silahkan langsung tulis di komen ya! 🙌',
        image:'/assets/design.png',
        number: 'project 2',
        title: 'C-Media Digital Agency',
        technologies: ['Canva', 'Lightroom',],
        gitURL:'',
        webURL:'',
    },
    {
       id: 3,
        category: 'Web Development',
        description: 'TokoKita adalah platform e-commerce yang saya kembangkan bersama tim untuk membantu usaha mikro, kecil, dan menengah (UMKM) memperluas jangkauan pasar mereka secara digital. Aplikasi ini dirancang dengan fokus pada kebutuhan lokal dan memberikan solusi praktis untuk menghubungkan pelaku usaha dengan pelanggan.',
        image:'/assets/TokoKita.jpg',
        number: 'project 3',
        title: 'Ec-commerce',
        technologies: ['Vue.js', 'Tailwind', 'Laravel'],
        gitURL:'https://fe-kelompok5.vercel.app/',
        webURL:'https://fe-kelompok5.vercel.app/',
    },
  {
       id: 4,
        category: 'Web Development',
        description: 'AnimeFlix adalah platform streaming anime yang saya kembangkan sebagai bagian dari proyek pribadi/tim. Platform ini dirancang untuk menyediakan pengalaman menonton anime yang cepat, responsif, dan user-friendly. Fitur utama meliputi pencarian judul anime, daftar favorit, seta update episode terbaru..',
        image:'/assets/anime.jpg',
        number: 'project 4',
        title: 'Anime Streaming',
        technologies: ['Vue.js', 'Tailwind', 'Laravel'],
        gitURL:'https://movie-animeflix.vercel.app/',
        webURL:'https://movie-animeflix.vercel.app/',
    }
  ]);
   

const selectedCategory = ref('All');
const filteredProject = computed(() => {
  if (selectedCategory.value === 'All'){
    return Projects.value;
  }
  return Projects.value.filter(project => project.category.toLocaleLowerCase() === selectedCategory.value.toLocaleLowerCase());
})
 
</script>
