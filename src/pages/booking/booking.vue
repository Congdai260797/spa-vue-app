<script setup>
import { ref } from 'vue';
import bookingPetInfo from './booking-pet-info.vue';
import bookingClientInfo from './booking-client-info.vue';

const status = ref(1);

function nextStep() {
  status.value += 1;
}

function prevStep() {
  if (status.value > 1) {
    status.value -= 1;
  }
}

</script>

<template>
  <div class="booking-layout">
    <div class="booking">
      <div class="booking-stepper">
        <ol class="flex items-center w-full ml-[24px]">
          <!-- Step 1 -->
          <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:inline-block"
            :class="{
              'after:border-[#ffb775] after:border-b-2': status >= 1,
              'after:border-[#d3d3d3] after:border-b-2': status < 1
            }"
          >
            <span
              class="flex items-center justify-center min-w-[34px] h-[34px] rounded-full"
              :class="{
                'bg-[#ffb775]': status >= 1,
                'bg-[#d3d3d3]': status < 1
              }"
            >
              <span
                class="min-w-[24px] min-h-[24px] rounded-full"
                :class="{
                  'bg-[#ffb775] border-[4px] border-[#ffffff]': status >= 1
                }"
              ></span>
            </span>
          </li>
          <!-- Step 2 -->
          <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:inline-block"
            :class="{
              'after:border-[#ffb775] after:border-b-2': status >= 2,
              'after:border-[#d3d3d3] after:border-b-2': status < 2
            }"
          >
            <span
              class="flex items-center justify-center min-w-[34px] h-[34px] rounded-full"
              :class="{
                'bg-[#ffb775]': status >= 2,
                'bg-[#d3d3d3]': status < 2
              }"
            >
              <span
                class="min-w-[24px] min-h-[24px] rounded-full"
                :class="{
                  'bg-[#ffb775] border-[4px] border-[#ffffff]': status >= 2
                }"
              ></span>
            </span>
          </li>
          <!-- Step 3 -->
          <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:inline-block"
            :class="{
              'after:border-[#ffb775] after:border-b-2': status >= 3,
              'after:border-[#d3d3d3] after:border-b-2': status < 3
            }"
          >
            <span
              class="flex items-center justify-center min-w-[34px] h-[34px] rounded-full"
              :class="{
                'bg-[#ffb775]': status >= 3,
                'bg-[#d3d3d3]': status < 3
              }"
            >
              <span
                class="min-w-[24px] min-h-[24px] rounded-full"
                :class="{
                  'bg-[#ffb775] border-[4px] border-[#ffffff]': status >= 3
                }"
              ></span>
            </span>
          </li>
          <!-- Step 4 -->
          <li
            class="flex items-center w-full"
          >
            <span
              class="flex items-center justify-center min-w-[34px] h-[34px] rounded-full"
              :class="{
                'bg-[#ffb775]': status >= 4,
                'bg-[#d3d3d3]': status < 4
              }"
            >
              <span
                class="min-w-[24px] min-h-[24px] rounded-full"
                :class="{
                  'bg-[#ffb775] border-[4px] border-[#ffffff]': status >= 4
                }"
              ></span>
            </span>
          </li>
        </ol>

        <ol class="flex items-center w-full">
          <li class="flex flex-col w-full items-start">
            <span>THÔNG TIN</span>
            <span>THÚ CƯNG</span>
          </li>
          <li class="flex flex-col w-full items-start">
            <span>THÔNG TIN</span>
            <span>KHÁCH HÀNG</span>
          </li>
          <li class="flex flex-col w-full items-start">
            <span>CHỌN</span>
            <span>PHÒNG KHÁM</span>
          </li>
          <li class="flex flex-col w-full items-start">
            <span>HOÀN THÀNH</span>
          </li>
        </ol>
      </div>

      <div class="mt-[30px] w-full min-h-[300px]">
        <booking-pet-info v-if="status === 1"/>
        <booking-client-info v-if="status === 2"/>
      </div>

      <!-- button section -->
      <div class="w-full h-[44px] flex gap-[30px] justify-end items-center">
        <button
          v-if="status > 1" 
          class="button border border-[#103559]"
          @click="prevStep"
        >Quay Lại</button>
        <button
          v-if="status < 4" 
          class="button border border-[#ffb775] bg-[#ffb775]"
          @click="nextStep"
        >Tiếp Theo</button>
      </div>
    </div>

    <!-- square section -->
    <div class="square-1"></div>
    <div class="square-2"></div>
  </div>
</template>

<style scoped>
.booking-layout {
  width: 1440px;
  height: 100vh;
  background-color: #ffb775;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
}

.booking {
  width: 1180px;
  min-height: 800px;
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff;
  z-index: 1;
  border-radius: 20px;
  padding: 70px 96px;

}

.booking-stepper {
  position: relative;
  left: 80px;
}

.booking-stepper ol li span {
  font-size: 14px;
  font-weight: 700;
}

.button {
  width: 150px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #103559;
}

.square-1, .square-2 {
  position: absolute;
  border-radius: 99px;
}

.square-1 {
  width: 782px;
  height: 634px;
  top: -280px;
  left: 40px;
  rotate: 154deg;
  background-color: #FCEED5;
}

.square-2 {
  width: 786px;
  height: 786px;
  top: 0px;
  right: -350px;
  rotate: 150deg;
  background-color: #FCEED5;
  opacity: 0.3;
}
</style>