<template>
  <div class="mx-auto">
    <Loading :visible="isLoading" />
    <BookingForm />
    <Articles />
    <ClinicListing v-model="clinics" />
    <Banner />
    <Feedback />
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import Loading from '../../shared/components/Loading.vue';
  import BookingForm from './BookingForm.vue';
  import Articles from './Articles.vue';
  import Feedback from './Feedback.vue';
  import Banner from './Banner.vue';
  import ClinicListing from './ClinicListing.vue';

  import HomeService from './home.service';

  const homeService = new HomeService();
  const isLoading = ref(false);

  const clinics = ref([]);

  onMounted(async () => {
    // isLoading.value = true;
    // const response = await homeService.getListClinic();
    // if (response) {
    //   const getClinics = response.data.clinics
    //     .slice()
    //     .sort((a, b) => b.rating - a.rating)
    //     .slice(0, 4);
    //   clinics.value = response.data.clinics.filter((item) =>
    //     getClinics.includes(item)
    //   );
    // }
    // isLoading.value = false;
  });
</script>
