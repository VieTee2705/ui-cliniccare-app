<template>
  <div class="flex h-screen overflow-hidden bg-slate-50 text-gray-800 antialiased font-sans">
    
    <!-- Sidebar -->
    <aside class="w-64 bg-gradient-to-b from-indigo-900 to-indigo-800 flex flex-col transition-all duration-300 z-20 shadow-xl">
      <!-- Logo -->
      <div class="h-20 flex items-center px-6 border-b border-white/10">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-400 flex items-center justify-center text-white shadow-lg">
            <i class="ph-fill ph-heartbeat text-2xl"></i>
          </div>
          <span class="text-xl font-bold text-white tracking-wide">ClinicCare</span>
        </div>
      </div>

      <!-- Menu -->
      <nav class="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <router-link 
          v-for="item in menu" 
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-3 rounded-xl transition-colors border-l-4"
          :class="[
            route.path === item.path 
              ? 'bg-white/10 border-blue-400 text-white font-medium' 
              : 'text-indigo-100 hover:bg-white/5 hover:text-white border-transparent'
          ]"
        >
          <i :class="[item.icon, 'text-xl', route.path === item.path ? 'text-blue-200' : '']"></i>
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Sidebar Footer -->
      <div class="p-4 border-t border-white/10">
        <button class="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-indigo-200 hover:bg-white/5 hover:text-white transition-colors">
          <i class="ph ph-sign-out text-xl"></i>
          <span>Đăng xuất</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col relative overflow-hidden h-full">
      
      <!-- Header -->
      <header class="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-8 z-10 shrink-0">
        <!-- Search -->
        <div class="relative w-96 group">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i class="ph ph-magnifying-glass text-slate-400 group-focus-within:text-blue-500 transition-colors"></i>
          </div>
          <input type="text" placeholder="Tìm kiếm Bệnh nhân / Hồ sơ..." 
            class="w-full bg-slate-100 text-sm text-slate-700 rounded-full pl-11 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all">
        </div>

        <!-- Right Actions -->
        <div class="flex items-center gap-6">
          <!-- Clock -->
          <div class="text-sm font-medium text-slate-500 bg-slate-100 px-4 py-2 rounded-full flex items-center gap-2">
            <i class="ph ph-clock text-indigo-500"></i>
            <span>{{ time }}</span>
          </div>

          <!-- Notifications -->
          <button class="relative p-2 text-slate-400 hover:text-indigo-600 transition-colors rounded-full hover:bg-indigo-50">
            <i class="ph ph-bell text-2xl"></i>
            <span class="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          <!-- User Profile -->
          <div class="flex items-center gap-3 pl-4 border-l border-slate-200 cursor-pointer group">
            <div class="text-right">
              <p class="text-sm font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">{{ users.receptionist.name }}</p>
              <p class="text-xs text-slate-400">{{ users.receptionist.role }}</p>
            </div>
            <img :src="users.receptionist.avatar" alt="Avatar" class="w-10 h-10 rounded-full shadow-sm">
          </div>
        </div>
      </header>

      <!-- Dashboard View Content -->
      <div class="flex-1 overflow-y-auto">
        <router-view />
      </div>
      
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { users } from '../data';

const route = useRoute();

const menu = [
  { name: 'Dashboard', path: '/receptionist/dashboard', icon: 'ph ph-squares-four' },
  { name: 'Lịch Hẹn', path: '/receptionist/appointments', icon: 'ph ph-calendar-blank' },
  { name: 'Tiếp Nhận & Check-in', path: '/receptionist/checkin', icon: 'ph ph-users' },
  { name: 'Viện Phí', path: '/receptionist/billing', icon: 'ph ph-receipt' },
  { name: 'Quầy Thuốc', path: '/receptionist/pharmacy', icon: 'ph ph-pill' },
  { name: 'Báo Cáo', path: '/receptionist/reports', icon: 'ph ph-chart-line-up' }
];

const time = ref('');
let timer;

const updateClock = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  time.value = `${hours}:${minutes}:${seconds}`;
};

onMounted(() => {
  updateClock();
  timer = setInterval(updateClock, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>