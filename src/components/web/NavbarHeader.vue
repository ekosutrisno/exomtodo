<template>
   <div class="w-full shadow-sm sticky z-50 top-0 the-header">
      <div class="max-w-7xl mx-auto flex items-center justify-between p-2">
         <router-link to="/" class="focus:outline-none">
         <span class="font-bold text-gray-700 text-3xl">Eko Sutrisno</span>
         </router-link>
      <div class="lg:flex items-center space-x-5 hidden">
         <router-link to="/" class="py-2 px-3 focus:outline-none uppercase text-lg font-semibold text-gray-700 hover:text-green-secondary transition-colors">Home</router-link>
         <router-link to="/about-me" class="py-2 px-3 focus:outline-none uppercase text-lg font-semibold text-gray-700 hover:text-green-secondary transition-colors">About Me</router-link>
         <!-- <router-link to="/question" class="py-2 px-3 focus:outline-none uppercase text-lg font-semibold text-gray-700 hover:text-green-secondary transition-colors">Q&A</router-link>
         <router-link to="/blog" class="py-2 px-3 focus:outline-none uppercase text-lg font-semibold text-gray-700 hover:text-green-secondary transition-colors">Blog</router-link> -->
      </div>
      <div class="hidden">
         <div class="flex items-center space-x-5">
            <!-- <router-link to="/login" class="py-2 px-3 uppercase focus:outline-none font-medium hover:text-green-secondary transition-colors">
               Login
            </router-link> -->
            <router-link to="/register" class="py-2 px-5 uppercase font-medium bg-green-secondary  hover:bg-green-light focus:outline-none shadow-lg text-gray-50 transition rounded">
               <!-- Register -->
               Login
            </router-link>
         </div>
      </div>
      </div>
   </div>
</template>