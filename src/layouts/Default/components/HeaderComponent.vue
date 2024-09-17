<script setup lang="ts">
import logo from '@/assets/logo.svg'
import PrimaryButton from '@/components/buttons/PrimaryButton.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import { useAuth } from '@/composable/useAuth'
import LoginButton from '@/layouts/Default/components/LoginButton.vue'
import { menus } from '@/shared/constants/menu'
import type { UserDetail } from '@/shared/types/user'
import { cn } from '@/utils'
import { getUserDetails } from '@/utils/authenticationUtils'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

export type MenuType = {
  title: string
  path: string
}

const isAuthenticated = ref<boolean>(false)
const userDetail = ref<UserDetail>()
const showhamburgerButton = ref<boolean>(true)

const toggleHamburgerButton = () => {
  showhamburgerButton.value = !showhamburgerButton.value
}

onMounted(() => {
  isAuthenticated.value = useAuth().isAuthenticated
  userDetail.value = getUserDetails() as UserDetail
})
</script>

<template>
  <header :class="cn('md:bg-skin-header-large bg-skin-header-small w-full sticky top-0 z-50 p-4')">
    <div :class="cn('max-w-screen-xl  md:flex mx-auto')">
      <div class="flex justify-between items-center py-3 px-8 w-full">
        <RouterLink to="/" :class="cn('flex justify-center items-center gap-2')">
          <img :src="logo" alt="Environmental Impact Tracker Logo" width="24" height="auto" />
          <h1
            :class="
              cn(
                'md:text-xl lg:text-2xl font-bold text-lg text-skin-header-title-small md:text-skin-header-title-large'
              )
            "
          >
            Environmental Impact Tracker
          </h1>
        </RouterLink>
        <ThemeSwitcher class="md:hidden" />
        <i
          v-if="showhamburgerButton"
          class="pi pi-bars md:!hidden cursor-pointer text-skin-hamburger-button"
          style="font-size: 1.5rem; font-weight: bold"
          @click="toggleHamburgerButton"
        ></i>
        <i
          v-else
          class="pi pi-times md:!hidden cursor-pointer text-skin-hamburger-button"
          style="font-size: 1.5rem; font-weight: bold"
          @click="toggleHamburgerButton"
        ></i>
      </div>
      <nav
        :class="
          cn(
            'flex flex-col justify-center items-center gap-4 bg-skin-secondary text-skin-primary md:text-skin-active',
            showhamburgerButton ? 'hidden md:flex' : 'flex',
            'md:sticky md:top-0 absolute w-full  left-0 right-0 p-4',
            'md:flex-row md:bg-inherit'
          )
        "
      >
        <RouterLink
          @click="toggleHamburgerButton"
          v-for="(menu, idx) in menus"
          :key="idx"
          :to="menu.path"
          :class="
            cn('hover:underline border-b-[1px] border-gray-100 text-center', 'md:border-none')
          "
        >
          {{ menu.title }}
        </RouterLink>
        <RouterLink
          @click="toggleHamburgerButton"
          :to="`${isAuthenticated ? '/profile' : '/login'}`"
          :class="
            cn(
              'hover:underline border-b-[1px] border-gray-100 text-center',
              'md:border-none md:hidden'
            )
          "
        >
          {{ isAuthenticated ? 'Profile' : 'Login' }}
        </RouterLink>
      </nav>
      <div class="hidden md:flex items-center justify-end">
        <PrimaryButton v-if="isAuthenticated" to="/profile" title="Profile" />
        <LoginButton v-else />
        <ThemeSwitcher class="hidden md:block" />
      </div>
    </div>
  </header>
</template>

<style>
.router-link-exact-active {
  @apply font-bold md:text-skin-active m-0;
}
</style>
