<template>
  <div class="container mx-auto p-4 bg-gray-50 mb-12">
    <div class="max-w-7xl mx-auto">
      <!-- Header Section -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold text-gray-900">Phòng khám nội bật</h1>
        <!-- <button
          class="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
        > -->
        <a
          href="#"
          class="px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors border border-brand-blue text-brand-blue flex items-center justify-center gap-2"
        >
          Xem thêm
          <svg
            class="w-4 h-4 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </a>
        <!-- </button> -->
      </div>

      <!-- Clinic Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Clinic Card 1 -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div class="relative">
            <img
              src="./../../assets/image/ClinicListing1.png"
              alt="Happy Pet Veterinary Clinic"
              class="w-full h-72 object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2">
              Phòng khám thú y Happy Pet
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Dịch vụ: Khám tổng quát, tiêm phòng, phẫu thuật, spa & grooming
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-brand-blue fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">4.8/5</span>
              </div>
              <div class="flex items-center gap-1 text-sm text-gray-500">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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

        <!-- Clinic Card 2 -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div class="relative">
            <img
              src="./../../assets/image/ClinicListing2.png"
              alt="Happy Pet Veterinary Clinic"
              class="w-full h-72 object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2">
              Phòng khám thú y Happy Pet
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Dịch vụ: Khám tổng quát, tiêm phòng, phẫu thuật, spa & grooming
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-brand-blue fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">4.8/5</span>
              </div>
              <div class="flex items-center gap-1 text-sm text-gray-500">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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

        <!-- Clinic Card 3 -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div class="relative">
            <img
              src="./../../assets/image/ClinicListing3.png"
              alt="Happy Pet Veterinary Clinic"
              class="w-full h-72 object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2">
              Phòng khám thú y Happy Pet
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Dịch vụ: Khám tổng quát, tiêm phòng, phẫu thuật, spa & grooming
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-brand-blue fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">4.8/5</span>
              </div>
              <div class="flex items-center gap-1 text-sm text-gray-500">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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

        <!-- Clinic Card 4 with Recruitment Badge -->
        <div
          class="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
        >
          <div class="relative">
            <img
              src="./../../assets/image/ClinicListing4.png"
              alt="Happy Pet Veterinary Clinic"
              class="w-full h-72 object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-900 mb-2">
              Phòng khám thú y Happy Pet
            </h3>
            <p class="text-sm text-gray-600 mb-3">
              Dịch vụ: Khám tổng quát, tiêm phòng, phẫu thuật, spa & grooming
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1">
                <svg
                  class="w-4 h-4 text-brand-blue fill-current"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                  />
                </svg>
                <span class="text-sm font-medium text-gray-900">4.8/5</span>
              </div>
              <div class="flex items-center gap-1 text-sm text-gray-500">
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
// Component logic can be added here if needed
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
