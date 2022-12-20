<template>
  <div class="container">
    <main-sidebar></main-sidebar>
    
  </div>
</template>
  
<script>
import MainSidebar from './layout/MainSidebar.vue';
export default {
  name: "MainContainer",
  components: {
    MainSidebar
  }
}
</script>

<style scoped>
.container {
  overflow-y: hidden;
  display: flex;
  }
</style>