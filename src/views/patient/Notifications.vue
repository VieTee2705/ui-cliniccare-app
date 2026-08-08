<template>
  <div class="p-8 max-w-4xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <i class="ph-fill ph-bell text-xl"></i>
          </div>
          Thông báo của bạn
        </h1>
        <p class="text-sm text-slate-500 mt-2">Cập nhật tin tức, nhắc nhở lịch hẹn và kết quả</p>
      </div>
      <button class="text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
        Đánh dấu tất cả đã đọc
      </button>
    </div>

    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
      <!-- Tabs -->
      <div class="flex border-b border-slate-100 px-6 pt-4 bg-slate-50/50">
        <button class="px-6 py-3 border-b-2 border-indigo-600 text-indigo-700 font-semibold text-sm">Tất cả</button>
        <button class="px-6 py-3 border-b-2 border-transparent text-slate-500 font-medium text-sm hover:text-slate-700 hover:border-slate-300 transition-colors">Chưa đọc (1)</button>
      </div>

      <!-- List -->
      <div class="divide-y divide-slate-100">
        <div v-for="noti in patientNotifications" :key="noti.id" 
             class="p-6 hover:bg-slate-50 transition-colors cursor-pointer relative group flex gap-5 items-start"
             :class="{ 'bg-indigo-50/30': !noti.read }">
          
          <!-- Unread indicator -->
          <div v-if="!noti.read" class="absolute top-1/2 -translate-y-1/2 left-0 w-1 h-12 bg-indigo-500 rounded-r-lg"></div>

          <!-- Icon -->
          <div class="w-12 h-12 rounded-full flex items-center justify-center shrink-0 border shadow-sm"
               :class="getIconConfig(noti.title).class">
            <i class="text-xl" :class="getIconConfig(noti.title).icon"></i>
          </div>

          <!-- Content -->
          <div class="flex-1">
            <div class="flex justify-between items-start mb-1">
              <h4 class="font-bold text-slate-800" :class="{ 'text-indigo-900': !noti.read }">{{ noti.title }}</h4>
              <span class="text-xs font-medium text-slate-400 whitespace-nowrap ml-4">{{ formatTime(noti.date, noti.time) }}</span>
            </div>
            <p class="text-sm text-slate-600 leading-relaxed">{{ noti.content }}</p>
          </div>

          <!-- Action -->
          <div class="opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700">
              <i class="ph-bold ph-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { patientNotifications } from '../../data';

const getIconConfig = (title) => {
  if (title.toLowerCase().includes('lịch hẹn')) {
    return { class: 'bg-blue-50 border-blue-100 text-blue-600', icon: 'ph-fill ph-calendar-check' };
  }
  if (title.toLowerCase().includes('xét nghiệm') || title.toLowerCase().includes('kết quả')) {
    return { class: 'bg-emerald-50 border-emerald-100 text-emerald-600', icon: 'ph-fill ph-flask' };
  }
  if (title.toLowerCase().includes('thanh toán')) {
    return { class: 'bg-amber-50 border-amber-100 text-amber-600', icon: 'ph-fill ph-receipt' };
  }
  return { class: 'bg-indigo-50 border-indigo-100 text-indigo-600', icon: 'ph-fill ph-bell-ringing' };
};

const formatTime = (dateStr, timeStr) => {
  const date = new Date(dateStr);
  const today = new Date();
  
  const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  
  if (isToday) return `Hôm nay, ${timeStr}`;
  
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear()) {
    return `Hôm qua, ${timeStr}`;
  }
  
  return `${date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit' })}, ${timeStr}`;
};
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
