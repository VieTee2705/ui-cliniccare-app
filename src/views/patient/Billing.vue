<template>
  <div class="p-8 max-w-6xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <i class="ph-fill ph-receipt text-xl"></i>
          </div>
          Thanh toán & Viện phí
        </h1>
        <p class="text-sm text-slate-500 mt-2">Quản lý hóa đơn và lịch sử giao dịch</p>
      </div>
      <div class="flex items-center gap-4">
        <!-- Overview Card -->
        <div class="bg-indigo-600 text-white px-5 py-3 rounded-2xl shadow-soft flex items-center gap-4">
          <div class="p-2 bg-white/20 rounded-xl"><i class="ph-bold ph-wallet text-xl"></i></div>
          <div>
            <p class="text-xs text-indigo-200">Tổng dư nợ cần thanh toán</p>
            <p class="text-lg font-bold">{{ formatCurrency(totalUnpaid) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
      <!-- Table Header -->
      <div class="grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 border-b border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
        <div class="col-span-3">Mã Hoá Đơn / Ngày</div>
        <div class="col-span-5">Nội dung thanh toán</div>
        <div class="col-span-2 text-right">Số tiền</div>
        <div class="col-span-2 text-center">Trạng thái</div>
      </div>

      <!-- Table Body -->
      <div class="divide-y divide-slate-100">
        <div v-for="inv in patientBilling" :key="inv.id" class="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-slate-50 transition-colors group cursor-pointer">
          
          <div class="col-span-3">
            <p class="font-bold text-slate-800">{{ inv.id }}</p>
            <p class="text-xs text-slate-500 mt-0.5">{{ formatDate(inv.date) }}</p>
          </div>
          
          <div class="col-span-5">
            <p class="text-sm font-medium text-slate-700">{{ inv.description }}</p>
          </div>
          
          <div class="col-span-2 text-right">
            <p class="font-bold text-slate-800">{{ formatCurrency(inv.amount) }}</p>
          </div>
          
          <div class="col-span-2 flex justify-center items-center relative">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium border"
                  :class="inv.status === 'paid' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'">
              <i class="ph-fill" :class="inv.status === 'paid' ? 'ph-check-circle' : 'ph-warning-circle'"></i>
              {{ inv.status === 'paid' ? 'Đã thanh toán' : 'Chưa thanh toán' }}
            </span>

            <!-- Actions popover -->
            <div class="absolute right-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-slate-50 pl-4">
              <button v-if="inv.status === 'unpaid'" class="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium shadow-sm transition-colors">
                Thanh toán ngay
              </button>
              <button class="w-8 h-8 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-indigo-600 hover:border-indigo-300 transition-colors shadow-sm">
                <i class="ph-bold ph-download-simple"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { patientBilling } from '../../data';

const totalUnpaid = computed(() => {
  return patientBilling
    .filter(inv => inv.status === 'unpaid')
    .reduce((sum, inv) => sum + inv.amount, 0);
});

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
