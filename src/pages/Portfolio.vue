<template>
  <section class="w-full min-w-min h-1/2 bg-green-darkest py-6 relative">
      <div class="max-w-7xl mx-auto p-4 relative">
         <router-link to="/" class="absolute text-gray-300 transition left-10 hover:text-gray-100">
         <svg class="w-6 md:w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
         </svg>
      </router-link>
         <div class="text-center">
               <div class="w-16 mx-auto border-2 ring-2 ring-gray-200 border-gray-50 rounded-full relative">
                  <div class="rounded-full cursor-pointer p-1 inline-flex items-center absolute w-8 h-8 -right-3 bottom-0 bg-gray-50 ring-1 ring-gray-200">
                     <span class="mx-auto">😻</span>
                  </div>
                  <img class="object-cover" src="https://avatars0.githubusercontent.com/u/51039205?s=460&u=cb1d242b6a9b13a3b6383e46b5410fafe471b63d&v=4" alt="my-avatar">
               </div>
               <h1 class="text-3xl md:text-6xl font-semibold md:my-6 my-4 text-gray-100">My Portofolio</h1>
               <p class="font-semibold text-gray-100 md:text-lg text-center">Halaman Ini berisi semua portfolio design Frontend saya <br class="hidden md:block"> menggunakan <code class="bg-green-100 font-medium px-2 rounded text-gray-900">TailwindCss</code>  dan <code class="bg-green-100 font-medium px-2 rounded text-gray-900">VueJs</code> </p>
         </div>
         <div class="w-full md:mx-auto max-w-3xl -mb-24 bg-white z-40 shadow-lg mt-4 rounded-lg h-32">
               <div class="flex flex-col md:flex-row items-center justify-center text-2xl md:text-5xl divide-y md:divide-y-0 md:divide-x h-full">
                  <div class="px-4 w-full text-center font-semibold text-green-600">VueJS</div>
                  <div class="px-4 w-full text-center font-semibold text-cyan-600">TailwindCss</div>
               </div>
         </div>
      </div>
  </section>
  <section class="min-w-min bg-gray-200 pt-14">
     <div class="max-w-7xl mx-auto p-2">
         <div class="w-full px-2 flex items-center justify-center">
            <input v-model="querySearch"  type="text" placeholder="Search topic (Press “/” to focus)"  class="py-3 px-4 rounded w-full max-w-lg mt-6 focus:outline-none ring-2 ring-green-secondary ring-opacity-20 focus:ring-opacity-60"/>
         </div>
         <div class="flex items-center justify-end my-4">
            <div class="inline-flex items-center">
               <span class="mr-3 font-medium">Sort by </span>
               <button class="rounded-tl-md rounded-bl-md focus:outline-none py-1 px-6 transition bg-gray-200 border border-gray-300 border-r-0 hover:border-gray-300">Topic</button>
               <button class="rounded-tr-md rounded-br-md focus:outline-none py-1 px-2 bg-gray-100 hover:bg-gray-200 transition border border-l-0 border-gray-300">
                  <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                  </svg>
               </button>
            </div>
         </div>
     </div>
     <div class="max-w-7xl mx-auto px-4 pb-4 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    
            <div  v-for="portfolio in onSearchAction" :key="portfolio.id"  class="w-full h-72 flex flex-col overflow-hidden transform transition-all hover:shadow-lg cursor-pointer hover:-translate-y-2 shadow rounded-md bg-gray-100">
               <div class="flex-1 p-4">
                  <h1 class="title font-semibold text-gray-800 text-xl mb-4"> {{ portfolio.title }} </h1>
                  <p>
                     {{ portfolio.desc }}
                  </p>
               </div>
               <div class="flex-none flex items-center flex-shrink-0 w-full border-t border-gray-300">

                  <router-link v-if="portfolio.path" :to="portfolio.path" class="w-full">
                     <button  class="bg-green-secondary focus:outline-none text-gray-200 hover:bg-green-light inline-flex space-x-2 items-center w-full py-3 px-4 h-16">
                     <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-icon="meteor" data-prefix="fad" focusable="false" role="img" viewBox="0 0 512 512" class="svg-inline--fa fa-meteor fa-w-16 h-7 -mb-1 mr-1 text-current"><g class="fa-group"><path fill="currentColor" d="M491.14.7C452.44 12.3 379.34 35 303.44 62c-2.1-7-4-13.5-5.6-18.6a16.06 16.06 0 0 0-20-10.69 16.6 16.6 0 0 0-2.86 1.19C232.54 56 122.14 116.5 60.54 176.4c-1.1 1-2.5 2-3.5 3C-19 255.5-19 378.87 57.09 455s199.48 76 275.55-.1c1-1 2-2.4 3-3.5C395.44 389.8 456 279.3 478.14 237a16.05 16.05 0 0 0-6.64-21.72 15.52 15.52 0 0 0-2.86-1.18c-5.2-1.6-11.6-3.5-18.6-5.6 27-76 49.7-149 61.3-187.7A16.17 16.17 0 0 0 491.14.7zM191.94 448a128 128 0 1 1 128-128 128 128 0 0 1-128 128z" opacity=".4" class="fa-secondary"></path><path fill="currentColor" d="M191.94 192a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm-32 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16z" class="fa-primary"></path></g></svg>
                        <span>Go to Web</span>
                     </button>
                  </router-link>

                  <a v-else :href="portfolio.href" target="_blank" class="w-full" rel="noopener noreferrer">
                     <button  class="bg-green-secondary focus:outline-none text-gray-200 hover:bg-green-light inline-flex space-x-2 items-center w-full py-3 px-4 h-16">
                     <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" data-icon="meteor" data-prefix="fad" focusable="false" role="img" viewBox="0 0 512 512" class="svg-inline--fa fa-meteor fa-w-16 h-7 -mb-1 mr-1 text-current"><g class="fa-group"><path fill="currentColor" d="M491.14.7C452.44 12.3 379.34 35 303.44 62c-2.1-7-4-13.5-5.6-18.6a16.06 16.06 0 0 0-20-10.69 16.6 16.6 0 0 0-2.86 1.19C232.54 56 122.14 116.5 60.54 176.4c-1.1 1-2.5 2-3.5 3C-19 255.5-19 378.87 57.09 455s199.48 76 275.55-.1c1-1 2-2.4 3-3.5C395.44 389.8 456 279.3 478.14 237a16.05 16.05 0 0 0-6.64-21.72 15.52 15.52 0 0 0-2.86-1.18c-5.2-1.6-11.6-3.5-18.6-5.6 27-76 49.7-149 61.3-187.7A16.17 16.17 0 0 0 491.14.7zM191.94 448a128 128 0 1 1 128-128 128 128 0 0 1-128 128z" opacity=".4" class="fa-secondary"></path><path fill="currentColor" d="M191.94 192a128 128 0 1 0 128 128 128 128 0 0 0-128-128zm-32 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm48 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16z" class="fa-primary"></path></g></svg>
                        <span>Go to Web</span>
                     </button>
                  </a>

                  <a :href="portfolio.github" target="_blank" class="w-full" rel="noopener noreferrer">
                     <button class="bg-gray-200 focus:outline-none inline-flex space-x-2 items-center hover:bg-gray-300 w-full py-3 px-4 h-16">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" class="nui-svg nui-svg-gh inline-block h-6 -mt-1 mr-1" data-v-deda5324=""><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
                        <span>Github</span>
                     </button>
                  </a>
               </div>
            </div>
     </div>
  </section>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
   export default {
      setup () {
         const state = reactive({
            querySearch: '',
            portfolios: [
               {
                  id:'ab09e92b-3f35-43f3-b5fb-81796c4f3784',
                  path:'',
                  title: 'ExoApp',
                  href: 'https://exoapps.netlify.app/',
                  github: 'https://github.com/ekosutrisno/exoapp-chat',
                  desc: ' Merupakan chat app menggunakan Firebase, VueJs dan TailwindCss. User dapat chat secara pribadi maupun group, user juga bisa melakukan update profile, bahkan delete account jika di kira sudah tidak di gunakan user lagi.'

               },
               {
                  id:'46a2e388-85d5-402c-ae23-4a7aca1d2b8b',
                  path:'',
                  title: 'E-Quran Bahasa Indonesia',
                  href: 'https://exoapp-quran.netlify.app/',
                  github: 'https://github.com/ekosutrisno',
                  desc: 'Al-Quran Digital Terjemahan Bahasa Indonesia mempunyai fitur lengkap sperti mencari berdasarkan surat, ayat, manzil, rukuk, halaman, juz, tandai bacaan, dan menyimpan ayat-ayat penting ke koleksi favorit.'
               },
               {
                  id:'30d02cc3-8616-42ef-8901-9204ff9126f6',
                  path:'',
                  title: 'ExoMTodo',
                  href: 'https://ekosutrisno.netlify.app/',
                  github: 'https://github.com/ekosutrisno',
                  desc: ' Website Using VueJs dan TailwindCss'
               },
               {
                  id:'88613ea7-507d-47cf-af5e-735a0431441a',
                  path:'/dashboard',
                  title: 'Todo List UI',
                  href: '/dashboard',
                  github: 'https://github.com/ekosutrisno',
                  desc: ' Design Todo App UI For Management Your Daily Task'
               },
               {
                  id:'88613ea7-507d-47cf-af5e-735a04314446',
                  path:'',
                  title: 'Cards Design',
                  href: 'https://ekosutrisno-cards.netlify.app/',
                  github: 'https://github.com/ekosutrisno',
                  desc: ' Design Card UI For portfolio'
               },

            ]
         });

         const onSearchAction = computed(()=>{ return state.portfolios
            .filter(po=> po.title.toLowerCase().includes(state.querySearch.toLowerCase()));
         })

         return {
            ...toRefs(state),
            onSearchAction
         }
      }
   }
</script>