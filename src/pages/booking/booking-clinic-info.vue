<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import BookingService from './booking.service';

  import { useBookingPetStore } from './../../shared/stores/bookingStore';

  import locations from './../../data/location.json';

  const listCity = locations;

  const bookingPetStore = useBookingPetStore();

  const bookingService = new BookingService();

  const listClinic = ref([]);

  onMounted(async () => {
    const selectedCity = bookingPetStore.selectedCity;
    const selectedDistrict = bookingPetStore.selectedDistrict;
    const selectedWard = bookingPetStore.selectedWard;
    const clientAddress = bookingPetStore.clientAddress;

    const cityName = listCity.find((item) => item.Id == selectedCity)?.Name;

    const district = listCity
      .find((item) => item.Id == selectedCity)
      .Districts.find((district) => district.Id == selectedDistrict).Name;

    const ward = listCity
      .find((item) => item.Id == selectedCity)
      .Districts.find((district) => district.Id == selectedDistrict)
      .Wards.find((ward) => ward.Id == selectedWard).Name;

    const address = `${clientAddress} ${ward} ${district} ${cityName}`;
    bookingPetStore.address = address;

    const response = await bookingService.detailClinic(address);
    listClinic.value = response.data.clinics;
  });

  const addClinic = (clinic) => {
    bookingPetStore.clinicId = clinic.clinicId;
    bookingPetStore.clinicName = clinic.clinicName;
    bookingPetStore.clinicAddress = clinic.clinicAddress;
  };
</script>

<template>
  <div class="w-full">
    <div class="suggest-section w-full h-[60px] roundede-[20px] flex justify-between items-center">
      <div class="label">Chọn phòng khám phù hợp</div>
      <p class="text-red-500 p-1" v-if="!bookingPetStore.clinicId && bookingPetStore.submitStatus">
        Vui lòng chọn chọn phòng khám.
      </p>
      <div class="buttons">
        <button class="bg-[#103559] text-white">Gợi ý từ AI</button>
        <button class="ml-[12px]">Gần tôi</button>
        <button class="ml-[12px]">Đánh giá</button>
      </div>
    </div>

    <div class="list-clinic">
      <div
        class="w-full h-[160px] flex items-center justify-start mb-6"
        v-for="clinic in listClinic"
        :key="clinic.id"
      >
        <div class="block_1 h-full flex items-center border-r border-[#C9CFD4]">
          <div class="w-[160px] h-full flex justify-center items-center object-cover">
            <img
              class="w-[160px] h-[160px] object-cover rounded-[10px]"
              :src="clinic.logoUrl"
              alt=""
            />
          </div>

          <div class="w-[300px] px-[24px]">
            <div class="w-full h-fit text-[#103559] text-[18px] font-bold leading-[24px]">
              {{ clinic?.name }}
            </div>
            <div class="w-full h-fit text-[#103559] text-[14px] font-bold leading-[20px] mt-[8px]">
              {{ clinic?.clinicDescription }}
            </div>
            <div class="mt-[8px] flex justify-between items-center">
              <div class="flex items-center gap-[2px]">
                {{ clinic?.rating.toFixed(1) }}
                <svg class="mt-1 w-4 h-4 text-brand-blue fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
              </div>

              <span class="text-[#103559]">Khoảng cách: <span class="font-bold">3km</span></span>
            </div>
          </div>
        </div>
        <div class="block_2 w-[340px] text-[#103559] border-r border-[#C9CFD4] px-[24px]">
          <div class="flex justify-start">
            <div class="min-w-[120px] text-[16px] font-bold text-[#103559]">Chuyên bệnh:</div>
            <div>{{ clinic?.clinicServices[0].nameService }}</div>
          </div>
          <div class="mt-[8px] flex justify-between">
            <div class="min-w-[120px] text-[16px] font-bold text-[#103559]">Giá ước tính:</div>
            <div>Khám tổng quát từ {{ clinic?.clinicServices[0].priceFrom }}đ</div>
          </div>
        </div>
        <div class="block_3 align-center w-[200px] px-[24px]">
          <button
            class="w-[140px] h-[40px] border border-[#103559] bg-[#103559] text-white text-[16px] font-bold"
            @click="addClinic(clinic)"
          >
            Đặt lịch khám
          </button>
          <button
            class="w-[140px] h-[40px] border border-[#103559] text-[#103559] text-[16px] font-bold mt-[8px]"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .suggest-section {
    box-shadow: 0 0 8px rgba(16, 53, 89, 0.2);
    background-color: #ffffff;
    border-radius: 20px;
    padding: 0 16px;
  }
  .label {
    font-size: 24px;
    font-weight: 700;
    color: #103559;
  }

  .buttons button {
    min-width: 100px;
    height: 40px;
    padding: 0 24px;
    border: 1px solid #103559;
    border-radius: 20px;
    display: inline-block;
  }

  .list-clinic {
    margin-top: 16px;
    height: 400px;
    overflow-y: auto;
    box-shadow: 0 0 8px rgba(16, 53, 89, 0.2);
    border-radius: 20px;
  }
</style>
