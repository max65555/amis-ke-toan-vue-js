<template>
    <div class="main-content">
        <div class="main-content__header">
            <span class="main-content__name"> Nhân Viên </span>
            <main-button
                name="Thêm mới nhân viên"
                :eventButton="ShowAddNewEmployeeForm"
            >
            </main-button>
        </div>
        <div class="main-content__wrapper">
            <div class="main-content__data-table">
                <div class="main-content__data-table-wrapper">
                    <div class="main-content__data-table-function">
                        <div class="main-content__data-table-delete-employees">
                            <div>
                                <!-- TODO: add semi button -->
                                <semi-button
                                    name="xóa"
                                    :eventButton="this.DeleteEmployees"
                                ></semi-button>
                            </div>
                        </div>
                        <!-- TODO:search text field -->
                        <text-field></text-field>
                        <div class="table__function-reload">
                            <button @click="this.loadAllEmployee()">
                                <div class="table-function-reload--icon"></div>
                            </button>
                        </div>
                    </div>
                        <div>
                            <!-- data table start -->

                           <data-table
                            :dataArray="employeeArray"
                             :nameOfColumns="nameOfColumns" 
                            :showField = "showField"
                            IDField="EmployeeId"
                            ></data-table>
                            <div class="data-table__footer-container">
                                <div>
                                    <div class="data-table__footer">
                                        <div class="data-table__footer--left">
                                            <p>Tổng:&nbsp;</p>
                                            <b>4</b>
                                            <p>&nbsp;số bản ghi</p>
                                        </div>
                                        <div class="data-table__footer--right">
                                            <div
                                                class="dropdown-list main-content__table-footer-pages-selected"
                                            >
                                                <div
                                                    class="dropwdown__input dropdown-list__normal-status"
                                                >
                                                    <span
                                                        class="dropdown__input-text"
                                                    >
                                                        20 bản ghi trên 1 trang
                                                    </span>
                                                    <div
                                                        id="show-pages-btn"
                                                        class="dropdown__input-icon"
                                                    >
                                                        <i
                                                            class="icofont-rounded-down dropdown__i--icon"
                                                        ></i>
                                                    </div>
                                                </div>
                                                <div
                                                    id="show-pages-list"
                                                    class="dropdown-list__list show-pages-list"
                                                    style="
                                                        display: none;
                                                        width: 100%;
                                                    "
                                                >
                                                    <div
                                                        class="dropdown-list__list-item"
                                                    >
                                                        <span
                                                            class="dropdown-list__list-item-text"
                                                        >
                                                            10 bản ghi trên 1
                                                            trang
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="dropdown-list__list-item"
                                                    >
                                                        <span
                                                            class="dropdown-list__list-item-text"
                                                        >
                                                            20 bản ghi trên 1
                                                            trang
                                                        </span>
                                                    </div>
                                                    <div
                                                        class="dropdown-list__list-item"
                                                    >
                                                        <span
                                                            class="dropdown-list__list-item-text"
                                                        >
                                                            30 bản ghi trên 1
                                                            trang
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="data-table__footer--prev-next"
                                            >
                                                <div
                                                    class="data-table__footer-nav-icon"
                                                    style="
                                                        margin-right: 16px;
                                                        color: gray;
                                                    "
                                                >
                                                    Trước
                                                </div>
                                                <div
                                                    class="main-content__footer-nav-pages"
                                                >
                                                    <div
                                                        class="main-content__footer-nav-pages--item main-content__footer-nav-selected-page"
                                                        style="font-weight: 900"
                                                    >
                                                        1
                                                    </div>
                                                    <div
                                                        class="main-content__footer-nav-pages--item"
                                                    >
                                                        2
                                                    </div>
                                                    <div
                                                        class="main-content__footer-nav-pages--item"
                                                    >
                                                        3
                                                    </div>
                                                </div>
                                                <div
                                                    class="data-table__footer-nav-icon"
                                                >
                                                    Sau
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- data table end -->
                            <popup-notify
                                v-show="this.ispopupConfirmDeleteShow"
                                :notifyMessage="this.notifyMessage"
                                :typeNotify="this.typeNotify"
                                :semiButtonAction="
                                    this.cancelDeleteConfirmAction
                                "
                                :mainButtonAction="
                                    this.isDeleteEmployeesAction
                                        ? this
                                              .confirmDeleteEmployeesConfirmAction
                                        : this.confirmDeleteConfirmAction
                                "
                            ></popup-notify>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    <!-- pop up  -->
    <!-- TODO: turn this one on -->
    <add-new-employee
        v-if="this.isAddNewEmployeeShowingUp" 
        @onClose="ShowAddNewEmployeeForm"
        :isUpdate="this.isUpdateForm"
        :EmployeeBeUpdated="this.updateEmployee"
    ></add-new-employee>
