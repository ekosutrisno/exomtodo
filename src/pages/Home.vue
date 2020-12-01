<template>
   <div class="w-full">
      <Header/>
      <Hero/>
      <Feature/>
      <Testimony/>
    </div>
</template>
<script>
import Feature from '../components/welcome/Feature.vue';
import Header from '../components/welcome/Header.vue';
import Hero from '../components/welcome/Hero.vue';
import Testimony from '../components/welcome/Testimony.vue';

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Feature,
    Testimony
  }
}
</script>