<template>
    <div class="popup-add-new-employee" id="popupAddNewEmployee">
        <div class="employee-addition-wrapper">
            <div style="padding: 8px">
                <div class="employee-addition__header">
                    <div class="employee-addition__header-left">
                        <span class="addition__header--title">
                            Thêm Mới Nhân Viên
                        </span>
                        <div class="addition__header--select-position">
                            <div class="selection-position">
                                <input
                                    type="radio"
                                    name=""
                                    id=""
                                    class="selection-position__check-box"
                                />
                                <span class="selection-position__text"
                                    >Tổ Chức</span
                                >
                            </div>
                            <div class="selection-position">
                                <input
                                    type="radio"
                                    name=""
                                    id=""
                                    class="selection-position__check-box"
                                />
                                <span class="selection-position__text"
                                    >Tổ Chức</span
                                >
                            </div>
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
                                @click="closeThisForm"
                            ></button>
                        </div>
                    </div>
                </div>
                <!-- start information form -->
                <div class="employee-addition__body">
                    <div class="employee-addition__information-left">
                        <div class="employee-addition__left-first">
                            <!-- TODO: change TextFieldInput -->
                            <div
                                class="textfield text-field__normal employee_Id-input-field"
                            >
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        Mã
                                        <span class="text-being-required"
                                            >*</span
                                        >
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text add-new__employee--address"
                                        type="text"
                                        required
                                        name="employeeID"
                                        v-model="this.Employee.EmployeeCode"
                                    />
                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    v-show="!this.requiredField.isCodeEmpty"
                                    style="visibility: hidden"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                                <span
                                    v-show="this.requiredField.isCodeEmpty"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                            <div class="textfield text-field__normal">
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        Tên
                                        <span class="text-being-required"
                                            >*</span
                                        >
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text"
                                        type="text"
                                        placeholder=""
                                        required
                                        v-model="this.Employee.EmployeeName"
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    v-show="!this.requiredField.isNameEmpty"
                                    style="visibility: hidden"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                                <span
                                    v-show="this.requiredField.isNameEmpty"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                        <div class="employee-addition__left-second">
                            <div
                                class="dropdown-list"
                                style="margin: 12px; display: none"
                            >
                                <span class="dropdown__label">
                                    Đơn vị <span style="color: red">*</span>
                                </span>
                                <div
                                    class="dropwdown__input dropdown__input--normal"
                                >
                                    <span class="dropdown__input-text">
                                        đơn vị
                                    </span>
                                    <div class="dropdown__input-icon">
                                        <i
                                            class="icofont-rounded-down dropdown__i--icon"
                                        ></i>
                                    </div>
                                </div>
                                <div class="dropdown__text--error">
                                    <span class="dropdown__span--error">
                                        Error message
                                    </span>
                                </div>
                                <div class="dropdown-list__list">
                                    <div class="dropdown-list__list-item">
                                        <span
                                            class="dropdown-list__list-item-text"
                                        >
                                            Hà Nội
                                        </span>
                                    </div>
                                    <div class="dropdown-list__list-item">
                                        <span
                                            class="dropdown-list__list-item-text"
                                        >
                                            TP hồ Chí Minh
                                        </span>
                                    </div>
                                    <div class="dropdown-list__list-item">
                                        <span
                                            class="dropdown-list__list-item-text"
                                        >
                                            Đà Nắng
                                        </span>
                                    </div>
                                    <div class="dropdown-list__list-item">
                                        <span
                                            class="dropdown-list__list-item-text"
                                        >
                                            Đà Nắng
                                        </span>
                                    </div>
                                    <div class="dropdown-list__list-item">
                                        <span
                                            class="dropdown-list__list-item-text"
                                        >
                                            Đà Nắng
                                        </span>
                                    </div>
                                    <div class="dropdown-list__list-item">
                                        <span
                                            class="dropdown-list__list-item-text"
                                        >
                                            Đà Nắng
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <!-- start comboxboxlist -->
                            <div class="combo-box-list">
                                <span class="combo-box__label">
                                    Đơn vị <span style="color: red">*</span>
                                </span>
                                <div class="dropwdown__input">
                                    <input
                                        class="combo-box__input-text add-new__department--input"
                                        placeholder=""
                                        type="text"
                                        required
                                        :value="
                                            this.selectedDepartment
                                                .DepartmentName
                                        "
                                    />
                                    <button
                                        style="width: auto"
                                        @click="this.ShowAndHideDropDownList"
                                    >
                                        <div
                                            class="combo-box__input-icon add-new__department-combobox--icon"
                                        >
                                            <!-- <i class="icofont-close-circled combo-box__i--close-icon"></i> -->
                                            <i
                                                class="icofont-rounded-down combo-box__i--icon"
                                            ></i>
                                        </div>
                                    </button>
                                </div>
                                <div
                                    class="combo-box__text--error"
                                    style="visibility: hidden"
                                >
                                    <span class="combo-box__span--error">
                                        Tên trường không được để trống
                                    </span>
                                </div>
                                <div>
                                    <div
                                        class="combo-box-list__list add-new__department-combo-box-list--list"
                                        v-if="this.isDepartmentComboBoxOpen"
                                    >
                                        <div
                                            class="combo-box-list--placeholder-item"
                                        >
                                            <span
                                                class="combo-box-list--placeholder-text"
                                            >
                                                - chọn giá trị -
                                            </span>

                                            <i
                                                class="icofont-check-alt combo-box-list--placeholder-icon"
                                            ></i>
                                        </div>
                                        <!-- TODO:department -->
                                        <div
                                            class="combo-box-list__list-item add-new__department-combo-box-item"
                                            v-for="(item, key) in this
                                                .Departments"
                                            :key="key"
                                            :departmentID="item.DepartmentId"
                                        >
                                            <button
                                                style="text-align: left"
                                                @click="
                                                    SelectedDepartmentElement(
                                                        item
                                                    )
                                                "
                                            >
                                                <span
                                                    class="combo-box-list__list-item-text"
                                                    >{{
                                                        item.DepartmentName
                                                    }}</span
                                                >
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- end comboxboxlist -->
                        </div>
                        <div class="employee-addition__left-second">
                            <div
                                class="textfield text-field__normal"
                                style="margin-top: 0px"
                            >
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        Chức danh
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text"
                                        type="text"
                                    />
                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="employee-addition__information-right">
                        <div
                            class="employee-addition__right-first"
                            style="padding-top: 8px"
                        >
                            <div class="date-picker-container">
                                <div class="date-picker__show-button">
                                    <div class="normal-text-field__label">
                                        <span
                                            class="normal-text-field__label--text"
                                        >
                                            Ngày Sinh
                                        </span>
                                    </div>
                                    <div
                                        class="date-picker__button identity-issua__data-picker"
                                    >
                                        <span
                                            class="date-picker--date-format"
                                            style="display: none"
                                        >
                                            30/9/2022
                                        </span>
                                        <div
                                            class="date-picker__button-icon"
                                            style="display: none"
                                        >
                                            <i
                                                class="icofont-ui-calendar date-picker__i--calender-icon"
                                            ></i>
                                        </div>
                                        <input
                                            id="date-of-birth"
                                            type="date"
                                            class="identity-issue__data-picker"
                                            v-model="this.Employee.DateOfBirth"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="date-picker__top-part"
                                    style="display: none"
                                >
                                    <div class="date-picker__calendar">
                                        <div class="date-picker__header">
                                            <div
                                                class="date-picker__month-year"
                                            >
                                                <span
                                                    class="date-picker__month-year--text"
                                                    >Tháng 9, 2022</span
                                                >
                                                <div
                                                    class="date-picker__month-year--icon"
                                                >
                                                    <i
                                                        class="icofont-rounded-down date-picker__month-year--down"
                                                    ></i>
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__switch-page"
                                            >
                                                <div
                                                    class="date-picker__switch-page--icon date-picker__switch-page--distance"
                                                >
                                                    <i
                                                        class="icofont-rounded-left date-picker__switch-page--down"
                                                    ></i>
                                                </div>
                                                <div
                                                    class="date-picker__switch-page--icon"
                                                >
                                                    <i
                                                        class="icofont-rounded-right date-picker__switch-page--down"
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="date-picker__body">
                                            <div
                                                class="date-picker__body--a-line"
                                                style="padding-top: 0"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T2
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T3
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T4
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T5
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T6
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T7
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    CN
                                                </div>
                                            </div>

                                            <div
                                                class="date-picker__body--a-line"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    1
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    2
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    3
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    4
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    5
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__body--a-line"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    6
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    7
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    8
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    9
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    10
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    11
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    12
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__body--a-line"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    13
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    14
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    15
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    16
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    17
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    18
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    19
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__body--a-line"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    20
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    21
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    22
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    23
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    24
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    25
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    26
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__body--a-line"
                                                style="padding-bottom: 0"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    27
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    28
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    29
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    30
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="date-picker__footer">
                                        <span class="date-picker__footer--text">
                                            Hôm nay
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="addition__header--select-position margin_12"
                            >
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        Ngày Sinh
                                    </span>
                                </div>
                                <div class="employee-addition__right-first">
                                    <div class="selection-position">
                                        <input
                                            type="radio"
                                            name="gender"
                                            id=""
                                            class="selection-position__check-box"
                                            value="0"
                                            v-model="this.Employee.Gender"
                                        />
                                        <span class="selection-position__text"
                                            >Nam</span
                                        >
                                    </div>
                                    <div class="selection-position">
                                        <input
                                            type="radio"
                                            name="gender"
                                            id=""
                                            class="selection-position__check-box"
                                            value="1"
                                            v-model="this.Employee.Gender"
                                        />
                                        <span class="selection-position__text"
                                            >Nữ</span
                                        >
                                    </div>
                                    <div class="selection-position">
                                        <input
                                            type="radio"
                                            name="gender"
                                            id=""
                                            class="selection-position__check-box"
                                            value="2"
                                            v-model="this.Employee.Gender"
                                        />
                                        <span class="selection-position__text"
                                            >Khác</span
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="employee-addtion__right-second">
                            <div
                                class="textfield text-field__normal"
                                style="margin-top: 0"
                            >
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text text-field__cmnd"
                                    >
                                        Số CMND
                                        <div
                                            class="sidebar__item-tool-tip display_none text-label__tooltip"
                                        >
                                            số chứng minh thư nhân dân
                                        </div>
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text employee-addition__identity-id"
                                        type="text"
                                        v-model="this.Employee.IdentityNumber"
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                            <div class="date-picker-container">
                                <div
                                    class="date-picker__show-button"
                                    style="margin: 0"
                                >
                                    <div class="normal-text-field__label">
                                        <span
                                            class="normal-text-field__label--text"
                                        >
                                            Ngày cấp
                                        </span>
                                    </div>
                                    <div
                                        class="date-picker__button identity-issua__data-picker"
                                    >
                                        <span
                                            class="date-picker--date-format"
                                            style="display: none"
                                        >
                                            30/9/2022
                                        </span>
                                        <div
                                            class="date-picker__button-icon"
                                            style="display: none"
                                        >
                                            <i
                                                class="icofont-ui-calendar date-picker__i--calender-icon"
                                            ></i>
                                        </div>
                                        <input
                                            type="date"
                                            name=""
                                            id=""
                                            class="identity-issue__data-picker data-picker__identityDate"
                                            v-model="this.Employee.identityDate"
                                        />
                                    </div>
                                </div>
                                <div
                                    class="date-picker__top-part"
                                    style="display: none"
                                >
                                    <div class="date-picker__calendar">
                                        <div class="date-picker__header">
                                            <div
                                                class="date-picker__month-year"
                                            >
                                                <span
                                                    class="date-picker__month-year--text"
                                                    >Tháng 9, 2022</span
                                                >
                                                <div
                                                    class="date-picker__month-year--icon"
                                                >
                                                    <i
                                                        class="icofont-rounded-down date-picker__month-year--down"
                                                    ></i>
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__switch-page"
                                            >
                                                <div
                                                    class="date-picker__switch-page--icon date-picker__switch-page--distance"
                                                >
                                                    <i
                                                        class="icofont-rounded-left date-picker__switch-page--down"
                                                    ></i>
                                                </div>
                                                <div
                                                    class="date-picker__switch-page--icon"
                                                >
                                                    <i
                                                        class="icofont-rounded-right date-picker__switch-page--down"
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="date-picker__body">
                                            <div
                                                class="date-picker__body--a-line"
                                                style="padding-top: 0"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T2
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T3
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T4
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T5
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T6
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    T7
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week"
                                                >
                                                    CN
                                                </div>
                                            </div>

                                            <div
                                                class="date-picker__body--a-line"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    1
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    2
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    3
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    4
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    5
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__body--a-line"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    6
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    7
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    8
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    9
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    10
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    11
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    12
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__body--a-line"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    13
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    14
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    15
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    16
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    17
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    18
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    19
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__body--a-line"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    20
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    21
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    22
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    23
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    24
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    25
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    26
                                                </div>
                                            </div>
                                            <div
                                                class="date-picker__body--a-line"
                                                style="padding-bottom: 0"
                                            >
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    27
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    28
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    29
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                >
                                                    30
                                                </div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                                <div
                                                    class="date-picker__body--days-in-week date-picker--days-in-month"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="date-picker__footer">
                                        <span class="date-picker__footer--text">
                                            Hôm nay
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style="display: flex">
                            <div
                                class="textfield text-field__normal pd-2"
                                style="margin-top: 24px"
                            >
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        nơi cấp
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text data-picker__identityPlace"
                                        type="text"
                                        v-model="this.Employee.identityPlace"
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="employee-addition__bottom">
                    <div style="display: flex">
                        <div class="textfield text-field__normal pd-2">
                            <div class="normal-text-field__label">
                                <span class="normal-text-field__label--text">
                                    Địa chỉ
                                </span>
                            </div>
                            <div class="normal-text-field__input display_block">
                                <input
                                    class="normal-text-field__input--text"
                                    type="text"
                                    placeholder="VD: số 82, Duy Tân, Dịch Vọng, Cầu Giấy, Hà Nội"
                                    v-model="this.Employee.address"
                                />

                                <div
                                    style="display: none"
                                    class="normal-text-field__icon--result"
                                >
                                    <i
                                        class="icofont-check-circled normal-text-field__icon--icon"
                                    ></i>
                                </div>
                            </div>
                            <span
                                style="display: none"
                                class="normal-text-field__respond--text"
                            >
                                Tên trường không được để trống
                            </span>
                        </div>
                    </div>
                    <div class="employee-addition__bottom-contact">
                        <div class="employee_addition-input-wrapper">
                            <div class="textfield text-field__normal pd-2">
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        ĐT di động
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text telephone-number__data-input"
                                        type="text"
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                        <div class="employee_addition-input-wrapper">
                            <div class="textfield text-field__normal pd-2">
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        ĐT cố địng
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text landline__data-input"
                                        type="text"
                                        v-model="this.Employee.phoneNumber"
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                        <div class="employee_addition-input-wrapper">
                            <div class="textfield text-field__normal pd-2">
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        Email
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text email__data-input"
                                        type="text"
                                        m-model="this.Employee.email"
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="employee-addition__bottom-contact">
                        <div class="employee_addition-input-wrapper">
                            <div class="textfield text-field__normal pd-2">
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        Tải khoản ngân hàng
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text bank-account__data-input"
                                        type="text"
                                        v-model="
                                            this.Employee.bankAccountNumber
                                        "
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                        <div class="employee_addition-input-wrapper">
                            <div class="textfield text-field__normal pd-2">
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        Tên ngân hàng
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text bank-name__data-input"
                                        type="text"
                                        v-model="this.Employee.bankName"
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                        <div class="employee_addition-input-wrapper">
                            <div class="textfield text-field__normal pd-2">
                                <div class="normal-text-field__label">
                                    <span
                                        class="normal-text-field__label--text"
                                    >
                                        Chi nhánh
                                    </span>
                                </div>
                                <div
                                    class="normal-text-field__input display_block"
                                >
                                    <input
                                        class="normal-text-field__input--text bank-branch__data-input"
                                        type="text"
                                        v-model="this.Employee.bankBranchName"
                                    />

                                    <div
                                        style="display: none"
                                        class="normal-text-field__icon--result"
                                    >
                                        <i
                                            class="icofont-check-circled normal-text-field__icon--icon"
                                        ></i>
                                    </div>
                                </div>
                                <span
                                    style="display: none"
                                    class="normal-text-field__respond--text"
                                >
                                    Tên trường không được để trống
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end information form -->
                <div class="employee-addition__divide"></div>
                <div class="employee-addition__footer">
                    <div class="employee-addition__footer--left">
                        <semi-button name="Hủy"></semi-button>
                    </div>
                    <div class="employee-addition__footer--right">
                        <semi-button name="Cất"></semi-button>
                        <main-button
                            name="Cất và Thêm"
                            :eventButton="this.btnSaveTheEmployee"
                        ></main-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <popup-notify
        v-show="this.popUpNotify.isShowingUpPopUp"
        :notifyMessage="this.popUpNotify.notifyMessage"
        :typeNotify="this.popUpNotify.typeNotify"
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
                isShowingUpPopUp: false,
                notifyMessage: '',
                typeNotify: '',
            },
            isDepartmentComboBoxOpen: false,
            Departments: [],
        }
    },
    created() {
        this.loadAllDepartment()
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
            this.$emit('onClose')
        },
        /**
         * button save the employee handler
         * Author: Toanlk (25/12/2022)
         */
        btnSaveTheEmployee: function () {
            console.log('test1')
            //validate
            if (this.validateValue()) {
                this.addNewEmployee(this.Employee)
            }
        },
        /**
         * turn on validate red line
         * Author: toanlk(25/12/2022)
         */
        validateValue() {
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
            // TODO: turn on this
            // if(this.Employee.DepartmentId == ''){
            //     this.requiredField.isDepartmentEmpty = true;
            // }
        },
        /**
         * push an new employee to database with api;
         * Author: Toanlk(25/12/2022)
         */
        addNewEmployee(employee) {
            axios
                .post('https://amis.manhnv.net/api/v1/Employees', employee)
                .then((res) => {
                    this.PopUpHandler(true, res)
                })
                .catch((err) => {
                    console.log('err')
                    this.PopUpHandler(false, err)
                })
        },
        /**
         * pop up handler
         */
        PopUpHandler(isSuccess, res) {
            this.popUpNotify.notifyMessage = isSuccess
                ? 'Thêm mới thành công '
                : res.response.data.devMsg
            this.popUpNotify.typeNotify = isSuccess ? 'success' : 'error'
            this.popUpNotify.isShowingUpPopUp = true
            console.log(this.popUpNotify)
        },
        /**
         * load all department
         * Author:toanlk (25/12/2022)
         */
        loadAllDepartment() {
            axios
                .get('https://amis.manhnv.net/api/v1/Departments')
                .then((res) => {
                    this.Departments = res.data
                    console.log(res)
                })
                .catch((err) => {
                    console.log(err)
                })
            console.log(this.Departments)
        },
        ShowAndHideDropDownList() {
            this.isDepartmentComboBoxOpen = true
        },
        SelectedDepartmentElement(departmentItem) {
            this.selectedDepartment = departmentItem
            this.Employee.DepartmentId = this.selectedDepartment.DepartmentId
            this.isDepartmentComboBoxOpen = false
        },
    },
}
</script>

