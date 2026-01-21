<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useSidebar } from '../composables/useSidebar';

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
const route = useRoute();
const { isCollapsed } = useSidebar();

const cardWidth = computed(() => isCollapsed.value ? '320px' : '280px');





</script>

<template>
    <div class="group relative h-[374px] cursor-pointer transition-all duration-400" :style="{ width: cardWidth }">
        <router-link :to="`/${props.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`">
        <div class="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl shadow-[0_0_20px_rgba(76,87,125,0.02)] transition-transform duration-300 ease-out "
            :style="{ backgroundColor: props.backgroundColor }">
            <div
                class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,#ffffff,transparent_40%)] pointer-events-none">
            </div>

            <div class="relative z-10 flex flex-col gap-6 px-7 pt-6 items-start">
                <div class="relative flex items-center justify-center">
                    <div class="icon-circle flex items-center justify-center">
                        <img :src="props.icon" alt="icon" class="icon-img" />
                    </div>
                </div>

                <h3
                    class="title font-sans text-white text-[28px] leading-8 font-semibold transition-all duration-800 ease-out group-hover:text-[31px] group-hover:scale-[1.06] origin-left">
                    {{ props.name }}
                </h3>
            </div>

            <div class="relative z-10 flex items-center justify-between px-7 py-4 bg-[rgba(0,0,0,0.15)]">
                <div class="flex flex-col gap-1">
                    <span class="text-2xl font-semibold text-white">{{ props.value }}</span>
                    <span class="text-sm font-semibold text-white/70">Sub-Categories</span>
                </div>
                <i
                    class="pi pi-chevron-right text-white text-lg transition-transform duration-300 group-hover:translate-x-1"></i>
            </div>
        </div>
         </router-link>
    </div>
</template>


<style scoped>
.icon-circle {
    width: 80px;
    height: 80px;
    border-radius: 9999px;
    border: 1px dashed rgba(255, 255, 255, 0.4);
    background-color: transparent;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.icon-img {
    width: 42px;
    height: 42px;
    filter: brightness(0) invert(1);
    transition: transform 0.3s ease, background-color 0.3s ease, padding 0.3s ease, border-radius 0.3s ease;
}

.group:hover .icon-circle {
    background-color: #ffffff;
    height: 60px;
    width: 60px;
}

.group:hover .icon-img {
    transform: scale(0.88);
    filter: none;
}
</style>