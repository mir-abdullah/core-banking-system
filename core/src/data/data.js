import iconNavbarMainMenu from '../assets/images/icon_navbar_main_menu.svg'
import iconNavbarGeneralBanking from '../assets/images/icon_navbar_general_banking.svg'
import iconNavbarTradeFinance from '../assets/images/icon_navbar_trade_finance.svg'
import iconNavbarLoanOrigination from '../assets/images/icon_navbar_loan_origination.svg'
import iconNavbarInternationalTransactions from '../assets/images/icon_navbar_international_transactions.svg'
import iconNavbarCustomerOnboarding from '../assets/images/icon_navbar_customer_onboarding.svg'
import iconNavbarTreasuryManagement from '../assets/images/icon_navbar_treasury_management.svg'
import iconNavbarAnalyticsReporting from '../assets/images/icon_navbar_analytics_reporting.svg'
import iconNavbarBackOffice from '../assets/images/icon_navbar_back_office.svg'
import iconNavbarGeneralInquiry from '../assets/images/icon_navbar_general_inquiry.svg'
import iconNavbarSettings from '../assets/images/icon_navbar_settings.svg'
import newAccountIcon from "../assets/images/icon_notification_new_account.svg";
import editProfileIcon from "../assets/images/icon_profile_edit_profile.svg";
import logoutIcon from "../assets/images/icon_profile_logout.svg";
import changePasswordIcon from "../assets/images/icon_profile_change_password.svg";


export const sidebarItems = [
    { name: 'Main Menu', icon: 'pi-home', iconSrc: iconNavbarMainMenu ,backgroundColor: '', subCategories:' '},
    { name: 'General Banking', icon: 'pi-building-columns', iconSrc: iconNavbarGeneralBanking ,backgroundColor: '#7239ea' ,subCategories:'10'},
    { name: 'Trade Financing', icon: 'pi-chart-bar', iconSrc: iconNavbarTradeFinance ,backgroundColor: '#4880ff'  ,subCategories:'22'},
    { name: 'Loan Origination & Management', icon: 'pi-money-bill', iconSrc: iconNavbarLoanOrigination, backgroundColor: '#2dbe60'  ,subCategories:'07'} ,
    { name: 'International Transactions', icon: 'pi-globe', iconSrc: iconNavbarInternationalTransactions, backgroundColor: '#082e53'  ,subCategories:'09'},
    { name: 'Customer Onboarding & Management', icon: 'pi-users', iconSrc: iconNavbarCustomerOnboarding, backgroundColor: '#00a8a8'  ,subCategories:'16'},
    { name: 'Treasury Management', icon: 'pi-wallet', iconSrc: iconNavbarTreasuryManagement, backgroundColor: '#f5a623'  ,subCategories:'17'},
    { name: 'Analytics & Reporting', icon: 'pi-book', iconSrc: iconNavbarAnalyticsReporting, backgroundColor: '#8e44ad' ,subCategories:'15'},
    { name: 'Back Office Operations', icon: 'pi-briefcase', iconSrc: iconNavbarBackOffice , backgroundColor: '#0b5380'  ,subCategories:'15'},
]

export const sidebarItems2 = [
    {
        name: 'General Inquiry',
        icon: 'pi-info-circle',
        iconSrc: iconNavbarGeneralInquiry,
        subItems: ['- Customer Profile', '- General Ledger A/C', '- Exchange Rates', '- Instrument Inquiry'],
    },
    {
        name: 'Settings',
        icon: 'pi-cog',
        iconSrc: iconNavbarSettings,
        subItems: ['- Dark Mode', '- Edit Dashboard'],
    },
]

export const notifications = [
    {
        id: 1,
        name: 'Lex Murphy',
        message: 'Loan authorization request is currently pending, Please Review!',
        time: 'Today at 9:42 AM',
        hasActions: true,
        read: false,
        Img: 'pi pi-user',
    },
    {
        id: 2,
        name: 'Kathrine',
        message: 'Loan authorization request is currently pending, Please Review!',
        time: 'Today at 9:42 AM',
        hasActions: true,
        read: false,
        Img: 'pi pi-user',
    },
    {
        id: 3,
        name: 'Lex Murphy',
        message: 'Loan authorization request is currently pending, Please Review!',
        time: 'Today at 9:42 AM',
        hasActions: true,
        read: false,
        Img: 'pi pi-user',
    },
    {
        id: 4,
        name: 'New Account',
        message: 'created',
        time: 'Last Wednesday at 9:42 AM',
        hasActions: false,
        read: true,
        Img: newAccountIcon,
    },
]

