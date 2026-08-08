<template>
  <div class="p-8 h-full flex flex-col max-w-7xl mx-auto">
    <!-- Header -->
    <div class="mb-6 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight">Lịch làm việc</h1>
        <p class="text-sm text-slate-500 mt-1">Lịch trình khám, hội chẩn và công tác của bạn</p>
      </div>
      <div class="flex items-center gap-4">
        <!-- Calendar navigation -->
        <div class="flex items-center bg-white rounded-xl shadow-sm border border-slate-200 p-1">
          <button class="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            <i class="ph-bold ph-caret-left"></i>
          </button>
          <span class="px-4 font-semibold text-slate-700 text-sm">Tháng {{ currentMonth }}</span>
          <button class="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
            <i class="ph-bold ph-caret-right"></i>
          </button>
        </div>
        <!-- View toggles -->
        <div class="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
          <button class="px-4 py-1.5 text-sm font-medium rounded-lg transition-colors bg-white shadow-sm text-slate-800">Tháng</button>
          <button class="px-4 py-1.5 text-sm font-medium rounded-lg transition-colors text-slate-500 hover:text-slate-800">Tuần</button>
          <button class="px-4 py-1.5 text-sm font-medium rounded-lg transition-colors text-slate-500 hover:text-slate-800">Ngày</button>
        </div>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-soft transition-colors flex items-center gap-2">
          <i class="ph-bold ph-plus"></i> Thêm sự kiện
        </button>
      </div>
    </div>

    <!-- Calendar Grid -->
    <div class="flex-1 bg-white rounded-3xl shadow-sm border border-slate-200 flex flex-col overflow-hidden">
      <!-- Days of week -->
      <div class="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
        <div v-for="day in ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']" :key="day" class="py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider border-r border-slate-200 last:border-r-0">
          {{ day }}
        </div>
      </div>
      
      <!-- Calendar Dates -->
      <div class="flex-1 grid grid-cols-7 grid-rows-5 bg-slate-200 gap-px">
        <div v-for="date in calendarDays" :key="date.day" 
          class="bg-white p-2 flex flex-col group hover:bg-slate-50 transition-colors relative"
          :class="{'opacity-50 bg-slate-50': !date.isCurrentMonth}">
          
          <div class="flex justify-between items-start mb-1">
            <span class="w-7 h-7 flex items-center justify-center rounded-full text-sm font-medium"
                  :class="date.isToday ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-700 group-hover:text-indigo-600'">
              {{ date.day }}
            </span>
          </div>

          <!-- Events -->
          <div class="flex-1 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
            <div v-for="event in getEventsForDate(date.fullDate)" :key="event.id"
                 class="px-2 py-1 text-xs rounded border truncate cursor-pointer font-medium shadow-sm transition-transform hover:-translate-y-px"
                 :class="event.color">
              {{ event.time !== 'All day' ? event.time + ' - ' : '' }}{{ event.title }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { schedules } from '../../data';

const currentMonth = ref('08/2026');
const today = new Date().toISOString().split('T')[0];

// Generate mock calendar grid (starting from Monday, 35 blocks)
const calendarDays = computed(() => {
  const days = [];
  // Fake starting offset for a random month
  for (let i = 27; i <= 31; i++) {
    days.push({ day: i, isCurrentMonth: false, isToday: false, fullDate: `2026-07-${i}` });
  }
  for (let i = 1; i <= 30; i++) {
    const fullDateStr = `2026-08-${String(i).padStart(2, '0')}`;
    days.push({ 
      day: i, 
      isCurrentMonth: true, 
      isToday: fullDateStr === today,
      fullDate: fullDateStr
    });
  }
  return days;
});

const getEventsForDate = (dateStr) => {
  return schedules.filter(s => s.date === dateStr);
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 3px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
</style>
