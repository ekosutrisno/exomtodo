<template>

   <AppNavHeader/>
    <!-- Content -->
  <div class="max-w-7xl mx-auto">
    <div class="flex-1 flex flex-col-reverse md:flex-row">
      <div class="md:flex-1 p-4 md:p-5">
        <!-- Header Content-->
        <HeaderContent/>
        <!-- End Header Content -->

        <!-- Start Tasks -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 mt-4">
          <!-- Task Ready -->
          <div class="p-1">
            <div class="w-full flex items-center py-2 justify-between">
              <div>
                <span class="font-semibold text-sm"> Task Ready </span>
              </div>
              <div @click="toggleShowMenuOptionReady" class="relative">
                <svg class="cursor-pointer w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <transition-group name="dropdown-fade">
                  <MenuItemsLg v-click-away="toggleShowMenuOptionReady"  v-if="showMenuOptionReady"/>
                  <MenuItemsSm v-click-away="toggleShowMenuOptionReady"  v-if="showMenuOptionReady"/>
                </transition-group>
              </div>
            </div>
            <!-- Task -->
            <div class="flex flex-col px-1 pb-10 space-y-2 h-100 overflow-y-auto">
              <!-- Card Task Ready In Here --> 
              <TaskCard  v-for="task in taskReady" :key="task.taskId" :task="task" />
              <div @click="addNewCard" class="bg-transparent w-full lg:w-56 flex items-center justify-center cursor-pointer h-20 mx-auto transition  rounded-lg p-2 border border-green-300 hover:bg-green-100 border-dashed">
                <div class="w-full text-center">
                  <button  class="focus:outline-none text-gray-500 font-semibold text-sm hover:text-green-600">+ add card</button>
                </div>
              </div>
              <!-- End Card Task Ready -->
             
              <!-- New Card Sect -->
              <transition-group name="dropdown-fade">
               <NewtTaskCard @done="addNewCard" v-if="newTask"/>
              </transition-group>
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
              <div @click="toggleShowMenuOptionProgress" class="relative">
                <svg class="cursor-pointer w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <transition-group name="dropdown-fade">
                  <MenuItemsLg v-click-away="toggleShowMenuOptionProgress" v-if="showMenuOptionProgress"/>
                  <MenuItemsSm v-click-away="toggleShowMenuOptionProgress" v-if="showMenuOptionProgress"/>
                </transition-group>
              </div>
            </div>
            <div class="flex flex-col px-1 pb-10 space-y-2 h-100 overflow-y-auto">
              <!-- Card On Progress Here -->         
                 <TaskCard v-for="task in taskOnProgress" :key="task.taskId" :task="task" />
                <div @click="addNewCard" class="bg-transparent w-full lg:w-56 flex items-center justify-center cursor-pointer h-20 mx-auto transition  rounded-lg p-2 border border-green-300 hover:bg-green-100 border-dashed">
                  <div class="w-full text-center">
                    <button  class="focus:outline-none text-gray-500 font-semibold text-sm hover:text-green-600">+ add card</button>
                  </div>
                </div>
              <!-- End Card Items Progress  -->
            </div>
          </div>
          <!-- End Task On Progress -->

          <!-- Task Need Review -->
          <div class="p-1">
            <div class="w-full flex items-center py-2 justify-between">
              <div>
                <span class="font-semibold text-sm"> Needs Review </span>
              </div>
              <div @click="toggleShowMenuOptionReview" class="relative">
                <svg class="cursor-pointer w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <transition-group name="dropdown-fade">
                  <MenuItemsLg v-click-away="toggleShowMenuOptionReview" v-if="showMenuOptionReview"/>
                  <MenuItemsSm v-click-away="toggleShowMenuOptionReview" v-if="showMenuOptionReview"/>
                </transition-group>
              </div>
            </div>
            <div class="flex flex-col px-1 pb-10 space-y-2 h-100 overflow-y-auto">
              <!-- Card Need Review In Here -->
                <TaskCard v-for="task in taskNeedReview" :key="task.taskId" :task="task" />
              <div @click="addNewCard" class="bg-transparent w-full lg:w-56 flex items-center justify-center cursor-pointer h-20 mx-auto transition  rounded-lg p-2 border border-green-300 hover:bg-green-100 border-dashed">
                <div class="w-full text-center">
                  <button  class="focus:outline-none text-gray-500 font-semibold text-sm hover:text-green-600">+ add card</button>
                </div>
              </div>
              <!-- End Card Need Review -->
            </div>
          </div>
          <!-- End Task Need Review -->

          <!-- Task Done -->
          <div class="p-1">
            <div class="w-full flex items-center py-2 justify-between">
              <div>
                <span class="font-semibold text-sm"> Done </span>
              </div>
              <div @click="toggleShowMenuOptionDone" class="relative">
                <svg class="cursor-pointer w-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <transition-group name="dropdown-fade">
                  <MenuItemsLg v-click-away="toggleShowMenuOptionDone" v-if="showMenuOptionDone"/>
                  <MenuItemsSm v-click-away="toggleShowMenuOptionDone" v-if="showMenuOptionDone"/>
                </transition-group>
              </div>
            </div>
            <div class="flex flex-col px-1 pb-10 space-y-2 h-100 overflow-y-auto">
              <!-- Card Item Done In Here-->
              <TaskCard v-for="task in taskDone" :key="task.taskId" :task="task" />
              <div @click="addNewCard" class="bg-transparent w-full lg:w-56 flex items-center justify-center cursor-pointer h-20 mx-auto transition  rounded-lg p-2 border border-green-300 hover:bg-green-100 border-dashed">
                <div class="w-full text-center">
                  <button  class="focus:outline-none text-gray-500 font-semibold text-sm hover:text-green-600">+ add card</button>
                </div>
              </div>
              <!-- End Card Item-->
            </div>
          </div>
          <!-- End Task Done -->
        </div>
        <!-- End Tasks -->
      </div>

      <div class="md:w-1/5 flex-none h-full border-l px-4">
          <ProgresBarCard/>
          <RecentActivityCard/>
    </div>
  </div>
