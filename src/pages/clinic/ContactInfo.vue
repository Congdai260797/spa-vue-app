<template>
  <div class="bg-cream p-6">
    <div class="container mx-auto p-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Left Card - Petstie Care -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <!-- Header with rating -->
          <div class="flex justify-start items-center mb-6">
            <h1 class="text-[38px] text-gray-800 mb-2 mr-4">Petstie Care</h1>
            <div class="flex items-center gap-2">
              <div class="flex text-yellow-400">
                <svg v-for="i in start" :key="i" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <span class="text-gray-600 font-medium">({{ data.reservationCount }})</span>
            </div>
          </div>
          <!-- Map placeholder -->
          <div class="bg-gray-100 rounded-xl h-48 mb-6 relative overflow-hidden">
            <!-- Map background pattern -->
            <div class="absolute inset-0 opacity-20">
              <svg class="w-full h-full" viewBox="0 0 200 200" fill="none">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ccc" stroke-width="1" />
                  </pattern>
                </defs>
                <rect width="200" height="200" fill="url(#grid)" />
              </svg>
            </div>

            <!-- Blue river/road -->
            <div
              class="absolute bottom-0 right-0 w-32 h-32 bg-blue-300 rounded-full transform translate-x-16 translate-y-16 opacity-60"
            ></div>

            <!-- Location pin -->
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <div class="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <div class="w-1 h-3 bg-red-500 mx-auto"></div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <svg
                class="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="text-gray-700">{{ data.clinicAddress }}</span>
            </div>

            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-gray-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              <span class="text-gray-700">{{
                data.clinicPhone ? data.clinicPhone : '090 123 4567'
              }}</span>
            </div>

            <div class="flex items-center gap-3">
              <svg
                class="w-5 h-5 text-gray-600 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span class="text-gray-700">{{
                data.clinicEmail ? data.clinicEmail : 'mainga@gmail.com'
              }}</span>
            </div>
          </div>
        </div>

        <!-- Right Card - Schedule -->
        <div class="bg-white rounded-2xl shadow-lg p-6">
          <h1 class="text-2xl font-bold text-gray-800 mb-6 mb-2 pb-4 border-b-2 border-brand-blue">
            Lịch làm việc
          </h1>

          <!-- Schedule Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <!-- Weekdays -->
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-800 mb-2">Thứ 2 - Thứ 6</h3>
              <div class="flex items-center gap-2 text-gray-600">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  >{{ data.workingHours?.weekday.start }} -
                  {{ data.workingHours?.weekday.end }}</span
                >
              </div>
            </div>

            <!-- Weekend -->
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-800 mb-2">Thứ 7 - Chủ Nhật</h3>
              <div class="flex items-center gap-2 text-gray-600">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span
                  >{{ data.workingHours?.weekend.start }} -
                  {{ data.workingHours?.weekend.end }}</span
                >
              </div>
            </div>
          </div>

          <!-- Services List -->
          <div class="space-y-3 mb-8">
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">Nhận khám ngoài giờ, khẩn cấp.</span>
            </div>
            <div class="flex items-start gap-3">
              <div class="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <span class="text-gray-700">Chọn lịch trống gần nhất.</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <a
              @click="goBooking"
              class="bg-brand-blue text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors cursor-pointer"
            >
              Đặt lịch ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, watch } from 'vue';

  import { useRouter } from 'vue-router';
  const router = useRouter();

  const props = defineProps({
    modelValue: {
      type: Object,
      required: true,
    },
  });

  const start = ref(0);

  const goBooking = () => {
    router.push('/booking');
  };

  const data = computed(() => props.modelValue);

  watch(
    () => props.modelValue,
    (newValue) => {
      start.value = newValue.rating ? Math.ceil(newValue.rating) : 0;
    },
    { immediate: true }
  );
</script>

<style scoped>
  /* Additional custom styles if needed */
</style>
