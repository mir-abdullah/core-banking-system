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

export const sidebarItems = [
    { name: 'Main Menu', icon: 'pi-home', iconSrc: iconNavbarMainMenu },
    { name: 'General Banking', icon: 'pi-building-columns', iconSrc: iconNavbarGeneralBanking },
    { name: 'Trade Financing', icon: 'pi-chart-bar', iconSrc: iconNavbarTradeFinance },
    { name: 'Loan Origination & Management', icon: 'pi-money-bill', iconSrc: iconNavbarLoanOrigination },
    { name: 'International Transactions', icon: 'pi-globe', iconSrc: iconNavbarInternationalTransactions },
    { name: 'Customer Onboarding & Management', icon: 'pi-users', iconSrc: iconNavbarCustomerOnboarding },
    { name: 'Treasury Management', icon: 'pi-wallet', iconSrc: iconNavbarTreasuryManagement },
    { name: 'Analytics & Reporting', icon: 'pi-book', iconSrc: iconNavbarAnalyticsReporting },
    { name: 'Back Office Operations', icon: 'pi-briefcase', iconSrc: iconNavbarBackOffice },
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


