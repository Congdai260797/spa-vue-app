<template>
  <!-- Modal -->
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
    @click.self="closeModal"
  >
    <div class="relative w-full max-w-4xl p-8 mx-4 bg-white rounded-lg shadow-2xl">
      <!-- Header -->
      <div class="flex items-center justify-between pb-4 border-b">
        <h2 class="text-2xl font-bold text-gray-800" style="color: #003366">DANH SÁCH DỊCH VỤ</h2>
        <button
          @click="closeModal"
          class="p-2 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Filters -->
      <div class="flex flex-wrap justify-end items-center gap-4 my-6">
        <div class="flex items-center gap-2">
          <label for="priceSort" class="text-gray-600">Đơn giá</label>
          <select
            id="priceSort"
            v-model="priceSort"
            class="px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Mặc định</option>
            <option>Tăng dần</option>
            <option>Giảm dần</option>
          </select>
        </div>
      </div>

      <!-- Service List Table -->
      <div class="overflow-y-auto max-h-[60vh]">
        <table class="w-full text-left table-auto">
          <thead class="sticky top-0 bg-white">
            <tr class="bg-orange-100 text-gray-700">
              <th class="p-3 font-semibold text-[20px] text-brand-blue">Tên dịch vụ</th>
              <th class="p-3 font-semibold text-[20px] text-brand-blue">Mô tả dịch vụ</th>
              <th class="p-3 font-semibold text-right text-[20px] text-brand-blue">Đơn giá</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(service, index) in filteredServices"
              :key="service.id"
              class="border-b border-gray-200 last:border-b-0 hover:bg-gray-50"
            >
              <td
                class="p-3 font-medium text-gray-800"
                :class="{ 'bg-white': index % 2 === 0, 'bg-[#FFF9EE]': index % 2 !== 0 }"
              >
                {{ service.nameService }}
              </td>
              <td
                class="p-3 text-gray-600"
                :class="{ 'bg-white': index % 2 === 0, 'bg-[#FFF9EE]': index % 2 !== 0 }"
              >
                {{ service.description }}
              </td>
              <td
                class="p-3 font-semibold text-right text-gray-800"
                :class="{ 'bg-white': index % 2 === 0, 'bg-[#FFF9EE]': index % 2 !== 0 }"
              >
                {{ formatCurrency(service.price) }}
              </td>
            </tr>
            <tr v-if="filteredServices.length === 0">
              <td colspan="3" class="p-4 text-center text-gray-500">
                Không tìm thấy dịch vụ phù hợp.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const isModalOpen = ref(false);

  const props = defineProps({
    modelValue: {
      type: Object,
      required: true,
    },
  });

  const allServices = computed(() => props.modelValue);

  const nameFilter = ref('');
  const priceSort = ref('Mặc định');

  const openModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  const formatCurrency = (value) => {
    return value.toLocaleString('vi-VN') + ' đ';
  };

  const filteredServices = computed(() => {
    let services = [...allServices.value.pricePerService];

    if (nameFilter.value) {
      services = services.filter((service) =>
        service.name.toLowerCase().includes(nameFilter.value.toLowerCase())
      );
    }

    if (priceSort.value === 'Tăng dần') {
      services.sort((a, b) => a.price - b.price);
    } else if (priceSort.value === 'Giảm dần') {
      services.sort((a, b) => b.price - a.price);
    }

    return services;
  });
  defineExpose({
    openModal,
  });
</script>

<style scoped>
  /* Thêm một vài style nhỏ nếu cần */
</style>
