<template>
   <div class="w-full">
      <Hero/>
      <Feature/>
    </div>
</template>
<script>
import Feature from '../components/web/Feature.vue';
import Hero from '../components/web/Hero.vue';

export default {
  name: 'App',
  components: {
    Hero,
    Feature
  }
}
</script>