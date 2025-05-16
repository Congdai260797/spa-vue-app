<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">Articles</h1>

    <!-- Search and Filter -->
    <div class="mb-8 flex flex-col sm:flex-row gap-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search articles..."
        class="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <select
        v-model="selectedCategory"
        class="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">All Categories</option>
        <option value="Vue">Vue</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
        <option value="Web Development">Web Development</option>
      </select>
    </div>

    <!-- Articles List -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div
        v-for="article in filteredArticles"
        :key="article.id"
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
      >
        <img
          :src="article.image"
          :alt="article.title"
          class="w-full h-48 object-cover"
        />
        <div class="p-6 flex-grow flex flex-col">
          <div class="mb-2">
            <span
              class="inline-block bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full"
            >
              {{ article.category }}
            </span>
          </div>
          <h2 class="text-xl font-bold mb-2">{{ article.title }}</h2>
          <p class="text-gray-600 mb-4 flex-grow">{{ article.excerpt }}</p>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">{{ article.date }}</span>
            <button class="text-primary font-medium hover:underline">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="filteredArticles.length === 0" class="text-center py-12">
      <p class="text-xl text-gray-500">
        No articles found matching your criteria.
      </p>
      <button
        @click="resetFilters"
        class="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Reset Filters
      </button>
    </div>

    <!-- Pagination -->
    <div class="mt-12 flex justify-center">
      <div class="flex space-x-2">
        <button
          class="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
          :disabled="currentPage === 1"
          @click="currentPage--"
        >
          Previous
        </button>
        <button
          v-for="page in totalPages"
          :key="page"
          class="px-4 py-2 rounded-md border transition-colors"
          :class="
            page === currentPage
              ? 'bg-primary text-primary-foreground'
              : 'border-gray-300 hover:bg-gray-100'
          "
          @click="currentPage = page"
        >
          {{ page }}
        </button>
        <button
          class="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition-colors"
          :disabled="currentPage === totalPages"
          @click="currentPage++"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const searchQuery = ref("");
const selectedCategory = ref("");
const currentPage = ref(1);
const articlesPerPage = 4;

const articles = ref([
  {
    id: 1,
    title: "Getting Started with Vue 3",
    excerpt:
      "Learn the basics of Vue 3 and the Composition API in this comprehensive guide for beginners.",
    category: "Vue",
    date: "May 15, 2023",
    image: "https://picsum.photos/id/0/800/600",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover how to build beautiful interfaces quickly with Tailwind CSS utility classes.",
    category: "CSS",
    date: "June 2, 2023",
    image: "https://picsum.photos/id/1/800/600",
  },
  {
    id: 3,
    title: "Web Development Trends 2023",
    excerpt:
      "Stay ahead of the curve with these emerging web development trends for 2023.",
    category: "Web Development",
    date: "June 10, 2023",
    image: "https://picsum.photos/id/2/800/600",
  },
  {
    id: 4,
    title: "Building Reactive Forms in Vue",
    excerpt:
      "Learn how to create and validate forms in Vue with real-time feedback and validation.",
    category: "Vue",
    date: "July 5, 2023",
    image: "https://picsum.photos/id/3/800/600",
  },
  {
    id: 5,
    title: "JavaScript Array Methods You Should Know",
    excerpt:
      "Explore the most useful array methods in JavaScript that will make your code cleaner and more efficient.",
    category: "JavaScript",
    date: "July 22, 2023",
    image: "https://picsum.photos/id/4/800/600",
  },
  {
    id: 6,
    title: "CSS Grid vs Flexbox",
    excerpt:
      "Understanding when to use CSS Grid and when to use Flexbox for modern layouts.",
    category: "CSS",
    date: "August 3, 2023",
    image: "https://picsum.photos/id/5/800/600",
  },
  {
    id: 7,
    title: "Vue Router Navigation Guards",
    excerpt:
      "Learn how to protect routes and implement authentication with Vue Router navigation guards.",
    category: "Vue",
    date: "August 15, 2023",
    image: "https://picsum.photos/id/6/800/600",
  },
  {
    id: 8,
    title: "State Management with Pinia",
    excerpt:
      "Discover how Pinia simplifies state management in Vue applications compared to Vuex.",
    category: "Vue",
    date: "September 1, 2023",
    image: "https://picsum.photos/id/7/800/600",
  },
]);

// Set category from URL query parameter if present
const initialCategory = ref(route.query.category || "");

onMounted(() => {
  if (initialCategory.value) {
    selectedCategory.value = initialCategory.value;
  }
});

// Update category when URL changes
watch(
  () => route.query.category,
  (newCategory) => {
    if (newCategory) {
      selectedCategory.value = newCategory;
    } else {
      selectedCategory.value = "";
    }
  }
);

const filteredArticles = computed(() => {
  let filtered = [...articles.value];

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
    );
  }

  if (selectedCategory.value) {
    filtered = filtered.filter(
      (article) => article.category === selectedCategory.value
    );
  }

  // Pagination
  const startIndex = (currentPage.value - 1) * articlesPerPage;
  return filtered.slice(startIndex, startIndex + articlesPerPage);
});

const totalPages = computed(() => {
  let filtered = [...articles.value];

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query)
    );
  }

  if (selectedCategory.value) {
    filtered = filtered.filter(
      (article) => article.category === selectedCategory.value
    );
  }

  return Math.ceil(filtered.length / articlesPerPage);
});

const resetFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "";
  currentPage.value = 1;
};
</script>
