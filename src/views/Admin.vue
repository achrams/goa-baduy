<template>
  <div class="w-full h-screen bg-gray-900 flex flex-col items-center justify-center gap-2">
    <div class="w-2/4">
      <label for="username" class="text-white">Username</label>
    </div>
    <input class="w-2/4 p-2 bg-white" type="text" v-model="username">
    <div class="w-2/4">
      <label for="password" class="text-white">Password</label>
    </div>
    <input class="w-2/4 p-2 bg-white" type="password" v-model="password" @keyup.enter="login">
    <button class="w-2/4 p-2 bg-gray-700 text-white font-bold cursor-pointer" @click="login">Login</button>
  </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const URL = import.meta.env.VITE_API_URL
const router = useRouter()
const username = ref('')
const password = ref('')

const login = () => {
  axios.post(URL + '/user/login', {
    username: username.value, password: password.value
  })
    .then(res => {
      console.log(res.data)
      if (res.status == 201) {
        localStorage.setItem('token', res.data.token)
        router.push('/admin/dashboard')
      }
    })
    .catch(err => {
      console.log(err.response)
    })
}
</script>