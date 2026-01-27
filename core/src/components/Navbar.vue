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
    <nav class="flex items-start gap-3 sm:gap-4 px-3 sm:px-4 md:px-6 py-3 sm:py-4 focus:outline-none">
        <!-- Hamburger menu button for mobile -->
        <button @click="toggleMobileSidebar" class="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0">
            <svg class="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
        </button>

        <div class="flex flex-col flex-1 min-w-0">
            <h1 class="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-900">
                {{ displayTitle }}
            </h1>
            <Breadcrumb :home="breadcrumbHome" :model="breadcrumbItems" class="hidden sm:block text-[10px] sm:text-xs md:text-xs bg-gray-50 overflow-hidden"
                style="background-color: #f9fafb; padding: 0.25rem;">
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
                    <img :src="calculatorIcon" alt="Calculator Icon" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer" />
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
                    <img :src="notificationIcon" alt="Notification Icon" class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 cursor-pointer" />
                </button>

                <!-- Notifications Dropdown -->
                <div v-if="showNotifications"
                    class="absolute top-full right-0 mt-2 w-72 sm:w-96 md:w-105 bg-white rounded-lg shadow-xl z-50 border border-gray-100">
                    <div class="p-3 sm:p-4 border-b border-gray-100 underline">
                        <h3 class="text-sm sm:text-lg font-semibold text-red-500 underline">Notifications <span
                                class="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-red-500 text-white text-xs rounded-full ">{{
                                unreadCount }}</span></h3>
                    </div>
                    <div class="max-h-72 sm:max-h-96 overflow-y-auto">
                        <div v-for="notification in notifications" :key="notification.id"
                            class="p-3 sm:p-4 border-b border-gray-100 hover:bg-[#e8edff] relative group">
                            <div v-if="!notification.read"
                                class="absolute top-3 sm:top-4 right-3 sm:right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 bg-red-500 rounded-full">
                            </div>
                            <div class="flex gap-2 sm:gap-3 pr-5 sm:pr-6">
                                <img :src="notification.Img" :alt="notification.name"
                                    class="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-shrink-0" />
                                <div class="flex-1">
                                    <p class="font-semibold text-gray-900 text-xs sm:text-sm">{{ notification.name }}
                                        <span class="text-xs sm:text-sm text-gray-700 mt-0.5">{{ notification.message }}</span>
                                    </p>
                                    <div v-if="notification.hasActions" class="flex gap-2 mt-2">
                                        <button
                                            class="px-2 sm:px-3 py-1.5 sm:py-2 bg-[#4880ff] text-white rounded text-xs sm:text-sm font-medium hover:bg-blue-700">Approve</button>
                                        <button
                                            class="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-200 text-gray-700 rounded text-xs sm:text-sm font-medium hover:bg-gray-300">Decline</button>
                                    </div>
                                    <p class="text-xs sm:text-sm text-[#6b7280] mt-2">{{ notification.time }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="relative flex items-center gap-2 sm:gap-3 pl-2 sm:pl-4 border-gray-200">
                <img :src="profilePic" alt="Profile" class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg" />
                <div class="hidden md:block">
                    <p class="text-xs sm:text-sm font-medium text-gray-900">Olivia Skye</p>
                    <p class="text-xs sm:text-sm text-gray-500">Operational Manager</p>
                </div>
                <button @click="toggleProfile" class="text-gray-400 hover:text-gray-600">
                    <i class="pi pi-chevron-down text-xs sm:text-sm"></i>
                </button>

                <!-- Profile Dropdown -->
                <div v-if="showProfile"
                    class="absolute top-full right-0 mt-2 w-64 sm:w-72 bg-white rounded-lg shadow-xl z-50 border border-gray-100">
                    <div class="p-3 sm:p-4 border-b border-gray-100">
                        <div class="flex items-center gap-2 sm:gap-3">
                            <img :src="profilePic" alt="Profile" class="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
                            <div class="flex-1">
                                <p class="text-xs sm:text-sm font-semibold text-gray-900">Olivia Skye</p>
                                <p class="text-xs text-gray-500">Operational Manager</p>
                            </div>
                        </div>
                    </div>
                    <div class="py-2">
                        <button v-for="item in profileMenuItems" :key="item.id"
                            @click="handleProfileMenuClick(item.action)"
                            class="w-full px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 hover:bg-[#e8edff] transition-colors"
                            :class="{ 'text-red-500': item.isDanger }">
                            <img :src="item.icon" class="text-base sm:text-lg w-4 h-4 sm:w-5 sm:h-5"
                                :style="{ color: item.isDanger ? 'rgb(239 68 68)' : 'rgb(107 114 128)' }" />
                            <span class="flex-1 text-left text-xs sm:text-sm font-medium"
                                :class="item.isDanger ? 'text-red-500' : 'text-gray-700'">{{ item.label }}</span>
                            <i v-if="item.showArrow" class="pi pi-chevron-right text-xs"
                                :class="item.isDanger ? 'text-red-500' : 'text-gray-400'"></i>
                            <div v-if="item.hasToggle" class="relative inline-flex items-center cursor-pointer">
                                <div class="w-10 h-5 sm:w-11 sm:h-6 rounded-full transition-colors"
                                    :class="notificationsEnabled ? 'bg-blue-500' : 'bg-gray-300'">
                                    <div class="absolute top-0.5 left-0.5 bg-white w-5 h-5 rounded-full transition-transform"
                                        :class="notificationsEnabled ? 'translate-x-5' : 'translate-x-0'"></div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <div v-if="showCalculator" class="fixed inset-0 z-40" @click="closeCalculator"></div>

    <div v-if="showProfile" class="fixed inset-0 z-40" @click="closeProfile"></div>
</template>

<style scoped></style>
