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

router.afterEach(() => {

    // Check if the route is '/home'
    // if (to.fullPath === '/home') {

    // Create a new <script> element to load an external JavaScript file
    const script = document.createElement('script');
    script.src = '/js/waiting.js'; // Path to the script file
    console.log('Route changed!'); // Log when the route changes
    script.type = 'text/javascript'; // Set the type attribute to JavaScript
    script.async = true; // Allow the script to load asynchronously

    // Check if the script has already been added to the DOM to avoid duplicate additions
    if (!document.querySelector(`script[src="${script.src}"]`)) {
        document.body.appendChild(script); // Append the script to the body
    }
    // }
});

// Create and mount the app
const app = createApp(App);
app.use(router);
app.mount('#app');