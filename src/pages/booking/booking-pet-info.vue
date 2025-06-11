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
      <div class="label">1. Thú cưng bạn cần thăm khám là ?</div>
      <div class="mt-[24px] w-full h-[48px] flex justify-start gap-[24px]">
        <button class="select-button">Chó</button>
        <button class="select-button">Mèo</button>
        <button class="select-button">Khác</button>
      </div>
      <div class="label mt-[24px]">2. Chọn dịch vụ thú cưng</div>
      <div class="mt-[24px]">
        <select
          v-model="selectedService"
          class="w-[480px] border-2 border-[#103559] px-[24px] py-[14px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
        >
          <option disabled value="">Chọn loại dịch vụ</option>
          <option value="kham_tong_quat">Khám tổng quát</option>
          <option value="tiem_phong">Tiêm phòng</option>
          <option value="spa_grooming">Spa & Grooming (Làm đẹp)</option>
          <option value="phau_thuat">Phẫu thuật</option>
          <option value="ho_sinh">Hộ sinh</option>
        </select>
      </div>
      <div class="label mt-[24px]">3. Tình trạng chi tiết thú cưng của bạn</div>
      <div class="mt-[24px]">
        <textarea
          v-model="petDetails"
          rows="5"
          class="w-[480px] border-2 border-[#103559] text-slate-700 p-4 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
          placeholder="Hãy mô tả rõ ràng các triệu chứng, hành vi bất thường hoặc tình trạng sức khỏe gần đây của thú cưng."
        ></textarea>
      </div>
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