<template>
  <!-- Wrapper -->
  <div class="h-full md:h-screen md:max-h-screen bg-gray-100 flex flex-col">
       <router-view></router-view>
   </div>
</template>

<script>
export default {
   name:'AppLayout',
}
</script>