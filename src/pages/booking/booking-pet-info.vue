<script setup>
  import { useBookingPetStore } from './../../shared/stores/bookingStore';

  const bookingPetStore = useBookingPetStore();

  const listTypeService = [
    { value: 'spa', name: 'Chăm sóc - Spa thú cưng' },
    { value: 'vaccination', name: 'Tiêm phòng & phòng ngừa' },
    { value: 'treatment', name: 'Khám và điều trị' },
  ];
</script>

<template>
  <div class="w-full flex justify-between">
    <div class="input-section flex-grow">
      <div class="label">1. Thú cưng bạn cần thăm khám là ?</div>
      <div class="mt-[24px] w-full h-[48px] flex justify-start gap-[24px]">
        <button
          class="select-button"
          :class="{ 'bg-[#103559] text-white': bookingPetStore.petType === 'cho' }"
          @click="bookingPetStore.petType = 'cho'"
        >
          Chó
        </button>
        <button
          class="select-button"
          :class="{ 'bg-[#103559] text-white': bookingPetStore.petType === 'meo' }"
          @click="bookingPetStore.petType = 'meo'"
        >
          Mèo
        </button>
        <button
          class="select-button"
          :class="{ 'bg-[#103559] text-white': bookingPetStore.petType === 'khac' }"
          @click="bookingPetStore.petType = 'khac'"
        >
          Khác
        </button>
      </div>
      <div class="label mt-[24px]">2. Chọn dịch vụ thú cưng</div>
      <div class="mt-[24px]">
        <select
          v-model="bookingPetStore.serviceType"
          class="w-[480px] border-2 border-[#103559] px-[24px] py-[14px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
        >
          <option disabled value="">Chọn loại dịch vụ</option>
          <option v-for="service in listTypeService" :key="service.value" :value="service.value">
            {{ service.name }}
          </option>
        </select>
      </div>
      <div class="label mt-[24px]">3. Tình trạng chi tiết thú cưng của bạn</div>
      <div class="mt-[24px]">
        <textarea
          v-model="bookingPetStore.petState"
          rows="5"
          class="w-[480px] border-2 border-[#103559] text-slate-700 p-4 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
          placeholder="Hãy mô tả rõ ràng các triệu chứng, hành vi bất thường hoặc tình trạng sức khỏe gần đây của thú cưng."
        ></textarea>
      </div>
    </div>
    <div class="image-section self-center">
      <img width="300" height="300" src="./../../assets/image/booking-logo.png" alt="" />
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
