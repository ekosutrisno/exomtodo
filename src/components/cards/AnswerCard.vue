<template>
   <div class="mt-7 pt-4 border-t">
      <div class="flex flex-col lg:flex-row items-center justify-between py-2">
      <div class="inline-flex space-x-2 items-center font-semibold text-gray-800">
         <button class="w-10 h-10 focus:outline-none rounded-full">
            <img class="w-full h-full object-cover" :src="answer.imageUrl" :alt="`user-avtr-${answer.id}`">
         </button>
         <span class="">{{answer.author}}</span>
         <span class="text-gray-400 font-medium text-sm hidden lg:block">{{answer.createdAt}} sec ago</span>
      </div>
      <div class="inline-flex space-x-2 items-center text-gray-800">
         <button @click="isLiked = !isLiked" :class="[isLiked ? 'text-pink-500' : 'text-gray-400']" class="hover:text-pink-500 focus:outline-none rounded-full font-medium shadow-sm">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
         </button>
         <span class="text-gray-400 font-medium">{{answer.likes}}</span>
      </div>
      </div>
      <!-- Answer -->
       <div class="w-full pr-4 pl-10 lg:pl-12">
          <p class="text-lg mt-2 font-semibold text-gray-700">{{answer.answer}}</p>
        </div>

      <div class="flex flex-col md:flex-row md:items-center justify-between mt-7 py-4 lg:ml-12">
      <div class="inline-flex space-x-2 items-center text-gray-800">
         <button v-if="answer.isAproved" class="bg-green-secondary text-gray-100 py-1 px-3 ring-1 ring-gray-200 focus:outline-none transition hover:bg-green-light rounded-lg">Approve</button>
         <button v-else class="bg-gray-50 text-gray-400 py-1 px-3 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">Archive</button>
         <button class="bg-gray-50 text-gray-400 py-1 px-3 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">Archive</button>
      </div>
      <div class="inline-flex space-x-2 mt-2 lg:mt-0 items-center text-gray-800">
         <button class="bg-gray-50 text-gray-400 py-1 px-3 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">&bull; Live answer</button>
         <button class="bg-gray-50 text-gray-400 p-1 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
         </button>
      </div>
      </div>
   </div>
</template>

<script>
import { ref } from 'vue'
export default {
   props:{
      answer:{
         type: Object
      }
   },
   setup () {
      const isLiked = ref(false)
      return {
         isLiked
      }
   }
}
</script>