<style scoped>
.employee-addition__footer--right {
    display: flex;
    padding-right: 12px;
}
.popup-add-new-employee {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(77, 77, 77, 0.486);
    z-index: 10001;
}
.employee-addition-wrapper {
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
.selection-position {
    display: flex;
    align-items: center;
    margin-right: 16px;
}
.selection-position__text {
    margin-left: 10px;
    padding-top: 6px;
}
.selection-position__check-box {
    width: 20px;
    height: 20px;
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
.identity-issua__data-picker {
    justify-content: center;
}
.identity-issue__data-picker {
    border: unset;
    text-align: center;
    outline: unset;
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
}
.employee-addition__information-right {
    /* display: flex; */
}
.employee-addition__left-second {
    min-width: 393px;
    display: flex;
    align-items: flex-start;
}
.employee-addition__right-first {
    display: flex;
    align-items: flex-start;
    padding: 12px;
}
.employee-addition__left-first {
    display: flex;
    align-items: center;
}
.display_block {
    width: 100%;
    display: block;
}
.employee_Id-input-field {
    width: 320px;
}
.employee-addtion__right-second {
    display: flex;
    margin-top: 3px;
    margin-top: 17px;
}
.margin_12 {
    display: block;
    /* margin: 12px; */
}
.pd-2 {
    padding: 2px;
}
.employee-addition__bottom {
    margin-top: 12px;
}
.employee-addition__bottom-contact {
    display: flex;
}
.employee_addition-input-wrapper {
    display: flex;
    width: 260px;
}
.employee_addition-input-wrapper > .pd-2 {
    margin-right: 0;
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
.employee-addition__footer--right > .button__semi {
    margin-right: 8px;
}
.add-new__department-combo-box-list--list {
    top: calc(36px + 40px);
}
/* popup response */
.popup-response-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(77, 77, 77, 0.486);
    display: flex;
    justify-content: center;
    align-items: center;
}
.popup-response {
    background-color: white;
    border-radius: 4px;
    box-shadow: 0px 4px 16px #171b2a3d;
}
.popup-response__wrapper {
    padding: 32px;
}
.popup-response__main-part {
    display: flex;
    align-items: center;
}
.popup-response__main-icon {
}
.popup-response__main-icon-background {
    width: 48px;
    height: 48px;
}
.popup-response__main-icon-warning-background {
    width: 48px;
    height: 48px;
    background: url(../../assets/images/icon.svg) no-repeat -592px -462px;
}
.popup-response__main-icon-background.popup-response--error {
    background: url(../../assets/images/icon.svg) no-repeat -24px -961px;
}
.popup-response__main-icon-background.popup-response--success {
    background: url(../../assets/images/icon.svg) no-repeat -990px -462px;
}
.popup-response__main-icon-background.popup-response--question {
    background: url(../../assets/images/icon.svg) no-repeat -820px -461px;
}
.popup-response__main-icon-question-background {
    width: 48px;
    height: 48px;
    background: url(../../assets/images/icon.svg) no-repeat -820px -461px;
}
.popup-response__main-text {
    padding: 12px 0 0 16px;
    margin-bottom: 32px;
}
.popup-response__divide-line {
    width: 380px;
    height: 1px;
    background-color: #b8bcc3;
    margin-bottom: 20px;
}
.popup-response__button {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.popup-response__two-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.popup-response__right-option {
}
.display_none {
    display: none;
}
.display_flex {
    display: flex;
}
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
    padding: 4px 8px;
    color: transparent;
    background-color: #f8f8f8;
    /* justify-content: left; */
}
.reset-css-button {
    border: unset;
    width: 100%;
    background-color: unset;
    text-align: left;
    height: 100%;
}
/* component  */
/* TODO: has to change */
.textfield {
    margin: 12px;
    /* max-width: 260px; */
}
.text-field__normal {
    width: 100%;
    cursor: pointer;
    margin-bottom: 0;
}
.normal-text-field__label {
    /* width: 41px;
	height: 11px; */
    display: block;
    margin-bottom: 8px;
    width: auto;
}
.normal-text-field__label--text {
    font-size: 14px;
    font-weight: 500;
    color: #1f1f1f;
    width: auto;
    position: relative;
}
.text-label__tooltip {
    /* top:12px !important;  */
}
.normal-text-field__input {
    position: relative;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.normal-text-field__input--text {
    position: absolute;
    top: 0;
    box-sizing: border-box;
    border-radius: 4px;
    /* width: 260px; */
    width: 100%;
    height: 36px;
    text-align: left;
    font-size: 14px;
    /* margin: 0; */
    padding-left: 12px;
    padding-right: 20px + 4px;
    border: 1px solid #ebebeb;
    outline: unset;
}
.normal-text-field__icon--result {
    width: 20px;
    height: 20px;
    padding: 8px;
    position: absolute;
    top: 0;
    right: 0;
}
.normal-text-field__icon--icon {
    font-size: 20px;
}
.normal-text-field__respond--text {
    /* position: absolute;
	top: 0; */
    display: block;
    text-align: left;
    padding-top: 8px;
    font-size: 12px;
    font-weight: 400;
    color: #e61d1d;
    white-space: nowrap;
}
.normal-text-field__icon--result {
    position: absolute;
    right: 0;
    /* top: 0; */
    display: flex;
    align-items: center;
    justify-content: center;
}
.normal-text-field__icon--icon {
    color: #50b83c;
}
/* search bar */
.normal-text-field__icon--search {
    width: 20px;
    height: 20px;
    padding: 8px;
    position: absolute;
    top: 0px;
    right: 0px;
    border-radius: 0px 3px 3px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebebeb;
    /* box-sizing: border-box; */
}
.normal-text-search-icon--icon {
    color: #666666;
    font-size: 12px;
}
/* status  */
.text-field__normal:hover input.normal-text-field__input--text {
    /* background-color: #f6f6f6; */
}
/* .normal-text-field__input--text:focus {
	border-color: #50b83c;
} */
.normal-text-field__respond {
    height: 8px;
    /* overflow: hidden; */
}
.normal-text-field--disable .normal-text-field__input--text {
    background-color: #ebebeb;
    cursor: pointer;
    color: #666666;
}
.text-being-required {
    color: red;
}

.text-field--disable {
    background-color: #ebebeb;
    border-color: #e0e0e0;
    color: #666666;
}
/* end text field */
.combo-box-list {
    position: relative;
    /* background-color: red; */
    flex: 1;
    /* margin-top: 7px; */
    margin-right: 12px;
    margin-left: 12px;
    padding-top: 14px;
}
.combo-box__label {
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
    z-index: 1;
    box-sizing: border-box;
}
.combo-box__input-text {
    white-space: nowrap;
    overflow: hidden;
    /* max-width: 140px; */
    font-size: 14px;
    padding: 0px 12px;
    font-weight: 400;
    color: black;
    text-align: left;
    border: unset;
    outline: unset;
    /* background-color: red; */
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
}
.combo-box-list--placeholder-icon {
    width: 24px;
    height: 24px;
    font-size: 24px;
    color: #50b83c;
    margin-right: 8px;
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
/* end combo box */

.date-picker__button {
    width: 140px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    border-radius: 4px;
    border: 1px solid #e0e1e4;
    box-sizing: border-box;
}
.date-picker__show-button {
    /* margin: 12px; */
    margin-top: 4px;
    padding-right: 12px;
    margin-bottom: 0;
}
.date-picker--date-format {
    font-size: 14px;
    margin-left: 12px;
    text-align: left;
    color: #212121;
    font-weight: 400;
}
.date-picker__button-icon {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    display: flex;
    align-items: center;
}

.date-picker__i--calender-icon {
    font-size: 18px;
}
.date-picker__top-part {
    margin-top: 4px;
    width: 320px;
    height: 351px;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 2px 3px #0000000d;
}
.date-picker__calendar {
    padding: 24px;
    padding-bottom: 0;
}
.date-picker__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
}

.date-picker__month-year {
    display: flex;
    align-items: center;
}
.date-picker__month-year--text {
    font-size: 16px;
    font-weight: 700;
    color: #1d2634;
}
.date-picker__month-year--icon {
    width: 25px;
    height: 24px;
    margin-left: 3px;
    display: flex;
    align-items: center;
}

.date-picker__month-year--down {
    font-size: 20px;
    color: #65696e;
}
.date-picker__switch-page {
    display: flex;
    align-items: center;
}
.date-picker__switch-page--icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
}
.date-picker__switch-page--distance {
    margin-right: 11px;
}
.date-picker__switch-page--down {
    font-size: 24px;
    color: #000000;
}

.date-picker__body {
    /* width: 272px;
	height: 232px; */
    /* padding: 0 24px; */
    margin-bottom: 8px;
}
.date-picker__body--a-line {
    padding: 4px 0;
    display: flex;
}
.date-picker__body--days-in-week {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    text-align: center;
}
.date-picker--days-in-month {
    color: #1d2634;
}
/* .date-picker__body--days-in-month{
    width:32px;
    height:32px;
    padding: 0 8px 0
} */
.date-picker__footer {
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ebebeb;
    text-align: center;
    box-sizing: border-box;
}
.date-picker__footer--text {
    display: inline;
    font-size: 14px;
    font-weight: 500;
    color: #50b83c;
}
/* status  */
.date-picker--day-being-chosen {
    border-radius: 50px;
    color: #ffffff;
    background-color: #50b83c;
}
/* dataPicker */
</style>
