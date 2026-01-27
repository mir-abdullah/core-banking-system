<script setup>
  import { loanOriginationItems } from '../data/data';
  import LayoutCard from '../components/LayoutCard.vue';
  import { useRouter, useRoute } from 'vue-router'; // useRoute add kiya
  
  const router = useRouter();
  const route = useRoute(); // Current route track karne ke liye

  const handleMenuNavigation = (item) => {
        console.log("Selected:", item);
        if (item.routeName) {
            router.push({ name: item.routeName });
        }
  };
</script>

<template>
    <div
      v-if="route.name === 'LoanOrigination&Management'"
      class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6 p-3 sm:p-4 md:p-5 lg:p-6"
    >
      <LayoutCard
        v-for="item in loanOriginationItems"
        :key="item.title"
        :name="item.title"
        :options="item.options"
        :dropdown="item.dropdown"
        :color="item.color"
        @select="handleMenuNavigation"
      />
    </div>

    <router-view v-else />
</template>