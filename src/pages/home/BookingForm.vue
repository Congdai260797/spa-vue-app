<template>
  <div
    class="bg-cream min-h-[675px] bg-gradient-to-br from-orange-50 relative overflow-hidden rounded-bl-[40px] rounded-br-[40px]"
  >
    <!-- Background decorative shapes -->
    <div class="absolute inset-0 overflow-hidden">
      <div
        class="absolute top-[-65px] left-[-10px] w-[400px] h-[100px] rounded-full"
      >
        <img src="./../../assets/image/rectangle_4.png" alt="" />
      </div>

      <div class="absolute top-[165px] left-8 w-40 h-40 rounded-full">
        <img src="./../../assets/image/rectangle_3.png" alt="" />
      </div>
      <div
        class="absolute bottom-[-250px] left-[40%] w-[565px] h-[565px] rounded-full"
      >
        <img src="./../../assets/image/rectangle_6.png" alt="" />
      </div>
      <div class="absolute bottom-[0px] right-[4%] rounded-full">
        <img src="./../../assets/image/rectangle_2.png" alt="" />
      </div>
      <div class="absolute bottom-0 right-0 w-[884px] h-[570px] rounded-full">
        <img src="./../../assets/image/dog.png" alt="" />
      </div>
    </div>

    <!-- Hero Section -->
    <main class="relative z-10 px-6 py-12">
      <div class="max-w-7xl mx-auto">
        <!-- Left Content -->
        <div class="space-y-8 mt-[100px] ml-[60px]">
          <div class="space-y-6">
            <h1 class="text-[46px] font-bold text-brand-blue leading-tight">
              ĐẶT LỊCH KHÁM THÚ CƯNG<br />
              <span class="text-[42px] text-brand-blue"
                >DỄ DÀNG VÀ NHANH CHÓNG</span
              >
            </h1>

            <p
              class="leading-relaxed max-w-lg font-semibold text-[16px] text-black-blue"
            >
              Petstic Care giúp bạn kết nối với các phòng khám thú y uy tín,
              theo dõi sức khỏe thú cưng và đặt lịch chỉ trong vài bước đơn
              giản.
            </p>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4">
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
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
