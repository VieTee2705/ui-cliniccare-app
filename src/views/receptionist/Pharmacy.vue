<template>
  <div class="p-8 max-w-7xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center">
            <i class="ph-fill ph-pills text-xl"></i>
          </div>
          Quầy thuốc
        </h1>
        <p class="text-sm text-slate-500 mt-2">Quản lý cấp phát thuốc theo đơn cho bệnh nhân</p>
      </div>
      <div class="flex gap-3">
        <button class="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2.5 rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2">
          <i class="ph ph-package"></i> Quản lý kho
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-teal-50 text-teal-500 flex items-center justify-center text-2xl">
          <i class="ph-fill ph-receipt"></i>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">Tổng đơn thuốc</p>
          <p class="text-2xl font-bold text-slate-800">125</p>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-2xl">
          <i class="ph-fill ph-hourglass"></i>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">Chờ cấp phát</p>
          <p class="text-2xl font-bold text-slate-800">12</p>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-2xl">
          <i class="ph-fill ph-check-circle"></i>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">Đã cấp phát</p>
          <p class="text-2xl font-bold text-slate-800">113</p>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-2xl">
          <i class="ph-fill ph-warning-circle"></i>
        </div>
        <div>
          <p class="text-sm font-medium text-slate-500">Thuốc sắp hết</p>
          <p class="text-2xl font-bold text-slate-800">5</p>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
      <!-- Search & Filter -->
      <div class="p-5 border-b border-slate-100 flex flex-wrap gap-4 items-center justify-between bg-slate-50/50">
        <div class="relative w-full md:w-96">
          <i class="ph ph-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
          <input type="text" placeholder="Tìm theo mã đơn thuốc, tên bệnh nhân..." class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all text-sm">
        </div>
        <div class="flex items-center gap-3">
          <div class="flex bg-slate-200/50 rounded-xl p-1">
            <button class="px-4 py-1.5 rounded-lg text-sm font-medium bg-white text-slate-800 shadow-sm">Tất cả</button>
            <button class="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">Chờ phát</button>
            <button class="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">Đã phát</button>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50/50 text-slate-500 text-sm font-medium">
              <th class="py-4 px-6 font-semibold">Mã ĐT / Bệnh nhân</th>
              <th class="py-4 px-6 font-semibold">Bác sĩ kê đơn</th>
              <th class="py-4 px-6 font-semibold">Danh sách thuốc</th>
              <th class="py-4 px-6 font-semibold">Trạng thái</th>
              <th class="py-4 px-6 font-semibold text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr v-for="rx in queue" :key="rx.id" class="border-t border-slate-100 hover:bg-slate-50 transition-colors group">
              <td class="py-4 px-6">
                <div class="font-semibold text-teal-600 mb-0.5">{{ rx.id }}</div>
                <div class="font-medium text-slate-800">{{ rx.patientName }} <span class="text-slate-500 font-normal">({{ rx.patientId }})</span></div>
              </td>
              <td class="py-4 px-6">
                <div class="text-slate-700 font-medium">{{ rx.doctorName }}</div>
                <div class="text-slate-500 text-xs">{{ new Date(rx.date).toLocaleDateString('vi-VN') }}</div>
              </td>
              <td class="py-4 px-6">
                <ul class="space-y-1">
                  <li v-for="(med, idx) in rx.medicines" :key="idx" class="text-slate-700 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                    <span>{{ med.name }}</span>
                    <span class="text-slate-400 text-xs">- {{ med.quantity }} {{ med.unit }}</span>
                  </li>
                </ul>
              </td>
              <td class="py-4 px-6">
                <span v-if="rx.status === 'dispensed'" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <i class="ph-fill ph-check-circle"></i> Đã cấp phát
                </span>
                <span v-else class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
                  <i class="ph-fill ph-hourglass"></i> Chờ cấp phát
                </span>
              </td>
              <td class="py-4 px-6 text-right">
                <button v-if="rx.status === 'waiting'" class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-colors text-sm inline-flex items-center gap-2">
                  <i class="ph ph-hand-coins"></i> Cấp thuốc
                </button>
                <div v-else class="flex justify-end gap-2">
                  <button class="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors" title="In nhãn">
                    <i class="ph ph-printer text-lg"></i>
                  </button>
                  <button class="p-2 text-slate-400 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors" title="Chi tiết">
                    <i class="ph ph-eye text-lg"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { pharmacyQueue } from '../../data.js';

const queue = ref(pharmacyQueue);
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.shadow-soft { box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05); }
</style>
