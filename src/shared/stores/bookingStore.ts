import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBookingPetStore = defineStore('bookingPet', () => {
  const petType = ref("cho");
  const serviceType = ref("");
  const petState = ref("");
  const userName = ref("");
  const email = ref("");
  const phoneNumber = ref("");
  const selectedCity = ref("");
  const selectedDistrict = ref("");
  const selectedWard = ref("");
  const clientAddress = ref("");
  const dateReservation = ref("");
  const clinicId = ref("");

  return { petType, serviceType, petState, userName, email, phoneNumber, selectedCity, selectedDistrict, selectedWard ,clientAddress, dateReservation, clinicId };
});