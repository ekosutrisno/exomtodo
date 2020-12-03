<template>
   <a :href="href" target="_blank" class="font-semibold m-1 inline-flex space-x-1 text-sm px-3 bg-green-secondary rounded-full ring-2 ring-green-secondary ring-opacity-60  border-2 border-gray-100 text-gray-100">
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