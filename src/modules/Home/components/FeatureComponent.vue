<script setup lang="ts">
import FeatureCard, { type FeatureCardType } from '@/modules/Home/components/FeatureCard.vue'

const features: FeatureCardType[] = [
  {
    id: 1,
    title: 'Track Carbon Footprint',
    description: 'Calculate and monitor your daily carbon emissions.',
    icon: 'globe'
  },
  {
    id: 2,
    title: 'Support Green Initiatives',
    description: 'Discover and contribute to environmental projects.',
    icon: 'asterisk'
  },
  {
    id: 3,
    title: 'Analyze Your Progress',
    description: 'Set goals and track your environmental impact over time.',
    icon: 'chart-bar'
  }
]
</script>

<template>
  <section class="w-full bg-green-100">
    <div class="max-w-screen-xl mx-auto">
      <h2 class="text-center text-xl font-bold my-3">Features</h2>
      <div class="flex flex-wrap justify-center items-stretch gap-4 py-4">
        <FeatureCard v-for="feature in features" :key="feature.id" :data="feature"></FeatureCard>
      </div>
    </div>
  </section>
</template>
