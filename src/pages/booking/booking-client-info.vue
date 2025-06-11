<script setup>
import { ref } from 'vue';

// Reactive state để lưu trữ dữ liệu từ form
const selectedPet = ref('cho'); // Mặc định chọn 'Chó' giống trong hình
const selectedService = ref(''); // Dịch vụ chưa được chọn
const petDetails = ref(''); // Mô tả chi tiết
</script>

<template>
  <div class="w-full flex justify-between">
    <div class="input-section flex-grow">
      <div class="label">1. Họ và tên khách hàng</div>
      <div class="mt-[24px] w-full h-[48px] flex justify-start gap-[24px]"></div>
      <div class="label mt-[24px]">2. Số điện thoại khách hàng</div>
      <div class="mt-[24px]"></div>
      <div class="label mt-[24px]">3. Email</div>
      <div class="mt-[24px]"></div>
      <div class="label mt-[24px]">4. Địa chỉ của bạn</div>
      <div class="mt-[24px]"></div>
      <div class="label mt-[24px]">5. Chọn lịch khám</div>
      <div class="mt-[24px]"></div>
    </div>
    <div class="image-section self-center">
      <img width="300" height="300" src="./../../assets/image/booking-logo.png" alt="">
    </div>
  </div>
</template>

<style scoped>
.label {
  font-size: 20px;
  font-weight: 600;
  color: #103559;
}
.select-button {
  width: 104px;
  height: 48px;
  border: 2px solid #103559;
  border-radius: 8px;
}

.select-button:active {
  background-color: #103559;
  color: #ffffff;
}
</style>