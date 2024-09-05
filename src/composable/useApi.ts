import axios, { type AxiosInstance } from 'axios'
import { ref, type Ref, type UnwrapRef } from 'vue'

import { type ApiError, type ApiResponse } from '@/shared/types/api'

export function useApi<T>(baseUrl: string) {
  const data: Ref<UnwrapRef<T> | null> = ref(null)
  const error = ref<ApiError | null>(null)
  const loading = ref<boolean>(false)

  const apiClient: AxiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const fetchData = async (endpoint: string, options = {}) => {
    loading.value = true
    error.value = null
    try {
      const response = await apiClient.get<ApiResponse<T>>(endpoint, options)
      data.value = response.data as UnwrapRef<T>
    } catch (err: any) {
      error.value = { message: err.message }
    } finally {
      loading.value = false
    }
  }

  return { data, error, loading, fetchData }
}
