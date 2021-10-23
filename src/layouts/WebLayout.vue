<template>
    <div class="min-h-screen bg-gray-100">
    <div class="w-full">
      <NavbarHeader/>
        <router-view></router-view>
        
    <section class="flex px-2 pb-24 lg:pb-8 pt-8 items-center justify-center h-10 border-t-2 border-gray-200">
      <p class="text-sm flex flex-col items-center md:flex-row">
        <span class="mr-2">&copy; {{(new Date()).getFullYear()}} Eko Sutrisno </span>
      </p>
    </section>
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