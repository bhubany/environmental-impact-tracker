<script setup lang="ts">
import logo from '@/assets/logo.svg'
import { useAuth } from '@/composable/useAuth'
import LoginButton from '@/layouts/Default/components/LoginButton.vue'
import { cn } from '@/utils'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

type MenuType = {
  title: string
  path: string
}

const menus: MenuType[] = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/map',
    title: 'Map'
  },
  {
    path: '/contact',
    title: 'Contact'
  }
]
const { isAuthenticated } = useAuth()
const showhamburgerButton = ref<boolean>(true)

const toggleHamburgerButton = () => {
  showhamburgerButton.value = !showhamburgerButton.value
}
</script>

<template>
  <header class="md:bg-green-600 w-full sticky top-0 z-50 p-4">
    <div :class="cn('max-w-screen-xl  md:flex mx-auto')">
      <div class="flex justify-between items-center py-3 px-8 w-full">
        <RouterLink to="/" :class="cn('flex justify-center items-center gap-2')">
          <img :src="logo" alt="Environmental Impact Tracker Logo" width="24" height="auto" />
          <h1
            :class="cn('md:text-xl lg:text-2xl font-bold text-lg text-green-600 md:text-gray-100')"
          >
            Environmental Impact Tracker
          </h1>
        </RouterLink>
        <i
          v-if="showhamburgerButton"
          class="pi pi-bars font-black md:!hidden cursor-pointer"
          style="font-size: 1.5rem; font-weight: bold"
          @click="toggleHamburgerButton"
        ></i>
        <i
          v-else
          class="pi pi-times font-black md:!hidden cursor-pointer"
          style="font-size: 1.5rem; font-weight: bold"
          @click="toggleHamburgerButton"
        ></i>
      </div>
      <nav
        :class="
          cn(
            'flex flex-col justify-center items-center gap-4 bg-green-200 text-green-600 md:text-gray-100',
            showhamburgerButton ? 'hidden md:flex' : 'flex',
            'md:sticky md:top-0 absolute w-full  left-0 right-0 p-4',
            'md:flex-row md:bg-inherit'
          )
        "
      >
        <RouterLink
          v-for="(menu, idx) in menus"
          :key="idx"
          :to="menu.path"
          :class="
            cn('hover:underline border-b-[1px] border-gray-100 text-center', 'md:border-none')
          "
        >
          {{ menu.title }}
        </RouterLink>
        <LoginButton v-if="!isAuthenticated" class="mt-2 md:hidden" />
      </nav>
      <div class="hidden md:flex items-center justify-end">
        <LoginButton />
      </div>
    </div>
  </header>
</template>

<style>
.router-link-active {
  @apply font-bold md:text-white p-0 m-0;
}
</style>
