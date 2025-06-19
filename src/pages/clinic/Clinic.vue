<template>
  <div class="bg-light-cream">
    <Loading :visible="isLoading" />
    <div class="image-bg mb-20">
      <img src="./../../assets/image/about.png" alt="Clinic Banner" class="object-cover" />
    </div>

    <div class="container mx-auto px-6">
      <div class="mx-auto">
        <!-- Clinic Cards Grid -->
        <Breadcrumb ref="breadcrumb" class="bg-light-cream mb-4" />
        <div
          class="p-2 flex flex-col md:flex-row items-start md:items-center justify-between mb-10"
        >
          <div class="space-y-1">
            <p class="text-gray-700 text-[16px] text-sm mb-4">
              Bạn chưa tìm được phòng khám ưng ý?
            </p>
            <h3
              class="text-[#0A3B5C] text-[36px] font-bold text-xl hover:text-[#0A3B5C]/80 transition-colors"
            >
              Tìm kiếm ngay
            </h3>
          </div>

          <div class="relative mt-3 md:mt-0">
            <select
              v-model="selectedValue"
              @change="handleChange"
              class="border border-gray-300 rounded-md bg-white px-4 py-2 w-64 text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            >
              <option value="default">Mặc định</option>
              <option value="popularity">Độ phổ biến</option>
              <option value="averageRating">Đánh giá trung bình</option>
              <option value="latest">Mới nhất</option>
            </select>

            <!-- Custom dropdown arrow -->
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-500"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <!-- Clinic Card 1 -->
          <div
            class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            v-for="item in listClinic"
            :key="item.code"
          >
            <div class="relative">
              <img
                :src="item.logoUrl"
                alt="Happy Pet Veterinary Clinic"
                class="w-full h-72 object-cover cursor-pointer"
                @click="goToPage(item.clinicId)"
              />
            </div>
            <div class="flex flex-col justify-between p-4 h-[200px]">
              <h3
                class="font-semibold h-[48px] text-gray-900 mb-2 cursor-pointer"
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
  </div>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue';
  import Loading from '../../shared/components/Loading.vue';
  import { useRouter } from 'vue-router';
  import ClinicService from './clinic.service';
  import { useRoute } from 'vue-router';
  import Breadcrumb from '../../shared/components/Breadcrumb.vue';

  const clinicService = new ClinicService();

  const isLoading = ref(false);

  const router = useRouter();

  const listClinic = ref([]);
  const selectedValue = ref('default');

  onMounted(async () => {
    isLoading.value = true;
    await getListClinic();
    isLoading.value = false;
  });

  const handleChange = (event) => {
    const type = event.target.value;
    if (type === 'default') {
      listClinic.value.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (type === 'rating') {
      listClinic.value.sort((a, b) => b.rating - a.rating);
    }
  };

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

  const goToPage = (clinicId) => {
    window.location.href = `/clinic/${clinicId}`;
  };
</script>

<style scoped>
  /* Additional custom styles if needed */
</style>
