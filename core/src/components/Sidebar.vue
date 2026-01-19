<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { sidebarItems, sidebarItems2 } from '../data/data';
import sidebarlogo from "../assets/images/icon_navbar_logo.svg";
import toggleIcon from "../assets/images/icon_navbar_toggle.svg";
import teresolLogo from "../assets/images/icon_teresol_colored_large.svg";
import teresolCollapsedLogo from "../assets/images/icon_teresol_colored_small.svg";

const router = useRouter();
const route = useRoute();

const open = ref(null);
const isCollapsed = ref(false);

const routeMap = {
    'Main Menu': '/dashboard',
    'General Banking': '/general-banking',
    'Trade Financing': '/trade-financing',
    'Loan Origination & Management': '/loan-origination',
    'International Transactions': '/international-transactions',
    'Customer Onboarding & Management': '/customer-onboarding',
    'Treasury Management': '/treasury-management',
    'Analytics & Reporting': '/analytics-reporting',
    'Back Office Operations': '/back-office-operations',
    'General Inquiry': '/general-inquiry',
    'Settings': '/settings',
};

const toggle = (name) => {
    open.value = open.value === name ? null : name;
};

const toggleSidebar = () => {
    isCollapsed.value = !isCollapsed.value;
    if (isCollapsed.value) open.value = null;
};

const getRoutePath = (itemName) => routeMap[itemName] || '/dashboard';

const isActive = (itemName) => {
    const path = getRoutePath(itemName);
    return route.path === path || route.path.startsWith(path + '/');
};

const navigateTo = (itemName) => {
    router.push(getRoutePath(itemName));
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
    <div :class="[isCollapsed ? 'w-24' : 'w-75', 'h-full bg-white relative transition-all duration-400']">

        <button class="absolute top-1 right-4 p-1 rounded-lg cursor-pointer" @click="toggleSidebar">
            <img :src="toggleIcon" alt="Toggle Sidebar" class="w-7 h-7" />
        </button>

        <div class="flex gap-1 items-center px-4 py-4 ">
            <img :src="sidebarlogo" alt="Bank Logo" class="w-8 h-8" />
            <h1 v-if="!isCollapsed" class="text-blue-500 font-sans font-semibold text-xl">Core Banking System</h1>
        </div>
        <div class="mt-4">
            <ul class="space-y-2">
                <li v-for="item in sidebarItems" :key="item.name" class="mb-0.5 ">
                    <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-150"
                        :class="[
                            isCollapsed ? 'justify-center' : 'pl-5 pr-4',
                            isActive(item.name)
                                ? 'bg-[#3b82f6] text-white active-pill'
                                : 'text-[#6b7280] hover:bg-[#e8edff]'
                        ]"
                        @click.prevent="handleClick(item)">
                        <img :src="item.iconSrc" :alt="item.name + ' Icon'" class="w-5 h-5" />
                        <span v-if="!isCollapsed" class="font-medium text-sm">{{ item.name }}</span>
                    </a>

                </li>
            </ul>
        </div>
        <div>

            <ul class="mt-30 space-y-2">
                <li v-for="item in sidebarItems2" :key="item.name" :title="item.name">
                    <a href="#" class="flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-150"
                        :class="[
                            isCollapsed ? 'justify-center' : 'pl-5 pr-4',
                            isActive(item.name)
                                ? 'bg-[#3b82f6] text-white active-pill'
                                : 'text-[#6b7280] hover:bg-[#e8edff]'
                        ]"
                        @click.prevent="handleClick(item)">
                        <img :src="item.iconSrc" :alt="item.name + ' Icon'" class="w-5 h-5" />
                        <span
                            v-if="!isCollapsed"
                            class="font-medium"
                            :class="isActive(item.name) ? 'text-white' : 'text-[#6b7280] dark:text-gray-300'"
                        >
                            {{ item.name }}
                        </span>
                        <button v-if="item.subItems && !isCollapsed" class="ml-auto text-[#6b7280] transition-transform" :class="{ 'rotate-180': open === item.name }">
                            <i class="pi pi-chevron-down"></i>
                        </button>

                    </a>

                    <transition name="accordion">
                        <ul v-if="item.subItems && open === item.name && !isCollapsed"
                            class="submenu pl-12 pr-4 text-sm text-gray-500 space-y-1">
                            <li v-for="sub in item.subItems" :key="sub">
                                <span>{{ sub }}</span>
                            </li>
                        </ul>
                    </transition>
                </li>
            </ul>

        </div>

        <img :src="isCollapsed ? teresolCollapsedLogo : teresolLogo" alt="Teresol Logo"
            class=" px-8 w-70 h-auto mt-15" />



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