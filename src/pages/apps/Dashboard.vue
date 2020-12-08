<template>
   <!-- Navbar Header -->
   <AppNavHeader/>
    <!-- End Navbar Header -->

    <!-- Content -->
    <div class="max-w-7xl mx-auto">
       <div class="flex-1 flex flex-col-reverse md:flex-row">
      <div class="md:flex-1 p-4 md:p-5">
        <!-- Header Content-->
        <div class="flex flex-col md:flex-row md:items-center justify-between">
          <h1 class="font-semibold text-xl mb-2 md:mb-0 md:text-4xl">Your Task Story</h1>
          <div class="inline-flex space-x-1">
            <img class="rounded-full border border-white w-9 h-9 cursor-pointer" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/scientist_einstein_avatar_professor-128.png" alt="i-1" />
            <img class="rounded-full border border-white w-9 h-9 cursor-pointer" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png" alt="i-1" />
            <img class="rounded-full border border-white w-9 h-9 cursor-pointer" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-128.png" alt="i-1" />
            <button type="button" class="focus:outline-none rounded-full border-2 border-green-200 border-dashed p-2">
              <svg class="w-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
        <!-- End Header Content -->

        <!-- Start Tasks -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 mt-4">
          <!-- Task Ready -->
          <div class="p-1">
            <div class="w-full flex items-center py-2 justify-between">
              <div>
                <span class="font-semibold text-sm"> Task Ready </span>
              </div>
              <span>
                <svg class="cursor-pointer w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </span>
            </div>
            <!-- Task -->
            <div class="flex flex-col space-y-2 max-h-98 overflow-y-auto">
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-purple-100 text-purple-700 font-bold text-xs rounded-full">Copywriting</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">These project will need a new brand identity where they will get recognize</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/suicide_squad_woman_avatar_joker-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-green-100 text-green-700 font-bold text-xs rounded-full">Ilustration</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">Create mockup for ilustratiions design in Sketch</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
              <!-- New Card Sect -->
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
                  <router-link to="/" class="w-full py-2 px-3 focus:outline-none bg-green-400 rounded-xl text-gray-50 font-medium hover:bg-green-500 transition text-center">
                  Done
                  </router-link>
                </div>
              </div>
              <!-- End New Card Sect -->
            </div>
          </div>
          <!-- End Task Ready-->

          <!-- Task On Progress -->
          <div class="p-1">
            <div class="w-full flex items-center py-2 justify-between">
              <div>
                <span class="font-semibold text-sm"> On Progress </span>
              </div>
              <span>
                <svg class="cursor-pointer w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </span>
            </div>
            <div class="flex flex-col space-y-2 max-h-98 overflow-y-auto">
              <!-- Card Items Here -->
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-purple-100 text-purple-700 font-bold text-xs rounded-full">Copywriting</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">These project will need a new brand identity where they will get recognize</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn0.iconfinder.com/data/icons/female-styles/500/woman-pretty-bg-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-green-100 text-green-700 font-bold text-xs rounded-full">Ilustration</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">Create mockup for ilustratiions design in Sketch</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-cyan-100 text-cyan-700 font-bold text-xs rounded-full">UI Design</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">These project will need a new brand identity where they will get recognize</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-purple-100 text-purple-700 font-bold text-xs rounded-full">Copywriting</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">These project will need a new brand identity where they will get recognize</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
              <!-- End Card Items  -->
            <div class="w-full py-2 text-center">
              <button class="focus:outline-none py-1 transition px-3 rounded-full text-gray-500 font-semibold text-sm hover:text-green-600 hover:bg-green-100">+ add card</button>
            </div>
            </div>

          </div>
          <!-- End Task On Progress -->

          <!-- Task Need Review -->
          <div class="p-1">
            <div class="w-full flex items-center py-2 justify-between">
              <div>
                <span class="font-semibold text-sm"> Needs Review </span>
              </div>
              <span>
                <svg class="cursor-pointer w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </span>
            </div>
            <div class="flex flex-col space-y-2 max-h-98 overflow-y-auto">
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-cyan-100 text-cyan-700 font-bold text-xs rounded-full">UI Design</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">These project will need a new brand identity where they will get recognize</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
            <div class="w-full py-2 text-center">
              <button class="focus:outline-none py-1 transition px-3 rounded-full text-gray-500 font-semibold text-sm hover:text-green-600 hover:bg-green-100">+ add card</button>
            </div>
            </div>
          </div>
          <!-- End Task Need Review -->

          <!-- Task Done -->
          <div class="p-1">
            <div class="w-full flex items-center py-2 justify-between">
              <div>
                <span class="font-semibold text-sm"> Done </span>
              </div>
              <span>
                <svg class="cursor-pointer w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </span>
            </div>
            <div class="flex flex-col space-y-2 max-h-98 overflow-y-auto">
              <!-- Card Item Done-->
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-yellow-100 text-yellow-700 font-bold text-xs rounded-full">Frontend</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">These project will need a new brand identity where they will get recognize</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
              <div class="bg-white flex flex-col max-h-80 w-full mx-auto rounded-lg p-5 font-exo hover:shadow-lg cursor-pointer transition">
                <div class="w-full flex items-center mb-3 justify-between">
                  <div class="inline-flex space-x-2 mt-2">
                    <span class="py-0.5 px-2.5 bg-pink-100 text-pink-700 font-bold text-xs rounded-full">Backend</span>
                  </div>
                  <span>
                    <svg class="cursor-pointer w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                  </span>
                </div>
                <p class="text-xs text-gray-900 font-semibold">These project will need a new brand identity where they will get recognize</p>
                <div class="w-full flex items-center mt-3 justify-between">
                  <div class="inline-flex text-gray-500 items-center space-x-4">
                    <div class="inline-flex space-x-2 text-xs font-semibold hover:text-green-500">
                      <svg class="cursor-pointer w-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                      </svg>
                      <span>Nov 24</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-blue-500">
                      <svg class="cursor-pointer w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>2</span>
                    </div>
                    <div class="inline-flex space-x-1 text-xs font-semibold hover:text-pink-500">
                      <svg class="cursor-pointer w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                      </svg>
                      <span>5</span>
                    </div>
                  </div>
                  <div class="inline-flex -space-x-2">
                    <img class="rounded-full border border-white w-7 cursor-pointer" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/boy_person_avatar_kid-128.png" alt="i-1" />
                  </div>
                </div>
              </div>
              <!-- Card Item-->
            <div class="w-full py-2 text-center">
              <button class="focus:outline-none py-1 transition px-3 rounded-full text-gray-500 font-semibold text-sm hover:text-green-600 hover:bg-green-100">+ add card</button>
            </div>
            </div>
          </div>
          <!-- End Task Done -->
        </div>
        <!-- End Tasks -->
      </div>

      <!-- Left Content Sidebar -->
      <div class="md:w-1/5 flex-none h-full border-l px-4">
        <h1 class="font-semibold text-lg pt-4">Task Progress</h1>
        <div class="inline-block space-y-2 pb-2 md:pb-10">
          <div class="inline-block w-full space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold">Copywriting</span>
              <span class="text-xs font-semibold text-gray-400">3/8</span>
            </div>
            <div class="w-full h-2 shadow-sm rounded-full bg-gray-200 relative cursor-pointer hover:bg-gray-300 transition">
              <div class="w-1/2 shadow-sm h-2 rounded-full bg-purple-500 absolute inset-0"></div>
            </div>
          </div>
          <div class="inline-block w-full space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold">Ilustrator</span>
              <span class="text-xs font-semibold text-gray-400">6/10</span>
            </div>
            <div class="w-full h-2 shadow-sm rounded-full bg-gray-200 relative cursor-pointer hover:bg-gray-300 transition">
              <div class="w-2/3 shadow-sm h-2 rounded-full bg-green-500 absolute inset-0"></div>
            </div>
          </div>
          <div class="inline-block w-full space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold">UI Design</span>
              <span class="text-xs font-semibold text-gray-400">2/7</span>
            </div>
            <div class="w-full h-2 shadow-sm rounded-full bg-gray-200 relative cursor-pointer hover:bg-gray-300 transition">
              <div class="w-2/5 shadow-sm h-2 rounded-full bg-blue-500 absolute inset-0"></div>
            </div>
          </div>
          <div class="inline-block w-full space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold">Frontend</span>
              <span class="text-xs font-semibold text-gray-400">6/7</span>
            </div>
            <div class="w-full h-2 shadow-sm rounded-full bg-gray-200 relative cursor-pointer hover:bg-gray-300 transition">
              <div class="w-3/4 shadow-sm h-2 rounded-full bg-yellow-500 absolute inset-0"></div>
            </div>
          </div>
          <div class="inline-block w-full space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold">Backend</span>
              <span class="text-xs font-semibold text-gray-400">7/7</span>
            </div>
            <div class="w-full h-2 shadow-sm rounded-full bg-gray-200 relative cursor-pointer hover:bg-gray-300 transition">
              <div class="w-2/2 shadow-sm h-2 rounded-full bg-pink-400 absolute inset-0"></div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <h1 class="font-semibold text-lg py-4 md:py-0 md:mb-3">Recent Activity</h1>
        <div class="inline-block space-y-6 md:pb-5 max-h-64 overflow-y-auto">
          <div class="grid grid-cols-6 w-full">
            <div class="col-span-1 md:col-span-2">
              <button type="button" class="p-2 focus:outline-none hover:bg-opacity-80 bg-yellow-500 rounded-full">
                <svg class="w-4 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
            </div>
            <div class="col-span-4">
              <p class="text-xs">
                <span class="font-semibold">Andrea</span>
                uploaded 3 documents
              </p>
              <span class="text-gray-400 text-xs">Aug 10</span>
            </div>
          </div>
          <div class="grid grid-cols-6 w-full">
            <div class="col-span-1 md:col-span-2">
              <button type="button" class="p-2 focus:outline-none hover:bg-opacity-80 bg-green-500 rounded-full">
                <svg class="w-4 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </button>
            </div>
            <div class="col-span-4">
              <p class="text-xs">
                <span class="font-semibold">Karen</span>
                uploaded 3 documents
              </p>
              <span class="text-gray-400 text-xs">Aug 10</span>
            </div>
          </div>
          <div class="grid grid-cols-6 w-full">
            <div class="col-span-1 md:col-span-2">
              <button type="button" class="p-2 focus:outline-none hover:bg-opacity-80 bg-indigo-500 rounded-full">
                <svg class="w-4 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </button>
            </div>
            <div class="col-span-4">
              <p class="text-xs">
                <span class="font-semibold">Karen</span>
                uploaded 3 documents
              </p>
              <span class="text-gray-400 text-xs">Aug 10</span>
            </div>
          </div>
          <div class="grid grid-cols-6 w-full">
            <div class="col-span-1 md:col-span-2">
              <button type="button" class="p-2 focus:outline-none hover:bg-opacity-80 bg-yellow-500 rounded-full">
                <svg class="w-4 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>
            </div>
            <div class="col-span-4">
              <p class="text-xs">
                <span class="font-semibold">Andrea</span>
                uploaded 3 documents
              </p>
              <span class="text-gray-400 text-xs">Aug 10</span>
            </div>
          </div>
          <div class="grid grid-cols-6 w-full">
            <div class="col-span-1 md:col-span-2">
              <button type="button" class="p-2 focus:outline-none hover:bg-opacity-80 bg-green-500 rounded-full">
                <svg class="w-4 text-gray-50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </button>
            </div>
            <div class="col-span-4">
              <p class="text-xs">
                <span class="font-semibold">Karen</span>
                uploaded 3 documents
              </p>
              <span class="text-gray-400 text-xs">Aug 10</span>
            </div>
          </div>
        </div>
        <!-- End Recent Activity -->
      </div>
      <!-- End Left Content Sidebar -->
    </div>
    
    </div>
    <!-- End Content -->
</template>

<script>
import AppNavHeader from '../../components/app/AppNavHeader.vue'
   export default {
  components: { AppNavHeader },
      
   }
</script>