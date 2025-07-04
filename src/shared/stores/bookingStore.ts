import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookingPetStore = defineStore('bookingPet', () => {
  const no = ref('');
  const petType = ref('');
  const serviceType = ref('');
  const petState = ref('');
  const userName = ref('');
  const email = ref('');
  const phoneNumber = ref('');
  const selectedCity = ref('');
  const selectedDistrict = ref('');
  const selectedWard = ref('');
  const clientAddress = ref('');
  const dateReservation = ref('');
  const clinicId = ref('');
  const clinicName = ref('');
  const clinicAddress = ref('');
  const address = ref('');
  const submitStatus = ref(false);
  const errorMessage = ref('');

  return {
    no,
    petType,
    serviceType,
    petState,
    userName,
    email,
    phoneNumber,
    selectedCity,
    selectedDistrict,
    selectedWard,
    clientAddress,
    dateReservation,
    clinicId,
    clinicName,
    clinicAddress,
    address,
    submitStatus,
    errorMessage,
  };
});
