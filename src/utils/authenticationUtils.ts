import type { UserDetail } from '@/shared/types/user'

export const isUserAuthenticated = (): boolean => {
  const userDetailString = localStorage.getItem('userDetail')
  if (!userDetailString) {
    // console.log('No user details found in localStorage.')
    return false
  }

  try {
    const userDetail = JSON.parse(userDetailString) as UserDetail
    return userDetail.isLoggedIn
  } catch (error) {
    // console.error('Error parsing user details from localStorage:', error)
    return false
  }
}

export const getUserDetails = (): UserDetail | null => {
  const userDetailString = localStorage.getItem('userDetail')
  if (!userDetailString) {
    // console.log('No user details found in localStorage.')
    return null
  }

  try {
    return JSON.parse(userDetailString) as UserDetail
  } catch (error) {
    // console.error('Error parsing user details from localStorage:', error)
    return null
  }
}
