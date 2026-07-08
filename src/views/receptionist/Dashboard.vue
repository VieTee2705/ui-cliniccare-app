<template>
  <div class="p-8">
    <!-- Welcome Section & CTA -->
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-2xl font-bold text-indigo-900 tracking-tight">Chào buổi sáng, {{ users.receptionist.name }}! 👋</h1>
        <p class="text-sm text-slate-500 mt-1 flex items-center gap-2">
          <i class="ph ph-calendar-blank"></i>
          <span>{{ currentDate }}</span>
        </p>
      </div>
      <button class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-[0_8px_20px_rgb(37,99,235,0.25)] hover:shadow-[0_12px_25px_rgb(37,99,235,0.35)] transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
        <i class="ph ph-plus-circle text-xl"></i>
        Tạo Lịch Hẹn Mới
      </button>
    </div>

    <!-- 4 Overview Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100 hover:shadow-hover transition-shadow duration-300 group">
        <div class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
          <i class="ph-fill ph-calendar-check text-3xl"></i>
        </div>
        <div>
          <p class="text-sm text-slate-400 font-medium">Lịch hẹn hôm nay</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-1">{{ stats.receptionist.todayAppointments }}</h3>
        </div>
      </div>

      <div class="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100 hover:shadow-hover transition-shadow duration-300 group">
        <div class="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500 group-hover:scale-110 transition-transform duration-300">
          <i class="ph-fill ph-hourglass-high text-3xl"></i>
        </div>
        <div>
          <p class="text-sm text-slate-400 font-medium">Bệnh nhân chờ khám</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-1">{{ stats.receptionist.waitingPatients }}</h3>
        </div>
      </div>

      <div class="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100 hover:shadow-hover transition-shadow duration-300 group">
        <div class="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform duration-300">
          <i class="ph-fill ph-check-circle text-3xl"></i>
        </div>
        <div>
          <p class="text-sm text-slate-400 font-medium">Đã khám xong</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-1">{{ stats.receptionist.completedPatients }}</h3>
        </div>
      </div>

      <div class="bg-white p-6 rounded-3xl shadow-soft flex items-center gap-5 border border-slate-100 hover:shadow-hover transition-shadow duration-300 group">
        <div class="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300">
          <i class="ph-fill ph-wallet text-3xl"></i>
        </div>
        <div>
          <p class="text-sm text-slate-400 font-medium">Doanh thu trong ngày</p>
          <h3 class="text-2xl font-bold text-slate-800 mt-1">{{ stats.receptionist.dailyRevenue }}</h3>
        </div>
      </div>
    </div>

    <!-- Two Columns Section (7:5 Ratio) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8">
      
      <!-- Left Column (Hàng đợi tiếp nhận) -->
      <div class="lg:col-span-7 bg-white rounded-3xl shadow-soft border border-slate-100 flex flex-col overflow-hidden">
        <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <h2 class="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <i class="ph-fill ph-users-three text-indigo-500"></i>
            Hàng đợi tiếp nhận
          </h2>
          <router-link to="/receptionist/checkin" class="text-sm text-blue-600 font-medium hover:text-blue-700 hover:underline">Xem tất cả</router-link>
        </div>
        
        <div class="flex-1 overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-50/50 text-xs uppercase tracking-wider text-slate-400 font-medium">
                <th class="px-6 py-4">Mã BN</th>
                <th class="px-6 py-4">Tên Bệnh Nhân</th>
                <th class="px-6 py-4">Dịch vụ</th>
                <th class="px-6 py-4">Bác sĩ</th>
                <th class="px-6 py-4">Trạng thái</th>
              </tr>
            </thead>
            <tbody class="text-sm divide-y divide-slate-100">
              <tr v-for="q in queue" :key="q.id" class="hover:bg-slate-50/80 transition-colors">
                <td class="px-6 py-4 font-medium text-slate-500">{{ patients.find(p => p.id === q.patientId)?.code || '#BN-0000' }}</td>
                <td class="px-6 py-4 font-medium text-slate-800">{{ q.patientName }}</td>
                <td class="px-6 py-4 text-slate-500">{{ q.service }}</td>
                <td class="px-6 py-4 text-slate-500">{{ q.doctorName }}</td>
                <td class="px-6 py-4">
                  <span 
                    class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                    :class="[
                      q.color === 'orange' ? 'bg-orange-100 text-orange-700' : 
                      q.color === 'purple' ? 'bg-purple-100 text-purple-700' : 
                      'bg-emerald-100 text-emerald-700'
                    ]"
                  >
                    <span v-if="q.status !== 'completed'" class="w-1.5 h-1.5 rounded-full" :class="[q.color === 'orange' ? 'bg-orange-500' : 'bg-purple-500 animate-pulse']"></span>
                    <i v-else class="ph-bold ph-check"></i>
                    {{ q.statusText }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Right Column (Bác sĩ đang trực) -->
      <div class="lg:col-span-5 bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden flex flex-col">
        <div class="p-6 border-b border-slate-100 flex justify-between items-center bg-white">
          <h2 class="text-lg font-semibold text-gray-700 flex items-center gap-2">
            <i class="ph-fill ph-stethoscope text-indigo-500"></i>
            Bác sĩ đang trực
          </h2>
        </div>
        
        <div class="p-6 flex flex-col gap-5 flex-1 overflow-y-auto">
          <div v-for="doc in doctors" :key="doc.id" class="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/50 transition-colors group">
            <div class="flex items-center gap-4">
              <div class="relative">
                <img :src="doc.avatar" :alt="doc.name" class="w-12 h-12 rounded-full border-2 border-white shadow-sm">
                <span class="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 class="font-semibold text-slate-800">{{ doc.name }}</h4>
                <p class="text-xs text-slate-500 mt-0.5">{{ doc.department }}</p>
              </div>
            </div>
            <button class="px-4 py-2 bg-white border border-slate-200 text-blue-600 text-sm font-medium rounded-xl shadow-sm hover:border-blue-300 hover:bg-blue-50 transition-colors">
              Xem lịch
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { users, stats, queue, doctors, patients } from '../../data';

const currentDate = computed(() => {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let dateString = new Date().toLocaleDateString('vi-VN', options);
  return dateString.charAt(0).toUpperCase() + dateString.slice(1);
});
</script>