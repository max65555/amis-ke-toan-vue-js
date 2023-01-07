<template>
    <overlay-background zIndex="102" />
    <div class="employee-addition__container">
        <div class="employee-addition-wrapper">
            <div class="employee-addition__header">
                <div class="employee-addition__header-left">
                    <span class="addition__header--title">
                        {{
                            !this.isUpdate
                                ? 'Thêm Mới Nhân Viên'
                                : 'Thay Đổi Thông Tin'
                        }}
                    </span>
                    <div class="addition__header--select-position">
                        <main-radio
                            :isContainLabel="false"
                            :radioID="selectedObject"
                            :radioItem="[
                                { key: 'Tổ chức', value: 'company' },
                                { key: 'Cá Nhân', value: 'personal' },
                            ]"
                        />
                    </div>
                </div>
                <div class="employee-addition__header-right">
                    <div class="employee-addition__right-icon">
                        <div class="employee-addition__icon-left"></div>
                    </div>
                    <div class="employee-addition__right-icon">
                        <button
                            id="employee-addition-form__close-button"
                            class="employee-addition__icon-right"
                            @click="this.$emit('close-handler')"
                        ></button>
                    </div>
                </div>
            </div>
            <!-- start information form -->
            <div class="employee-addition__body">
                <div class="employee-addition__information-left">
                    <div class="employee-addition__left-first">
                        <!-- TODO: change TextFieldInput -->
                        <text-field
                            :isContainLabel="true"
                            label="Mã Nhân Viên"
                            v-model="Employee.EmployeeCode"
                            width="100%"
                            ref="EmployeeCode"
                        />
                        <text-field
                            :isContainLabel="true"
                            label="Tên Nhân Viên"
                            v-model="Employee.EmployeeName"
                            width="100%"
                        />
                    </div>
                    <div class="employee-addition__left-second">
                        <!-- start comboxboxlist -->
                        <combo-box
                            label="Đơn vị"
                            :isRequiredField="true"
                            :comboBoxItem="Departments"
                            keyName="DepartmentName"
                            valueName="DepartmentId"
                            width="100%"
                            v-model="Employee.DepartmentId"
                        ></combo-box>
                        <!-- end comboxboxlist -->
                    </div>
                    <div class="employee-addition__left-second">
                        <text-field
                            :isContainLabel="true"
                            width="100%"
                            label="Chức danh"
                            v-model="Employee.PositionId"
                        />
                    </div>
                </div>
                <div class="employee-addition__information-right">
                    <div class="employee-addition__right-first">
                        <date-picker
                            v-model="Employee.DateOfBirth"
                        ></date-picker>
                        <main-radio
                            label="Giới tính"
                            radio="gender"
                            :radioItem="genderItem"
                        ></main-radio>
                    </div>
                    <div class="employee-addition__right-second">
                        <text-field
                            :isContainLabel="true"
                            width="100%"
                            label="số CMND"
                            v-model="Employee.IdentityNumber"
                        />
                        <date-picker
                            v-model="Employee.identityDate"
                        ></date-picker>
                    </div>
                    <div class="employee-addition__right-last">
                        <text-field
                            :isContainLabel="true"
                            width="100%"
                            label="Nơi cấp"
                            v-model="Employee.identityPlace"
                        />
                    </div>
                </div>
            </div>
            <div class="employee-addition__bottom">
                <text-field
                    :isContainLabel="true"
                    width="100%"
                    label="Địa chỉ"
                    v-model="Employee.address"
                />
                <div class="employee-addition__bottom-contact">
                    <text-field
                        :isContainLabel="true"
                        width="100%"
                        label="ĐT di động"
                        v-model="Employee.phoneNumber"
                    />
                    <text-field
                        :isContainLabel="true"
                        width="100%"
                        label="ĐT cố định"
                        v-model="Employee.telephoneNumber"
                    />
                    <text-field
                        :isContainLabel="true"
                        width="100%"
                        label="Email"
                        v-model="Employee.email"
                    />
                </div>
                <div class="employee-addition__bottom-contact">
                    <text-field
                        :isContainLabel="true"
                        width="100%"
                        label="Tài khoản ngân hàng"
                        v-model="Employee.bankAccountNumber"
                    />
                    <text-field
                        :isContainLabel="true"
                        width="100%"
                        label="Tên ngân hàng"
                        v-model="Employee.bankName"
                    />
                    <text-field
                        :isContainLabel="true"
                        width="100%"
                        label="Chi nhánh"
                        v-model="Employee.bankBranchName"
                    />
                </div>
            </div>
            <!-- end information form -->
            <div class="employee-addition__divide"></div>
            <div class="employee-addition__footer">
                <div class="employee-addition__footer--left">
                    <semi-button
                        label="Hủy"
                        @click-handler="this.$emit('close-handler')"
                    ></semi-button>
                </div>
                <div class="employee-addition__footer--right">
                    <semi-button
                        v-if="!isUpdate"
                        label="Cất"
                        @click-handler="
                            () => {
                                this.isStoreAndSaveAction = false
                                this.addNewEmployee()
                            }
                        "
                    ></semi-button>
                    <main-button
                        v-if="!isUpdate"
                        label="Cất và Thêm"
                        @click-handler="
                            () => {
                                this.isStoreAndSaveAction = true
                                this.addNewEmployee()
                            }
                        "
                    ></main-button>
                    <main-button
                        v-if="isUpdate"
                        label="Lưu"
                        @click-handler="btnSaveTheEmployee"
                    ></main-button>
                </div>
            </div>
        </div>
    </div>
    <popup-notify
        v-if="popUpNotify.isPopupNotifyShowingUp"
        :headerMessage="popUpNotify.headerMessage"
        :mainMessage="popUpNotify.mainMessage"
        semiButtonLabel="Đóng"
        mainButtonLabel="Xác Nhận"
        @semi-button-handler="closePopUpEvent"
        @main-button-handler="closePopUpEvent"
    ></popup-notify>
