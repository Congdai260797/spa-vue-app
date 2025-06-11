<template>
  <div class="mx-auto">
    <Introduce />
    <AboutService />
    <FeaturedServices />
    <ContactInfo />
    <ClientFeedback />
    <ClinicListing />
  </div>
</template>
<script setup>
import { ref } from "vue";
import Introduce from "./Introduce.vue";
import AboutService from "./AboutService.vue";
import FeaturedServices from "./FeaturedServices.vue";
import ContactInfo from "./ContactInfo.vue";
import ClientFeedback from "./ClientFeedback.vue";
import ClinicListing from "./ClinicListing.vue";
</script>
