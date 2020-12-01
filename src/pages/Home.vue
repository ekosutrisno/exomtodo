<template>
   <div class="w-full">
      <Hero/>
      <Feature/>
      <Footer/>
    </div>
</template>
<script>
import Feature from '../components/welcome/Feature.vue';
import Footer from '../components/welcome/Footer.vue';
import Hero from '../components/welcome/Hero.vue';

export default {
  name: 'App',
  components: {
    Hero,
    Feature,
    Footer
  }
}
</script>