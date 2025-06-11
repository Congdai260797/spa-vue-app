<template>
  <div class="container mx-auto py-12 px-4">
    <div class="px-4">
      <!-- Main heading -->
      <h1
        class="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-center md:text-left"
      >
        Các dịch vụ của chúng tôi
      </h1>

      <!-- Main content grid -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Services list -->
        <div class="space-y-6">
          <!-- Service 1 - Detailed -->
          <div
            class="flex gap-4"
            v-for="(item, index) in clinic.clinicServices"
            :key="item.code"
          >
            <div
              :class="{
                'flex-shrink-0 w-12 h-12 bg-teal-700 text-white rounded-lg flex items-center justify-center font-bold text-xl':
                  index == 0,
                'flex-shrink-0 w-12 h-12 text-gray-600 border-b-2 border-l-2 flex items-center justify-center font-bold text-xl':
                  index > 0,
              }"
            >
              {{ index + 1 }}
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-800 mb-3">
                {{ item.nameService }}
              </h3>
              <p
                v-if="index == 0"
                class="text-gray-600 text-sm leading-relaxed"
              >
                Dịch vụ khám tổng quát giúp phát hiện sớm các vấn đề sức khỏe
                tiềm ẩn ở thú cưng như bệnh tiêu hóa, hô hấp, da liễu hoặc xương
                khớp. Bác sĩ sẽ kiểm tra toàn diện từ tai, mắt, răng, tim phổi
                đến thể trạng chung. Việc thăm khám định kỳ không chỉ giúp thú
                cưng khỏe mạnh hơn mà còn giúp bạn yên tâm trong quá trình chăm
                sóc mỗi ngày.
              </p>
            </div>
          </div>
        </div>

        <!-- Veterinarian image -->
        <div class="flex justify-center">
          <div class="relative">
            <img
              src="./../../assets/image/rectangle_7.png"
              alt="Bác sĩ thú y đang khám cho chó con"
              class="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});
const clinic = computed(() => props.modelValue);
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
