<script setup>
  import { ref } from 'vue';
  import bookingComplete from './Booking-complete.vue';
  // import { useBookingStore } from '../../shared/stores/bookingStore';
  import bookingInfo from './Booking-info.vue';
  import bookingClose from './Booking-close.vue';
  import locations from './../../data/location.json';

  const status = ref(1);
  const bookingID = ref('');
  // const bookingStore = new useBookingStore();

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
      <div class="mt-[30px] w-full min-h-[300px]">
        <!-- {{ status }}aaaaaaa-{{ bookingID }} -->
        <bookingInfo v-model:status="status" :bookingID="bookingID" v-if="status === 1" />
        <bookingComplete v-model:status="status" v-if="status === 2" />
        <bookingClose v-model:status="status" v-if="status === 3" />
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
    min-height: 1000px;
    background-color: #ffb775;
    position: relative;
    overflow: hidden;
    margin: 0 auto;
  }

  .booking {
    width: 1180px;
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
