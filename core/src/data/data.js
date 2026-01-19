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


