<template>
<div class="w-56 z-40 hidden lg:block divide-y absolute shadow-lg h-auto lg:right-0 lg:top-8 lg:-mr-56 py-1 bg-gray-50 rounded overflow-hidden">
   <div class="flex justify-between items-center px-3">
      <div class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 inline-flex space-x-2">
         <span>List Actions</span>
      </div>
      <svg class="w-5 text-gray-500 hover:text-gray-700 font-semibold cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
   </div>
   <div class="flex flex-col">
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
         <span>Add Card...</span>
      </button>
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
         <span>Copy List...</span>
      </button>
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
         <span>Move Card...</span>
      </button>
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
         <span>Watch</span>
      </button>
   </div>
   <div class="flex flex-col">
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
         <span>Sort By...</span>
      </button>
   </div>
   <div class="flex flex-col">
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
         <span>Move All Card in This List...</span>
      </button>
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
         <span>Archive All Card in This List...</span>
      </button>
   </div>
   <div class="flex flex-col">
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-200 inline-flex space-x-2">
         <span>Archive This List</span>
      </button>
      <button type="button" class="w-full text-xs group transition-colors duration-300 text-red-700 font-semibold focus:outline-none py-2 px-3 hover:text-gray-100 hover:bg-red-500 inline-flex space-x-2">
         <span>Delete</span>
      </button>
   </div>
   </div>
</template>

<script>
   export default {
      name:'MenuItemsLg',
   }
</script>