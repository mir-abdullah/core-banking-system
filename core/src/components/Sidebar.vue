
<script setup>
    import { sidebarItems } from '../data/data';
    import { sidebarItems2 } from '../data/data';
    import sidebarlogo from "../assets/images/icon_navbar_logo.svg"
    import { ref } from 'vue';
    import toggleIcon from "../assets/images/icon_navbar_toggle.svg" 

    

</script>
<template>
    
    <div class="w-84 h-full bg-white relative">
       
        <!--make this appear on the top right of sidebar-->
        <button class="absolute top-1 right-4 p-1 rounded-lg cursor-pointer ">
            <img :src="toggleIcon" alt="Toggle Sidebar" class="w-7 h-7"  />
        </button>    
        
        <div class="flex gap-2 items-center px-4 py-6 ">
            <img :src="sidebarlogo" alt="Bank Logo"  class="w-10 h-10" />
            <h1 class="text-blue-500 font-sans font-semibold text-2xl" >Core Banking System</h1>
        </div>
        <div class="mt-8">
            <ul>
                <li v-for="item in sidebarItems" :key="item.id" class="mb-1 ">
                    <a 
                        :href="item.link" 
                        class="flex items-center gap-3 px-8 py-3 hover:bg-gray-300 dark:hover:bg-blue-300 rounded-lg"
                    >
                        <img :src="item.iconSrc" :alt="item.name + ' Icon'" class="w-5 h-5" />
                        <span class="text-gray-700 dark:text-gray-300 font-medium">{{ item.name }}</span>
                    </a>
                    
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-for="item in sidebarItems2" :key="item.id" class="mb-1 ">
                    <a :href="item.link">
                        

                    </a>

                </li>
            </ul>

        </div>

      
        
    </div>
</template>



<style>

</style>