<template>
    <div class="main-content">
        <div class="cash-page__container">
            <h1 class="cash-page__text">Cash Page is coming soon</h1>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CashPage',
}
</script>

<style scoped>
.main-content {
    background-color: #f4f5f7;
    padding: 24px 24px 0 24px;
    overflow: hidden;
    height: calc(100% - 56px);
}
.cash-page__container {
    height: calc(100vh - 56px - 36px - 24px - 120px);
    display: flex;
    justify-content: center;
    align-items: center;
}
.cash-page__text {
    text-align: center;
}
</style>
