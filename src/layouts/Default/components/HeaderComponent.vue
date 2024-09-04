<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { useAuth } from '@/composable/useAuth'
import { RouterLink } from 'vue-router'
const { isAuthenticated } = useAuth()
console.log(isAuthenticated)
</script>

<template>
  <header class="bg-green-600 w-full sticky">
    <div class="max-w-screen-xl mx-auto flex justify-between items-center p-4 text-white">
      <RouterLink to="/" class="flex gap-2">
        <img :src="logo" alt="Environmental Impact Tracker Logo" width="40" />
        <h1 class="text-3xl font-bold">Environmental Impact Tracker</h1>
      </RouterLink>
      <nav class="flex space-x-4">
        <RouterLink to="/" class="nav-link"> Home </RouterLink>
        <RouterLink to="/about" class="nav-link"> About </RouterLink>
        <RouterLink to="/map" class="nav-link"> Map </RouterLink>
        <RouterLink to="/dashboard" class="nav-link"> Contact </RouterLink>
      </nav>
      <RouterLink v-if="!isAuthenticated" to="/login" class="nav-link"> Login </RouterLink>
    </div>
  </header>
</template>

<style>
.nav-link {
  @apply hover:underline;
}

.router-link-active {
  @apply font-bold;
}
</style>
