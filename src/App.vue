<template>
  <router-view class="font-exo"></router-view>
</template>

<script>
export default {
  name: "App",
  setup() {

  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

div * {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
div *::-webkit-scrollbar-track {
  box-shadow: none !important;
  background-color: transparent;
}
div *::-webkit-scrollbar {
  width: 3px !important;
  background-color: transparent;
}
div *::-webkit-scrollbar-thumb {
  background-color: transparent;
}

.on-scrollbar {
  scrollbar-width: thin; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.on-scrollbar::-webkit-scrollbar-track {
  box-shadow: none !important;
  background-color: transparent !important;
}

.on-scrollbar::-webkit-scrollbar {
  width: 8px !important;
  background-color: transparent;
}

.on-scrollbar::-webkit-scrollbar-thumb {
  background-color: #acacac;
  border-radius: 4px;
}
</style>
