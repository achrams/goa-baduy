<template>
  <div class="w-full min-h-screen h-fit text-white">
    <Navbar />
    <div class="w-full min-h-screen h-full flex flex-col items-center py-28 px-18">
      <div class="w-full">
        <div class="flex flex-wrap items-end my-2 h-64 p-2 bg-gray-800">
          <img class="w-3/12 h-full" src="../assets/img/berita1.jpg" alt="vaksinasi">
          <div class="w-8/12 px-2 flex flex-col h-full justify-between">
            <h1 class="text-3xl p-4">Vaksinasi Untuk Indonesia Sehat</h1>
            <p class=" text-justify p-4">Goa baduy merupakan destinasi wisata edukasi untuk kegiatan outdoor dalam
              melakukan
              aktifitas, seperti belajar mengajar, wisata santri, pemeliharaan alam, geologi dan lain-lain.
              Nah pada kesempatan kali ini kegiatan yg sangat unik di lakukan oleh Desa Sukamanah Kecmatan Cimanggu
              Kabupaten Sukabumi adalah selain berwisata mereka pun melakukan tugas mulia yaitu mengajak masyarakat
              untuk
              melakukan VAKSINASI yang di lakukan di wahana wisata goa baduy palayangan.
              Masyarakat pun antusias berdatangan karna selain bermain mereka pun mendapatkan pelayanan kesehatan.
            </p>
          </div>
        </div>
        <div class="flex flex-wrap items-end my-2 h-64 p-2 bg-gray-800">
          <img class="w-3/12 h-full" src="../assets/img/pohon.jpg" alt="penanaman">
          <div class="w-8/12 px-2 flex flex-col h-full justify-between">
            <h1 class="text-3xl p-4">Penanaman 1000 Pohon</h1>
            <p class=" text-justify p-4">Gerakan Pramuka Indonesia bersama Palang Merah Indonesia (PMI) menggelar aksi
              penghijauan dengan menanam 1.000 pohon di kawasan Goa Baduy, Palayangan. Kegiatan ini menjadi bentuk nyata
              kolaborasi lintas organisasi kemanusiaan dan kepanduan untuk memulihkan ekosistem karst sekaligus
              menguatkan ketahanan lingkungan di sekitar destinasi wisata alam.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script setup>
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>