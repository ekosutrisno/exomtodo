<template>
<!-- All Wrapper -->
  <div class="min-h-screen bg-gray-100">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style scoped>
.bg-custom-01 {
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
  background-image: url('https://webassets.mongodb.com/_com_assets/cms/shadow-dots-41y54qfxqz.svg');
}
.bg-custom-02 {
  background: url(https://webassets.mongodb.com/_com_assets/cms/13x13-dot-dark@3x-wmem1vevpx.svg)
    repeat 6px;
}
</style>
