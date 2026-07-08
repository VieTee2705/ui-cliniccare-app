<template>
  <div class="min-h-screen bg-slate-50 font-sans text-gray-800 flex flex-col">
    <!-- Top Navigation -->
    <header class="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/patient" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-400 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
            <i class="ph-fill ph-heartbeat text-2xl"></i>
          </div>
          <span class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-900 to-blue-700 tracking-tight">ClinicCare</span>
        </router-link>

        <!-- Navigation Links -->
        <nav class="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <router-link to="/patient" class="hover:text-indigo-600 transition-colors">Trang chủ</router-link>
          <router-link to="/patient/services" class="hover:text-indigo-600 transition-colors">Chuyên khoa & Bác sĩ</router-link>
          <a href="#about" class="hover:text-indigo-600 transition-colors">Về chúng tôi</a>
        </nav>

        <!-- Action Buttons -->
        <div class="flex items-center gap-4">
          <router-link to="/patient/login" class="hidden sm:block text-slate-600 font-medium hover:text-indigo-600 transition-colors">
            Đăng nhập
          </router-link>
          <router-link to="/patient/booking" class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-soft hover:shadow-hover hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <i class="ph-bold ph-calendar-plus text-lg"></i>
            Đặt lịch khám
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col relative">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-indigo-950 text-indigo-100 py-12 border-t border-indigo-900">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white">
              <i class="ph-fill ph-heartbeat text-xl"></i>
            </div>
            <span class="text-xl font-bold text-white tracking-wide">ClinicCare Hub</span>
          </div>
          <p class="text-indigo-200/80 mb-6 max-w-sm leading-relaxed">
            Hệ thống quản lý phòng khám hiện đại, mang đến trải nghiệm chăm sóc sức khỏe thông minh, tận tâm và chuyên nghiệp nhất cho bạn và gia đình.
          </p>
          <div class="flex gap-4">
            <a href="#" class="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><i class="ph-fill ph-facebook-logo text-xl"></i></a>
            <a href="#" class="w-10 h-10 rounded-full bg-indigo-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><i class="ph-fill ph-twitter-logo text-xl"></i></a>
          </div>
        </div>
        
        <div>
          <h4 class="text-white font-semibold mb-6">Liên hệ</h4>
          <ul class="space-y-4 text-indigo-200/80">
            <li class="flex items-start gap-3">
              <i class="ph-fill ph-map-pin text-xl text-indigo-400 shrink-0"></i>
              <span>123 Đường Sức Khoẻ, Quận Bình Thạnh, TP.HCM</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="ph-fill ph-phone text-xl text-indigo-400 shrink-0"></i>
              <span>1900 1234</span>
            </li>
            <li class="flex items-center gap-3">
              <i class="ph-fill ph-envelope-simple text-xl text-indigo-400 shrink-0"></i>
              <span>contact@cliniccare.vn</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-white font-semibold mb-6">Giờ làm việc</h4>
          <ul class="space-y-4 text-indigo-200/80">
            <li class="flex justify-between border-b border-indigo-900 pb-2">
              <span>Thứ 2 - Thứ 6:</span>
              <span class="text-white">07:30 - 20:00</span>
            </li>
            <li class="flex justify-between border-b border-indigo-900 pb-2">
              <span>Thứ 7:</span>
              <span class="text-white">08:00 - 17:00</span>
            </li>
            <li class="flex justify-between pb-2">
              <span>Chủ nhật:</span>
              <span class="text-red-400 font-medium">Nghỉ</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>