export const profileMenuItems = [
    {
        id: 1,
        label: 'Edit Profile',
        icon: editProfileIcon,
        action: 'edit-profile',
        showArrow: true,
    },
    {
        id: 2,
        label: 'Change Password',
        icon: changePasswordIcon,
        action: 'change-password',
        showArrow: true,
    },
    {
        id: 3,
        label: 'Notifications',
        icon: editProfileIcon,
        action: 'toggle-notifications',
        hasToggle: true,
    },
    {
        id: 4,
        label: 'Logout Account',
        icon: logoutIcon,
        action: 'logout',
        showArrow: true,
        isDanger: true,
    },
]

export const generalBankingItems = [
  {
    title: "Cash Management",
    color: "#0c3aa3",
    options: [
      { name: "Receive Cash" },
      { name: "Authorize" },
      { name: "Cancel" },
      { name: "Inquiry" },
    ],
    dropdown: [
      {
        name: "Cash Collection",
        subOptions: [
          { name: "Receive Cash" },
          { name: "Authorize" },
          { name: "Cancel" },
          { name: "Inquiry" },
        ],
      },
      {
        name: "Fund Transfer",
        subOptions: [
          { name: "Authorize" },
          { name: "Cancel" },
          { name: "Inquiry" },
        ],
      },
      {
        name: "Dividend Warrant",
        subOptions: [
          {
            name: "Inward Clearing",
            options: [
              { name: "Posting" },
              { name: "Authorize" },
              { name: "Cancel" },
              { name: "Inquiry" },
            ],
          },
          {
            name: "Fund Transfer",
            options: [
              { name: "Cheque" },
              { name: "Authorize" },
              { name: "Cancel" },
              { name: "Inquiry" },
            ],
          },
          {
            name: "Respond Warrants",
            options: [
              { name: "Posting" },
              { name: "Authorize" },
              { name: "Cancel" },
              { name: "Inquiry" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Transfer Funds",
    color: "#05a6c0",
    options: [
      { name: "Lodge" },
      { name: "Authorize" },
      { name: "Cancel" },
      { name: "Inquiry" },
    ],
    dropdown: [
      {
        name: "Forex Remittance",
        subOptions: [
          {
            name: "Inward",
            options: [
              { name: "Print" },
              { name: "W.H. Tax Cert" },
              { name: "JV" },
            ],
          },
          {
            name: "Outward",
            options: [
              { name: "Advice Inquiry" },
              { name: "Beneficiary/Remitter Report" },
              { name: "Manual Swift Confirmation" },
              { name: "Lodge" },
              { name: "Authorize" },
              { name: "Cancel" },
              { name: "Print" },
              { name: "IFX Cert" },
              { name: "Inquiry" },
            ],
          },
          {
            name: "Encashment",
            options: [
              { name: "Print" },
              { name: "IFX Cert" },
              { name: "Inquiry" },
            ],
          },
        ],
      },
      {
        name: "CFBC",
        subOptions: [
          { name: "Lodgement" },
          { name: "Mark Holding" },
          { name: "Realization" },
          { name: "Inquiry" },
        ],
      },
      {
        name: "Online GL Fund Transfer (IBCA)",
        subOptions: [
          { name: "GL Fund TF Single Br" },
          { name: "GL Fund TF Multi Br" },
          { name: "GL Fund TF Authorize" },
          { name: "GL Fund TF Released" },
          { name: "GL Fund TF Inquiry" },
          { name: "GL Fund TF Reverse" },
        ],
      },
      {
        name: "Exchange Voucher",
        subOptions: [
          { name: "Number" },
          { name: "Voucher" },
          { name: "Inquiry" },
        ],
      },
      {
        name: "Online GL Fund Transfer (IBDA)",
        subOptions: [
          { name: "GL Fund TF Single Br" },
          { name: "GL Fund TF Multi Br" },
          { name: "GL Fund TF Authorize" },
          { name: "GL Fund TF Reverse" },
          { name: "GL Fund TF Inquiry" },
        ],
      },
      {
        name: "Pending Charges",
        subOptions: [
          { name: "Reverse Charges" },
          { name: "Cancel" },
        ],
      },
      {
        name: "Banks Charges",
        subOptions: [
          { name: "Receive Cash" },
          { name: "Authorize" },
          { name: "Cancel" },
        ],
      },
    ],
  },
  {
    title: "Cancel Transaction",
    color: "#f97316",
    options: [
      { name: "By Ref No" },
      { name: "By List" },
      { name: "By Voucher No" },
      { name: "By Voucher List" },
    ],
    dropdown: [],
  },
  {
    title: "Transaction Authorization",
    color: "#7c3aed",
    options: [
      { name: "By Reference No" },
      { name: "By Voucher No" },
      { name: "By Transaction No" },
      { name: "By Transaction List" },
      { name: "Inter Branch Tagged Transaction" },
      { name: "Charge Waiver Authorization" },
    ],
    dropdown: [
      {
        name: "Member Authorization",
        subOptions: [
          { name: "By Transaction No" },
          { name: "By Transaction List" },
        ],
      },
      {
        name: "View",
        subOptions: [
          { name: "By Reference No" },
          { name: "By Voucher No" },
          { name: "By Transaction List" },
          { name: "To Transaction" },
          { name: "Or Payment" },
        ],
      },
    ],
  },
  {
    title: "Billers",
    color: "#0ea5e9",
    options: [
      { name: "Utility Bills Collection" },
      { name: "Utility Biller Addition" },
    ],
    dropdown: [
      {
        name: "Utility Bills Collection",
        subOptions: [
          { name: "Payment" },
          { name: "Authorize" },
          { name: "Cancel" },
          { name: "Inquiry" },
          { name: "Export File" },
        ],
      },
      {
        name: "Utility Biller Addition",
        subOptions: [
          { name: "Edit" },
          { name: "Modify" },
          { name: "Authorize" },
          { name: "File Upload" },
        ],
      },
    ],
  },
];

export const customerOnboardingItems = [
  {
    title: "Account Opening",
    color: "#00a8a8",
    options: [
      { name: "Modify" },
      { name: "Open New Customer & Account" },
      { name: "Open New Account of Existing Customer" },
      { name: "Account Update" },
      { name: "Approve New Accounts" },
      { name: "Remove Maker Before Authorization" },
    ],
    dropdown: [
      {
        name: "Biometric",
        subOptions: [
          { name: "Modify" },
          { name: "Open New Customer & Account" },
          { name: "Open New Account of Existing Customer" },
          { name: "Account Update" },
          { name: "Approve New Accounts" },
          { name: "Remove Maker Before Authorization" },
        ],
      },
      {
        name: "Aced",
        subOptions: [
          { name: "New Customer" },
          { name: "Existing Customer" },
        ],
      },
    ],
  },
  {
    title: "Account Maintenance",
    color: "#16a34a",
    options: [
      { name: "SMS Alert Request" },
      { name: "E-Statement Request" },
      { name: "ATM Card Request" },
      { name: "Apply/Remove Conditions" },
      { name: "Natural Person CIF" },
      { name: "Entity CIF" },
    ],
    dropdown: [
      {
        name: "SMS Alert Request",
        subOptions: [
          {
            name: "Service Request",
            options: [
              { name: "Remove Mutation Before Authorization" },
              { name: "Authorize SMS Alerts" },
              { name: "Authorize SMS Alert Request" },
              { name: "Cancellation of Mutation After Process" },
              { name: "Authorize SMS Alerts Request" },
            ],
          },
          {
            name: "E-Statement Request",
            options: [
              { name: "E-Statement Request" },
              { name: "E-Statement Cancellation" },
              { name: "E-Statement Intention Request" },
              { name: "E-Statement Intention Cancellation" },
            ],
          },
        ],
      },
      {
        name: "ATM Card Request",
        subOptions: [
          {
            name: "Service Request",
            options: [
              { name: "Service Initiate" },
              { name: "Authorize Mutation (Assign)" },
            ],
          },
        ],
      },
      {
        name: "Apply/Remove Conditions",
        subOptions: [
          { name: "Apply/Remove Conditions" },
          { name: "Remove Condition" },
          { name: "Reprint" },
        ],
      },
      {
        name: "Natural Person CIF",
        subOptions: [
          {
            name: "CIF Enquiry",
            options: [
              { name: "CIF Maker of Passing Enquiry" },
              { name: "CIF Status Report" },
            ],
          },
          {
            name: "Customer's Account Change Request",
            options: [
              { name: "Account Maintenance Request" },
            ],
          },
        ],
      },
      {
        name: "Entity CIF",
        subOptions: [
          { name: "Issue Express Book" },
          { name: "Issue Cheque Book" },
        ],
      },
    ],
  },
  {
    title: "CIF Management",
    color: "#8b5cf6",
    options: [
      { name: "Natural Person CIF" },
      { name: "Entity CIF" },
    ],
    dropdown: [
      {
        name: "Natural Person CIF",
        subOptions: [
          {
            name: "CIF Enquiry",
            options: [
              { name: "CIF Maker of Passing Enquiry" },
              { name: "CIF Status Report" },
            ],
          },
          { name: "Remove Mutation Before Authorization" },
          { name: "Authorize" },
          { name: "E-Statement Cancellation" },
          { name: "Inquiry" },
          { name: "CIF Maintenance" },
          { name: "Removal Mutation Before Authorization" },
          { name: "Authorize" },
          { name: "Maintenance Cancellation" },
          { name: "Inquiry" },
        ],
      },
      {
        name: "Entity CIF",
        subOptions: [
          { name: "Issue Express Book" },
          { name: "Issue Cheque Book" },
        ],
      },
    ],
  },
  {
    title: "Cheque Book",
    color: "#dc2626",
    options: [
      { name: "Request" },
      { name: "Activate" },
      { name: "Authorize" },
      { name: "Cancel" },
      { name: "Inquire" },
    ],
    dropdown: [
      {
        name: "Request",
        subOptions: [
          { name: "Request" },
          { name: "Revise" },
        ],
      },
      {
        name: "Activate",
        subOptions: [
          { name: "By A/C No" },
          { name: "By List" },
          { name: "All" },
        ],
      },
      {
        name: "Authorize",
        subOptions: [
          { name: "Activate" },
          { name: "Authorize" },
          { name: "Cancel Request" },
        ],
      },
      {
        name: "Cancel",
        subOptions: [
          { name: "By A/C No" },
          { name: "By List" },
          { name: "All" },
        ],
      },
      {
        name: "Inquire",
        subOptions: [
          { name: "Request" },
          { name: "By Account No." },
          { name: "By Cheque No." },
        ],
      },
      {
        name: "Cheque Status",
        subOptions: [
          { name: "Status" },
          { name: "Posting" },
          { name: "Inquire" },
        ],
      },
      {
        name: "Account Interest Rate",
        subOptions: [
          { name: "Add" },
          { name: "Modify" },
          { name: "Inquire" },
        ],
      },
    ],
  },
  {
    title: "Operational Activities",
    color: "#f59e0b",
    options: [
      { name: "Customer Charges" },
      { name: "Customer Commission Charges" },
      { name: "Customer WHT Tax Exemption" },
      { name: "Special Conditions" },
      { name: "Standing Instructions" },
    ],
    dropdown: [
      {
        name: "Customer Information",
        subOptions: [
          {
            name: "Special Charges",
            options: [
              { name: "Create" },
              { name: "Cancel Ref. Auth" },
              { name: "Authorize" },
              { name: "Inquire" },
              { name: "Edit" },
            ],
          },
          {
            name: "Customer Commission Charges",
            options: [
              { name: "Create" },
              { name: "Cancel Ref. Auth" },
              { name: "Authorize" },
              { name: "Inquire" },
              { name: "Edit" },
            ],
          },
          {
            name: "Customer WHT Tax Exemption",
            options: [
              { name: "Create" },
              { name: "Cancel Ref. Auth" },
              { name: "Authorize" },
              { name: "Inquire" },
            ],
          },
        ],
      },
      {
        name: "Special Conditions",
        subOptions: [
          { name: "Maintain" },
          { name: "Inquire" },
          { name: "Copy" },
          { name: "Inquire" },
        ],
      },
      {
        name: "Standing Instructions",
        subOptions: [
          {
            name: "Auto",
            options: [
              { name: "Apply" },
              { name: "Cancel" },
              { name: "Inquire" },
            ],
          },
          {
            name: "Semi Auto",
            options: [
              { name: "Apply" },
              { name: "Cancel" },
              { name: "Inquire" },
            ],
          },
        ],
      },
      {
        name: "Close Account",
        subOptions: [
          {
            name: "Block",
            options: [
              { name: "Block Account" },
              { name: "Unblock Account" },
              { name: "Inquire" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "CRS",
    color: "#06b6d4",
    options: [
      { name: "CRS Form" },
      { name: "Pending Records" },
      { name: "Maintenance" },
      { name: "Inquiry" },
    ],
    dropdown: [
      {
        name: "CRS Form",
        subOptions: [
          { name: "CRS Customer" },
          { name: "CRS Employer" },
        ],
      },
      {
        name: "Pending Records",
        subOptions: [
          { name: "Transfer Pending Records" },
          { name: "Authorize Pending Records" },
          { name: "Cancel Pending Records" },
        ],
      },
      {
        name: "Maintenance",
        subOptions: [
          { name: "Transfer Pending Entity" },
          { name: "Cancel Pending Entity" },
        ],
      },
      {
        name: "Inquiry",
        subOptions: [
          { name: "CRS Inquiry" },
          { name: "CRS Current Status Inquiry" },
        ],
      },
    ],
  },
];

