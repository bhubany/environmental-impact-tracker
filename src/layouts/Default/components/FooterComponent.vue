<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="p-4 bg-green-800 w-full text-white">
    <di class="mx-w-screen-xl mx-auto flex justify-center items-center">
      <p>
        &copy; {{ year }}
        <a href="https://www.bhubaneshwar.com.np/" target="_blank" class="text-blue-300 text-lg"
          >Bhuban Yadav</a
        >. All Rights Reserved
      </p>
    </di>
  </footer>
</template>
