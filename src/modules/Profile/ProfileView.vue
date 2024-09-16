<script setup lang="ts">
import type { UserDetail } from '@/shared/types/user'
import { getUserDetails } from '@/utils/authenticationUtils'
import { onMounted, ref } from 'vue'
import ProfileComponent from './components/ProfileComponent.vue'

const user = ref<UserDetail | null>(null)

onMounted(() => {
  user.value = getUserDetails()
})
</script>

<template>
  <ProfileComponent :user="user!" />
</template>
