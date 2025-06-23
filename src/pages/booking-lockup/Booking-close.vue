<template>
  <div class="w-full flex justify-between">
    <div class="input-section flex-grow w-1/2">
      <div
        class="flex items-center text-[16px] text-[#103559] font-bold cursor-pointer mb-4"
        @click="goBack"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.50736 6.99998L7.81061 12.3032L6.75011 13.3637L0.916611 7.53023C0.776008 7.38958 0.697021 7.19885 0.697021 6.99998C0.697021 6.80111 0.776008 6.61038 0.916611 6.46973L6.75011 0.63623L7.81061 1.69673L2.50736 6.99998Z"
            fill="#103559"
          />
        </svg>
        <span class="ml-2">Quay lại thông tin đặt lịch của tôi</span>
      </div>
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

      <div class="flex">
        <button
          class="w-[200px] text-[17px] text-[#103559] font-bold h-[44px] leading-[44px] border border-[#FFB775] bg-[#FFB775] mt-4 mr-2"
          @click="save"
        >
          Tiếp tục
        </button>
        <button
          class="w-[200px] text-[17px] text-[#103559] font-bold h-[44px] leading-[44px] border border-[#103559] mt-4 mr-2 ml-2"
          @click="goBackList"
        >
          Tôi muốn giữ lịch này
        </button>
      </div>
    </div>

    <!-- Hình minh họa -->
    <div class="image-section w-1/2 p-4">
      <!-- <img src="./../../assets/image/visit_vet.png" alt="Booking illustration" /> -->
      <div class="block_1 flex items-center mb-8 cursor-pointer shadow rounded-[15px]">
        <div class="w-[160px] flex justify-center items-center object-cover">
          <img
            class="w-[160px] h-[140px] object-cover rounded-[10px]"
            :src="booking.clinic.logoUrl"
            alt=""
          />
        </div>

        <div class="w-[300px] px-[24px]">
          <div class="w-full h-fit text-[18px] font-bold leading-[24px]">
            {{ booking.clinic.clinicName }}
          </div>
          <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
            <span>Lịch hẹn: </span> <span class="font-bold">{{ booking.dateReservation }}</span>
          </div>
          <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
            <span>Thú cưng: </span>
            <span class="font-bold">{{
              listPetType.find((item) => item.value === booking.petType)?.name || ''
            }}</span>
          </div>
          <div class="w-full h-fit text-[16px] leading-[20px] mt-[8px]">
            <span>Dịch vụ: </span>
            <span class="font-bold">{{
              listService.find((item) => item.value === booking.serviceType)?.name || ''
            }}</span>
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

<script setup>
  import { ref } from 'vue';
  import LockupService from './lockup.service';
  import { Constants } from '../../shared/model/constants.ts';

  const bookingService = new LockupService();

  const props = defineProps({
    status: Number,
    booking: Object,
    isModal: Boolean,
  });

  const listPetType = Constants.PET_TYPE_ENUM;
  const listService = Constants.SERVICE_TYPE_LABELS;

  const listTypeService = [
    { value: '1', name: 'Thay đổi kế hoạch đột xuất' },
    { value: '2', name: 'Không còn phù hợp với khung giờ đã chọn' },
    { value: '3', name: 'Chọn nhầm phòng khám hoặc dịch vụ' },
    { value: '4', name: 'Thú cưng đã khỏe lại / không cần khám nữa' },
    { value: '5', name: 'Tìm được phòng khám khác phù hợp ' },
    { value: '6', name: 'Không liên hệ được với phòng khám' },
    { value: '7', name: 'Lịch bị đặt nhầm / thao tác sai' },
    { value: '8', name: 'Lý do khác (vui lòng ghi rõ)' },
  ];

  const emit = defineEmits(['update:status', 'update:booking', 'update:isModal']);

  const goBack = () => {
    // Logic to go back to the previous step
    emit('update:status', 2);
  };

  const goBackList = () => {
    // Logic to go back to the booking list
    emit('update:status', 2);
  };

  const save = async () => {
    const response = await bookingService.detailClinic(props.booking.id);
    if (response && response.data) {
      emit('update:isModal', true);
    } else {
      console.error('Clinic data not found in response');
    }
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
