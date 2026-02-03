<script setup>
import DashboardCard from '../components/DashboardCard.vue';
import { loanOriginationMenuItems } from '../data/data'; 
import {  useRoute } from 'vue-router';
 const route = useRoute();

</script>



<template>
     <div v-if="route.name === 'LoanOrigination&Management'" class="ml-5.5 flex flex-wrap gap-x-5 gap-y-5 lg:mt-10 ">
     <DashboardCard
        v-for="(item, index) in loanOriginationMenuItems"
        :key="index"
        :name="item.name"
        :icon="item.iconSrc"
        :value="item.subCategories"
        :backgroundColor="item.backgroundColor"
        :routeName="item.routeName"
    />
    </div>
    <router-view v-else />
</template>
