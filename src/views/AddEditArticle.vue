<template>
  <div class="w-full h-full min-h-screen bg-gray-900 flex">
    <Sidebar />
    <div class="w-4/5 flex flex-col items-center p-8">
      <div class="w-3/5 flex flex-col items-center">
        <h4 class="font-semibold text-white text-3xl">{{ mode }} Article</h4>
        <div class="w-11/12 flex flex-col gap-1">
          <label for="title" class="text-md text-white">Title</label>
          <div class="w-full flex gap-1">
            <input class="w-full p-2 bg-white" type="text" v-model="title">
            <div class="w-8"></div>
          </div>
        </div>
        <div class="w-11/12 flex flex-col gap-1">
          <label for="image_url" class="text-md text-white">Image URL</label>
          <div class="w-full flex gap-1">
            <input class="w-full p-2 bg-white" type="text" v-model="image">
            <div class="w-8"></div>
          </div>
        </div>
        <div class="w-11/12 flex flex-col gap-1">
          <label for="contents" class="text-md text-white">Isi Konten</label>
          <div v-for="(content, i) in contents" :key="i" class="w-full flex gap-1">
            <textarea name="contents" :id="i" class="w-full h-44 p-2 bg-white" v-model="contents[i]"></textarea>
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
        <div class="w-11/12 flex flex-col gap-1 mt-6">
          <div class="w-full flex gap-1">
            <button class="w-full p-2 text-white bg-gray-700" @click="saveData">Simpan</button>
            <div class="w-8"></div>
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
import { useRoute, useRouter } from 'vue-router';
const URL = import.meta.env.VITE_API_URL

const route = useRoute()
const router = useRouter()

const articleId = ref(null)
const mode = ref('Add')
const title = ref('')
const image = ref('')
const contents = ref([''])

const addParagraph = () => {
  contents.value.push('')
}

const removeParagraph = (i) => {
  const result = contents.value.filter((e, id) => id !== i)
  contents.value = result
}

const saveData = () => {
  if (mode.value == 'Add') {
    axios.post(URL + '/articles', {
      title: title.value,
      contents: contents.value,
      image: image.value
    })
      .then(res => {
        router.push('/admin/articles')
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    axios.put(URL + '/articles/' + articleId.value, {
      title: title.value,
      contents: contents.value,
      image: image.value
    })
      .then(res => {
        router.push('/admin/articles')
      })
      .catch(err => {
        console.log(err)
      })
  }
}

onMounted(() => {
  if (route.params.id) {
    articleId.value = route.params.id
    mode.value = 'Edit'
    axios.get(URL + '/articles/' + articleId.value)
      .then(res => {
        const result = res.data.data
        title.value = result.title || ''
        contents.value = result.contents || ['']
        image.value = result.image
      })
  }
})
</script>