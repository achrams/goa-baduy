<template>
  <div class="w-1/5 h-full min-h-screen p-4 bg-gray-800">
    <div class="text-center text-3xl w-full p-4 font-bold text-white">Admin Panel</div>
    <div
      class="w-full p-4 text-center text-white bg-gray-800 hover:bg-gray-900 border-b-gray-900 border-b-1 cursor-pointer"
      @click="toPage('/admin/dashboard')">
      Homepage</div>
    <div
      class="w-full p-4 text-center text-white bg-gray-800 hover:bg-gray-900 border-b-gray-900 border-b-1 cursor-pointer"
      @click="toPage('/admin/articles')">
      Articles</div>
    <div
      class="w-full p-4 text-center text-white bg-gray-800 hover:bg-gray-900 border-b-gray-900 border-b-1 cursor-pointer"
      @click="toPage('/admin/about')">
      About Us</div>
    <div
      class="w-full p-4 text-center text-white bg-gray-800 hover:bg-gray-900 border-b-gray-900 border-b-1 cursor-pointer"
      @click="logout">
      Logout</div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const toPage = (path) => {
  router.push(path)
}

const logout = () => {
  localStorage.clear()
  router.push('/admin')
}
</script>