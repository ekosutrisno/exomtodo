<template>
    <div class="max-w-7xl mx-auto p-2">
      <div class="flex flex-col items-center justify-center">
            <div class="w-full px-2 flex items-center justify-center">
               <input @keyup.enter="searchQuestion" v-model="inputSearch" type="text" placeholder="Search (Press “/” to focus)"  class="py-3 px-4 shadow-lg rounded w-full max-w-lg mt-6 focus:outline-none ring-2 ring-green-secondary ring-opacity-0 focus:ring-opacity-40"/>
            </div>
         <h1 class="md:text-6xl text-2xl mt-2 lg:mt-8 font-semibold text-gray-900">Question and Answer</h1>
         <p class="lg:text-center mt-4 text-xl">Every team has a unique process for shipping software.<br class="hidden lg:block"/> Use an out-of-the-box workflow, or create one to match the way your team works.</p>
            <button class="py-2 mt-10 inline-flex items-center space-x-2 px-5 uppercase font-medium bg-green-secondary  hover:bg-green-light focus:outline-none shadow-lg text-gray-50 transition rounded">
               <span>Ask Question</span> 
               <svg class="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
             </button>
       </div>
       <div class="flex items-center justify-end my-4">
          <div class="inline-flex items-center">
             <span class="mr-3 font-medium">Sort by </span>
             <button class="rounded-tl-md rounded-bl-md focus:outline-none py-1 px-6 transition bg-gray-200 border border-gray-300 border-r-0 hover:border-gray-300">Asked</button>
             <button class="rounded-tr-md rounded-br-md focus:outline-none py-1 px-2 bg-gray-100 hover:bg-gray-200 transition border border-l-0 border-gray-300">
                <svg class="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
               </svg>
             </button>
          </div>
       </div>

      <div class="w-full max-w-7xl mx-auto pb-16 lg:pb-0">
         <QuestionCard v-for="question in questions" :key="question.id" :question="question"/>
      </div>
   </div>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import QuestionCard from '../components/cards/QuestionCard.vue'
import questions from '../assets/data/Question';
   export default {
  components: { QuestionCard },
      
      setup(){
         const state = reactive({
            questions: questions
         })

         const inputSearch = ref('')

         const searchQuestion = ()=>{
            if(!inputSearch == ''){
               const fileteredQuestion = questions.filter(q => q.author === inputSearch.value)
               state.questions = fileteredQuestion;
               inputSearch.value = ''
            }else{
               return
            }
         }
           
         return {
            ...toRefs(state),
            searchQuestion,
            inputSearch
         }

      }
   }
</script>