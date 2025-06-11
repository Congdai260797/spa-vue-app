<template>
  <div class="bg-light-cream p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Breadcrumb Navigation -->
      <!-- <nav class="mb-8">
        <div class="flex items-center space-x-2 text-sm text-blue-600">
          <a href="#" class="hover:underline">Trang chủ</a>
          <span class="text-gray-400">•</span>
          <a href="#" class="hover:underline">Danh sách phòng khám</a>
          <span class="text-gray-400">•</span>
          <span class="text-gray-600">Phòng khám Sakura Pet</span>
        </div>
      </nav> -->

      <!-- Main Content -->
      <div class="rounded-lg p-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Clinic Image -->
          <div class="flex justify-center">
            <div class="w-80 h-80 rounded-full overflow-hidden shadow-lg">
              <img
                src="./../../assets/image/ClinicListing1.png"
                alt="Happy Pet Veterinary Clinic"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Right Side - Clinic Information -->
          <div class="space-y-6">
            <div>
              <h1 class="text-4xl font-bold text-gray-800 mb-4">
                PHÒNG KHÁM SAKURA PET
              </h1>
              <p class="text-lg text-gray-600 font-medium">
                Với 12 năm kinh nghiệm
              </p>
            </div>

            <div class="text-gray-700 leading-relaxed">
              <p>
                Petsite Care tự hào là một trong những phòng khám thú y uy tín
                hàng đầu, chuyên cung cấp dịch vụ khám chữa bệnh, làm đẹp, và tư
                vấn sức khỏe toàn diện cho chó mèo. Đội ngũ bác sĩ tận tâm, cơ
                sở vật chất hiện đại, quy trình đạt tiêu chuẩn chống – tốt cả
                nhằm mang đến trải nghiệm chăm sóc tốt nhất cho thú cưng của
                bạn.
              </p>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                class="bg-brand-blue text-white font-semibold px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Đặt lịch ngay
              </a>
              <a
                href="#"
                class="px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors border border-brand-blue text-brand-blue"
              >
                Xem bảng giá
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
