<script setup></script>

<template>
  <div class="w-full">
    <div class="suggest-section w-full h-[60px] roundede-[20px] flex justify-between items-center">
      <div class="label">Chọn phòng khám phù hợp</div>
      <div class="buttons">
        <button class="bg-[#103559] text-white">Gợi ý từ AI</button>
        <button class="ml-[12px]">Gần tôi</button>
        <button class="ml-[12px]">Đánh giá</button>
      </div>
    </div>

    <div class="list-clinic">
      <div class="w-full h-[160px] flex items-center justify-start">
        <div class="block_1 h-full flex items-center border-r border-[#C9CFD4]">
          <img class="w-[160px] h-[160px]" src="./../../assets/image/ClinicListing1.png" alt="" />
          <div class="w-[300px] px-[24px]">
            <div class="w-full h-fit text-[#103559] text-[18px] font-bold leading-[24px]">
              Phòng khám thú y Happy Pet
            </div>
            <div class="w-full h-fit text-[#103559] text-[14px] font-bold leading-[20px] mt-[8px]">
              Dịch vụ: Khám tổng quát, tiêm phòng, phẫu thuật, spa & grooming
            </div>
            <div class="mt-[8px] flex justify-between items-center">
              <img src="./../../assets/image/star.png" alt="star" />
              <span class="text-[#103559]">Khoảng cách: <span class="font-bold">3km</span></span>
            </div>
          </div>
        </div>
        <div class="block_2 w-[340px] text-[#103559] border-r border-[#C9CFD4] px-[24px]">
          <div class="flex justify-between">
            <div class="min-w-[120px] text-[16px] font-bold text-[#103559]">Chuyên bệnh:</div>
            <div>Khám tổng quát, tiêm phòng, phẫu thuật.</div>
          </div>
          <div class="mt-[8px] flex justify-between">
            <div class="min-w-[120px] text-[16px] font-bold text-[#103559]">Giá ước tính:</div>
            <div>Khám tổng quát từ 150.000đ</div>
          </div>
        </div>
        <div class="block_3 align-center w-[200px] px-[24px]">
          <button
            class="w-[140px] h-[40px] border border-[#103559] bg-[#103559] text-white text-[16px] font-bold"
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
