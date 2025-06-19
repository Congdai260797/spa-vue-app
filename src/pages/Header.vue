<template>
  <header class="bg-cream">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="text-2xl font-bold text-brand-blue">
        <img class="w-[82px] h-[40px]" src="./../assets/image/logo.png" alt="PetstieCare Logo" />
      </a>
      <!-- Navigation -->
      <nav class="hidden md:flex items-center space-x-8 font-bold">
        <a href="/home" class="hover:text-brand-orange transition-colors">Giới thiệu</a>
        <a href="/clinic" class="hover:text-brand-orange transition-colors">Danh sách phòng khám</a>
        <a href="/lookup" class="hover:text-brand-orange transition-colors">Tra cứu lịch đặt</a>
        <a href="/feedback" class="hover:text-brand-orange transition-colors">Phản hồi</a>
      </nav>
      <!-- Action Button -->
      <a
        href="/booking"
        class="bg-brand-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
      >
        Đặt dịch vụ
      </a>
    </div>
  </header>
</template>

<script setup></script>

<style>
  .bg-brand-blue {
    background: #2b3a63 !important;
  }
</style>
