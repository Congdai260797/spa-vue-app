<template>
  <div class="mx-auto">
    <BookingForm />
    <Articles />
    <ClinicListing v-model="clinics" />
    <Banner />
    <Feedback />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import BookingForm from "./BookingForm.vue";
import Articles from "./Articles.vue";
import Feedback from "./Feedback.vue";
import Banner from "./Banner.vue";
import ClinicListing from "./ClinicListing.vue";

import HomeService from "./home.service";

const homeService = new HomeService();

const clinics = ref([]);

onMounted(async () => {
  const response = await homeService.getListClinic();

  const getClinics = response.data.clinics
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  clinics.value = response.data.clinics.filter((item) =>
    getClinics.includes(item)
  );
});
</script>
