import CashPage from '../components/segments/CashPage.vue'; 
import EmployeesList from '../components/layout/EmployeesList.vue';

import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/home', component: EmployeesList },
  { path: '/cash', component: CashPage },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});
export default router;