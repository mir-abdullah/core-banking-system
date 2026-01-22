
<script setup>
    import { ref, computed } from 'vue';
    import { sidebarItems } from '../data/data';
    import DashboardCard from '../components/DashboardCard.vue';
    import { useRoute } from 'vue-router';
    import DatePicker from '../components/DatePicker.vue';
    import bankLogo from '../assets/images/icon_bank.svg'


    const route = useRoute();


</script>
<template>
    <div class="mt-0 flex flex-col gap-2">
    
    <div class="flex  gap-2 px-3">
        <DatePicker  class="w-fit" />
            
            <div  class="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-lg w-fit">
                <img :src="bankLogo" alt="Bank Logo" class="w-4 h-4" />
                <span class="text-sm text-gray-700">1016 - Wells Fargo Branch</span>
            </div>

    </div>
    <div class="flex flex-wrap gap-6 items-center justify-center ">
        <DashboardCard
            v-for="(item, index) in sidebarItems.slice(1)" 
            :key="index"
            :name="item.name"
            :icon="item.iconSrc"
            :value="item.subCategories"
            :backgroundColor="item.backgroundColor"
        />
    </div>
    </div>
    

</template>

<style scoped></style>