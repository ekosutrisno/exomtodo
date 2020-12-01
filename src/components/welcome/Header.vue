<template>
   <div class="w-full shadow-sm sticky top-0 bg-gray-50">
      <div class="max-w-7xl mx-auto flex items-center justify-between p-2">
         <button class="focus:outline-none">
         <span class="font-bold text-gray-700 text-3xl">Eko/</span>
         <span class="font-semibold text-green-secondary text-3xl">MTodo</span>
         </button>
      <div class="lg:flex items-center space-x-5 hidden">
         <button class="py-2 px-3 focus:outline-none uppercase text-lg font-semibold text-gray-700 hover:text-green-secondary transition-colors">Home</button>
         <button class="py-2 px-3 focus:outline-none uppercase text-lg font-semibold text-gray-700 hover:text-green-secondary transition-colors">Example</button>
         <button class="py-2 px-3 focus:outline-none uppercase text-lg font-semibold text-gray-700 hover:text-green-secondary transition-colors">Q&A</button>
         <button class="py-2 px-3 focus:outline-none uppercase text-lg font-semibold text-gray-700 hover:text-green-secondary transition-colors">Blogs</button>
      </div>
      <div class="hidden lg:flex">
         <div class="flex items-center space-x-5">
            <button class="py-2 px-3 uppercase focus:outline-none font-medium hover:text-green-secondary transition-colors">
               Login
            </button>
            <button class="py-2 px-5 uppercase font-medium bg-green-secondary  hover:bg-green-light focus:outline-none shadow-sm text-gray-50 transition rounded">
               Register
            </button>
         </div>
      </div>
      </div>
   </div>
</template>