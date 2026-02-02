<template>
  <div class="h-93.5 transition-all duration-400" :style="{ width: cardWidth }">
    <div class="h-full w-full bg-white rounded-lg shadow-[0_0_20px_rgba(76,87,125,0.02)] p-6 flex flex-col">
      <div class="mb-6 h-20">
        <h2 class="text-xl font-bold text-gray-900 mb-1">{{ heading }}</h2>
        <p class="text-sm text-[#5B616E]">{{ subheading }}</p>
      </div>
      
      <div class="flex flex-col gap-3.5 flex-1">
        <button
          v-for="(button, index) in buttons"
          :key="index"
          @click="handleButtonClick(button)"
          class="w-full py-2 px-3 border border-blue-500 text-blue-500 rounded-lg hover:text-white hover:bg-blue-500 transition-colors duration-200 font-medium cursor-pointer"
        >
          {{ button }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSidebar } from '../composables/useSidebar';
import { useRoute,useRouter } from 'vue-router';
import router from '../router';



const props = defineProps({
  heading: {
    type: String,
    required: true
  },
  subheading: {
    type: String,
    default: ''
  },
  buttons: {
    type: Array,
    required: true,
    default: () => []
  }
})

const emit = defineEmits(['button-click'])

const { isCollapsed } = useSidebar();

const cardWidth = computed(() => isCollapsed.value ? '333.6px' : '290.4px');

const handleButtonClick = (buttonName) => {
    router.push({ name: buttonName.replace(/\s+/g, '') });

}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
