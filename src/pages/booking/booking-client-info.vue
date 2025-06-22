<script setup>
  import { useBookingPetStore } from './../../shared/stores/bookingStore';
  import locations from './../../data/location.json';
  import { onMounted, ref, watch } from 'vue';

  const bookingPetStore = useBookingPetStore();

  const listCity = Array.isArray(locations)
    ? locations.map((location) => ({
        name: location.Name,
        value: location.Id,
      }))
    : [];

  const phoneRegex = /^0\d{9,10}$/;
  const errorMessage = ref('');

  watch(
    () => bookingPetStore.phoneNumber,
    (newValue) => {
      if (newValue && !phoneRegex.test(newValue)) {
        errorMessage.value = 'Số điện thoại bắt đầu bằng 0 và có độ dài từ 10 đến 11 chữ số.';
        bookingPetStore.errorMessage = errorMessage.value;
      } else {
        errorMessage.value = '';
        bookingPetStore.errorMessage = '';
      }
    }
  );
</script>

<template>
  <div class="w-full flex justify-between">
    <div class="input-section">
      <!-- Name -->
      <div class="wrapper">
        <div class="label">1. Họ và tên khách hàng</div>
        <div class="mt-[8px]">
          <input
            v-model="bookingPetStore.userName"
            type="text"
            class="w-[380px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
            placeholder="Nhập tên khách hàng"
          />
          <p
            class="text-red-500 p-1"
            v-if="!bookingPetStore.userName && bookingPetStore.submitStatus"
          >
            Vui lòng nhập tên khách hàng
          </p>
        </div>
      </div>
      <!-- Phone number -->
      <div class="wrapper">
        <div class="label mt-[16px]">2. Số điện thoại khách hàng</div>
        <div class="mt-[8px]">
          <input
            v-model="bookingPetStore.phoneNumber"
            type="text"
            class="w-[380px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
            placeholder="Nhập số điện thoại"
          />
        </div>
        <p
          class="text-red-500 p-1"
          v-if="!bookingPetStore.phoneNumber && bookingPetStore.submitStatus"
        >
          Vui lòng nhập số điện thoại
        </p>
        <p class="text-red-500 p-1" v-if="errorMessage">{{ errorMessage }}</p>
      </div>

      <!-- Email -->
      <div class="wrapper">
        <div class="label mt-[16px]">3. Email</div>
        <div class="mt-[8px]">
          <input
            v-model="bookingPetStore.email"
            type="text"
            class="w-[380px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
            placeholder="Nhập email"
          />
        </div>
      </div>
      <!-- Address -->
      <div class="wrapper">
        <div class="label mt-[16px]">4. Địa chỉ của bạn</div>
        <div class="mt-[8px] w-full flex flex-wrap justify-start gap-[24px]">
          <!-- Tỉnh/TP -->
          <div class="box-address">
            <select
              v-model="bookingPetStore.selectedCity"
              class="w-[300px] h-[40px] border-2 border-[#103559] px-[24px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
            >
              <option disabled value="">Chọn thành phố</option>
              <option v-for="city in listCity" :key="city.value" :value="city.value">
                {{ city.name }}
              </option>
            </select>
            <p
              class="text-red-500 p-1"
              v-if="!bookingPetStore.selectedCity && bookingPetStore.submitStatus"
            >
              Vui lòng chọn thành phố
            </p>
          </div>

          <!-- Quận/Huyện -->
          <div class="box-address">
            <select
              v-model="bookingPetStore.selectedDistrict"
              class="w-[300px] h-[40px] border-2 border-[#103559] px-[24px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
            >
              <option disabled value="">Chọn quận huyện</option>

              <option
                v-if="bookingPetStore.selectedCity !== ''"
                v-for="district in locations.find(
                  (city) => city.Id === bookingPetStore.selectedCity
                )?.Districts || []"
                :key="district.Id"
                :value="district.Id"
              >
                {{ district.Name }}
              </option>
            </select>
            <p
              class="text-red-500 p-1"
              v-if="!bookingPetStore.selectedDistrict && bookingPetStore.submitStatus"
            >
              Vui lòng chọn thành phố
            </p>
          </div>

          <!-- Phường/Xã -->
          <div class="box-address">
            <select
              v-model="bookingPetStore.selectedWard"
              class="w-[300px] h-[40px] border-2 border-[#103559] px-[24px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
            >
              <option disabled value="">Chọn phường xã</option>
              <option
                v-if="
                  bookingPetStore.selectedCity !== '' && bookingPetStore.selectedDistrict !== ''
                "
                v-for="ward in locations
                  .find((city) => city.Id === bookingPetStore.selectedCity)
                  ?.Districts.find((district) => district.Id === bookingPetStore.selectedDistrict)
                  ?.Wards || []"
                :key="ward.Id"
                :value="ward.Id"
              >
                {{ ward.Name }}
              </option>
            </select>
            <p
              class="text-red-500 p-1"
              v-if="!bookingPetStore.selectedWard && bookingPetStore.submitStatus"
            >
              Vui lòng chọn thành phố
            </p>
          </div>
          <input
            v-model="bookingPetStore.clientAddress"
            type="text"
            class="w-[300px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
            placeholder="Nhập địa chỉ"
          />
        </div>
      </div>
      <!-- examination schedule -->
      <div class="wrapper">
        <div class="label mt-[24px]">5. Chọn lịch khám</div>
        <div class="mt-[16px]">
          <input
            v-model="bookingPetStore.dateReservation"
            type="date"
            class="w-[380px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
          />
        </div>
        <p
          class="text-red-500 p-1"
          v-if="!bookingPetStore.dateReservation && bookingPetStore.submitStatus"
        >
          Vui lòng chọn ngày khám
        </p>
      </div>
    </div>
    <div class="image-section self-center">
      <img class="min-w-[300px] min-h-[300px]" src="./../../assets/image/booking-logo.png" alt="" />
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
