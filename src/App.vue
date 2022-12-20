<template>
  <div>
    <main-container></main-container>
  </div>
</template>
<script>
import MainContainer from './components/MainContainer.vue';
export default {
  name: 'App',
  components: {
    MainContainer
  }
}
</script>

<style scope>
@import url(./assets/css/resetCss.css);
@import url(./assets/css/base.css);
</style>
