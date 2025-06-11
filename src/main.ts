import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/home/Home.vue';
import Booking from './pages/booking/booking.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/booking', component: Booking },
    { path: '/clinic', component: () => import('./pages/clinic/AboutClinic.vue') },
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    routes
});

// Create and mount the app
const app = createApp(App);
app.use(router);
app.mount('#app');