</template>

<script>
import axios from 'axios'
export default {
    name: 'AddNewEmployee',
    data() {
        return {
            textFieldFunction: {},
            // Gender: '',
            selectedDepartment: {},
            Employee: {
                EmployeeCode: '',
                EmployeeName: '',
                DepartmentId: '',
                Gender: '',
                DateOfBirth: '',
                IdentityNumber: '',
                identityDate: '',
                identityPlace: '',
                address: '',
                telephoneNumber: '',
                phoneNumber: '',
                email: '',
                bankAccountNumber: '',
                bankName: '',
                bankBranchName: '',
            },
            requiredField: {
                isCodeEmpty: false,
                isNameEmpty: false,
                isDepartmentEmpty: false,
            },
            popUpNotify: {
                headerMessage: '',
                mainMessage: '',
                semiButtonLabel: '',
                mainButtonLabel: '',
                isPopupNotifyShowingUp: false,
            },
            isDepartmentComboBoxOpen: false,
            Departments: [],
            genderItem: [
                { key: 'Nam', value: '0' },
                { key: 'Nữ', value: '1' },
            ],
            isGotError: false,
            isStoreAndSaveAction: false,
        }
    },
    props: {
        isUpdate: {
            type: Boolean,
            required: true,
        },
        EmployeeBeUpdated: {
            type: Object,
            required: false,
        },
    },

    created() {
        try {
            this.loadAllDepartment()
            this.Employee = this.EmployeeBeUpdated
            console.log(this.Employee)
        } catch (e) {
            console.log(e)
        }
    },
    updated() {
        // this.validateValue()
    },
    methods: {
        /**
         * close this form using $emit
         * Author: Toanlk (25/12/2022)
         */
        closeThisForm: function () {
            try {
                this.$emit('onClose')
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * button save the employee handler
         * Author: Toanlk (25/12/2022)
         */
        btnSaveTheEmployee: function () {
            try {
                this.updateEmployee(this.Employee)
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * turn on validate red line
         * Author: toanlk(25/12/2022)
         */
        validateValue() {
            try {
                // let listOfError = []
                if (this.Employee.EmployeeCode == '') {
                    this.requiredField.isCodeEmpty = true
                } else if (this.Employee.EmployeeCode != '') {
                    this.requiredField.isCodeEmpty = false
                }
                if (this.Employee.EmployeeName == '') {
                    this.requiredField.isNameEmpty = true
                } else if (this.Employee.EmployeeName != '') {
                    this.requiredField.isNameEmpty = false
                }
                if (
                    this.requiredField.isNameEmpty == false &&
                    this.requiredField.isCodeEmpty == false
                ) {
                    return true
                }
                return false
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * push an new employee to database with api;
         * Author: Toanlk(25/12/2022)
         */
        addNewEmployee() {
            try {
                axios
                    .post(
                        'https://amis.manhnv.net/api/v1/Employees',
                        this.EmployeeBeUpdated
                    )
                    .then((res) => {
                        this.PopUpHandler(true, res, 'Thêm mới thành công')
                    })
                    .catch((err) => {
                        // Object.getOwnPropertyNames(err.response.data.data)
                        this.PopUpHandler(false, err.response)
                    })
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * push changes to api
         * Author: Toanlk (25/12/2022)
         */
        updateEmployee(employee) {
            try {
                console.log(this.EmployeeBeUpdated.EmployeeId)
                console.log(employee)
                axios
                    .put(
                        'https://amis.manhnv.net/api/v1/Employees/' +
                            this.EmployeeBeUpdated.EmployeeId,
                        employee
                    )
                    .then((res) => {
                        this.PopUpHandler(true, res, 'Chỉnh sửa thành công')
                    })
                    .catch((err) => {
                        this.PopUpHandler(false, err.response)
                    })
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * pop up handler
         * Author: Toanlk (25/12/2022)
         */
        PopUpHandler(isSuccess, res, successMessage) {
            try {
                this.popUpNotify.headerMessage = isSuccess
                    ? 'Thông báo'
                    : 'Đã Xảy ra lỗi!'
                this.popUpNotify.mainMessage = isSuccess
                    ? successMessage
                    : res.data.devMsg
                this.popUpNotify.isPopupNotifyShowingUp = true
                console.log(this.popUpNotify)
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * load all department
         * Author:toanlk (25/12/2022)
         */
        loadAllDepartment() {
            try {
                axios
                    .get('https://amis.manhnv.net/api/v1/Departments')
                    .then((res) => {
                        this.Departments = res.data
                        console.log(res)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * show dropdownlist
         * Author: Toanlk (25/12/2022)
         */
        ShowAndHideDropDownList() {
            try {
                this.isDepartmentComboBoxOpen = !this.isDepartmentComboBoxOpen
            } catch (e) {
                console.log(e)
            }
        },
        /**
         * selected department Action of user handler
         * Author: Toanlk (25/12/2022)
         */
        SelectedDepartmentElement(departmentItem) {
            try {
                this.selectedDepartment = departmentItem
                this.Employee.DepartmentId =
                    this.selectedDepartment.DepartmentId
                this.isDepartmentComboBoxOpen = false
            } catch (e) {
                console.log(e)
            }
        },
        closePopUpEvent() {
            try {
                if (!this.isStoreAndSaveAction) {
                    this.$emit('close-handler')
                }
                this.popUpNotify.isPopupNotifyShowingUp = false
            } catch (e) {
                console.log(e)
            }
        },
    },
}
</script>

<style scoped>
.employee-addition__container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    /* height: calc(100% - 56px); */
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 103;
}
.employee-addition__footer--right {
    display: flex;
    padding-right: 12px;
}

.employee-addition-wrapper {
    padding: 24px;
    z-index: 101;
    position: fixed;
    background-color: white;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 4px 16px #171b2a3d;
}
.employee-addition__header-left {
    /* width:100 */
    padding: 20px 32px;
    padding-right: 12px;
    display: flex;
    align-items: center;
}
.employee-addition__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.addition__header--title {
    font-size: 24px;
    font-weight: 700;
    color: #111;
}
.addition__header--select-position {
    padding: 0 13px;
    display: flex;
    align-items: center;
}

.employee-addition__header-right {
    display: flex;
    align-items: center;
    padding: 12px;
}
.employee-addition__right-icon {
    padding: 4px;
    border-radius: 4px;
}
.employee-addition__right-icon:hover {
    background-color: #e0e0e0;
}

.employee-addition__icon-left {
    width: 24px;
    height: 24px;
    background: url(../../assets/images/icon.svg) no-repeat -89px -145px;
    /* margin-right: 6px; */
    border: unset;
}
.employee-addition__icon-right {
    border: unset;
    width: 24px;
    height: 24px;
    background: url(../../assets/images/icon.svg) no-repeat -144px -143px;
}

.employee-addition__body {
    display: flex;
    /* align-items: center; */
}
.employee-addition__information-left {
    padding-top: 12px;
    padding-left: 8px;
    padding-right: 4px;
}
.employee-addition__information-right {
    padding-top: 12px;
    padding-left: 4px;
    padding-right: 8px;
}
.employee-addition__left-second {
    padding-bottom: 8px;
    min-width: 393px;
    display: flex;
    align-items: flex-start;
}
.employee-addition__right-first {
    display: flex;
    padding-bottom: 8px;
    align-items: center;
    justify-content: space-between;
    width: 390px;
}
.employee-addition__right-second {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 8px;
}
.employee-addition__right-second > .text-field__container {
    padding-right: 8px;
}
.employee-addition__left-first {
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    /* justify-content: space-between; */
}
.employee-addition__right-last {
    /* padding-bottom: 8px; */
}
.employee-addition__left-first
    > .text-field__container
    ~ .text-field__container {
    margin-left: 8px;
}

.employee-addition__bottom {
    margin-top: 24px;
    padding: 0 8px;
}
.employee-addition__bottom-contact {
    display: flex;
    padding-top: 8px;
}
.employee-addition__bottom-contact
    > .text-field__container
    ~ .text-field__container {
    padding-left: 8px;
}
.employee-addition__divide {
    display: flex;
    width: auto;
    height: 1px;
    background-color: #e8e8e8;
    margin: 32px 12px 0 12px;
}

.employee-addition__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
}
.employee-addition__footer--left {
    padding-left: 12px;
    padding-bottom: 20px;
}
.employee-addition__footer--right {
    padding-right: 12px;
}
.employee-addition__footer--right > .btn__container ~ .btn__container {
    margin-left: 8px;
}
</style>
