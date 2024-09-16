<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import AddressMapCOmponent from './components/AddressMapCOmponent.vue'
import ContactFormComponent from './components/ContactFormComponent.vue'
import GetInTouchComponent from './components/GetInTouchComponent.vue'
</script>
<template>
  <ContentWrapper>
    <GetInTouchComponent />
    <ContactFormComponent />
    <AddressMapCOmponent />
  </ContentWrapper>
</template>
