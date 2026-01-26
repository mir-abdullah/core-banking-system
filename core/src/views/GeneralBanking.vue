<script setup>
  import { generalBankingItems } from '../data/data';
  import LayoutCard from '../components/LayoutCard.vue';

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 p-3 sm:p-4 md:p-6">
      <LayoutCard
        v-for="item in generalBankingItems"
        :key="item.title"
        :name="item.title"
        :options="item.options"
        :dropdown="item.dropdown"
        :color="item.color"
      />
    </div>
</template>
