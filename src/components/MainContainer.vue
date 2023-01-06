<template>
  <div class="container">
    <main-sidebar></main-sidebar>
    <div class="main-wrapper">
      <main-header></main-header> 
      <main-content></main-content> 
      <main-footer></main-footer>
    </div> 
    
  </div>
</template>
  
<script>
import MainSidebar from './layout/MainSidebar.vue';
import MainHeader from './layout/MainHeader.vue';
import MainFooter from './layout/MainFooter.vue';
import MainContent from './layout/MainContent.vue';
export default {
  name: "MainContainer",
  components: {
    MainSidebar,
    MainHeader,
    MainFooter,
    MainContent
  }
}
</script>

<style scoped>
.container {
  overflow-y: hidden;
  display: flex;
}
.main-wrapper {
  /* background-color: yellow; */
  /* width: 100%; */
  width: calc(100% - 200px);
  user-select: none;
} 
</style>