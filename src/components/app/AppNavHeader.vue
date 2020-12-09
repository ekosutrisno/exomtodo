<template>
   <!-- Navbar Header -->
    <div class="bg-white ">
     <div class="flex flex-row max-w-7xl mx-auto items-center justify-between flex-none py-8 rounded w-full h-14 px-4">
         <!-- End Left Nav -->
      <div class="inline-flex w-full items-center">
        <router-link to="/" class="font-semibold inline-flex text-2xl">
          <div class="rounded-full bg-green-100 flex items-center justify-center text-green-500 px-2">EKO</div>
          <span class="font-bold text-gray-800">/MTodo</span>
        </router-link>
        <div class="md:flex hidden relative w-full ml-5">
          <input class="py-1.5 pl-12 rounded-full text-sm w-full transition max-w-sm bg-gray-50 hover:bg-gray-100 focus:bg-gray-100 ring-1 ring-gray-200 focus:outline-none" type="text" placeholder="Search Everything" />
          <svg class="w-5 absolute left-4 top-2 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      <!-- Left Nav -->

      <!-- Right Nav -->
      <div class="hidden md:inline-flex space-x-4 items-center">
        <button class="py-2 px-3 font-bold text-sm transition focus:outline-none text-gray-600 hover:text-green-500">Projects</button>
        <button class="py-2 px-3 font-bold text-sm transition focus:outline-none text-gray-600 hover:text-green-500">Settings</button>
        <button class="py-2 px-3 font-bold text-sm transition focus:outline-none text-gray-600 hover:text-green-500">Help</button>
        <button class="relative focus:outline-none text-gray-500">
          <div class="absolute w-2 h-2 right-0 bg-red-500 rounded-full"></div>
          <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
      <!-- End Right Nav -->
     </div>
    </div>
    <!-- End Navbar Header -->
</template>

<script>
   export default {
      
   }
</script>