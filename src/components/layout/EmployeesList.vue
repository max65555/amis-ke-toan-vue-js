<template>
    <div class="main-content">
        <div class="main-content__header">
            <span class="main-content__name"> Nhân Viên </span>
            <main-button
                label="Thêm mới nhân viên"
                @click-handler="ShowAddNewEmployeeForm"
            >
            </main-button>
        </div>
        <div class="main-content__wrapper">
            <div class="main-content__data-table">
                <div class="main-content__data-table-wrapper">
                    <div class="main-content__data-table-function">
                        <div class="main-content__data-table-delete-employees">
                            <!-- TODO: delete hang loat -->
                        </div>
                        <div class="table__function-reload">
                            <text-field
                                :isContainLabel="false"
                                :isContainIcon="true"
                                iconBackgroundPosition="-991px -358px;"
                            ></text-field>
                            <button class="table-function-reload--icon">
                                <div
                                    class="table-function-reload-background"
                                ></div>
                            </button>
                        </div>
                    </div>
                    <div>
                        <data-table
                            :dataArray="employeeArray"
                            :nameOfColumns="nameOfColumns"
                            :showField="showField"
                            IDField="EmployeeId"
                            @update-row="updateEmployeeHandler"
                            @delete-row="deleteEmployeeHandler"
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
                                            class="data-table__footer-dropdownList"
                                        >
                                            <dropdown-list
                                                :isOnlyIcon="false"
                                                :item="pagingItem"
                                                placeholder="0 bản ghi trên 1 trang"
                                            ></dropdown-list>
                                        </div>

                                        <div
                                            class="data-table__footer--prev-next"
                                        >
                                            <div
                                                class="data-table__footer-nav-icon"
                                                style="
                                                    margin-right: 16px;
                                                    color: gray;
                                                    padding-left: 12px;
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
                        <!-- <popup-notify
                            v-show="this.ispopupConfirmDeleteShow"
                            :notifyMessage="this.notifyMessage"
                            :typeNotify="this.typeNotify"
                            :semiButtonAction="this.cancelDeleteConfirmAction"
                            :mainButtonAction="
                                this.isDeleteEmployeesAction
                                    ? this.confirmDeleteEmployeesConfirmAction
                                    : this.confirmDeleteConfirmAction
                            "
                        ></popup-notify> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- pop up  -->
    <!-- TODO: turn this one on -->
    <add-new-employee
        v-if="this.isAddNewEmployeeShowingUp"
        :isUpdate="isUpdateForm"
        :EmployeeBeUpdated="updateEmployee"
        @close-handler="isAddNewEmployeeShowingUp = !isAddNewEmployeeShowingUp"
    ></add-new-employee>
    <popup-notify
        v-if="popUpNotify.isPopupNotifyShowingUp"
        :headerMessage="popUpNotify.headerMessage"
        :mainMessage="popUpNotify.mainMessage"
        :semiButtonLabel="popUpNotify.semiButtonLabel"
        :mainButtonLabel="popUpNotify.mainButtonLabel"
        @semi-button-handler="
            popUpNotify.isPopupNotifyShowingUp =
                !popUpNotify.isPopupNotifyShowingUp
        "
        @main-button-handler="confirmDeleteConfirmAction"
    ></popup-notify>
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
            popUpNotify: {
                headerMessage: '',
                mainMessage: '',
                semiButtonLabel: '',
                mainButtonLabel: '',
                isPopupNotifyShowingUp: false,
            },
            deleteEmployeesCollection: [],
            isDeleteEmployeesAction: false,
            isAllCheckChecked: false,
            nameOfColumns: [
                'Mã nhân viên',
                'Tên nhân viên',
                'Giới tính',
                'Ngày sinh',
                'Số CMND',
                'Chức danh',
                'Tên đơn vị',
                'Số tài khoản',
                'Tên ngân hàng',
                'Chi nhánh tài khoản ngân hàng',
            ],
            showField: [
                'EmployeeCode',
                'EmployeeName',
                'Gender',
                'DateOfBirth',
                'IdentityNumber',
                'PositionId',
                'DepartmentId',
                'BankAccountNumber',
                'BankName',
                'BankBranch',
            ],
            pagingItem: [
                { mean: '10 bản ghi trên 1 trang', function: 'test1' },
                { mean: '20 bản ghi trên 1 trang', function: 'test1' },
                { mean: '30 bản ghi trên 1 trang', function: 'test1' },
            ],
        }
    },
    methods: {
        /**
         * load and render all employee to data table using axios
         * Author: Toanlk(25/12/2022)
         */
        loadAllEmployee: function () {
            try {
                this.employeeArray = []
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
            try {
                this.isUpdateForm = false
                this.updateEmployee = {}
                this.isAddNewEmployeeShowingUp = !this.isAddNewEmployeeShowingUp
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * update button handler
         * Author: Toanlk(25/12/2022)
         */
        UpdateButtonHandler(employee) {
            try {
                this.isUpdateForm = true
                this.updateEmployee = employee
                this.isAddNewEmployeeShowingUp = true
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * show dropdownlist handler
         * Author: Toanlk(25/12/2022)
         */
        ShowDropDownList(employeeID) {
            try {
                this.dropdownListOpen = !this.dropdownListOpen
                this.currentRowDropDownListOpen = employeeID
            } catch (e) {
                console.log(e)
            }
        },

        /**
         * delete an employee action
         * Author: Toanlk(25/12/2022)
         */
        DeleteConfirmAction(employeeID) {
            try {
                console.log(employeeID)
                this.currentRowDropDownListOpen = employeeID
                this.popUpNotify.headerMessage = 'Xác nhận'
                this.popUpNotify.mainMessage = 'Bạn chắc chắn muốn xóa không ?'
                this.popUpNotify.semiButtonLabel = 'Đóng'
                this.popUpNotify.mainButtonLabel = 'Xóa'
                this.popUpNotify.isPopupNotifyShowingUp = true
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * close pop up confirm delete
         * Author: Toanlk(25/12/2022)
         */
        cancelDeleteConfirmAction() {
            try {
                this.ispopupConfirmDeleteShow = false
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * confirm delete an employe action
         * Author: Toanlk(25/12/2022)
         */
        confirmDeleteConfirmAction() {
            try {
                this.popUpNotify.isPopupNotifyShowingUp =
                    !this.popUpNotify.isPopupNotifyShowingUp
                console.log('delete action' + this.currentRowDropDownListOpen)
                axios
                    .delete(
                        'https://amis.manhnv.net/api/v1/Employees/' +
                            this.currentRowDropDownListOpen
                    )
                    .then((res) => {
                        console.log(res)
                        this.loadAllEmployee()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * delete employees action
         * Author: Toanlk(25/12/2022)
         */
        DeleteEmployees() {
            try {
                console.log(this.deleteEmployeesCollection)
                this.isDeleteEmployeesAction = true
                this.notifyMessage = 'Bạn có chắc chắn muốn xóa không ?'
                this.typeNotify = 'question'
                this.ispopupConfirmDeleteShow = true
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * confirm delete employees action
         * Author: Toanlk(25/12/2022)
         */
        confirmDeleteEmployeesConfirmAction() {
            try {
                console.log('xoa hang loat')
                this.ispopupConfirmDeleteShow = false
                this.deleteEmployeesCollection.forEach((item) => {
                    axios
                        .delete(
                            'https://amis.manhnv.net/api/v1/Employees/' + item
                        )
                        .then((res) => {
                            this.loadAllEmployee()
                            console.log(res)
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
            } catch (e) {
                console.log(e)
            }
        },

        updateEmployeeHandler(EmployeeID) {
            this.employeeArray.forEach((element) => {
                if (element.EmployeeId == EmployeeID) {
                    this.updateEmployee = element
                }
            })
            this.isUpdateForm = true
            this.isAddNewEmployeeShowingUp = true
        },
        deleteEmployeeHandler(EmployeeId) {
            this.DeleteConfirmAction(EmployeeId)
        },
    },
    created() {
        //render all employee
        try {
            this.loadAllEmployee()
        } catch (e) {
            console.log(e)
        }
    },
}
</script>

<style scoped>
.main-content__data-table-wrapper {
    padding: 12px;
    background-color: white;
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

.dropdown__i--icon {
    display: block;
    width: 16px;
    height: 100%;
    height: 36px;
    font-size: 16px;
    line-height: 2.2;
    padding: 0 8px 0px 8px;
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
    padding-top: 8px;
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
.table__function-reload {
    display: flex;
    align-items: center;
}
.table-function-reload--icon {
    width: fit-content;
    padding: 0 8px;
}
.table-function-reload-background {
    width: 24px;
    height: 24px;
    background: url(../../assets/images/icon.svg) no-repeat -1097px -90px;
}
.main-content__data-table-function {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
}
</style>
