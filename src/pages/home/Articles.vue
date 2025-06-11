<template>
  <div class="font-sans antialiased text-gray-800">
    <div class="container mx-auto px-4 py-16">
      <div
        class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16"
      >
        <div class="lg:w-1/2 mb-12 lg:mb-0">
          <h1 class="text-4xl font-bold mb-6 leading-tight text-[48px]">
            Chăm sóc thú cưng của bạn chưa bao giờ dễ dàng đến thế!
          </h1>
          <p class="text-lg text-gray-600 mb-8">
            Petsie Care là nền tảng giúp chủ nuôi tìm kiếm phòng khám thú y chất
            lượng, đặt lịch khám, nhắc nhở lịch tiêm phòng và tư vấn sức khỏe
            thú cưng mọi lúc, mọi nơi.
          </p>

          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="rounded-full p-2">
                <img
                  src="./../../assets/profile-2user.svg"
                  alt="icon"
                  class="w-8 h-8"
                />
              </div>
              <span class="text-xl font-medium"
                >Tìm kiếm phòng khám phù hợp dựa trên AI</span
              >
            </div>

            <div class="flex items-center space-x-4">
              <div class="rounded-full p-2">
                <img
                  src="./../../assets/heart.svg"
                  alt="icon"
                  class="w-8 h-8"
                />
              </div>
              <span class="text-xl font-medium"
                >Đặt lịch nhanh chóng, tiện lợi</span
              >
            </div>

            <div class="flex items-center space-x-4">
              <div class="rounded-full p-2">
                <img
                  src="./../../assets/like-dislike.svg"
                  alt="icon"
                  class="w-8 h-8"
                />
              </div>
              <span class="text-xl font-medium"
                >Đánh giá phòng khám từ người dùng</span
              >
            </div>

            <div class="flex items-center space-x-4">
              <div class="rounded-full p-2">
                <img
                  src="./../../assets/call-calling.svg"
                  alt="icon"
                  class="w-8 h-8"
                />
              </div>
              <span class="text-xl font-medium"
                >Tư vấn sức khỏe thú cưng trực tuyến</span
              >
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 flex flex-col space-y-8">
          <div class="rounded-xl overflow-hidden shadow-lg">
            <img
              src="./../../assets/image/frame_70.png"
              alt="Female vet holding a small dog"
              class="w-full h-auto object-cover"
            />
          </div>
          <div class="rounded-xl overflow-hidden shadow-lg">
            <img
              src="./../../assets/image/frame_71.png"
              alt="Vet examining a Shiba Inu"
              class="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetsieCareSection",
};
</script>

<style>
/* You can add any custom styles here if needed,
   but Tailwind handles most of the styling. */
</style>
