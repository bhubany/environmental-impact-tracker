import { isUserAuthenticated } from '@/utils/authenticationUtils'

export type AuthType = {
  isAuthenticated: boolean
}

export function useAuth(): AuthType {
  return {
    isAuthenticated: isUserAuthenticated()
  }
}
