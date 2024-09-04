<script setup lang="ts">
import FooterComponent from '@/layouts/Default/components/FooterComponent.vue'
import HeaderComponent from '@/layouts/Default/components/HeaderComponent.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <HeaderComponent />
    <main class="flex-1 bg-green-100">
      <div class="w-full max-w-screen-xl mx-auto">
        <router-view />
      </div>
    </main>
    <FooterComponent />
  </div>
</template>
