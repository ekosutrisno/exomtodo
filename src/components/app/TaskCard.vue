<template>
 <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
   <div class="w-full flex items-center mb-3 justify-between">
      <div class="inline-flex space-x-2 mt-2">
      <span v-if="task.tag.tagId == 1" class="py-0.5 px-2.5 bg-green-100 text-green-700 font-bold text-xs rounded-full">Ilustration</span>
      <span v-else-if="task.tag.tagId ==2" class="py-0.5 px-2.5 bg-purple-100 text-purple-700 font-bold text-xs rounded-full">Copywriting</span>
      <span v-else-if="task.tag.tagId == 3" class="py-0.5 px-2.5 bg-blue-100 text-blue-700 font-bold text-xs rounded-full">UI Design</span>
      <span v-else-if="task.tag.tagId == 4" class="py-0.5 px-2.5 bg-yellow-100 text-yellow-700 font-bold text-xs rounded-full">Frontend</span>
      <span v-else-if="task.tag.tagId == 5" class="py-0.5 px-2.5 bg-pink-100 text-pink-700 font-bold text-xs rounded-full">Backend</span>
    </div>
      <div @click="hideMenuOption" class="relative">
         <transition-group name="dropdown-fade">
            <div v-click-away="hideMenuOption" v-if="option" class="w-32 absolute z-50 shadow-2xl h-auto left-0 top-0 -ml-28 mt-6 py-1 bg-gray-50 rounded flex flex-col overflow-hidden">
               <button @click="eventPrint('Edit')" type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-100 inline-flex space-x-2">
                  <span>Edit</span>
               </button>
               <button @click="eventPrint('Archive')" type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-100 inline-flex space-x-2">
                  <span>Archive</span>
               </button>
               <button @click="eventPrint('Delete')" type="button" class="w-full text-xs group transition-colors duration-300 text-gray-700 focus:outline-none py-2 px-3 hover:text-gray-900 hover:bg-gray-100 inline-flex space-x-2">
                  <span>Delete</span>
               </button>
            </div>
            </transition-group>
         <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
         </svg>
      </div>
      </div>
      <p class="text-xs text-gray-900 font-semibold"> {{task.description}} </p>
      <div class="w-full flex items-center mt-3 justify-between">
      <div class="inline-flex text-gray-500 items-center space-x-4">
         <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
            <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            <span> {{task.dueDate}} </span>
         </div>
         <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
            <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <span> {{task.comments.size}} </span>
         </div>
         <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
            <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
            <span> {{task.attach.size}} </span>
         </div>
      </div>
      <div class="inline-flex -space-x-2">
         <img v-for="member in task.members" :key="member.id" class="rounded-full border border-white w-7 cursor-pointer" :src="member.avatar" alt="i-1" />
      </div>
   </div>
</div>
</template>

<script>
import { ref } from 'vue'
   export default {
      props:{
         task:{
            type: Object,
         }
      },
      setup(){
         const option = ref(false)

         const hideMenuOption = () => {
            option.value = !option.value
         }

         const eventPrint = (val) => {
            console.log(val);
         }

         return{
            option,
            hideMenuOption,
            eventPrint
         }
      }
      
   }
</script>

