<script setup>
  import { internationalTransactionsItems } from '../data/data';
  import LayoutCard from '../components/LayoutCard.vue';
  import { layoutColors } from '../data/data';

</script>

<template>
    <div class="ml-5.5 flex flex-wrap gap-x-5 gap-y-5 h-fit">
      <LayoutCard
        v-for="(item, index) in internationalTransactionsItems"
        :key="item.title"
        :name="item.title"
        :options="item.options"
        :dropdown="item.dropdown"
        :color="layoutColors[index % layoutColors.length]"
      />
    </div>
</template>
