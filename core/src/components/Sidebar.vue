
<script setup>
    import { sidebarItems } from '../data/data';
    import { sidebarItems2 } from '../data/data';
    import sidebarlogo from "../assets/images/icon_navbar_logo.svg"
    import { ref } from 'vue';
    import toggleIcon from "../assets/images/icon_navbar_toggle.svg" 
    import teresolLogo from "../assets/images/icon_teresol_colored_large.svg"

    

</script>
<template>
    
    <div class="w-75 h-full bg-white relative">
       
        <button class="absolute top-1 right-4 p-1 rounded-lg cursor-pointer ">
            <img :src="toggleIcon" alt="Toggle Sidebar" class="w-7 h-7"  />
        </button>    
        
        <div class="flex gap-1 items-center px-4 py-4 ">
            <img :src="sidebarlogo" alt="Bank Logo"  class="w-8 h-8" />
            <h1 class="text-blue-500 font-sans font-semibold text-xl" >Core Banking System</h1>
        </div>
        <div class="mt-4">
            <ul>
                <li v-for="item in sidebarItems" :key="item.id" class="mb-0.5 ">
                    <a 
                        :href="item.link" 
                        class="flex items-center gap-3 px-8 py-3 hover:bg-blue-100 rounded-lg"
                    >
                        <img :src="item.iconSrc" :alt="item.name + ' Icon'" class="w-5 h-5" />
                        <span class="text-gray-700 dark:text-gray-300 font-medium text-sm">{{ item.name }}</span>
                        <!-- <button>
                            <i class="pi pi-chevron-down"></i>
                        </button> -->
                    </a>
                    
                </li>
            </ul>
        </div>
        <div>

             <ul class="mt-30">
            <li 
                v-for="item in sidebarItems2" 
                :key="item.name"
                :title="item.name"
            >
                <a 
                        :href="item.link" 
                        class="flex items-center gap-3 px-8 py-3 hover:bg-blue-100 rounded-lg"
                    >
                        <img :src="item.iconSrc" :alt="item.name + ' Icon'" class="w-5 h-5" />
                        <span class="text-gray-700 dark:text-gray-300 font-medium">{{ item.name }}</span>
                        <button class="ml-auto">
                            <i class="pi pi-chevron-down"></i>
                        </button>
                        
                    </a>

                <transition name="accordion">
                    <ul v-if="item.children && open === item.name" class="submenu">
                        <li
                            v-for="child in item.children"
                            :key="child.name"

                        >
                            <i :class="child.icon"></i>
                            <span>{{ child.name }}</span>
                        </li>
                    </ul>
                </transition>
            </li>
        </ul>

        </div>
        
            <img :src="teresolLogo" alt="Teresol Logo" class=" px-8 w-60 h-auto mt-10" />
        
      
        
    </div>
</template>



<style>

</style>