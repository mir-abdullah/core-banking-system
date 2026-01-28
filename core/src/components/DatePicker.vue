<script setup>
import { ref, computed, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import dateLogo from "../assets/images/icon_calendar_default.svg";

const route = useRoute();
const selectedDate = ref(new Date());
const dateInputRef = ref(null);
const isPickerOpen = ref(false);

const formattedDate = computed(() => {
    const date = selectedDate.value;
    const day = String(date.getDate()).padStart(2, '0');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
});

// const dateInputValue = computed(() => {
//     const date = selectedDate.value;
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
// });

const handleDateChange = (event) => {
    selectedDate.value = new Date(event.target.value);
    isPickerOpen.value = false;
};

const openPicker = async () => {
    isPickerOpen.value = true;
    await nextTick();
    if (dateInputRef.value) {
        dateInputRef.value.showPicker();
    }
};

const closePicker = () => {
    isPickerOpen.value = false;
};
</script>

<template>
    <div  class="relative">
        <div 
            @click="openPicker"
            class="flex items-center gap-2 px-3 py-1.75 bg-white border rounded-lg transition-colors cursor-pointer"
            :class="isPickerOpen ? 'border-blue-400 bg-blue-50' : 'border-gray-200 hover:border-gray-300'"
        >
            <img :src="dateLogo" alt="Calendar Icon" class="w-6 h-6" :class="isPickerOpen ? 'filter-blue' : ''" />
            <span class="text-sm whitespace-nowrap select-none" :class="isPickerOpen ? 'text-blue-600 font-medium' : 'text-gray-700'">{{ formattedDate }}</span>
        </div>

        <input 
            ref="dateInputRef"
            type="date" 
            @blur="closePicker"
            class="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer pointer-events-none"
        />
    </div>
</template>

<style scoped>
.filter-blue {
    filter: brightness(0) saturate(100%) invert(46%) sepia(91%) saturate(2449%) hue-rotate(201deg) brightness(98%) contrast(101%);
}
</style>