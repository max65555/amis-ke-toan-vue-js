<template>
    <overlay-background zIndex="150"></overlay-background>
    <div class="notify__container">
        <div class="notify__wrapper">
            <div class="notify__header">
                <span class="notify__header-text">
                    {{ headerMessage }}
                </span>
                <button
                    class="notify__close-icon"
                    @click="this.$emit('click-handler')"
                >
                    <div class="notify__close-icon--background"></div>
                </button>
            </div>
            <div class="notify__body">
                <span class="notify__body-detail-text">{{ mainMessage }} </span>
            </div>
            <div class="notify__footer-buttons">
                <div class="notify__footer--right">
                    <semi-button
                        :label="semiButtonLabel"
                        @click-handler="this.$emit('semi-button-handler')"
                    >
                    </semi-button>
                    <main-button
                        :label="mainButtonLabel"
                        @click-handler="this.$emit('main-button-handler')"
                    ></main-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopupNotify',
    props: {
        headerMessage: {
            type: String,
            required: true,
        },
        mainMessage: {
            type: String,
            required: true,
        },
        semiButtonLabel: {
            type: String,
            required: false,
        },
        mainButtonLabel: {
            type: String,
            required: false,
        },
    },
}
</script>

<style scoped>
.notify__container {
    z-index: 151;
    background-color: white;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 416px;
    box-shadow: 0 0 16px rgba(23, 27, 42, 0.078);
    border-radius: 4px;
    /* width: 50%; */
}
.notify__wrapper {
    padding: 24px;
}
.notify__header {
    display: flex;
    justify-content: space-between;
}
.notify__header-text {
    font-size: 20px;
    color: #1f1f1f;
    text-align: left;
    font-weight: 700;
}

.notify__close-icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.notify__close-icon--background {
    width: 12px;
    height: 12px;
    background: url(../../assets/images/icon.svg) -1178px -362px;
}
.notify__body {
    padding-top: 24px;
}
.notify__body-detail-text {
    line-height: 18px;
    text-align: left;
    font-weight: 400;
    color: #1f1f1f;
}
.notify__footer-buttons {
    padding-top: 24px;
}
.notify__footer--right {
    display: flex;
    justify-content: flex-end;
}
.notify__footer-buttons {
}
.notify__footer--right > .btn__container ~ .btn__container {
    padding-left: 8px;
}
</style>
