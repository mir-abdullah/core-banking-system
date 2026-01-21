<script setup>
  import { generalBankingItems } from '../data/data';
  import LayoutCard from '../components/LayoutCard.vue';

</script>

<template>
    <div >
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
