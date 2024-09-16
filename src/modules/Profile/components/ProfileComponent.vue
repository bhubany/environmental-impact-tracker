<script setup lang="ts">
import SecondaryButton from '@/components/buttons/SecondaryButton.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import InfoComponent from '@/components/InfoComponent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import type { UserDetail } from '@/shared/types/user'
import { useDetailStore } from '@/store/userStore'
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
const router = useRouter()
const toast = useToast()

defineProps({
  user: {
    type: Object as () => UserDetail,
    required: true
  }
})

const detailStore = useDetailStore()

const handleLogout = () => {
  detailStore.clearUserDetails()
  toast.success('Logout success`')
  router.push('/login')
}
</script>

<template>
  <ContentWrapper>
    <LoadingComponent v-if="!user" />
    <div v-else class="absolute h-screen w-full inset-0 flex justify-center items-center">
      <div
        class="flex flex-col justify-center items-center relative bg-slate-50 m-10 px-4 w-full py-10 md:py-40 rounded-lg shadow-lg md:shadow-2xl max-w-2xl overflow-hidden"
      >
        <h4 class="text-heading-4 font-heading mb-2 text-green-700">Hello {{ user.name }},</h4>
        <h3 class="text-heading-3 text-gray-700 mb-8">Welcome Back!</h3>
        <InfoComponent class="mx-4 mb-10" label="Important Information About Your Data">
          Important Information About Your Data When you sign in using Google authentication,
          certain details are stored securely in your browser's local storage. This data is not
          saved on any server and is only accessible through your browser. Currently, we are reading
          and displaying this information directly from your browser's local storage. This ensures
          that your data remains private and only accessible to you during your browsing session.
          Your privacy and security are important to us. If you have any questions or concerns about
          how your data is handled, please feel free to reach out to our support team.
        </InfoComponent>
        <SecondaryButton
          label="Logout"
          :onclick="handleLogout"
          class="bg-red-400 hover:bg-red-500"
        />
      </div>
    </div>
  </ContentWrapper>
</template>
