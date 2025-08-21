<template>
  <div class="w-full h-full relative">
    <Navbar />
    <div class="w-full h-screen relative flex flex-col items-center justify-center">
      <img src="../assets/img/bg.png" alt="top-background" class="w-full h-full object-cover absolute z-10" />
      <h1 class="font-[Mahaputra] z-20 text-white text-4xl md:text-6xl text-center">Goa Baduy Palayangan</h1>
    </div>
    <div v-if="information" class="w-full h-fit">
      <div class="w-full h-fit bg-gray-900 py-8 px-4 md:px-18">
        <h2 class="text-white text-3xl font-bold text-center my-8">{{ title }}</h2>
        <h5 class="text-white text-lg text-justify mt-12" v-for="(content, id) in contents" :key="id">
          {{ content }}
        </h5>
      </div>
      <div class="px-4 py-12 md:px-18 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <img src="../assets/img/slide1.jpg" alt="slide-1">
        <img src="../assets/img/slide2.jpg" alt="slide-2">
        <img src="../assets/img/slide3.jpg" alt="slide-3">
        <img src="../assets/img/slide4.jpg" alt="slide-4">
      </div>
      <div class="px-4 py-18 md:px-18 flex justify-between flex-wrap gap-2 bg-gray-900">
        <img class="w-full md:w-3/12 h-auto cursor-pointer" @click="toMaps" src="../assets/img/lokasi.png"
          alt="lokasi-png">
        <div class="w-full md:w-8/12 flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <img src="../assets/icons/location.png" alt="location" class="w-6 h-6">
            <h5 v-if="information.address" class="text-white cursor-pointer" @click="toMaps">Kampung Palayangan Legok
              Picung Rt.01/{{ information.address.text }}</h5>
          </div>
          <div v-if="information.contact" class="flex items-center gap-2">
            <img src="../assets/icons/phone.png" alt="location" class="w-6 h-6">
            <h5 class="text-white">{{ information.contact.phone }} ({{ information.contact.name }})</h5>
          </div>
          <div v-if="information.instagram" class="flex items-center gap-2">
            <img src="../assets/icons/instagram.png" alt="instagram" class="w-6 h-6">
            <h5 class="text-white cursor-pointer" @click="toInstagram">{{ information.instagram.name }}</h5>
          </div>
          <div v-if="information.facebook" class="flex items-center gap-2">
            <img src="../assets/icons/facebook.png" alt="facebook" class="w-6 h-6">
            <h5 class="text-white cursor-pointer" @click="toFacebook">{{ information.facebook.name }}</h5>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '../components/Navbar.vue';
import { onMounted, ref } from 'vue';
import axios from 'axios';
const URL = import.meta.env.VITE_API_URL
const information = ref({})
const title = ref('')
const contents = ref([])
const toFacebook = () => {
  window.open(information.value.facebook.url, '_blank')
}

const toInstagram = () => {
  window.open(information.value.instagram.url, '_blank')
}

const toMaps = () => {
  window.open(information.value.address.url, '_blank')
}

const fetchInfo = () => {
  axios.get(URL + '/landing')
    .then(res => {
      information.value = res.data.data.info
      title.value = res.data.data.title
      contents.value = res.data.data.contents
      console.log(res.data.data)
    })
    .catch(err => {
      console.log(err)
    })
}

onMounted(() => {
  fetchInfo()
})
</script>