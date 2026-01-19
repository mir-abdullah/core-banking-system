<template>
  <div class="bg-gray-50 min-h-screen" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '', backgroundPosition: 'center' }">
    <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-transparent">
      <div class="flex items-center gap-3 ml-5 mt-5">
        <img :src="bankLogo" alt="Bank Logo" class="w-12 h-12" />
        <h1 class="text-2xl font-semibold font-sans">Core Banking System</h1>
      </div>

      <div class="flex items-center gap-2 bg-white rounded-md shadow-sm px-1 py-1">
        <div class="flex items-center gap-1 text-sm font-medium mx-2">
          <i class="pi pi-globe text-xl"></i>
          <span>ENG</span>
        </div>
        <button class="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="open language menu">
          <i class="pi pi-chevron-down"></i>
        </button>
      </div>
    </header>

    <main class="pt-20 min-h-screen flex items-center justify-center px-4" >
      <div class="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md">
        <div class="flex justify-center mb-4">
          <div class="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
            <img :src="signupImage" alt="Sign Up" class="w-20 h-20" />
          </div>
        </div>
        <h2 class="text-3xl font-bold text-center mb-2 text-gray-800 font-sans">Sign In</h2>
        <p class="text-md text-center mb-8 text-gray-400">Enter your details to continue.</p>

        <div class="mb-6">
          <label for="userId" class="block text-sm font-medium text-gray-700 mb-2">User ID</label>
          <div class="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <i class="pi pi-envelope text-gray-400 mr-3"></i>
            <input
              id="userId"
              v-model="userId"
              type="text"
              placeholder="Please enter your ID"
              class="flex-1 outline-none text-gray-700 bg-transparent"
            />
          </div>
        </div>

        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
          <div class="flex items-center bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
            <i class="pi pi-lock text-gray-400 mr-3"></i>
            <input
              id="password"
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              placeholder="Enter your password"
              class="flex-1 outline-none text-gray-700 bg-transparent"
            />
            <button
              type="button"
              @click="showPassword = !showPassword"
              class="ml-2 text-gray-400 hover:text-gray-600"
              aria-label="toggle password visibility"
            >
              <i :class="showPassword ? 'pi pi-eye-slash' : 'pi pi-eye'"></i>
            </button>
          </div>
        </div>

        <button
          @click="handleSignUp"
          class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200 cursor-pointer"
        >
          Sign In
        </button>
      </div>
    </main>
    <footer class="fixed bottom-0 left-0 right-0 py-4">
      <p class="text-center text-gray-500 text-md">©2025 Core Banking System</p>
    </footer>
  </div>
</template>

<script>
import 'primeicons/primeicons.css'
import bgSignin from '../assets/images/bg_signin.png'
import signup from '../assets/images/icon_sigin_grouped.svg'
import bankLogo from "../assets/images/icon_logo.svg"

export default {
  data() {
    return {
      userId: '',
      password: '',
      showPassword: false,
      backgroundImage: bgSignin,
     signupImage: signup,
     bankLogo: bankLogo,
    }
  },
  methods: {
    handleSignUp() {
      this.$router.push('/dashboard')
    },
  },
}
</script>

<style scoped>
</style>