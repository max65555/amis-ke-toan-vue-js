<template>
    <div class="btn__container">
        <button
            @mousedown="mouseDownHandler"
            @mouseup="mouseUp"
            @mouseleave="mouseLeave"
            @mouseenter="mouseEnter"
            class="button__semi btn"
            :class="[
                { 'btn--pressed': isPressing },
                { 'btn--hover': isHover },
                { 'btn--disabled': isDisabled },
            ]"
            :disabled="this.isDisabled"
        >
            <span class="button__semi--text">{{ label }}</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'SemiButton',
    props: {
        label: {
            type: String,
            required: false,
        },
        isDisabled: {
            typ: Boolean,
            required: true,
        },
    },
    data() {
        return {
            isPressing: false,
            isHover: false,
        }
    },
    methods: {
        mouseDownHandler() {
            this.isHover = false
            this.isPressing = true
        },
        mouseUp() {
            this.isPressing = false
            this.isHover = true
            this.clickHandler()
        },
        mouseLeave() {
            this.isPressing = false
            this.isHover = false
        },
        mouseEnter() {
            this.isHover = true
        },
        clickHandler() {
            this.$emit('click-handler')
        },
    },
}
</script>

<style scoped>
.btn {
    padding: 0;
    margin: 0;
    position: relative;
}
.button__semi {
    border: #e6e6e6 1px solid;
    border-radius: 3px;
    /* min-width: 80px; */
    height: 36px;
    color: black;
    background-color: #ffffff;
    width: auto;
    padding: 0 16px;
}
.button__semi--text {
    font-family: roboto regular fonts;
    font-size: 14px;
    font-weight: 500;
    line-height: 0;
    color: inherit;
    text-align: center;
    white-space: nowrap;
}
.btn--disabled {
    opacity: 56%;
}
.btn--hover {
    cursor: pointer;
    /* background-color: #5dc748 !important; */
    border-color: #50b83c !important;
    color: #50b83c !important;
}

.btn--pressed {
    background-color: #ebebeb;
}
</style>
