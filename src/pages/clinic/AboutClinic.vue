<template>
  <div class="mx-auto">
    <Loading :visible="isLoading" />
    <Introduce v-model="clinic" />
    <AboutService v-model="clinic" />
    <FeaturedServices v-model="clinic" />
    <ContactInfo v-model="clinic" />
    <ClientFeedback v-model="clinic" />
    <ClinicListing v-model="listClinic" />
  </div>
</template>
<script setup>
  import { onMounted, ref } from 'vue';

  import Loading from '../../shared/components/Loading.vue';
  import Introduce from './Introduce.vue';
  import AboutService from './AboutService.vue';
  import FeaturedServices from './FeaturedServices.vue';
  import ContactInfo from './ContactInfo.vue';
  import ClientFeedback from './ClientFeedback.vue';
  import ClinicListing from './ClinicListing.vue';
  import ClinicService from './clinic.service';
  import { useRoute } from 'vue-router';

  const route = useRoute();

  const clinicService = new ClinicService();

  const isLoading = ref(false);

  const listClinic = ref([]);

  const clinic = ref({});

  onMounted(async () => {
    isLoading.value = true;
    await getListClinic();
    await getDetailClinic();
    isLoading.value = false;
  });

  const getListClinic = async () => {
    try {
      const response = await clinicService.getListClinic();
      if (response.data && response.data.clinics) {
        listClinic.value = response.data.clinics;
      } else {
        console.error('Clinic data not found in response');
      }
    } catch (error) {
      console.error('Error fetching clinic list:', error);
    }
  };

  const getDetailClinic = async () => {
    try {
      const clinicId = route.params.clinicId;
      const response = await clinicService.detailClinic(clinicId);
      if (response.data) {
        clinic.value = response.data;
      } else {
        console.error('Clinic data not found in response');
      }
    } catch (error) {
      console.error('Error fetching clinic details:', error);
    }
  };
</script>
