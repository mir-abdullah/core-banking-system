<script setup>
    import Sidebar from '../components/Sidebar.vue';
    import Navbar from '../components/Navbar.vue';

</script>

<template>
    <div class="flex h-screen bg-gray-50">
        <Sidebar />
        <div class="flex flex-col flex-1">
            <Navbar />
            <main class="flex-1 overflow-y-auto">
                <div class="p-6">
                    <router-view />
                </div>
            </main>
        </div>
    </div>
</template>

<style scoped>  

</style>