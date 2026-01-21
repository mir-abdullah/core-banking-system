<script setup>
    import buttonIcon from '../assets/images/icon_card_recently_used_arrow_right.svg';

    const props= defineProps({
        name: {
            type: String,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        dropdown:{
            type:Array,
            required:true
        },
        color: {
            type: String,
            required: true
        }
    });

    


</script>

<template>
    <div class="group bg-white border-transparent rounded-xl  p-6 w-[310px] hover:bg-gray-100 border-2 transition-all duration-400 cursor-pointer hover:shadow-lg"
        :style="{ '--card-color': color }">
        <!-- Header  -->
        <div class="flex justify-between items-center mb-4 cursor-pointer">
            <h3 class="text-xl font-bold font-sans" :style="{ color: color }">{{ name }}</h3>
            <button class="w-6 h-6 flex items-center justify-center rounded bg-gray-200 transition-colors cursor-pointer">
                <i class="pi pi-chevron-down text-black text-sm"></i>
            </button>
        </div>

        <!-- Line -->
        <div class="h-[3.5px] " :style="{ backgroundColor: color }"></div>

        <!-- Options  -->
        <div class="flex flex-col gap-2 mt-4">
            <button 
                v-for="option in options" 
                :key="option.name" 
                class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-400 cursor-pointer border-0"
            >
                <span class="text-md font-medium text-gray-800">{{ option.name }}</span>
                <img :src="buttonIcon" alt="Arrow Right" class="text-gray-400 text-xs group-hover:translate-x-0.5 transition-transform" />
            </button>
        </div>
    </div>
</template>

<style scoped>
.group:hover {
    border-color: var(--card-color);
    box-shadow: 0 8px 28px rgba(76, 87, 125, 0.35);
    
}
</style>