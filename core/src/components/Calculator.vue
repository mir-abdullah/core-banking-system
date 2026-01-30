<script setup>
import { ref } from 'vue';
import calculatorIcon from '../assets/images/icon_calculator.svg';
import calculator2 from '../assets/images/calculator2.svg';
import backspaceIcon from '../assets/images/Vector.svg';

const display = ref('0');
const previousValue = ref(null);
const operation = ref(null);
const newNumber = ref(true);
const displayExpression = ref('0');

const handleNumber = (num) => {
    if (newNumber.value) {
        display.value = num;
        displayExpression.value = num;
        newNumber.value = false;
    } else {
        display.value = display.value === '0' ? num : display.value + num;
        displayExpression.value = displayExpression.value === '0' ? num : displayExpression.value + num;
    }
};

const handleOperation = (op) => {
    const currentValue = parseFloat(display.value);
    
    if (previousValue.value === null) {
        previousValue.value = currentValue;
    } else if (operation.value) {
        const result = calculate(previousValue.value, currentValue, operation.value);
        display.value = result.toString();
        displayExpression.value = result.toString();
        previousValue.value = result;
    }
    
    operation.value = op;
    displayExpression.value = displayExpression.value + ' ' + op + ' ';
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
        displayExpression.value = result.toString();
        previousValue.value = null;
        operation.value = null;
        newNumber.value = true;
    }
};

const handleClear = () => {
    display.value = '0';
    displayExpression.value = '0';
    previousValue.value = null;
    operation.value = null;
    newNumber.value = true;
};

const handleDecimal = () => {
    if (newNumber.value) {
        display.value = '0.';
        displayExpression.value = displayExpression.value === '0' ? '0.' : displayExpression.value + '0.';
        newNumber.value = false;
    } else if (!display.value.includes('.')) {
        display.value += '.';
        displayExpression.value += '.';
    }
};

const handleBackspace = () => {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
        displayExpression.value = displayExpression.value.slice(0, -1);
    } else {
        display.value = '0';
        displayExpression.value = displayExpression.value.endsWith(' ') ? displayExpression.value.slice(0, -3) : '0';
        newNumber.value = true;
    }
};
</script>

<template>
    <div class="w-[314px] bg-blue-50 rounded-[18px] shadow-lg overflow-hidden">
        <!-- Header -->
        <div class="flex items-center justify-between bg-[#4880ff] text-white px-5 py-4 h-[54px] w-[314px]">
            <div class="flex items-center gap-2">
                <i class="pi pi-calculator text-lg"></i>
                <h2 class="text-lg font-semibold">Calculator</h2>
            </div>
        </div>

        <!-- Display -->
        <div class="p-5 pb-4">
            <div class="border-b-2 border-[#E6E6E6] pt-12 p-4 mb-2 text-right min-h-16 flex items-center justify-end">
                <p class="text-3xl font-semibold text-gray-900 break-words w-full">{{ displayExpression }}</p>
            </div>

            <!-- Calculator Buttons Grid -->
            <div class="space-y-0.5 ">
                <!-- Row 1 -->
                <div class="grid grid-cols-4 space-y-1.5 ">
                    <button @click="handleClear" class="bg-[#BDD1FF] hover:bg-purple-300 text-red-600 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">C</button>
                                        <button @click="handleBackspace" class="bg-[#BDD1FF] hover:bg-[#4880ff] hover:text-white text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors"><img src="../assets/images/Vector.svg" alt="Backspace Icon" /></button>

                    <button @click="handleOperation('%')" class="bg-[#BDD1FF] hover:bg-[#4880ff] hover:text-white text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">%</button>
                    <button @click="handleOperation('/')" class="bg-[#BDD1FF] hover:bg-[#4880ff] hover:text-white text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">÷</button>
                </div>

                <!-- Row 2 -->
                <div class="grid grid-cols-4 gap-0.5 space-y-1.5">
                    <button @click="handleNumber('7')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">7</button>
                    <button @click="handleNumber('8')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">8</button>
                    <button @click="handleNumber('9')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">9</button>
                    <button @click="handleOperation('*')" class="bg-[#BDD1FF] hover:bg-[#4880ff] hover:text-white text-gray-700 font-semibold rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">*</button>
                </div>

                <!-- Row 3 -->
                <div class="grid grid-cols-4 gap-0.5 space-y-1.5">
                    <button @click="handleNumber('4')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">4</button>
                    <button @click="handleNumber('5')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">5</button>
                    <button @click="handleNumber('6')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px] transition-colors">6</button>
                    <button @click="handleOperation('-')" class="bg-[#BDD1FF] hover:bg-[#4880ff] hover:text-white text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">−</button>
                </div>

                <!-- Row 4 -->
                <div class="grid grid-cols-4 gap-0.5 space-y-1.5">
                    <button @click="handleNumber('1')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px] transition-colors">1</button>
                    <button @click="handleNumber('2')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px] transition-colors">2</button>
                    <button @click="handleNumber('3')" class="bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px] transition-colors">3</button>
                    <button @click="handleOperation('+')" class="bg-[#BDD1FF] hover:bg-[#4880ff] hover:text-white text-gray-700 font-semibold rounded-full w-14 h-14 flex items-center justify-center text-[28px] transition-colors">+</button>
                </div>

                <!-- Row 5 -->
                <div class="grid grid-cols-4 gap-1">
                    <button @click="handleNumber('0')" class="col-span-2 bg-white hover:bg-[#BDD1FF] text-gray-700 font-medium rounded-full h-14 flex items-center justify-center text-[28px]  transition-colors">0</button>
                    <button @click="handleDecimal" class="bg-[#BDD1FF] hover:bg-[#4880ff] hover:text-white text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">.</button>
                    <button @click="handleEquals" class="bg-[#BDD1FF] hover:bg-[#4880ff] hover:text-white text-gray-700 font-medium rounded-full w-14 h-14 flex items-center justify-center text-[28px]  transition-colors">=</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
