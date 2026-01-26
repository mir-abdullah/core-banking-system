<script setup>
import { ref, inject, computed, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { sidebarItems, sidebarItems2 } from '../data/data';
import { useSidebar } from '../composables/useSidebar';
import sidebarlogo from "../assets/images/icon_navbar_logo.svg";
import toggleIcon from "../assets/images/icon_navbar_toggle.svg";
import teresolLogo from "../assets/images/icon_teresol_colored_large.svg";
import teresolCollapsedLogo from "../assets/images/icon_teresol_colored_small.svg";
import ToggleSwitch from 'primevue/toggleswitch';


const router = useRouter();
const route = useRoute();

const open = ref(null);
const { isCollapsed, toggleSidebar: toggleSidebarState } = useSidebar();

// Mobile sidebar state
const isMobile = ref(false);
const isMobileOpen = inject('isMobileOpen');
const closeMobileSidebar = inject('closeMobileSidebar');

// Computed property for proper reactivity with injected ref
const mobileOpen = computed(() => isMobileOpen?.value ?? false);

const checkIsMobile = () => {
    isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
});

onUnmounted(() => {
    window.removeEventListener('resize', checkIsMobile);
});

const routeMap = {
    'Main Menu': '/dashboard',
    'General Banking': '/general-banking',
    'Trade Financing': '/trade-financing',
    'Loan Origination & Management': '/loan-origination-&-management',
    'International Transactions': '/international-transactions',
    'Customer Onboarding & Management': '/customer-onboarding-&-management',
    'Treasury Management': '/treasury-management',
    'Analytics & Reporting': '/analytics-&-reporting',
    'Back Office Operations': '/back-office-operations',
    'General Inquiry': '/general-inquiry',
    'Settings': '/settings',
};

const toggle = (name) => {
    open.value = open.value === name ? null : name;
};

const toggleSidebar = () => {
    toggleSidebarState();
    if (isCollapsed.value) open.value = null;
};

const getRoutePath = (itemName) => routeMap[itemName] || '/dashboard';

const isActive = (itemName) => {
    const path = getRoutePath(itemName);
    return route.path === path || route.path.startsWith(path + '/');
};

const navigateTo = (itemName) => {
    router.push(getRoutePath(itemName));
    if (isMobile.value) {
        closeMobileSidebar();
    }
};

const handleClick = (item) => {
    if (item.subItems && item.subItems.length) {
        toggle(item.name);
        return;
    }
    navigateTo(item.name);
};
</script>

<template>
    <!-- Mobile overlay backdrop -->
    <div v-if="isMobile && mobileOpen" class="fixed inset-0 bg-black/40 z-40" @click="closeMobileSidebar"></div>

    <!-- Sidebar container -->
    <div :class="[
        isMobile 
            ? 'fixed left-0 top-0 z-50 h-full w-64 transform transition-transform duration-300 ' + 
              (mobileOpen ? 'translate-x-0' : '-translate-x-full')
            : (isCollapsed ? 'w-16 sm:w-20 md:w-24' : 'w-48 sm:w-64 md:w-75') + ' h-full relative transition-all duration-400',
        'bg-white'
    ]">

        <button v-if="!isMobile" class="absolute top-1 right-2 sm:right-3 md:right-4 p-0.5 sm:p-1 rounded-lg cursor-pointer" @click="toggleSidebar">
            <img :src="toggleIcon" alt="Toggle Sidebar" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>

        <div class="flex gap-0.5 sm:gap-1 md:gap-1 items-center px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 ">
            <img :src="sidebarlogo" alt="Bank Logo" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            <h1 v-if="!isCollapsed || isMobile" class="text-blue-500 font-sans font-semibold text-sm sm:text-base md:text-xl">Core Banking System</h1>
        </div>
        <div class="mt-2 sm:mt-3 md:mt-4">
            <ul class="space-y-1 sm:space-y-1.5 md:space-y-2">
                <li v-for="item in sidebarItems" :key="item.name" class="mb-0.5 ">
                    <a href="#" class="flex items-center gap-2 sm:gap-2.5 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-xl md:rounded-2xl transition-all duration-150"
                        :class="[
                            !isMobile && isCollapsed ? 'justify-center' : 'pl-3 sm:pl-4 md:pl-5 pr-2 sm:pr-3 md:pr-4',
                            isActive(item.name)
                                ? 'bg-[#3b82f6] text-white active-pill'
                                : 'text-[#6b7280] hover:bg-[#e8edff]'
                        ]"
                        @click.prevent="handleClick(item)">
                        <img :src="item.iconSrc" :alt="item.name + ' Icon'" class="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                        <span v-if="!isCollapsed || isMobile" class="font-medium text-xs sm:text-sm md:text-sm">{{ item.name }}</span>
                    </a>

                </li>
            </ul>
        </div>
        <div>

            <ul class="mt-20 sm:mt-24 md:mt-30 space-y-1 sm:space-y-1.5 md:space-y-2">
                <li v-for="item in sidebarItems2" :key="item.name" :title="item.name">
                    <a href="#" class="flex items-center gap-2 sm:gap-2.5 md:gap-3 px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-xl md:rounded-2xl transition-all duration-150"
                        :class="[
                            !isMobile && isCollapsed ? 'justify-center' : 'pl-3 sm:pl-4 md:pl-5 pr-2 sm:pr-3 md:pr-4',
                            isActive(item.name)
                                ? 'bg-[#3b82f6] text-white active-pill'
                                : 'text-[#6b7280] hover:bg-[#e8edff]'
                        ]"
                        @click.prevent="handleClick(item)">
                        <img :src="item.iconSrc" :alt="item.name + ' Icon'" class="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5" />
                        <span
                            v-if="!isCollapsed || isMobile"
                            class="font-medium text-xs sm:text-sm md:text-sm"
                            :class="isActive(item.name) ? 'text-white' : 'text-[#6b7280] dark:text-gray-300'"
                        >
                            {{ item.name }}
                        </span>
                        <button v-if="item.subItems && (!isCollapsed || isMobile)" class="ml-auto text-[#6b7280] transition-transform text-sm sm:text-base" :class="{ 'rotate-180': open === item.name }">
                            <i class="pi pi-chevron-down"></i>
                        </button>

                    </a>

                    <transition name="accordion">
                        <ul v-if="item.subItems && open === item.name && (!isCollapsed || isMobile)"
                            class="submenu pl-8 sm:pl-10 md:pl-12 pr-2 sm:pr-3 md:pr-4 text-xs sm:text-sm md:text-sm text-gray-500 space-y-1 sm:space-y-1.5 md:space-y-2">
                            <li v-for="sub in item.subItems" :key="sub.name" class="flex items-center justify-between gap-2">
                                <span>{{ sub.name }}</span>
                                <ToggleSwitch v-if="sub.hasToggle" />
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>

        </div>

        <img :src="isCollapsed && !isMobile ? teresolCollapsedLogo : teresolLogo" alt="Teresol Logo"
            class="px-4 sm:px-6 md:px-8 w-40 sm:w-56 md:w-70 h-auto mt-10 sm:mt-12 md:mt-15" />




    </div>
</template>



<style scoped>
.accordion-enter-active,
.accordion-leave-active {
    transition: opacity 0.45s ease-in-out, transform 0.45s ease-in-out;
    transform-origin: top;
}

.accordion-enter-from,
.accordion-leave-to {
    opacity: 0;
    transform: translateY(12px);
}

.active-pill img {
    filter: brightness(0) invert(1);
}
</style>