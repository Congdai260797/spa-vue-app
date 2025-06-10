<script setup>
import { ref } from "vue";

const email = ref("");

function handleSubmit() {
  if (email.value) {
    alert(`Cảm ơn bạn đã đăng ký với email: ${email.value}`);
    email.value = "";
  } else {
    alert("Vui lòng nhập email của bạn.");
  }
}
</script>

<template>
  <section class="py-16 bg-cream rounded-tl-[40px] rounded-tr-[40px]">
    <div class="container mx-auto px-6">
      <div
        class="mx-auto bg-dark-blue rounded-2xl p-8 md:p-10 text-white flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div class="text-center md:text-left">
          <h2 class="text-2xl md:text-3xl font-bold">
            Nhận thông báo từ Petstie Care
          </h2>
          <p class="text-gray-300 mt-1">ngay từ hôm nay</p>
        </div>
        <form @submit.prevent="handleSubmit" class="w-full max-w-md">
          <div class="flex items-center bg-white rounded-lg p-1.5">
            <input
              type="email"
              v-model="email"
              placeholder="Nhập Email của bạn"
              class="w-full px-4 py-2 bg-transparent text-gray-800 border-none focus:ring-0"
            />
            <button
              type="submit"
              class="bg-dark-blue text-white font-semibold px-6 py-2 rounded-md hover:bg-opacity-90 whitespace-nowrap"
            >
              Gửi ngay
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-cream {
  background: #fbeed4 !important;
}
.bg-dark-blue {
  background-color: #103559;
}
</style>
