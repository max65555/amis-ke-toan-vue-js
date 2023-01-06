<template>
    <div class="radio__container">
        <div class="radio__label" v-if="isContainLabel">
            <span class="radio__label-text">
                {{ label }}
            </span>
        </div>
        <div
            class="radio__input"
            :style="{ padding: isContainLabel ? '16px' : '0' }"
        >
            <div
                class="radio__item"
                v-for="(item, key) in radioItem"
                :key="key"
            >
                <input
                    type="radio"
                    name="radioId"
                    :id="item.value"
                    class="radio__item__check-box"
                />
                <label :for="item.value" class="radio__item__text">{{
                    item.key
                }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainRadio',
    props: {
        isContainLabel: {
            type: Boolean,
            default: true,
            required: true,
        },
        label: {
            type: String,
            default: 'label Name',
            required: true,
        },
        radioID: {
            type: String,
            default: '',
            required: true,
        },
        radioItem: {
            type: Array,
            default: () => [],
            required: true,
        },
    },
}
</script>

<style scoped>
.radio__container {
    width: fit-content;
}
.radio__label-text {
    color: #1f1f1f;
    font-weight: 500;
    width: fit-content;
}
.radio__input {
    padding-top: 16px;
    display: flex;
    align-items: center;
    width: fit-content;
}
.addition__header--select-position {
    padding: 0 13px;
    display: flex;
    align-items: center;
}
.radio__item {
    display: flex;
    align-items: center;
    margin-right: 40px;
}
.radio__item__text {
    padding-left: 8px;
    color: #212121;
}
.radio__item__check-box {
    width: 20px;
    height: 20px;
}
input[radio] {
    color: #666666;
}
</style>
