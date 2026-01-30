import iconNavbarMainMenu from "../assets/images/icon_navbar_main_menu.svg";
import iconNavbarGeneralBanking from "../assets/images/icon_navbar_general_banking.svg";
import iconNavbarTradeFinance from "../assets/images/icon_navbar_trade_finance.svg";
import iconNavbarLoanOrigination from "../assets/images/icon_navbar_loan_origination.svg";
import iconNavbarInternationalTransactions from "../assets/images/icon_navbar_international_transactions.svg";
import iconNavbarCustomerOnboarding from "../assets/images/icon_navbar_customer_onboarding.svg";
import iconNavbarTreasuryManagement from "../assets/images/icon_navbar_treasury_management.svg";
import iconNavbarAnalyticsReporting from "../assets/images/icon_navbar_analytics_reporting.svg";
import iconNavbarBackOffice from "../assets/images/icon_navbar_back_office.svg";
import iconNavbarGeneralInquiry from "../assets/images/icon_navbar_general_inquiry.svg";
import iconNavbarSettings from "../assets/images/icon_navbar_settings.svg";
import newAccountIcon from "../assets/images/icon_notification_new_account.svg";
// import editProfileIcon from "../assets/images/icon_profile_edit_profile.svg";
import logoutIcon from "../assets/images/icon_profile_logout.svg";
// import changePasswordIcon from "../assets/images/icon_profile_change_password.svg";
import notificatioIcon1 from "../assets/images/Avatar.png";
import notificatioIcon2 from "../assets/images/Avatar_1.png";
import notificatioIcon3 from "../assets/images/Avatar_2.png";
import editProfileIcon from "../assets/images/edit-profile.svg";
import changePasswordIcon from "../assets/images/change-password.svg";
import notificationsIcon from "../assets/images/notifications.svg";



export const layoutColors=["#0C3AA3", "#4E40D4", "#4880FF", "#00C7E2", "#12d09d"]


export const sidebarItems = [
  {
    name: "Main Menu",
    icon: "pi-home",
    iconSrc: iconNavbarMainMenu,
    backgroundColor: "",
    subCategories: " ",
    routeName: "Dashboard",
  },
  {
    name: "General Banking",
    icon: "pi-building-columns",
    iconSrc: iconNavbarGeneralBanking,
    backgroundColor: "#7239ea",
    subCategories: "10",
    routeName: "GeneralBanking",
  },
  {
    name: "Trade Financing",
    icon: "pi-chart-bar",
    iconSrc: iconNavbarTradeFinance,
    backgroundColor: "#4880ff",
    subCategories: "22",
    routeName: "TradeFinancing",
  },
  {
    name: "Loan Origination & Management",
    icon: "pi-money-bill",
    iconSrc: iconNavbarLoanOrigination,
    backgroundColor: "#2dbe60",
    subCategories: "07",
    routeName: "LoanOrigination&Management",
  },
  {
    name: "International Transactions",
    icon: "pi-globe",
    iconSrc: iconNavbarInternationalTransactions,
    backgroundColor: "#082e53",
    subCategories: "09",
    routeName: "InternationalTransactions",
  },
  {
    name: "Customer Onboarding & Management",
    icon: "pi-users",
    iconSrc: iconNavbarCustomerOnboarding,
    backgroundColor: "#00a8a8",
    subCategories: "16",
    routeName: "CustomerOnboarding&Management",
  },
  {
    name: "Treasury Management",
    icon: "pi-wallet",
    iconSrc: iconNavbarTreasuryManagement,
    backgroundColor: "#f5a623",
    subCategories: "17",
    routeName: "TreasuryManagement",
  },
  {
    name: "Analytics & Reporting",
    icon: "pi-book",
    iconSrc: iconNavbarAnalyticsReporting,
    backgroundColor: "#8e44ad",
    subCategories: "15",
    routeName: "AnalyticsReporting",
  },
  {
    name: "Back Office Operations",
    icon: "pi-briefcase",
    iconSrc: iconNavbarBackOffice,
    backgroundColor: "#0b5380",
    subCategories: "15",
    routeName: "BackOfficeOperations",
  },
];

export const sidebarItems2 = [
  {
    name: "General Inquiry",
    icon: "pi-info-circle",
    iconSrc: iconNavbarGeneralInquiry,
    subItems: [
      { name: "- Customer Profile" },
      { name: "- General Ledger A/C" },
      { name: "- Exchange Rates" },
      { name: "- Instrument Inquiry" },
    ],
  },
  {
    name: "Settings",
    icon: "pi-cog",
    iconSrc: iconNavbarSettings,
    subItems: [
      { name: "- Dark Mode", hasToggle: true },
      { name: "- Edit Dashboard", hasToggle: true },
    ],
  },
];

export const notifications = [
  {
    id: 1,
    name: "Olivia Skye",
    message: "Loan authorization request is currently pending, Please Review!",
    time: "Today at 9:42 AM",
    hasActions: false,
    read: false,
    Img: notificatioIcon1,
  },
  {
    id: 2,
    name: "Olivia Skye",
    message: "Loan authorization request is currently pending, Please Review!",
    time: "Today at 9:42 AM",
    hasActions: false,
    read: false,
    Img: notificatioIcon2,
  },
  {
    id: 3,
    name: "Olivia Skye",
    message: "Loan authorization request is currently pending, Please Review!",
    time: "Today at 9:42 AM",
    hasActions: false,
    read: false,
    Img: notificatioIcon3,
  },
  {
    id: 4,
    name: "New Account",
    message: "created",
    time: "Last Wednesday at 9:42 AM",
    hasActions: false,
    read: true,
    Img: newAccountIcon,
  },
];

