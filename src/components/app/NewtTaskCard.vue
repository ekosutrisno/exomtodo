<template>
<div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
   <div class="w-full flex items-center py-2 justify-between">
      <div>
         <span class="font-bold text-gray-600"> Create New Card </span>
      </div>
      <span>
         <svg class="cursor-pointer w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
         </svg>
      </span>
   </div>
   <textarea rows="4" class="text-xs rounded border border-gray-200 p-3 focus:outline-none text-gray-500 font-medium" placeholder="What is the task?"></textarea>
   <div class="flex items-center justify-between text-xs mt-2 border-b py-2">
      <div class="inline-flex space-x-2">
         <svg class="w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
         </svg>
         <span class="py-0.5 px-2.5 bg-blue-100 text-blue-700 font-bold rounded-full">UI Design</span>
      </div>
      <button type="button" class="focus:outline-none rounded-full border border-green-200 text-green-500 hover:bg-green-500 hover:text-gray-50 border-dashed p-1">
         <svg class="w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
         </svg>
      </button>
   </div>
   <div class="flex items-center justify-between text-xs mt-2 py-2">
      <div class="inline-flex items-center font-semibold text-gray-400 space-x-2">
         <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
         </svg>
         <img class="rounded-full border border-white w-7 ring-2 cursor-pointer ring-gray-200 ring-opacity-30" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-128.png" alt="i-1" />
         <span>Samanta</span>
      </div>
      <button type="button" class="focus:outline-none rounded-full border border-green-200 text-green-500 hover:bg-green-500 hover:text-gray-50 border-dashed p-1">
         <svg class="w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
         </svg>
      </button>
   </div>
   <div class="w-full flex items-center mt-3 justify-between">
      <button @click="emitAction" class="w-full py-2 px-3 focus:outline-none bg-green-400 rounded-xl text-gray-50 font-medium hover:bg-green-500 transition text-center">
         Done
      </button>
   </div>
</div>
</template>

<script>
   export default {
      name: 'NewTaskCard',
      setup(_,ctx){

         const emitAction = () =>{
            ctx.emit('done')
         }

         return{emitAction}
      }
   }
</script>

<style scoped>

</style>