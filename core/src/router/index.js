import { createRouter, createWebHistory } from "vue-router";

import SignUpPage from "../views/SignUpPage.vue";
import Dashboard from "../views/Dashboard.vue";
import GeneralBanking from "../views/GeneralBanking.vue";
import TradeFinancing from "../views/tradeFinance/TradeFinancing.vue";
import LoanOrigination from "../views/LoanOrigination.vue";
import InternationalTransactions from "../views/InternationalTransactions.vue";
import CustomerOnboarding from "../views/CustomerOnboarding.vue";
import TreasuryManagement from "../views/TreasuryManagement.vue";
import AnalyticsReporting from "../views/AnalyticsReporting.vue";
import BackOfficeOperations from "../views/BackOfficeOperations.vue";
import GeneralInquiry from "../views/GeneralInquiry.vue";
import Settings from "../views/Settings.vue";
import OpenNewCustomerAccount from "../UseCase/openNewCustomerAccount.vue";
import NewCustLoanApp from "../UseCase/NewCustLoanApp.vue";
import TradeFinancingImports from "../views/tradeFinance/TradeFinancingImports.vue";
import TradeFinancingExports from "../views/tradeFinance/TradeFinancingExports.vue";
import Setup from "../views/Setup.vue";
import UserGroup from "../views/UserGroup.vue";
import Origination from "../views/consumerLoan/Origination.vue";
import LoanOriginationMainScreen from "../views/LoanOriginationMainScreen.vue";
import Disbursement from "../views/consumerLoan/Disbursement.vue";
import Recovery from "../views/consumerLoan/Recovery.vue";
import Approval from "../views/consumerLoan/Approval.vue";
import LoanManagement from "../views/consumerLoan/LoanManagement.vue";
import AssetManagement from "../views/consumerLoan/AssetManagement.vue";

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
    meta: { title: "Trade Finance" },
    children: [
      {
        path: "imports",
        name: "Imports",
        component: TradeFinancingImports,
        meta: { title: "Imports" },
      },
      {
        path: "exports",
        name: "Exports",
        component: TradeFinancingExports,
        meta: { title: "Exports" },
      },
    ],
  },
  {
    path: "/loan-origination-&-management",
    name: "LoanOrigination&Management",
    component: LoanOriginationMainScreen,
    meta: { title: "Loan Origination & Management" },
    children: [
      {
        path: "Consumer-Loan",
        name: "ConsumerLoan",
        component: LoanOrigination,
        meta: { title: "Consumer Loans" },
        children: [
          {
            path: "-origination",
            name: "ConsumerOrigination",
            component: Origination,
            meta: { title: "Origination" },
            // children: [
            //   {
            //     path: "loan-application-submission",
            //     name: "NewCustomerLoanApplication",
            //     component: NewCustLoanApp,
            //     meta: { title: "Loan Application Submission" },
            //   },
            // ],
          },
          {
            path: "-disbursement",
            name: "ConsumerDisbursement",
            component: Disbursement,
            meta: { title: "Disbursement" },
          },
          {
            path: "recovery-&-settlement",
            name: "ConsumerRecovery",
            component: Recovery,
            meta: { title: "Recovery & Settlement" },
          },
          {
            path: "-approval",
            name: "ConsumerApproval",
            component: Approval,
            meta: { title: "Approval" },
          },
          {
            path: "loan-management",
            name: "ConsumerLoanManagement",
            component: LoanManagement,
            meta: { title: "Loan Management" },
          },
          {
            path:"Asset-Management",
            name:"AssetManagement",
            component:AssetManagement,
            meta:{title:"Asset Management"} 
          },
           {
                path: "loan-application-submission",
                name: "NewCustomerLoanApplication",
                component: NewCustLoanApp,
                meta: { title: "Loan Application Submission" },
              },
        ],
      },
      {
        path: "SME-Agri-Corporate-Loan",
        name: "SMEAgriCorporateLoan",
        component: LoanOrigination,
        meta: { title: "Corporate, SME, Agri Loans" },

        children: [
          {
            path: "-origination",
            name: "SMEOrigination",
            component: Origination,
            meta: { title: "Origination" },
            // children: [
            //   {
            //     path: "loan-application-submission",
            //     name: "LoanApplicationSubmission",
            //     component: NewCustLoanApp,
            //     meta: { title: "Loan Application Submission" },
            //   },
            // ],
          },
          {
            path: "-disbursement",
            name: "SMEDisbursement",
            component: Disbursement,
            meta: { title: "Disbursement" },
          },
          {
            path: "recovery-&-settlement",
            name: "SMERecovery",
            component: Recovery,
            meta: { title: "Recovery & Settlement" },
          },
          {
            path: "-approval",
            name: "SMEApproval",
            component: Approval,
            meta: { title: "Approval" },
          },
          {
            path: "loan-management",
            name: "SMELoanManagement",
            component: LoanManagement,
            meta: { title: "Loan Management" },
          },
           {
                path: "loan-application-submission",
                name: "LoanApplicationSubmission",
                component: NewCustLoanApp,
                meta: { title: "Loan Application Submission" },
              },
        ],
      },
    ],
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
    path: "/analytics-&-reporting",
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
  {
    path: "/setup",
    name: "Setup",
    component: Setup,
    meta: { title: "Setup" },
  },
  {
    path: "/user",
    name: "UserGroup",
    component: UserGroup,
    meta: { title: " User Group" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
