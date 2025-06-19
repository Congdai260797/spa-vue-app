<template>
  <div class="container mx-auto p-4 mb-12">
    <div class="mx-auto">
      <!-- Header Section -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Phòng khám nội bật</h1>
        <a
          @click="goClinic"
          class="px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors border border-brand-blue text-brand-blue flex items-center justify-center gap-2 cursor-pointer"
        >
          Xem thêm
          <svg class="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </a>
      </div>

      <!-- Clinic Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Clinic Card 1 -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          v-for="item in clinics"
          :key="item.code"
        >
          <div class="relative">
            aa
            <img
              :src="item.logoUrl"
              alt="Happy Pet Veterinary Clinic"
              class="w-full h-72 object-cover cursor-pointer"
              @click="goToPage(item.clinicId)"
            />
          </div>
          <div class="flex flex-col justify-between p-4 h-[200px]">
            <div class="flex flex-col">
              <h3
                class="font-semibold text-gray-900 h-[48px] mb-2 cursor-pointer"
                @click="goToPage(item.clinicId)"
              >
                {{ item.clinicName }}
              </h3>

              <p class="text-sm text-gray-600 mb-3">Dịch vụ: {{ item.clinicSpecialties }}</p>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <svg class="w-4 h-4 text-brand-blue fill-current" viewBox="0 0 20 20">
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900"
                  >{{ item.rating.toFixed(1) }}/5</span
                >
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
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const props = defineProps({
    modelValue: {
      type: Array,
      required: true,
    },
  });
  const clinics = computed(() => props.modelValue);

  const goToPage = (clinicId) => {
    window.location.href = `/clinic/${clinicId}`;
  };
  const goClinic = () => {
    router.push('/clinic');
  };
</script>

<style scoped>
  /* Additional custom styles if needed */
</style>
