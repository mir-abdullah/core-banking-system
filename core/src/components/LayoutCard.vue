<script setup>

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
    <div class="bg-white rounded-xl shadow-sm p-6 w-[310px]">
        <!-- Header  -->
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold" :style="{ color: color }">{{ name }}</h3>
            <button class="w-6 h-6 flex items-center justify-center rounded hover:bg-gray-100 transition-colors">
                <i class="pi pi-chevron-down text-gray-400 text-sm"></i>
            </button>
        </div>

        <!-- Line -->
        <div class="h-[2px] mb-4" :style="{ backgroundColor: color }"></div>

        <!-- Options  -->
        <div class="flex flex-col gap-2">
            <button 
                v-for="option in options" 
                :key="option.name" 
                class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
            >
                <span class="text-sm font-medium text-gray-800">{{ option.name }}</span>
                <i class="pi pi-chevron-right text-gray-400 text-xs group-hover:translate-x-0.5 transition-transform"></i>
            </button>
        </div>
    </div>
</template>

<style scoped>  

</style>