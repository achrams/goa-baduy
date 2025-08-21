<template>
  <div>
    <footer class="w-full h-fit bg-gray-900 py-4 px-6 text-white text-center flex items-center justify-between">
      <div class="w-14"></div>
      <p class="text-sm">© 2025 Goa Baduy Palayangan. All rights reserved.</p>
      <div class="w-6 cursor-pointer" @click="toPage('/admin')"><img src="../assets/icons/admin.png" alt="admin"></div>
    </footer>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const toPage = (path) => {
  router.push(path)
}
</script>