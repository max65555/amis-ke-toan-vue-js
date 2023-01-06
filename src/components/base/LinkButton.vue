<template>
    <div class="btn__container">
        <button @mousedown="mouseDownHandler" @mouseup="mouseUp" 
        @mouseleave="mouseLeave"
        @mouseenter="mouseEnter"
        class="button__link btn"
        :class="[{ 'btn--pressed': isPressing }, { 'btn--hover': isHover }, {'btn--disabled':isDisabled
        }]" :disabled="this.isDisabled">
            <span class="button__text">{{ label }}</span>
        </button>
    </div> 
</template>

<script>
export default {
    name: 'LinkButton',
    props: {
        label: {
            type: String,
            required: false,
        },
        isDisabled: {
            typ: Boolean,
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
.btn__container{
    width:fit-content;

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

/* main button  */
.button__link {
    /* min-width: 80px; */
    height: 36px;
    /* border-radius: 4px; */
    border: unset;
    /* background-color: #50b83c; */
    color: #50B83C;
    /* padding: 0 19px; */
    width: auto;
}
.button__text {
    white-space: nowrap;
}
.btn--pressed{
    color: #118044;  
}


</style>
