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
        >
          <div
            class="aspect-square bg-blue-100 flex items-center justify-center"
          >
            <img
              src="./../../assets/image/frame_8.png"
              alt="Khám tổng quát"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h2 class="font-semibold text-gray-800 mb-2">Khám tổng quát</h2>
            <p class="text-sm text-gray-600 mb-3">Thú cưng: Chó, mèo,...</p>
            <p class="font-bold text-gray-800 mb-3">Chỉ từ: 150.000 VND</p>
            <div class="flex items-center text-red-500 bg-cream p-2 rounded-lg">
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

        <!-- Service Card 2: Specialist Examination -->
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div
            class="aspect-square bg-green-100 flex items-center justify-center"
          >
            <img
              src="./../../assets/image/frame_9.png"
              alt="Khám chuyên gia"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-800 mb-2">Khám chuyên gia</h3>
            <p class="text-sm text-gray-600 mb-3">Thú cưng: Chó, mèo,...</p>
            <p class="font-bold text-gray-800 mb-3">Chỉ từ: 500.000 VND</p>
            <div class="flex items-center text-red-500 bg-cream p-2 rounded-lg">
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

        <!-- Service Card 3: Regular Vaccination -->
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div
            class="aspect-square bg-blue-100 flex items-center justify-center"
          >
            <img
              src="./../../assets/image/frame_10.png"
              alt="Tiêm phòng định kì"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-800 mb-2">Tiêm phòng định kì</h3>
            <p class="text-sm text-gray-600 mb-3">Thú cưng: Chó, mèo,...</p>
            <p class="font-bold text-gray-800 mb-3">Chỉ từ: 250.000 VND</p>
            <div class="flex items-center text-red-500 bg-cream p-2 rounded-lg">
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

        <!-- Service Card 4: Spa & Grooming -->
        <div
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div
            class="aspect-square bg-gray-100 flex items-center justify-center"
          >
            <img
              src="./../../assets/image/frame_11.png"
              alt="Spa - tắm, cắt tỉa lông"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-gray-800 mb-2">
              Spa - tắm, cắt tỉa lông
            </h3>
            <p class="text-sm text-gray-600 mb-3">Thú cưng: Chó, mèo,...</p>
            <p class="font-bold text-gray-800 mb-3">Chỉ từ: 1.100.000 VND</p>
            <div class="flex items-center text-red-500 bg-cream p-2 rounded-lg">
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

<script setup></script>

<style scoped>
/* Additional custom styles if needed */
</style>
