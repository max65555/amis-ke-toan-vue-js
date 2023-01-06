<template>
    <div class="checkbox__container" 
    :class="[{'checkbox__input-anim--checked':isChecked},{'checkbox__input-anim--unchecked':!isChecked}]">
      <input :id="checkBox" type="checkbox" class="checkbox__input-checkbox " v-model="isChecked">
      <label :for="checkBox" class="checkbox__label">
      </label>
    </div>
</template>
<script>
export default {
  name: "MainCheckBox",  
  props: {
    checkBox: {
      type: String,
      default: '',
      required:true,
    }
  },
  data() {
    return {
      isChecked:false
    }
  }
}
</script>

<style scoped>
.checkbox__container{
	width:20px;
	height:20px;
	position:relative;
}

.checkbox__input-checkbox{
	visibility: hidden;
	user-select: none;
	position:absolute;
}
/* white box */
.checkbox__label::before{
	/* position:absolute; */
	content:" ";
	display:inline-block;
	width:18px;
	height:18px;
	border: 1px solid #767676;
	border-radius:4px;
	user-select: none;
	background-color: white;
}
.checkbox__label::after{
	width:20px;
	height:20px;
	position:absolute;
	content:" ";
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: none;
	background:url(../../assets/images/icon.svg) no-repeat -1222px -358px;
	transform: rotate(-90deg);
}
.checkbox__input-checkbox:checked + .checkbox__label::after{
	display: inline-block;
}
.checkbox__input-anim--checked{
	animation: checkbox-checked 0.4s forwards;
}
.checkbox__input-anim--unchecked{
	animation: checkbox-unchecked 0.4s forwards;
	
}
@keyframes checkbox-checked {
  0%{
		transform: rotate(0deg);		
	}
	100%{

		transform: rotate(90deg);		
	}
}
@keyframes checkbox-unchecked {
  0%{
		transform: rotate(0deg);		
	}
	100%{
		transform: rotate(-90deg);		
	}
}
</style>