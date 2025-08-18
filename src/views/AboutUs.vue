<template>
  <div class="w-full h-full min-h-screen bg-gray-900 relative">
    <Navbar />
    <div class="w-full px-4 md:px-18 py-20 flex flex-col">
      <h1 class="text-white text-4xl my-8 text-center z-20">About Us</h1>
      <p class="text-justify text-white mt-8 z-20">Goa Baduy memiliki Panjang ± 700 M, lebar 4 sampai 10 M, kedalaman ±
        50 M,
        tinggi 6 sampai 12 M, di dalam goa
        tersebut terdapat sungai Ciawitali Leuwi Surupan yang bisa dilalui oleh pengunjung, di dalam Goa Baduy juga
        terdapat 3 danau, Mulut Goa Baduy terletak di Kampung Palayangan dan ujungnya terletak di Kampung Surupan Desa
        Sukamanah Kecamatan Cimanggu Stalagmit menjadi ciri khas dari goa ini yang merupakan kumpulan kalsit yang
        berasal dari air yang menetes, serta Stalaktit yaitu jenis speleothem yang menggantung dari langit-langit gua
        kapur dari pengendapan kalsium karbonat dan mineral lainnya.</p>
      <p class="text-justify text-white mt-8 z-20">Goa Baduy di resmikan menjadi suatu objek wisata pada tahun 2020 oleh
        Bapak Rahmat Kurnia selaku Kepala Desa Sukamanah Kecamatan Cimanggu Kabupaten Sukabumi yang mana tujuan untuk
        dijadikan tempat musyawarah dan menghidari kerumunan saat wabah COVID 19.</p>
      <div class="w-full flex gap-2 justify-between">
        <div>
          <h1 class="text-white text-4xl my-8 z-20 text-center">Visi</h1>
          <h2 class="text-white z-20">Mengangkat perekonomian masyarakat melalui wisata desa dan UMKM
          </h2>
        </div>
        <div>
          <h1 class="text-white text-4xl my-8 z-20 text-center">Misi</h1>
          <ul class="text-white px-4 z-20">
            <li class="list-decimal mt-2">Melestarikan keragaman geologi, biologi dan budaya melalui konsep pembangunan
              berkelanjutan.
            </li>
            <li class="list-decimal mt-2">Menjadikan warisan bumi sebagai pusat studi lapangan tingkat nasional.
            </li>
            <li class="list-decimal mt-2">Mengembangkan wisata berkelanjutan melalui peningkatan SDM dan
              pemberdayan ekonomi local.
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full md:w-[90vw] h-auto py-8 mt-8">
        <img src="../assets/img/about.jpg" class="w-full h-auto md:h-[500px] object-fit md:object-cover" alt="about-us">
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>