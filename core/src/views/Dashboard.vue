
<script setup>
    import { ref, computed } from 'vue';
    import { sidebarItems } from '../data/data';
    import DashboardCard from '../components/DashboardCard.vue';


</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <DashboardCard
            v-for="(item, index) in sidebarItems.slice(1)" 
            :key="index"
            :name="item.name"
            :icon="item.iconSrc"
            :value="item.subCategories"
            :backgroundColor="item.backgroundColor"
        />
    </div>

</template>

<style scoped></style>