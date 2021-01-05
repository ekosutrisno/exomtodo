<template>
   <div class="hero-background h-full">
      <div class="max-w-7xl mx-auto p-4">
         <div class="flex flex-col items-center justify-center">
         <h1 class="md:text-6xl text-2xl mt-6 lg:mt-20 font-semibold text-gray-900">Daily Task Management</h1>
         <p class="text-center mt-4 md:text-xl">Every team has a unique process for shipping software.<br class="hidden lg:block"/> Use an out-of-the-box workflow, or create one to match the way your team works.</p>
         <router-link to="/portfolio" class="py-2 mt-10 inline-flex items-center space-x-2 px-5 uppercase font-medium bg-green-secondary  hover:bg-green-light focus:outline-none shadow-lg text-gray-50 transition rounded">
              <span>See My Portfolio</span> 
              <svg class="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </router-link>
         <img class="object-cover" width="800" src="https://webassets.mongodb.com/_com_assets/cms/BI@2x-kxuiwvzg21-07qoclm33y.png" alt="ilustrasi">
         </div>
      </div>
   </div>
</template>
<style scoped>
.hero-background {
  background-position: center;
  background-repeat: repeat;
  background-size: 400px;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 70%,
      rgba(255, 255, 255, 1)
    ),
    url(https://webassets.mongodb.com/_com_assets/cms/dots_hero-i42f3gz25y.png);
}
</style>