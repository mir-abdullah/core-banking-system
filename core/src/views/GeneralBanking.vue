<script setup>
  import { generalBankingItems } from '../data/data';
  import LayoutCard from '../components/LayoutCard.vue';

</script>

<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h1 class="text-3xl font-bold mb-4">General Banking</h1>
    <div class="border-black border-2 rounded-lg w-80 ">
      <LayoutCard
        v-for="item in generalBankingItems"
        :key="item.title"
        :name="item.title"
        :options="item.options"
        :dropdown="item.dropdown"
        :color="item.color"
      />
    </div>
   
    
  </div>
</template>
