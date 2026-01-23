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
        subItems: [{name:'- Customer Profile'}, {name:'- General Ledger A/C'}, {name:'- Exchange Rates'}, {name:'- Instrument Inquiry'}],
    },
    {
        name: 'Settings',
        icon: 'pi-cog',
        iconSrc: iconNavbarSettings,
        subItems: [{name:'- Dark Mode',hasToggle: true}, {name:'- Edit Dashboard',hasToggle: true}],
        
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
    ],
    dropdown: [
      {
        name:"Transfer Funds",


      },
      {
        name: "Inter Branch Transfer Funds",

      },
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
  
    ],
    dropdown: [
      {
        name: "By Ref No",
      }
      ,{
        name: "By List",
      }
      ,{
        name: "By Voucher No",
      }
      ,{
        name: "By Voucher List",
      }
    ],
  },
  {
    title: "Transaction Authorization",
    color: "#7c3aed",
    options: [
      { name: "By Reference No" },
      { name: "By Voucher No" },
      { name: "By Transaction No" },
  
    ],
    dropdown: [
      {
        name: "Authorize",
        subOptions: [
          { name: "By Transaction List" },
          {
            name: "By Reference No",
          },{
            name: "By Voucher No",
          },{
            name: "By Voucher List",
            options: [
              { name:"Normal" },
              {name:"Inter Branch" }
            ]
          },
          {
            name:"Monitor By Transaction No."
          },
          {
            name:"Monitor By Transaction List"
          },
          {
            name:"Charges Waiver Authorize"
          }
          ,{
            name:"Inter Branch Logged Transaction"
          }
        ],
      },
      {
        name: "View",
        subOptions: [
          { name: "By Reference No" },
       
          { name: "By Transaction List" },
          { name: "To Transaction" },
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
      { name: "Modify" },
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
  {
    title: "Credit Cards",
    color: "#ec4899",
    options: [
      { name: "Card Inquiry" },
      { name: "Cash Collection" },
      { name: "Funds Transfer" },
    ],
    dropdown: [
      {
        name: "Card Inquiry",
        subOptions: [
          { name: "Inquiry" },
        ],
      },
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
        name: "Funds Transfer",
        subOptions: [
          { name: "Fund Transfer" },
          { name: "Authorize" },
          { name: "Cancel" },
          { name: "Inquiry" },
        ],
      },
    ],
  },
  {
    title: "Cash Withdrawal",
    color: "#10b981",
    options: [
      { name: "Payment" },
      { name: "Authorize" },
      { name: "Modify" },
   
    ],
    dropdown: [
      {
        name:"Payment",
        
      }
      ,{
        name:"Authorize",
       
      }
      ,{
        name:"Modify",
        
      }
      ,{
        name:"Cancel",
      
      }
      ,{
        name:"Inquiry",
      }
    ],
  },
  {
    title: "Inward Clearing",
    color: "#2563eb",
    options: [
      { name: "Centralized Inward Clearing" },
      { name: "Pending Return Charges" },
      { name: "Deduct/Waive" },
    
    ],
    dropdown: [
      {
        name: "Centralized Inward Clearing",
        subOptions: [
          { name: "Lodgement Settlement" },
          { name: "Return Settlement" },
          { name: "Authorize Settlement" },
          { name: "Resend Inward Settlement" },
          { name: "Semi-Auto Inw Clr" },
          { name: "Cheque" },
          { name: "Cheque Scan" },
          { name: "Demand Draft" },
          { name: "Pay Order" },
          { name: "Upload" },
          {
            name: "NIFT Return File",
            options: [
              { name: "NIFT File" },
              { name: "Generate" },
              { name: "Modify" },
              { name: "Inquire" },
            ],
          },
        ],
      },
      {
        name: "Pending Return Charges",
        subOptions: [
          { name: "Inquiry" },
        ],
      },
      {
        name: "Return Charges",
        subOptions: [
          { name: "Deduct/Waive" },
          { name: "Cancel Deduction" },
          { name: "Branch Status Inquiry" },
          { name: "Instruments Inquiry" },
        ],
      },
    ],
  },
  {
    title: "Cash Deposit",
    color: "#0ea5e9",
    options: [
      { name: "Deposit" },
      { name: "Authorize" },
      { name: "Modify" },
 
    ],
    dropdown: [
      {
        name: "Deposit",
      }
      ,{
        name: "Authorize",
      }
      ,{
        name: "Modify",
      }
      ,{
        name: "Cancel",
      }
      ,{
        name: "Inquiry",
      }
    ],
  },
  {
    title: "Outward Clearing",
    color: "#1d4ed8",
    options: [
      { name: "Online Outward Clearing" },
      { name: "Inter City Clearing" },
      { name: "Cent Outward Settlement" },
    ],
    dropdown: [
      {
        name: "Online Outward Clearing",
        subOptions: [
          { name: "Lodgement" },
          { name: "Authorize" },
          { name: "Cancel" },
          { name: "Inquiry" },
          { name: "Release" },
          { name: "Lodgement Settlement" },
          { name: "Return Settlement" },
          { name: "Resend Outward Settlement" },
          { name: "Authorize Settlement" },
        ],
      },
      {
        name: "Inter City Clearing",
        subOptions: [
          { name: "Lodge" },
          { name: "Authorize" },
          { name: "Cancel" },
          { name: "Realize" },
          { name: "Return" },
          { name: "Inquiry" },
        ],
      },
      {
        name: "Cent Outward Settlement",
        subOptions: [
          { name: "Lodge" },
          { name: "Authorize" },
          { name: "Cancel" },
          { name: "Return" },
          { name: "Inquiry" },
        ],
      },
    ],
  },
];

export const customerOnboardingItems = [
  {
    title: "Biometric",
    color: "#7c3aed",
    options: [{ name: "Add" }, { name: "Modify" }, { name: "Add" }],
    dropdown: [
      {
        name: "Add",
        subOptions: [{ name: "New Customer" }, { name: "Existing Customer" }],
      },
      {
        name: "Modify",
        subOptions: [{ name: "New Customer" }, { name: "Existing Customer" }],
      },
    ],
  },
  {
    title: "Account Opening",
    color: "#00a8a8",
    options: [
      { name: "Open New Customer & Account", routeName: 'OpenNewCustomerAccount', },
      { name: "Open New Account of Existing Customer" },
      { name: "Addition of Companies" },
    ],
    dropdown: [
      { name: "Open New Customer & Account", routeName: 'OpenNewCustomerAccount', },
      { name: "Open New Account of Existing Customer" },
      { name: "Addition of Companies" },

      { name: "Process New Accounts Received" },
      { name: "Remove Mistakes Before Authorization" },

      {
        name: "CIF Inquiry",
        subOptions: [
          { name: "CIF Natural Person Inquiry" },
          { name: "CIF Entity Inquiry" },
        ],
      },
    ],
  },
  {
    title: "Account Maintenance",
    color: "#16a34a",
    options: [
      { name: "SMS Alerts Request" },
      { name: "E_Statement Request" },
      { name: "ATM Card Request" },
    ],
    dropdown: [
      {
        name: "Customer's Account Change Request",
      },
      { name: "Account Maintenance Request" },
      { name: "Signature Cancel Request" },

      {
        name: "SMS Alerts Request",
        subOptions: [
          { name: "SMS Alert Request" },
          { name: "Remove Mistakes" },
          { name: "SMS Alert Request Cancellation Before Process" },
          { name: "SMS Alert Request Cancellation After Process" },
          { name: "Authorize SMS Alerts Request" },
        ],
      },

      {
        name: "E_Statement Request",
        subOptions: [
          { name: "E_Statement Request" },
          { name: "Remove Mistakes" },
          { name: "E_Statement Cancellation" },
          { name: "E_Statement Initiation Request" },
          { name: "E_Statement Initiation Cancellation" },
        ],
      },
      {
        name: "ATM Card Request",
        subOptions: [
          { name: "ATM Card Request" },
          { name: "Remove Mistakes" },
          { name: "ATM Request Cancellation" },
        ],
      },
      {
        name: "Apply/Remove Conditions",
        subOptions: [
          { name: "Apply Condition" },
          { name: "Remove Condition" },
          { name: "Report" },
        ],
      },
    ],
  },
  //
  {
    title: "CIF Management",
    color: "#8b5cf6",
    options: [
      { name: "Natural Person CIF" },
      { name: "Entity CIF" },
      //dummy
      { name: "Issue Cheque Book" },
    ],
    dropdown: [
      {
        name: "Natural Person CIF",
        subOptions: [
          {
            name: "CIF Enquiry",
          },
          { name: "Removal Mutation Before Authorization" },
          { name: "Authorize" },
          { name: "Maintenance Cancellation" },
          { name: "Inquiry" },
        ],
      },
      {
        name: "Entity CIF",
       subOptions: [
          {
            name: "CIF Enquiry",
          },
          { name: "Removal Mutation Before Authorization" },
          { name: "Authorize" },
          { name: "Maintenance Cancellation" },
          { name: "Inquiry" },
        ],
      },
    ],
  },

  {
    title: "Cheque Book",
    color: "#dc2626",
    options: [
      { name: "Issue Express Book" },
      { name: "Issue Cheque Book" },
      { name: "Request" },

    ],
    dropdown: [
      {
        name: "Issue Express Book",
        subOptions: [],
      },
      {
        name: "Issue Cheque Book",
        subOptions: [],
      },
      {
        name: "Request",
        subOptions: [
          { name: "Request" },
          { name: "Revert" },
        ],
      },
      {
        name: "Activate",
        subOptions: [
          { name: "By A/C No" },
          { name: "By List" },
          { name: "Revert" },
        ],
      },
      {
        name: "Authorize",
        subOptions: [
          { name: "Request" },
          { name: "Activate" },
          { name: "Cancel Request" },
        ],
      },
      {
        name: "Cancel",
        subOptions: [
                    { name: "Reports" },

          { name: "By A/C No" },
          { name: "By List" },
          { name: "Revert" },
        ],
      },
      {
        name: "Inquire",
        subOptions: [
          {
            name: "Issued",
            options: [
              { name: "By Account No." },
              { name: "By Cheque No." },
            ],
          },
          { name: "Status" },
     
        ],
      },
      {
        name: "Cheque Status",
        subOptions: [
               { name: "Change" },
          { name: "Inquire" },
        ],
      },
    ],
  },
  {
    title: "Operational Activities",
    color: "#f59e0b",
    options: [
      { name: "Account Interest Rate" },
      { name: "Customer Information" },
      { name: "Special Conditions" },
    ],
    dropdown: [
      {
        name: "Account Interest Rate",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Inquire" },
        ],
      },
      {
        name: "Customer Information",
        subOptions: [
                    { name: "Maintain" },
          { name: "Inquire" },
          {
            name: "Special Charges",
            options: [
              {
                name: "Customer Charges",
                subOptions: [
                  { name: "Manage Charges" },
                  { name: "Cancel Bef. Auth" },
                  { name: "Authorize" },
                  { name: "Inquire" },
                ],
              },
              {
                name: "Customer Commission Charges",
                subOptions: [
                  { name: "Add" },
                  { name: "Change" },
                  { name: "Delete" },
                  { name: "Cancel Bef. Auth" },
                  { name: "Authorize" },
                  { name: "Inquire" },
                ],
              },
              {
                name: "Customer W/H Tax Exemption",
                subOptions: [
                  { name: "Add" },
                  { name: "Change" },
                  { name: "Delete" },
                  { name: "Cancel Bef. Auth" },
                  { name: "Authorize" },
                  { name: "Inquire" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Special Conditions",
        subOptions: [
    
          { name: "Assign" },
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
        subOptions: [],
      },
      {
        name: "Block",
        subOptions: [
          { name: "Block Amount" },
          { name: "Unblock Amount" },
          { name: "Inquire" },
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
      
    ],
    dropdown: [
      {
        name: "CRS Form",
        subOptions: [{ name: "CRS Customer" }, { name: "CRS Employer" }],
      },
      {
        name: "Pending Records",
        subOptions: [
          { name: "Inputter Pending Records" },
          { name: "Authorize Pending Records" },
   
        ],
      },
      {
        name: "Maintenance",
        subOptions: [
          { name: "Maintenance for Individual" },
          { name: "Maintenance for Entity" },
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

