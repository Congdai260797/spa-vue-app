<template>
  <div class="container mx-auto px-4 mb-12">
    <div class="relative h-80 rounded-2xl overflow-hidden shadow-xl mb-8">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url('${backgroundImagePath}')` }"
      >
        <!-- Optional overlay for better text readability -->
        <div class="absolute inset-0"></div>
      </div>

      <!-- Content Container -->
      <div
        class="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full p-6 lg:p-8"
      >
        <!-- Left Side - Process Steps -->
        <div class="w-full lg:w-2/4 space-y-3 mb-6 lg:mb-0 lg:pr-8">
          <div
            class="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <p
              class="text-slate-800 font-medium text-sm lg:text-base leading-relaxed"
            >
              <span class="font-bold text-slate-900">1. Tìm Kiếm</span> - Nhập
              Vị Trí Để Tìm Phòng Khám Gần Bạn.
            </p>
          </div>

          <div
            class="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <p
              class="text-slate-800 font-medium text-sm lg:text-base leading-relaxed"
            >
              <span class="font-bold text-slate-900">2. Đặt Lịch</span> - Chọn
              Thời Gian Phù Hợp.
            </p>
          </div>

          <div
            class="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <p
              class="text-slate-800 font-medium text-sm lg:text-base leading-relaxed"
            >
              <span class="font-bold text-slate-900"
                >3. Xác Nhận & Nhận Nhắc Nhở</span
              >
              - Nhận Thông Báo Trước Lịch Khám.
            </p>
          </div>
        </div>

        <!-- Right Side - Title and Buttons -->
        <div class="w-full lg:w-2/4 text-center lg:text-right">
          <div class="mb-8 mr-6">
            <h1 class="text-[46px] font-bold text-brand-blue leading-tight">
              Quy Trình Sử Dụng<br />
              <span class="text-[42px] text-brand-blue">Petstie Care</span>
            </h1>
            <!-- <h1
              class="text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-900 mb-2 leading-tight"
            >
              Quy Trình Sử Dụng
            </h1>
            <h2
              class="text-2xl lg:text-3xl xl:text-4xl font-bold text-blue-800 leading-tight"
            >
              Petstie Care
            </h2> -->
          </div>

          <div class="flex flex-col sm:flex-row gap-4 lg:justify-end mr-6">
            <a
              href="#"
              class="px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors border border-brand-blue text-brand-blue"
            >
              Đặt lịch ngay
            </a>

            <a
              href="#"
              class="bg-brand-blue text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
            >
              Tìm phòng khám
            </a>
          </div>
          <!-- <div
            class="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-end"
          >
            <button
              @click="handleBooking"
              class="px-8 py-3 border-2 border-slate-700 text-slate-700 font-semibold rounded-full transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-slate-300 active:scale-95"
            >
              Đặt lịch ngay
            </button>

            <button
              @click="handleSearch"
              class="px-8 py-3 bg-blue-900 text-white font-semibold rounded-full transition-all duration-300 hover:bg-blue-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 active:scale-95"
            >
              Tìm phòng khám
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import bannerImage from "./../../assets/image/Banner.png";

const backgroundImagePath = ref(bannerImage);

const props = defineProps({
  customImagePath: {
    type: String,
    default: "",
  },
});

// Use custom path if provided, otherwise use default
const finalImagePath = computed(() => {
  return props.customImagePath || backgroundImagePath.value;
});

// Event handlers
const handleBooking = () => {
  console.log("Đặt lịch ngay clicked");
};

const handleSearch = () => {
  console.log("Tìm phòng khám clicked");
};
</script>
