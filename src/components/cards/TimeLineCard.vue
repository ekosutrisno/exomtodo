<template>
   <li>
      <article>
      <div class="grid cursor-pointer md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-green-50"
         ><h3 class="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0"> {{timeLine.title}} </h3>
         <time :datetime="timeLine.milestone" class="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0">
            <svg viewBox="0 0 12 12" class="w-3 h-3 mr-6 overflow-visible text-green-400">
            <circle cx="6" cy="6" r="6" fill="currentColor"></circle>
            <path d="M 6 -6 V -30" fill="none" stroke-width="2" stroke="currentColor" class="text-gray-200"></path>
            <path d="M 6 18 V 500" fill="none" stroke-width="2" stroke="currentColor" class="text-gray-200"></path>
            </svg>
         {{timeLine.date}}
         </time
         >
         <p class="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
           {{timeLine.story}}
         </p>
         </div>
      </article>
   </li>
</template>

<script>
   export default {
      props:{
         timeLine:{
            type: Object
         }
      }
   }
</script>