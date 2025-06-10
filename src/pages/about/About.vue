<template>
  <div>
    <h1 class="text-3xl font-bold mb-8">About Us</h1>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 class="text-2xl font-bold mb-4">Our Story</h2>
      <p class="text-gray-700 mb-4">
        Welcome to MyBlog, a platform dedicated to sharing knowledge and
        insights about web development, programming, and technology. Founded in
        2023, our mission is to provide high-quality content that helps
        developers of all skill levels improve their craft.
      </p>
      <p class="text-gray-700 mb-4">
        Our team of experienced writers and developers are passionate about
        technology and committed to creating articles that are both informative
        and accessible.
      </p>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold mb-4">Our Team</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div class="text-center">
          <div
            class="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden"
          >
            <img
              src="https://picsum.photos/id/1001/200/200"
              alt="Team Member"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="font-bold text-lg">Jane Doe</h3>
          <p class="text-gray-600">Founder & Editor</p>
        </div>
        <div class="text-center">
          <div
            class="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden"
          >
            <img
              src="https://picsum.photos/id/1002/200/200"
              alt="Team Member"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="font-bold text-lg">John Smith</h3>
          <p class="text-gray-600">Lead Developer</p>
        </div>
        <div class="text-center">
          <div
            class="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4 overflow-hidden"
          >
            <img
              src="https://picsum.photos/id/1003/200/200"
              alt="Team Member"
              class="w-full h-full object-cover"
            />
          </div>
          <h3 class="font-bold text-lg">Emily Chen</h3>
          <p class="text-gray-600">Content Strategist</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed for this component
</script>
