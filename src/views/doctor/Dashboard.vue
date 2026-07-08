<template>
  <div class="p-8">
    <!-- Welcome Section -->
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-2xl font-bold text-indigo-900 tracking-tight">Chào bác sĩ, {{ users.doctor.name }}! 👋</h1>
        <p class="text-sm text-slate-500 mt-1 flex items-center gap-2">
          <i class="ph ph-calendar-blank"></i>
          <span>{{ currentDate }}</span>
        </p>
      </div>
      <router-link to="/doctor/workspace/P01" class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-soft transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
        <i class="ph ph-play-circle text-xl"></i>
        Bắt đầu ca khám
      </router-link>
    </div>

    <!-- Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100">
        <div class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
          <i class="ph-fill ph-users text-3xl"></i>
        </div>
        <div>
          <p class="text-sm text-slate-400 font-medium">Tổng ca trong ngày</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-1">{{ stats.doctor.totalPatients }}</h3>
        </div>
      </div>

      <div class="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100">
        <div class="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
          <i class="ph-fill ph-hourglass-high text-3xl"></i>
        </div>
        <div>
          <p class="text-sm text-slate-400 font-medium">Đang chờ khám</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-1">{{ stats.doctor.waiting }}</h3>
        </div>
      </div>

      <div class="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100">
        <div class="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500">
          <i class="ph-fill ph-check-circle text-3xl"></i>
        </div>
        <div>
          <p class="text-sm text-slate-400 font-medium">Đã khám xong</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-1">{{ stats.doctor.completed }}</h3>
        </div>
      </div>
    </div>

    <!-- Queue & Announcements -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
      
      <!-- Hàng đợi của bác sĩ -->
      <div class="lg:col-span-2 bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
        <div class="p-6 border-b border-slate-100 flex justify-between items-center">
          <h2 class="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <i class="ph-fill ph-list-numbers text-indigo-500"></i>
            Hàng đợi của bạn (Hôm nay)
          </h2>
          <router-link to="/doctor/queue" class="text-sm text-blue-600 font-medium hover:underline">Xem tất cả</router-link>
        </div>
        
        <div class="p-6">
          <div class="space-y-4">
            <div v-for="q in myQueue" :key="q.id" class="flex items-center justify-between p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-sm transition-all group" :class="q.status === 'waiting' ? 'bg-orange-50/30' : 'bg-slate-50'">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center">
                  {{ q.id }}
                </div>
                <div>
                  <h4 class="font-semibold text-slate-800">{{ q.patientName }}</h4>
                  <p class="text-xs text-slate-500 mt-0.5">{{ q.service }}</p>
                </div>
              </div>
              <div class="flex items-center gap-4">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                      :class="q.status === 'waiting' ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'">
                  <span v-if="q.status === 'waiting'" class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  {{ q.statusText }}
                </span>
                <router-link v-if="q.status === 'waiting'" :to="'/doctor/workspace/' + q.patientId" class="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-xl hover:bg-indigo-700 transition-colors">
                  Khám ngay
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Thông báo nội bộ -->
      <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
        <div class="p-6 border-b border-slate-100">
          <h2 class="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <i class="ph-fill ph-megaphone text-indigo-500"></i>
            Thông báo nội bộ
          </h2>
        </div>
        <div class="p-6 space-y-5">
          <div class="border-l-4 border-red-400 pl-4">
            <p class="text-xs text-slate-400 mb-1">Hôm nay, 08:30</p>
            <h4 class="text-sm font-semibold text-slate-800">Họp giao ban toàn viện</h4>
            <p class="text-xs text-slate-600 mt-1">Vui lòng tập trung tại Phòng họp A lúc 11:30 để giao ban tháng.</p>
          </div>
          <div class="border-l-4 border-blue-400 pl-4">
            <p class="text-xs text-slate-400 mb-1">Hôm qua</p>
            <h4 class="text-sm font-semibold text-slate-800">Cập nhật danh mục thuốc</h4>
            <p class="text-xs text-slate-600 mt-1">Khoa dược vừa bổ sung 5 loại kháng sinh mới vào hệ thống kê đơn.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { users, stats, queue } from '../../data';

const currentDate = computed(() => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dateString = new Date().toLocaleDateString('vi-VN', options);
  return dateString.charAt(0).toUpperCase() + dateString.slice(1);
});

// Chỉ lấy bệnh nhân của bác sĩ đang đăng nhập
const myQueue = computed(() => {
  return queue.filter(q => q.doctorId === users.doctor.id);
});
</script>