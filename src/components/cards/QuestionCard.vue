<template>
    <div class="w-full flex justify-between h-full p-4 bg-gray-50 rounded m-2">
      <!-- Aside -->
      <div class="w-20 flex-none h-full">
        <div class="inline-flex space-x-2 items-center">
          <button class="focus:outline-none cursor- inline-flex -space-x-3 text-gray-400">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
          <button class="w-10 h-10 focus:outline-none rounded-full">
            <img class="w-full h-full object-cover" :src="question.imageUrl" :alt="`user-avtr-${question.id}`">
          </button>
        </div>
      </div>
      <!-- End Aside -->

      <!-- Header -->
      <div class="w-full h-full pl-1 py-1 pr-3 flex-1">
        <div class="flex items-center justify-between">
          <div class="inline-flex space-x-2 items-center font-semibold text-gray-800">
            <span class=""> {{question.author}} </span>
            <span class="text-gray-400 font-medium text-sm">{{question.createdAt}} sec ago</span>
            <span class="text-gray-400 px-2 hidden lg:block text-sm bg-gray-100 rounded-full font-medium shadow-sm">#{{question.category}}</span>
            <button class="text-gray-400 focus:outline-none hover:bg-gray-200 text-sm bg-gray-100 rounded-full font-medium shadow-sm">
              <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          <div class="inline-flex space-x-2 items-center text-gray-800">
            <button @click="isLiked = !isLiked" :class="[isLiked ? 'text-pink-500' : 'text-gray-400']" class="focus:outline-none rounded-full font-medium shadow-sm hover:text-pink-500">
              <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            </button>
            <span class="text-gray-400 font-medium">{{question.likes}}</span>
          </div>
        </div>

        <!-- Question -->
        <div class="w-full pr-4">
          <p class="text-lg mt-2 font-semibold text-gray-700">{{question.question}}</p>
        </div>
        <!-- End Question -->

        <!-- Answer -->
        <AnswerCard v-for="answer in question.answers" :answer="answer" :key="answer.id" />
          <!-- Action -->
          <div class="flex flex-col md:flex-row md:items-center justify-between mt-7 border-t pt-4">
            <div class="lg:inline-flex lg:space-x-2 items-center text-gray-800">
              <button class="bg-gray-50 m-1 lg:m-0 text-gray-400 py-1 px-3 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">Approve</button>
              <button class="bg-gray-50 m-1 lg:m-0 text-gray-400 py-1 px-3 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">Done</button>
              <button class="bg-gray-50 m-1 lg:m-0 text-gray-400 py-1 px-3 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">Save for later</button>
              <button class="bg-gray-50 m-1 lg:m-0 text-gray-400 py-1 px-3 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">Archive</button>
            </div>
            <div class="inline-flex space-x-2 pt-3 lg:pt-0 items-center text-gray-800">
              <button class="bg-gray-50 text-gray-400 py-1 px-3 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">&bull; Live answer</button>
              <button class="bg-gray-50 text-gray-400 p-1 ring-1 ring-gray-200 focus:outline-none hover:bg-gray-100 rounded-lg">
                <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
            <!-- End Action -->

            <!-- End Header -->
          </div>
        </div>
      </div>
</template>

<script>
import { ref } from 'vue'
import AnswerCard from './AnswerCard.vue'
export default {
  components: { AnswerCard },
  props:{
    question:{
      type: Object
    }
  },
  setup(){
    const isLiked = ref(false)

    return{
      isLiked
    }
  }
}
</script>