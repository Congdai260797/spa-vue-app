<template>
  <div class="booking-layout">
    <div class="booking">
      <div class="booking-stepper" :class="{ ' ml-[62px]': clinicId }">
        <ol class="flex items-center w-full ml-[24px]">
          <!-- Step 1 -->
          <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:inline-block"
            :class="{
              'after:border-[#ffb775] after:border-b-2': status >= 1,
              'after:border-[#d3d3d3] after:border-b-2': status < 1,
            }"
          >
            <span
              class="flex items-center justify-center min-w-[34px] h-[34px] rounded-full"
              :class="{
                'bg-[#ffb775]': status >= 1,
                'bg-[#d3d3d3]': status < 1,
              }"
            >
              <span
                class="min-w-[24px] min-h-[24px] rounded-full"
                :class="{
                  'bg-[#ffb775] border-[4px] border-[#ffffff]': status >= 1,
                }"
              ></span>
            </span>
          </li>
          <!-- Step 2 -->
          <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:inline-block"
            :class="{
              'after:border-[#ffb775] after:border-b-2': status >= 2,
              'after:border-[#d3d3d3] after:border-b-2': status < 2,
            }"
          >
            <span
              class="flex items-center justify-center min-w-[34px] h-[34px] rounded-full"
              :class="{
                'bg-[#ffb775]': status >= 2,
                'bg-[#d3d3d3]': status < 2,
              }"
            >
              <span
                class="min-w-[24px] min-h-[24px] rounded-full"
                :class="{
                  'bg-[#ffb775] border-[4px] border-[#ffffff]': status >= 2,
                }"
              ></span>
            </span>
          </li>
          <!-- Step 3 -->
          <li
            class="flex w-full items-center after:content-[''] after:w-full after:h-[2px] after:inline-block"
            :class="{
              'after:border-[#ffb775] after:border-b-2': status >= 3,
              'after:border-[#d3d3d3] after:border-b-2': status < 3,
            }"
            v-if="!clinicId"
          >
            <span
              class="flex items-center justify-center min-w-[34px] h-[34px] rounded-full"
              :class="{
                'bg-[#ffb775]': status >= 3,
                'bg-[#d3d3d3]': status < 3,
              }"
            >
              <span
                class="min-w-[24px] min-h-[24px] rounded-full"
                :class="{
                  'bg-[#ffb775] border-[4px] border-[#ffffff]': status >= 3,
                }"
              ></span>
            </span>
          </li>
          <!-- Step 4 -->
          <li class="flex items-center w-full">
            <span
              class="flex items-center justify-center min-w-[34px] h-[34px] rounded-full"
              :class="{
                'bg-[#ffb775]': status >= 4,
                'bg-[#d3d3d3]': status < 4,
              }"
            >
              <span
                class="min-w-[24px] min-h-[24px] rounded-full"
                :class="{
                  'bg-[#ffb775] border-[4px] border-[#ffffff]': status >= 4,
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
            <span style="margin-left: -5px">KHÁCH HÀNG</span>
          </li>
          <li class="flex flex-col w-full items-start" v-if="!clinicId">
            <span class="ml-5">CHỌN</span>
            <span style="margin-left: -5px">PHÒNG KHÁM</span>
          </li>
          <li class="flex flex-col w-full items-start">
            <span style="margin-left: -5px">HOÀN THÀNH</span>
          </li>
        </ol>
      </div>

      <div class="mt-[30px] w-full min-h-[300px]">
        <booking-pet-info v-if="status === 1" />
        <booking-client-info v-if="status === 2" />
        <booking-clinic-info v-if="status === 3 && !clinicId" />
        <booking-complete v-if="status === 4" />
      </div>

      <!-- button section -->
      <div class="w-full h-[44px] mt-[16px] flex gap-[30px] justify-end items-center">
        <button
          v-if="status > 1 && status != 4"
          class="button border border-[#103559]"
          @click="prevStep"
        >
          Quay Lại
        </button>
        <button
          v-if="status < 4"
          class="button border border-[#ffb775] bg-[#ffb775]"
          @click="nextStep"
        >
          Tiếp Theo
        </button>
      </div>
    </div>

    <!-- square section -->
    <div class="square-1"></div>
    <div class="square-2"></div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import bookingPetInfo from './booking-pet-info.vue';
  import bookingClientInfo from './booking-client-info.vue';
  import bookingClinicInfo from './booking-clinic-info.vue';
  import bookingComplete from './booking-complete.vue';
  import { useBookingPetStore } from './../../shared/stores/bookingStore';
  import locations from './../../data/location.json';
  import BookingService from './booking.service';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const bookingPetStore = useBookingPetStore();
  const bookingService = new BookingService();

  const status = ref(1);

  const clinicId = ref('');

  onMounted(() => {
    clinicId.value = route.query.clinicId || '';
  });

  const validate = () => {
    if (status.value === 1) {
      return !!(bookingPetStore.petType && bookingPetStore.serviceType);
    }
    if (status.value === 2) {
      return !!(
        bookingPetStore.userName &&
        bookingPetStore.phoneNumber &&
        bookingPetStore.selectedCity &&
        bookingPetStore.selectedDistrict &&
        bookingPetStore.selectedWard &&
        bookingPetStore.dateReservation &&
        !bookingPetStore.errorMessage
      );
    }
    if (status.value === 3) {
      return !!bookingPetStore.clinicId;
    }
    return false;
  };

  function nextStep() {
    bookingPetStore.submitStatus = true;
    if (validate()) {
      bookingPetStore.submitStatus = false;
      if (clinicId.value && status.value === 2) {
        status.value += 2;
        saveForm();
      } else {
        status.value += 1;
        if (status.value == 4) {
          saveForm();
        }
      }
    }
  }

  const saveForm = async () => {
    const request = {
      petType: bookingPetStore.petType,
      serviceType: bookingPetStore.serviceType,
      petState: bookingPetStore.petState,
      userName: bookingPetStore.userName,
      email: bookingPetStore.email,
      phoneNumber: bookingPetStore.phoneNumber,
      dateReservation: bookingPetStore.dateReservation,
      clinicId: clinicId.value || bookingPetStore.clinicId,
      address: `${bookingPetStore?.clinicAddress}`,
    };
    const response = await bookingService.getBookingData(request);
    if (response.message == 'success') {
      bookingPetStore.no = response.data.no;
    }
  };

  function prevStep() {
    if (status.value > 1) {
      status.value -= 1;
    }
  }
</script>

<style scoped>
  .booking-layout {
    width: 100%;
    min-height: 1000px;
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
