<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import FeatureCard, { type FeatureCardType } from '@/modules/Home/components/FeatureCard.vue'
import { defineProps } from 'vue'

defineProps({
  features: {
    type: Array as () => FeatureCardType[],
    required: true
  }
})
</script>

<template>
  <section class="w-full">
    <ContentWrapper class="p-4 bg-gray-200 py-16 mt-10 mb-20 rounded-lg md:px-10">
      <h2 class="text-xl font-bold my-3 text-green-700">Key Features for a Sustainable Future</h2>
      <p class="text-gray-800">
        Discover tools to measure your environmental impact, support green initiatives, and track
        your progress toward a more sustainable lifestyle.
      </p>
      <div class="flex flex-wrap justify-center items-stretch gap-6 py-10">
        <FeatureCard v-for="feature in features" :key="feature.id" :data="feature"></FeatureCard>
      </div>
    </ContentWrapper>
  </section>
</template>
