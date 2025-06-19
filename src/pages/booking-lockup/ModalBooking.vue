<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div
      class="bg-gradient-to-br from-[#0b3d63] to-[#145583] rounded-2xl p-8 w-full mx-4 relative text-white shadow-2xl max-w-[600px]"
    >
      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
      >
        <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <!-- Logo and Brand -->
      <div class="text-center mb-8">
        <img
          class="max-w-[152px] h-auto mx-auto"
          src="./../../assets/image/logo-white.png"
          alt=""
        />
      </div>

      <!-- Success Message -->
      <div class="text-center mb-8">
        <h3 class="text-[32px] font-bold mb-6">Huỷ lịch thành công!</h3>

        <!-- Appointment Info -->
        <div class="mb-6">
          <h4 class="text-lg font-semibold mb-4">Thông tin lịch hẹn</h4>
          <div class="space-y-2 text-sm">
            <p>Thời gian hẹn: {{ booking?.dateReservation }}</p>
            <p>Phòng khám: {{ booking?.clinic?.clinicName }}</p>
            <p>
              Thú cưng: {{ listPetType.find((item) => item.value === booking.petType)?.name || '' }}
            </p>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex justify-center">
        <button
          @click="bookNewAppointment"
          class="w-[210px] h-[44px] bg-[#feb775] text-[#103559] hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors mr-4"
        >
          Đặt lịch mới
        </button>
        <button
          @click="returnToHome"
          class="w-[210px] h-[44px] border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-lg transition-colors ml-4"
        >
          Quay lại trang chủ
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { Constants } from '../../shared/model/constants.ts';

  const router = useRouter();

  const listPetType = Constants.PET_TYPE_ENUM;

  const props = defineProps({
    booking: Object,
    isModal: Boolean,
  });

  const emit = defineEmits(['update:isModal']);

  // Methods
  const closeModal = () => {
    emit('update:isModal', false);
    router.push('/booking');
  };

  const bookNewAppointment = () => {
    router.push('/booking');
  };

  const returnToHome = () => {
    router.push('/');
  };
</script>

<style scoped>
  /* Custom styles if needed */
</style>
