<!-- src/components/StarRating.vue -->
<template>
  <div class="flex items-center">
    <!-- Lặp qua 5 ngôi sao -->
    <div v-for="star in totalStars" :key="star" class="relative" aria-hidden="true">
      <!-- Sao nền (màu xám) - luôn hiển thị -->
      <svg
        class="w-6 h-6 ms-1 text-[#C8B781]"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path
          d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
        />
      </svg>
      <!-- Sao tô màu (màu vàng) - được cắt theo % rating -->
      <div
        class="absolute top-0 left-0 h-full overflow-hidden"
        :style="{ width: getStarFill(star) }"
      >
        <svg
          class="w-6 h-6 ms-1 text-[#FCC71B]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 22 20"
        >
          <path
            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue';

  // Định nghĩa các props mà component nhận vào
  const props = defineProps({
    rating: {
      type: Number,
      required: true,
      default: 0,
      // Đảm bảo rating luôn trong khoảng 0-5
      validator: (value) => value >= 0 && value <= 5,
    },
    totalStars: {
      type: Number,
      default: 5,
    },
  });

  /**
   * Tính toán độ rộng tô màu cho mỗi ngôi sao.
   * @param {number} star - Vị trí của ngôi sao hiện tại trong vòng lặp (1, 2, 3, 4, 5)
   */
  const getStarFill = (star) => {
    // Nếu rating lớn hơn hoặc bằng vị trí sao hiện tại, sao đó được tô đầy 100%
    // Ví dụ: rating = 3.5, star = 3 -> 100%
    if (props.rating >= star) {
      return '100%';
    }

    // Nếu rating nhỏ hơn vị trí sao nhưng lớn hơn vị trí sao trước đó, đây là sao lẻ
    // Ví dụ: rating = 3.5, star = 4 -> (3.5 - 3) * 100 = 50%
    if (props.rating > star - 1) {
      const percentage = (props.rating - (star - 1)) * 100;
      return `${percentage}%`;
    }

    // Nếu rating nhỏ hơn vị trí sao trước đó, sao đó hoàn toàn trống
    // Ví dụ: rating = 3.5, star = 5 -> 0%
    return '0%';
  };
</script>
