<template>
    <div>
        <button @click="eventButton()" class="button__main btn">
            <span class="button__text">{{ name }}</span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'MainButton',
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
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    /* delete it */
    /* margin: 0 18px 0 18px; */
}
.btn {
    padding: 0;
    margin: 0;
    position: relative;
}
.button__main:hover {
    cursor: pointer;
    background-color: #5dc748;
}

/* main button  */
.button__main {
    min-width: 80px;
    height: 36px;
    border-radius: 4px;
    border: unset;
    background-color: #50b83c;
    color: white;
    padding: 0 16px;
}
.button__text {
    white-space: nowrap;
}
</style>
