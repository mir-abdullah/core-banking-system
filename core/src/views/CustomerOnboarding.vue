<script setup>
  import { customerOnboardingItems } from '../data/data';
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
    <div v-if="route.name === 'CustomerOnboarding&Management'" class="flex gap-5 flex-wrap">
      <LayoutCard
        v-for="item in customerOnboardingItems"
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