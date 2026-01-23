<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Sidebar from './components/Sidebar.vue';
import Navbar from './components/Navbar.vue';

const route = useRoute();

// Check karein ke current route ki meta field mein 'hide' true hai ya nahi
const isAuthPage = computed(() => route.meta.hide === true);
</script>

<template>
    <div v-if="isAuthPage" class="h-screen w-full">
        <router-view />
    </div>

    <div v-else class="flex h-screen bg-gray-50">
        <Sidebar />
        <div class="flex flex-col flex-1 overflow-hidden">
            <Navbar />
            <main class="flex-1 overflow-y-auto">
                <div class="p-3">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>
/* Smooth transition ke liye agar zaroorat ho */
</style>