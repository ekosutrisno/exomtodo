<template>
   <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto p-2">
        <h1 class="text-center lg:my-16 text-2xl font-semibold text-gray-900">Eko/<span class="text-green-secondary">MTodo</span> easy to manage</h1>
     <div class="grid lg:grid-cols-3 gap-3">
        <div class="flex flex-col items-center">
           <One/>
            <h1 class="text-center mt-3 text-2xl font-medium text-gray-900 uppercase">Modular</h1>
           <div class="px-8 py-3">
               <p class="tracking-wide leading-7 font-normal">Nuxt is based on a powerful modular architecture. You can choose from more than 50 modules to make your development faster and easier. You don't have to reinvent the wheel to get PWA benefits, add Google Analytics to your page or generate a sitemap.</p>
           </div>
        </div>
        <div class="flex flex-col items-center">
           <Two/>
            <h1 class="text-center mt-3 text-2xl font-medium text-gray-900 uppercase">Personal</h1>
           <div class="px-8 py-3">
               <p class="tracking-wide leading-7 font-normal">With Nuxt.js, your application will be optimized out of the box. We do our best to build performant applications by utilizing Vue.js and Node.js best practices. To squeeze every unnecessary bit out of your app Nuxt includes a bundle analyzer and lots of opportunities to fine-tune your app.</p>
           </div>
         </div>
        <div class="flex flex-col items-center">
           <Three/>
            <h1 class="text-center mt-3 text-2xl font-medium text-gray-900 uppercase">Enjoyable</h1>
           <div class="px-8 py-3">
               <p class="tracking-wide leading-7 font-normal">Our main focus is the Developer Experience. 
                  We love Nuxt.js and continuously improve the framework so you love it too! 💚
                  Expect appealing solutions, descriptive error messages, powerful defaults and detailed documentation. 
                  If questions or problems come up, our helpful community will help you out.
               </p>
            </div>
         </div>
     </div>
    <div class="flex items-center justify-center py-5">
        <button class="py-2 mt-10 inline-flex items-center space-x-2 px-5 uppercase font-medium bg-green-secondary  hover:bg-green-light focus:outline-none shadow-lg text-gray-50 transition rounded">
         <span>Try for free</span> 
         <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
         </svg>
      </button>
    </div>
      </div>
   </div>
</template>
<script>
import One from '../svg/One.vue'
import Three from '../svg/Three.vue'
import Two from '../svg/Two.vue'
export default {
  components: { One, Two,Three },
   
}
</script>