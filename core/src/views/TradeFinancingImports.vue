    <script setup>
    import { tradeFinanceImportsItems } from '../data/data';
    import LayoutCard from '../components/LayoutCard.vue';
    import { useRouter, useRoute } from 'vue-router'; 

    const route = useRoute();
    
     </script>


  
<template>
    <div
      v-if="route.name === 'Imports'"
      class="ml-5.5 flex flex-wrap gap-x-5 gap-y-5 h-fit"
    >
      <LayoutCard
        v-for="item in tradeFinanceImportsItems"
        :key="item.title"
        :name="item.title"
        :options="item.options"
        :dropdown="item.dropdown"
        :color="item.color"
      />
    </div>
    <router-view v-else />
  
</template>


<style>

</style>