<template>
  <div class="w-full h-full cursor-pointer lg:h-72 my-4 transition-shadow duration-300 flex flex-col lg:flex-row bg-gray-50 ring-1 ring-gray-300 ring-opacity-60 hover:ring-opacity-80 rounded-xl hover:shadow-lg">
    <div class="h-72 w-full lg:w-96 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none overflow-hidden">
      <img class="w-full h-full object-cover" :src="blog.imageUrl" />
    </div>
    <div class="h-full w-full rounded-l-xl overflow-hidden py-5 px-8">
      <div class="flex flex-col md:flex-row items-start justify-between">
        <div class="inline-block">
          <span class="font-semibold text-2xl block text-gray-700">{{ blog.blogTitle }} <i v-if="blog.edited" class="text-gray-400" style="font-size:0.7rem">edited</i> </span>
          <span class="text-xs text-gray-700 block md:inline-flex md:space-x-1 items-center mt-2">
            <div class="inline-flex space-x-1 mr-2 md:mr-0">
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
            <p>{{ blog.publishedAt }}</p>
            </div>
            <div class="inline-flex space-x-1">
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd" />
            </svg>
            <p> {{blog.writer}} </p>
            </div>
            <div class="inline-flex space-x-1">
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
            </svg>
            <p> {{blog.readTime}}  min of read</p>
            </div>
          </span>
        </div>
        <div class="inline-flex items-center space-x-2 mt-1">
          <button class="transition hover:text-green-secondary text-gray-500 focus:outline-none rounded">
            <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="transition hover:text-green-secondary text-gray-500 focus:outline-none rounded">
            <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>
          </button>
          <button class="focus:outline-none rounded-full ring-2 ring-green-secondary ring-opacity-0 hover:ring-opacity-90">
            <img class="rounded-full w-8 h-8" :src="blog.imageUrl" :alt="`img-${blog.id}`">
          </button>
        </div>
      </div>
      <p class="mt-4 font-normal">{{ blog.highlight }}</p>
      <div class="w-full h-full flex justify-end">
        <button class="text-gray-700 transition inline-flex space-x-1 items-start focus:outline-none hover:text-green-secondary">
          <span> Read more story</span>
          <svg class="w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"BlogCard",
  props:{
    blog:{
      type: Object,
      required: true
    }
  }
}
</script>