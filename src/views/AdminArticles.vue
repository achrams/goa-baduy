<template>
  <div class="w-full h-full min-h-screen bg-gray-900 flex">
    <Sidebar />
    <div class="w-4/5 flex flex-col p-8">
      <div class="w-full text-white text-3xl flex items-center gap-2">
        <h4 class="font-semibold">Article List</h4>
        <button class="text-[18px] h-8 w-8 bg-gray-700 rounded-full flex items-center justify-center"
          @click="addArticle">
          +
        </button>
      </div>
      <div v-if="articles.length" class="w-full grid grid-cols-5 gap-2 mt-4">
        <div v-for="article in articles" class="w-full h-64">
          <img class="w-full h-40 object-cover" :src="article.image" :alt="article.title">
          <div class="w-full h-12 flex items-center justify-center text-center text-sm bg-gray-800 text-white">
            {{ article.title }}
          </div>
          <div class="w-full flex items-center justify-center text-center text-sm text-white">
            <button class="w-1/2 bg-gray-600 p-2 cursor-pointer" @click="editArticle(article.id)">Edit</button>
            <button class="w-1/2 bg-gray-700 p-2 cursor-pointer" @click="deleteArticle(article.id)">Delete</button>
          </div>
        </div>
      </div>
      <div v-else class="w-full mt-4 h-64 bg-gray-800 text-white flex items-center justify-center">No Data.</div>
    </div>
  </div>
</template>
<script setup>
import Sidebar from '@/components/Sidebar.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
const URL = import.meta.env.VITE_API_URL
const router = useRouter()
const articles = ref([])

const getArticles = () => {
  axios.get(URL + '/articles')
    .then(res => {
      articles.value = res.data.data
    })
    .catch(err => {
      console.log(err)
    })
}

const addArticle = () => {
  router.push('/admin/articles/add')
}

const editArticle = (id) => {
  router.push('/admin/articles/edit/' + id)
}

const deleteArticle = (id) => {
  axios.delete(URL + '/articles/' + id)
    .then(res => {
      getArticles()
    }).catch(err => {

    })
}

onMounted(() => {
  if (!localStorage.token) useRouter().push('/admin')
  getArticles()
})
</script>