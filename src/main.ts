// src/main.js
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // Import router đã tách

const app = createApp(App);

router.afterEach(() => {
    // Check if the route is '/home'
    // if (to.fullPath === '/home') {

    // Create a new <script> element to load an external JavaScript file
    console.log('object');
    const script = document.createElement('script');
    script.src = '/js/waiting.js'; // Path to the script file
    script.type = 'text/javascript'; // Set the type attribute to JavaScript
    script.async = true; // Allow the script to load asynchronously

    // Check if the script has already been added to the DOM to avoid duplicate additions
    if (!document.querySelector(`script[src="${script.src}"]`)) {
        document.body.appendChild(script); // Append the script to the body
    }
    // }
});

app.use(createPinia());
app.use(router);
app.mount('#app');
