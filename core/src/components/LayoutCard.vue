<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import buttonIcon from '../assets/images/icon_card_recently_used_arrow_right.svg';
import { useCardState } from '../composables/useCardState';

const props = defineProps({
    name: {
        type: String,
        required: true,
    },
    options: {
        type: Array,
        required: true,
    },
    dropdown: {
        type: Array,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});

const cardId = ref(null);
const { activeCardId, setActiveCard, isCardActive } = useCardState();

const activeDropdown = ref(null);
const activeSubOption = ref(null);
const cardOpen = ref(false);

onMounted(() => {
    cardId.value = `${props.name}-${Math.random().toString(36).substr(2, 9)}`;
});

// Watch for changes in activeCardId - close this card if another card is activated
watch(activeCardId, (newActiveId) => {
    if (newActiveId !== cardId.value && cardOpen.value) {
        cardOpen.value = false;
        activeDropdown.value = null;
        activeSubOption.value = null;
    }
});

const toggleDropdown = (name) => {
    if (activeDropdown.value === name) {
        activeDropdown.value = null;
        activeSubOption.value = null;
    } else {
        activeDropdown.value = name;
        activeSubOption.value = null;
    }
};

const firstDropdownName = computed(() => props.dropdown?.[0]?.name ?? null);

const toggleCard = () => {
    if (cardOpen.value) {
        cardOpen.value = false;
        activeDropdown.value = null;
        activeSubOption.value = null;
        setActiveCard(null);
    } else {
        cardOpen.value = true;
        setActiveCard(cardId.value);
    }
};

const activeDropdownData = computed(() =>
    props.dropdown?.find((item) => item.name === activeDropdown.value)
);

const activeSubOptionData = computed(() =>
    activeDropdownData.value?.subOptions?.find((item) => item.name === activeSubOption.value)
);

const toggleSubOption = (sub) => {
    if (!sub.options || !sub.options.length) {
        activeSubOption.value = null;
    } else if (activeSubOption.value === sub.name) {
        activeSubOption.value = null;
    } else {
        activeSubOption.value = sub.name;
    }
};
</script>

<template>
    <div class="group relative bg-white border-transparent rounded-xl  p-6 w-[310px] hover:bg-gray-100 border-2 transition-all duration-400 cursor-pointer hover:shadow-lg h-fit"
        :style="{ '--card-color': color }">
        <!-- Header  -->
        <div class="flex justify-between items-center mb-4 cursor-pointer" @click="toggleCard">
            <h3 class="text-xl font-bold font-sans" :style="{ color: color }">{{ name }}</h3>
            <button class="w-6 h-6 flex items-center justify-center rounded bg-gray-200 transition-colors cursor-pointer">
                <i class="pi text-black text-sm" :class="cardOpen ? 'pi-chevron-up' : 'pi-chevron-down'"></i>
            </button>
        </div>

        <!-- Line -->
        <div class="h-[3.5px]" :style="{ backgroundColor: color }"></div>

        <!-- Dropdown sections directly under header -->
        <div v-if="cardOpen && dropdown && dropdown.length" class="absolute left-0 right-0 top-[60px] z-20 px-2">
            <div class="flex flex-col gap-1 bg-white rounded-xl shadow-xl border border-gray-200 p-2">
                <div
                    v-for="(item, index) in dropdown"
                    :key="item.name"
                    class="relative"
                >
                    <button
                        class="w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200"
                        :class="activeDropdown === item.name ? 'bg-blue-50 border-blue-200 text-blue-700' : 'text-gray-800 hover:bg-white'"
                        @click="toggleDropdown(item.name)">
                        <span class="text-md font-semibold">{{ item.name }}</span>
                        <i class="pi pi-chevron-right"></i>
                    </button>

                    <!-- Second level dropdown -->
                    <div
                        v-if="activeDropdown === item.name && activeDropdownData"
                        class="absolute left-full top-0 ml-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[200px] z-30"
                    >
                        <div class="flex flex-col gap-2">
                            <div
                                v-for="(sub, subIndex) in activeDropdownData.subOptions"
                                :key="sub.name"
                                class="relative"
                            >
                                <button
                                    class="w-full flex items-center justify-between px-3 py-2 rounded-lg border transition-all duration-200 text-left"
                                    :class="activeSubOption === sub.name ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-gray-50 border-gray-200 text-gray-800 hover:bg-white hover:border-blue-100 hover:shadow-md '"
                                    @click="toggleSubOption(sub)"
                                >
                                    <span class="text-sm font-medium">{{ sub.name }}</span>
                                    <i v-if="sub.options && sub.options.length" class="pi pi-chevron-right text-xs"></i>
                                </button>

                                <!-- Third level dropdown -->
                                <div
                                    v-if="activeSubOption === sub.name && sub.options && sub.options.length"
                                    class="absolute left-full top-0 ml-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[200px] w-fit z-40"
                                >
                                    <div class="flex flex-col gap-2">
                                        <button
                                            v-for="nestedItem in sub.options"
                                            :key="nestedItem.name"
                                            class="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-blue-50 rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-200 text-left cursor-pointer "
                                        >
                                            <span class="text-sm text-gray-800 hover:text-blue-700 transition-colors">{{ nestedItem.name }}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

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