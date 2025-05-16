// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './pages/Home.vue';
import Articles from './pages/Articles.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

// Define routes
const routes = [
    { path: '/', component: Home },
    { path: '/articles', component: Articles },
    { path: '/about', component: About },
    { path: '/contact', component: Contact }
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