import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/home/Home.vue';
import Booking from './pages/booking/booking.vue';
import bookingTicketInfo from './pages/booking/booking-ticket-info.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/booking', component: Booking },
    { path: '/booking/ticket-info', component: bookingTicketInfo },
    { path: '/clinic', component: () => import('./pages/clinic/AboutClinic.vue') },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Create and mount the app
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');