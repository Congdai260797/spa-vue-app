<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />
    <main>
      <router-view />
    </main>
    <Newsletter />
    <AppFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AppHeader from "./pages/Header.vue";
import Newsletter from "./pages/Newsletter.vue";

import AppFooter from "./pages/AppFooter.vue";

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
