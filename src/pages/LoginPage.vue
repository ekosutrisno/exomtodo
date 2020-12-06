<template>
   <div class="min-h-screen login-background bg-gray-100 py-6 flex justify-center items-center">
  <div class="max-w-7xl flex justify-center w-full lg:mx-auto mx-2 lg:p-3">
    <div class="lg:w-3/4 w-full lg:px-0 min-w-min flex flex-col lg:flex-row rounded-sm  ring ring-gray-300 ring-opacity-20 h-full lg:h-100 bg-gray-100 shadow">
      <div class="w-full lg:w-1/2 relative lg:p-8">
        <div class="p-5 h-full flex flex-col items-start lg:justify-between">
          <div>
          <router-link to="/">
            <svg class="w-5 text-gray-500 transition-transform transform hover:-translate-x-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </router-link>
            <h1 class="text-4xl font-semibold tracking-wide mt-2">
              Bring Explorers <br />
              to Your Journey
            </h1>
            <p class="text-gray-700 mt-3 mb-3">Explore different disciplines, character opportunities and activities. We provide young learners woth valuable life skills.</p>
          </div>
          <router-link to="/" class="focus:outline-none">
            <span class="font-bold text-gray-700 text-sm">Eko/</span>
            <span class="font-semibold text-green-secondary text-sm">MTodo</span>
            <span class="text-gray-900 tracking-wider text-xs block text-left">Foundations</span>
          </router-link>
        </div>
        <div class="lg:absolute flex-col items-center justify-end w-full lg:w-100 h-32 py-3 px-3 rounded bg-opacity-5 lg:ring-4 ring-gray-300 ring-opacity-30 bottom-28 right-0 lg:-mr-48 bg-black">
          <div class="my-2 font-semibold text-gray-800">Your email</div>
          <form class="flex items-center w-full mx-auto">
            <input type="email" placeholder="usereemail@email.com" class="py-3 px-4 shadow-lg rounded-tl rounded-bl w-full focus:outline-none ring-2 ring-green-secondary ring-opacity-0 focus:ring-opacity-40" required />
            <button type="submit" class="py-3 px-4 inline-flex items-center space-x-2 uppercase font-medium bg-green-secondary ring-2 ring-green-secondary ring-opacity-0 focus:ring-opacity-40 hover:bg-green-light focus:outline-none text-gray-50 transition rounded-tr rounded-br shadow-lg">
              <span>Register</span>
            </button>
          </form>
        </div>
      </div>
      <div class="w-full h-32 lg:h-full lg:w-1/2">
        <div class="h-full">
          <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Z3JlZW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
   name:'LoginPage',
   setup () {
      

      return {}
   }
}
</script>
<style scoped>
.login-background {
  background-position: center;
  background-repeat: repeat;
  background-size: 600px;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 1)
    ),
    url(https://webassets.mongodb.com/_com_assets/cms/dots_hero-i42f3gz25y.png);
}
</style>