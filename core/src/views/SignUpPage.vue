<template>
  <div class="bg-gray-50 min-h-screen" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '', backgroundPosition: 'center' }">
    <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 bg-transparent">
      <div class="flex items-center gap-2 sm:gap-3 md:gap-4 ml-2 sm:ml-5 mt-2 sm:mt-5 ">
        <img :src="bankLogo" alt="Bank Logo" class="w-[50px] h-[41px]" />
        <h1 class="text-[32px]  font-semibold font-inter">Core Banking System - TL1</h1>
      </div>

      <div class="flex items-center gap-2 bg-white rounded-md shadow-sm px-2 ">
        <div class="flex items-center gap-2 text-xs sm:text-sm font-medium mx-1 sm:mx-2">
          <i class="pi pi-globe text-lg sm:text-xl"></i>
          <span>ENG</span>
        </div>
        <button class="text-sm p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="open language menu">
          <i class="!text-xs pi pi-chevron-down "></i>
        </button>
      </div>
    </header>

    <main class="flex flex-col lg:ml-52 justify-center py-8 px-4 min-h-screen" >
      <div class="bg-white rounded-xl sm:rounded-2xl border border-[#dfe1e7] shadow-2xs p-6 lg:w-120">
        <div class="flex justify-start mb-3 sm:mb-4 md:mb-6">
          <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gray-100 flex items-start">
            <img :src="signupImage" alt="Sign Up" class="w-16 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-20 lg:h-20" />
          </div>
        </div>
        <h2 class="text-[36px] font-medium text-left mb-1  text-gray-800">Sign In</h2>
        <p class="text-sm sm:text-base text-left mb-6  text-gray-400">Enter your details to continue.</p>

        <div class="mb-4  ">
          <label for="userId" class="block text-[16px] sm:text-sm font-medium text-gray-700 mb-1.5">User ID</label>
          <div :class="['flex items-center bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 h-[44px]', userIdError ? 'border-red-500' : 'border-gray-200']" >
            <i class="pi pi-envelope text-[#666D80] mr-2 sm:mr-3 text-sm sm:text-base"></i>
            <input
              id="userId"
              v-model="userId"
              type="text"
              placeholder="Please enter your ID"
              class="flex-1 outline-none text-xs sm:text-sm text-gray-700 bg-transparent placeholder-[#666D80]"
              @input="userIdError = ''"
            />
          </div>
          <p v-if="userIdError" class="text-red-500 text-xs sm:text-sm mt-1">{{ userIdError }}</p>
        </div>

        <div class="mb-13">
          <label for="password" class="block text-[16px] sm:text-sm font-medium text-gray-700 mb-1.5">Password</label>
          <div :class="['flex items-center bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 h-[44px]', passwordError ? 'border-red-500' : 'border-[#E6E6E6]']">
            <i class="pi pi-lock text-[#666D80] mr-2 sm:mr-3 text-sm sm:text-base"></i>
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              class="flex-1 outline-none text-[16px] sm:text-sm text-gray-700 bg-transparent placeholder-[#666D80]"
              @input="passwordError = ''"
            />

            <button
              type="button"
              @click="showPassword = !showPassword"
              class="ml-2 text-gray-400 hover:text-gray-600"
              aria-label="toggle password visibility"
            >
              <i :class="showPassword ? 'pi pi-eye' : 'pi pi-eye-slash'" class="text-sm sm:text-base"></i>
            </button>
          </div>
          <p v-if="passwordError" class="text-red-500 text-xs sm:text-sm mt-1">{{ passwordError }}</p>
        </div>

        <button
          @click="handleSignUp"
          class="w-full  bg-[#4880FF] text-white font-semibold py-2 sm:py-3.5 text-xs sm:text-base rounded-xl transition duration-200 cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </main>
    <footer class="fixed bottom-0 left-0 right-0 sm:py-3 md:py-3 py-2.5 mb-4  ">
      <img :src="badgeImage" alt="Badge" class=" mb-4 w-48 h-17 lg:ml-90.75  " />
      <p class="text-[#272835] sm:text-sm md:text-base lg:ml-85 ">©{{ currentYear }} Core Banking System-TL1</p>
    </footer>
  </div>
</template>

<script>
import 'primeicons/primeicons.css'
import bgSignin from '../assets/images/Sign In.png'
import signup from '../assets/images/icon_sigin_grouped.svg'
import bankLogo from "../assets/images/icon_logo.svg"
import badge from  '../assets/images/Badge.svg'


  const year = new Date().getFullYear()


export default {


  data() {
    return {
      userId: '',
      password: '',
      userIdError: '',
      passwordError: '',
      showPassword: false,
      backgroundImage: bgSignin,
     signupImage: signup,
     bankLogo: bankLogo,
     currentYear: year,
     badgeImage: badge,
    }
  },
  methods: {
    handleSignUp() {
      this.userIdError = '';
      this.passwordError = '';
      
      let hasError = false;
      
      if (!this.userId.trim()) {
        this.userIdError = 'User ID is required';
        hasError = true;
      }
      
      if (!this.password.trim()) {
        this.passwordError = 'Password is required';
        hasError = true;
      }
      
      if (!hasError) {
        this.$router.push('/dashboard');
      }
    },

  },
  
}
</script>

<style scoped>
</style>