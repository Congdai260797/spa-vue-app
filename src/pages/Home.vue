<template>
  <div>
    <!-- Hero Section -->
    <section
      class="py-12 md:py-20 bg-primary text-primary-foreground rounded-lg mb-12"
    >
      <div class="text-center px-4">
        <h1 class="text-3xl md:text-5xl font-bold mb-4">Welcome to MyBlog</h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Discover interesting articles and stay updated with the latest trends.
        </p>
        <button
          class="px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
          @click="$router.push('/articles')"
        >
          Browse Articles
        </button>
      </div>
    </section>

    <!-- Featured Articles Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold mb-6">Featured Articles</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="article in featuredArticles"
          :key="article.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img
            :src="article.image"
            :alt="article.title"
            class="w-full h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="font-bold text-lg mb-2">{{ article.title }}</h3>
            <p class="text-gray-600 mb-4">{{ article.excerpt }}</p>
            <button
              class="text-primary font-medium hover:underline"
              @click="$router.push('/articles')"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="bg-secondary p-8 rounded-lg">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p class="mb-6">
          Get the latest articles and news delivered to your inbox.
        </p>
        <div class="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            class="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

const featuredArticles = ref([
  {
    id: 1,
    title: "Getting Started with Vue 3",
    excerpt:
      "Learn the basics of Vue 3 and the Composition API in this comprehensive guide.",
    image: "https://picsum.photos/id/0/800/600",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt:
      "Discover how to build beautiful interfaces quickly with Tailwind CSS utility classes.",
    image: "https://picsum.photos/id/1/800/600",
  },
  {
    id: 3,
    title: "Web Development Trends 2023",
    excerpt:
      "Stay ahead of the curve with these emerging web development trends for 2023.",
    image: "https://picsum.photos/id/2/800/600",
  },
]);
</script>
