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
    name: "Bonface",
    message: "ATM Card request is pending",
    time: "Yesterday at 9:42 AM",
    hasActions: false,
    read: false,
    Img: notificatioIcon1,
  },
  {
    id: 2,
    name: "Bonface",
    message: "Transaction authorization request is pending",
    time: "Today at 10:20 AM",
    hasActions: false,
    read: false,
    Img: notificatioIcon2,
  },
  {
    id: 3,
    name: "Bonface",
    message: "Loan authorization request is pending",
    time: "Yesterday ",
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
      // {
      //   name: "Forex Remittance",
      //   subOptions: [
      //     {
      //       name: "Inward",
      //       options: [
      //         { name: "Print" },
      //         { name: "W.H. Tax Cert" },
      //         { name: "JV" },
      //       ],
      //     },
      //     {
      //       name: "Outward",
      //       options: [
      //         { name: "Advice Inquiry" },
      //         { name: "Beneficiary/Remitter Report" },
      //         { name: "Manual Swift Confirmation" },
      //         { name: "Lodge" },
      //         { name: "Authorize" },
      //         { name: "Cancel" },
      //         { name: "Print" },
      //         { name: "IFX Cert" },
      //         { name: "Inquiry" },
      //       ],
      //     },
      //     {
      //       name: "Encashment",
      //       options: [
      //         { name: "Print" },
      //         { name: "IFX Cert" },
      //         { name: "Inquiry" },
      //       ],
      //     },
      //   ],
      // },
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
      // { name: "Inquire" },
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
      // { name: "E-Form Against PRC" },
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
      // { name: "Acceptance" },
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
      // { name: "Cancel Lodgment" },
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
      // { name: "Courier Charges" },
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
      // { name: "Modify Lodgement" },
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
      // { name: "Authorize" },
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
      // { name: "Acceptance" },
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
    title: "Zamanat Insurance",
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
  // {
  //   title: "Bankers Cheque",
  //   color: "#082e53",
  //   options: [
  //     { name: "Request" },
  //     { name: "Issue" },
  //     { name: "Print" },

  //   ],
  //   dropdown: [
  //     {
  //       name: "Request",
  //       subOptions: [
  //         { name: "Original" },
  //         { name: "Authorize" },
  //         { name: "Cancel" },
  //         { name: "Reverse" },
  //         { name: "Inquiry" }
  //       ]
  //     },
  //     {
  //       name: "Issue",
  //       subOptions: [
  //         {
  //           name: "Original",

  //         },
  //         {
  //           name: "Authorize",

  //         },
  //         {
  //           name: "Cancel",
  //         },
  //         {
  //           name: "Reversal",
  //           options: [
  //             { name: "Customer Request" },
  //             { name: "User Request" },
       

  //           ]
  //         },
  //         {
  //           name: "Duplicate",
  //           options: [
  //             { name: "Issue" },
  //             { name: "Cancel" },
  //             { name: "Authorize" }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       name: "Print",
  //       subOptions: [
  //         { name: "Original" },
  //         { name: "Duplicate" },
       
  //       ]
  //     },
  //     {
  //       name: "Process For Payment",
  //       subOptions: [
  //                   { name: "Payment" },
  //         { name: "Reject" },
  //         { name: "Authorize" },
      
  //       ]
  //     },
  //     {
  //       name: "Caution Payment Request",
  //       subOptions: [
  //                   { name: "Mark" },
  //          { name: "Cancel" },
  //         { name: "Authorize" },
  //         { name: "Release" }
  //       ]
  //     },
  //     {
  //       name: "Revalidate / Renew"
  //     },
  //     {
  //       name: "Inquiry"
  //     }
  //   ]
  // },
  // {
  //   title: "Pay Order",
  //   color: "#082e53",
  //   options: [
  //     { name: "Issue" },
  //     { name: "Print" },
  //     { name: "Process for Payment" },
  //     // { name: "Caution Payment Request" },
  //     // { name: "Cancel" },
  //     // { name: "Revalidate" }
  //   ],
  //   dropdown: [
      
  //     {
  //       name: "Issue",
  //       subOptions: [
  //              { name: "Original" },
  //              { name: "Authorize" },
  //         {
  //           name: "Standing Instructions",
  //           options: [
        
  //             { name: "Assign / Modify" },
  //             { name: "Process Bulk (Pay Orders)" },
  //             { name: "Process Transactions" },
  //             { name: "Print" },
  //             { name: "Inquire" }
  //           ]
  //         },
  //         { name: "Duplicate" }
  //       ]
  //     },
  //     {
  //       name: "Print",
  //       subOptions: [
  //         { name: "Original" },
  //         { name: "Duplicate" },
  //         { name: "W/H Tax Certificate" }
  //       ]
  //     },
  //     {
  //       name: "Process for Payment"
  //     },
  //     {
  //       name: "Caution Payment Request",
  //       subOptions: [
  //         { name: "Mark" },
  //         { name: "Release" }
  //       ]
  //     },
  //     {
  //       name: "Cancel"
  //     },
  //     {
  //       name: "Revalidate"
  //     }
  //   ]
  // },
  // {
  //   title: "Demand Draft",
  //   color: "#082e53",
  //   options: [
  //     { name: "Issue" },
  //     { name: "Print" },
  //     { name: "Process Incoming Advice" },
  //     // { name: "Process for Payment" },
  //     // { name: "Caution Payment Request" },
  //     // { name: "Cancel" },
  //     // { name: "Renew" }
  //   ],
  //   dropdown: [
  //     {
  //       name: "Issue",
  //       subOptions: [
  //         { name: "Original" },
  //         { name: "Authorize" },
  //         {
  //           name: "Standing Instructions",
  //           options: [
          
  //             { name: "Assign / Modify" },
  //             { name: "Process Bulk (Demand Drafts)" },
  //             { name: "Process Transactions" },
  //             { name: "Authorize" },
  //             { name: "Print" },
  //             { name: "Inquire" }
  //           ]
  //         },
  //         { name: "Duplicate" }
  //       ]
  //     },
  //     {
  //       name: "Print",
  //       subOptions: [
  //         { name: "Original" },
  //         { name: "Duplicate" },
  //         {
  //           name: "Advices",
  //           options: [
  //             { name: "IBCA" },
  //             { name: "IBCA not Received" },
  //             { name: "Request to Mark Caution" },
  //             { name: "Issuance of Duplicate DD" },
  //             { name: "IBDA" },
  //             { name: "Cancellation of DD" },
  //             { name: "Renewal of DD" }
  //           ]
  //         },
  //         { name: "W/H Tax Certificate" }
  //       ]
  //     },
  //     {
  //       name: "Process Incoming Advice",
  //       subOptions: [
  //         {
  //           name: "With Advice",
  //           options: [
  //             { name: "Original" },
  //             { name: "Duplicate Issuance Memo" },
  //             { name: "Renewal Memo" },
  //             {
  //               name: "Caution Advice",
  //               subOptions: [
  //                 { name: "Mark" },
  //                 { name: "Release" }
  //               ]
  //             }
  //           ]
  //         },
  //         {
  //           name: "Without Advice",
  //           options: [
  //             { name: "Process" },
  //             { name: "Receive Advice of Paid DD" }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       name: "Process for Payment"
  //     },
  //     {
  //       name: "Caution Payment Request",
  //       subOptions: [
  //         { name: "Mark" },
  //         { name: "Release" }
  //       ]
  //     },
  //     {
  //       name: "Cancel"
  //     },
  //     {
  //       name: "Renew"
  //     }
  //   ]
  // },
  // {
  //   title: "Call Deposit Receipt",
  //   color: "#082e53",
  //   options: [
  //     { name: "Issue" },
  //     { name: "Print" },
  //     { name: "Process for Payment" },
  //     // { name: "Caution Payment Request" },
  //     // { name: "Cancel" },
  //     // { name: "Revalidate" }
  //   ],
  //   dropdown: [
  //     {
  //       name: "Issue",
  //       subOptions: [
  //         { name: "Original" },
  //         { name: "Authorize" },
  //         {
  //           name: "Standing Instructions",
          
  //         },
  //         { name: "Duplicate" }
  //       ]
  //     },
  //     {
  //       name: "Print",
  //       subOptions: [
  //         { name: "Original" },
  //         { name: "Duplicate" }
  //       ]
  //     },
  //     {
  //       name: "Process for Payment"
  //     },
  //     {
  //       name: "Caution Payment Request",
  //       subOptions: [
  //         { name: "Mark" },
  //         { name: "Release" }
  //       ]
  //     },
  //     {
  //       name: "Cancel"
  //     },
  //     {
  //       name: "Revalidate"
  //     }
  //   ]
  // },
  // {
  //   title: "Inquiry",
  //   color: "#082e53",
  //   options: [
  //     { name: "Inflight" },
  //     { name: "Issued" },
  //     { name: "Outstanding" },
  //     { name: "Paid" }
  //   ],
  //   dropdown: [
  //     {
  //       name: "Inflight",
  //       subOptions: [
  //         { name: "Pay Order" },
  //         { name: "Demand Draft" },
  //         { name: "CDR" }
  //       ]
  //     },
  //     {
  //       name: "Issued",
  //       subOptions: [
  //         {
  //           name: "Pay Orders",
  //           options: [
  //             { name: "By Date" },
  //             { name: "By Pay Order No." }
  //           ]
  //         },
  //         {
  //           name: "Demand Drafts",
  //           options: [
  //             { name: "By Date" },
  //             { name: "By Demand Draft No." }
  //           ]
  //         },
  //         {
  //           name: "CDR",
  //           options: [
  //             { name: "By Date" },
  //             { name: "By CDR No." }
  //           ]
  //         }
  //       ]
  //     },
  //     {
  //       name: "Outstanding",
  //       subOptions: [
  //         { name: "Pay Orders By Date" },
  //         {
  //           name: "Demand Drafts for Payment",
  //           options: [
  //             { name: "By Demand Draft No." },
  //             { name: "All" }
  //           ]
  //         },
  //         { name: "CDR By Date" }
  //       ]
  //     },
  //     {
  //       name: "Paid",
  //       subOptions: [
  //         { name: "Pay Order By Date" },
  //         { name: "Demand Draft By Date" },
  //         { name: "CDR By Date" }
  //       ]
  //     }
  //   ]
  // }
  //  {
  //       title: "Forex Remittance",
  //       color: "#082e53",
  //       options: [
  //         {
  //           name: "Inward",
            
  //         },
  //         {
  //           name: "Outward",
            
  //         },
  //         {
  //           name: "Encashment",
            
  //         },
  //       ],
  //       dropdown: [
  //         {
  //           name: "Inward",
  //           subOptions: [
  //             { name: "Print" },
  //             { name: "W.H. Tax Cert" },
  //             { name: "JV" },
  //           ],
  //         },
  //         {
  //           name: "Outward",
  //           subOptions: [
  //             { name: "Advice Inquiry" },
  //             { name: "Beneficiary/Remitter Report" },
  //             { name: "Manual Swift Confirmation" },
  //             { name: "Lodge" },
  //             { name: "Authorize" },
  //             { name: "Cancel" },
  //             { name: "Print" },
  //             { name: "IFX Cert" },
  //             { name: "Inquiry" },
  //           ],
  //         },
  //         {
  //           name: "Encashment",
  //           subOptions: [
  //             { name: "Print" },
  //             { name: "IFX Cert" },
  //             { name: "Inquiry" },
  //           ],
  //         },
  //       ]
  //     },

      {
        title:"Inward Remittance",
        color:"#082e53",
        options:[
             { name: "Print" },
              { name: "W.H. Tax Cert" },
              { name: "JV" },
        ],
        dropdown:[
              {
                name: "Print"
              },
              {
                name: "W.H. Tax Cert"
              },
              {
                name: "JV"
              }
        ]

      },
      {
        title:"Outward Remittance",
        color:"#082e53",
        options:[
              { name: "Advice Inquiry" },
              { name: "Beneficiary/Remitter Report" },
              { name: "Manual Swift Confirmation" },
              { name: "Lodge" },
              // { name: "Authorize" },
              // { name: "Cancel" },
              // { name: "Print" },
              // { name: "IFX Cert" },
              // { name: "Inquiry" },
        ],
        dropdown:[
              {
                name: "Advice Inquiry"
              },
              {
                name: "Beneficiary/Remitter Report"
              },
              {
                name: "Manual Swift Confirmation"
              },
              {
                name: "Lodge"
              },
              {
                name: "Authorize"
              },
              {
                name: "Cancel"
              },
              {
                name: "Print"
              },
              {
                name: "IFX Cert"
              },
              {
                name: "Inquiry"
              }  
            ],

      },
      {
        title:"Encashment",
        color:"#082e53",
        options:[
              { name: "Print" },
              { name: "IFX Cert" },
              { name: "Inquiry" },
        ],
        dropdown:[
              {
                name: "Print"
              },
              {
                name: "IFX Cert"
              },
              {
                name: "Inquiry"
              }  
            ],  
      }
]

