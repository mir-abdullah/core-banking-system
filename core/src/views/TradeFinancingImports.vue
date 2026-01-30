    <script setup>
    import { tradeFinanceImportsItems } from '../data/data';
    import LayoutCard from '../components/LayoutCard.vue';
    import { useRouter, useRoute } from 'vue-router'; 
    import { layoutColors } from '../data/data';

    const route = useRoute();
    
     </script>


  
<template>
    <div
      v-if="route.name === 'Imports'"
      class="ml-5.5 flex flex-wrap gap-x-5 gap-y-5 h-fit"
    >
      <LayoutCard
        v-for="(item, index) in tradeFinanceImportsItems"
        :key="item.title"
        :name="item.title"
        :options="item.options"
        :dropdown="item.dropdown"
        :color="layoutColors[index % layoutColors.length]"
      />
    </div>
    <router-view v-else />
  
</template>


<style>

</style>