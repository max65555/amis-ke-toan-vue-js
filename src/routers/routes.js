import CashPage from '../components/segments/CashPage.vue'; 
import EmployeesList from '../components/layout/EmployeesList.vue';
import CashInBank from '../components/segments/CashInBank.vue';

import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  { path: '/home', component: EmployeesList },
  { path: '/cash', component: CashPage },
  {path:'/cashinbank',component: CashInBank}
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});
export default router;