<template>
  <div class="container">
    <main-sidebar></main-sidebar>
  </div>
</template>
<script>
import MainSidebar from './components/layout/MainSidebar.vue';
export default {
  name: 'App',
  components: {
    MainSidebar
  }
}
</script>

<style scope>
@import url(./assets/css/resetCss.css);
@import url(./assets/css/base.css);
  .container {
  overflow-y: hidden;
  display: flex;
  }
  
</style>
