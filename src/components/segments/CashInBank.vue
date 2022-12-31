d<template>
  <div class="main-content">
        <div class="cash-page__container">
          <main-button 
          @click-handler="buttonHandler"
          label="Click here"
          :isDisabled= "false" 
          ></main-button>
          <semi-button @click-handler="buttonHandler"
          label="Click here"
          :isDisabled="false"></semi-button>
          <icon-button @click-handler="buttonHandler"
          :isDisabled="false"
          iconPosition="-1098px -90px"
          ></icon-button>
          <text-field
          :isContainIcon="false"
          iconBackgroundPosition="-990px -358px "
          :isError="isError" 
          ref="test"
          width="270px"
          label="test1"
          :isContainLabel="false"
          placeholder="your name"
          ></text-field>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "CashInBank",
  data() {
    return {
    isDisabled :false,
    isError : false
  }
  },
  methods: {
    buttonHandler() {
      this.$refs.test.disableTheInput()
      // this.isError = !this.isError;
    }
  }
}
</script>

<style scoped>
.main-content {
    background-color: #f4f5f7;
    padding: 24px 24px 0 24px;
    overflow: hidden;
    height: calc(100% - 56px);
}
.cash-page__container {
    height: calc(100vh - 56px - 36px - 24px - 120px);
    display: block;
    justify-content: center;
    align-items: center;
}
.cash-page__text {
    text-align: center;
}
</style>