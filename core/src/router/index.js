import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import SignUpPage from '../views/SignUpPage.vue';
import Dashboard from '../views/Dashboard.vue';


const routes = [
  { path: '/', name: 'SignIn', component: SignUpPage },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/general-banking', name: 'GeneralBanking', component: Home },
  { path: '/trade-financing', name: 'TradeFinancing', component: Home },
  { path: '/loan-origination', name: 'LoanOrigination', component: Home },
  { path: '/international-transactions', name: 'InternationalTransactions', component: Home },
  { path: '/customer-onboarding', name: 'CustomerOnboarding', component: Home },
  { path: '/treasury-management', name: 'TreasuryManagement', component: Home },
  { path: '/analytics-reporting', name: 'AnalyticsReporting', component: Home },
  { path: '/back-office-operations', name: 'BackOfficeOperations', component: Home },
  { path: '/general-inquiry', name: 'GeneralInquiry', component: Home },
  { path: '/settings', name: 'Settings', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;






