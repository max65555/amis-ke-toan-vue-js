<template>
  <div class="text-field__container"
  :style="{'width':this.width}">
    <span v-if="this.isContainLabel" class="text-field__label">{{ label }}</span>  
    <div class="text-field__wrapper"
    :class="[{ 'text-field--focus': this.isFocus }, { 'text-field--hover': this.isHovering && !this.isFocus }, { 'text-field--error': this.isError && !this.isFocus }, { 'text-field--disable': this.isDisable }]"
    @mouseenter="isHovering=true"
    @mouseleave="isHovering=false"
    >
      <input type="text" class="text-field__input" :placeholder="placeholder"
      :style="{ 'padding-right':(isContainIcon? '0' : '12px')}"
      @focus="focusOnEvent"
      @blur="focusOutEvent"
      ref ="input"
      :disabled="isDisable"
      >
      <div class="text-field__icon"
      v-if="this.isContainIcon"
      >
      <div class="text-field__icon--icon" 
      :style="'background-position:' + this.iconBackgroundPosition"
      ></div>
    </div>
  </div>
</div> 
</template>

<script>
export default {
  name: "TextField",
  props: {
    isContainLabel: {
      type: Boolean,
      default: true,
      required:false
    },
    label: {
      type: String,
      default: '',
      required:false,
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    isContainIcon: {
      type: Boolean,
      default: false,
      required:true,
    },
    iconBackgroundPosition: {
      type: String,
      default: '',
      required:false,
    },
    isError: {
      type: Boolean,
      default: false,
      required:false
    },
    width: {
      type: String,
      default: "auto",
      required:false
    }
  },
  data() {
    return {
      isFocus: false,
      isHovering: false,
      isDisable : false
    }
  },
  methods: {
    /**
     * make border be green when focus on 
     * Author: toanlk(29/12/2022)
     */
    focusOnEvent() {
      this.isFocus = true;
    },
    /**
     * normalize border when focus out 
     * Author: toanlk(29/12/2022)
     */
    focusOutEvent() {
      this.isFocus = false;
    }, 
    /**
     * [use from parent]focus on this text field
     * Author: toanlk(29/12/2022)
     */
    focusOnTheInput() {
      this.$refs.input.focus();
    },
    /**
     * [use from parent]disable an this text field
     * Author: toanlk(29/12/2022)
     */
    disableTheInput() {

      this.isDisable = true;
    }
  }
} 
</script>

<style scoped>
.text-field__container{
  /* background-color:red; */
}
.text-field__label{
  margin-bottom:8px;
  display:block;
  font-weight:500;
}
.text-field__wrapper{
  width:100%;
  height:36px;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color:white;
  box-sizing: border-box;
  border:1px solid #E0E0E0;
  border-radius:4px;
}
.text-field__input{
  box-sizing: border-box;
  width:100%;
  padding-left:12px;
  font-size:14px;
  border:none;
  outline:unset;
  background-color:transparent;
}

.text-field--hover{
  background-color: #f4f5f7;
}
.text-field--disable{
  background-color:#EBEBEB; 
}
.text-field--error{
  border-color:#E61D1D;
}
.text-field--focus{
  border-color:#50B83C;
}

.text-field__icon{
  height:100%;
  display:flex;
  justify-content: center;
  align-items:center;
}
.text-field__icon--icon{
  background:url(../../assets/images/icon.svg);
  width:20px;
  height:20px;
  margin: 0 8px;
} 
</style>