<template>
    <div>
        <button @mousedown="mouseDownHandler" @mouseup="mouseUp" 
        @mouseleave="mouseLeave"
        @mouseenter="mouseEnter"
        class="button__icon btn"
        :class="[{ 'btn--pressed': isPressing }, { 'btn--hover': isHover }, {'btn--disabled':isDisabled
        }]" :disabled="this.isDisabled">
            <div class="button--icon"
            :style="'background-position:' + this.iconPosition"></div>
        </button>
    </div>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    iconPosition: {
      type: String,
      required:true
    },
    isDisabled: {
        type: Boolean,
        required: true
    }
    
  },
  data(){
      return{
          isPressing:false,
          isHover: false,
          
      }
  },
  methods: {
      mouseDownHandler() {
          this.isHover = false
          this.isPressing = true;
      },
      mouseUp() {
          this.isPressing = false;
          this.isHover = true
          this.clickHandler();
      },
      mouseLeave() {
          this.isPressing = false;
          this.isHover = false
      },
      mouseEnter() {
          this.isHover = true;
      },
      clickHandler() {
          this.$emit("click-handler");  
      }
  }
}
</script>

<style scoped>

.btn--disabled{
    opacity:56%;
}

.btn {
    padding: 0;
    margin: 0;
    position: relative;
}
.btn--hover {
    cursor: pointer;
    opacity: 80%; 
}


.button__icon {
    min-width: 40px;
    height: 36px;
    border-radius: 4px;
    border: unset;
    background-color:transparent;
    display:flex;
    justify-content: center;
    align-items:center ;    
    width: auto;
}
.button--icon{
  width:20px;
  height:20px;
  background: url(../../assets/images/icon.svg);
}

.btn--pressed{
    /* background-color: #118044;   */
}


</style>
