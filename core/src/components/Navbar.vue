<script setup>
import { useRoute, useRouter } from 'vue-router';
import { computed, ref, inject } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import DatePicker from './DatePicker.vue';
import Calculator from './Calculator.vue';
import { notifications, profileMenuItems } from '../data/data';
import profilePic from "../assets/images/icon_profile_picture.svg";
import calculatorIcon from "../assets/images/icon_calculator.svg";
import notificationIcon from "../assets/images/icon_notification.svg";
import branchIcon from "../assets/images/icon_bank.svg";
import rightChevron from "../assets/images/chevron-right.svg";
import rightChevronRed from "../assets/images/chevron-right-1.svg";



const route = useRoute();
const router = useRouter();
const showNotifications = ref(false);
const showCalculator = ref(false);
const showProfile = ref(false);
const notificationsEnabled = ref(true);

//  mobile sidebar toggle function
const toggleMobileSidebar = inject('toggleMobileSidebar');

const unreadCount = computed(() => {
    return notifications.filter(n => !n.read).length;
});

const formattedRouteName = computed(() => {
    if (!route.name) return '';
    let name = route.name;
    name = name.replace(/([A-Z])/g, ' $1').trim();
    name = name.replace(/&/g, ' & ');
    name = name.replace(/\s+/g, ' ').trim();
    return name;
});

const displayTitle = computed(() => {
    if (route.path === '/dashboard') return 'Main Menu';
    return formattedRouteName.value || 'Main Menu';
});

const breadcrumbItems = computed(() => {
    const items = [];
    if (route.path !== '/' && route.path !== '/dashboard') {
        route.matched.forEach((matched, index) => {
            if (matched.path === '/' || matched.path === '/dashboard') return;

            // Formatting route name
            let label = '';
            if (matched.name) {
                label = matched.name;
                label = label.replace(/([A-Z])/g, ' $1').trim();
                label = label.replace(/&/g, ' & ');
                label = label.replace(/\s+/g, ' ').trim();
            } else if (matched.path) {
                // if wrong path
                label = matched.path.split('/').pop() || '';
                label = label.replace(/-/g, ' ');
                label = label.charAt(0).toUpperCase() + label.slice(1);
            }

            if (label) {
                items.push({
                    label: label,
                    to: matched.path
                });
            }
        });
    }
    // console.log(items);
    return items;
});

const breadcrumbHome = computed(() => ({
    icon: 'pi pi-home',
    label: route.path === '/dashboard' ? 'Welcome to core banking system' : 'Main Menu',
    to: '/dashboard'
}));

const toggleCalculator = () => {
    showCalculator.value = !showCalculator.value;
    showNotifications.value = false;
    showProfile.value = false;

};

const closeNotifications = () => {
    showNotifications.value = false;
};

const closeCalculator = () => {
    showCalculator.value = false;
};

const toggleProfile = () => {
    showProfile.value = !showProfile.value;
    showCalculator.value = false;
    showNotifications.value = false;
};

const closeProfile = () => {
    showProfile.value = false;
};

const handleProfileMenuClick = (action) => {
    if (action === 'toggle-notifications') {
        notificationsEnabled.value = !notificationsEnabled.value;
    } else if (action === 'logout') {
        router.push('/');

    } else {
        closeProfile();
    }
};
</script>