export const analyticsAndReportsItems = [
  // {
  //   title: "Generate QR Code",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Direct Debit Reporting",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Cent FT Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Cent Imports Reports",
    color: "#8e44ad",
    options: [
      { name: "Charges" },
      { name: "Documents" },
      { name: "I Form" },
      // { name: "IBCA and IBDA" },
      // { name: "Import Registration of Contract" },
      // { name: "L/C Control Card" },
      // { name: "Others" },
      // { name: "Payment" },
      // { name: "Reciprocity" },
      // { name: "SBP QTR Report" },
      // { name: "Statement of HS Code" },
      // { name: "Utilized L/C" },
      // { name: "Funding Account List (User Wise)" }
    ],
    dropdown: [
      {
        name: "Miscellenous",
        subOptions: [
          { name: "Charges" },
          { name: "Documents" },
          { name: "I Form" },
          { name: "IBCA and IBDA" },
          { name: "Import Registration of Contract" },
          { name: "L/C Control Card" },
          { name: "Others" },
          { name: "Payment" },
          { name: "Reciprocity" },
          { name: "SBP QTR Report" },
          { name: "Statement of HS Code" },
          { name: "Utilized L/C" },
          { name: "Funding Account List (User Wise)" }
        ]
      },
      {
        name: "Voucher"
      },
      {
        name: "Due Date Diary"
      },
      {
        name: "Cash Commitment"
      },
      {
        name: "Outstanding"
      },
      {
        name: "Import Business (Customer wise)"
      },
      {
        name: "Customer Advices / Swift telex"
      },
      {
        name: "Import Register"
      }
    ]
  },
  {
    title: "Generalized Reports",
    color: "#8e44ad",
    options: [  { name: "CTF Export Reports" },
          { name: "Export Reports" }],
    dropdown: [
      {
        name: "CTF Export Reports"
      },
      {
        name: "Export Reports"
      }
    ]
  },
  {
    title: "CTF Foreign Trade",
    color: "#8e44ad",
    options: [
      { name: "LC Advising" },
      { name: "Miscellaneous FT" },
      { name: "Advance Payments" },
    //   { name: "Daily Export Activites" },
    //   { name: "E-Form" },
    //   { name: "FDBC/FDBP" },
    //   { name: "Letters/Certificates" },
    //   { name: "L/C Advising" },
    //   { name: "Miscellaneous" }
    ],
    dropdown: [
      {
        name: "LC Advising"
      },
      {
        name: "Miscellaneous FT"
      },
      {
        name: "Advance Payments"
      },
      {
        name: "Daily Export Activites"
      },
      {
        name: "E-Form"
      },
      {
        name: "FDBC/FDBP"
      },
      {
        name: "Letters/Certificates"
      },
      {
        name: "L/C Advising"
      },
      {
        name: "Miscellaneous"
      }
    ]
  },
  {
    title: "Export Reports",
    color: "#8e44ad",
    options: [
      { name: "Advance Payments" },
      { name: "Daily Export Activites" },
      { name: "E-Form" },
      // { name: "FDBC/FDBP Reports" },
      // { name: "Letters/Certificates" },
      // { name: "L/C Advising" },
      // { name: "Miscellaneous" }
    ],
    dropdown: [
      {
        name: "Advance Payments"
      },
      {
        name: "Daily Export Activites"
      },
      {
        name: "E-Form"
      },
      {
        name: "FDBC/FDBP Reports"
      },
      {
        name: "Letters/Certificates"
      },
      {
        name: "L/C Advising"
      },
      {
        name: "Miscellaneous"
      },
     
    ]
  },
  // {
  //   title: "Local Trade",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Beneficiary Mismatch Report",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "PSW Reports",
    color: "#8e44ad",
    options: [
      { name: "PSW FI & GD Reports" },
      { name: "B/L-Bank Endorsement" },
      { name: "Multiparity Consignee" }
    ],
    dropdown: [
      {
        name: "PSW FI & GD Reports"
      },
      {
        name: "B/L-Bank Endorsement"
      },
      {
        name: "Multiparity Consignee"
      }
    ]
  },
  // {
  //   title: "PSW FI & GD Report",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Reports",
    color: "#8e44ad",
    options: [
      { name: "Bank's Charges Deduction" },
      { name: "Cash Mgmnt Reports" },
      { name: "Cash Transaction Report" },
      // { name: "Centralized Account Opening" },
      // { name: "Centralized Clearing Reports" },
      // { name: "Centralized Outward Clearing" },
      // { name: "Clearing Advices" },
      // { name: "Foreign Remittance Reports" },
      // { name: "GL Fund Transfer Advices" },
      // { name: "IBC Reports" },
      // { name: "IBCA / IBDA For Exchange Voucher" },
      // { name: "Inter Branch Transaction Report" },
      // { name: "International Division Advice Report" },
      // { name: "Misc. Advance Reports" },
      // { name: "Misc. Teller Report" },
      // { name: "MO Advices" },
      // { name: "OBC Reports" },
      // { name: "OFBC Reports" },
      // { name: "Online Outward Clearing" },
      // { name: "Home Remittance" }
    ],
    dropdown: [
      {
        name: "Bank's Charges Deduction"
      },
      {
        name: "Cash Mgmnt Reports",
        subOptions: [
          { name: "Outward Clearing Report" },
          { name: "Utility Bills Collections" }
        ]
      },
      {
        name: "Cash Transaction Report"
      },
      {
        name: "Centralized Account Opening",
        subOptions: [
          { name: "Misc. CAO Reports" },
          { name: "General CAO Reports" },
          { name: "Zakat Report" }
        ]
      },
      {
        name: "Centralized Clearing Reports"
      },
      {
        name: "Centralized Outward Clearing"
      },
      {
        name: "Clearing Advices"
      },
      {
        name: "Foreign Remittance Reports"
      },
      {
        name: "GL Fund Transfer Advices"
      },
      {
        name: "IBC Reports"
      },
      {
        name: "IBCA / IBDA For Exchange Voucher"
      },
      {
        name: "Inter Branch Transaction Report"
      },
      {
        name: "International Division Advice Report"
      },
      {
        name: "Misc. Advance Reports"
      },
      {
        name: "Misc. Teller Report"
      },
      {
        name: "MO Advices"
      },
      {
        name: "OBC Reports"
      },
      {
        name: "OFBC Reports"
      },
      {
        name: "Online Outward Clearing",
        subOptions: [
          { name: "Initiate" },
          { name: "Receive" },
         
        ]
      },
      {
        name: "Home Remittance",
        subOptions: [
           { name: "COC Reports" },
          { name: "Account Transfer Reports",
            options: [
              { name: "Compliance Report" },
              { name: "Exchange Company Account Transfer Report" },
              { name: "Proceeds Realization Certificate" },
              { name: "Registered Agents" },
              { name: "Transaction Processed STP" },
              { name: "Transaction History" }
            ]

           },
          { name: "Cash Over Counter",
            options: [
              { name: "Name Amendment Report" },
        ]
           }
        ]
      },
      {
        name: "Online Report / Advice"
      },
      {
        name: "OWIC Reports"
      },
      {
        name: "Pending Charges"
      },
      {
        name: "Voucher"
      },
      {
        name: "WHTAX Deduction / Collection Certificate Budget 2016"
      },
      {
        name: "With Holding Tax Reports / Certificates"
      },
      {
        name: "WHT and Certificates"
      },
      {
        name: "Accounts and Balances"
      },
      {
        name: "Cheque Book and Biometric Reports"
      },
      {
        name: "Misc. Reports"
      },
      {
        name: "Register"
      },
      {
        name: "Cash Commitments"
      },
      {
        name: "Customer Advices/Swift telex"
      },
      {
        name: "Due date Diary"
      },
      {
        name: "Import Business",
        subOptions: [
          { name: "Imports Business Summary ( Customer Wise )" }
        ]
      },
      {
        name: "Import Register"
      },
      {
        name: "Outstanding"
      },
      {
        name: "Miscellenous"
      },
      {
        name: "Voucher"
      },
      {
        name: "Re-print Report"
      },
      {
        name: "Classification of Advances"
      },
      {
        name: "Commodity Financing"
      },
      {
        name: "Credit's Loans and Advices"
      },
      {
        name: "Print Delivery Order"
      },
      {
        name: "Fixed Investment"
      },
      {
        name: "Ijarah"
      },
      {
        name: "Insurance Reports"
      },
      {
        name: "Leasing"
      },
      {
        name: "Letter of Guarantee"
      },
      {
        name: "Limits"
      },
      {
        name: "Loan Installment"
      },
      {
        name: "MIS-7"
      },
      {
        name: "MIS-8"
      },
      {
        name: "Outstanding"
      },
      {
        name: "Review DM Rates"
      },
      {
        name: "Securities"
      },
      {
        name: "Statement of Advances"
      },
      {
        name: "FATCA",
        subOptions: [
          { name: "Individual Report" },
          { name: "Entity Report" },
         
        ]
      },
      {
        name: "Back Office Reports",
        subOptions: [
           { name: "Generate Reports" },
          { name: "View / Download Reports" }
       
        ]
      },
      {
        name: "Special Reports",
        subOptions: [
             { name: "Generalized Reports" },
          { name: "Financial Reports" },
          { name: "Non-Financial Reports" },
          { name: "Miscellaneous Reports" }
        ]
      },
      {
        name: "Global Settings"
      },
      {
        name: "Branch Settings"
      },
      {
        name: "Setup Codes",
        subOptions: [
          { name: "Module Setup" },
          { name: "Credit Setup" }
        ]
      },
      {
        name: "GL Account Setup"
      },
      {
        name: "Customer Account Setup"
      },
      {
        name: "Exchange Rates"
      }
    ]
  },
  {
    title: "TBML Reports",
    color: "#8e44ad",
    options: [
      { name: "Report As Per Country" },
      { name: "Report As Per HSCode" },
      { name: "Report As Per Country" },
      // { name: "Report As Per HSCode" }
    ],
    dropdown: [
      {
        name: "Report As Per Country"
      },
      {
        name: "Report As Per HSCode"
      },
      {
        name: "Report As Per Country"
      },
      {
        name: "Report As Per HSCode"
      }
    ]
  },
  {
    title: "Islamic Conversion Report",
    color: "#8e44ad",
    options: [
      { name: "Under Migration Report" },
      { name: "Migrated Branches Report" },
      { name: "Migration Detail Report" },
      // { name: "Reason Report on confirm to convert" },
      // { name: "Log Report" },
      // { name: "Modified Consent Report" }
    ],
    dropdown: [
      {
        name: "Under Migration Report"
      },
      {
        name: "Migrated Branches Report"
      },
      {
        name: "Migration Detail Report"
      },
      {
        name: "Reason Report on confirm to convert"
      },
      {
        name: "Log Report"
      },
      {
        name: "Modified Consent Report"
      }
    ]
  },
  // {
  //   title: "Biller Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "CRM Advance Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Advance Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "EKYC Review Turn Over Report",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Online Statement",
    color: "#8e44ad",
    options: [
      { name: "Online Statement of Customer A/C" },
      { name: "List of Customer A/C Transactions" },
      { name: "Online Statement of GL A/C" }
    ],
    dropdown: [
      {
        name: "Online Statement of Customer A/C"
      },
      {
        name: "List of Customer A/C Transactions"
      },
      {
        name: "Online Statement of GL A/C"
      }
    ]
  },
  // {
  //   title: "CIF Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "CIM Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "General",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title:"Banker's Cheque",
    color: "#8e44ad",
    options: [
      { name: "BC Request Inquiry" },
      { name: "BC Register" }
    ],
    dropdown: [
      {
        name: "BC Request Inquiry",
        subOptions: []
      },
      {
        name: "BC Register",
        subOptions: []
      }
    ]

  },
  {
    title:"Call Deposit Receipt",
    color: "#8e44ad",
    options: [
      { name: "CDR General" },
      { name: "CDR Register" }
    ],
    dropdown: [
      {
        name: "CDR General",
        subOptions: []
      },
      {
        name: "CDR Register",
        subOptions: []
      }
    ]

  },
  {
    title:"Demand Draft",
    color: "#8e44ad",
    options: [
      { name: "DD General" },
      { name: "DD Advice" },
      { name: "DD Register" }
    ],
    dropdown: [
      {
        name: "DD General",
        subOptions: []
      },
      {
        name: "DD Advice",
        subOptions: []
      },
      {
        name: "DD Register",
        subOptions: []
      }
    ]

  },
  // {
  //   title: "IBCA/IBDA",
  //   color: "#8e44ad",
  //   options: [
     
  //   ],
  //   dropdown: [
      
  //   ]
  // },
  {
    title: "Pay Order",
    color: "#8e44ad",
    options: [
      { name: "PO General" },
      { name: "PO Register" } 
    ],
    dropdown: [
      {
        name: "PO General",
        subOptions: []
      },
      {
        name: "PO Register",
        subOptions: []
      }
    ]

  },
  // {
  //   title: "Standing Instructions",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "TDR Generalized Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Term Deposit Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "RTGS Inquiry",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Home Remittance",
    color: "#8e44ad",
    options: [
      { name: "Account Transfer Reports" },
      { name: "Cash Over Counter" }
    ],
    dropdown: [
      {
        name: "Account Transfer Reports",
        subOptions: [
          { name: "Compliance Report" },
          { name: "Exchange Company Account Transfer Report" },
          { name: "Proceeds Realization Certificate" },
          { name: "Registered Agents" },
          { name: "Transaction Processed STP" },
          { name: "Transaction History" },
          { name: "Name Amendment Report" }
        ]
      },
      {
        name: "Cash Over Counter"
      }
    ]
  },
  {
    title: "ORR/FRR",
    color: "#8e44ad",
    options: [
      { name: "MIS Report" },
      { name: "MIS Report Detailed" }
    ],
    dropdown: [
      {
        name: "MIS Report"
      },
      {
        name: "MIS Report Detailed"
      }
    ]
  },
  // {
  //   title: "Conversion Feedback Report",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Pool Management",
    color: "#8e44ad",
    options: [
      { name: "Pool Monthly Report" },
      { name: "Asset Monthly Report" },
      { name: "Monthly Reports" },
      // { name: "Liability Monthly Reports" },
      // { name: "Pool Balancing Report" },
      // { name: "Musharaka Pool Report" },
      // { name: "Inter Pool Transfer of Monthly Report" },
      // { name: "Asset Allocation Daily Report" },
      // { name: "Liablity Allocation daily Report" },
      // { name: "Equity Allocation Daily Report" },
      // { name: "Import Process Report" },
      // { name: "Customer Wise Mudarba Pool Report" }
    ],
    dropdown: [
      {
        name: "Pool Monthly Report"
      },
      {
        name: "Asset Monthly Report"
      },
      {
        name: "Monthly Reports"
      },
      {
        name: "Liability Monthly Reports"
      },
      {
        name: "Pool Balancing Report"
      },
      {
        name: "Musharaka Pool Report"
      },
      {
        name: "Inter Pool Transfer of Monthly Report"
      },
      {
        name: "Asset Allocation Daily Report"
      },
      {
        name: "Liablity Allocation daily Report"
      },
      {
        name: "Equity Allocation Daily Report"
      },
      {
        name: "Import Process Report"
      },
      {
        name: "Customer Wise Mudarba Pool Report"
      }
    ]
  },
  {
    title: "FIU Watchlist",
    color: "#8e44ad",
    options: [
      { name: "Audit Trail" }
    ],
    dropdown: [
      {
        name: "Audit Trail"
      }
    ]
  },
  {
    title: "Ekyc MIS Reports",
    color: "#8e44ad",
    options: [
      { name: "Pending Cases with Aging" },
      { name: "Near/Over Due" },
      { name: "MIS Report" },
      // { name: "Actual/Expected Turnover Comparison Report(Beta)" },
      // { name: "Zone Area wise Summary" },
      // { name: "Suggested Review" },
      // { name: "Historic Data" }
    ],
    dropdown: [
      {
        name: "Pending Cases with Aging"
      },
      {
        name: "Near/Over Due"
      },
      {
        name: "MIS Report"
      },
      {
        name: "Actual/Expected Turnover Comparison Report(Beta)"
      },
      {
        name: "Zone Area wise Summary"
      },
      {
        name: "Suggested Review"
      },
      {
        name: "Historic Data"
      }
    ]
  },
  // {
  //   title: "Cheque Book Management Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "LESCO Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Advance Reports",
    color: "#8e44ad",
    options: [
      { name: "Auto Lease Recovery" },
      { name: "Auto Rate Review" },
      { name: "Deal Rate Revision" },
      // { name: "Istisna Rate Revision" },
      // { name: "Lease Rate Revision" },
      // { name: "Lease Register" },
      // { name: "LG Due/Overdue Report" },
      // { name: "Musawama Rate Revision" },
      // { name: "POST RM Review" },
      // { name: "Refinance Reports" },
      // { name: "Running Musharaka Review" }
    ],
    dropdown: [
      {
        name: "Auto Lease Recovery"
      },
      {
        name: "Auto Rate Review"
      },
      {
        name: "Deal Rate Revision"
      },
      {
        name: "Istisna Rate Revision"
      },
      {
        name: "Lease Rate Revision"
      },
      {
        name: "Lease Register"
      },
      {
        name: "LG Due/Overdue Report"
      },
      {
        name: "Musawama Rate Revision"
      },
      {
        name: "POST RM Review"
      },
      {
        name: "Refinance Reports"
      },
      {
        name: "Running Musharaka Review"
      }
    ]
  },
  {
    title: "CPW",
    color: "#8e44ad",
    options: [
      { name: "Customer Profitability Worksheet (CPW)" },
      { name: "CPW Summary" }
    ],
    dropdown: [
      {
        name: "Customer Profitability Worksheet (CPW)"
      },
      {
        name: "CPW Summary"
      }
    ]
  },
  // {
  //   title: "Generalized Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Markup",
    color: "#8e44ad",
    options: [
      { name: "Review Markup" },
      { name: "Markup Latest Position" }
    ],
    dropdown: [
      {
        name: "Review Markup"
      },
      {
        name: "Markup Latest Position"
      }
    ]
  },
  // {
  //   title: "Miscellaneous Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Register",
    color: "#8e44ad",
    options: [
      { name: "Credit Loan Register" },
      { name: "Delivery Order Register" },
      // { name: "Leasing" },
      // { name: "LG Register" },
      // { name: "PUT Option Register" }
    ],
    dropdown: [
      {
        name: "Credit Loan Register"
      },
      {
        name: "Delivery Order Register"
      },
      {
        name: "Leasing"
      },
      {
        name: "LG Register"
      },
      {
        name: "PUT Option Register"
      }
    ]
  },
  // {
  //   title: "Voucher",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Generalized Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "MIS Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "SBP Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "PICH Reports",
    color: "#8e44ad",
    options: [
      { name: "PICH Report" },
      { name: "PRC PICH Report" }
    ],
    dropdown: [
      {
        name: "PICH Report"
      },
      {
        name: "PRC PICH Report"
      }
    ]
  },
  {
    title: "Account Verification",
    color: "#8e44ad",
    options: [
      { name: "Account Verification" },
      { name: "Account Verification Updated" }
    ],
    dropdown: [
      {
        name: "Account Verification"
      },
      {
        name: "Account Verification Updated"
      }
    ]
  },
  // {
  //   title: "SIDA Reports",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Auto Hold/Unhold Report",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "ATM File Pending Records",
  //   color: "#8e44ad",
  //   options: [],
  //   dropdown: []
  // }
]

