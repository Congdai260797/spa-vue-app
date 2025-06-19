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
            <p class="text-slate-800 font-medium text-sm lg:text-base leading-relaxed">
              <span class="font-bold text-slate-900">1. Tìm Kiếm</span> - Nhập Vị Trí Để Tìm Phòng
              Khám Gần Bạn.
            </p>
          </div>

          <div
            class="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <p class="text-slate-800 font-medium text-sm lg:text-base leading-relaxed">
              <span class="font-bold text-slate-900">2. Đặt Lịch</span> - Chọn Thời Gian Phù Hợp.
            </p>
          </div>

          <div
            class="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <p class="text-slate-800 font-medium text-sm lg:text-base leading-relaxed">
              <span class="font-bold text-slate-900">3. Xác Nhận & Nhận Nhắc Nhở</span>
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
          </div>

          <div class="flex flex-col sm:flex-row gap-4 lg:justify-end mr-6">
            <a
              @click="goBooking"
              class="px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors border border-brand-blue text-brand-blue cursor-pointer"
            >
              Đặt lịch ngay
            </a>

            <a
              @click="goClinic"
              class="bg-brand-blue text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors cursor-pointer"
            >
              Tìm phòng khám
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import bannerImage from './../../assets/image/Banner.png';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const backgroundImagePath = ref(bannerImage);

  const props = defineProps({
    customImagePath: {
      type: String,
      default: '',
    },
  });

  // Use custom path if provided, otherwise use default
  const finalImagePath = computed(() => {
    return props.customImagePath || backgroundImagePath.value;
  });

  // Event handlers
  const handleBooking = () => {
    console.log('Đặt lịch ngay clicked');
  };

  const handleSearch = () => {
    console.log('Tìm phòng khám clicked');
  };

  const goBooking = () => {
    router.push('/booking');
  };

  const goClinic = () => {
    router.push('/clinic');
  };
</script>
