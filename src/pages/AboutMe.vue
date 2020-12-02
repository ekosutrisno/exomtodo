<template>
   <div class="max-w-7xl mx-auto p-2">
      <div class="flex flex-col lg:flex-row items-start mt-4">
         <div>
            <div class="w-64 border-2 ring-2 ring-gray-200 border-gray-50 rounded-full relative">
               <div class="rounded-full cursor-pointer p-2 inline-flex items-center absolute w-10 h-10 right-0 bottom-10 bg-gray-50 ring-1 ring-gray-200">
                  <span class="mx-auto">😻</span>
               </div>
               <img class="object-cover" src="https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4" alt="my-avatar">
            </div>
         </div>

         <div class="p-8 mt-4">
            <h1 class="text-2xl">Hi, Saya <span class="font-semibold">Eko Sutrisno</span></h1>
            <h1 class="text-sm pt-2 pb-4 inline-flex space-x-2">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
               <a href="ekosutrisno801@gmail.com" class="font-semibold">
                  ekosutrisno801@gmail.com
               </a>
            </h1>
            <p>
               Awalnya saya suka Desain Grafis seperti desain poster, banner, standing banner, dan cover buku. Tetapi pada akhir tahun 2019 saya mulai tertarik
               dengan dunia IT dan dari sanalah saya mulai belajar pemprograman. Pada awalnya saya belajar hanya <code class="bg-green-100 font-medium px-2 rounded text-gray-900">CSS & HTML</code> saja, ya cuma coba-coba desain landing page biasa tapi setelah dirasa mulai ada perkembangan saya putuskan belajar <code class="bg-green-100 font-medium px-2 rounded text-gray-900">PHP</code> dan <code class="bg-green-100 font-medium px-2 rounded text-gray-900">Javascript</code>
               agar website yang saya buat fungsionalitasnya berjalan.
               <br>
               <br>
               Setelah berjalan beberapa bulan saya coba ikut interview dan kebetulan lolos dan menjalani training selama 7 minggu. Bahasa pemprograman yang Saya
               ikuti bukan <code class="bg-green-100 font-medium px-2 rounded text-gray-900">PHP</code> akan tetapi <code class="bg-green-100 font-medium px-2 rounded text-gray-900">Java</code>, yang pada akhirnya saya berkerja sebagai Java Backend Developer. Selain backend saya juga
               mengerjakan Frontend menggunakan <code class="bg-green-100 font-medium px-2 rounded text-gray-900">VueJs</code>.
            </p>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
                <span class="font-semibold">Contact Me</span></h1>
            <div class="flex flex-wrap items-center py-3">
               <LabelButton :href="`#`">#Twitter @eko_sutrisno96</LabelButton>
               <LabelButton :href="`#`">#Instagram @eko_sutrisno96</LabelButton>
               <LabelButton :href="`#`">#Facebook Eko Sutrisno</LabelButton>
               <LabelButton :href="`https://www.linkedin.com/in/eko-sutrisno-90baa0152`">#LinkedIn Eko Sutrisno</LabelButton>
            </div>
         </div>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
                <span class="font-semibold">Source Control</span></h1>
            <div class="flex items-center space-x-4 py-3">
               <a href="https://github.com/ekosutrisno" target="_blank" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                 <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg> <span>Github</span>
               </a>
               <a href="https://gitlab.com/ekosutrisno1" target="_blank" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                 <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg> <span>Gitlab</span>
               </a>
            </div>
         </div>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
                <span class="font-semibold">Bahasa Pemprograman</span></h1>
            <div class="flex items-center space-x-4 py-3">
               <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                 <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg> <span>Java</span>
               </a>
               <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                 <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg> <span>Javascript</span>
               </a>
            </div>
         </div>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
                <span class="font-semibold">Framework</span></h1>
            <div class="flex items-center space-x-4 py-3">
              <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                 <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg><span>SpringBoot</span>
               </a>
              <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                 <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg><span>VueJs</span>
               </a>
            </div>
         </div>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
                <span class="font-semibold">Database</span></h1>
            <div class="flex items-center space-x-4 py-3">
                <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>PostgreSql</span>
               </a>
                <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>MySql</span>
               </a>
                <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>MongoDB</span>
               </a>
            </div>
         </div>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
                <span class="font-semibold">Tools</span></h1>
            <div class="flex items-center space-x-4 py-3">
                <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Docker</span>
               </a>
                <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>MicroService</span>
               </a>
            </div>
         </div>
         </div>
      </div>
   </div>
</template>

<script>
import LabelButton from '../components/button/LabelButton.vue'
   export default {
  components: { LabelButton },
      
   }
</script>