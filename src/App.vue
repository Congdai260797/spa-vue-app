<template>
  <div class="min-h-screen bg-gray-50">
    <!-- <header class="bg-white shadow">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex justify-between items-center">
          <div class="text-xl font-bold text-primary">MyBlog</div>

          <button
            @click="isMenuOpen = !isMenuOpen"
            class="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              v-if="!isMenuOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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

          <div class="hidden md:flex space-x-4">
            <router-link
              to="/"
              class="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              :class="{ 'text-primary font-medium': $route.path === '/' }"
            >
              Home
            </router-link>
            <router-link
              to="/articles"
              class="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              :class="{
                'text-primary font-medium': $route.path === '/articles',
              }"
            >
              Articles
            </router-link>
            <div class="relative" ref="categoriesDropdown">
              <button
                @click="isCategoriesOpen = !isCategoriesOpen"
                class="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center"
              >
                Categories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                v-if="isCategoriesOpen"
                class="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div class="py-1">
                  <router-link
                    to="/articles?category=Vue"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    @click="isCategoriesOpen = false"
                  >
                    Vue
                  </router-link>
                  <router-link
                    to="/articles?category=CSS"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    @click="isCategoriesOpen = false"
                  >
                    CSS
                  </router-link>
                  <router-link
                    to="/articles?category=JavaScript"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    @click="isCategoriesOpen = false"
                  >
                    JavaScript
                  </router-link>
                  <router-link
                    to="/articles?category=Web%20Development"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    @click="isCategoriesOpen = false"
                  >
                    Web Development
                  </router-link>
                </div>
              </div>
            </div>
            <router-link
              to="/about"
              class="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              :class="{ 'text-primary font-medium': $route.path === '/about' }"
            >
              About
            </router-link>
            <router-link
              to="/contact"
              class="px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
              :class="{
                'text-primary font-medium': $route.path === '/contact',
              }"
            >
              Contact
            </router-link>
          </div>
        </div>

        <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-2">
          <router-link
            to="/"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            :class="{ 'text-primary font-medium': $route.path === '/' }"
            @click="isMenuOpen = false"
          >
            Home
          </router-link>
          <router-link
            to="/articles"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            :class="{ 'text-primary font-medium': $route.path === '/articles' }"
            @click="isMenuOpen = false"
          >
            Articles
          </router-link>
          <div>
            <button
              @click="isMobileCategoriesOpen = !isMobileCategoriesOpen"
              class="w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition-colors flex items-center justify-between"
            >
              Categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div v-if="isMobileCategoriesOpen" class="pl-4 space-y-2 mt-2">
              <router-link
                to="/articles?category=Vue"
                class="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                @click="isMenuOpen = false"
              >
                Vue
              </router-link>
              <router-link
                to="/articles?category=CSS"
                class="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                @click="isMenuOpen = false"
              >
                CSS
              </router-link>
              <router-link
                to="/articles?category=JavaScript"
                class="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                @click="isMenuOpen = false"
              >
                JavaScript
              </router-link>
              <router-link
                to="/articles?category=Web%20Development"
                class="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
                @click="isMenuOpen = false"
              >
                Web Development
              </router-link>
            </div>
          </div>
          <router-link
            to="/about"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            :class="{ 'text-primary font-medium': $route.path === '/about' }"
            @click="isMenuOpen = false"
          >
            About
          </router-link>
          <router-link
            to="/contact"
            class="block px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
            :class="{ 'text-primary font-medium': $route.path === '/contact' }"
            @click="isMenuOpen = false"
          >
            Contact
          </router-link>
        </div>
      </nav>
    </header> -->

    <AppHeader />
    <!-- <main class="container mx-auto px-4 py-8">
      <router-view />
    </main> -->

    <main class="flex-grow wavy-bg">
      <div class="mx-auto">
        <BookingForm />
        <Articles />
        <Feedback />
      </div>
    </main>

    <Newsletter />
    <AppFooter />

    <!-- <footer class="bg-gray-800 text-white py-8">
      <div class="container mx-auto px-4 text-center">
        <p>© {{ new Date().getFullYear() }} MyBlog. All rights reserved.</p>
      </div>
    </footer> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AppHeader from "./pages/Header.vue";
import BookingForm from "./pages/BookingForm.vue";
import Newsletter from "./pages/Newsletter.vue";
import AppFooter from "./pages/AppFooter.vue";
import Articles from "./pages/Articles.vue";
import Feedback from "./pages/Feedback.vue";

const isMenuOpen = ref(false);
const isCategoriesOpen = ref(false);
const isMobileCategoriesOpen = ref(false);
const categoriesDropdown = ref(null);

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (
    categoriesDropdown.value &&
    !categoriesDropdown.value.contains(event.target)
  ) {
    isCategoriesOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<style>
:root {
  --color-primary: #4f46e5;
  --color-primary-foreground: #ffffff;
  --color-secondary: #f3f4f6;
  --color-secondary-foreground: #1f2937;
  --color-accent: #8b5cf6;
  --color-accent-foreground: #ffffff;
}

@tailwind base;
@tailwind components;
@tailwind utilities;

.text-primary {
  color: var(--color-primary);
}

.bg-primary {
  background-color: var(--color-primary);
}

.text-primary-foreground {
  color: var(--color-primary-foreground);
}

.bg-secondary {
  background-color: var(--color-secondary);
}

.text-secondary-foreground {
  color: var(--color-secondary-foreground);
}
</style>
