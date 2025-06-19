<template>
  <!-- <Loading :visible="isLoading" /> -->
  <div class="w-full flex justify-between">
    <div class="input-section flex-grow w-1/2">
      <div class="text-[36px] text-[#103559] font-bold">Tra cứu lịch hẹn</div>
      <div class="text-[16px] text-[#7b7b7b] mt-1 mb-1">
        Kiểm tra nhanh các lịch hẹn đã đặt chỉ bằng số điện thoại.
      </div>

      <div class="text-[17px] text-[#7b7b7b] font-bold mt-6">
        Tra cứu lịch hẹn bằng số điện thoại
      </div>
      <div class="mt-4 mb-8">
        <input
          v-model="phoneNumber"
          type="text"
          class="w-[380px] h-[48px] border-2 border-[#103559] rounded-[8px] px-[24px]"
          placeholder="Nhập số điện thoại"
        />
      </div>
      <button
        class="w-[200px] text-[17px] text-[#103559] font-bold h-[44px] leading-[44px] border border-[#FFB775] bg-[#FFB775] mt-4"
        @click="getBookingInfo"
      >
        Tra cứu
      </button>
    </div>

    <!-- Hình minh họa -->
    <div class="image-section self-center w-1/2">
      <img
        src="./../../assets/image/visit_vet.png"
        alt="Booking illustration"
        v-if="data.length === 0"
      />
      <div class="block_1 h-full items-center mb-4 cursor-pointer" v-if="data.length > 0">
        <div
          class="block_1 h-full flex items-center mb-4 cursor-pointer"
          v-for="item in data"
          @click="detailBooking(item)"
          :key="item.code"
        >
          <div class="w-[160px] h-full flex justify-center items-center object-cover">
            <img
              class="w-[160px] h-[140px] object-cover rounded-[10px]"
              :src="item.clinic.logoUrl"
              alt=""
            />
          </div>

          <div class="w-[300px] px-[24px]">
            <div class="w-full h-fit text-[18px] font-bold leading-[24px]">
              {{ item.clinic.clinicName }}
            </div>
            <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
              <span>Lịch hẹn:</span> <span class="font-bold">{{ item.dateReservation }}</span>
            </div>
            <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
              <span>Thú cưng:</span> <span class="font-bold">{{ item.petType }}</span>
            </div>
            <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
              <span>Dịch vụ:</span> <span class="font-bold">{{ item.serviceType }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  // import Loading from '../../shared/components/Loading.vue';
  import LockupService from './lockup.service';
  const props = defineProps({
    status: Number,
    booking: Object,
  });
  // const isLoading = ref(false);
  const bookingService = new LockupService();

  const phoneNumber = ref('');
  const data = ref([]);

  const emit = defineEmits(['update:status', 'update:bookingID']);

  const detailBooking = (item) => {
    console.log(item);
    emit('update:status', 2);
    emit('update:booking', item);
  };

  const getBookingInfo = async () => {
    // isLoading.value = true;
    const response = await bookingService.getBookingData(phoneNumber.value);
    if (response && response.data) {
      data.value = response.data;
    } else {
      console.error('Clinic data not found in response');
    }
    // isLoading.value = false;
  };
</script>

<style scoped>
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