<template>
    <nav class="flex items-start gap-3 sm:gap-4 px-5 sm:pt-4 pb-7 focus:outline-none">
        <!-- Hamburger menu button for mobile -->
        <button @click="toggleMobileSidebar"
            class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
            <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
            </svg>
        </button>

        <div class="flex flex-col flex-1 min-w-0">
            <h1 class="text-sm sm:text-base md:text-lg lg:text-2xl font-semibold text-gray-900">
                {{ displayTitle }}
            </h1>
            <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems"
                class="hidden sm:block  sm:text-xs md:text-sm bg-gray-50 overflow-hidden"
                style="background-color: #f9fafb; padding: 0;">
                <template #separator>
                    <span class="px-1 text-gray-400">/</span>
                </template>
                <template #item="{ item }">
                    <router-link v-if="item.to" :to="item.to" class="text-gray-500 hover:text-gray-700">
                        {{ item.label }}
                    </router-link>
                    <span v-else class="text-gray-500">{{ item.label }}</span>
                </template>
            </Breadcrumb>
        </div>

        <div class="flex items-center gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
            <DatePicker v-if="route.path !== '/dashboard'" class="hidden lg:block" />

            <div v-if="route.path !== '/dashboard'"
                class="hidden md:flex items-center gap-2 px-2 sm:px-3 py-1.5 bg-white border border-gray-200 rounded-lg flex-shrink-0">
                <img :src="branchIcon" alt="Branch Icon" class="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 text-sm" />
                <span class="text-xs sm:text-sm text-gray-700 whitespace-nowrap">1016 - Wells Fargo Branch</span>
            </div>

            <!-- Calculator Button and Dropdown -->
            <div class="relative">
                <button @click="toggleCalculator" class="p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <img :src="calculatorIcon" alt="Calculator Icon"
                        class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer" />
                </button>

                <!-- Calculator  -->
                <div v-if="showCalculator" class="absolute top-full right-0 mt-2 z-50">
                    <div @click.stop class="bg-white rounded-lg shadow-xl">
                        <Calculator />
                    </div>
                </div>
            </div>

            <div class="relative">
                <button class="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    @click="showNotifications = !showNotifications">
                    <img :src="notificationIcon" alt="Notification Icon"
                        class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer" />
                </button>

                <!-- Notifications Dropdown -->
                <div v-if="showNotifications"
                    class="absolute top-full right-0 mt-2 w-72 sm:w-96 md:w-105 bg-white rounded-[14px] shadow-xl z-50 border border-gray-100">
                    <div class="p-3 sm:p-4 border-b border-gray-100  h-10 flex items-center">
                        <h3 class="text-[16px] sm:text-lg font-semibold text-red-500 justify-between ">Notifications
                            <span
                                class="inline-flex items-center justify-center w-6 h-6 sm:w-6 sm:h-6 bg-red-500 text-white text-sm rounded-full">{{
                                    unreadCount }}</span></h3>
                    </div>
                    <hr class="text-red-500 w-35 ml-3.5 h-0.5">
                    <div class="max-h-72 sm:max-h-96 overflow-y-auto">
                        <div v-for="notification in notifications" :key="notification.id"
                            class="p-3 sm:p-4 border-b border-[#E6E6E6] hover:bg-[#e8edff] relative group">
                            <div v-if="!notification.read"
                                class="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2  bg-red-500 rounded-full">
                            </div>
                            <div class="flex gap-2 sm:gap-3 pr-5 sm:pr-6">
                                <img :src="notification.Img" :alt="notification.name"
                                    class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0" />
                                <div class="flex-1 cursor-pointer">
                                    <p class="font-bold text-gray-900 text-xs sm:text-sm">{{ notification.name }}
                                        <span class="text-xs font-medium sm:text-sm text-gray-700 mt-0.5">{{
                                            notification.message }}</span>
                                    </p>
                                    <div v-if="notification.hasActions" class="flex gap-2 mt-2">
                                        <button
                                            class="px-2 sm:px-3 py-1.5 sm:py-2 bg-[#4880ff] text-white rounded text-xs sm:text-sm font-medium hover:bg-blue-700">Approve</button>
                                        <button
                                            class="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-200 text-gray-700 rounded text-xs sm:text-sm font-medium hover:bg-gray-300">Decline</button>
                                    </div>
                                    <p class="text-xs sm:text-sm text-[#A5ACB8] mt-2">{{ notification.time }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-gray-200">
                <img :src="profilePic" alt="Profile" class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
                <div class="hidden md:block">
                    <p class="text-lg font-semibold text-gray-900">Olivia Skye</p>
                    <p class="text-xs sm:text-sm text-gray-500">Operational Manager</p>
                </div>
                <button @click="toggleProfile" class="text-gray-400 hover:text-gray-600">
                    <i class="pi pi-chevron-down text-xs sm:text-sm"></i>
                </button>

                <!-- Profile Dropdown -->
                <div v-if="showProfile"
                    class="absolute top-full right-0 mt-2 w-64 sm:w-72 bg-white rounded-lg shadow-xl z-50 border border-gray-100 pb-4">
                    <div class=" ">
                        <div class="flex items-center gap-2 sm:gap-3 p-5">
                            <img :src="profilePic" alt="Profile" class="w-10 h-10 rounded-lg" />
                            <div class="flex-1">
                                <p class="text-sm sm:text-sm font-semibold text-gray-900">Olivia Skye</p>
                                <p class="text-xs font-medium mt-1 text-[#666D80]">Operational Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class=" px-2">
                        <div v-for="item in profileMenuItems" :key="item.id" class="px-2.5">
                            <button v-if="!item.isDivider" @click="handleProfileMenuClick(item.action)"
                                class="w-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 hover:bg-[#f5f5f5] transition-colors"
                                :class="{ 'text-red-500': item.isDanger }">
                                <img :src="item.icon" class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                    :style="{ filter: item.isDanger ? 'invert(0.3) sepia(1) saturate(5) hue-rotate(0deg)' : '' }" />
                                <span class="flex-1 text-left text-xs sm:text-sm font-medium"
                                    :class="item.isDanger ? 'text-red-500' : 'text-[#5B616E]'">{{ item.label }}</span>
                                <img v-if="item.showArrow" :src="rightChevron" class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                    :style="{ filter: item.isDanger ? 'invert(0.3) sepia(1) saturate(5) hue-rotate(0deg)' : '' }"/>
                                <div v-if="item.hasToggle" class="relative inline-flex items-center cursor-pointer">
                                    <div class="w-10 h-5 sm:w-11 sm:h-6 rounded-full transition-colors"
                                        :class="notificationsEnabled ? 'bg-[#4880ff]' : 'bg-gray-300'">
                                        <div class="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform"
                                            :class="notificationsEnabled ? 'translate-x-5' : 'translate-x-0'"></div>
                                    </div>
                                </div>
                            </button>
                            <div v-else @click="handleProfileMenuClick(item.action)"
                                class="w-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 hover:bg-[#f5f5f5] transition-colors"
                                :class="{ 'text-red-500': item.isDanger, 'pb-5': item.isDanger }">
                                <img :src="item.icon" class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                    :style="{ filter: item.isDanger ? 'invert(38%) sepia(72%) saturate(360%) hue-rotate(355deg)' : '' }" />
                                <span class="flex-1 text-left text-xs sm:text-sm font-medium"
                                    :class="item.isDanger ? 'text-red-500' : 'text-[#5B616E]'">{{ item.label }}</span>
                                <img v-if="item.showArrow" :src="rightChevron" class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
                                    :style="{ filter: item.isDanger ? 'invert(38%) sepia(72%) saturate(360%) hue-rotate(355deg)' : '' }"/>
                                <div v-if="item.hasToggle" class="relative inline-flex items-center cursor-pointer">
                                    <div class="w-10 h-5 sm:w-11 sm:h-6 rounded-full transition-colors"
                                        :class="notificationsEnabled ? 'bg-[#4880ff]' : 'bg-gray-300'">
                                        <div class="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform"
                                            :class="notificationsEnabled ? 'translate-x-5' : 'translate-x-0'"></div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="item.isDivider" class="border-t border-gray-200 my-2 mx-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div v-if="showCalculator" class="fixed inset-0 z-40" @click="closeCalculator"></div>

    <div v-if="showNotifications" class="fixed inset-0 z-40" @click="closeNotifications"></div>

    <div v-if="showProfile" class="fixed inset-0 z-40" @click="closeProfile"></div>
</template>

<style scoped></style>
