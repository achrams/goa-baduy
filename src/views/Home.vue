<template>
  <div class="w-full h-full relative">
    <Navbar />
    <div class="w-full h-screen relative flex flex-col items-center justify-center">
      <img src="../assets/img/bg.png" alt="top-background" class="w-full h-full object-cover absolute z-10" />
      <h1 class="font-[Mahaputra] z-20 text-white text-4xl md:text-6xl text-center">Goa Baduy Palayangan</h1>
    </div>
    <div class="w-full h-fit bg-gray-900 py-8 px-4 md:px-18">
      <h2 class="text-white text-3xl font-bold text-center my-8">Tentang Goa Baduy Palayangan</h2>
      <h5 class="text-white text-lg text-justify mt-12">
        Goa Baduy Palayangan adalah salah satu destinasi wisata alam yang unik dan penuh misteri, terletak di kawasan
        dengan panorama hijau yang masih asri. Goa ini dikenal memiliki nuansa mistis sekaligus keindahan alami yang
        memikat para pengunjung. Dengan stalaktit dan stalagmit yang terbentuk secara alami selama ratusan tahun, Goa
        Baduy Palayangan menjadi daya tarik bagi wisatawan yang menyukai petualangan, sejarah, dan wisata alam.
      </h5>
      <h5 class="text-white text-lg text-justify my-8">
        Selain keindahan goanya, kawasan sekitar juga menyuguhkan suasana pedesaan yang tenang, aliran sungai yang
        jernih, serta udara sejuk khas pegunungan. Lokasi ini sering menjadi pilihan bagi para pencinta alam,
        fotografer, hingga peneliti geologi yang ingin merasakan langsung keindahan sekaligus kekayaan alamnya.
      </h5>
      <h5 class="text-white text-lg text-justify mb-12">
        Sebagai destinasi wisata yang terus berkembang, Goa Baduy Palayangan tidak hanya menawarkan pengalaman
        eksplorasi alam, tetapi juga sarana edukasi tentang fenomena geologi dan budaya lokal di sekitarnya. Dengan
        akses yang semakin mudah dan fasilitas yang mulai terkelola, tempat ini semakin populer di kalangan wisatawan
        lokal maupun mancanegara.
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
          <h5 class="text-white cursor-pointer" @click="toMaps">Kampung Palayangan Legok Picung Rt.01/01 Desa Sukamanah
            Kecamatan
            Cimanggu
            Kabupaten Sukabumi.</h5>
        </div>
        <div class="flex items-center gap-2">
          <img src="../assets/icons/phone.png" alt="location" class="w-6 h-6">
          <h5 class="text-white">+62 857-2190-5207 (Alamsyah)</h5>
        </div>
        <div class="flex items-center gap-2">
          <img src="../assets/icons/instagram.png" alt="instagram" class="w-6 h-6">
          <h5 class="text-white cursor-pointer" @click="toInstagram">@goa_baduy</h5>
        </div>
        <div class="flex items-center gap-2">
          <img src="../assets/icons/facebook.png" alt="facebook" class="w-6 h-6">
          <h5 class="text-white cursor-pointer" @click="toFacebook">Goa Baduy Palayangan</h5>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '../components/Navbar.vue';

const toFacebook = () => {
  window.open('https://www.facebook.com/profile.php?id=100064971781055', '_blank')
}

const toInstagram = () => {
  window.open('https://www.instagram.com/goa_baduy', '_blank')
}

const toMaps = () => {
  window.open('https://maps.app.goo.gl/TQFBBxYunaeWPXhAA', '_blank')
}
</script>