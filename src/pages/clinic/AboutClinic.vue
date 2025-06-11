<template>
  <div class="mx-auto">
    <Introduce v-model="clinic" />
    <AboutService v-model="clinic" />
    <FeaturedServices v-model="clinic" />
    <ContactInfo v-model="clinic" />
    <ClientFeedback v-model="clinic" />
    <ClinicListing v-model="clinic" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import Introduce from "./Introduce.vue";
import AboutService from "./AboutService.vue";
import FeaturedServices from "./FeaturedServices.vue";
import ContactInfo from "./ContactInfo.vue";
import ClientFeedback from "./ClientFeedback.vue";
import ClinicListing from "./ClinicListing.vue";

import ClinicService from "./clinic.service";

const clinicService = new ClinicService();

const clinic = ref({});

onMounted(async () => {
  const clinicId = "6aa25813-ced5-47c7-add3-a4d78493e41a";
  const response = await clinicService.detailClinic(clinicId);
  if (response.data) {
    clinic.value = response.data;
  } else {
    console.error("Clinic data not found in response");
  }
});
</script>
