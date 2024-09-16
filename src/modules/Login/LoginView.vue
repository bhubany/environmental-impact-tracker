<script setup lang="ts">
import ContentWrapper from '@/components/ContentWrapper.vue'
import { config } from '@/config'
import { onMounted } from 'vue'

const clientId = config.googleAuthClientId

onMounted(() => {
  const loadGoogleScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = 'https://accounts.google.com/gsi/client'
      script.async = true
      script.defer = true
      script.onload = resolve
      document.head.appendChild(script)
    })
  }

  loadGoogleScript().then(() => {
    window?.google!.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse
    })

    window.google!.accounts.id.renderButton(document.querySelector('.g_id_signin')!, {
      theme: 'outline',
      size: 'large'
    })
  })

  const handleCredentialResponse = (response: any) => {
    const token = response.credential
    console.log('Google User Token:', token)
  }
})
</script>

<template>
  <ContentWrapper>
    <div class="absolute h-screen w-full inset-0 flex justify-center items-center">
      <div
        class="flex flex-col justify-center items-center relative bg-slate-50 m-10 w-full py-20 rounded-lg shadow-lg max-w-2xl"
      >
        <h1 class="text-heading-3 font-heading">Sigin using Google</h1>
        <div
          id="g_id_onload"
          :data-client_id="clientId"
          data-login_uri=""
          data-auto_prompt="false"
        ></div>

        <div
          class="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left"
        ></div>
      </div>
    </div>
  </ContentWrapper>
</template>

<style scoped>
.g_id_signin {
  margin-top: 20px;
}
</style>
