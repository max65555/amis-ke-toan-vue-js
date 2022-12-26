<template>
    <button class="button__semi btn" @click="eventButton">
        <span class="button__semi--text">{{ name }}</span>
    </button>
</template>

<script>
export default {
    name: 'SemiButton',
    props: {
        name: {
            type: String,
            required: true,
        },
        eventButton: {
            type: Function,
            required: true,
        },
    },
}
</script>

<style scoped>
.button__semi {
    border: #e6e6e6 1px solid;
    border-radius: 3px;
    min-width: 80px;
    height: 36px;
    color: black;
    background-color: #ffffff;
    width: auto;
}
.btn {
    padding: 0;
    margin: 0;
    position: relative;
}
.button__semi--text {
    font-family: roboto regular fonts;
    font-size: 14px;
    font-weight: 500;
    line-height: 0;
    color: #1f1f1f;
    text-align: center;
}
</style>
