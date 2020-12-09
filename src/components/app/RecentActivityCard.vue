<template>
   <h1 class="font-semibold text-lg py-4 md:py-0 md:mb-3">Recent Activity</h1>
   <div class="inline-block space-y-4 md:pb-5 max-h-64 overflow-y-auto">
      <div v-for="activity in activites" :key="activity.activity_id" class="grid grid-cols-6 w-full">
         <div class="col-span-1 md:col-span-2">
            <button v-if="activity.activity_type == 'upload'" type="button" class="p-2 focus:outline-none hover:bg-opacity-80 bg-yellow-500 rounded-full">
               <svg class="w-4 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
               </svg>
            </button>
            <button v-else-if="activity.activity_type == 'comment'" type="button" class="p-2 focus:outline-none hover:bg-opacity-80 bg-green-500 rounded-full">
               <svg  class="w-4 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
               </svg>
            </button>
            <button v-else type="button" class="p-2 focus:outline-none hover:bg-opacity-80 bg-indigo-500 rounded-full">

               <svg class="w-4 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
               </svg>
            </button>
         </div>
         <div class="col-span-4">
            <p class="text-xs">
               <span class="font-semibold"> {{activity.author}} </span>
               {{activity.description}}
            </p>
            <span class="text-gray-400 text-xs"> {{activity.activity_date}} </span>
         </div>
      </div>
   </div>
</template>

<script>
import activites from '../../assets/data/Activity';
import { reactive, toRefs } from 'vue'
   export default {

      setup(){
            const state = reactive({
               activites :activites
            })
            return{
               ...toRefs(state)
            }

      }
   }
</script>

<style scoped>

</style>