export const customerProfileItems = [
  {
    title: "User Group",
    color: "#059669",
    options: [
      { name: "Add" },
      { name: "Delete" },
      { name: "Inquire" },
      { name: "List of Users" }
    ],
    dropdown: [
      {
        name: "Add"
      },
      {
        name: "Delete"
      },
      {
        name: "Inquire"
      },
      {
        name: "List of Users"
      }
    ]
  },
  

  {
    title: "User Profile",
    color: "#059669",
    options: [
      {name:"Online UPM"},
      { name: "Create" },
      { name: "Modify" },
      { name: "Delete" },
      // { name: "Enable" },
      // { name: "Disable" },
      // { name: "Re-Certify" },
      // { name: "Inquire" },
      // { name: "Change User IP address" },
      // { name: "Inter Branch User" },
      // {name:"Inter Branch Profile Setup"}
    ],
    dropdown: [
      {name:"Online UPM",
        subOptions:[
          { name: "Create" },
          { name: "Modify" },
          { name: "Authorized" },
          { name: "Sign Off User" },
          { name: "Enable" },
          { name: "Disable" },
          { name: "Re-Certify" },
          { name: "Inquire" },
          { name: "Generate Code" }
        ]
      },
      {
        name: "Create"
      },
      {
        name: "Modify"
      },
      {
        name: "Delete"
      },
      {
        name: "Enable"
      },
      {
        name: "Disable"
      },
      {
        name: "Re-Certify"
      },
      {
        name: "Inquire"
      },
      {
        name: "Change User IP address"
      },
      {
        name: "Inter Branch User"
      },
      {
        name: "Inter Branch Profile Setup",
        subOptions: [
          { name: "Profile Query Setup",
            subOptions: [
              { name: "Add" },
              { name: "Modify" }
            ]
           },
          { name: "Profile User Setup" },
          { name: "Profile User Inquiry" }
        ]
      },
      {
        name:"DB User Profile",
        subOptions:[
          { name: "Add" },
          { name: "Change" },
          { name: "Delete" },
          { name: "Inquire" }
        ]
      }
    ]
  },

 
  {
    title: "Sign Off",
    color: "#059669",
    options: [
      { name: "A User" },
      { name: "All Users" },
      { name: "A Branch" },
      { name: "All Branches" }
    ],
    dropdown: [
      {
        name: "A User"
      },
      {
        name: "All Users"
      },
      {
        name: "A Branch"
      },
      {
        name: "All Branches"
      }
    ]
  },
  // {
  //   title: "Reset User Password",
  //   color: "#059669",
  //   options: [],
  //   dropdown: []
  // }
]

