<template>
    <div class="textfield text-field__normal employee_Id-input-field">
        <div class="normal-text-field__label">
            <span class="normal-text-field__label--text">
                {{ textLabel }}
                <span class="text-being-required">*</span>
            </span>
        </div>
        <div class="normal-text-field__input display_block">
            <input
                class="normal-text-field__input--text add-new__employee--address"
                type="text"
                name="employeeID"
                v-model="this.textValue"
            />
        </div>
        <span
            style="visibility: hidden"
            class="normal-text-field__respond--text"
        >
            Tên trường không được để trống
        </span>
    </div>
</template>

<script>
export default {
    name: 'TextFieldInput',
    props: {
        placeholder: {
            type: String,
            required: false,
        },
        textValue: {
            type: String,
            required: false,
        },
    },
}
</script>

<style></style>