export const profileMenuItems = [
  {
    id: 1,
    label: "Edit Profile",
    icon: editProfileIcon,
    action: "edit-profile",
    showArrow: true,
  },
  {
    id: 2,
    label: "Change Password",
    icon: changePasswordIcon,
    action: "change-password",
    showArrow: true,
    isDivider: true,
  },
  {
    id: 3,
    label: "Notifications",
    icon: notificationsIcon,
    action: "toggle-notifications",
    hasToggle: true,
    isDivider: true,
  },
  {
    id: 4,
    label: "Logout Account",
    icon: logoutIcon,
    action: "logout",
    showArrow: true,
    isDanger: true,
  },
];

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
    options: [{ name: "Lodge" }, { name: "Authorize" }, { name: "Cancel" }],
    dropdown: [
      {
        name: "Transfer Funds",
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
        subOptions: [{ name: "Reverse Charges" }, { name: "Cancel" }],
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
      },
      {
        name: "By List",
      },
      {
        name: "By Voucher No",
      },
      {
        name: "By Voucher List",
      },
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
          },
          {
            name: "By Voucher No",
          },
          {
            name: "By Voucher List",
            options: [{ name: "Normal" }, { name: "Inter Branch" }],
          },
          {
            name: "Monitor By Transaction No.",
          },
          {
            name: "Monitor By Transaction List",
          },
          {
            name: "Charges Waiver Authorize",
          },
          {
            name: "Inter Branch Logged Transaction",
          },
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
        subOptions: [{ name: "Inquiry" }],
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
    options: [{ name: "Payment" }, { name: "Authorize" }, { name: "Modify" }],
    dropdown: [
      {
        name: "Payment",
      },
      {
        name: "Authorize",
      },
      {
        name: "Modify",
      },
      {
        name: "Cancel",
      },
      {
        name: "Inquiry",
      },
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
        subOptions: [{ name: "Inquiry" }],
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
    options: [{ name: "Deposit" }, { name: "Authorize" }, { name: "Modify" }],
    dropdown: [
      {
        name: "Deposit",
      },
      {
        name: "Authorize",
      },
      {
        name: "Modify",
      },
      {
        name: "Cancel",
      },
      {
        name: "Inquiry",
      },
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
    color: "#0C3AA3",
    options: [{ name: "Add" }, { name: "Modify" }],
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
    color: "#4E40D4",
    options: [
      {
        name: "Open New Customer & Account",
        routeName: "OpenNewCustomerAccount",
      },
      { name: "Open New Account of Existing Customer" },
      { name: "Addition of Companies" },
    ],
    dropdown: [
      {
        name: "Open New Customer & Account",
        routeName: "OpenNewCustomerAccount",
      },
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
    color: "#4880FF",
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
    color: "#00C7E2",
    options: [
      { name: "Natural Person CIF" },
      { name: "Entity CIF" },
      //dummy
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
    color: "#12d09d",
    options: [{ name: "Issue Express Book" }, { name: "Issue Cheque Book" }],
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
        subOptions: [{ name: "Request" }, { name: "Revert" }],
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
            options: [{ name: "By Account No." }, { name: "By Cheque No." }],
          },
          { name: "Status" },
        ],
      },
      {
        name: "Cheque Status",
        subOptions: [{ name: "Change" }, { name: "Inquire" }],
      },
    ],
  },
  {
    title: "Operational Activities",
    color: "#0C3AA3",
    options: [
      { name: "Account Interest Rate" },
      { name: "Customer Information" },
      { name: "Special Conditions" },
    ],
    dropdown: [
      {
        name: "Account Interest Rate",
        subOptions: [{ name: "Add" }, { name: "Change" }, { name: "Inquire" }],
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
        subOptions: [{ name: "Assign" }, { name: "Inquire" }],
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
    color: "#4E40D4",
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

export const loanOriginationItems = [
  {
    title: "Loan Application",
    color: "#7239ea",
    options: [
      { name: "Auto Loan", routeName: "NewCustomerLoanApplication" },
      { name: "House Finance" },
      { name: "Personal Loan" },
    ],
  },
  {
    title: "Parameters Definition",
    color: "#0c3aa3",
    options: [
      { name: "Security Item Rate" },
      { name: "Base Rate [Bench Mark]" },
      { name: "Stock Exchange Rates" },
    ],
    dropdown: [
      {
        name: "Security Item Rate",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Delete" },
          { name: "Inquire" },
        ],
      },
      {
        name: "Base Rate [Bench Mark]",
        subOptions: [
          {
            name: "Floor/Ceiling",
            options: [
              { name: "Add" },
              { name: "Change" },
              { name: "Delete" },
              { name: "Inquire" },
            ],
          },
          {
            name: "Rate",
            options: [
              { name: "Add" },
              { name: "Change" },
              { name: "Delete" },
              { name: "Inquire" },
            ],
          },
        ],
      },
      {
        name: "Stock Exchange Rates",
        subOptions: [
          { name: "Upload from File" },
          { name: "Download from Central Server" },
        ],
      },
      { name: "Download Markup Rates" },
      { name: "Review Markup Rates" },
    ],
  },
  {
    title: "Securities",
    color: "#ec4899",
    options: [
      { name: "Securities" },
      { name: "Collateral Transactions" },
      { name: "Insurance" },
    ],
    dropdown: [
      {
        name: "Securities",
        subOptions: [
          { name: "Assign" },
          { name: "Maintain" },
          { name: "Inquire" },
          {
            name: "Block",
            options: [
              { name: "Block Amount" },
              { name: "Unblock Amount" },
              { name: "Inquire" },
            ],
          },
          {
            name: "Lien",
            options: [
              { name: "Mark" },
              { name: "Release" },
              { name: "Inquire" },
              { name: "Pledge" },
            ],
          },
          {
            name: "Collateral Transactions",
            options: [
              {
                name: "Hypothecation",
                subOptions: [
                  { name: "Add Stock Report/Security Value" },
                  { name: "Modify Stock Report/Security Value" },
                  { name: "History of Stock Report/Security Value" },
                ],
              },
              { name: "Shares" },
              { name: "Certificates" },
              { name: "TDRs/Deposits" },
              { name: "Mortgage" },
            ],
          },
        ],
      },

      {
        name: "Insurance",
        subOptions: [
          { name: "Add" },
          { name: "Modify" },
          { name: "Cancel" },
          { name: "Inquire" },
        ],
      },
    ],
  },
  {
    title: "Limits",
    color: "#16a34a",
    options: [
      { name: "Assign/Maintain" },
      { name: "Inquire" },
      { name: "Account Mark-Up Rate" },
    ],
    dropdown: [
      {
        name: "Assign/Maintain",
      },
      {
        name: "Inquire",
      },
      {
        name: "Account Mark-Up Rate",
        subOptions: [{ name: "Add" }, { name: "Change" }, { name: "Inquire" }],
      },
      {
        name: "Facility Classification",
      },
      {
        name: "Profit Modify",
      },
      {
        name: "Markup/Modify",
      },
    ],
  },
  {
    title: "eCIB",
    color: "#dc2626",
    options: [
      { name: "Corporate Format" },
      { name: "Consumer Format" },
      { name: "Corporate Format" },
    ],
    dropdown: [
      {
        name: "Corporate Format",
      },
      {
        name: "Consumer Format",
      },
    ],
  },
  {
    title: "Loans",
    color: "#f59e0b",
    options: [
      { name: "Security Deposit(Leasing)" },
      { name: "Book/Disburse" },
      { name: "Enhance" },
    ],
    dropdown: [
      {
        name: "Security Deposit(Leasing)",
        subOptions: [
          { name: "Receive" },
          { name: "Cancel" },
          { name: "Inquire" },
          { name: "Adjust" },
          { name: "Cancel Adjustment" },
        ],
      },
      {
        name: "Book/Disburse",
        subOptions: [
          { name: "Money Market" },
          { name: "FTR" },
          { name: "FIM" },
          { name: "Term Finance" },
          { name: "Leasing" },
          { name: "RBD" },
        ],
      },
      {
        name: "Enhance",
        subOptions: [
          { name: "FTR" },
          { name: "FIM" },
          { name: "Term Finance" },
        ],
      },
      {
        name: "Modify",
        subOptions: [
          {
            name: "Leasing",
            options: [
              { name: "Modify" },
              { name: "Cancel Unauthorized Modification" },
              { name: "Authorize" },
            ],
          },
          { name: "RBD" },
          { name: "Money Market" },
          { name: "FTR" },
          { name: "FIM" },
          { name: "Term Finance" },
        ],
      },
      {
        name: "Cancel / Early Terminate(Leasing)",
        subOptions: [
          { name: "Leasing" },
          { name: "RBD" },
          { name: "Money Market" },
          { name: "FTR" },
          { name: "FIM" },
          { name: "Term Finance" },
        ],
      },
      {
        name: "Inquire",
        subOptions: [
          {
            name: "RBD",
            options: [
              { name: "By FDBC No." },
              { name: "EForm" },
              { name: "By Loan No." },
            ],
          },
          { name: "Money Market" },
          { name: "FTR" },
          { name: "FIM" },
          { name: "Term Finance" },
          { name: "Leasing" },
          { name: "Cent. Leasing" },
        ],
      },
      {
        name: "Money Market Rollover",
      },
      {
        name: "Cancel Money Market Rollover",
      },
      {
        name: "Recover",
        subOptions: [{ name: "Loan" }, { name: "Leasing" }, { name: "RBD" }],
      },
      {
        name: "Recover Pft/Mkup",
        subOptions: [{ name: "Loan" }],
      },
      {
        name: "Cancel Recovery",
        subOptions: [{ name: "Loan" }, { name: "Leasing" }, { name: "RBD" }],
      },
      {
        name: "Cancel Recovered Pft/Mkup",
        subOptions: [{ name: "Loan" }],
      },
    ],
  },
  {
    title: "Letter of Guarantee",
    color: "#06b6d4",
    options: [{ name: "Issue" }, { name: "Amend" }, { name: "Redeem" }],
    dropdown: [
      {
        name: "Issue",
      },
      {
        name: "Amend",
      },
      {
        name: "Redeem",
      },
      {
        name: "Cancel",
        subOptions: [
          { name: "Issuance" },
          { name: "Redemption" },
          { name: "Amendment" },
          { name: "Comm Post" },
        ],
      },
      {
        name: "Inquire",
      },
      {
        name: "Comm Post",
      },
    ],
  },
  {
    title: "Refinance",
    color: "#2563eb",
    options: [
      { name: "Refinance from SBP" },
      { name: "Repayment" },
      { name: "Inquire" },
    ],
    dropdown: [
      {
        name: "Refinance from SBP",
        subOptions: [{ name: "Add" }, { name: "Change" }, { name: "Cancel" }],
      },
      {
        name: "Repayment",
        subOptions: [{ name: "Recovery" }, { name: "Cancel Recovery" }],
      },
      {
        name: "Inquire",
      },
      {
        name: "Rupee Base Discounting SBP",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Cancel" },
          {
            name: "Repayment",
            options: [{ name: "Recovery" }, { name: "Recovery Cancel" }],
          },
        ],
      },
    ],
  },
  {
    title: "PUT Option",
    color: "#0ea5e9",
    options: [{ name: "Issue" }, { name: "Amend" }, { name: "Redeem" }],
    dropdown: [
      {
        name: "Issue",
      },
      {
        name: "Amend",
      },
      {
        name: "Redeem",
      },
      {
        name: "Cancel",
        subOptions: [
          { name: "Issuance" },
          { name: "Amendment" },
          { name: "Redemption" },
        ],
      },
      {
        name: "Inquiry",
      },
    ],
  },
];

export const tradeFinanceMenuItems = [
  {
    name: "Imports",
    icon: "pi-home",
    iconSrc: iconNavbarTradeFinance,
    backgroundColor: "#082e53",
    subCategories: " ",
    routeName: "Imports",
  },
  {
    name: "Exports",
    icon: "pi-building-columns",
    iconSrc: iconNavbarTradeFinance,
    backgroundColor: "#0b5380",
    subCategories: "10",
    routeName: "Exports",
  },
];

export const tradeFinanceImportsItems = [
  {
    title: "Letter of Credit",
    color: "#0c3aa3",
    options: [
      { name: "Branch Activities" },
      { name: "CPU Activities" },
      { name: "Open LC" },
      // { name: "Shipping Guarantee" },
      // { name: "Forward Contact" },
      // { name: "IFDBC" },
    ],
    dropdown: [
      {
        name: "Branch Activities",
        subOptions: [
          { name: "Scan Docs" },
          { name: "L/C Inquiry" },
          { name: "RDA Marking Inquiry" },
          { name: "GD Inquiry" },
        ],
      },
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "Open L/C",
            options: [{ name: "Open" }, { name: "Modify" }, { name: "Reject" }],
          },
          {
            name: "Amend L/C",
            options: [
              {
                name: "Amend L/C By Request",
                subOptions: [
                  { name: "Amend" },
                  { name: "Modify" },
                  { name: "Reject" },
                ],
              },
              {
                name: "Amend L/C By CPU",
                subOptions: [
                  { name: "Amend" },
                  { name: "Modify" },
                  { name: "Reject" },
                ],
              },
            ],
          },
          {
            name: "Cancel L/C",
            options: [
              {
                name: "By User",
                subOptions: [
                  { name: "Mark/Cancel" },
                  { name: "Reject Mark Cancel" },
                  { name: "Initiate" },
                ],
              },
              {
                name: "By Adv Bank",
                subOptions: [
                  { name: "Mark Cancel" },
                  { name: "Reject Mark Cancel" },
                  { name: "Initiate" },
                ],
              },
              {
                name: "By Customer",
                subOptions: [
                  { name: "Initiate" },
                  { name: "Mark Cancel" },
                  { name: "Reject" },
                ],
              },
              { name: "Cancel Initiate / Request" },
            ],
          },
          {
            name: "LC Reverse",
            options: [{ name: "Lodge Reversal" }, { name: "Reject" }],
          },
          {
            name: "Shipping Guarantee",
            options: [
              {
                name: "Issuance",
                subOptions: [
                  { name: "Lodge" },
                  { name: "Reject" },
                  { name: "Reinitiate" },
                ],
              },
              {
                name: "Reverse",
                subOptions: [{ name: "Lodge" }, { name: "Cancel" }],
              },
              {
                name: "Cancel",
                subOptions: [{ name: "Lodge" }, { name: "Reject" }],
              },
              { name: "Mark Recieved" },
            ],
          },
          {
            name: "Documents",
            options: [
              {
                name: "Documents Receipt",
                subOptions: [{ name: "Add" }, { name: "Reject" }],
              },
              {
                name: "Bill Scrutiny",
                subOptions: [
                  { name: "Add" },
                  { name: "Modify" },
                  { name: "Reject" },
                ],
              },
              { name: "List Of Documents Recieved" },
              { name: "View" },
            ],
          },
          {
            name: "Acceptance",
            options: [
              {
                name: "Acceptance Lodgment",
                subOptions: [
                  {
                    name: "Lodge",
                    subOptions: [{ name: "By Branch" }, { name: "By CPU" }],
                  },

                  { name: "Modify" },
                  { name: "Reject" },
                ],
              },
              {
                name: "Acceptance Payment",
                subOptions: [
                  {
                    name: "Acceptance Payment",
                    subOptions: [{ name: "By Branch" }, { name: "By CPU" }],
                  },
                  { name: "Reject Payment" },
                ],
              },
              {
                name: "Acceptance Amendment",
                subOptions: [
                  { name: "Acceptance Amendment" },
                  { name: "Cancel" },
                ],
              },
              {
                name: "Acceptance Reversal",
                subOptions: [
                  { name: "Acceptance Reversal" },
                  { name: "Reject Payment" },
                ],
              },
              {
                name: "Extra Margin",
                subOptions: [{ name: "Extra Margin" }, { name: "Cancel" }],
              },
            ],
          },
          {
            name: "PAD",
            options: [
              {
                name: "PAD Lodgment",
                subOptions: [
                  {
                    name: "PAD Lodge",
                    subOptions: [{ name: "By Branch" }, { name: "By CPU" }],
                  },
                  { name: "Modify" },
                  { name: "Reject" },
                ],
              },
              {
                name: "PAD Payment",
                subOptions: [
                  {
                    name: "PAD Payment",
                    subOptions: [{ name: "By Branch" }, { name: "By CPU" }],
                  },
                  { name: "Reject" },
                ],
              },
            ],
          },
          {
            name: "Scan Documents",
          },
          {
            name: "Forward Contract",
            options: [
              { name: "Add" },
              { name: "Reject" },
              { name: "Mature" },
              { name: "Authorize" },
              { name: "Inquire" },
            ],
          },
          {
            name: "Request Authorization",
            options: [
              { name: "L/C Open" },
              { name: "L/C Amend" },
              { name: "Cancel By User (Initiate)" },
              { name: "Cancel By Adv Bank (Initiate)" },
              { name: "Cancel By Customer (Initiate)" },
              { name: "Cancel By User (Cancel)" },
              { name: "Cancel By Adv Bank (Cancel)" },
              { name: "Cancel By Customer (Cancel)" },
              { name: "L/C Reversal" },
              { name: "S/G Issue" },
              { name: "S/G Cancel" },
              { name: "S/G Reverse" },
              { name: "Bill Scrutiny" },
              { name: "SWIFT Message" },
              { name: "Acceptance Lodgment" },
              { name: "Acceptance Payment" },
              { name: "Acceptance Amend" },
              { name: "Acceptance Reversal" },
              { name: "PAD Lodgement" },
              { name: "PAD Payment" },
              { name: "Acceptance Margin" },
              { name: "Bill Scrutiny Return" },
            ],
          },
          {
            name: "Reversion to Authorization",
          },
          {
            name: "Request Unhold",
          },
          {
            name: "Mark Documents Receipt",
          },
          {
            name: "Link Advance Payment",
          },
          {
            name: "Print Scanned Documents",
          },
          {
            name: "Inquiry",
            options: [
              { name: "L/C Inquiry" },
              { name: "Goods Declaration" },
              {
                name: "Unauthorized Transaction",
                subOptions: [{ name: "Financial" }],
              },
              { name: "BDA Marking Inquiry" },
            ],
          },
          {
            name: "Insurance Policy",
            options: [
              { name: "Add" },
              { name: "Change" },
              { name: "Delete" },
              { name: "Authorization" },
              { name: "Inquire" },
            ],
          },
          {
            name: "Free Format Message",
            options: [
              { name: "Add" },
              { name: "Change" },
              { name: "Delete" },
              { name: "Authorization" },
            ],
          },
          {
            name: "Swift Message Archive Retrieval",
          },
          {
            name: "Settlement",
          },
        ],
      },
      {
        name: "Open LC",
        subOptions: [
          { name: "Open" },
          { name: "Modify" },
          { name: "Amend" },
          { name: "Enhance" },
          { name: "Reverse" },
          { name: "Cancel" },
          { name: "Inquire" },
          {
            name: "L/C Form Charges",
            options: [{ name: "Issue" }, { name: "Cancel" }],
          },
        ],
      },
      {
        name: "Shipping Guarantee",
        subOptions: [
          {
            name: "Issuance",
            options: [{ name: "With Reversal" }, { name: "Without Reversal" }],
          },
          { name: "Reverse" },
          {
            name: "Cancel",
            options: [{ name: "Issuance" }, { name: "Reversal" }],
          },
          { name: "Inquire" },
          { name: "Mark Received" },
        ],
      },
      {
        name: "Forward Contract",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Delete" },
          { name: "Cancel" },
          { name: "Inquire" },
        ],
      },
      {
        name: "IFDBC",
        subOptions: [
          { name: "Issue" },
          { name: "Cancel" },
          { name: "Inquire" },
        ],
      },
    ],
  },
  {
    title: "Contract",
    color: "#4e40d4",
    options: [
      { name: "Branch Activities" },
      { name: "CPU Activities" },
      { name: "Contract Open" },
      // { name: "Contract Reverse" },
      // { name: "Forward Contract" },
      // { name: "Shipping Guarantee" },
      // { name: "IFDBC" },
      // { name: "Retirement" },
    ],
    dropdown: [
      {
        name: "Branch Activities",
        subOptions: [
          { name: "Scan Docs" },
          {
            name: "Inquiry",
            options: [
              { name: "Contract Inquiry" },
              { name: "BDA Marking Inquiry" },
              { name: "Goods Declaration" },
            ],
          },
        ],
      },
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "Contract Open",
            options: [
              { name: "Register" },
              { name: "Modify" },
              { name: "Reject" },
            ],
          },
          {
            name: "Contract Amend",
            options: [
              {
                name: "Amend Contract By Request",
                subOptions: [
                  { name: "Amend" },
                  { name: "Modify" },
                  { name: "Reject" },
                ],
              },
              {
                name: "Amend Contract By CPU",
                subOptions: [
                  { name: "Amend" },
                  { name: "Modify" },
                  { name: "Reject" },
                ],
              },
            ],
          },
          {
            name: "Contract Reverse",
            options: [
              { name: "Reverse" },
              { name: "Reject" },
              { name: "Reverse/Retired By FCIF" },
            ],
          },
          {
            name: "Cancel",
            options: [
              { name: "By Branch" },
              {
                name: "By CPU User",
                subOptions: [
                  { name: "Cancel" },
                  { name: "Cancel" },
                  { name: "Cancel/Retire by FCIF" },
                ],
              },
              { name: "Reject" },
            ],
          },
          {
            name: "IFDBC",
            options: [
              { name: "Issue" },
              { name: "Modify" },
              { name: "Cancel" },
            ],
          },
          {
            name: "IFDBC Reverse",
            options: [{ name: "Reverse" }, { name: "Reject" }],
          },
          {
            name: "Shipping Guarantee",
            options: [
              {
                name: "Issuance",
                subOptions: [
                  { name: "Lodge" },
                  { name: "Reject" },
                  { name: "Reinitiate" },
                ],
              },
              {
                name: "Reverse",
                subOptions: [{ name: "Lodge" }, { name: "Cancel" }],
              },
              {
                name: "Cancel",
                subOptions: [{ name: "Lodge" }, { name: "Reject" }],
              },
              { name: "Mark Received" },
            ],
          },
          {
            name: "Retirement",
            options: [
              {
                name: "Contract",
                subOptions: [
                  { name: "Contract" },
                  { name: "By Branch" },
                  { name: "By CPU" },
                  { name: "Modify" },
                  { name: "Cancel" },
                ],
              },
              {
                name: "IFDBC",
                subOptions: [
                  { name: "Pay" },
                  { name: "By Branch" },
                  { name: "By CPU" },
                  { name: "Modify" },
                  { name: "Cancel" },
                ],
              },
            ],
          },
          {
            name: "Documents",
            options: [
              {
                name: "Documents Receipt",
                subOptions: [{ name: "Add" }, { name: "Cancel" }],
              },
              {
                name: "Bill Scrutiny",
                subOptions: [
                  { name: "Add" },
                  { name: "Modify" },
                  { name: "Cancel" },
                  { name: "View" },
                ],
              },
            ],
          },
          {
            name: "Scan Documents",
          },
          {
            name: "Forward Contract",
            options: [
              { name: "Add" },
              { name: "Reject" },
              { name: "Authorize" },
              { name: "Inquire" },
            ],
          },
          {
            name: "Requests Authorization",
            options: [
              { name: "Contract Open" },
              { name: "Contract Amend" },
              { name: "Contract Cancel By BR" },
              { name: "Contract Cancel By User CPU" },
              { name: "Cont Reverse" },
              { name: "IFDBC Lodgement" },
              { name: "IFDBC Pay" },
              { name: "Contract Pay" },
              { name: "Bill Scrutiny" },
              { name: "Swift Message" },
              { name: "S/G Issue Cont" },
              { name: "S/G Cancel Cont" },
              { name: "S/G Revers Cont" },
              { name: "IFDBC Reverse" },
              { name: "Reverse/Retire By FCIF" },
              { name: "Cancel By FCIF" },
            ],
          },
          {
            name: "Reversion to Authorization",
          },
          {
            name: "Request Unhold",
          },
          {
            name: "Mark Documents Receipt",
          },
          {
            name: "Print Scanned Documents",
          },
          {
            name: "Inquiry",
            options: [
              { name: "Contract Inquiry" },
              { name: "Goods Declaration" },
              { name: "BDA Marking Inquiry" },
              {
                name: "Unauthorized Transactions",
                subOptions: [{ name: "Financial" }],
              },
            ],
          },
          {
            name: "Settlement",
          },
        ],
      },
      {
        name: "Contract Open",
        subOptions: [
          { name: "Register" },
          { name: "Amend" },
          {
            name: "Cancel",
            options: [
              { name: "On Customer Request" },
              { name: "Due to user error" },
            ],
          },

          { name: "Inquire" },
        ],
      },
      {
        name: "Contract Reverse",
        subOptions: [{ name: "Reverse" }, { name: "cancels" }],
      },
      {
        name: "Forward Contract",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Delete" },
          { name: "Cancel" },
          { name: "Inquire" },
        ],
      },
      {
        name: "Shipping Guarantee",
        subOptions: [
          { name: "Issue" },
          { name: "Reversal" },
          {
            name: "Cancel",
            options: [{ name: "Issuance" }, { name: "Reversal" }],
          },
          { name: "Inquire" },
          { name: "Mark Received" },
        ],
      },
      {
        name: "IFDBC",
        subOptions: [
          { name: "Issue" },
          { name: "Cancel" },
          { name: "Inquire" },
        ],
      },
      {
        name: "Retirement",
        subOptions: [
          {
            name: "Contract",
            options: [{ name: "Pay" }, { name: "Cancel" }],
          },
          {
            name: "IFDBC",
            options: [{ name: "Pay" }, { name: "Cancel" }],
          },
        ],
      },
    ],
  },
  {
    title: "Advance Payment",
    color: "#16a34a",
    options: [
      { name: "Branch Activities" },
      { name: "CPU Activities" },
      { name: "Lodge" },
      // { name: "Amend" },
      // { name: "Inquire" },
    ],
    dropdown: [
      {
        name: "Branch Activities",
        subOptions: [
          { name: "Scan Docs" },
          { name: "Inquiry" },
          { name: "BDA Marking Inquiry" },
          { name: "GD Inquiry" },
        ],
      },
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "Advance Pay Lodgment",
            options: [
              { name: "Lodge" },
              { name: "Modify" },
              { name: "Reject" },
            ],
          },
          {
            name: "Advance Pay Amendment",
            options: [
              {
                name: "Amend By Branch",
                subOptions: [
                  { name: "Amend" },
                  { name: "Modify" },
                  { name: "Reject" },
                  { name: "View" },
                ],
              },
            ],
          },
          {
            name: "Scan Documents",
          },
          {
            name: "Shipping Documents Received",
            options: [{ name: "By Branch" }, { name: "By CPU" }],
          },
          {
            name: "Requests Authorization",
            options: [
              { name: "Advance Payment" },
              { name: "Advance Payment Amendment" },
              { name: "Document Un-Mark Adv Pay By Branch" },
              { name: "Document Marking Adv Pay By Branch" },
            ],
          },
          {
            name: "Reversion To Authorization",
          },
          {
            name: "Request Unhold",
          },
          {
            name: "Mark Documents Receipt",
          },
          {
            name: "Print Scanned Documents",
          },
          {
            name: "Advance Payment Return",
          },
          {
            name: "Inquiry",
            options: [
              { name: "Advance Pay Inquiry" },
              { name: "GD Inquiry" },
              {
                name: "Unauthorized Transaction",
                subOptions: [{ name: "Financial" }],
              },
              { name: "BDA Marking Inquiry" },
              { name: "Reject" },
              { name: "Reverse/Retired By FCIF" },
            ],
          },
          {
            name: "Settlement",
          },
        ],
      },
      {
        name: "Lodge",
        subOptions: [],
      },
      {
        name: "Amend",
        subOptions: [],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
    ],
  },
  {
    title: "Customer IFDBC",
    color: "#dc2626",
    options: [
      { name: "Branch Activities" },
      { name: "CPU Activities" },
      { name: "Lodge" },
    //   { name: "Pay" },
    //   { name: "Cancel" },
    //   { name: "Inquire" },
     ],
    dropdown: [
      {
        name: "Branch Activities",
        subOptions: [
          { name: "Scan Docs" },
          { name: "Inquiry" },
          { name: "BDA Marking Inquiry" },
          { name: "GD Inquiry" },
        ],
      },
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "Customer IFDBC Lodgment",
            options: [{ name: "Lodge" }, { name: "Modify" }],
          },
          {
            name: "IFDBC Amend",
            options: [
              {
                name: "Amend IFDBC By Request",
                subOptions: [
                  { name: "Amend" },
                  { name: "Modify" },
                  { name: "Reject" },
                  { name: "View" },
                ],
              },
              { name: "Modify" },
            ],
          },
          {
            name: "Customer IFDBC Payment",
            options: [
              {
                name: "Pay",
                subOptions: [{ name: "By Branch" }, { name: "By CPU" }],
              },
              { name: "Modify" },
            ],
          },
          {
            name: "Cancel",
            options: [{ name: "Lodgment" }, { name: "Payment" }],
          },
          {
            name: "Reverse",
            options: [
              { name: "Reverse" },
              { name: "Reject" },
              { name: "Reverse / Retired by FCIF" },
            ],
          },
          {
            name: "Scan Documents",
          },
          {
            name: "Requests Authorization",
            options: [
              { name: "CUSTOMER IFDBC LODGE" },
              { name: "CUSTOMER IFDBC PAY" },
              { name: "CUSTOMER IFDBC REVERSE" },
              { name: "IFDBC REVERSE/RETIRED BY FCIF" },
              { name: "CUSTOMER IFDBC AMENDMENT" },
            ],
          },
          {
            name: "Change of Bank",
          },
          {
            name: "Reversion to Authorization",
          },
          {
            name: "Request Unhold",
          },
          {
            name: "Mark Documents Receipt",
          },
          {
            name: "Print Scanned Documents",
          },
          {
            name: "Inquiry",
            options: [
              { name: "Customer IFDBC Inquiry" },
              { name: "Goods Declaration" },
              { name: "BDA Marking Inquiry" },
              {
                name: "Unauthorized Transaction",
                subOptions: [{ name: "Financial" }],
              },
            ],
          },
          {
            name: "Settlement",
          },
        ],
      },
      {
        name: "Lodge",
        subOptions: [],
      },
      {
        name: "Pay",
        subOptions: [],
      },
      {
        name: "Cancel",
        subOptions: [
          {
            name: "Lodgment",
          },
          {
            name: "Payment",
          },
        ],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
    ],
  },
  {
    title: "Payment Against Document",
    color: "#f59e0b",
    options: [
      { name: "Lodge" },
      { name: "Pay" },
      { name: "Cancel" },
      { name: "Inquire" },
    ],
    dropdown: [
      {
        name: "Lodge",
        subOptions: [{ name: "with Reversal" }, { name: "without Reversal" }],
      },
      {
        name: "Pay",
        subOptions: [],
      },
      {
        name: "Cancel",
        subOptions: [{ name: "Lodgment" }, { name: "Payment" }],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
    ],
  },
  {
    title: "Acceptance",
    color: "#06b6d4",
    options: [
      { name: "Lodge" },
      { name: "Modify" },
      { name: "Pay" },
      // { name: "Cancel" },
      // { name: "Inquire" },
    ],
    dropdown: [
      {
        name: "Lodge",
        subOptions: [{ name: "With Reversal" }, { name: "Without Reversal" }],
      },
      {
        name: "Modify",
        subOptions: [],
      },
      {
        name: "Pay",
        subOptions: [],
      },
      {
        name: "Cancel",
        subOptions: [{ name: "Payment" }, { name: "Lodgement" }],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
    ],
  },
  {
    title: "FCIF",
    color: "#2563eb",
    options: [{ name: "Branch Activities" }, { name: "CPU Activities" }],
    dropdown: [
      {
        name: "Branch Activities",
        subOptions: [
          { name: "Scan Docs" },
          { name: "FCIF Inquiry" },
          {
            name: "Inquiry",
            options: [
              { name: "Contract Inquiry" },
              { name: "BDA Marking Inquiry" },
              { name: "Goods Declaration" },
            ],
          },
        ],
      },
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "Loan For Sight L/C",
            options: [
              { name: "Disburse" },
              { name: "Modify" },
              { name: "Reject" },
              {
                name: "Amend",
                subOptions: [
                  { name: "By Reference" },
                  { name: "Reject By Reference" },
                  { name: "By CPU" },
                  { name: "Reject By CPU" },
                ],
              },
            ],
          },
          {
            name: "Loan For Usance L/C",
            options: [
              { name: "Disburse" },
              { name: "Modify" },
              { name: "Reject" },
              {
                name: "Amend",
                subOptions: [{ name: "By CPU" }, { name: "Reject By CPU" }],
              },
            ],
          },
          {
            name: "PAD",
            options: [
              { name: "Lodge/Retire" },
              { name: "Cancel Lodgement/Retirement" },
            ],
          },
          {
            name: "Acceptance Payment",
            options: [{ name: "Payment" }, { name: "Cancel Payment" }],
          },
          {
            name: "Recovery",
            options: [
              { name: "Recover Loan" },
              { name: "Cancel Loans Recoveries" },
              { name: "Recover Markup" },
              { name: "Cancel Markup Recoveries" },
            ],
          },
          {
            name: "Requests Authorization",
            options: [
              { name: "FCIF LOAN DISBURSE ACCEP" },
              { name: "FCIF LOAN MODIFY ACCEP" },
              { name: "FCIF LOAN DISBURSE" },
              { name: "FCIF ACCEPTANCE PAYMENT" },
              { name: "FCIF PAD LODG/PAY" },
              { name: "FCIF LOAN MODIFY" },
              { name: "FCIF LOAN RECOVERY" },
              { name: "FCIF MARKUP RECOVERY" },
            ],
          },
          { name: "Request Unhold" },
          { name: "Mark Documents Receipt" },
          { name: "Scan Documents" },
          { name: "Print Scanned Documents" },
          {
            name: "Inquiry",
            options: [
              { name: "FCIF Inquiry" },
              {
                name: "Unauthorized Transaction",
                subOptions: [{ name: "Financial" }],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Bill Of Lading - Bank Endorsement",
    color: "#8b5cf6",
    options: [{ name: "B/L - Bank Endors. Inquiry" }, { name: "PSW Inquiry" }],
    dropdown: [
      {
        name: "B/L - Bank Endors. Inquiry",
        subOptions: [],
      },
      {
        name: "PSW Inquiry",
        subOptions: [],
      },
    ],
  },
  {
    title: "PSW",
    color: "#d97706",
    options: [
      { name: "Bill Of Lading - Bank Endorsement" },
      { name: "B/L - Bank Endors. Inquiry" },
      { name: "PSW Inquiry" },
    ],
    dropdown: [
      {
        name: "Bill Of Lading - Bank Endorsement",
        subOptions: [],
      },
      {
        name: "B/L - Bank Endors. Inquiry",
        subOptions: [],
      },
      {
        name: "PSW Inquiry",
        subOptions: [],
      },
    ],
  },
];

export const tradeFinanceExportsItems = [
  {
    title: "Advance Payment",
    color: "#16a34a",
    options: [
      { name: "Branch Activities" },
      { name: "CPU Activities" },
      { name: "PRC" },
      { name: "E-Form Against PRC" },
      // { name: "Document Marking" },
    ],
    dropdown: [
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "PRC Request",
            options: [
              { name: "Request" },
              { name: "Modify" },
              { name: "Cancel" },
            ],
          },
          {
            name: "PRC Amendment",
            options: [
              {
                name: "Amend PRC By CPU",
                subOptions: [
                  { name: "Amend" },
                  { name: "Re-Initiate" },
                  { name: "Reject" },
                ],
              },
            ],
          },
          {
            name: "Document Receipt",
            options: [
              { name: "Document Receipt By Branch" },
              { name: "Unmark Eform Document" },
            ],
          },
          { name: "Reversion to Authorization" },
          { name: "FDD" },
          {
            name: "Advance Pay FC Transfer",
            options: [
              { name: "Lodge" },
              { name: "Modify" },
              { name: "Cancel" },
            ],
          },
          {
            name: "Inquiry",
            options: [
              { name: "Advance Payment Inquiry" },
              { name: "Goods Declaration" },
            ],
          },
          {
            name: "PRC Return",
            options: [
              { name: "Request" },
              { name: "Modify" },
              { name: "Cancel" },
            ],
          },
          { name: "PRC Other Bank Transfer" },
          { name: "Settlement of PRC" },
          { name: "PRC Archival" },
        ],
      },
      {
        name: "Branch Activities",
        subOptions: [
          {
            name: "Scan Docs",
            options: [{ name: "Scan by Request No." }],
          },
          { name: "Inquire" },
        ],
      },
      {
        name: "PRC",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Cancel" },
          { name: "Mark Expire" },
          { name: "GD Inquiry" },
          { name: "Inquire" },
          { name: "Print" },
          { name: "PRC Reversal" },
          { name: "Advance Pay FC Transfer" },
        ],
      },
      {
        name: "E-Form Against PRC",
        subOptions: [{ name: "Add" }, { name: "Delete" }],
      },
      {
        name: "Document Marking",
        subOptions: [],
      },
    ],
  },

  {
    title: "LDBC",
    color: "#2563eb",
    options: [
      { name: "Branch Activities" },
      { name: "Lodge" },
      { name: "Modify" },
      { name: "Acceptance" },
      // { name: "Cancel Lodgment" },
      // { name: "Instrument" },
      // { name: "Realize" },
      // { name: "Reverse" },
      // { name: "Cancel Realization" },
      // { name: "Convert to LDBP" },
      // { name: "Margin" },
      // { name: "Sales Tax Information" },
      // { name: "Inquire" },
    ],
    dropdown: [
      {
        name: "Branch Activities",
        subOptions: [
          {
            name: "Instrument",
            options: [
              { name: "Arrival" },
              { name: "Return" },
              { name: "Cancel" },
            ],
          },
        ],
      },
      {
        name: "Lodge",
        subOptions: [],
      },
      {
        name: "Modify",
        subOptions: [],
      },
      {
        name: "Acceptance",
        subOptions: [{ name: "Add" }, { name: "Change" }],
      },
      {
        name: "Cancel Lodgment",
        subOptions: [],
      },
      {
        name: "Instrument",
        subOptions: [
          { name: "Arrival" },
          { name: "Return" },
          { name: "Cancel" },
        ],
      },
      {
        name: "Realize",
        subOptions: [],
      },
      {
        name: "Reverse",
        subOptions: [{ name: "Add" }, { name: "Cancel" }],
      },
      {
        name: "Cancel Realization",
        subOptions: [],
      },
      {
        name: "Convert to LDBP",
        subOptions: [{ name: "Convert" }, { name: "Cancel" }],
      },
      {
        name: "Margin",
        subOptions: [{ name: "Adjust" }, { name: "Cancel" }],
      },
      {
        name: "Sales Tax Information",
        subOptions: [
          { name: "Lodge" },
          { name: "Cancel Lodgment" },
          {
            name: "Acceptance",
            options: [{ name: "Add" }, { name: "Change" }],
          },
          {
            name: "Instrument",
            options: [
              { name: "Arrival" },
              { name: "Return" },
              { name: "Cancel" },
            ],
          },
          { name: "Realize" },
          { name: "Cancel Realization" },
          {
            name: "Margin",
            options: [{ name: "Adjust" }, { name: "Cancel" }],
          },
        ],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
    ],
  },
  {
    title: "L/C Advising",
    color: "#4e40d4",
    options: [{ name: "Branch Activities" }, { name: "CPU Activities" }],
    dropdown: [
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "Advising",
            options: [
              { name: "Via Swift" },
              { name: "Manual" },
              { name: "Modification" },
              {
                name: "Reversal",
                subOptions: [{ name: "Reversal" }, { name: "Authorization" }],
              },
              {
                name: "Reverse Liability",
                subOptions: [
                  { name: "Reversal" },
                  { name: "Cancel" },
                  { name: "Authorization" },
                ],
              },
            ],
          },
          { name: "Authorization" },
          {
            name: "Amendment",
            options: [
              { name: "Via Swift" },
              { name: "Manual" },
              { name: "Modification" },
              { name: "By User" },
              { name: "Authorization" },
            ],
          },
          {
            name: "Transfer",
            options: [
              { name: "Entry" },
              { name: "Modification" },
              { name: "Cancel" },
              { name: "Authorization" },
              {
                name: "Transfer Receivables",
                subOptions: [{ name: "Marking" }, { name: "Authorization" }],
              },
            ],
          },
          { name: "Unprocessed Documents" },
          { name: "Courier Update" },
          { name: "Charges Editing" },
          {
            name: "Income Transfer",
            options: [{ name: "Income Transfer" }, { name: "Authorization" }],
          },
          { name: "Confirmation" },
          {
            name: "Receivables",
            options: [{ name: "Marking" }, { name: "Authorization" }],
          },
          {
            name: "Cancellation",
            options: [{ name: "Marking" }, { name: "Authorization" }],
          },
          {
            name: "Scan Documents",
            options: [
              { name: "Advising" },
              { name: "Amendment" },
              { name: "Other Documents" },
              { name: "Remove Scan Documents" },
            ],
          },
          {
            name: "Generate MT 730",
            options: [{ name: "Advising" }, { name: "Amendment" }],
          },
          {
            name: "Inquiry",
            options: [
              { name: "Inquiry" },
              { name: "By Reference" },
              { name: "Beneficiary" },
              { name: "Customer" },
            ],
          },
        ],
      },
      {
        name: "Branch Activities",
        subOptions: [
          {
            name: "L/C Advising",
            options: [{ name: "Beneficiary" }, { name: "Customer" }],
          },
          {
            name: "L/C Amend",
            options: [{ name: "Beneficiary" }, { name: "Customer" }],
          },
          {
            name: "L/C Cancel",
            options: [
              { name: "L/C Instrument" },
              { name: "L/C Amendment Instrument" },
              { name: "Beneficiary" },
              { name: "Customer" },
            ],
          },
          { name: "Scan Documents" },
          {
            name: "Inquiry",
            options: [
              { name: "By Date" },
              { name: "By Ref. No." },
              { name: "CPU Inquiry" },
              { name: "Unprocessed Documents at CPU" },
            ],
          },
          { name: "Inquire" },
        ],
      },
    ],
  },
  {
    title: "LDBP",
    color: "#dc2626",
    options: [
      { name: "Lodge" },
      { name: "Modify" },
      { name: "Acceptance" },
      { name: "Cancel Lodgment" },
      // { name: "Instrument" },
      // { name: "Realize" },
      // { name: "Reverse" },
      // { name: "Cancel Realization" },
      // { name: "Convert to LDBC" },
      // { name: "Margin" },
      // { name: "Sales Tax Information" },
      // { name: "Inquire" },
    ],
    dropdown: [
      {
        name: "Lodge",
        subOptions: [],
      },
      {
        name: "Modify",
        subOptions: [],
      },
      {
        name: "Acceptance",
        subOptions: [{ name: "Add" }, { name: "Change" }, { name: "Cancel" }],
      },
      {
        name: "Cancel Lodgment",
        subOptions: [],
      },
      {
        name: "Instrument",
        subOptions: [
          { name: "Arrival" },
          { name: "Return" },
          { name: "Cancel" },
        ],
      },
      {
        name: "Realize",
        subOptions: [],
      },
      {
        name: "Reverse",
        subOptions: [{ name: "Add" }, { name: "Cancel" }],
      },
      {
        name: "Cancel Realization",
        subOptions: [],
      },
      {
        name: "Convert to LDBC",
        subOptions: [{ name: "Convert" }, { name: "Cancel" }],
      },
      {
        name: "Margin",
        subOptions: [{ name: "Adjust" }, { name: "Cancel" }],
      },
      {
        name: "Sales Tax Information",
        subOptions: [
          { name: "Lodge" },
          { name: "Cancel Lodgment" },
          {
            name: "Acceptance",
            options: [{ name: "Add" }, { name: "Change" }, { name: "Cancel" }],
          },
          {
            name: "Instrument",
            options: [
              { name: "Arrival" },
              { name: "Return" },
              { name: "Cancel" },
            ],
          },
          { name: "Realize" },
          { name: "Cancel Realization" },
          {
            name: "Margin",
            options: [{ name: "Adjust" }, { name: "Cancel" }],
          },
        ],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
    ],
  },
  {
    title: "E-form",
    color: "#f43f5e",
    options: [
      { name: "CPU Activities" },
      { name: "Branch Activities" },
      { name: "Add" },
      //   { name: "Change" },
      //   { name: "Delete" },
      //   { name: "Cancel" },
      //   { name: "Inquire" },
      //   { name: "Good Declaration" },
      //   { name: "Settlement" },
    ],
    dropdown: [
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "Eform Stock",
            options: [
              { name: "Eform Stock Received" },
              { name: "Eform Spoil" },
              { name: "Issuance of stock to Branch" },
              {
                name: "Eform Certification",
                subOptions: [
                  { name: "Add" },
                  { name: "Modify" },
                  { name: "Cancel" },
                ],
              },
              {
                name: "Eform Amendment",
                subOptions: [
                  { name: "Add" },
                  { name: "Cancel" },
                  { name: "Change Customer" },
                  { name: "Cancel Change Customer" },
                  { name: "Authorize Change Customer" },
                ],
              },
            ],
          },
          { name: "Reversion to Authorization" },
          { name: "Inquiry" },
          { name: "GD Inquiry" },
          { name: "Goods Wise Inquiry" },
          { name: "Settlement of Eform" },
          { name: "BCA Inquiry" },
        ],
      },
      {
        name: "Branch Activities",
        subOptions: [
          { name: "Eform Stock Request" },
          { name: "Eform Issuance to customer" },
          { name: "CancelEform" },
          { name: "Scan Docs" },
          { name: "Inquiry" },
          { name: "GD Inquiry" },
          { name: "BCA Inquiry" },
        ],
      },
      { name: "Add" },
      { name: "Change" },
      { name: "Delete" },
      { name: "Cancel" },
      { name: "Inquire" },
      { name: "Good Declaration" },
      { name: "Settlement" },
    ],
  },
  {
    title: "Inquiry",
    color: "#10b981",
    options: [{ name: "LDBC" }, { name: "LDBP" }],
    dropdown: [
      {
        name: "LDBC",
        subOptions: [
          { name: "Outstanding" },
          { name: "Accepted" },
          { name: "Realized" },
          { name: "Acceptance Overdue" },
          // { name: "Realization Overdue" },
          // { name: "Instruments in Process" },
          // { name: "Customer Business" },
          // { name: "Document Business" },
        ],
      },
      {
        name: "LDBP",
        subOptions: [
          { name: "Outstanding" },
          { name: "Accepted" },
          { name: "Realized" },
          { name: "Acceptance Overdue" },
          { name: "Realization Overdue" },
          { name: "Instruments in Process" },
          { name: "Customer Business" },
          { name: "Document Business" },
        ],
      },
    ],
  },
  {
    title: "FDBC",
    color: "#14b8a6",
    options: [
      { name: "CPU Activities" },
      { name: "Branch Activities" },
      { name: "Lodge" },
      { name: "Courier Charges" },
      // { name: "Modify Lodgement" },
      // { name: "Acceptance" },
      // { name: "Transfer" },
      // { name: "Reverse" },
      // { name: "Realization" },
      // { name: "EDS" },
      // { name: "Forward Deals" },
      // { name: "Cancel" },
      // { name: "Convert" },
      // { name: "FDD" },
      // { name: "Inquire" },
      // { name: "Change Customer" },
    ],
    dropdown: [
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "FDBC Scrutiny",
            options: [{ name: "Request" }, { name: "Modify" }],
          },
          {
            name: "Lodge",
            options: [{ name: "Request" }, { name: "Modify" }],
          },
          {
            name: "Amend Lodgement",
            options: [{ name: "Request" }, { name: "Modify" }],
          },
          {
            name: "Acceptance",
            options: [{ name: "Mark" }, { name: "Change" }],
          },
          {
            name: "FDBC Transfer",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDBC Realization",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "EDS",
            options: [{ name: "Add" }],
          },
          {
            name: "FDBC Reverse",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDBC Cancel",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDBC Convert",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDD",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          { name: "Reversion to Authorization" },
          {
            name: "Inquiry",
            options: [{ name: "FDBC Inquiry" }, { name: "Goods Declaration" }],
          },
          {
            name: "Cancel",
            options: [
              { name: "FDBC TRANSFER" },
              { name: "FDBC ACCEPT" },
              { name: "FDBC CONVERT" },
              { name: "FDBC REAL" },
              { name: "FDBC AMENDMEND" },
              { name: "FDBC SCRUTINY" },
              { name: "FDBC CANCEL" },
              { name: "FDBC LODG" },
              { name: "FDBC REV" },
              { name: "FDBC FDD" },
              { name: "FDBC ACPT CHANGE" },
              { name: "FDBC EDS CHRG" },
            ],
          },
        ],
      },
      {
        name: "Branch Activities",
        subOptions: [
          { name: "Inquiry" },
          {
            name: "Scan Docs",
            options: [{ name: "Scan by Request No." }],
          },
          { name: "GD Inquiry" },
        ],
      },
      { name: "Lodge" },
      {
        name: "Courier Charges",
        subOptions: [{ name: "Add" }, { name: "Change" }],
      },
      { name: "Modify Lodgement" },
      {
        name: "Acceptance",
        subOptions: [{ name: "Mark" }, { name: "Change" }],
      },
      { name: "Transfer" },
      { name: "Reverse" },
      { name: "Realization" },
      { name: "EDS" },
      {
        name: "Forward Deals",
        subOptions: [{ name: "Change" }, { name: "Add" }, { name: "Inquire" }],
      },
      { name: "Cancel" },
      { name: "Convert" },
      { name: "FDD" },
      { name: "Inquire" },
      { name: "Change Customer" },
    ],
  },
  {
    title: "LG Collection",
    color: "#8b5cf6",
    options: [
      { name: "Lodgement" },
      { name: "Amendment" },
      { name: "Realization" },
      // { name: "Convert To Discounting" },
      // { name: "Inquire" },
      // { name: "Authorize" },
    ],
    dropdown: [
      {
        name: "Lodgement",
        subOptions: [
          { name: "Lodge" },
          { name: "Modify" },
          { name: "Reversion To Auth" },
        ],
      },
      {
        name: "Amendment",
        subOptions: [
          {
            name: "Amend LG By Request",
            options: [
              { name: "Amend" },
              { name: "Modify" },
              { name: "Reversion To Auth" },
            ],
          },
          {
            name: "Amend LG By CPU",
            options: [
              { name: "Amend" },
              { name: "Modify" },
              { name: "Reversion To Auth" },
            ],
          },
        ],
      },
      {
        name: "Realization",
        subOptions: [{ name: "Realize" }, { name: "Reversion To Auth" }],
      },
      {
        name: "Convert To Discounting",
        subOptions: [{ name: "Convert" }, { name: "Reversion To Auth" }],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
      {
        name: "Authorize",
        subOptions: [],
      },
    ],
  },
  {
    title: "FDBP",
    color: "#d946ef",
    options: [
      { name: "CPU Activities" },
      { name: "Lodge" },
      { name: "Courier Charges" },
      { name: "Modify Lodgement" },
      // {name:"Acceptance"},
      // {name:"Rediscounting"},
      // {name:"Forward Deals"},
      // {name:"Reverse"},
      // {name:"Realization"},
      // {name:"Transfer"},
      // {name:"EDS"},
      // {name:"Cancel"},
      // {name:"Convert"},
      // {name:"FDD"},
      // {name:"R&D"},
      // {name:"Inquire"},
      // {name:"Change Customer"}
    ],
    dropdown: [
      {
        name: "CPU Activities",
        subOptions: [
          {
            name: "FDBP Scrutiny",
            options: [{ name: "Request" }, { name: "Modify" }],
          },
          {
            name: "Lodge",
            options: [{ name: "Request" }, { name: "Modify" }],
          },
          {
            name: "Acceptance",
            options: [{ name: "Mark" }, { name: "Change" }],
          },
          {
            name: "Amend Lodgement",
            options: [{ name: "Request" }, { name: "Modify" }],
          },
          {
            name: "FDBP Realization",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDBP Transfer",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDBP Rediscounting",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDBP Rediscounting Reversal",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "EDS",
            options: [{ name: "Request" }, { name: "Modify" }],
          },
          {
            name: "FDBP Reverse",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDBP Cancel",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDBP Convert",
            options: [{ name: "Request" }, { name: "Re-initiate" }],
          },
          {
            name: "FDD",
            options: [{ name: "Request" }, { name: "Modify" }],
          },
          {
            name: "Reversion to Authorization",
          },
          {
            name: "Inquiry",
            options: [{ name: "FDBP Inquiry" }, { name: "Goods Declaration" }],
          },
          {
            name: "Cancel",
            options: [
              { name: "FDBP SCRUTINY" },
              { name: "FDBP LODG" },
              { name: "FDBP ACPT CHANGE" },
              { name: "FDBP CANCEL" },
              { name: "FDBP AMENDMEND" },
              { name: "FDBP ACCEPT" },
              { name: "FDBP REAL" },
              { name: "FDBP CONVERT" },
              { name: "FDBP REV" },
              { name: "FDBP REDISC" },
              { name: "FDBP REDISC REV" },
            ],
          },
          {
            name: "Uphold Voucher",
          },
        ],
      },
      {
        name: "Branch Activities",
        subOptions: [
          { name: "Inquiry" },
          {
            name: "Scan Docs",
            options: [{ name: "Scan by Request No." }],
          },
          { name: "GD Inquiry" },
        ],
      },

      { name: "Lodge" },
      {
        name: "Courier Charges",
        subOptions: [{ name: "Change" }],
      },
      { name: "Modify Lodgement" },
      {
        name: "Acceptance",
        subOptions: [{ name: "Mark" }, { name: "Change" }, { name: "Cancel" }],
      },
      { name: "Rediscounting" },
      {
        name: "Forward Deals",
        subOptions: [{ name: "Add" }, { name: "Change" }, { name: "Inquire" }],
      },
      { name: "Reverse" },
      { name: "Realization" },
      { name: "Transfer" },
      { name: "EDS" },
      { name: "Cancel" },
      { name: "Convert" },
      { name: "FDD" },
      { name: "R&D" },
      { name: "Inquire" },
      { name: "Change Customer" },
    ],
  },
  {
    title: "LG Discounting",
    color: "#22d3ee",
    options: [
      { name: "Modify" },
      { name: "Realize" },
      { name: "Reversion to Auth" },
      { name: "Authorize" },
      // { name: "Inquire" },
    ],
    dropdown: [
      {
        name: "Modify",
        subOptions: [],
      },
      {
        name: "Realize",
        subOptions: [],
      },
      {
        name: "Reversion to Auth",
        subOptions: [],
      },
      {
        name: "Authorize",
        subOptions: [],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
    ],
  },
  {
    title: "FDBC Under Musawama",
    color: "#a21caf",
    options: [
      { name: "Lodge" },
      { name: "Courier Charges" },
      { name: "Modify Lodgement" },
      { name: "Acceptance" },
      // { name: "Transfer" },
      // { name: "Reverse" },
      // { name: "Realization" },
      // { name: "EDS" },
      // { name: "Cancel" },
      // { name: "Convert" },
      // { name: "FDD" },
      // { name: "Inquire" },
      // { name: "Change Customer" },
    ],
    dropdown: [
      {
        name: "Lodge",
        subOptions: [],
      },
      {
        name: "Courier Charges",
        subOptions: [],
      },
      {
        name: "Modify Lodgement",
        subOptions: [],
      },
      {
        name: "Acceptance",
        subOptions: [],
      },
      {
        name: "Transfer",
        subOptions: [],
      },
      {
        name: "Reverse",
        subOptions: [],
      },
      {
        name: "Realization",
        subOptions: [],
      },
      {
        name: "EDS",
        subOptions: [{ name: "Add" }, { name: "Cancel" }],
      },
      {
        name: "Cancel",
        subOptions: [],
      },
      {
        name: "Convert",
        subOptions: [],
      },
      {
        name: "FDD",
        subOptions: [],
      },
      {
        name: "Inquire",
        subOptions: [],
      },
      {
        name: "Change Customer",
        subOptions: [],
      },
    ],
  },
  {
    title: "PSW Misc.",
    color: "#16a34a",
    options: [
      { name: "Multiparty Consignee" },
      { name: "Psw Inquiry" },
      { name: "BCA message inquiry" },
      // { name: "PICH Request" },
      // { name: "PICH Inquiry" },
    ],
    dropdown: [
      {
        name: "Multiparty Consignee",
        subOptions: [
          {
            name: "Issue",
          },
          { name: "Inquiry" },
        ],
      },
      {
        name: "Psw Inquiry",
        subOptions: [],
      },
      {
        name: "BCA message inquiry",
        subOptions: [],
      },
      {
        name: "PICH Request",
        subOptions: [{ name: "Change" }, { name: "Amend" }, { name: "Cancel" }],
      },
      {
        name: "PICH Inquiry",
        subOptions: [],
      },
    ],
  },
  // {
  //   title: "Cancel FDBC/FDBP Transaction",
  //   color: "#dc2626",
  //   options: [],
  // },
  // {
  //   title: "Change Of Bank",
  //   color: "#2563eb",
  //   options: [],
  // },
  {
    title: "Inquiry",
    color: "#10b981",
    options: [
      { name: "Imp/Exp/Ref A/c" },
      { name: "FDBC Inquiries" },
      { name: "E Form Inquiries" },
    ],
    dropdown: [
      {
        name: "Imp/Exp/Ref A/c",
        subOptions: [],
      },
      {
        name: "FDBC Inquiries",
        subOptions: [
          { name: "Outstanding Summary" },
          { name: "Accepted Summary" },
          { name: "Realized FDBC Summary" },
          { name: "Acceptance Overdue Summary" },
          { name: "Realization FDBC Overdue Summary" },
          { name: "Customer Business-wise Summary" },
          { name: "Document Bank Business-wise Summary" },
          { name: "Country Business-wise Summary" },
        ],
      },
      {
        name: "FDBP Inquiries",
        subOptions: [
          { name: "Outstanding Summary" },
          { name: "Accepted Summary" },
          { name: "Rediscounted Summary" },
          { name: "Realized FDBP Summary" },
          { name: "Acceptance Overdue Summary" },
          { name: "Realization FDBP Overdue Summary" },
          { name: "Customer Business-wise Summary" },
          { name: "Document Bank Business-wise Summary" },
          { name: "Country Business-wise Summary" },
        ],
      },
      {
        name: "E Form Inquiries",
        subOptions: [{ name: "E Forms" }, { name: "E Forms Customer-wise" }],
      },
    ],
  },
];

export const treasuryManagementItems = [
  // {
  //   title: "Open Term Deposit A/C",
  //   color: "#34d399",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Cancel Deal",
  //   color: "#34d399",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Term Deposit A/C Information",
    color: "#34d399",
    options: [
      { name: "Maintain" },
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Maintain"
      },
      {
        name: "Inquire"
      }
    ]
  },
  // {
  //   title: "Profit Payment before Maturity",
  //   color: "#34d399",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Book Deal",
    color: "#34d399",
    options: [
      { name: "Book" },
      { name: "Authorize" }
    ],
    dropdown: [
      {
        name: "Book"
      },
      {
        name: "Authorize"
      }
    ]
  },
  // {
  //   title: "Due Date Dairy",
  //   color: "#34d399",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Deal Information",
    color: "#34d399",
    options: [
      { name: "Maintain" },
      { name: "Print Receipt" },
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Maintain"
      },
      {
        name: "Print Receipt"
      },
      {
        name: "Inquire"
      }
    ]
  },
  // {
  //   title: "Summary-Due Date Dairy",
  //   color: "#34d399",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Pre Mature Deal",
  //   color: "#34d399",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Reverse Deal",
  //   color: "#34d399",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "ZAMANAT INSURANCE",
    color: "#34d399",
    options: [
      { name: "Book" },
      { name: "Mark Status" },
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Book"
      },
      {
        name: "Mark Status"
      },
      {
        name: "Inquire"
      }
    ]
  }
]

