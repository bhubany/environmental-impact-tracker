<script setup lang="ts">
import PrimaryButton from '@/components/buttons/primaryButton.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
</script>

<template>
  <section class="w-full">
    <ContentWrapper class="bg-hero bg-cover h-96 md:h-[600px] mt-3">
      <div
        class="w-full h-full bg-black bg-opacity-30 flex flex-col items-center justify-center p-10"
      >
        <div
          class="bg-white bg-opacity-90 flex flex-col items-center justify-center px-4 gap-6 rounded-lg shadow-xl py-10"
        >
          <h3 class="text-heading-3 font-heading text-blue-700 text-center">
            Track Your Environmental Impact
          </h3>
          <h4 class="text-heading-4 text-center text-gray-700">
            Join us in making a difference by tracking your carbon footprint and supporting green
            initiatives.
          </h4>
          <PrimaryButton title="Learn More" to="/about" />
        </div>
      </div>
    </ContentWrapper>
  </section>
</template>
