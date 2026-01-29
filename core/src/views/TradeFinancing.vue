<script setup>
import DashboardCard from '../components/DashboardCard.vue';
import { tradeFinanceMenuItems } from '../data/data'; 
import {  useRoute } from 'vue-router';
 const route = useRoute();

</script>



<template>
     <div v-if="route.name === 'TradeFinancing'" class="ml-5.5 flex flex-wrap gap-x-5 gap-y-5  items-center justify-center lg:mt-10 ">
     <DashboardCard
        v-for="(item, index) in tradeFinanceMenuItems"
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
