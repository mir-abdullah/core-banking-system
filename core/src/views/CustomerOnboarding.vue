<script setup>
  import { customerOnboardingItems } from '../data/data';
  import LayoutCard from '../components/LayoutCard.vue';
</script>

<template>
    <div class="flex gap-5 flex-wrap" >
      <LayoutCard
        v-for="item in customerOnboardingItems"
        :key="item.title"
        :name="item.title"
        :options="item.options"
        :dropdown="item.dropdown"
        :color="item.color"
      />
    </div>
  
</template>
