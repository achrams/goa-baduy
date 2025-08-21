<template>
  <div class="w-full min-h-screen h-fit text-white">
    <Navbar />
    <div class="w-full min-h-screen h-full flex flex-col items-center py-28 p-4 md:px-18">
      <div class="w-full">
        <div v-if="articles.length" v-for="article in articles" :key="article.id"
          class="flex flex-wrap items-start my-2 h-full md:h-fit lg:h-64 p-2 bg-gray-800">
          <img class="w-full md:w-3/12 h-full" :src="article.image" alt="vaksinasi">
          <div class="w-full md:w-8/12 px-2 flex flex-col h-full justify-between">
            <h1 class="text-3xl p-4">{{ article.title }}</h1>
            <p v-for="(content, i) in article.contents" class=" text-justify p-4">{{ content }}
            </p>
          </div>
        </div>
        <div v-else class="flex flex-wrap items-center justify-center my-2 h-64 p-2 bg-gray-800">No Articles.</div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import axios from 'axios'
const URL = import.meta.env.VITE_API_URL
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import { onMounted, ref } from 'vue';

const articles = ref([])

const fetchArticles = async () => {
  try {
    const result = await axios.get(URL + '/articles')
    if (!result) throw new Error('Article not found.')
    console.log(result.data.data)
    articles.value = result.data.data
  } catch (err) {
    console.log(err)
  }

}

onMounted(() => {
  fetchArticles()
})
</script>