<template>
    <div class="overlay" :style="{ 'z-index': zIndex }"></div>
</template>

<script>
export default {
    name: 'OverlayBackground',
    props: {
        zIndex: {
            type: String,
            default: '10001',
            required: true,
        },
    },
}
</script>
<style scoped>
.overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(77, 77, 77, 0.486);
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
