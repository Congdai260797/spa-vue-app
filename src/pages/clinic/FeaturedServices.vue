<template>
  <div class="bg-light-cream">
    <div class="container mx-auto p-6">
      <!-- Header -->
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Dịch vụ nổi bật</h1>
      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Service Card 1: General Examination -->
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          v-for="item in featuredServices"
          :key="item.code"
        >
          <div
            class="aspect-square bg-blue-100 flex items-center justify-center"
          >
            <img
              :src="item.image"
              :alt="item.nameService"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h2 class="font-semibold text-gray-800 mb-2">
              {{ item.nameService }}
            </h2>
            <p class="text-sm text-gray-600 mb-3">
              Thú cưng: {{ item.description }}
            </p>
            <p class="font-bold text-gray-800 mb-3">
              Chỉ từ: {{ item.priceFrom }} VND
            </p>
            <div
              v-if="item.freeDeworming"
              class="flex items-center text-red-500 bg-cream p-2 rounded-lg"
            >
              <img
                class="h-5 w-5 mr-2"
                src="./../../assets/image/gift.png"
                alt=""
              />
              <span class="text-sm text-black-blue font-bold"
                >⋅ Miễn phí tẩy giun</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import image1 from "./../../assets/image/frame_8.png";
import image2 from "./../../assets/image/frame_9.png";
import image3 from "./../../assets/image/frame_10.png";
import image4 from "./../../assets/image/frame_11.png";

const props = defineProps({
  modelValue: {
    type: Object,
    required: true,
  },
});

const data = computed(() => props.modelValue);

const listImage = [image1, image2, image3, image4];

const featuredServices = ref([]);

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue && newValue.clinicServices) {
      featuredServices.value = newValue.clinicServices
        .slice(0, 4)
        .map((service, index) => ({
          image: listImage[index] || "",
          nameService: service.nameService,
          description: service.petType.join(", "),
          freeDeworming: service.freeDeworming || false,
          priceFrom: service.priceFrom,
        }));
    }
  }
);
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
