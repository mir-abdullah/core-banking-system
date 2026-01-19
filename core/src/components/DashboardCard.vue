 <script setup>
    import { ref, computed } from 'vue';

    //params
    const props = defineProps({
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: false,
            default: '00',
        },
        backgroundColor: {
            type: String,
            required: true,
            default: '#ffffff',
        },
    });

    

</script>

<template >

<div>
    <div :style="{ backgroundColor: props.backgroundColor }" >
        <img :src="props.icon" alt="icon" />
        <p class="mt-4 text-sm font-medium text-gray-700">{{ props.name }}</p>
        <p class="mt-2 text-3xl font-semibold text-gray-900">{{ props.value }}</p>
        <p>Sub Categories</p> <i class="pi pi-chevron-down"></i> 
    </div>
</div>

</template>


<style scoped></style>