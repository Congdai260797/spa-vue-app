<script setup>
  import { ref } from 'vue';
  import locations from './../../data/location.json';

  const clientName = ref('');
  const clientNumber = ref('');
  const clientEmail = ref('');
  const selectedCity = ref('');
  const selectedDistrict = ref('');
  const selectedWard = ref('');
  const clientAddress = ref('');
  const selectedDate = ref('');

  const listCity = Array.isArray(locations)
    ? locations.map((location) => ({
        name: location.Name,
        value: location.Id,
      }))
    : [];
</script>

<template>
  <div class="w-full flex justify-between">
    <div class="input-section">
      <div class="label">1. Họ và tên khách hàng</div>
      <div class="mt-[8px]">
        <input
          v-model="clientName"
          type="text"
          class="w-[380px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
          placeholder="Nhập tên khách hàng"
        />
      </div>
      <div class="label mt-[16px]">2. Số điện thoại khách hàng</div>
      <div class="mt-[8px]">
        <input
          v-model="clientNumber"
          type="number"
          class="w-[380px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
          placeholder="Nhập số điện thoại"
        />
      </div>
      <div class="label mt-[16px]">3. Email</div>
      <div class="mt-[8px]">
        <input
          v-model="clientEmail"
          type="number"
          class="w-[380px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
          placeholder="Nhập email"
        />
      </div>
      <div class="label mt-[16px]">4. Địa chỉ của bạn</div>
      <div class="mt-[8px] w-full flex flex-wrap justify-start gap-[24px]">
        <!-- Tỉnh/TP -->
        <select
          v-model="selectedCity"
          class="w-[300px] h-[40px] border-2 border-[#103559] px-[24px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
        >
          <option disabled value="">Chọn thành phố</option>
          <option v-for="city in listCity" :key="city.value" :value="city.value">
            {{ city.name }}
          </option>
        </select>

        <!-- Quận/Huyện -->
        <select
          v-model="selectedDistrict"
          class="w-[300px] h-[40px] border-2 border-[#103559] px-[24px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
        >
          <option disabled value="">Chọn quận huyện</option>

          <option
            v-if="selectedCity !== ''"
            v-for="district in locations.find((city) => city.Id === selectedCity)?.Districts || []"
            :key="district.Id"
            :value="district.Id"
          >
            {{ district.Name }}
          </option>
        </select>

        <!-- Phường/Xã -->
        <select
          v-model="selectedWard"
          class="w-[300px] h-[40px] border-2 border-[#103559] px-[24px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
        >
          <option disabled value="">Chọn phường xã</option>
          <option
            v-if="selectedCity !== '' && selectedDistrict !== ''"
            v-for="ward in locations
              .find((city) => city.Id === selectedCity)
              ?.Districts.find((district) => district.Id === selectedDistrict)?.Wards || []"
            :key="ward.Id"
            :value="ward.Id"
          >
            {{ ward.Name }}
          </option>
        </select>
        <input
          v-model="clientAddress"
          type="text"
          class="w-[300px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
          placeholder="Nhập địa chỉ"
        />
      </div>
      <div class="label mt-[24px]">5. Chọn lịch khám</div>
      <div class="mt-[16px]">
        <input
          v-model="selectedDate"
          type="date"
          class="w-[380px] h-[40px] border-2 border-[#103559] rounded-[8px] px-[24px]"
        />
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
