<template>
  <div class="p-8 max-w-7xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <i class="ph-fill ph-calendar-plus text-xl"></i>
          </div>
          Quản lý Lịch hẹn
        </h1>
        <p class="text-sm text-slate-500 mt-2">Theo dõi và quản lý lịch hẹn khám của bệnh nhân</p>
      </div>
      <div class="flex gap-3">
        <button class="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2.5 rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2">
          <i class="ph ph-funnel"></i> Bộ lọc
        </button>
        <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-soft transition-colors flex items-center gap-2">
          <i class="ph ph-plus"></i> Lịch hẹn mới
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center text-2xl">
          <i class="ph-fill ph-calendar"></i>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">Tổng lịch hẹn</p>
          <p class="text-2xl font-bold text-slate-800">145</p>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-2xl">
          <i class="ph-fill ph-check-circle"></i>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">Đã xác nhận</p>
          <p class="text-2xl font-bold text-slate-800">120</p>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-2xl">
          <i class="ph-fill ph-clock-counter-clockwise"></i>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">Chờ xác nhận</p>
          <p class="text-2xl font-bold text-slate-800">18</p>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-2xl">
          <i class="ph-fill ph-x-circle"></i>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">Đã hủy</p>
          <p class="text-2xl font-bold text-slate-800">7</p>
        </div>
      </div>
    </div>

    <!-- Search & List -->
    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
      <div class="p-5 border-b border-slate-100 flex items-center gap-4 bg-slate-50/50">
        <div class="relative flex-1 max-w-md">
          <i class="ph ph-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
          <input type="text" placeholder="Tìm kiếm theo tên bệnh nhân, số điện thoại..." class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm">
        </div>
        <div class="flex items-center gap-2 text-sm text-slate-500 font-medium">
          <span class="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-600 cursor-pointer">Hôm nay</span>
          <span class="px-3 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors">Ngày mai</span>
          <span class="px-3 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer transition-colors">Tuần này</span>
        </div>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50/50 text-slate-500 text-sm font-medium">
              <th class="py-4 px-6 font-semibold">Bệnh nhân</th>
              <th class="py-4 px-6 font-semibold">Bác sĩ phụ trách</th>
              <th class="py-4 px-6 font-semibold">Thời gian</th>
              <th class="py-4 px-6 font-semibold">Nội dung khám</th>
              <th class="py-4 px-6 font-semibold">Trạng thái</th>
              <th class="py-4 px-6 font-semibold text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr v-for="apt in appointments" :key="apt.id" class="border-t border-slate-100 hover:bg-slate-50 transition-colors group">
              <td class="py-4 px-6">
                <div class="font-semibold text-slate-800">{{ apt.patientName }}</div>
                <div class="text-slate-500 text-xs mt-0.5">{{ apt.phone }}</div>
              </td>
              <td class="py-4 px-6">
                <div class="font-medium text-slate-700">{{ apt.doctorName }}</div>
                <div class="text-slate-500 text-xs mt-0.5">{{ apt.department }}</div>
              </td>
              <td class="py-4 px-6">
                <div class="font-medium text-slate-700">{{ apt.time }}</div>
                <div class="text-slate-500 text-xs mt-0.5">{{ apt.date }}</div>
              </td>
              <td class="py-4 px-6 text-slate-600">{{ apt.note }}</td>
              <td class="py-4 px-6">
                <span v-if="apt.status === 'confirmed'" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Đã xác nhận
                </span>
                <span v-else-if="apt.status === 'pending'" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Chờ xác nhận
                </span>
                <span v-else class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-50 text-red-600 border border-red-200">
                  <span class="w-1.5 h-1.5 rounded-full bg-red-500"></span> Đã hủy
                </span>
              </td>
              <td class="py-4 px-6 text-right">
                <div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button v-if="apt.status === 'pending'" class="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="Xác nhận">
                    <i class="ph ph-check-circle text-lg"></i>
                  </button>
                  <button v-if="apt.status === 'pending'" class="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Hủy">
                    <i class="ph ph-x-circle text-lg"></i>
                  </button>
                  <button class="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Chỉnh sửa">
                    <i class="ph ph-pencil-simple text-lg"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 bg-slate-50/30">
        <span>Hiển thị {{ appointments.length }} lịch hẹn</span>
        <div class="flex items-center gap-1">
          <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 disabled:opacity-50 transition-colors" disabled>
            <i class="ph ph-caret-left"></i>
          </button>
          <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-medium shadow-sm">1</button>
          <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 transition-colors">2</button>
          <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 transition-colors">
            <i class="ph ph-caret-right"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { allAppointments } from '../../data.js';

const appointments = ref(allAppointments);
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.shadow-soft { box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05); }
</style>
