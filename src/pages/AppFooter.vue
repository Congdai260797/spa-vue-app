<script setup>
// Không cần script logic cho component này
</script>

<template>
  <footer class="bg-cream pt-2 pb-8">
    <div class="container mx-auto px-6 text-center">
      <div
        class="grid grid-cols-1 md:grid-cols-3 items-end gap-8 pt-14 border-t border-gray-400"
      >
        <!-- Copyright -->
        <div class="text-sm text-gray-500 text-center md:text-left">
          © 2025 Petstie Care. All rights reserved.
        </div>
        <!-- Logo -->
        <div class="flex justify-center">
          <a href="#" class="text-4xl font-bold text-brand-blue">
            <img
              src="./../assets/image/logo_footer.png"
              alt="Petstie Care Logo"
            />
          </a>
        </div>
        <!-- Links & Socials -->
        <div class="flex flex-col items-center md:items-end gap-4">
          <div class="flex items-center space-x-6 text-sm text-gray-600">
            <a href="#" class="hover:text-brand-orange">Terms of Service</a>
            <a href="#" class="hover:text-brand-orange">Privacy Policy</a>
          </div>
          <div class="flex items-center space-x-4 mt-2">
            <!-- Social Icons -->
            <a href="#" class="text-gray-500 hover:text-brand-blue"
              ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                ></path></svg
            ></a>
            <a href="#" class="text-gray-500 hover:text-brand-blue"
              ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                ></path></svg
            ></a>
            <a href="#" class="text-gray-500 hover:text-brand-blue"
              ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2C8.7 2 8.28 2.02 7.15 2.07c-1.14.05-1.92.23-2.58.48a4.9 4.9 0 0 0-1.77 1.15 4.9 4.9 0 0 0-1.15 1.77c-.25.66-.43 1.44-.48 2.58C2.02 8.28 2 8.7 2 12s.02 3.72.07 4.85c.05 1.14.23 1.92.48 2.58a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.66.25 1.44.43 2.58.48C8.28 21.98 8.7 22 12 22s3.72-.02 4.85-.07c1.14-.05 1.92-.23 2.58-.48a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.66.43-1.44.48-2.58C21.98 15.72 22 15.3 22 12s-.02-3.72-.07-4.85c-.05-1.14-.23-1.92-.48-2.58a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.66-.25-1.44-.43-2.58-.48C15.72 2.02 15.3 2 12 2zm0 1.8c3.2 0 3.58.01 4.85.07 1.08.05 1.63.22 1.96.36.49.2.82.47 1.15.8.33.33.6.66.8 1.15.14.33.31.88.36 1.96.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.08-.22 1.63-.36 1.96-.2.49-.47.82-.8 1.15-.33.33-.66.6-1.15.8-.33.14-.88.31-1.96.36-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.08-.05-1.63-.22-1.96-.36-.49-.2-.82-.47-1.15-.8-.33-.33-.6-.66-.8-1.15-.14-.33-.31-.88-.36-1.96C4.01 15.58 4 15.2 4 12s.01-3.58.07-4.85c.05-1.08.22-1.63.36-1.96.2-.49.47.82.8-1.15.33.33.66.6 1.15-.8.33-.14.88.31 1.96-.36C8.42 3.81 8.8 3.8 12 3.8zm0 4.35a3.85 3.85 0 1 0 0 7.7 3.85 3.85 0 0 0 0-7.7zm0 6.15a2.3 2.3 0 1 1 0-4.6 2.3 2.3 0 0 1 0 4.6zm6.3-7.6a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8z"
                ></path></svg
            ></a>
            <a href="#" class="text-gray-500 hover:text-brand-blue"
              ><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M21.582 6.186A2.485 2.485 0 0 0 19.82 5.002C18.238 4.5 12 4.5 12 4.5s-6.238 0-7.82.502A2.485 2.485 0 0 0 2.418 6.186 25.875 25.875 0 0 0 2 12c0 2.63.17 5.16.418 5.814a2.485 2.485 0 0 0 1.762 1.184C5.762 19.5 12 19.5 12 19.5s6.238 0 7.82-.502a2.485 2.485 0 0 0 1.762-1.184C21.83 17.16 22 14.63 22 12c0-2.63-.17-5.16-.418-5.814zM9.75 15.5V8.5l6.5 3.5-6.5 3.5z"
                ></path></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
