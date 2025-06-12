<template>
  <!-- Main Container -->
  <div
    class="bg-light-cream w-full flex flex-col items-center justify-center font-sans mt-10 mb-10 p-8"
  >
    <!-- Title -->
    <h2 class="text-4xl md:text-5xl font-bold text-brand-blue mb-20">PHẢN HỒI CỦA KHÁCH HÀNG</h2>

    <!-- Testimonials Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[140px]">
      <!-- Testimonial Card Loop -->
      <div
        v-for="item in clientFeedbacks"
        :key="item.id"
        class="relative bg-[#FEF3E0] rounded-2xl shadow-md p-4 pt-6 max-w-sm"
      >
        <!-- Profile Picture -->
        <img
          :src="item.image"
          alt="Customer photo"
          class="absolute top-12 left-1/2 -translate-x-1/2 lg:top-16 lg:left-[-20px] lg:-translate-x-8 w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
        />
        <!-- Rating -->
        <div class="flex justify-start lg:justify-center mb-4">
          <div class="bg-[#2b3a63] rounded-full px-4 py-1 flex items-center gap-1">
            <svg
              v-for="n in 5"
              :key="n"
              class="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>
        </div>
        <div class="w-[240px] ml-[70px]">
          <!-- Quote -->
          <p class="text-[#003C43] text-[14px] italic text-base leading-relaxed">
            "{{ item.comment }}"
          </p>

          <!-- Divider -->
          <hr class="my-5 border-t border-gray-300" />

          <!-- Customer Info -->
          <div>
            <span class="text-[16px] font-bold text-lg text-[#003C43]">
              {{ item.userName }}
            </span>
            <div class="flex items-center mt-1 text-gray-500">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <p class="text-[14px]">{{ item.location }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch, computed } from 'vue';

  import bannerImage1 from './../../assets/image/Ellipse1.png';
  import bannerImage2 from './../../assets/image/Ellipse2.png';
  import bannerImage3 from './../../assets/image/Ellipse3.png';

  const props = defineProps({
    modelValue: {
      type: Object,
      required: true,
    },
  });

  const data = computed(() => props.modelValue);

  const listImage = [bannerImage1, bannerImage2, bannerImage3];
  const listLocation = ['Mỹ Đình, Hà Nội', 'Thanh Xuân, Hà Nội', 'Hoàn Kiếm, Hà Nội'];

  const clientFeedbacks = ref([]);

  watch(
    () => props.modelValue,
    (newValue) => {
      if (newValue && newValue.ratings) {
        clientFeedbacks.value = newValue.ratings.slice(0, 3).map((item, index) => ({
          image: listImage[index] || '',
          rating: item.rating,
          comment: item.comment,
          userName: item.userName,
          location: listLocation[index] || '',
        }));
      }
    }
  );
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;700&display=swap');

  .font-sans {
    font-family: 'Be Vietnam Pro', sans-serif;
  }
</style>
