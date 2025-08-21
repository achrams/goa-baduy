<template>
  <div class="w-full h-full min-h-screen bg-gray-900 flex">
    <Sidebar />
    <div class="w-4/5 flex flex-col">
      <div class="w-full flex">
        <div class="w-1/2 p-4">
          <div class="w-full">
            <label for="title" class="text-md text-white">Title Halaman</label>
            <input type="text" v-model="title" class="bg-white w-11/12 p-2 focus:outline-0" placeholder="title">
          </div>
          <div class="w-full flex flex-col gap-1">
            <label for="contents" class="text-md text-white">Isi Konten</label>
            <div v-for="(content, i) in contents" :key="i" class="w-full flex">
              <textarea name="contents" :id="i" class="w-11/12 h-44 p-2 bg-white" v-model="contents[i]"></textarea>
              <div class="w-1/12 flex flex-col gap-2 justify-start items-center">
                <button v-if="i === contents.length - 1"
                  class="w-8 h-8 flex items-center justify-center bg-gray-800 font-bold text-xl text-white cursor-pointer"
                  @click="addParagraph">+</button>
                <button v-if="i !== 0"
                  class="w-8 h-8 flex items-center justify-center bg-gray-800 font-bold text-xl text-white cursor-pointer"
                  @click="removeParagraph(i)">-</button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="info" class="w-1/2 p-4">
          <div class="w-full">
            <div>
              <label for="address_text" class="text-md text-white">Alamat</label>
              <input type="text" v-model="info.address.text" class="bg-white w-11/12 p-2 focus:outline-0"
                placeholder="Alamat">
            </div>
            <div>
              <label for="address_url" class="text-md text-white">URL Alamat</label>
              <input type="text" v-model="info.address.url" class="bg-white w-11/12 p-2 focus:outline-0"
                placeholder="URL Alamat">
            </div>
          </div>
          <div class="w-full mt-4">
            <div>
              <label for="contact_name" class="text-md text-white">Nama Kontak</label>
              <input type="text" v-model="info.contact.name" class="bg-white w-11/12 p-2 focus:outline-0"
                placeholder="Nama Kontak">
            </div>
            <div>
              <label for="title" class="text-md text-white">No. telp</label>
              <input type="text" v-model="info.contact.phone" class="bg-white w-11/12 p-2 focus:outline-0"
                placeholder="No. Telp">
            </div>
          </div>
          <div class="w-full mt-4">
            <div>
              <label for="fb_name" class="text-md text-white">Facebook</label>
              <input type="text" v-model="info.facebook.name" class="bg-white w-11/12 p-2 focus:outline-0"
                placeholder="Facebook">
            </div>
            <div>
              <label for="fb_url" class="text-md text-white">URL Facebook</label>
              <input type="text" v-model="info.facebook.url" class="bg-white w-11/12 p-2 focus:outline-0"
                placeholder="URL Facebook">
            </div>
          </div>
          <div class="w-full mt-4">
            <div>
              <label for="ig_name" class="text-md text-white">Instagram</label>
              <input type="text" v-model="info.instagram.name" class="bg-white w-11/12 p-2 focus:outline-0"
                placeholder="Instagram">
            </div>
            <div>
              <label for="ig_url" class="text-md text-white">URL Instagram</label>
              <input type="text" v-model="info.instagram.url" class="bg-white w-11/12 p-2 focus:outline-0"
                placeholder="URL Instagram">
            </div>
          </div>
          <div class="w-11/12 mt-7">
            <button class="w-full text-white bg-gray-700 p-2" @click="saveData">Simpan</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/components/Sidebar.vue';
import axios from 'axios';
const URL = import.meta.env.VITE_API_URL
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const title = ref('')
const contents = ref([])
const info = ref({
  address: {
    text: '',
    url: ''
  },
  contact: {
    name: '',
    phone: ''
  },
  facebook: {
    name: '',
    url: ''
  },
  instagram: {
    name: '',
    url: ''
  }
})

const getLandingPageData = () => {
  axios.get(URL + '/landing').then(res => {
    const data = res.data.data
    title.value = data.title
    contents.value = data.contents
    info.value = data.info
  }).catch(err => {
    console.log(err)
  })
}

const addParagraph = () => {
  contents.value.push('')
}

const removeParagraph = (i) => {
  const result = contents.value.filter((e, id) => id !== i)
  contents.value = result
}

const saveData = () => {
  axios.post(URL + '/landing', {
    info: info.value,
    title: title.value,
    contents: contents.value
  })
    .then(res => {
      console.log(res)
      window.location.reload()
    })
    .catch(err => {
      console.log(err)
    })
}

onMounted(() => {
  if (!localStorage.token) useRouter().push('/admin')
  getLandingPageData()
})
</script>