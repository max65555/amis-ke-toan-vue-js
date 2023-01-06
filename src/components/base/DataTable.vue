<template>
    <div class="main-content__data-table-context-wrapper">
        <div class="main-content__data-table-context">
            <table class="data-table__wrapper">
                    <thead>
                        <tr class=" data-table__header-line">
                            <th class="data-table__header data-table__header--checkbox data-table__check-all-box">
                                <div class="data-table__data-item" >
                                    <main-check-box checkBox="1231www23"></main-check-box>
                                </div>
                            </th>
                            <th class="data-table__header" v-for="(headerColumns,key) in nameOfColumns" :key="key">
                                <div class="data-table__data-item">
                                    <span class="data-table__header--text">
                                        {{ headerColumns }}
                                    </span>
                                </div>
                            </th>
                            <th class="data-table__header main-content__function"
                            >
                                <div class="data-table__data-item">
                                    Chức năng
                                </div>
                            </th>
                        </tr>
                    </thead> 
                <!--  start items  -->
                <tbody>
                    <tr v-for="(anRow,key) in dataArray" :key="key" class=" data-table__line">
                        <td class="data-table__data-line data-table__header--checkbox">
                            <div class="data-table__data-item">
                                <main-check-box 
                                :checkBox='anRow[IDField]'></main-check-box>
                            </div>
                        </td>
                        <td class="data-table__data-line" v-for="(item,itemKey) in showField" :key="itemKey">
                            <div class="data-table__data-item">
                                {{anRow[item]}}
                            </div>
                        </td>
                        <td class="data-table__data-line main-content__function"
                        :style="{'z-index': this.isDropdownListShow && anRow[IDField]== this.currentIDOpenDropDownList ? '1' : '0'}"
                        >
                            <div class="data-table__data-item function__container" >
                                <link-button label="Sửa"
                                @click-handler="UpdateAnRow(anRow[IDField])"
                                ></link-button> 
                                <div class="data-table__button-dropdown-edit">
                                    <dropdown-list 
                                    :isOnlyIcon="true"
                                    :item="functionButtonList"
                                    @deleteRow='DeleteAnRow(anRow[IDField])'
                                    @watchIsDropdownListValue="getDropdownList"
                                    @watchId="getIdCurrentRowByOpenDropDown(anRow[IDField])"
                                    ></dropdown-list>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody> 
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataTable",
    props: {
        IDField: {
            type: String,
            default: "",
            required:true
        },
        nameOfColumns: {
            type: Array,
            default: () => [],
            required:true,
        },
        dataArray: {
            type:Array,
            default: ()=>[],
            required:true
        },
        showField: {
            type: Array,
            default: ()=> [],
            required: true
        }
    },
    data() {
        return {
            functionButtonList: [
                {mean: "ngưng sử dụng", function: ""},
                {mean: "xóa", function: "deleteRow" },
                {mean:"nhân bản",function:""}
            ],
            isDropdownListShow:false,
            currentIDOpenDropDownList: '',
        }
    },
    mounted() {
        console.log(this.dataArray);
    },
    methods: {
        /**
         * delete an record by id
         * Author: toanlk (2/1/2023)
         */
        DeleteAnRow(fieldID) {
            console.log("delete " + fieldID);
        },
        /**
         * update an record by id
         * Author: toanlk (2/1/2023)
         */
        UpdateAnRow(fieldID) {
            console.log("update" + fieldID);
        },
        getDropdownList(isDropdownListShow) {
            this.isDropdownListShow = isDropdownListShow;
            console.log(this.isDropdownListShow);
            
        },
        getIdCurrentRowByOpenDropDown(currentID) {
            this.currentIDOpenDropDownList = currentID;
            console.log(this.currentIDOpenDropDownList);

        }
    },

}
</script>

<style scoped>
.main-content__data-table {
    background-color: white;
    padding-top: 8px;
    margin-top: 12px;
}
.main-content__data-table {
    background-color: white;
    padding-top: 8px;
    margin-top: 12px;
}

.main-content__data-table-wrapper {
    padding: 12px;
}
.main-content__data-table-function {
    width: 100%;
    display: flex;
    /* justify-items: ; */
    align-items: center;
}
.main-content__data-table-delete-employees {
    margin-bottom: 8px;
}
.data-table__function-to-left {
    /* align-items: center; */
    padding-bottom: 8px;
    justify-content: flex-end;
    width: 100%;
    margin-right: 5px;
}
.main-content__data-table-context-wrapper {
    position: relative;
    /* padding-bottom: 48px; */
}

.main-content__data-table-context {
    max-height: calc(100vh - 300px);
    min-height: calc(100vh - 300px);
    overflow-x: auto;
    border: 1px solid #e0e0e0;
    overflow-y: auto;
    background-color: #efefef;
}
.z-index-10000 {
    z-index: 10000;
}
.main-content__data-table--fixed-column {
    position: relative;
}
#data-table__all-check {
    width: 20px;
    height: 20px;
}
td,
th {
    /* border-right: solid 1px #e0e0e0; */
    /* border-left: solid 1px #e0e0e0; */
    /* box-sizing: border-box; */
}
.main-content__function {
    position: sticky;
    right: 0;
    display: flex;
    /* right: 0; */
    display: table-cell;
}

