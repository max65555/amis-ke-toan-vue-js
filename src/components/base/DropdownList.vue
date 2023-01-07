<template>
    <div class="dropdown-list">
        <div
            class="dropdown__input"
            :class="[{ 'normal-status': !isOnlyIcon }]"
        >
            <span class="dropdown__input-text" v-if="!isOnlyIcon"
                >{{ placeholder }}
            </span>
            <button class="dropdown__input-icon" @click="showDropdownList">
                <i class="icofont-rounded-down dropdown__i--icon"></i>
            </button>
        </div>
        <div class="dropdown-list__list" v-show="isDropdownListShow">
            <button
                class="dropdown-list__list-item"
                v-for="(listItem, key) in item"
                :key="key"
                @click="clickHandler(listItem.function)"
            >
                <span class="dropdown-list__list-item-text">
                    {{ listItem.mean }}
                </span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DropdownList',
    props: {
        isOnlyIcon: {
            type: Boolean,
            default: false,
            required: true,
        },
        item: {
            type: Array,
            default: () => [],
            required: true,
        },
        placeholder: {
            type: String,
            default: '',
            required: false,
        },
    },
    data() {
        return {
            isDropdownListShow: false,
        }
    },
    methods: {
        /**
         * show dropdownlist item by pressing button
         * Author:1/1/2023
         */
        showDropdownList() {
            this.isDropdownListShow = !this.isDropdownListShow
        },
        /**
         * click to one of items handler
         * Author:1/1/2023
         */
        clickHandler(functionName) {
            this.$emit(functionName)
        },
    },
    watch: {
        isDropdownListShow() {
            this.$emit('watchIsDropdownListValue', this.isDropdownListShow)
            this.$emit('watchId', this.isDropdownListShow)
        },
    },
}
</script>

<style scoped>
.dropdown-list {
    width: fit-content;
    position: relative;
    z-index: 1;
}
.dropdown__label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #1f1f1f;
    margin-bottom: 8px;
}
.dropdown__input {
    /* width: 100%; */
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 4px;
    box-sizing: border;
    /* border: 1px solid #50b83c;
    border: 1px solid #e0e0e0; */
    z-index: 1;
}
.dropdown__input--normal {
    /* border: 1px solid #e0e0e0; */
}
.dropdown__input-text {
    white-space: nowrap;
    overflow: hidden;
    max-width: 140px;
    padding-left: 12px;
    font-size: 14px;
    padding: 12px;
    font-weight: 400;
    color: #9e9e9e;
    text-align: left;
}
.dropdown__input-icon {
    border-radius: 4px;
    display: flex;
    width: auto;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.dropdown__i--close-icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
    color: gray;
    margin-left: 8px;
}
.data-table__button-dropdown-edit {
    height: 100%;
    display: flex;
    align-items: center;
}
.dropdown__i--icon {
    display: block;
    width: 16px;
    height: 100%;
    height: 36px;
    font-size: 16px;
    line-height: 2.2;
    padding: 0 8px 0px 8px;
}
.dropdown__text--error {
    margin-top: 8px;
}
.dropdown__span--error {
    font-size: 12px;
    text-align: left;
    color: #e61d1d;
    font-weight: 400;
}
/* dropdown-list the List */
.dropdown-list__list {
    z-index: 10000;
    overflow-y: overlay;
    overflow-x: hidden;
    white-space: nowrap;
    position: absolute;
    top: 36;
    right: 0;
    min-width: 100%;
    max-height: 200px;
    border-radius: 4px;
    box-shadow: 0px 4px 16px #171b2a3d;
    background-color: white;
}
.dropdown-list__list-item {
    height: 36px;
    width: -webkit-fill-available;
    flex: 1;
    display: flex;
    align-items: center;
    margin: 8px;
    border-radius: 4px;
    padding: 0 8px;
}
.dropdown-list__list-item:hover {
    background-color: #50b83c1a;
    cursor: pointer;
}
.dropdown-list__list-item-text {
    font-size: 14px;
    text-align: left;
    color: #1f1f1f;
    font-weight: 400;
    user-select: none;
}
.dropdown__input-icon:hover {
    background-color: #e0e0e0;
}
/* status */
.normal-status {
    border: 1px solid #e6e6e6;
}
</style>
