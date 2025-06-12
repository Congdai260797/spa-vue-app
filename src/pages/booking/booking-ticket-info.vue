<script setup></script>

<template>
  <div class="booking-layout">
    <div class="booking">
      <div class="w-full h-[450px] flex">
        <div class="left-size w-[720px] h-full pt-[16px] px-[24px] rounded-tl-xl">
          <img
            class="w-[152px] h-[80px]"
            src="./../../assets/image/booking-ticket-logo.png"
            alt=""
          />
          <div class="flex items-baseline justify-between mt-[24px]">
            <div class="text-[32px] font-bold text-white">LỊCH KHÁM THÚ CƯNG</div>
            <!-- ticket code -->
            <span
              class="w-[174px] h-[34px] leading-[34px] rounded-xl border border-white bg-[#30688A] text-center text-[20px] font-bold text-white"
              >STT012088</span
            >
          </div>

          <div class="mt-[24px] text-[20px] font-bold text-white flex justify-between items-center">
            <div>
              <div>Chủ thú cưng</div>
              <div class="info">Nguyễn Văn A</div>
              <div>Số điện thoại</div>
              <div class="info">0366788992</div>
              <div>Ngày khám</div>
              <div class="info">01/06/2025</div>
            </div>

            <div>
              <div>Phòng khám</div>
              <div class="info">Petstie Care</div>
              <div>Số điện thoại</div>
              <div class="info">0999999999</div>
              <div>Địa chỉ</div>
              <div class="info">77 Giải Phóng, Hai Bà Trưng, Hà Nội</div>
            </div>
          </div>
        </div>
        <div class="right-size w-[450px] h-full px-[24px] rounded-tr-xl">
          <div class="mt-[40px] text-center w-full text center text-[24px] font-bold">
            Thông tin khám bệnh
          </div>
          <div class="label-info">1. Thú cưng khám</div>
          <div class="content-info">Mèo</div>
          <div class="label-info">2.Loại dịch vụ</div>
          <div class="content-info">Tiêm phòng</div>
          <div class="label-info">3.Mô tả chi tiết</div>
          <div class="content-info">
            Mèo 6 tháng chưa tiêm lần nào. Muốn tiêm dại cả mũi 3 bệnh lun.
          </div>
        </div>
      </div>
      <div class="w-full h-[150px] flex align-center bottom-block rounded-b-xl">
        <div class="w-[720px] h-full px-[24px] text-center flex flex-col justify-center">
          <div class="text-[20px] font-bold text-black">Lưu ý quan trọng</div>
          <div>Vui lòng đến đúng giờ để được phục vụ tốt nhất</div>
          <div>Mang theo sổ tiêm chủng và bệnh án cũ (nếu có)</div>
          <div>Liên hệ phòng khám nếu cần thay đổi lịch hẹn</div>
        </div>
        <div class="w-[450px] h-full px-[24px] flex justify-center items-center">
          <button
            class="w-[210px] h-[40px] bg-[#FFB775] rounded-xl text-[16px] font-semibold text-[#103559]"
            @click="$router.push('/')"
          >
            Quay trở lại trang chủ
          </button>
        </div>
      </div>
    </div>
    <!-- square section -->
    <div class="square-1"></div>
    <div class="square-2"></div>
  </div>
</template>

<style scoped>
  .booking-layout {
    width: 100%;
    min-height: 900px;
    background-color: #ffb775;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .booking {
    width: 1180px;
    min-height: 500px;
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ffffff;
    z-index: 1;
    border-radius: 20px;
    padding: 70px 96px;
  }

  .left-size {
    background-image: linear-gradient(to right, #0a385d, #165b8a);
  }
  .right-size {
    background-color: #f8edd5;
  }

  .info {
    font-size: 18px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 8px;
  }

  .label-info {
    font-size: 20px;
    font-weight: 600;
    color: #103559;
    margin-top: 16px;
  }

  .content-info {
    font-size: 16px;
    font-weight: 400;
    color: #103559;
    margin-top: 8px;
  }

  .bottom-block {
    box-shadow: 0 0 8px rgba(16, 53, 89, 0.2);
  }

  .square-1,
  .square-2 {
    position: absolute;
    border-radius: 99px;
  }

  .square-1 {
    width: 782px;
    height: 634px;
    top: -280px;
    left: 40px;
    rotate: 154deg;
    background-color: #fceed5;
  }

  .square-2 {
    width: 786px;
    height: 786px;
    top: 0px;
    right: -350px;
    rotate: 150deg;
    background-color: #fceed5;
    opacity: 0.3;
  }
</style>
