<template>
   <draggable 
      v-model="myArray" 
      group="people" 
      @start="drag=true" 
      @end="drag=false" 
      item-key="id">
  <template #item="{element}">
    <div>{{element.name}}</div>
   </template>
</draggable>
</template>

<script>
import { reactive, toRefs } from 'vue'
import {VueDraggableNext} from 'vue-draggable-next';
   export default {
      components:{draggable: VueDraggableNext},
      setup(){
         const state = reactive({
            myArray:[
               {
                  id:1,
                  name:'Eko'
               },
               {
                  id:2,
                  name:'Andi'
               },
               {
                  id:3,
                  name:'Joko'
               },
            ]
         })


         return{
            ...toRefs(state),
         }
      }
   }
</script>