export const setupItems = [
  // {
  //   title: "SPECIAL SETUP FINANCIAL",
  //   color: "#7c3aed",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Global Settings",
    color: "#7c3aed",
    options: [
      { name: "Country" },
      { name: "Forex Setup" },
      { name: "Province" },
      // { name: "District" },
      // { name: "City" },
      // { name: "Zone" },
      // { name: "Area" },
      // { name: "Bank" },
      // { name: "Branch" },
      // { name: "Utility Company" },
      // { name: "Close Online Check List" }
    ],
    dropdown: [
      {
        name: "Country",
        subOptions: [
          {
            name: "Country information",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "External Rating",
            options: [
              { name: "Inquire" }
            ]
          }
        ]
      },
      {
        name: "Forex Setup",
        subOptions: [
          {
            name: "Country",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Department",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Purpose",
            options: [
              { name: "Inquire" }
            ]
          }
        ]
      },
      {
        name: "Province",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "District",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "City",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Zone",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Area",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Bank",
        subOptions: [
          {
            name: "Bank Information",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "External Rating",
            options: [
              { name: "Inquire" }
            ]
          }
        ]
      },
      {
        name: "Branch",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Utility Company",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Close Online Check List"
      }
    ]
  },
    {
    title: "SPECIAL SETUP NON FINANCIAL",
    color: "#7c3aed",
    options: [
      {name:"NPFF1"},
      {name:"FILER DATA AIK - SETUP"},
      // {name:"FILER DATA FBR - SETUP"},
      // {name:"IMDSETUP AUTHORIZATION"},
      // {name:"NPFFI-SETUP SCREEN"},
      // {name:"PRINT SLIP"},
      // {name:"SETUP SCREEN - AUTHORIZE"}


      
    ],
    dropdown: [
      {name:"NPFF1",
        subOptions:[
          { name: "Code Generation Screen" },
          { name: "Setup Screen" },
          { name: "Inquiry" }
        ]
      },
      {name:"FILER DATA AIK - SETUP"},
      {name:"FILER DATA FBR - SETUP"},
      {name:"IMDSETUP AUTHORIZATION"},
      {name:"NPFFI-SETUP SCREEN"},
      {name:"PRINT SLIP"},
      {name:"SETUP SCREEN - AUTHORIZE"}
    ]
  },
  {
    title: "Setup Codes",
    color: "#7c3aed",
    options: [
      { name: "Scheduled Charges" },
      { name: "Facility Type" },
      { name: "Depreciation Rate" },
      // { name: "Asset Details" },
      // { name: "Insurance Company" },
      // { name: "Risk Category" },
      // { name: "Risk Type" },
      // { name: "Security Type" },
      // { name: "Title/Charge Over Security" },
      // { name: "Security item" },
      // { name: "Security Item Against Charge Over Security" },
      // { name: "Document" },
      // { name: "Limit Type" },
      // { name: "Credit Codes" }
    ],
    dropdown: [
      {
        name: "Scheduled Charges",
        subOptions: [
          { name: "Inquire" },
          {
            name: "Bank's Charges",
            options: [
              { name: "Inquire" }
            ]
          }
        ]
      },
      {
        name: "Facility Type",
        subOptions: [
          {
            name: "Major Facility Type",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Sub Facility Type",
            options: [
              { name: "Inquire" }
            ]
          }
        ]
      },
      {
        name: "Depreciation Rate",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Asset Details",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Insurance Company",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Risk Category",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Risk Type",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Security Type",
        subOptions: [
          { name: "Inquire" },
          {
            name: "Facility Assign",
            options: [
              { name: "Inquire" }
            ]
          }
        ]
      },
      {
        name: "Title/Charge Over Security",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Security item",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Security Item Against Charge Over Security",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Document",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Limit Type",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Credit Codes",
        subOptions: [
          {
            name: "DSCs",
            options: [
              { name: "DSCs Rate", subOptions: [{ name: "Inquire" }] },
              { name: "Lost DSCs", subOptions: [{ name: "Inquire" }] }
            ]
          },
          {
            name: "Cost of Funds",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Muccadam",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Facilities Purpose",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Type of Property",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Stock Exchange",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Stock Exchange Index",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Valuation Company",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Clearing & Forwarding Agent",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Rating Agency",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Internal Rating",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "External Rating",
            options: [
              { name: "Inquire" }
            ]
          },
          {
            name: "Scrip Sector",
            options: [
              { name: "Add" },
              { name: "Change" },
              { name: "Delete" },
              { name: "Inquire" }
            ]
          },
          {
            name: "Unit",
            options: [
              { name: "Inquire" }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Currency",
    color: "#7c3aed",
    options: [
      { name: "Currency Information" },
      { name: "External Rating" }
    ],
    dropdown: [
      {
        name: "Currency Information",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "External Rating",
        subOptions: [
          { name: "Inquire" }
        ]
      }
    ]
  },
  {
    title: "Condition Code",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  {
    title: "Department",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  {
    title: "Document",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  {
    title: "Transaction Code",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  {
    title: "Cheque Book Leaves",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  {
    title: "Reason",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  {
    title: "Markup Formula & Review Formula Linkage",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  {
    title: "Special Receipt Company Setup",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  {
    title: "Special Receipt Dealer Setup",
    color: "#7c3aed",
    options: [
      { name: "Inquire" }
    ],
    dropdown: [
      {
        name: "Inquire"
      }
    ]
  },
  // {
  //   title: "EXECUTE SEQUENCES",
  //   color: "#7c3aed",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "GL A/C Setup",
    color: "#7c3aed",
    options: [
      { name: "Iden" },
      { name: "Main Head" },
      { name: "Sub Head 1" },
      // { name: "Sub Head 2" },
      // { name: "Open GL A/C" },
      // { name: "Online GL Settlement" },
      // { name: "GL A/C Accrual" },
      // { name: "GL A/C Rate" },
      // { name: "GL A/C Limit" }
    ],
    dropdown: [
      {
        name: "Iden",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Main Head",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Sub Head 1",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Sub Head 2",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Open GL A/C",
        subOptions: [
          { name: "Change" },
          { name: "Add" },
          { name: "Inquire" }
        ]
      },
      {
        name: "Online GL Settlement",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "GL A/C Accrual",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "GL A/C Rate",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "GL A/C Limit",
        subOptions: [
          { name: "Inquire" }
        ]
      }
    ]
  },
  {
    title: "PRINT SETUP",
    color: "#7c3aed",
    options: [
      { name: "Add" },
      { name: "Delete" },
      { name: "Modify" },
      // { name: "Inquiry" }
    ],
    dropdown: [
      {
        name: "Add"
      },
      {
        name: "Delete"
      },
      {
        name: "Modify"
      },
      {
        name: "Inquiry"
      }
    ]
  },
  {
    title: "Customer A/C Setup",
    color: "#7c3aed",
    options: [
      { name: "A/C Type" },
      { name: "A/C Nature" },
      { name: "Customer Category" },
      // { name: "Major Classification" },
      // { name: "Sub Classification" }
    ],
    dropdown: [
      {
        name: "A/C Type",
        subOptions: [
          { name: "Change" },
          { name: "Add" },
          { name: "Inquire" },
          {
            name: "Pft/Mkup Rate",
            options: [
              { name: "Inquire" }
            ]
          }
        ]
      },
      {
        name: "A/C Nature",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Customer Category",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Major Classification",
        subOptions: [
          { name: "Inquire" }
        ]
      },
      {
        name: "Sub Classification",
        subOptions: [
          { name: "Inquire" }
        ]
      }
    ]
  },
  {
    title: "MiddleWare",
    color: "#7c3aed",
    options: [
      { name: "Inquiry" },
      { name: "UBPS Report" }
    ],
    dropdown: [
      {
        name: "Inquiry"
      },
      {
        name: "UBPS Report"
      }
    ]
  },
  {
    title: "Currency Exchange Rate",
    color: "#7c3aed",
    options: [
      { name: "Rate 1" },
      { name: "Rate 2" },
      { name: "Rate R" }
    ],
    dropdown: [
      {
        name: "Rate 1",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Inquire" }
        ]
      },
      {
        name: "Rate 2",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Inquire" }
        ]
      },
      {
        name: "Rate R",
        subOptions: [
          { name: "Add" },
          { name: "Change" },
          { name: "Inquire" }
        ]
      }
    ]
  },
  // {
  //   title: "Profit Post Date Setup",
  //   color: "#7c3aed",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Remittance Instrument Control",
  //   color: "#7c3aed",
  //   options: [],
  //   dropdown: []
  // }
 
]

export const backOfficeItems = [
  {
    title:"BO Core Processes",
    color: "#0b5380",
    options: [
      {name:"Close Online"},
      {name:"End of Day"},
      {name:"Start of Day"},
      {name:"Year End"},
      {name:"Re-calculation of Accrual"}
    ],
    dropdown: [
      {
        name:"Close Online"
      },
      {
        name:"End of Day"
      },
      {
        name:"Start of Day"
      },
      {
        name:"Year End"
      },
      {
        name:"Re-calculation of Accrual"}
      
    ]
  },

  // {
  //   title: "Start of Day",
  //   color: "#0b5380",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Signed-On Users",
  //   color: "#0b5380",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Close Online",
  //   color: "#0b5380",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "Batch Status",
  //   color: "#0b5380",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "End of Day",
  //   color: "#0b5380",
  //   options: [],
  //   dropdown: []
  // },
  // {
  //   title: "System Status",
  //   color: "#0b5380",
  //   options: [],
  //   dropdown: []
  // },
  {
    title: "Special Processes",
    color: "#0b5380",
    options: [
      { name: "BILLED FILL UPLOAD" },
      { name: "R-LOG Time Extend" },
      { name: "Cancel Posted Transaction Inquiry" },
    //   { name: "Zakat Deduction" },
    //   { name: "Savings Pft/Mkup Accrual" },
    //   { name: "Re-Calculation of Accrual" },
    //   { name: "Offline Transactions" },
    //   { name: "Online Outward Clearing Settlement" },
    //   { name: "Debit Stop removal from ATM A/Cs" },
    //   { name: "Year End Process" },
    //   { name: "Archival of Signature Information" },
    //   { name: "Currency Exchange Rates" },
    //   { name: "Markup/Items Rates" }
     ],
    dropdown: [
      { name: "BILLED FILL UPLOAD" },
      { name: "R-LOG Time Extend" },
      { name: "Cancel Posted Transaction Inquiry" },
      { name: "Zakat Deduction" },
      { name: "Savings Pft/Mkup Accrual" },
      // { name: "Re-Calculation of Accrual" },
      {
        name: "Offline Transactions",
        subOptions: [
          {
            name: "General SAF Settlement",
           
          },
          {
            name: "Inquire",
            
          }
        ]
      },
      { name: "Online Outward Clearing Settlement",
        subOptions: [
          { name: "Settlement" },
          { name: "Inquire" }
        ]
          
       },
      { name: "Debit Stop removal from ATM A/Cs" },
      // { name: "Year End Process" },
      {
        name: "Archival of Signature Information",
        subOptions: [
          { name: "Activity Log" },
          { name: "Cancelled Signatures" }
        ]
      },
      {
        name: "Currency Exchange Rates",
        subOptions: [
          {
            name: "Rate 1",
            options: [
              { name: "Add" },
              { name: "Change" },
              { name: "Inquire" }
            ]
          },
          {
            name: "Rate 2",
            options: [
              { name: "Add" },
              { name: "Change" },
              { name: "Inquire" }
            ]
          },
                    { name: "Upload from File" },
                              { name: "Download from Central Server" },



        ]
      },
      {
        name: "Markup/Items Rates",
        subOptions: [
          { name: "Stock Exchange Rates",
            options: [
              {name:"Upload from File"},
              {name:"Download from Central Server"}
            ]
           },
          { name: "Download Markup Rates" }
        ]
      },
      { name: "Download Centralized Bank Setup" },
      { name: "Download Cost of Whd Tax" },
      { name: "Download PDC Penalty" },
      { name: "Dormant A/c-Marking" },
      { name: "Dormant A/c-Charges" },
      { name: "C. I. B. Process / CBR Worksheet" },
      { name: "C. I. B. Process / OLD Structure 1" },
      { name: "C. I. B. Process / NEW Structure 1" },
      { name: "Data Backup & Recovery" },
      { name: "Over Size Signature Report" },
      { name: "Database Restore" },
      { name: "IB Transactions Del File" },

      {
        name: "Monthly Statement of Account",
        subOptions: [
          { name: "Stmt_Import Data Files" },
          { name: "Stmt_Generate LSVU File" },
          { name: "Stmt_Generate TCS File" },
          { name: "View & Print PDF Statements" }
        ]
      },
      {
        name: "POS Acquiring",
        subOptions: [
          {
            name: "Setup",
            options: [
              {
                name: "Merchant Setup",
                subOptions: [
                  { name: "Add Merchant" },
                  { name: "Update Merchant Before Authorization" },
                  { name: "Update/Maintain Merchant" },
                  { name: "Authorize Merchant" },
                  { name: "CPR & Deposit Date Setup" },
                  { name: "Authorize CPR" }
                ]
              },
              {
                name:"Payment Method Setup",
              },
              {
                name:"IBFT Mapping Setup",
              },
              {
                name:"GL Setup"
              }
            ]
          },
          { name: "Process" },
          { name: "Reports" },
          { name: "IBFT Reattempt" },
          {name:"File Setup"},
          {
        name: "Dashboard Tool",
        subOptions: [
          {
            name: "Report Upload",
            options: [
              { name: "Upload Aquirer Extract" },
              { name: "Upload Merchant Extract" },
              { name: "Upload TRD File" },
              { name: "Upload MPY File" }
            ]
          },
         
        ]
      },
       { name: "Report Status" },
          { name: "Reports" },
          { name: "IReports" }
        ]
      },
      
     
      { name: "RRD Settlements" },
      { name: "Base 2 Settlements" },
      {
        name: "GEM",
        subOptions: [
          {
            name: "GEM Setup",
            options: [
              { name: "File Setup" },
              { name: "Activity Code" },
              { name: "File Setup /Activity Code Mapping" }
            ]
          },
          { name: "Process" },
          { name: "Reports" }
        ]
      },
      { name: "Keenu NetConnect" },
      { name: "ESB Service Synchronization" },
      { name: "FCDB Service Synchronization" },
      { name: "PSW Settlement" },
      { name: "Condition Marking" },
      { name: "RAAST Registration" ,
        subOptions: [{
          name: "RAAST ID Creation"
        }]
      },
      {
        name: "CIF Management",
        subOptions: [
          { name: "CIF Create / Update Process" },
          { name: "Sync CIF" },
          {
            name: "CIF Surround System Utilities",
            options: [
              { name: "Import IRIS Data For CIF" },
              { name: "Import Credit Card Data For CIF" },
              { name: "Import Locker Data For CIF" },
              { name: "Beneficial Owner and Fund Provider Data For CIF" }
            ]
          }
        ]
      },
      { name: "MPG Settlement" },
      {
        name: "CBD Settlement",
        subOptions: [
          { name: "Upload File" },
          { name: "Authorize" },
          { name: "Report" }
        ]
      },
      { name: "Finance Centralized FED" },
    
    ]
  },
    {
    title:"Other Processes",
    color: "#0b5380",
    options: [
      {name:"Batch Status"},
      {name:"Signed-On Users"},
      {name:"System Status"},
      // {name:"ITRS"}
    ],
    dropdown: [
      {   
    name:"Batch Status"
      },
      {
    name:"Signed-On Users"
      },
      {
    name:"System Status"
      },
      {
    name:"ITRS",
    subOptions:[
      {name:"Generate Data Old"},
      {name:"Generate Data"}
    ]

      }
    ]
  },
//   {
//     title:"ITRS",
//     color: "#0b5380",
//     options:[
//        {name:"Generate Data Old"},
//       {name:"Generate Data"}]
//       ,
//     dropdown:[
//       {
//         name:"Generate Data Old"
//       },
//       {
//         name:"Generate Data"
//       }

// ]
//   }
]

export const menueCardItems=[
  {heading:"User Profile Management Group (UPM)",
    subheading:"View and manage user details",
    buttons:[
      "User Group", "User Profile", "Sign Off" , "Reset User Password"
    ]
  },
  {
    heading:"General Inquiries",
    subheading:"Inquiries related to customers,accounts and instruments",
    buttons:[ "Customer Profile", "General Ledger", "Exchnage Rates","Instrumnet Inquiry"]
  }
  
]

export const loanOriginationAndManagementItems = [
  {
    title:" Origination",
    color:"#b45309",
    options:[
      {name:"Lead Asssignment"},
      {name:"Assigned Leads"},
      {name:"Loan Application Submission",routeName:"LoanApplicationSubmission"},
      {name:"Application Authorization"},
    ],
    dropdown:[
      {
        name:"Lead Asssignment" 
      },
      {
        name:"Assigned Leads"
      },
      { name:"Loan Application Submission", 
        routeName:"LoanApplicationSubmission"
      },
      {
        name:"Application Authorization"
      }
    ]
   
  },
  // {
  //   title:"Lead Management",
  //   color:"#b45309",
  //   options:[
  //     {name:"Lead Assigment"},
  //     {name:"Lead Authorization"},
  //   ],
  //   dropdown:[
  //     {
  //       name:"Lead Assigment"
  //     },
  //     {
  //       name:"Lead Authorization"
  //     }
  //   ]
  // },
  {
    title:" Approval",
    color:"#b45309",
    options:[
      {name:"Application Authorizer"},
      {name:"Telephonic Verification Processor"},
      { name:"Credit Analyst"},
      // {name :"Data Check Verification"}
    ],
    dropdown:[
      {
        name:"KYC, CPW,Suitability Assessment Checklist"
      },
      {
        name:"FIU/ Debarred List Verfications"
      },
      {
        name:"ECIB/NADRA Verifications"
      },
      {
        name:"Data Check Verification"
      },
      {
        name:"Application Authorizer"
      },
      {
        name:"Telephonic Verification ",
        subOptions:[
          {
            name:"Verification Processor"
          },
          {
            name:"Verification Verifier"
          }
        ]
      },
      
      {
        name:"Physical Verification ",
        subOptions:[
          {
            name:"Verification Processor"
          },
          {
            name:"Verification Verifier"
          }
        ]
      },
   
      {
        name:"Credit Analyst"
      },
      {
        name:"CBD-CC"
      },
      {
        name:"SME Approvals"
      },
      {
        name:"CCC Approvals"
      },
      {
        name:"Asset Valuation"
      }
    ]
  },
  {
    title:" Disbursement",
    color:"#b45309",
    options:[
      {name:"Review Documents"},
      {name:"Disbursement Authorization"},
    ],
    dropdown:[
      {name:"Review Case"},
      {name:"Legal Documents Generation"},
      {name:"Dealer's Quotation"},
      {name:"Cheque Information"},
      {name:"Review Documents"},
      // {name:"Disbursement Instructions"},
      {name:"Limit Feeding"},
      {name:" Disbursement",
        subOptions:[
          {name:"Disbursement Instructions"},
          {name:"Loan Disbursement"},
          {name:"Loan Disbursement Authorizer"},
        ]
      },
      // {name:"Loan Disbursement Authorize"},
      {name:"Banker's Cheque"},
      {name:"Purchase Order"},
      {name:"CAD Document Checklist"},
      {name:"Vehicle ",
        subOptions:[
          {name:"Vehicle Arrival"},
          {name:"Vehicle Info"},
          {name:"Vehicle Registeration"},
        ]

      },
      {name:"Insurance ",
        subOptions:[
          {name:"Insurance Coverage"},
          {name:"Insurance Payment"},
        ]
      },
      // {name:"Vehicle Registration"},
      // {name:"Insurance Payment"},
      {name:"Delivery Order"}
    ]
  },
  {
    title:"Recovery & Settlement",
    color:"#b45309",
    options:[
      {name:"DPD-1"},
      {name:"DPD-2"},
      {name:"DPD-3"},
      // {name:"Loan Repayment"},
      // {name:"Repayment Authorization"},
      // {name:"Rescheduling "},
      // {name:"Rescheduling Authorization"},
    ],
    dropdown:[
      {name:"Insurance Claims"},
      {name:"Insurance Details"},
      {name:"Tenure Change"},
      {name:"Insurance Payment Reversal"},
      {name:"Insurance Change Authorizer"},
      {name:"Balloon Payment"},
      {name:"Limit Cancel"},
      {name:"DPD",
        subOptions:[
          {name:"DPD-1"},
          {name:"DPD-2"},
          {name:"DPD-3"},
        ]
      },
      // {name:"DPD-1"},
      // {name:"DPD-2"},
      // {name:"DPD-3"},
      {name:"Vehicle ",
        subOptions:[
          {name:"Vehicle Repossession"},
           {name:"EAMU Assignment"},
      {name:"Asset Assessment"},
      {name:"Repossessed Vehicle Release"},
      {name:"Bid Registration"},
      {name:"Sale of Repossessed Vehicle"},
        ]
      },
      // {name:"EAMU Assignment"},
      // {name:"Asset Assessment"},
      // {name:"Repossessed Vehicle Release"},
      // {name:"Bid Registration"},
      // {name:"Sale of Repossessed Vehicle"},
      {name:"Lawyer"}
    ]
  },
  {
    title:"Loan Management",
    color:"#b45309",
    options:[
      {name:"Balloon Payment"},
      {name:"Settlement"},
      {name:"Loan Product Inquiry"}
    ],
    dropdown:[
       {name:"Balloon Payment"},
      {name:"Settlement"},
 
      {name:"Loan Product Inquiry"},

    
    ]
  },
  {
    title:"Asset Management",
    color:"#b45309",
    options:[
      {name:"NPL Reporting"},
      {name:"Charge-off"},
      {name:"Write-off"},

    ],
    dropdown:[
       {name:"NPL Reporting"},
       {name:"Notify Customer"},
      {name:"Charge-off"},
      {name:"Write-off"},
      {name:"Litigation"},
      {name:"Approval Rquest"},
      {name:"Approval Request Authorizer"},
    ]
  },
  

  
  
]


export const loanOriginationMenuItems = [
  {
    name: "Consumer Loans",
    icon: "pi-home",
    iconSrc: iconNavbarLoanOrigination,
    backgroundColor: "#2dbe60",
    subCategories: " ",
    routeName: "ConsumerLoan",
  },
  {
    name: "Corporate      SME, Agri Loans",
    icon: "pi-building-columns",
    iconSrc: iconNavbarLoanOrigination,
    backgroundColor: "#2dbe60",
    subCategories: "10",
    routeName: "SMEAgriCorporateLoan",
  },
];

export const originationItems=[
  {
    title:"Lead Assignment",
    color:"#b45309",
    options:[],
    dropdown:[]
  },
  {
    title:"Assigned Leads",
    color:"#b45309",
    options:[],
    dropdown:[]
  },
  {
    title:"Loan Application Submission",
    color:"#b45309",
    options:[],
    dropdown:[]
  },
  {
    title:"Application Authorization",  
    color:"#b45309",
    options:[]  
  }
]

export const approvalItems=[
  {
    title:"KYC, CPW,Suitability Assessment Checklist",
    color:"#b45309",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"FIU/ Debarred List Verfications",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"ECIB/NADRA Verifications",
    color:"#16a34a",
    pendingTasks: 5,
    options:[]
  },
  {
    title:"Data Check Verification",
    color:"#ec4899",
    pendingTasks: 4,
    options:[]
  },
  {
    title:"Application Authorizer",
    color:"#16a34a",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"Telephonic Verification Processor",
    color:"#16a34a",
    pendingTasks: 7,
    options:[]
  },
  {
    title:"Telephonic Verification Verifier",
    color:"#16a34a",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"Physical Verification Processor",
    color:"#ec4899",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Physical Verification Verifier",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Credit Analyst",
    color:"#16a34a",
    pendingTasks: 4,
    options:[]
  },
  {
    title:"CBD-CC",
    color:"#16a34a",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"SME Approvals",
    color:"#ec4899",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"CCC Approvals",
    color:"#16a34a",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"Asset Valuation",
    color:"#16a34a",
    pendingTasks: 3,
    options:[]
  },
]

export const disbursementItems=[
  {
    title:"Review Case",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Legal Documents Generation",
    color:"#16a34a",
    pendingTasks: 4,
    options:[]
  },
  {
    title:"Dealer's Quotation",
    color:"#ec4899",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"Cheque Information",
    color:"#16a34a",
    pendingTasks: 6,
    options:[]
  },
  {
    title:"Review Documents",
    color:"#16a34a",
    pendingTasks: 5,
    options:[]
  },
  {
    title:"Disbursement Instructions",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Limit Feeding",
    color:"#ec4899",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"Loan Disbursement",
    color:"#16a34a",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"Loan Disbursement Authorize",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Banker's Cheque",
    color:"#16a34a",
    pendingTasks: 6,
    options:[]
  },
  {
    title:"Purchase Order",
    color:"#ec4899",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"CAD Document Checklist",
    color:"#16a34a",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"Vehicle Arrival",
    color:"#16a34a",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"Vehicle Info",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Insurance Coverage",
    color:"#ec4899",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"Vehicle Registration",
    color:"#16a34a",
    pendingTasks: 6,
    options:[]
  },
  {
    title:"Insurance Payment",
    color:"#16a34a",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"Delivery Order",
    color:"#16a34a",
    pendingTasks: 4,
    options:[]
  },
]

export const recoveryItems=[
  {
    title:"Insurance Claims",
    color:"#16a34a",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"Insurance Details",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Tenure Change",
    color:"#ec4899",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Insurance Payment Reversal",
    color:"#16a34a",
    pendingTasks: 4,
    options:[]
  },
  {
    title:"Insurance Change Authorizer",
    color:"#16a34a",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"Balloon Payment",
    color:"#16a34a",
    pendingTasks: 5,
    options:[]
  },
  {
    title:"Limit Cancel",
    color:"#ec4899",
    pendingTasks: 6,
    options:[]
  },
  {
    title:"DPD",
    color:"#16a34a",
    pendingTasks: 5,
    options:[]
  },
  {
    title:"DPD-1",
    color:"#16a34a",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"DPD-2",
    color:"#16a34a",
    pendingTasks: 4,
    options:[]
  },
  {
    title:"DPD-3",
    color:"#ec4899",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Vehicle Repossession",
    color:"#16a34a",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"EAMU Assignment",
    color:"#16a34a",
    pendingTasks: 3,
    options:[]
  },
  {
    title:"Asset Assessment",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
  {
    title:"Repossessed Vehicle Release",
    color:"#ec4899",
    pendingTasks: 2,
    options:[]
  },
  {
    title:"Bid Registration",
    color:"#16a34a",
    pendingTasks: 5,
    options:[]
  },
  {
    title:"Sale of Repossessed Vehicle",
    color:"#16a34a",
    pendingTasks: 5,
    options:[]
  },
  {
    title:"Lawyer",
    color:"#16a34a",
    pendingTasks: 1,
    options:[]
  },
]

export const loanManagementItems=[
  {
    title:"Balloon Payment",
    color:"#16a34a",
    options:[]
  },
  {
    title:"Settlement",
    color:"#16a34a",
    options:[]
  },
  {
    title:"Loan Product Inquiry",
    color:"#16a34a",
    options:[]
  }
]
