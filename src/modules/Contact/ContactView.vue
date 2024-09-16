<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import AddressMapCOmponent from './components/AddressMapCOmponent.vue'
import ContactFormComponent from './components/ContactFormComponent.vue'
import DisclaimerComponent from './components/DisclaimerComponent.vue'
import GetInTouchComponent from './components/GetInTouchComponent.vue'
</script>
<template>
  <ContentWrapper>
    <DisclaimerComponent />
    <GetInTouchComponent />
    <ContactFormComponent />
    <AddressMapCOmponent />
  </ContentWrapper>
</template>
