<template>
<!-- All Wrapper -->
  <div class="min-h-screen bg-gray-100">
    <div class="w-full">
      <NavbarHeader/>
      <router-view></router-view>
      <NavbarFooter/>
    </div>
  </div>
</template>

<script>
import NavbarFooter from './components/welcome/NavbarFooter.vue'
import NavbarHeader from './components/welcome/NavbarHeader.vue'

export default {
  components: { NavbarHeader,NavbarFooter },
  name: 'App'
}
</script>
