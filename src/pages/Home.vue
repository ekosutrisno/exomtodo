<template>
   <div class="w-full">
      <Hero/>
      <Feature/>
    </div>
</template>
<script>
import Feature from '../components/welcome/Feature.vue';
import Hero from '../components/welcome/Hero.vue';

export default {
  name: 'App',
  components: {
    Hero,
    Feature
  }
}
</script>