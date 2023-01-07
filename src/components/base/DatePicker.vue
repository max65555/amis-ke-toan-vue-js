<template>
    <div class="date-picker__container">
        <div class="date-picker__label">
            <span class="date-picker__label--text"> Ngày Sinh </span>
        </div>
        <div class="date-picker__wrapper">
            <input
                id="date-of-birth"
                type="date"
                name=""
                class="date-picker__input"
                :value="modelValue"
                @input="
                    (event) =>
                        this.$emit('update:modelValue', event.target.value)
                "
            />
        </div>
    </div>
</template>

<script>
export default {
    name: 'DatePicker',
    props: {
        modelValue: {
            type: String,
            default: '',
            required: true,
        },
    },
}
</script>

<style scoped>
.date-picker__container {
}
.date-picker__label {
    width: fit-content;
}
.date-picker__label--text {
}
.date-picker__wrapper {
    margin-top: 8px;
    width: 140px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #e0e1e4;
    box-sizing: border-box;
}
.date-picker__input {
    outline: unset;
    border: none;
}
</style>
