<template>
    <div class="combo-box-list" :style="{ width: this.width }">
        <span class="combo-box__label">
            {{ label }}
            <span style="color: red" v-if="isRequiredField">*</span>
        </span>
        <div
            class="dropdown__input"
            :class="{
                'combo-box--focus-on': this.isComboBoxOpen,
            }"
        >
            <input
                class="combo-box__input-text"
                placeholder=""
                type="text"
                required
                :value="currentSelectedItem[keyName]"
            />
            <button style="width: auto" @click="this.ShowAndHideDropDownList">
                <div
                    class="combo-box__input-icon add-new__department-combobox--icon"
                >
                    <i class="icofont-rounded-down combo-box__i--icon"></i>
                </div>
            </button>
        </div>
        <div class="combo-box-list__list" v-if="this.isComboBoxOpen">
            <div class="combo-box-list--placeholder-item">
                <span class="combo-box-list--placeholder-text">
                    - chọn giá trị -
                </span>

                <i
                    v-if="false"
                    class="icofont-check-alt combo-box-list--placeholder-icon"
                ></i>
            </div>
            <div
                class="combo-box-list__list-item"
                v-for="(item, key) in comboBoxItem"
                :key="key"
                :Value="item[valueName]"
            >
                <button
                    style="text-align: left"
                    @click="SelectedItem(item)"
                    class="combo-box__button-item"
                >
                    <span class="combo-box-list__list-item-text">{{
                        item[keyName]
                    }}</span>
                    <i
                        v-if="item[valueName] == currentSelectedItem[valueName]"
                        class="icofont-check-alt combo-box-list--placeholder-icon"
                    ></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComboBox',
    props: {
        width: {
            type: String,
            default: 'auto',
            required: false,
        },
        isContainLabel: {
            type: Boolean,
            default: true,
            required: true,
        },
        label: {
            type: String,
            default: 'label name',
            required: false,
        },
        isRequiredField: {
            type: Boolean,
            default: false,
            required: false,
        },
        comboBoxItem: {
            type: Array,
            default: () => [],
            required: true,
        },
        keyName: {
            type: String,
            default: '',
            required: true,
        },
        valueName: {
            type: String,
            default: '',
            required: true,
        },
    },
    data() {
        return {
            isComboBoxOpen: false,
            itemValue: '',
            currentSelectedItem: {},
        }
    },
    methods: {
        ShowAndHideDropDownList() {
            try {
                this.isComboBoxOpen = !this.isComboBoxOpen
            } catch (e) {
                console.log(e)
            }
        },
        SelectedItem(item) {
            try {
                this.currentSelectedItem = item
                this.isComboBoxOpen = false
                this.$emit(
                    'update:modelValue',
                    this.currentSelectedItem[this.valueName]
                )
            } catch (e) {
                console.log(e)
            }
        },
    },
}
</script>

<style scoped>
.combo-box-list {
    position: relative;
}
.combo-box__label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #1f1f1f;
    margin-bottom: 8px;
}
.dropdown__input {
    border: 1px solid #e0e0e0;
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border;

    z-index: 1;
    box-sizing: border-box;
}
.combo-box__input-text {
    white-space: nowrap;
    overflow: hidden;
    font-size: 14px;
    padding: 4px 12px;
    font-weight: 400;
    color: black;
    text-align: left;
    border: unset;
    outline: unset;
    flex: 1;
    width: 100%;
}
.combo-box__input-icon {
    display: flex;
    align-items: center;
    /* width: 100%; */
    justify-content: center;
    height: 100%;
    /* padding: 0px 12px; */
    /* background-color: cyan; */
    border-left: 1px solid #e0e0e0;
}
.combo-box__i--close-icon {
    width: 16px;
    height: 16px;
    font-size: 16px;
    color: gray;
    margin-left: 8px;
}
.combo-box__i--icon {
    display: block;
    width: 16px;
    height: 16px;
    font-size: 16px;
    height: 100%;
    padding: 0px 12px;
    line-height: 2.2;
    width: 100%;
}
.combo-box__text--error {
    margin-top: 8px;
}
.combo-box__span--error {
    font-size: 12px;
    text-align: left;
    color: #e61d1d;
    font-weight: 400;
}
/* combo-box-list the List */
.combo-box-list__list {
    overflow-y: overlay;
    overflow-x: hidden;
    white-space: nowrap;
    position: absolute;
    top: 36;
    width: 100%;
    background-color: white;
    max-height: 308px;
    border-radius: 4px;
    box-shadow: 0px 4px 16px #171b2a3d;
    z-index: 0;
    padding-bottom: 8px;
    z-index: 1;
}
.combo-box__button-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.combo-box-list--placeholder-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    padding-bottom: 0;
}
.combo-box-list--placeholder-text {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #50b83c;
    margin-left: 8px;
    padding: 4px 0;
}
.combo-box-list--placeholder-icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
    color: #50b83c;
    margin-right: 8px;
    text-align: right;
}
.combo-box-list__list-item {
    height: 36px;
    display: flex;
    align-items: center;
    margin: 0 8px;
    border-radius: 4px;
    padding-left: 8px;
}
.combo-box-list__list-item:hover {
    background-color: #50b83c1a;
}
.combo-box-list__list-item-text {
    font-size: 14px;
    text-align: left;
    color: #1f1f1f;
    font-weight: 400;
}
.combo-box--focus-on {
    border: 1px solid #50b83c;
}
</style>
