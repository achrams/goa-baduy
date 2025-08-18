<template>
  <div class="w-full min-h-screen h-full bg-gray-900">
    <Navbar />
    <div class="w-full h-full min-h-screen px-8 md:px-18 py-12 flex flex-col items-center">
      <h1 class="text-4xl text-white my-24 text-center">Booking</h1>
      <div class="w-full md:w-1/2 flex flex-col gap-2">
        <label for="pax" class="text-white mt-2">Nama lengkap</label>
        <input type="text" class="w-full p-2 text-white border-b-1 focus:outline-0" v-model="name"
          placeholder="Nama Lengkap">
        <label for="phone" class="text-white mt-2">No. Telpon</label>
        <input type="text" class="w-full p-2 text-white border-b-1 focus:outline-0" placeholder="Nomor Telepon">
        <label for="pax" class="text-white mt-2">Total Pengunjung</label>
        <input type="number" min="1" class="w-full p-2 text-white border-b-1 focus:outline-0"
          placeholder="Jumlah Pengunjung" v-model="pax">
        <h5 class="text-white mt-2">Pilihan Outbond</h5>
        <div class="w-full flex items-center gap-2 justify-between mt-2">
          <label class="text-white flex items-center gap-2"><input type="checkbox" :value="true"
              v-model="arungJeram">Arung Jeram</label>
          <label class="text-white flex items-center gap-2"><input type="checkbox" :value="true"
              v-model="turunTebing">Turun Tebing</label>
          <label class="text-white flex items-center gap-2"><input type="checkbox" :value="true"
              v-model="camping">Camping</label>
        </div>
        <div class="w-full flex flex-col items-end">
          <div class="text-white mt-8 flex gap-2 items-end">
            <h5 class="text-lg">HTM</h5>
            <p class="text-lg">{{ `${pax} x ${ticketPrice}` }}</p>
          </div>
          <div class="text-white flex gap-2 items-end" v-if="arungJeram">
            <h5 class="text-lg">Arung Jeram</h5>
            <p class="text-lg">{{ `${pax} x ${formatRupiah(jeramPrice)}` }}</p>
          </div>
          <div class="text-white flex gap-2 items-end" v-if="turunTebing">
            <h5 class="text-lg">Turun Tebing</h5>
            <p class="text-lg">{{ `${pax} x ${formatRupiah(tebingPrice)}` }}</p>
          </div>
          <div class="text-white flex gap-2 items-end" v-if="camping">
            <h5 class="text-lg">Camping</h5>
            <p class="text-lg">{{ `${totalCamp()} x ${formatRupiah(campPrice)}` }}</p>
          </div>
          <div class="text-white flex gap-2 items-end">
            <h5 class="text-lg">Total Price</h5>
            <p class="text-lg">{{ totalPrice() }}</p>
          </div>
          <div class="w-full mt-8">
            <button class="w-full p-2 text-white bg-green-700 cursor-pointer" @click="submitForm">Submit</button>
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
import { ref } from 'vue';
const name = ref(null)
const pax = ref(1)
const ticketPrice = ref(5000)
const arungJeram = ref(false)
const camping = ref(false)
const turunTebing = ref(false)
const jeramPrice = ref(25000)
const tebingPrice = ref(15000)
const campPrice = ref(150000)
const formatRupiah = (val) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(val);
}

const totalCamp = () => {
  const total = Math.ceil(pax.value / 5)
  return total
}

const totalPrice = () => {
  const ticketing = pax.value * ticketPrice.value
  const turun = turunTebing.value == true ? pax.value * tebingPrice.value : 0
  const jeram = arungJeram.value == true ? pax.value * jeramPrice.value : 0
  const camp = camping.value == true ? totalCamp() * campPrice.value : 0

  return ticketing + turun + jeram + camp
}

const submitForm = () => {
  const link = `https://wa.me/+6285721905207?text=Saya atas nama ${name.value} ingin memesan tiket untuk berkunjung ke Wisata Goa Baduy dengan total peserta sebanyak ${pax.value} orang. ${turunTebing.value == true ? 'juga ingin melakukan Turun Tebing' : ''} ${arungJeram.value == true ? 'lalu ingin melakukan Arung Jeram' : ''} ${camping.value == true ? 'dan ingin melakukan Camping.' : ''}`
  window.open(link, '_blank')
}
</script>