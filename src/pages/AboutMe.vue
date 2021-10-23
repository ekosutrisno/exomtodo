<template>
   <div class="max-w-7xl mx-auto p-2">
      <div class="flex flex-col lg:flex-row items-center lg:items-start mt-4">
         <div>
            <div class="w-64 border-2 ring-2 ring-gray-200 border-gray-50 rounded-full relative">
               <div class="rounded-full cursor-pointer p-2 inline-flex items-center absolute w-10 h-10 right-0 bottom-10 bg-gray-50 ring-1 ring-gray-200">
                  <span class="mx-auto">😻</span>
               </div>
               <img class="object-cover" src="https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4" alt="my-avatar">
            </div>
         </div>

         <div class="p-2 md:p-8 mt-4">
            <h1 class="text-2xl">Hi, Saya <span class="font-semibold">Eko Sutrisno</span></h1>
            <h1 class="text-sm pt-2 pb-4 inline-flex space-x-2">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
               </svg>
               <a href="mailto:ekosutrisno801@gmail.com" class="font-semibold">
                  Hire Me
               </a>
            </h1>
            <p class="w-full">
               Initially I liked Graphic Design such as poster, banner, standing banner, and book cover designs. But at the end of 2019 I became interested in the IT world and that's where I started to learn programming. At first I only learned <code class="code-style">CSS & HTML</code>, so I just tried the usual landing page design but after I felt there was progress, I decided to learn <code class="code-style">PHP</code> and <code class="code-style">Javascript</code> so that the website that I created was functional.
               <br>
               <br>
               After a few months, I tried to join the interview and happened to pass and underwent training for 7 weeks. The programming language that I follow is not <code class="code-style">PHP</code> but <code class="code-style">Java</code>, which in the end I worked as a Java Backend Developer. Besides backend I also work on Frontend using <code class="code-style">VueJs</code>.
            </p>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
               <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
                <span class="font-semibold">Contact Me</span></h1>
            <div class="flex flex-wrap items-center py-3">
               <LabelButton :href="`https://twitter.com/eko_sutrisno96`">#Twitter @eko_sutrisno96</LabelButton>
               <LabelButton :href="`https://www.instagram.com/eko_sutrisno96/`">#Instagram @eko_sutrisno96</LabelButton>
               <LabelButton :href="`https://www.facebook.com/profile.php?id=100010077287097`">#Facebook Eko Sutrisno</LabelButton>
               <LabelButton :href="`https://www.linkedin.com/in/eko-sutrisno-96s`">#LinkedIn Eko Sutrisno</LabelButton>
            </div>
         </div>

         <ul class="bg-gray-50 rounded-lg p-2 sm:p-5 xl:p-6">
            <li>
               <article>
               <a href="#" class="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white"
                  ><h3 class="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">PT Azec Managemnet Service</h3>
                  <time :datetime="new Date()" class="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0">
                     <svg viewBox="0 0 12 12" class="w-3 h-3 mr-6 overflow-visible text-green-400">
                     <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
                     <circle cx="6" cy="6" r="11" fill="none" stroke="currentColor" stroke-width="2"></circle>
                     <path d="M 6 18 V 500" fill="none" stroke-width="2" stroke="currentColor" class="text-gray-200"></path>
                     </svg>
                     Jul 22, 2020</time
                  >
                  <p class="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
                     New Workplace at PT Azec Managemnet Service as Java Backend Developer in Architect IT Division.
                     </p></a
               >
               </article>
            </li>
            <!-- Time Line Card -->
            <TimeLineCard v-for="timeLine in timeLines" :key="timeLine.id" :timeLine="timeLine"/>
         </ul>

         <div class="mt-4">
            <h1 class="text-xl inline-flex">
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
               <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                 <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg> <span>Typescript</span>
               </a>
            </div>
         </div>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
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
              <a href="#" class="font-semibold hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                 <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg><span>TailwindCSS</span>
               </a>
            </div>
         </div>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
                <span class="font-semibold">Database</span>
            </h1>
            <div class="flex items-center flex-wrap py-3">
                <a href="#" class="font-semibold m-1 md:ml-0 hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>PostgreSql</span>
               </a>
                <a href="#" class="font-semibold m-1 md:ml-0 hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>MySql</span>
               </a>
                <a href="#" class="font-semibold m-1 md:ml-0 hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>MongoDB</span>
               </a>
                <a href="#" class="font-semibold m-1 md:ml-0 hover:bg-gray-100 transition inline-flex space-x-1 text-sm px-3 bg-gray-200 rounded-full border border-gray-300">
                  <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                  </svg>
                  <span>Firebase</span>
               </a>
            </div>
         </div>
         <div class="mt-4">
            <h1 class="text-xl inline-flex">
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
import { reactive, toRefs } from 'vue'
import LabelButton from '../components/button/LabelButton.vue'
import TimeLineCard from '../components/cards/TimeLineCard.vue'
   export default {
   components: { LabelButton, TimeLineCard },
   
   setup(){
      const state = reactive({
         timeLines:[
            {
               id:'2864fea8-a707-4682-8f54-c887f8cb6917',
               title: 'PT Xsis Mitra Utama',
               milestone: new Date(),
               date: "Nov 11, 2019",
               story: `Graduated from college and worked at PT Xsis Mitra Utama as Softawe Developer.`
            },
            {
               id:'9a2b89c9-cc06-472f-8840-ae6ca1b09fc8',
               title: 'Go on to college.',
               milestone: new Date(),
               date: "Sep 07, 2015",
               story: `Graduated from high school and continued my education to the next level at the State Islamic University of Raden Intan Lampung majoring in Mathematical Education.`
            },
            {
               id:'6004712c-cf15-43e5-b62a-51d89ed90c48',
               title: 'Senior High School',
               milestone: new Date(),
               date: "Jun 12, 2012",
               story: `Graduated from Junior High School and continued on to the next jejang at SMA N 1 Sungai Are.`
            },
            {
               id:'c08135cf-43db-4d37-9023-625f417d00fc',
               title: 'Junior High School',
               milestone: new Date(),
               date: "Jul 07, 2009",
               story: `Graduated from elementary school and continued on to the next jejang at SMP N 1 Sungai Are.`
            },
            {
               id:'2a4b25eb-2a9d-4198-9bd6-9b048e63989f',
               title: 'Primary School',
               milestone: new Date(),
               date: "Jun 18, 2003",
               story: 'For the first time, I entered SD Negeri Simpang Tiga which has now changed its name to SDN 1 Simpang Luas.'
            },
            {
               id:'f0a4e0c6-16bb-44b3-b0ff-c54bc87f9bac',
               title: 'My Birthday',
               milestone: new Date(),
               date: "May 20, 1996",
               story: 'My birthday coincides with the Day of National Awakening, which is celebrated every May 20.'
            },
         ]
      })
         return{
            ...toRefs(state)
         }
      }
   }
</script>