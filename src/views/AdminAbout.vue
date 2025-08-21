<template>
  <div class="w-full h-full min-h-screen bg-gray-900 flex">
    <Sidebar />
    <div class="w-4/5 flex flex-col p-8">
      <div class="w-full flex gap-1">
        <div class="w-1/2 h-fit ">
          <label for="contents" class="text-md text-white">About Us</label>
          <div class="w-full flex flex-col gap-1">
            <div v-for="(content, i) in contents" :key="i" class="w-full flex gap-1">
              <textarea name="contents" :id="i" class="w-11/12 h-44 p-2 bg-white" v-model="contents[i]"></textarea>
              <div class="w-8 flex flex-col gap-2 justify-start items-center">
                <button v-if="i === contents.length - 1"
                  class="w-8 h-8 flex items-center justify-center bg-gray-800 font-bold text-xl text-white cursor-pointer"
                  @click="addParagraph">+</button>
                <button v-if="i !== 0"
                  class="w-8 h-8 flex items-center justify-center bg-gray-800 font-bold text-xl text-white cursor-pointer"
                  @click="removeParagraph(i)">-</button>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col gap-1">
            <label for="visi" class="text-md text-white">Visi</label>
            <div class="w-full flex gap-1">
              <input class="w-11/12 p-2 bg-white" type="text" v-model="visi">
              <div class="w-8"></div>
            </div>
          </div>
        </div>
        <div class="w-1/2 h-fit">
          <label for="misi" class="text-md text-white">Misi</label>
          <div class="w-full flex flex-col gap-1">
            <div v-for="(content, i) in misi" :key="i" class="w-full flex gap-1">
              <textarea name="misi" :id="i" class="w-11/12 h-44 p-2 bg-white" v-model="misi[i]"></textarea>
              <div class="w-8 flex flex-col gap-2 justify-start items-center">
                <button v-if="i === misi.length - 1"
                  class="w-8 h-8 flex items-center justify-center bg-gray-800 font-bold text-xl text-white cursor-pointer"
                  @click="addParagraphMisi">+</button>
                <button v-if="i !== 0"
                  class="w-8 h-8 flex items-center justify-center bg-gray-800 font-bold text-xl text-white cursor-pointer"
                  @click="removeParagraphMisi(i)">-</button>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col gap-1">
            <div class="h-6"></div>
            <div class="w-full flex gap-1">
              <button class="w-11/12 p-2 text-white bg-gray-700 cursor-pointer" @click="editAbout">Simpan</button>
              <div class="w-8"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/components/Sidebar.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
const URL = import.meta.env.VITE_API_URL
const contents = ref([''])
const visi = ref('')
const misi = ref([''])

const addParagraph = () => {
  contents.value.push('')
}

const removeParagraph = (i) => {
  const result = contents.value.filter((e, id) => id !== i)
  contents.value = result
}

const addParagraphMisi = () => {
  misi.value.push('')
}

const removeParagraphMisi = (i) => {
  const result = misi.value.filter((e, id) => id !== i)
  misi.value = result
}

const getAbout = () => {
  axios.get(URL + '/admin/about')
    .then(res => {
      const result = res.data.data
      contents.value = result.contents
      visi.value = result.visi
      misi.value = result.misi
    })
}

const editAbout = () => {
  axios.post(URL + '/admin/about', {
    contents: contents.value,
    visi: visi.value,
    misi: misi.value
  }).then(res => {
    getAbout()
    alert('Data Saved.')
  })
}

onMounted(() => {
  getAbout()
})
</script>