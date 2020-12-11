<template>
  <!-- Wrapper -->
  <div class="h-full lg:max-h-screen overflow-hidden bg-gray-100 flex flex-col">
       <router-view></router-view>
   </div>
</template>

<script>
export default {
   name:'AppLayout',
}
</script>
<style>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.2s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>