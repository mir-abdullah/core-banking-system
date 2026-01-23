import { createRouter, createWebHistory } from "vue-router";

import SignUpPage from "../views/SignUpPage.vue";
import Dashboard from "../views/Dashboard.vue";
import GeneralBanking from "../views/GeneralBanking.vue";
import TradeFinancing from "../views/TradeFinancing.vue";
import LoanOrigination from "../views/LoanOrigination.vue";
import InternationalTransactions from "../views/InternationalTransactions.vue";
import CustomerOnboarding from "../views/CustomerOnboarding.vue";
import TreasuryManagement from "../views/TreasuryManagement.vue";
import AnalyticsReporting from "../views/AnalyticsReporting.vue";
import BackOfficeOperations from "../views/BackOfficeOperations.vue";
import GeneralInquiry from "../views/GeneralInquiry.vue";
import Settings from "../views/Settings.vue";
import OpenNewCustomerAccount from "../UseCase/openNewCustomerAccount.vue";

const routes = [
  { path: "/", name: "SignIn", component: SignUpPage, meta: { hide: true } },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: { title: "Main Menu" },
  },
  {
    path: "/general-banking",
    name: "GeneralBanking",
    component: GeneralBanking,
    meta: { title: "General Banking" },
  },
  {
    path: "/trade-financing",
    name: "TradeFinancing",
    component: TradeFinancing,
    meta: { title: "Trade Financing" },
  },
  {
    path: "/loan-origination-&-management",
    name: "LoanOrigination&Management",
    component: LoanOrigination,
    meta: { title: "Loan Origination & Management" },
  },
  {
    path: "/international-transactions",
    name: "InternationalTransactions",
    component: InternationalTransactions,
    meta: { title: "International Transactions" },
  },
  {
    path: "/customer-onboarding-&-management",
    name: "CustomerOnboarding&Management",
    component: CustomerOnboarding,
    meta: { title: "Customer Onboarding & Management" },
    children: [
      {
        path: "open-new-customer-account",
        name: "OpenNewCustomerAccount",
        component: OpenNewCustomerAccount,
        meta: { title: "Open New Customer & Account" },
      },
    ],
  },
  {
    path: "/treasury-management",
    name: "TreasuryManagement",
    component: TreasuryManagement,
    meta: { title: "Treasury Management" },
  },
  {
    path: "/analytics-reporting",
    name: "AnalyticsReporting",
    component: AnalyticsReporting,
    meta: { title: "Analytics & Reporting" },
  },
  {
    path: "/back-office-operations",
    name: "BackOfficeOperations",
    component: BackOfficeOperations,
    meta: { title: "Back Office Operations" },
  },
  {
    path: "/general-inquiry",
    name: "GeneralInquiry",
    component: GeneralInquiry,
    meta: { title: "General Inquiry" },
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: { title: "Settings" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
