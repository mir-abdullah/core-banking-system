<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import buttonIcon from '../assets/images/icon_card_recently_used_arrow_right.svg';
import { useCardState } from '../composables/useCardState';

const props = defineProps({
    name: { type: String, required: true },
    options: { type: Array, required: true },
    dropdown: { type: Array, required: true },
    color: { type: String, required: true },
});

// Parent component ko data bhejne ke liye emit define kiya
const emit = defineEmits(['select']);

const cardId = ref(null);
const { activeCardId, setActiveCard } = useCardState();

const activeDropdown = ref(null);
const activeSubOption = ref(null);
const activeNestedOption = ref(null);
const cardOpen = ref(false);

onMounted(() => {
    cardId.value = `${props.name}-${Math.random().toString(36).substr(2, 9)}`;
});

watch(activeCardId, (newActiveId) => {
    if (newActiveId !== cardId.value && cardOpen.value) {
        closeAll();
    }
});

const closeAll = () => {
    cardOpen.value = false;
    activeDropdown.value = null;
    activeSubOption.value = null;
    activeNestedOption.value = null;
};

// Selection handler: Agar item ke children nahi hain, toh select emit karo
const handleItemClick = (item) => {
    const hasChildren = (item.subOptions && item.subOptions.length) || (item.options && item.options.length);
    
    if (!hasChildren) {
        emit('select', item); // Parent ko item ka object milega
        closeAll();
        setActiveCard(null);
    }
};

const toggleCard = () => {
    if (cardOpen.value) {
        closeAll();
        setActiveCard(null);
    } else {
        cardOpen.value = true;
        setActiveCard(cardId.value);
    }
};

const toggleDropdown = (item) => {
    if (item.subOptions?.length) {
        activeDropdown.value = activeDropdown.value === item.name ? null : item.name;
        activeSubOption.value = null;
        activeNestedOption.value = null;
    } else {
        handleItemClick(item);
    }
};

const activeDropdownData = computed(() =>
    props.dropdown?.find((item) => item.name === activeDropdown.value)
);

const toggleSubOption = (sub) => {
    if (sub.options?.length) {
        activeSubOption.value = activeSubOption.value === sub.name ? null : sub.name;
        activeNestedOption.value = null;
    } else {
        handleItemClick(sub);
    }
};

const toggleNestedOption = (nested) => {
    if (nested.subOptions?.length) {
        activeNestedOption.value = activeNestedOption.value === nested.name ? null : nested.name;
    } else {
        handleItemClick(nested);
    }
};
</script>

<template>
    <div class="group relative bg-white border-transparent rounded-xl items-center p-6 w-[330px] hover:bg-gray-100 border-2 transition-all duration-400 cursor-pointer hover:shadow-lg h-fit"
        :style="{ '--card-color': color, '--shadow-color': color }">
        
        <div class="flex justify-between items-center mb-4 cursor-pointer" @click="toggleCard">
            <h3 class="text-xl font-bold font-sans" :style="{ color: color }">{{ name }}</h3>
            <button class="w-6 h-6 flex items-center justify-center rounded bg-gray-200 transition-colors cursor-pointer">
                <i class="pi text-black text-sm" :class="cardOpen ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
            </button>
        </div>

        <div class="h-[3.5px]" :style="{ backgroundColor: color }"></div>

        <div v-if="cardOpen && dropdown && dropdown.length" class="absolute left-0 right-0 top-[60px] z-20 px-2">
            <div class="flex flex-col gap-1 bg-white rounded-xl shadow-xl border border-gray-200 p-2">
                <div v-for="item in dropdown" :key="item.name" class="relative">
                    <button
                        class="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 cursor-pointer text-left"
                        :class="activeDropdown === item.name ? 'bg-blue-50 border-blue-200 text-blue-700' : 'text-gray-800 hover:bg-blue-100'"
                        @click="toggleDropdown(item)">
                        <span class="text-md font-semibold">{{ item.name }}</span>
                        <i v-if="item.subOptions?.length" class="pi pi-chevron-right"></i>
                    </button>

                    <div v-if="activeDropdown === item.name && activeDropdownData" class="absolute left-full top-0 ml-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[250px] z-30">
                        <div class="flex flex-col gap-2">
                            <div v-for="sub in activeDropdownData.subOptions" :key="sub.name" class="relative">
                                <button
                                    class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left font-semibold cursor-pointer"
                                    :class="activeSubOption === sub.name ? 'bg-blue-50 border-blue-200 text-blue-700' : 'text-gray-800 hover:bg-blue-100'"
                                    @click="toggleSubOption(sub)">
                                    <span class="text-sm font-medium">{{ sub.name }}</span>
                                    <i v-if="sub.options?.length" class="pi pi-chevron-right text-xs"></i>
                                </button>

                                <div v-if="activeSubOption === sub.name && sub.options?.length" class="absolute left-full top-0 ml-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[250px] z-40">
                                    <div class="flex flex-col gap-2">
                                        <div v-for="nestedItem in sub.options" :key="nestedItem.name" class="relative">
                                            <button
                                                class="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left cursor-pointer font-semibold"
                                                :class="activeNestedOption === nestedItem.name ? 'bg-blue-50 border-blue-200 text-blue-700' : 'text-gray-800 hover:bg-blue-100'"
                                                @click="toggleNestedOption(nestedItem)">
                                                <span class="text-sm">{{ nestedItem.name }}</span>
                                                <i v-if="nestedItem.subOptions?.length" class="pi pi-chevron-right text-xs"></i>
                                            </button>

                                            <div v-if="activeNestedOption === nestedItem.name && nestedItem.subOptions?.length" class="absolute left-full top-0 ml-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[200px] z-50">
                                                <div class="flex flex-col gap-2">
                                                    <button
                                                        v-for="fourthItem in nestedItem.subOptions"
                                                        :key="fourthItem.name"
                                                        @click="handleItemClick(fourthItem)"
                                                        class="flex items-center gap-2 px-3 py-2 hover:bg-blue-50 rounded-lg transition-all text-left cursor-pointer font-semibold"
                                                    >
                                                        <span class="text-sm text-gray-800 hover:text-blue-700">{{ fourthItem.name }}</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col gap-2 mt-4">
            <button 
                v-for="option in options" 
                :key="option.name" 
                @click="handleItemClick(option)"
                class="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-400 cursor-pointer border-0 text-left h-15"
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