.data-table__header--checkbox + .data-table__header {
    border-left: unset;
}
.data-table__header--checkbox .data-table__data-item {
    padding: 0 16px;
}
.data-table__header + .main-content__function {
    display: table-cell;
}
.main-content__function > .data-table__data-item {
    /* border-bottom: unset;
	background-color: #f5f5f5;
	*/
    border-left: unset !important;
}
.data-table__header > .data-table__data-item {
    /* padding:0; */
    width: 100%;
    /* border-bottom:unset ; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.main-content__function_placeholder {
    /* padding-right: 25px; */
    /* border-right: unset; */
}
.main-content__function_placeholder > .data-table__data-item {
    border-right: unset;
}
.table__function-reload {
    display: flex;
    align-items: center;
    padding: 0 6px;
}
.data-table__search-icon {
    width: 24px;
    height: 24px;
    background: url(../../assets/images/icon.svg) no-repeat -992px -355px;
}
.table-function-reload--icon {
    width: 24px;
    height: 24px;
    background: url(../../assets/images/icon.svg) no-repeat -1097px -90px;
}
/* button edit */
.data-table__button-edit {
    color: #00a9f2;
}
.data-table__header-line{

}
.data-table__check-all-box{
    background-color:#f5f5f5 !important;
    z-index:10001 !important;
}
.data-table__button-dropdown-edit {
    position: relative;
    margin-left: 4px;
    border-radius: 4px;
}
.data-table__button-dropdown-edit:hover {
    background-color: #e0e0e0;
}
.data-table__button-select-function {
    position: absolute;
    top: calc(100% + 2px);
    right: 0;
    background-color: white;
}
* {
    font-size: 14px;
}

.data-table__wrapper {
    /* border: 1px solid #e0e0e0; */
    width: 100%;
    border-collapse: collapse;
}
.data-table__line {
    height: 44px;
    /* border-bottom: 1px solid #e0e0e0; */
    /* position: relative; */
}
.data-table__header {
    position: sticky;
    z-index:100;
    top: 0;
    text-align: left;
    white-space: nowrap;
    height: 48px;
    background-color: #f5f5f5;
}
.data-table__header-line {
    background-color: #f5f5f5;
    height: 48px;
    /* border-bottom: 1px solid #e0e0e0; */
    box-sizing: border-box;
}
.data-table__header-line .data-table__data-item {
    border-bottom: 1px solid #e0e0e0;
}
.data-table__header-line .data-table__data-item {
    border-top: unset;
}

.data-table__data-line {
    text-align: left;
    white-space: nowrap;
    height: 44px;
    background-color: white;
}
.data-table__data-item {
    border: 1px solid #e0e0e0;
    border-top: unset;
    border-left: unset;
    width: 100%;
    height: 100%;
    padding: 0 28px;
    /* background-color: white; */
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.data-table__header--checkbox {
    background-color: #f5f5f5;
    z-index:10000;  
    position: sticky;
    left: 0;
    top: 0;
    /* padding: 12px; */
    border: unset;
    background-color: white;
    /* height: 48px; */
    width: 48px;
    box-sizing: border-box;
    text-align: center;
    /* border-right: 1px solid #e0e0e0; */
    /* border-bottom: 1px solid #e0e0e0; */
    /* z-index: 10001; */
}
.data-table__header--input-checkbox {
    width: 20px;
    height: 20px;
}
.data-table__header-with-icon {
    /* display: flex;
	align-items: center;
data-table__data-item	height: 100%; */
    display: flex;
    align-items: center;
}
.data-table__header--icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
}
.data-table__header--icon-down {
    font-size: 20px;
}
.data-table__header-with-pic {
    display: flex;
    align-items: center;
}
.data-table__header-pic {
    display: block;
    width: 28px;
    height: 28px;
    background-color: #eeeeee;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    border-radius: 50%;
    margin-right: 8px;
}
.data-table__footer-container {
    height: 48px;
    /* top: 0; */
    right: 0;
    left: 0;
    position: absolute;
    bottom: calc(48px / -4);
}
.data-table__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 16px;
}
.data-table__footer--left {
    display: flex;
    align-items: center;
}
.data-table__footer--right {
    display: flex;
    align-items: center;
}
.data-table__footer--mount-of-line {
}
.data-table__footer--page {
    display: flex;
    align-items: center;
    margin: 0 16px;
}
.data-table__footer--prev-next {
    display: flex;
    align-items: center;
    cursor: pointer;
}
.data-table__footer-nav-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.data-table__footer-nav-rounded-left {
    font-size: 20px;
}
.data-table__footer-nav-rounded-right {
    font-size: 20px;
}

/* status   */
.data-table__line:hover .data-table__data-line {
    background-color: #f8f8f8;
}
.data-table__selected-row {
    background-color: #f1ffef;
}
.data-table__line:hover .data-table__data-item{
    background-color:#F2F2F2;
}
.function__container{
    display:flex;

    justify-content:center;
    align-items:center;
}
</style>