</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {taskDone,taskNeedReview,taskOnProgress,taskReady} from '../../assets/data/Tasks';
import AppNavHeader from '../../components/app/AppNavHeader.vue'
import ProgresBarCard from '../../components/app/ProgresBarCard.vue'
import RecentActivityCard from '../../components/app/RecentActivityCard.vue'
import TaskCard from '../../components/app/TaskCard.vue'
import HeaderContent from '../../components/app/HeaderContent.vue'
import MenuItemsLg from '../../components/app/MenuItemsLg.vue'
import MenuItemsSm from '../../components/app/MenuItemsSm.vue';
import NewtTaskCard from '../../components/app/NewtTaskCard.vue';

   export default {
    components: { 
        AppNavHeader,
        ProgresBarCard, 
        RecentActivityCard,
        TaskCard,
        HeaderContent,
        MenuItemsLg,
        MenuItemsSm,
        NewtTaskCard
      },
      setup(){      
        const state = reactive({
          taskDone, 
          taskNeedReview,
          taskOnProgress,
          taskReady,
          newTask: false,
          showMenuOptionReady: false,
          showMenuOptionProgress: false,
          showMenuOptionReview: false,
          showMenuOptionDone: false
        })

        const toggleShowMenuOptionReady = () => {
          state.showMenuOptionReady = !state.showMenuOptionReady
        }
        const toggleShowMenuOptionProgress = () => {
          state.showMenuOptionProgress = !state.showMenuOptionProgress
        }
        const toggleShowMenuOptionReview = () => {
          state.showMenuOptionReview = !state.showMenuOptionReview
        }
        const toggleShowMenuOptionDone = () => {
          state.showMenuOptionDone = !state.showMenuOptionDone
        }

        const addNewCard = () =>{
          state.newTask = !state.newTask
        }

      return{
        ...toRefs(state),
        toggleShowMenuOptionReady,
        toggleShowMenuOptionProgress,
        toggleShowMenuOptionReview,
        toggleShowMenuOptionDone,
        addNewCard
      }
    }
   }
</script>,