<script setup>
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function goHome() {
    router.push('/');
  }

  function ticketDetail() {
    router.push('/booking/ticket-info');
  }
</script>

<template>
  <div class="w-full">
    <div class="w-[420px] px-[16px] gap-[8px] mx-auto mt-[24px]">
      <img
        class="w-[66px] h-[66px] mx-auto"
        src="./../../assets/image/order-done-filled.png"
        alt=""
      />
      <div class="w-full h-[40px] text-center text-[36px] font-bold text-[#103559]">
        <span>Đặt lịch thành công</span>
      </div>
    </div>

    <!-- api đổ data vào đây -->
    <div class="w-full min-h-[160px] mt-[40px] px-[24px] flex justify-between">
      <div class="w-[410px] h-[160px] box-shadow pt-[8px] px-[16px] text-[#103559]">
        <div class="w-full h-[24px] text-[20px] font-bold">Thông tin khách hàng</div>
        <div class="mt-[8px] w-full h-[24px] text-[16px]">Họ tên :</div>
        <div class="w-full h-[24px] text-[16px]">Số điện thoại :</div>
        <div class="w-full h-[24px] text-[16px]">Địa chỉ :</div>
      </div>
      <div class="w-[410px] h-[160px] box-shadow pt-[8px] px-[16px] text-[#103559]">
        <div class="w-full h-[24px] text-[20px] font-bold">Thông tin lịch khám</div>
        <div class="mt-[8px] w-full h-[24px] text-[16px]">Lịch hẹn :</div>
        <div class="w-full h-[24px] text-[16px]">Phòng khám :</div>
        <div class="w-full h-[24px] text-[16px]">Địa chỉ :</div>
      </div>
    </div>

    <div class="w-full min-h-[100px] text-center text-[#103559] mt-[40px] px-[24px]">
      <div class="h-[20px] leading-[20px] text-[14px]">Lưu ý</div>
      <div class="h-[20px] leading-[20px] text-[14px]">
        Vui lòng đến đúng giờ để được phục vụ tốt nhất.
      </div>
      <div class="h-[20px] leading-[20px] text-[14px]">
        Nếu có thay đổi, hãy liên hệ phòng khám trước 5 giờ để điều chỉnh lịch hẹn
      </div>
    </div>

    <!-- buttons -->
    <div class="w-full h-[44px] text-[#103559] flex justify-center items-center gap-[30px]">
      <button
        class="w-[210px] h-[44px] leading-[44px] border border-[#103559]"
        @click="ticketDetail"
      >
        Chi tiết phiếu đặt lịch
      </button>
      <button
        class="w-[210px] h-[44px] leading-[44px] border border-[#FFB775] bg-[#FFB775]"
        @click="goHome"
      >
        Quay trở lại trang chủ
      </button>
    </div>
  </div>
</template>

<style scoped>
  .box-shadow {
    box-shadow: 0 0 8px rgba(16, 53, 89, 0.2);
  }
</style>
