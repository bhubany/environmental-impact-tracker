<script setup lang="ts">
import PrimaryButton from '@/components/buttons/primaryButton.vue'
</script>

<template>
  <section class="bg-blue-100 w-full">
    <div class="flex flex-col justify-center items-center max-w-screen-xl mx-auto py-10 p-8 gap-2">
      <h2 class="font-bold text-blue-800">Track Your Environmental Impact</h2>
      <p class="">
        Join us in making a difference by tracking your carbon footprint and supporting green
        initiatives.
      </p>
      <PrimaryButton title="Learn More" to="/about" />
    </div>
  </section>
</template>
