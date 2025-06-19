<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    status: Number,
    bookingID: String,
  });

  const emit = defineEmits(['update:status', 'update:bookingID']);

  const detailBooking = (id) => {
    // Logic to handle booking detail view
    console.log(`Viewing details for booking ID: ${id}`);
    emit('update:status', 2);
    emit('update:bookingID', id);
  };
</script>

<template>
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
          type="text"
          class="w-[380px] h-[48px] border-2 border-[#103559] rounded-[8px] px-[24px]"
          placeholder="Nhập số điện thoại"
        />
      </div>
      <button
        class="w-[200px] text-[17px] text-[#103559] font-bold h-[44px] leading-[44px] border border-[#FFB775] bg-[#FFB775] mt-4"
        @click="goHome"
      >
        Tra cứu
      </button>
    </div>

    <!-- Hình minh họa -->
    <div class="image-section self-center w-1/2">
      <!-- <img src="./../../assets/image/visit_vet.png" alt="Booking illustration" /> -->
      <div
        class="block_1 h-full flex items-center mb-4 cursor-pointer"
        @click="detailBooking('MNS01')"
      >
        <div class="w-[160px] h-full flex justify-center items-center object-cover">
          <img
            class="w-[160px] h-[140px] object-cover rounded-[10px]"
            src="./../../assets/image/ClinicListing1.png"
            alt=""
          />
        </div>

        <div class="w-[300px] px-[24px]">
          <div class="w-full h-fit text-[18px] font-bold leading-[24px]">
            Phòng khám thú y Happy Pet
          </div>
          <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
            <span>Lịch hẹn:</span> <span class="font-bold">24/03/2025</span>
          </div>
          <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
            <span>Thú cưng:</span> <span class="font-bold">Mèo</span>
          </div>
          <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
            <span>Dịch vụ:</span> <span class="font-bold">Tiêm phòng</span>
          </div>
        </div>
      </div>
      <div
        class="block_1 h-full flex items-center mb-4 cursor-pointer"
        @click="detailBooking('MNS02')"
      >
        <div class="w-[160px] h-full flex justify-center items-center object-cover">
          <img
            class="w-[160px] h-[140px] object-cover rounded-[10px]"
            src="./../../assets/image/ClinicListing2.png"
            alt=""
          />
        </div>

        <div class="w-[300px] px-[24px]">
          <div class="w-full h-fit text-[18px] font-bold leading-[24px]">
            Phòng khám thú y Happy Pet
          </div>
          <div class="w-full h-fit text-[14px] leading-[20px] mt-[8px]">
            <span>Lịch hẹn:</span> <span class="font-bold">24/03/2025</span>
          </div>
          <div class="w-full h-fit text-[14px] leading-[20px] mt-[8px]">
            <span>Thú cưng:</span> <span class="font-bold">Mèo</span>
          </div>
          <div class="w-full h-fit text-[14px] leading-[20px] mt-[8px]">
            <span>Dịch vụ:</span> <span class="font-bold">Tiêm phòng</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
