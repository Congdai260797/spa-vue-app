// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/Home.vue';
import Booking from '../pages/booking/booking.vue';
import bookingTicketInfo from '../pages/booking/booking-ticket-info.vue';

const routes = [
  {
    path: '/:catchAll(.*)',
    component: Home,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      breadcrumb: 'Trang chủ',
      icon: 'fa-home', // Tùy chọn: thêm icon
    },
  },
  {
    path: '/booking',
    name: 'Booking',
    component: Booking,
    meta: {
      breadcrumb: 'Trang đặt lịch',
      icon: 'fa-calendar', // Tùy chọn: thêm icon
    },
  },
  {
    path: '/booking/ticket-info',
    name: 'BookingTicketInfo',
    component: bookingTicketInfo,
    meta: {
      breadcrumb: 'Thông tin vé',
      icon: 'fa-ticket', // Tùy chọn: thêm icon
    },
  },
  {
    path: '/clinic',
    name: 'Clinic',
    component: () => import('../pages/clinic/Clinic.vue'),
    meta: {
      breadcrumb: 'Phòng khám',
      icon: 'fa-clinic', // Tùy chọn: thêm icon
    },
  },
  {
    path: '/clinic/:clinicId',
    name: 'ClinicDetail',
    component: () => import('../pages/clinic/AboutClinic.vue'),
    meta: {
      breadcrumb: 'Chi tiết phòng khám',
      icon: 'fa-clinic', // Tùy chọn: thêm icon
    },
  },
  {
    path: '/booking-lookup',
    name: 'BookingLookup',
    component: () => import('../pages/booking-lockup/Booking-lockup.vue'),
    meta: {
      breadcrumb: 'Tra cứu lịch đặt',
      icon: 'fa-calendar', // Tùy chọn: thêm icon
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
