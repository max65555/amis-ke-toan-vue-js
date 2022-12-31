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
                    <div class="main-content__data-table-context-wrapper">
                        <div class="main-content__data-table-context">
                            <table class="data-table__wrapper">
                                <thead>
                                    <tr class="data-table__header-line">
                                        <th
                                            class="data-table__header data-table__header--checkbox z-index-10000"
                                            style="background-color: #f5f5f5"
                                        >
                                            <div class="data-table__data-item">
                                                <div
                                                    class="checkbox__container"
                                                >
                                                    <input
                                                        id="data-table__all-check"
                                                        type="checkbox"
                                                        class="checkbox__input-checkbox"
                                                        v-model="
                                                            this
                                                                .isAllCheckChecked
                                                        "
                                                    />
                                                    <label
                                                        for="data-table__all-check"
                                                        class="checkbox__label"
                                                    >
                                                    </label>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="data-table__header">
                                            <div class="data-table__data-item">
                                                <span class="">
                                                    Mã nhân viên
                                                </span>
                                            </div>
                                        </th>
                                        <th class="data-table__header">
                                            <div class="data-table__data-item">
                                                <div
                                                    class="data-table__header-with-icon"
                                                >
                                                    <span class="">
                                                        Tên Nhân viên
                                                    </span>
                                                </div>
                                            </div>
                                        </th>
                                        <th class="data-table__header">
                                            <div class="data-table__data-item">
                                                Giới Tính
                                            </div>
                                        </th>

                                        <th class="data-table__header">
                                            <div class="data-table__data-item">
                                                Ngày sinh
                                            </div>
                                        </th>
                                        <th class="data-table__header">
                                            <div
                                                class="data-table__data-item text-field__cmnd"
                                            >
                                                Số CMND
                                                <div
                                                    class="sidebar__item-tool-tip text-label__tooltip"
                                                >
                                                    số chứng minh thư nhân dân
                                                </div>
                                            </div>
                                        </th>
                                        <th class="data-table__header">
                                            <div class="data-table__data-item">
                                                Chức danh
                                            </div>
                                        </th>
                                        <th class="data-table__header">
                                            <div class="data-table__data-item">
                                                Tên đơn vị
                                            </div>
                                        </th>
                                        <th class="data-table__header">
                                            <div class="data-table__data-item">
                                                Số Tài khoản
                                            </div>
                                        </th>
                                        <th class="data-table__header">
                                            <div class="data-table__data-item">
                                                Tên ngân hàng
                                            </div>
                                        </th>
                                        <th
                                            class="data-table__header main-content__function_placeholder"
                                        >
                                            <div class="data-table__data-item">
                                                Chi nhánh tài khoản ngân hàng
                                            </div>
                                        </th>
                                        <th
                                            class="data-table__header main-content__function z-index-10000"
                                        >
                                            <div class="data-table__data-item">
                                                Chức năng
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <!-- start item -->
                                <tbody class="data-table__item-container">
                                    <tr
                                        class="data-table__line"
                                        v-for="(employee, key) in this
                                            .employeeArray"
                                        :key="key"
                                        v-show="!this.isLoadingProcess"
                                    >
                                        <td
                                            class="data-table__data-line data-table__header--checkbox"
                                        >
                                            <div class="data-table__data-item">
                                                <div
                                                    class="checkbox__container"
                                                >
                                                    <input
                                                        id="{{employee.EmployeeId}}"
                                                        type="checkbox"
                                                        class="checkbox__input-checkbox data-table__header--input-checkbox"
                                                        :value="
                                                            employee.EmployeeId
                                                        "
                                                        v-model="
                                                            this
                                                                .deleteEmployeesCollection
                                                        "
                                                    />
                                                    <label
                                                        for="{{employee.EmployeeId}}"
                                                        class="checkbox__label"
                                                    >
                                                    </label>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <div
                                                    class="data-table__header-with-pic"
                                                >
                                                    <span class="">
                                                        {{
                                                            employee.EmployeeCode
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div
                                                class="data-table__data-item"
                                                style="justify-content: left"
                                            >
                                                {{ employee.EmployeeName }}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                {{ employee.gender }}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div
                                                class="data-table__data-item"
                                                style="justify-content: center"
                                            >
                                                {{
                                                    this.dateTimeFormatter(
                                                        employee.DateOfBirth
                                                    )
                                                }}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div
                                                class="data-table__data-item"
                                                style="justify-content: right"
                                            >
                                                {{ employee.IdentityNumber }}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                {{ employee.PositionName }}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                {{ employee.DepartmentName }}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div
                                                class="data-table__data-item"
                                                style="justify-content: right"
                                            >
                                                {{ employee.BankAccountNumber }}
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                {{ employee.BankName }}
                                            </div>
                                        </td>
                                        <td
                                            class="data-table__data-line main-content__function_placeholder"
                                        >
                                            <div class="data-table__data-item">
                                                {{ employee.BankBranchName }}
                                            </div>
                                        </td>
                                        <td
                                            class="data-table__data-line main-content__function"
                                        >
                                            <div
                                                class="data-table__data-item"
                                                style="
                                                    border-left: 1px solid
                                                        #e0e0e0;
                                                "
                                            >
                                                <div
                                                    class="button button__link"
                                                    style="
                                                        display: flex;
                                                        align-items: center;
                                                    "
                                                >
                                                    <button
                                                        @click="
                                                            this.UpdateButtonHandler(
                                                                employee
                                                            )
                                                        "
                                                        class="button__link--text data-table__button-edit"
                                                    >
                                                        Sửa
                                                    </button>
                                                    <div
                                                        class="data-table__button-dropdown-edit"
                                                        id="functional__dropdown-btn"
                                                    >
                                                        <button
                                                            @click="
                                                                this.ShowDropDownList(
                                                                    employee.EmployeeId
                                                                )
                                                            "
                                                        >
                                                            <i
                                                                class="icofont-rounded-down dropdown__i--icon"
                                                            ></i>
                                                        </button>
                                                        <div
                                                            v-if="
                                                                this
                                                                    .dropdownListOpen &&
                                                                this
                                                                    .currentRowDropDownListOpen ==
                                                                    employee.EmployeeId
                                                            "
                                                            class="dropdown-list__list data-table__button-select-function"
                                                        >
                                                            <div
                                                                class="dropdown-list__list-item"
                                                            >
                                                                <button
                                                                    class="reset-css-button" style="text-align: left;"
                                                                >
                                                                    <span
                                                                        class="dropdown-list__list-item-text"
                                                                    >
                                                                        Nhân bản
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div
                                                                class="dropdown-list__list-item"
                                                            >
                                                                <button
                                                                    class="reset-css-button"
                                                                    @click="
                                                                        DeleteConfirmAction(
                                                                            employee.EmployeeId
                                                                        )
                                                                    "
                                                                    style="text-align: left;"
                                                                >
                                                                    <span
                                                                        class="dropdown-list__list-item-text"
                                                                    >
                                                                        Xóa
                                                                    </span>
                                                                </button>
                                                            </div>
                                                            <div
                                                                class="dropdown-list__list-item"
                                                            >
                                                                <button
                                                                    class="reset-css-button"
                                                                    style="text-align: left;"
                                                                >
                                                                    <span
                                                                        class="dropdown-list__list-item-text"
                                                                    >
                                                                        Ngưng sử
                                                                        dụng
                                                                    </span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- processload fake data -->
                                    <tbody  v-show="this.employeeArray.length == 0">
<tr
                                        class="data-table__line"
                                       
                                        v-for="index in 20"
                                        :key="index"
                                    >
                                        <td
                                            class="data-table__data-line data-table__header--checkbox"
                                        >
                                            <div class="data-table__data-item">
                                                <div
                                                    class="checkbox__container"
                                                >
                                                    <input
                                                        id="${employee.EmployeeId}"
                                                        type="checkbox"
                                                        class="checkbox__input-checkbox data-table__header--input-checkbox"
                                                    />
                                                    <label
                                                        for="${employee.EmployeeId}"
                                                        class="checkbox__label"
                                                    >
                                                    </label>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <div
                                                    class="data-table__header-with-pic"
                                                >
                                                    <span
                                                        class="data-table__header--text"
                                                    >
                                                        ${employee.EmployeeCode}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td class="data-table__data-line">
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td
                                            class="data-table__data-line main-content__function_placeholder"
                                        >
                                            <div class="data-table__data-item">
                                                <span
                                                    class="data-table__header--text"
                                                >
                                                    ${employee.EmployeeCode}
                                                </span>
                                            </div>
                                        </td>
                                        <td
                                            class="data-table__data-line main-content__function"
                                        >
                                            <div
                                                class="data-table__data-item"
                                                style="
                                                    border-left: 1px solid
                                                        #e0e0e0;
                                                "
                                            >
                                                <div
                                                    class="button button__link"
                                                >
                                                    <a
                                                        onClick="updateEmployeeButton('${employee.EmployeeId}')"
                                                        class="button__link--text data-table__button-edit"
                                                        >Sửa</a
                                                    >
                                                    <div
                                                        class="data-table__button-dropdown-edit"
                                                        id="functional__dropdown-btn"
                                                    >
                                                        <i
                                                            class="icofont-rounded-down dropdown__i--icon"
                                                        ></i>
                                                        <div
                                                            style="
                                                                display: none;
                                                            "
                                                            class="dropdown-list__list data-table__button-select-function"
                                                        >
                                                            <div
                                                                class="dropdown-list__list-item"
                                                            >
                                                                <span
                                                                    class="dropdown-list__list-item-text"
                                                                >
                                                                    Nhân Bản
                                                                </span>
                                                            </div>
                                                            <div
                                                                class="dropdown-list__list-item"
                                                            >
                                                                <span
                                                                    class="dropdown-list__list-item-text"
                                                                >
                                                                    Xóa
                                                                </span>
                                                            </div>
                                                            <div
                                                                class="dropdown-list__list-item"
                                                            >
                                                                <span
                                                                    class="dropdown-list__list-item-text"
                                                                >
                                                                    Ngừng sử
                                                                    dụng
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                    
                                </tbody>
                                <!-- processload fake data -->
                            </table>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- pop up  -->
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
    padding-bottom: 48px;
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
    /* position: sticky; */
    /* right: 0; */
    display: flex;
    /* right: 0; */
    /* display: table-cell; */
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
    border-left: 1px solid #e0e0e0;
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
    /* padding: 0 28px; */
    position: sticky;
    /* z-index: 1000; */
    top: 0;
    text-align: left;
    /* border-bottom: 1px solid #e0e0e0; */
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
    background-color: white;
    box-sizing: border-box;
    display: flex;
    align-items: center;
}
.data-table__header--checkbox {
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
/* data table */

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
