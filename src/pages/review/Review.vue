<template>
  <div class="w-[1184px] mx-auto">
    <div class="h-[50px] flex items-center gap-x-[24px]">
      <span>Trang chủ</span>
      <span class="w-[6px] h-[6px] bg-[#103559]"></span>
      <span>Phản hồi</span>
      <span class="w-[6px] h-[6px] bg-[#103559]"></span>
      <span>Phòng khám thú cưng Sakura Pet</span>
    </div>

    <div class="w-full flex justify-between">
      <div class="w-[680px]">
        <div
          class="w-full h-[204px] bg-[#FFE7BA] p-[24px] rounded-[12px] flex items-start gap-x-[24px]"
        >
          <div
            class="w-[114px] h-[114px] border-[2px] border-[#9A9A9A] rounded-full overflow-hidden"
          >
            <img
              src="./../../assets/image/ht-pet.jpg"
              alt="store logo"
              class="w-full h-full object-cover"
            />
          </div>
          <div>
            <div
              class="w-[100px] h-[22px] py-[4px] px-[6px] border border-[#C1C1C1] rounded-[4px] flex items-center gap-x-[4px]"
            >
              <img src="./../../assets/image/green-check.png" alt="icon-check" />
              <span class="text-[10px] text-black font-normal">Đã kiểm chứng</span>
            </div>

            <div class="w-[306px]">
              <div
                class="w-full overflow-hidden text-ellipsis whitespace-nowrap text-black text-[36px] font-bold"
              >
                {{ dataResponse?.overview?.clinicName || '' }}
              </div>
              <div class="flex items-center gap-x-[24px] text-[15px] font-medium">
                <div>
                  Đánh giá:
                  <span class="text-[15px] font-bold text-[#103559]">
                    {{
                      dataResponse?.overview?.rating
                        ? Number(dataResponse?.overview?.rating).toFixed(1)
                        : ''
                    }}
                  </span>
                </div>
                <div class="w-[4px] h-[4px] rounded-full bg-black"></div>
                <div class="flex items-center">
                  <svg
                    class="w-4 h-4 ms-1 text-[#FCC71B]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-[#FCC71B]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-[#FCC71B]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-[#FCC71B]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path
                      d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                    />
                  </svg>
                  <svg
                    class="w-4 h-4 ms-1 text-[#C8B781]"
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
              <div class="text-[15px] font-medium">
                Phòng khám: <span class="text-[15px] font-bold text-[#103559]">3 cơ sở</span>
              </div>
              <div class="text-[15px] font-medium">
                Số lượt đặt lịch:
                <span class="text-[15px] font-bold text-[#103559]">
                  {{ dataResponse?.overview?.reservationCount || '' }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div
          class="w-full h-[190px] mt-[24px] px-[50px] py-[24px] rounded-[12px] flex items-center justify-between shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"
        >
          <!-- left -->
          <div class="w-[280px]">
            <div class="flex items-center gap-x-[4px]">
              <svg
                class="w-10 h-10 ms-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path
                  d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                />
              </svg>

              <span class="text-[34px] font-bold text-black">
                {{
                  dataResponse?.overview?.rating
                    ? Number(dataResponse?.overview?.rating).toFixed(1)
                    : ''
                }}
              </span>
            </div>
            <div class="text-[28px] font-medium">Tất cả các đánh giá</div>
            <div class="text-[16px] font-medium">
              Tổng cộng
              <span class="text-[15px] font-bold text-[#103559]">
                {{ dataResponse?.pagination?.total || '' }}
              </span>
            </div>
          </div>

          <!-- right -->
          <div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-[14px] font-medium text-black">5 star</a>
              <div class="w-[140px] h-[10px] mx-4 bg-[#dadada] rounded-xl">
                <div class="h-[10px] bg-[#FCC71B] rounded-xl" style="width: 70%"></div>
              </div>
              <span class="text-[14px] font-medium text-black">70%</span>
            </div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-[14px] font-medium text-black">4 star</a>
              <div class="w-[140px] h-[10px] mx-4 bg-[#dadada] rounded-xl">
                <div class="h-[10px] bg-[#FCC71B] rounded-xl" style="width: 17%"></div>
              </div>
              <span class="text-[14px] font-medium text-black">17%</span>
            </div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-[14px] font-medium text-black">3 star</a>
              <div class="w-[140px] h-[10px] mx-4 bg-[#dadada] rounded-xl">
                <div class="h-[10px] bg-[#FCC71B] rounded-xl" style="width: 8%"></div>
              </div>
              <span class="text-[14px] font-medium text-black">8%</span>
            </div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-[14px] font-medium text-black">2 star</a>
              <div class="w-[140px] h-[10px] mx-4 bg-[#dadada] rounded-xl">
                <div class="h-[10px] bg-[#FCC71B] rounded-xl" style="width: 4%"></div>
              </div>
              <span class="text-[14px] font-medium text-black">4%</span>
            </div>
            <div class="flex items-center mt-4">
              <a href="#" class="text-[14px] font-medium text-black">1 star</a>
              <div class="w-[140px] h-[10px] mx-4 bg-[#dadada] rounded-xl">
                <div class="h-[10px] bg-[#FCC71B] rounded-xl" style="width: 1%"></div>
              </div>
              <span class="text-[14px] font-medium text-black">1%</span>
            </div>
          </div>
        </div>

        <!-- block -->
        <div class="mt-[24px]">
          <input
            type="text"
            class="w-full h-[44px] border border-[#C9C9C9] rounded-[20px] px-[20px]"
            placeholder="Tìm kiếm theo từ khóa"
          />
        </div>
        <!-- block comment -->
        <div v-if="dataResponse?.ratings && dataResponse?.ratings.length > 0">
          <div
            class="w-full mt-[24px] mb-[24px]"
            v-for="item in dataResponse?.ratings"
            :key="item.id"
          >
            <div class="flex items-center gap-x-[12px]">
              <div class="w-10 h-10 bg-gray-300 rounded-full"></div>
              <div class="text-[15px] font-medium">
                <div>{{ item?.userName }}</div>
                <div class="text-[#5D5D5D]">Ngày {{ item?.experienceDate }}</div>
              </div>
            </div>
            <div class="flex items-center mt-[12px]">
              <template v-for="i in 5" :key="i">
                <svg
                  class="w-4 h-4 ms-1"
                  :class="i <= item.rating ? 'text-[#FCC71B]' : 'text-[#C8B781]'"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path
                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                  />
                </svg>
              </template>
            </div>
            <div class="text-[15px] font-normal mt-[12px]">
              {{ item?.comment }}
            </div>
          </div>
        </div>
      </div>

      <!-- right side -->
      <div
        class="w-[480px] min-h-[500px] px-[12px] py-[24px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] rounded-[12px]"
      >
        <!-- rattings -->
        <div class="flex items-center">
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
        </div>

        <!-- title -->
        <div class="mt-[24px] text-[16px] font-medium">Đặt tiêu đề bài đánh giá của bạn</div>
        <input
          v-model="userName"
          type="text"
          class="w-full h-[44px] mt-[16px] border border-[#4d4d4d] rounded-[4px] px-[12px]"
          placeholder="Điều quan trọng mà mọi người cần biết là gì?"
        />

        <!-- content -->
        <div class="mt-[24px] text-[16px] font-medium">
          Hãy cho chúng tôi biết về trải nghiệm của bạn
        </div>
        <textarea
          v-model="comment"
          class="w-full h-[200px] mt-[16px] border border-[#4d4d4d] rounded-[4px] px-[12px]"
          placeholder="Nhập nội dung đánh giá của bạn"
        ></textarea>

        <div class="mt-[24px] text-[16px] font-medium">Ngày trải nghiệm</div>
        <input
          v-model="experienceDate"
          type="date"
          class="w-full h-[44px] mt-[16px] border border-[#4d4d4d] rounded-[4px] px-[12px]"
          placeholder="dd/mm/yy"
        />

        <div class="mt-[24px] text-[16px] font-medium">Số điện thoại</div>
        <div class="text-[14px] text-[#5D5D5D]">
          Thêm số điện thoại của bạn để công ty có thể hiểu rõ hơn về trải nghiệm và phản hồi của
          bạn.
        </div>
        <input
          v-model="phoneNumber"
          type="text"
          class="w-full h-[44px] mt-[16px] border border-[#4d4d4d] rounded-[4px] px-[12px]"
          placeholder="Nhập số điện thoại"
        />

        <div
          class="mt-[24px] w-full min-h-[248px] px-[12px] py-[24px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] rounded-[12px]"
        >
          <div class="text-[18px] font-medium text-center">Gửi đánh giá của bạn</div>
          <div class="flex gap-x-[8px] mt-[24px]">
            <input type="checkbox" class="w-[22px] h-[22px] mt-[2px]" />
            <div class="text-[14px] font-normal">
              Bằng cách gửi bài đánh giá này, bạn xác nhận rằng bài đánh giá này dựa trên trải
              nghiệm thực tế và bạn không nhận được bất kỳ động lực nào để viết bài đánh giá này.
            </div>
          </div>

          <div class="mt-[12px]">
            Bằng cách tiếp tục, bạn đồng ý với Điều khoản và Điều kiện và Chính sách Bảo Mật của
            Petstie Care.
          </div>

          <div class="mt-[24px]">
            <button
              class="w-full h-[44px] bg-[#103559] rounded-[4px] text-[16px] text-white font-medium"
              @click="submitReview"
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { onMounted } from 'vue';
  import ReviewService from './review.service';

  const clinicId = ref('');

  const reviewService = new ReviewService();
  const dataResponse = ref({});
  const userName = ref('');
  const comment = ref('');
  const experienceDate = ref('');
  const phoneNumber = ref('');
  const rating = ref(0);

  onMounted(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    clinicId.value = urlParams.get('clinicId');

    const response = await reviewService.createReview(clinicId.value);
    if (response.message === 'success') {
      dataResponse.value = response.data;
    }
  });

  function submitReview() {
    console.log({
      clinicId: clinicId.value,
      userName: userName.value,
      comment: comment.value,
      experienceDate: experienceDate.value,
      phoneNumber: phoneNumber.value,
      rating: rating.value,
    });
    // Xử lý gửi data ở đây
  }
</script>
