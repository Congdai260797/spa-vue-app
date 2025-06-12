<template>
  <div class="container mx-auto p-4 mb-12">
    <!-- Title -->

    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="flex justify-center items-center mb-6">
        <h2 class="text-4xl md:text-5xl font-bold text-brand-blue text-center mb-20">
          GỢI Ý PHÒNG KHÁM TƯƠNG TỰ
        </h2>
      </div>

      <!-- Clinic Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Clinic Card 1 -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          v-for="item in clinicList"
          :key="item.id"
        >
          <div class="relative">
            <img :src="item.image" :alt="item.clinicName" class="w-full h-72 object-cover" />
          </div>
          <div class="p-4">
            <h3
              class="font-semibold text-gray-900 mb-2 cursor-pointer"
              @click="goToPage(item.clinicId)"
            >
              {{ item.clinicName }}
            </h3>
            <p class="text-sm text-gray-600 mb-3">Dịch vụ: {{ item.clinicSpecialties }}</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4 text-brand-blue fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">{{ item.rating }}/5</span>
              </div>
              <div class="flex items-center gap-1 text-sm text-gray-500">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span>Khoảng cách: 3 km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch, computed } from 'vue';
  import { useRouter } from 'vue-router';

  import image1 from './../../assets/image/ClinicListing1.png';
  import image2 from './../../assets/image/ClinicListing2.png';
  import image3 from './../../assets/image/ClinicListing3.png';
  import image4 from './../../assets/image/ClinicListing4.png';

  const router = useRouter();

  const props = defineProps({
    modelValue: {
      type: Object,
      required: true,
    },
  });

  const listImage = [image1, image2, image3, image4];

  const data = computed(() => props.modelValue);

  const clinicList = ref([]);

  const goToPage = (clinicId) => {
    window.location.href = `/clinic/${clinicId}`;
  };

  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue) {
        clinicList.value = newValue.slice(0, 4).map((item, index) => ({
          image: listImage[index] || '',
          clinicName: item.clinicName,
          clinicSpecialties: item.clinicSpecialties,
          rating: item.rating.toFixed(1),
          clinicId: item.clinicId,
        }));
      }
    }
  );
</script>

<style scoped>
  /* Additional custom styles if needed */
</style>
