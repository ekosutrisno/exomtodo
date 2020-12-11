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
        <button @click="showMenu = !showMenu" class="relative focus:outline-none text-gray-500">
          <div class="absolute w-2 h-2 right-0 bg-red-500 rounded-full"></div>
          <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <div v-if="showMenu" class="w-44 z-50 absolute shadow-lg h-auto left-0 top-8 -ml-44 pt-2 bg-gray-50 rounded-xl rounded-tr-sm flex flex-col overflow-hidden">
            <button type="button" class="w-full group transition-colors duration-300 text-gray-500 focus:outline-none py-2 px-3 hover:bg-gray-100 inline-flex space-x-2">
              <svg class="w-5 transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path fill="#fff" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              <span class="font-semibold">Profile</span>
            </button>
            <button type="button" class="w-full group transition-colors duration-300 text-gray-500 focus:outline-none py-2 px-3 hover:bg-gray-100 inline-flex space-x-2">
              <svg class="w-5 transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span class="font-semibold">Notification</span>
            </button>
            <button type="button" class="w-full group transition-colors duration-300 text-gray-500 focus:outline-none py-2 px-3 hover:bg-gray-100 inline-flex space-x-2">
              <svg class="w-5 transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="font-semibold">Jobs</span>
            </button>
            <button type="button" class="w-full group transition-colors duration-300 text-gray-500 focus:outline-none py-2 px-3 hover:bg-gray-100 inline-flex space-x-2">
              <svg class="w-5 transition-colors duration-300 group-hover:text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
              </svg>
              <span class="font-semibold">Archive</span>
            </button>
            <div class="w-full grid grid-cols-3 border-t text-center">
              <button class="py-1 w-16 text-gray-500 focus:outline-none hover:bg-gray-100 hover:text-green-500">
                <svg class="w-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </button>
              <button class="py-1 w-16 text-gray-500 focus:outline-none hover:bg-gray-100 hover:text-green-500">
                <svg class="w-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
              <button class="py-1 w-16 text-gray-500 focus:outline-none hover:bg-gray-100 hover:text-green-500">
                <svg class="w-8 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </button>
            </div>
          </div>
        </button>
      </div>
      <!-- End Right Nav -->
     </div>
    </div>
    <!-- End Navbar Header -->
</template>

<script>
import { ref } from 'vue'
   export default {
      setup(){
        const showMenu = ref(false)

        return{showMenu}
      }
   }
</script>