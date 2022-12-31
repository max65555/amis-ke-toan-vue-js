<template>
    <div>
        <button @mousedown="mouseDownHandler" @mouseup="mouseUp" 
        @mouseleave="mouseLeave"
        @mouseenter="mouseEnter"
        class="button__main btn"
        :class="[{ 'btn--pressed': isPressing }, { 'btn--hover': isHover }, {'btn--disabled':isDisabled
        }]" :disabled="this.isDisabled">
            <span class="button__text">{{ label }}</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'MainButton',
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

.btn {
    padding: 0;
    margin: 0;
    position: relative;
}
.btn--hover {
    cursor: pointer;
    background-color: #5dc748 !important;
}

/* main button  */
.button__main {
    /* min-width: 80px; */
    height: 36px;
    border-radius: 4px;
    border: unset;
    background-color: #50b83c;
    color: white;
    padding: 0 19px;
    width: auto;
}
.button__text {
    white-space: nowrap;
}
.btn--pressed{
    background-color: #118044;  
}


</style>
