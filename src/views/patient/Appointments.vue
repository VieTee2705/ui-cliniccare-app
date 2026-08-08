<template>
  <div class="p-8 max-w-6xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <i class="ph-fill ph-calendar-blank text-xl"></i>
          </div>
          Lịch hẹn của tôi
        </h1>
        <p class="text-sm text-slate-500 mt-2">Quản lý và theo dõi các lịch hẹn khám bệnh</p>
      </div>
      <router-link to="/patient/booking" class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-soft transition-colors flex items-center gap-2">
        <i class="ph ph-plus"></i> Đặt lịch mới
      </router-link>
    </div>

    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
      <!-- Tabs -->
      <div class="flex border-b border-slate-100 px-6 pt-4 bg-slate-50/50">
        <button class="px-6 py-3 border-b-2 border-indigo-600 text-indigo-700 font-semibold text-sm">Sắp tới (2)</button>
        <button class="px-6 py-3 border-b-2 border-transparent text-slate-500 font-medium text-sm hover:text-slate-700 hover:border-slate-300 transition-colors">Đã qua (2)</button>
      </div>

      <!-- List -->
      <div class="p-6">
        <div v-for="apt in patientAppointments" :key="apt.id" class="mb-4 last:mb-0">
          <div class="border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow bg-white flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden group">
            
            <!-- Left status bar -->
            <div class="absolute left-0 top-0 bottom-0 w-1.5"
                 :class="{
                   'bg-blue-500': apt.status === 'upcoming',
                   'bg-amber-500': apt.status === 'pending',
                   'bg-emerald-500': apt.status === 'completed',
                   'bg-slate-300': apt.status === 'cancelled'
                 }">
            </div>

            <!-- Date/Time -->
            <div class="text-center min-w-[120px] pl-4">
              <p class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{{ getDayName(apt.date) }}</p>
              <h3 class="text-2xl font-bold text-slate-800">{{ formatDate(apt.date) }}</h3>
              <p class="text-indigo-600 font-semibold bg-indigo-50 inline-block px-3 py-1 rounded-lg mt-2 text-sm">{{ apt.time }}</p>
            </div>

            <!-- Divider -->
            <div class="hidden md:block w-px h-16 bg-slate-100"></div>

            <!-- Details -->
            <div class="flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="px-2.5 py-0.5 rounded-full text-xs font-medium border"
                      :class="{
                        'bg-blue-50 text-blue-700 border-blue-200': apt.status === 'upcoming',
                        'bg-amber-50 text-amber-700 border-amber-200': apt.status === 'pending',
                        'bg-emerald-50 text-emerald-700 border-emerald-200': apt.status === 'completed',
                        'bg-slate-50 text-slate-600 border-slate-200': apt.status === 'cancelled'
                      }">
                  {{ getStatusText(apt.status) }}
                </span>
                <span class="text-xs font-medium text-slate-500">• {{ apt.type }}</span>
              </div>
              <h4 class="text-lg font-bold text-slate-800 mb-1">{{ apt.department }}</h4>
              <p class="text-sm text-slate-600 flex items-center gap-1.5">
                <i class="ph-fill ph-user-md text-slate-400"></i> {{ apt.doctor }}
              </p>
            </div>

            <!-- Actions -->
            <div class="flex gap-3 w-full md:w-auto mt-4 md:mt-0 justify-end">
              <button v-if="apt.status === 'upcoming' || apt.status === 'pending'" class="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors bg-white">Hủy lịch</button>
              <button class="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-xl text-sm font-semibold hover:bg-indigo-100 transition-colors">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { patientAppointments } from '../../data';

const getDayName = (dateStr) => {
  const date = new Date(dateStr);
  const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  return days[date.getDay()];
};

const formatDate = (dateStr) => {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}`;
};

const getStatusText = (status) => {
  const map = {
    'upcoming': 'Sắp tới',
    'pending': 'Chờ xác nhận',
    'completed': 'Đã khám',
    'cancelled': 'Đã huỷ'
  };
  return map[status] || status;
};
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
