<template>
    <div class="main-content">
        <add-new-employee
            :isUpdate="true"
            :EmployeeBeUpdated="{}"
            v-if="true"
        ></add-new-employee>
        <popup-notify
            v-if="false"
            typeNotify="success"
            notifyMessage="test"
        ></popup-notify>
    </div>
</template>
<script>
import AddNewEmployee from '../layout/AddNewEmployee'
export default {
    name: 'BuyAndSell',
    components: {
        AddNewEmployee,
    },
    data() {
        return {}
    },
    methods: {},
}
</script>

<style scoped>
.main-content {
    background-color: #f4f5f7;
    padding: 24px 24px 0 24px;
    overflow: hidden;
    height: calc(100% - 56px);
}
</style>
