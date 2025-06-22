<template>
  <Loading :visible="isLoading" />
  <form @submit.prevent="submitReview">
    <div class="w-[1184px] mx-auto">
      <div class="flex items-center">
        <Breadcrumb ref="breadcrumb" class="bg-light-cream mb-4 mt-4" />
        <span class="p-1 text-[#6c757d]">•</span>
        <span class="text-[#6c757d] font-medium">
          {{ dataResponse?.overview?.clinicName || '' }}</span
        >
      </div>

      <div class="w-full flex justify-between">
        <div class="w-[680px]">
          <div class="w-full bg-[#FFE7BA] p-[24px] rounded-[12px] flex items-start gap-x-[24px]">
            <div
              class="min-w-[114px] h-[114px] border-[2px] border-[#9A9A9A] rounded-full overflow-hidden"
            >
              <img
                :src="dataResponse?.overview?.logoUrl || ''"
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

              <div class="min-w-[306px]">
                <div
                  class="w-full overflow-hidden text-ellipsis text-black text-[32px] font-bold leading-[40px]"
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
            class="w-full mt-[24px] px-[50px] py-[24px] rounded-[12px] flex items-center justify-between shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]"
          >
            <!-- left -->
            <div class="w-[280px]">
              <div class="flex items-center gap-x-[4px]">
                <svg
                  class="w-10 h-10 text-yellow-300"
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
              <div
                class="flex items-center"
                :class="{ ' mb-4': star.star != 1 }"
                v-for="star in stars"
                :key="star.star"
              >
                <input
                  type="checkbox"
                  :checked="formData.rating === star.star"
                  @change="handleCheckboxChange(star.star)"
                  class="w-[22px] h-[22px] mt-[2px] cursor-pointer mr-2"
                />
                <a href="#" class="text-[14px] font-medium text-black">{{ star.star }} star</a>
                <div class="w-[140px] h-[10px] mx-4 bg-[#dadada] rounded-xl">
                  <div
                    class="h-[10px] bg-[#FCC71B] rounded-xl"
                    :style="{ width: star.value + '%' }"
                  ></div>
                </div>
                <span class="text-[14px] font-medium text-black">{{ star.value }}%</span>
              </div>
              <p v-if="errors.rating" class="text-red-500">
                {{ errors.rating }}
              </p>
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
              v-for="(item, index) in dataResponse?.ratings"
              :key="item.id"
            >
              <div class="flex items-center gap-x-[12px]">
                <div class="w-10 h-10 bg-gray-300 rounded-full">
                  <img
                    class="img-avata rounded-[20px]"
                    :src="images[index % images.length]"
                    alt=""
                  />
                </div>
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
              <div class="flex items-center gap-4 mt-2">
                <!-- Hữu ích (Useful) Button -->
                <a
                  class="flex items-center gap-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L9 7v13m-3-4h-2m0-4h2m-2-4h2"
                    />
                  </svg>
                  <span class="text-sm font-medium">Hữu ích</span>
                </a>

                <!-- Chia sẻ (Share) Button -->
                <a
                  class="flex items-center gap-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                    />
                  </svg>
                  <span class="text-sm font-medium">Chia sẻ</span>
                </a>

                <!-- Flag/Bookmark Button -->
                <a
                  class="flex items-center gap-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200 cursor-pointer"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </a>
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
            v-model="formData.userName"
            type="text"
            class="w-full h-[44px] mt-[16px] border border-[#4d4d4d] rounded-[4px] px-[12px]"
            placeholder="Điều quan trọng mà mọi người cần biết là gì?"
          />
          <p v-if="errors.userName" class="text-red-500">{{ errors.userName }}</p>

          <!-- content -->
          <div class="mt-[24px] text-[16px] font-medium">
            Hãy cho chúng tôi biết về trải nghiệm của bạn
          </div>
          <textarea
            v-model="formData.comment"
            class="w-full h-[200px] mt-[16px] border border-[#4d4d4d] rounded-[4px] px-[12px]"
            placeholder="Nhập nội dung đánh giá của bạn"
          ></textarea>

          <div class="upload-image">
            <div class="mt-[24px] text-[16px] font-medium">
              Thêm hình ảnh cho bài đánh giá của bạn
            </div>
            <div class="mb-4 flex mt-4">
              <div class="flex items-center gap-4">
                <img
                  class="choose-button img-logo cursor-pointer"
                  @click="triggerBackground('pre')"
                  src="./../../assets/image/add.png"
                  alt=""
                />
                <input
                  ref="backgroundInput"
                  type="file"
                  class="hidden"
                  accept="image/*"
                  @change="handleFileUpload($event, 'pre_waiting_room_background')"
                />
                <div
                  class="img-logo rounded-[5px]"
                  :style="backgroundView"
                  @click="triggerBackground('pre')"
                ></div>
              </div>
            </div>
          </div>

          <div class="mt-[24px] text-[16px] font-medium">Ngày trải nghiệm</div>
          <input
            v-model="formData.experienceDate"
            type="date"
            class="w-full h-[44px] mt-[16px] border border-[#4d4d4d] rounded-[4px] px-[12px]"
            placeholder="dd/mm/yy"
          />
          <p v-if="errors.experienceDate" class="text-red-500">{{ errors.experienceDate }}</p>

          <div class="mt-[24px] text-[16px] font-medium">Số điện thoại</div>
          <div class="text-[14px] text-[#5D5D5D]">
            Thêm số điện thoại của bạn để công ty có thể hiểu rõ hơn về trải nghiệm và phản hồi của
            bạn.
          </div>
          <input
            v-model="formData.phoneNumber"
            type="text"
            class="w-full h-[44px] mt-[16px] border border-[#4d4d4d] rounded-[4px] px-[12px]"
            placeholder="Nhập số điện thoại"
          />
          <p v-if="errors.phoneNumber" class="text-red-500">{{ errors.phoneNumber }}</p>

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
  </form>
  <div ref="serviceModalRef" v-if="isModal">
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div
        class="bg-gradient-to-br from-[#0b3d63] to-[#145583] rounded-2xl p-8 w-full mx-4 relative text-white shadow-2xl max-w-[600px]"
      >
        <!-- Close Button -->
        <button
          @click="returnToHome"
          class="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
        >
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <!-- Logo and Brand -->
        <div class="text-center mb-8">
          <img
            class="max-w-[152px] h-auto mx-auto"
            src="./../../assets/image/logo-white.png"
            alt=""
          />
        </div>

        <!-- Success Message -->
        <div class="text-center mb-8">
          <h3 class="text-[32px] font-bold mb-6">Cảm ơn bạn đã đánh giá.</h3>

          <!-- Appointment Info -->
          <h4 class="text-lg font-semibold mb-4">Mọi đánh giá của bạn là để chúng tôi tốt hơn!</h4>
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-center">
          <button
            @click="returnClinic"
            class="w-[210px] h-[44px] bg-[#feb775] text-[#103559] hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors mr-4"
          >
            Đặt dịch vụ khác
          </button>
          <button
            @click="returnToHome"
            class="w-[210px] h-[44px] border-2 border-white text-white hover:bg-white hover:text-blue-800 font-semibold rounded-lg transition-colors ml-4"
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, watch, computed } from 'vue';
  import Loading from '../../shared/components/Loading.vue';
  import { onMounted } from 'vue';
  import ReviewService from './review.service';
  import { useRoute, useRouter } from 'vue-router';
  import Breadcrumb from '../../shared/components/Breadcrumb.vue';
  import image_1 from '../../assets/image/frame_8.png';
  import image_2 from '../../assets/image/frame_9.png';
  import image_3 from '../../assets/image/frame_10.png';
  import image_4 from '../../assets/image/frame_11.png';
  import image_5 from '../../assets/image/frame_70.png';
  import image_6 from '../../assets/image/frame_71.png';

  const route = useRoute();
  const router = useRouter();
  const isLoading = ref(false);

  const clinicId = ref('');

  const reviewService = new ReviewService();
  const isModal = ref(false);
  const dataResponse = ref({});
  const isSubmited = ref(false);

  const backgroundInput = ref(null);
  const backgroundRef = ref('');
  const requestUpload = ref(null);

  const images = [image_1, image_2, image_3, image_4, image_5, image_6];

  const formData = reactive({
    clinicId: '',
    userName: '',
    comment: '',
    experienceDate: '',
    rating: 0,
    phoneNumber: '',
  });

  const errors = reactive({
    clinicId: '',
    userName: '',
    comment: '',
    experienceDate: '',
    rating: 0,
    phoneNumber: '',
  });

  const validate = () => {
    let isValid = true;
    errors.userName = '';
    errors.experienceDate = '';
    errors.rating = 0;
    errors.phoneNumber = '';

    if (!formData.userName) {
      errors.userName = 'Họ tên là bắt buộc';
      isValid = false;
    }

    if (!formData.experienceDate) {
      errors.experienceDate = 'Ngày trải nghiệm là bắt buộc';
      isValid = false;
    }

    if (!formData.rating) {
      errors.rating = 'Đánh giá là bắt buộc';
      isValid = false;
    }

    if (!formData.phoneNumber) {
      errors.phoneNumber = 'Số điện thoại là bắt buộc';
      isValid = false;
    } else if (!/^\d{10,11}$/.test(formData.phoneNumber)) {
      errors.phoneNumber = 'Số điện thoại không hợp lệ';
      isValid = false;
    }

    return isValid;
  };

  const stars = [
    {
      star: 5,
      value: 70,
    },
    {
      star: 4,
      value: 17,
    },
    {
      star: 3,
      value: 8,
    },
    {
      star: 2,
      value: 4,
    },
    {
      star: 1,
      value: 0,
    },
  ];

  onMounted(async () => {
    isLoading.value = true;
    clinicId.value = route.params.clinicId;
    formData.clinicId = clinicId.value;
    const response = await reviewService.getReview(clinicId.value);
    if (response.message === 'success') {
      dataResponse.value = response.data;
    }
    isLoading.value = false;
  });

  const handleCheckboxChange = (selectedStar) => {
    if (formData.rating === selectedStar) {
      formData.rating = null;
    } else {
      formData.rating = selectedStar;
    }
  };

  const submitReview = async () => {
    isLoading.value = true;
    isSubmited.value = true;
    if (validate()) {
      const response = await reviewService.createReview(formData);
      if (response.message === 'success') {
        isModal.value = true;
      }
    }
    isLoading.value = false;
  };

  const returnClinic = () => {
    router.push(`/clinic`);
  };

  const returnToHome = () => {
    router.push('/');
  };

  const backgroundView = computed(() => {
    const url = backgroundRef.value;
    return url ? { backgroundImage: `url('${url}')` } : '';
  });

  const triggerBackground = (type) => {
    backgroundInput.value.click();
  };

  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];

    if (!file) return;

    if (file) {
      const reader = new FileReader();
      let fileBase64 = '';
      reader.onload = async (e) => {
        fileBase64 = e.target.result.replace(/^data:image\/[a-zA-Z]+;base64,/, '');

        requestUpload.value = {
          file_name: file.name,
          file_path: type,
          file_type: file.type,
          file_content: fileBase64,
        };
        backgroundRef.value = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  watch(formData, (newValue) => {
    if (isSubmited.value) {
      validate();
    }
  });
</script>

<style scoped>
  .img-avata {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img-logo {
    width: 75px;
    height: 75px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
