<template>
  <div class="p-8 max-w-7xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <i class="ph-fill ph-cash-register text-xl"></i>
          </div>
          Quản lý Viện phí
        </h1>
        <p class="text-sm text-slate-500 mt-2">Thanh toán hóa đơn khám chữa bệnh, dịch vụ cận lâm sàng</p>
      </div>
      <div class="flex gap-3">
        <button class="bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 px-4 py-2.5 rounded-xl font-medium shadow-sm transition-colors flex items-center gap-2">
          <i class="ph ph-export"></i> Xuất Excel
        </button>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-soft transition-colors flex items-center gap-2">
          <i class="ph ph-plus"></i> Tạo hóa đơn mới
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-slate-500 mb-1">Tổng thu hôm nay</p>
          <div class="flex items-baseline gap-2">
            <p class="text-3xl font-bold text-slate-800">12,540,000</p>
            <span class="text-sm font-semibold text-slate-500">VNĐ</span>
          </div>
        </div>
        <div class="w-14 h-14 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center text-3xl">
          <i class="ph-fill ph-money"></i>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-slate-500 mb-1">Hóa đơn chờ thu</p>
          <div class="flex items-baseline gap-2">
            <p class="text-3xl font-bold text-slate-800">5</p>
            <span class="text-sm font-semibold text-amber-500 bg-amber-50 px-2 py-0.5 rounded text-xs ml-2">~3,450,000đ</span>
          </div>
        </div>
        <div class="w-14 h-14 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center text-3xl">
          <i class="ph-fill ph-receipt"></i>
        </div>
      </div>
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex items-center justify-between">
        <div>
          <p class="text-sm font-medium text-slate-500 mb-1">Đã hoàn thành</p>
          <div class="flex items-baseline gap-2">
            <p class="text-3xl font-bold text-slate-800">42</p>
            <span class="text-sm font-semibold text-slate-500">Hóa đơn</span>
          </div>
        </div>
        <div class="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center text-3xl">
          <i class="ph-fill ph-check-circle"></i>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
      <!-- Search & Filter -->
      <div class="p-5 border-b border-slate-100 flex flex-wrap gap-4 items-center justify-between bg-slate-50/50">
        <div class="relative w-full md:w-96">
          <i class="ph ph-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg"></i>
          <input type="text" placeholder="Tìm theo mã bệnh nhân, tên, SĐT..." class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm">
        </div>
        <div class="flex items-center gap-3">
          <div class="flex bg-slate-200/50 rounded-xl p-1">
            <button class="px-4 py-1.5 rounded-lg text-sm font-medium bg-white text-slate-800 shadow-sm">Tất cả</button>
            <button class="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">Chưa thanh toán</button>
            <button class="px-4 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors">Đã thanh toán</button>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50/50 text-slate-500 text-sm font-medium">
              <th class="py-4 px-6 font-semibold">Mã HĐ / Bệnh nhân</th>
              <th class="py-4 px-6 font-semibold">Ngày tạo</th>
              <th class="py-4 px-6 font-semibold">Nội dung thu</th>
              <th class="py-4 px-6 font-semibold">Tổng tiền</th>
              <th class="py-4 px-6 font-semibold">Trạng thái</th>
              <th class="py-4 px-6 font-semibold text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody class="text-sm">
            <tr v-for="inv in invoices" :key="inv.id" class="border-t border-slate-100 hover:bg-slate-50 transition-colors group">
              <td class="py-4 px-6">
                <div class="font-semibold text-indigo-600 mb-0.5">{{ inv.id }}</div>
                <div class="font-medium text-slate-800">{{ inv.patientName }} <span class="text-slate-500 font-normal">({{ inv.patientId }})</span></div>
              </td>
              <td class="py-4 px-6">
                <div class="text-slate-700">{{ new Date(inv.date).toLocaleDateString('vi-VN') }}</div>
                <div class="text-slate-500 text-xs">{{ new Date(inv.date).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }) }}</div>
              </td>
              <td class="py-4 px-6">
                <div class="flex flex-wrap gap-1">
                  <span v-for="srv in inv.services" :key="srv" class="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs border border-slate-200">
                    {{ srv }}
                  </span>
                </div>
              </td>
              <td class="py-4 px-6 font-semibold text-slate-800 text-base">
                {{ inv.total.toLocaleString('vi-VN') }}đ
              </td>
              <td class="py-4 px-6">
                <span v-if="inv.status === 'paid'" class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-600 border border-emerald-200">
                  <i class="ph-fill ph-check-circle"></i> Đã thanh toán
                </span>
                <span v-else class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-600 border border-amber-200">
                  <i class="ph-fill ph-clock"></i> Chưa thanh toán
                </span>
              </td>
              <td class="py-4 px-6 text-right">
                <button v-if="inv.status === 'unpaid'" class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-colors text-sm inline-flex items-center gap-2">
                  <i class="ph ph-wallet"></i> Thu tiền
                </button>
                <div v-else class="flex justify-end gap-2">
                  <button class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="In biên lai">
                    <i class="ph ph-printer text-lg"></i>
                  </button>
                  <button class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Xem chi tiết">
                    <i class="ph ph-eye text-lg"></i>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- Pagination -->
      <div class="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 bg-slate-50/30">
        <span>Hiển thị {{ invoices.length }} hóa đơn</span>
        <div class="flex items-center gap-1">
          <button class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 disabled:opacity-50 transition-colors" disabled>
            <i class="ph ph-caret-left"></i>
          </button>
          <button class="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white font-medium shadow-sm">1</button>
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
import { allInvoices } from '../../data.js';

const invoices = ref(allInvoices);
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.shadow-soft { box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05); }
</style>
