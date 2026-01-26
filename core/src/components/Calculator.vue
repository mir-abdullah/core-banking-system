<script setup>
import { ref } from 'vue';
import calculatorIcon from '../assets/images/icon_calculator.svg';

const display = ref('0');
const previousValue = ref(null);
const operation = ref(null);
const newNumber = ref(true);

const handleNumber = (num) => {
    if (newNumber.value) {
        display.value = num;
        newNumber.value = false;
    } else {
        display.value = display.value === '0' ? num : display.value + num;
    }
};

const handleOperation = (op) => {
    const currentValue = parseFloat(display.value);
    
    if (previousValue.value === null) {
        previousValue.value = currentValue;
    } else if (operation.value) {
        const result = calculate(previousValue.value, currentValue, operation.value);
        display.value = result.toString();
        previousValue.value = result;
    }
    
    operation.value = op;
    newNumber.value = true;
};

const calculate = (prev, current, op) => {
    switch (op) {
        case '+':
            return prev + current;
        case '-':
            return prev - current;
        case '*':
            return prev * current;
        case '/':
            return prev / current;
        case '%':
            return (prev / 100) * current;
        default:
            return current;
    }
};

const handleEquals = () => {
    if (operation.value && previousValue.value !== null) {
        const result = calculate(previousValue.value, parseFloat(display.value), operation.value);
        display.value = result.toString();
        previousValue.value = null;
        operation.value = null;
        newNumber.value = true;
    }
};

const handleClear = () => {
    display.value = '0';
    previousValue.value = null;
    operation.value = null;
    newNumber.value = true;
};

const handleDecimal = () => {
    if (newNumber.value) {
        display.value = '0.';
        newNumber.value = false;
    } else if (!display.value.includes('.')) {
        display.value += '.';
    }
};
</script>

<template>
    <div class="w-64 sm:w-80 md:w-96 bg-linear-to-b from-blue-50 to-blue-100 rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg overflow-hidden">
        <!-- Header -->
        <div class="flex items-center justify-between bg-[#3b82f6] text-white px-3 sm:px-5 md:px-6 py-2 sm:py-3.5 md:py-4">
            <div class="flex items-center gap-1.5 sm:gap-2">
                <img :src="calculatorIcon" alt="Calculator" class="w-4 h-4 sm:w-6 sm:h-6" />
                <h2 class="text-base sm:text-xl md:text-xl font-semibold">Calculator</h2>
            </div>
           
        </div>

        <!-- Display -->
        <div class="p-3 sm:p-5 md:p-6">
            <div class="rounded-lg p-2 sm:p-3.5 md:p-4 mb-3 sm:mb-5 md:mb-6 text-right border-b">
                <p class="text-xl sm:text-3xl md:text-3xl font-semibold text-gray-900 break-words">{{ display }}</p>
            </div>

            <!-- Arrow Buttons -->
            <!-- <div class="flex gap-2 mb-4">
                <button class="flex-1 py-2 text-gray-400 text-2xl hover:text-gray-600 transition-colors">
                    <i class="pi pi-arrow-right"></i>
                </button>
                <button class="flex-1 py-2 text-gray-400 text-2xl hover:text-gray-600 transition-colors">
                    <i class="pi pi-arrow-right"></i>
                </button>
            </div> -->

            <!-- Calculator Buttons Grid -->
            <div class="space-y-1.5 sm:space-y-2.5 md:space-y-3">
                <!-- Row 1 -->
                <div class="grid grid-cols-4 gap-1 sm:gap-2">
                    <button @click="handleClear" class="bg-blue-300 hover:bg-blue-400 text-red-600 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">C</button>
                    <button @click="handleOperation('/')" class="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">÷</button>
                    <button @click="handleOperation('%')" class="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">%</button>
                    <button @click="handleOperation('/')" class="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">/</button>
                </div>

                <!-- Row 2 -->
                <div class="grid grid-cols-4 gap-1 sm:gap-2">
                    <button @click="handleNumber('7')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">7</button>
                    <button @click="handleNumber('8')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">8</button>
                    <button @click="handleNumber('9')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">9</button>
                    <button @click="handleOperation('*')" class="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">*</button>
                </div>

                <!-- Row 3 -->
                <div class="grid grid-cols-4 gap-1 sm:gap-2">
                    <button @click="handleNumber('4')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">4</button>
                    <button @click="handleNumber('5')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">5</button>
                    <button @click="handleNumber('6')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">6</button>
                    <button @click="handleOperation('-')" class="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">−</button>
                </div>

                <!-- Row 4 -->
                <div class="grid grid-cols-4 gap-1 sm:gap-2">
                    <button @click="handleNumber('1')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">1</button>
                    <button @click="handleNumber('2')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">2</button>
                    <button @click="handleNumber('3')" class="bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">3</button>
                    <button @click="handleOperation('+')" class="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">+</button>
                </div>

                <!-- Row 5 -->
                <div class="grid grid-cols-4 gap-1 sm:gap-2">
                    <button @click="handleNumber('0')" class="col-span-2 bg-white hover:bg-gray-100 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">0</button>
                    <button @click="handleDecimal" class="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">.</button>
                    <button @click="handleEquals" class="bg-blue-300 hover:bg-blue-400 text-gray-700 font-bold rounded-full py-1.5 sm:py-2.5 md:py-3 text-sm sm:text-lg transition-colors">=</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
