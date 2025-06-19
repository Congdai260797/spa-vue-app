<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    status: Number,
    bookingID: String,
  });

  const listTypeService = [
    { value: '1', name: 'Tôi không muốn đặt lịch' },
    { value: '2', name: 'Thay đổi lịch hẹn' },
    { value: '3', name: 'Khác' },
  ];

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
      <div class="text-[32px] text-[#103559] font-bold">Lý do huỷ</div>
      <div class="text-[16px] text-[#7b7b7b] mt-1 mb-1">
        Chúng tôi có thể giúp bạn tìm giải pháp thay thế nếu bạn cần thay đổi đặt lịch của mình.
      </div>

      <div class="text-[17px] text-[#7b7b7b] font-bold mt-4">Lý do</div>
      <div class="mt-[18px]">
        <select
          class="w-[480px] border-2 border-[#103559] px-[24px] py-[14px] rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
        >
          <option disabled value="">Chọn lý dó huỷ lịch</option>
          <option v-for="service in listTypeService" :key="service.value" :value="service.value">
            {{ service.name }}
          </option>
        </select>
      </div>
      <div class="mt-[24px]">
        <textarea
          rows="3"
          class="w-[480px] border-2 border-[#103559] text-slate-700 p-4 rounded-xl focus:outline-none focus:border-blue-600 transition-colors"
          placeholder="Lý do huỷ lịch hẹn của bạn (nếu có)"
        ></textarea>
      </div>
      <button
        class="w-[200px] text-[17px] text-[#103559] font-bold h-[44px] leading-[44px] border border-[#FFB775] bg-[#FFB775] mt-4"
        @click="goHome"
      >
        Tra cứu
      </button>
    </div>

    <!-- Hình minh họa -->
    <div class="image-section w-1/2 p-4">
      <!-- <img src="./../../assets/image/visit_vet.png" alt="Booking illustration" /> -->
      <div
        class="block_1 flex items-center mb-8 cursor-pointer shadow rounded-[15px]"
        @click="detailBooking('MNS01')"
      >
        <div class="w-[160px] flex justify-center items-center object-cover">
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
      <div class="block_1 items-center mb-4 cursor-pointer shadow rounded-[15px] p-4">
        <div class="w-full h-fit text-[18px] font-bold leading-[24px]">Chính sách huỷ lịch</div>
        <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px] text-[#103559]">
          Người dùng có thể huỷ lịch khám trước giờ hẹn ít nhất 5 giờ.
        </div>
        <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px] text-[#103559] mb-4">
          Việc huỷ được thực hiện thông qua website hoặc hotline.
        </div>
        <a href="#" class="text-[#0081ff] text-[15px] font-semibold">Xem chính sách huỷ </a>
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
