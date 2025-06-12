<template>
  <Breadcrumb ref="breadcrumb" class="bg-light-cream mb-4 mt-4" />
  <div class="bg-light-cream p-6">
    <div class="max-w-6xl mx-auto">
      <!-- Main Content -->
      <div class="rounded-lg p-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Left Side - Clinic Image -->
          <div class="flex justify-center">
            <div class="w-80 h-80 rounded-full overflow-hidden shadow-lg">
              <img
                :src="clinic.logoUrl"
                alt="Happy Pet Veterinary Clinic"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Right Side - Clinic Information -->
          <div class="space-y-6">
            <div>
              <h1 class="text-[34px] font-bold text-gray-800 uppercase mb-4">
                {{ clinic.clinicName }}
              </h1>
              <p class="text-lg text-gray-600 font-medium">Với 12 năm kinh nghiệm</p>
            </div>

            <div class="text-gray-700 leading-relaxed">
              <p>
                {{ clinic.clinicDescription }}
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
                @click="showServiceList"
              >
                Xem bảng giá
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ServiceModal v-model="clinic" ref="serviceModalRef" />
</template>

<script setup>
  import { ref, computed } from 'vue';
  import ServiceModal from './ModalClinic.vue';
  import Breadcrumb from '../../shared/components/Breadcrumb.vue';

  const serviceModalRef = ref(null);

  const props = defineProps({
    modelValue: {
      type: Object,
      required: true,
    },
  });
  const clinic = computed(() => props.modelValue);

  const showServiceList = () => {
    if (serviceModalRef.value) {
      serviceModalRef.value.openModal();
    }
  };

  // watch(
  //   () => props.modelValue,
  //   (newValue) => {
  //     console.log(newValue);
  //     // if (newValue) {
  //     //   clinic.value = newValue;
  //     // }
  //   }
  // );
</script>

<style scoped>
  /* Additional custom styles if needed */
</style>
