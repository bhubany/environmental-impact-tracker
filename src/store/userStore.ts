import type { UserDetail } from '@/shared/types/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useDetailStore = defineStore('userDetail', () => {
  const user = ref<UserDetail | null>(JSON.parse(localStorage.getItem('userDetail') || 'null'))
  const isLoggedIn = computed(() => user.value?.isLoggedIn ?? false)

  function setUserDetails(details: UserDetail) {
    user.value = details
    localStorage.setItem('userDetail', JSON.stringify(details))
  }

  function clearUserDetails() {
    user.value = null
    localStorage.removeItem('userDetail')
  }

  return { user, isLoggedIn, setUserDetails, clearUserDetails }
})
