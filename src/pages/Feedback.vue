<template>
  <div class="container mx-auto p-4">
    <div
      class="flex flex-col md:flex-row justify-center items-center p-2 space-y-2 md:space-y-0 md:space-x-4"
    >
      <div class="overflow-hidden w-full relative h-[571px]">
        <div class="relative pb-2/3">
          <img
            src="./../assets/image/frame_83.png"
            alt="Woman petting a dog"
            class="absolute h-full w-full object-cover rounded-lg"
          />
        </div>
        <div
          class="p-4 absolute bottom-[20px] left-0 right-0 rounded-[20px] w-[324px] bg-[#FCEED5]"
        >
          <p class="text-gray-700 text-base mb-4">
            "Petstie Care giúp mình đặt lịch khám cho Momo nhanh chóng mà không
            cần phải gọi điện. Mình cũng rất thích tính năng nhắc nhở tiêm
            phòng, cực kỳ tiện lợi!"
          </p>
          <p class="text-gray-900 font-semibold text-sm">
            Nguyễn Minh Anh - Chủ nuôi của Momo
          </p>
        </div>
      </div>

      <div class="overflow-hidden w-full relative h-[571px]">
        <div class="relative pb-2/3">
          <img
            src="./../assets/image/frame_82.png"
            alt="Children with a dog"
            class="absolute h-full w-full object-cover rounded-lg"
          />
        </div>
        <div
          class="p-4 absolute bottom-[20px] left-0 right-0 rounded-[20px] w-[324px] bg-[#FCEED5]"
        >
          <p class="text-gray-700 text-base mb-4">
            "Trước đây mình hay quên khám định kỳ cho Cam, nhưng từ khi dùng
            Petstie Care, mình không còn lo lắng nữa. Dịch vụ rất tiện và các
            phòng khám đối tác cũng rất uy tín!"
          </p>
          <p class="text-gray-900 font-semibold text-sm">
            Trần Quang Huy - Chủ nuôi của Bé Cam
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PetCareTestimonial",
  // You can add props, data, methods as needed for dynamic content
};
</script>

<style scoped>
/* You can add custom styles here if necessary, but Tailwind should handle most of it */
.pb-2\/3 {
  padding-bottom: 66.666667%; /* For aspect ratio (2/3) */
}
</style>
