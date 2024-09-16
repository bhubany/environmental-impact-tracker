<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import InfoComponent from '@/components/InfoComponent.vue'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { decodeCredential } from 'vue3-google-login'
import { useDetailStore } from '../../store/userStore'

const router = useRouter()

export type GoogleAuthToken = {
  iss: string
  azp: string
  aud: string
  sub: string
  email: string
  email_verified: boolean
  nbf: number
  name: string
  picture: string
  given_name: string
  family_name: string
  iat: number
  exp: number
  jti: string
}

const detailStore = useDetailStore()

const getImageBlob = async (imageUrl: string): Promise<string | null> => {
  try {
    const response = await fetch(imageUrl)

    if (!response.ok) {
      console.error(`Failed to fetch image: ${response.statusText}`)
      return null
    }

    const blob = await response.blob()

    return URL.createObjectURL(blob)
  } catch (error) {
    console.error('Error fetching image:', error)
    return null
  }
}

const callback = async (response: any) => {
  const userData = decodeCredential(response.credential) as GoogleAuthToken
  const profilePic = await getImageBlob(userData.picture)
  detailStore.setUserDetails({
    isLoggedIn: true,
    email: userData.email,
    email_verified: userData.email_verified,
    name: userData.name,
    picture: userData.picture,
    given_name: userData.given_name,
    family_name: userData.family_name,
    profilePic: profilePic
  })
  router.push('/profile')
}

onMounted(() => {})
</script>

<template>
  <ContentWrapper>
    <div class="absolute h-screen w-full inset-0 flex justify-center items-center">
      <div
        class="flex flex-col justify-center items-center relative bg-slate-50 m-10 px-4 w-full py-20 md:py-40 rounded-lg shadow-lg md:shadow-2xl max-w-2xl overflow-hidden"
      >
        <InfoComponent class="mx-4 mb-10">
          We value your privacy! This site does not store any of your personal information on our
          servers. All your data is securely stored in your browser only. You’re in control, and no
          information is shared or saved anywhere else. Enjoy peace of mind while using our site!
        </InfoComponent>
        <h1 class="text-heading-3 font-heading mb-4">Sigin using Google</h1>
        <GoogleLogin :callback="callback" prompt />
      </div>
    </div>
  </ContentWrapper>
</template>

<style scoped>
.g_id_signin {
  margin-top: 20px;
}
</style>
