<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="p-4 bg-green-800 w-full text-white">
    <di class="mx-w-screen-xl mx-auto flex flex-wrap gap-4 justify-center items-center">
      <p>
        &copy; {{ year }}
        <a href="https://www.bhubaneshwar.com.np/" target="_blank" class="text-blue-300 text-lg"
          >Bhuban Yadav</a
        >. All Rights Reserved
      </p>
      <a href="https://github.com/bhubany/environmental-impact-tracker" target="_blank" class="">
        <i class="pi pi-github"> Source Code</i>
      </a>
    </di>
  </footer>
</template>
