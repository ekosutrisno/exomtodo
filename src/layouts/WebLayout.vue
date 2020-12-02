<template>
    <div class="min-h-screen bg-gray-100">
    <div class="w-full">
      <NavbarHeader/>
        <router-view></router-view>
      <Footer/>
      <NavbarFooter/>
    </div>
  </div>
</template>

<script>

import Footer from '../components/web/Footer.vue'
import NavbarFooter from '../components/web/NavbarFooter.vue'
import NavbarHeader from '../components/web/NavbarHeader.vue'
export default {
  name:'WebLayout',
    components: { NavbarHeader,NavbarFooter, Footer }
}
</script>