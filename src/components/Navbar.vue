<template>
  <div
    class="w-full h-fit fixed top-0 left-0 z-50 duration-200 delay-75 flex items-center justify-between px-4 md:px-18"
    :style="{ backgroundColor: scrollY > 0 ? 'rgba(0, 0, 0, 0.8)' : 'transparent' }"
    :class="{ 'bg-gray-900': scrollY > 0, 'bg-transparent': scrollY === 0 }">
    <div class="w-fit flex items-center" v-if="route.path !== '/'">
      <div class="w-30 p-4 h-24 flex justify-center items-center cursor-pointer"
        :class="{ 'hover:bg-gray-900': scrollY > 0 }" @click="toPage('/')">
        <h2 class="text-white font-[CaviarDreams] text-lg md:text-xl">Home</h2>
      </div>
    </div>
    <div class="w-fit flex items-center justify-center">
      <div class="w-30 p-4 h-24 flex justify-center items-center cursor-pointer" v-if="route.path !== '/berita'"
        :class="{ 'hover:bg-gray-900': scrollY > 0 }">
        <h2 class="text-white font-[CaviarDreams] text-lg md:text-xl" @click="toPage('/berita')">Berita</h2>
      </div>
      <div class="w-30 p-4 h-24 flex justify-center items-center cursor-pointer" v-if="route.path !== '/book'"
        :class="{ 'hover:bg-gray-900': scrollY > 0 }">
        <h2 class="text-white font-[CaviarDreams] text-lg md:text-xl" @click="toPage('/book')">Book</h2>
      </div>
      <div class="w-30 p-4 h-24 flex justify-center items-center cursor-pointer" v-if="route.path !== '/about'"
        :class="{ 'hover:bg-gray-900': scrollY > 0 }" @click="toPage('/about')">
        <h2 class="text-white font-[CaviarDreams] text-lg md:text-xl">About Us</h2>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const router = useRouter()
const scrollY = ref(0);
const route = useRoute()
const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const toPage = (path) => {
  router.push(path)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

</script>