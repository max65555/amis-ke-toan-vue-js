<template>
    <div class="popup-response-overlay">
        <div class="popup-response">
            <div class="popup-response__wrapper">
                <div class="popup-response__main-part">
                    <div class="popup-response__main-icon">
                        <div
                            class="popup-response__main-icon-background"
                            :class="[typeNotifyClass]"
                        ></div>
                    </div>
                    <span class="popup-response__main-text">
                        {{ notifyMessage }}
                    </span>
                </div>
                <div class="popup-response__divide-line"></div>
                <div class="popup-response__button">
                    <semi-button name="Đóng" :eventButton="semiButtonAction" />
                    <main-button
                        name="Xác nhận"
                        :eventButton="mainButtonAction"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopupNotify',
    props: {
        typeNotify: {
            type: String,
            required: true,
        },
        notifyMessage: {
            type: String,
            required: true,
        },
        semiButtonAction: {
            type: Function,
            required: false,
        },
        mainButtonAction: {
            type: Function,
            required: false,
        },
    },
    beforeUpdate() {
        this.typeNotifyClass = 'popup-response--' + this.typeNotify
    },
    data() {
        return {
            typeNotifyClass: '',
        }
    },
}
</script>

<style scoped>
.popup-response-overlay {
    z-index: 100001;
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
</style>
