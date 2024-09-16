<script setup lang="ts">
import { cn } from '@/utils'
import { computed, onMounted, ref } from 'vue'

const theme = ref('light')

const themeIcon = computed(() =>
  theme.value === 'light' ? 'pi pi-sun md:text-yellow-900 ' : 'pi pi-moon text-gray-900'
)

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.className = theme.value === 'light' ? '' : 'dark-theme'
  localStorage.setItem('theme', theme.value)
}

onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 'light'
  theme.value = savedTheme
  document.documentElement.className = savedTheme === 'light' ? '' : 'dark-theme'
})
</script>

<template>
  <div class="flex justify-center items-center">
    <button
      @click="toggleTheme"
      class="bg-white border border-green-500 p-2 rounded-full shadow-md flex items-center justify-center md:ml-8"
    >
      <i :class="cn(themeIcon, 'pi text-2xl')"></i>
    </button>
  </div>
</template>

<style scoped>
button {
  transition: background-color 0.3s ease-in-out;
}
</style>
