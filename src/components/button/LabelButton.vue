<template>
   <a href="" class="font-semibold m-1 inline-flex space-x-1 text-sm px-3 bg-green-secondary rounded-full border border-green-600 text-gray-100">
      <span>
         <slot></slot>
      </span>
    </a>
</template>

<script>
export default {
   props:{
      href:{
         type: String
      }
   },
   setup () {
      

      return {}
   }
}
</script>