</template>

<script>
import axios from 'axios'
import AddNewEmployee from './AddNewEmployee'

export default {
    name: 'EmployeesList',
    components: {
        AddNewEmployee,
    },
    data() {
        return {
            employeeArray: [],
            isAddNewEmployeeShowingUp: false,
            isUpdateForm: false,
            updateEmployee: {},
            isLoadingProcess: false,
            dropdownListOpen: false,
            ispopupConfirmDeleteShow: false,
            notifyMessage: '',
            typeNotify: '',
            deleteEmployeesCollection: [],
            isDeleteEmployeesAction: false,
            isAllCheckChecked: false,
            nameOfColumns: ["Mã nhân viên", "Tên nhân viên", "Giới tính", "Ngày sinh", "Số CMND", "Chức danh", "Tên đơn vị", "Số tài khoản", "Tên ngân hàng", "Chi nhánh tài khoản ngân hàng"],
            showField: ["EmployeeCode", "EmployeeName", "Gender", "DateOfBirth", "IdentityNumber", "PositionId", "DepartmentId", "BankAccountNumber", "BankName", "BankBranch"]
        }
    },
    methods: {
        /**
         * load and render all employee to data table using axios
         * Author: Toanlk(25/12/2022)
         */
        loadAllEmployee: function () {
            try {
                this.employeeArray =[];
                axios
                    .get('https://amis.manhnv.net/api/v1/Employees')
                    .then((res) => {
                        this.employeeArray = res.data
                        console.log('reload data')
                    })
                    .catch((er) => {
                        //TODO: fail to work with api hanlder is here
                        console.log(er)
                    })
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * buton handler showing up add new employee form
         * Author: toanlk(25/12/2022)
         */
        ShowAddNewEmployeeForm: function () {
            try{

                this.isUpdateForm = false
                this.isAddNewEmployeeShowingUp = !this.isAddNewEmployeeShowingUp
            }
            catch(e){
                console.log(e);
            }
        },
        /**
         * update button handler
         * Author: Toanlk(25/12/2022)
         */
        UpdateButtonHandler(employee) {
            try{

                this.isUpdateForm = true
                this.updateEmployee = employee
                this.isAddNewEmployeeShowingUp = true
            }
            catch(e){
                console.log(e);
            }
        },
        /**
         * show dropdownlist handler
         * Author: Toanlk(25/12/2022)
         */
        ShowDropDownList(employeeID) {
            try{

                this.dropdownListOpen = !this.dropdownListOpen; 
                this.currentRowDropDownListOpen = employeeID
                
            }
            catch(e){
                console.log(e);
            }
            },

        /**
         * delete an employee action
         * Author: Toanlk(25/12/2022)
         */
        DeleteConfirmAction(employeeID) {
            try{
                console.log(employeeID);
                this.isDeleteEmployeesAction = false
                this.dropdownListOpen = false
                this.notifyMessage = 'Bạn có chắc chắn muốn xóa không ?'
                this.typeNotify = 'question'
                this.ispopupConfirmDeleteShow = true
            }
            catch(e){
                console.log(e)
            }
        },
        /**
         * close pop up confirm delete
         * Author: Toanlk(25/12/2022)
         */
        cancelDeleteConfirmAction() {
            try{

                this.ispopupConfirmDeleteShow = false
            }
            catch(e){
                console.log(e)
            }
        },
        /**
         * confirm delete an employe action
         * Author: Toanlk(25/12/2022)
         */
        confirmDeleteConfirmAction() {
            try{

                this.ispopupConfirmDeleteShow = false
                console.log('delete action' + this.currentRowDropDownListOpen)
                axios
                    .delete(
                        'https://amis.manhnv.net/api/v1/Employees/' +
                        this.currentRowDropDownListOpen
                    )
                    .then((res) => {
                        console.log(res);
                        this.loadAllEmployee()
                    })
                    .catch((err) => {
                        console.log(err)
                    });
            }
            catch(e){
                console.log(e)
            }

            },
            /**
         * delete employees action
         * Author: Toanlk(25/12/2022)
         */
        DeleteEmployees() {
            try{

                console.log(this.deleteEmployeesCollection)
                this.isDeleteEmployeesAction = true
                this.notifyMessage = 'Bạn có chắc chắn muốn xóa không ?'
                this.typeNotify = 'question'
                this.ispopupConfirmDeleteShow = true
            }
            catch(e){
                console.log(e);
            }
        },
        /**
         * confirm delete employees action
         * Author: Toanlk(25/12/2022)
         */
        confirmDeleteEmployeesConfirmAction() {
            try{

                console.log('xoa hang loat')
                this.ispopupConfirmDeleteShow = false
                this.deleteEmployeesCollection.forEach((item) => {
                    axios
                    .delete('https://amis.manhnv.net/api/v1/Employees/' + item)
                    .then((res) => {
                        this.loadAllEmployee()
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                })
            }
            catch(e){
                console.log(e);
            }
            },
        /**
         * date Formatter
         * Author: toanlk(25/12/2022)
         * @param {*} date
         */
        dateTimeFormatter(date) {
            try{

                date += ''
                if (date == 'null') {
                    return ''
                }
                let result = date.slice(0, 10)
                return result
            }
            catch(e){
                console.log(e)
            }
        },

    },
    created() {
        //render all employee
        try{
            this.loadAllEmployee()
        }
        catch(e){
            console.log(e);
        }
    },
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100000;
}
.main-content {
    background-color: #f4f5f7;
    padding: 24px 24px 0 24px;
    overflow: hidden;
    height: calc(100% - 56px);
}

.main-content__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-content__name {
    font-size: 24px;
    white-space: nowrap;
    font-weight: 700;
    text-align: left;
}


.dropdown-list {
    width: 100%;
    position: relative;
}
.dropdown__label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    color: #1f1f1f;
    margin-bottom: 8px;
}
.dropwdown__input {
    width: 100%;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    border-radius: 3px;
    box-sizing: border;
    border: 1px solid #50b83c;
    border: 1px solid #e0e0e0;
    z-index: 1;
}
.dropdown__input--normal {
    border: 1px solid #e0e0e0;
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
    display: flex;
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
    overflow-y: overlay;
    overflow-x: hidden;
    white-space: nowrap;
    position: absolute;
    /* top: 36; */
    /* width: 100%; */
    max-height: 200px;
    border-radius: 4px;
    box-shadow: 0px 4px 16px #171b2a3d;
    z-index: 1000;
    background-color: white;
}
.dropdown-list__list-item {
    height: 36px;
    display: flex;
    align-items: center;
    margin: 8px;
    border-radius: 4px;
    padding-left: 8px;
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
.dropdown-list__normal-status {
    border: 1px solid #e6e6e6;
}
/* dropw downlist */
.data-table__footer-container {
    height: 48px;
    /* top: 0; */
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
/* end footer */
.main-content__table-footer-pages-selected {
    margin-right: 28px;
}
.main-content__footer-nav-pages {
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-self: center;
}
.main-content__footer-nav-pages--item {
    padding: 0 6px;
    /* border: 1px solid #e0e0e0; */
    /* margin: 0 4px; */
}
.main-content__footer-nav-selected-page {
    border: 1px solid #e0e0e0;
}
.show-pages-list {
    bottom: calc(100% + 1px);
}
.data-table__header--text {
    background-color: #e0e0e0;
    color: #e0e0e0;
    padding: 4px 0;
}
.text-field__cmnd:hover .sidebar__item-tool-tip{
    display:flex;
}
.sidebar__item-tool-tip {
    position: absolute;
    /* left: calc(100% + 8px); */
    /* width: 94px; */
    padding: 0 12px;
    height: 40px;
    background-color: var(--sidebar-color);
    top: 150%;
    transform: translateY(-50%);
    bottom: 0;
    white-space: nowrap;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    opacity: 94%;
    color: #ffffff;
    text-align: center;
    z-index: 1000001;
}
</style>