export const internationalTransactionsItems = [
  {
    title: "Bankers Cheque",
    color: "#082e53",
    options: [
      { name: "Request" },
      { name: "Issue" },
      { name: "Print" },

    ],
    dropdown: [
      {
        name: "Request",
        subOptions: [
          { name: "Original" },
          { name: "Authorize" },
          { name: "Cancel" },
          { name: "Reverse" },
          { name: "Inquiry" }
        ]
      },
      {
        name: "Issue",
        subOptions: [
          {
            name: "Original",

          },
          {
            name: "Authorize",

          },
          {
            name: "Cancel",
          },
          {
            name: "Reversal",
            options: [
              { name: "Customer Request" },
              { name: "User Request" },
       

            ]
          },
          {
            name: "Duplicate",
            options: [
              { name: "Issue" },
              { name: "Cancel" },
              { name: "Authorize" }
            ]
          }
        ]
      },
      {
        name: "Print",
        subOptions: [
          { name: "Original" },
          { name: "Duplicate" },
       
        ]
      },
      {
        name: "Process For Payment",
        subOptions: [
                    { name: "Payment" },
          { name: "Reject" },
          { name: "Authorize" },
      
        ]
      },
      {
        name: "Caution Payment Request",
        subOptions: [
                    { name: "Mark" },
           { name: "Cancel" },
          { name: "Authorize" },
          { name: "Release" }
        ]
      },
      {
        name: "Revalidate / Renew"
      },
      {
        name: "Inquiry"
      }
    ]
  },
  {
    title: "Pay Order",
    color: "#082e53",
    options: [
      { name: "Issue" },
      { name: "Print" },
      { name: "Process for Payment" },
      // { name: "Caution Payment Request" },
      // { name: "Cancel" },
      // { name: "Revalidate" }
    ],
    dropdown: [
      
      {
        name: "Issue",
        subOptions: [
               { name: "Original" },
               { name: "Authorize" },
          {
            name: "Standing Instructions",
            options: [
        
              { name: "Assign / Modify" },
              { name: "Process Bulk (Pay Orders)" },
              { name: "Process Transactions" },
              { name: "Print" },
              { name: "Inquire" }
            ]
          },
          { name: "Duplicate" }
        ]
      },
      {
        name: "Print",
        subOptions: [
          { name: "Original" },
          { name: "Duplicate" },
          { name: "W/H Tax Certificate" }
        ]
      },
      {
        name: "Process for Payment"
      },
      {
        name: "Caution Payment Request",
        subOptions: [
          { name: "Mark" },
          { name: "Release" }
        ]
      },
      {
        name: "Cancel"
      },
      {
        name: "Revalidate"
      }
    ]
  },
  {
    title: "Demand Draft",
    color: "#082e53",
    options: [
      { name: "Issue" },
      { name: "Print" },
      { name: "Process Incoming Advice" },
      // { name: "Process for Payment" },
      // { name: "Caution Payment Request" },
      // { name: "Cancel" },
      // { name: "Renew" }
    ],
    dropdown: [
      {
        name: "Issue",
        subOptions: [
          { name: "Original" },
          { name: "Authorize" },
          {
            name: "Standing Instructions",
            options: [
          
              { name: "Assign / Modify" },
              { name: "Process Bulk (Demand Drafts)" },
              { name: "Process Transactions" },
              { name: "Authorize" },
              { name: "Print" },
              { name: "Inquire" }
            ]
          },
          { name: "Duplicate" }
        ]
      },
      {
        name: "Print",
        subOptions: [
          { name: "Original" },
          { name: "Duplicate" },
          {
            name: "Advices",
            options: [
              { name: "IBCA" },
              { name: "IBCA not Received" },
              { name: "Request to Mark Caution" },
              { name: "Issuance of Duplicate DD" },
              { name: "IBDA" },
              { name: "Cancellation of DD" },
              { name: "Renewal of DD" }
            ]
          },
          { name: "W/H Tax Certificate" }
        ]
      },
      {
        name: "Process Incoming Advice",
        subOptions: [
          {
            name: "With Advice",
            options: [
              { name: "Original" },
              { name: "Duplicate Issuance Memo" },
              { name: "Renewal Memo" },
              {
                name: "Caution Advice",
                subOptions: [
                  { name: "Mark" },
                  { name: "Release" }
                ]
              }
            ]
          },
          {
            name: "Without Advice",
            options: [
              { name: "Process" },
              { name: "Receive Advice of Paid DD" }
            ]
          }
        ]
      },
      {
        name: "Process for Payment"
      },
      {
        name: "Caution Payment Request",
        subOptions: [
          { name: "Mark" },
          { name: "Release" }
        ]
      },
      {
        name: "Cancel"
      },
      {
        name: "Renew"
      }
    ]
  },
  {
    title: "Call Deposit Receipt",
    color: "#082e53",
    options: [
      { name: "Issue" },
      { name: "Print" },
      { name: "Process for Payment" },
      // { name: "Caution Payment Request" },
      // { name: "Cancel" },
      // { name: "Revalidate" }
    ],
    dropdown: [
      {
        name: "Issue",
        subOptions: [
          { name: "Original" },
          { name: "Authorize" },
          {
            name: "Standing Instructions",
          
          },
          { name: "Duplicate" }
        ]
      },
      {
        name: "Print",
        subOptions: [
          { name: "Original" },
          { name: "Duplicate" }
        ]
      },
      {
        name: "Process for Payment"
      },
      {
        name: "Caution Payment Request",
        subOptions: [
          { name: "Mark" },
          { name: "Release" }
        ]
      },
      {
        name: "Cancel"
      },
      {
        name: "Revalidate"
      }
    ]
  },
  {
    title: "Inquiry",
    color: "#082e53",
    options: [
      { name: "Inflight" },
      { name: "Issued" },
      { name: "Outstanding" },
      { name: "Paid" }
    ],
    dropdown: [
      {
        name: "Inflight",
        subOptions: [
          { name: "Pay Order" },
          { name: "Demand Draft" },
          { name: "CDR" }
        ]
      },
      {
        name: "Issued",
        subOptions: [
          {
            name: "Pay Orders",
            options: [
              { name: "By Date" },
              { name: "By Pay Order No." }
            ]
          },
          {
            name: "Demand Drafts",
            options: [
              { name: "By Date" },
              { name: "By Demand Draft No." }
            ]
          },
          {
            name: "CDR",
            options: [
              { name: "By Date" },
              { name: "By CDR No." }
            ]
          }
        ]
      },
      {
        name: "Outstanding",
        subOptions: [
          { name: "Pay Orders By Date" },
          {
            name: "Demand Drafts for Payment",
            options: [
              { name: "By Demand Draft No." },
              { name: "All" }
            ]
          },
          { name: "CDR By Date" }
        ]
      },
      {
        name: "Paid",
        subOptions: [
          { name: "Pay Order By Date" },
          { name: "Demand Draft By Date" },
          { name: "CDR By Date" }
        ]
      }
    ]
  }
]



