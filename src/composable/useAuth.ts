import { ref } from 'vue'

const isAuthenticated = ref<boolean>(false)

export type AuthType = {
  isAuthenticated: boolean
}

export function useAuth(): AuthType {
  return {
    isAuthenticated: isAuthenticated.value
  }
}
