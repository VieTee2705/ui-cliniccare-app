<template>
  <div class="p-8 max-w-6xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <i class="ph-fill ph-files text-xl"></i>
          </div>
          Sổ khám bệnh
        </h1>
        <p class="text-sm text-slate-500 mt-2">Lịch sử khám chữa bệnh và kết quả cận lâm sàng</p>
      </div>
      <div class="relative">
        <i class="ph-bold ph-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
        <input type="text" placeholder="Tìm kiếm bệnh án..." class="pl-10 pr-4 py-2 border border-slate-200 rounded-xl bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none w-64 text-sm transition-shadow shadow-sm">
      </div>
    </div>

    <div class="space-y-6">
      <div v-for="record in patientHistory" :key="record.id" class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group">
        
        <!-- Header -->
        <div class="px-6 py-4 border-b border-slate-100 bg-slate-50 flex justify-between items-center cursor-pointer" @click="toggle(record.id)">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-indigo-600 border border-slate-100">
              <i class="ph-fill ph-file-text text-2xl"></i>
            </div>
            <div>
              <p class="text-xs font-semibold text-slate-500 uppercase tracking-wide">{{ formatDate(record.date) }}</p>
              <h3 class="text-lg font-bold text-slate-800 mt-0.5">{{ record.diagnosis }}</h3>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="text-right hidden sm:block">
              <p class="text-sm font-semibold text-slate-700">{{ record.doctor }}</p>
              <p class="text-xs text-emerald-600 font-medium bg-emerald-50 inline-block px-2 py-0.5 rounded mt-1">Đã hoàn thành</p>
            </div>
            <button class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-200/50 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600 transition-colors">
              <i class="ph-bold" :class="expanded === record.id ? 'ph-caret-up' : 'ph-caret-down'"></i>
            </button>
          </div>
        </div>

        <!-- Body (Expanded) -->
        <div v-if="expanded === record.id" class="p-6 bg-white animate-expand">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Diagnosis & Notes -->
            <div class="space-y-6">
              <div>
                <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <i class="ph-bold ph-stethoscope"></i> Chẩn đoán & Kết luận
                </h4>
                <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <p class="text-slate-700 font-medium">{{ record.diagnosis }}</p>
                </div>
              </div>
              <div>
                <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <i class="ph-bold ph-notebook"></i> Lời khuyên của bác sĩ
                </h4>
                <div class="bg-yellow-50 rounded-2xl p-4 border border-yellow-100">
                  <p class="text-yellow-800 text-sm leading-relaxed">{{ record.notes }}</p>
                </div>
              </div>
            </div>

            <!-- Prescription & Attachments -->
            <div class="space-y-6">
              <div>
                <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <i class="ph-bold ph-pill"></i> Đơn thuốc
                </h4>
                <div class="bg-blue-50 rounded-2xl p-4 border border-blue-100 flex justify-between items-start">
                  <div>
                    <p class="text-blue-900 font-medium mb-1">{{ record.prescription }}</p>
                    <p class="text-xs text-blue-700/70">Nhấn để xem chi tiết liều lượng</p>
                  </div>
                  <button class="text-blue-600 hover:text-blue-800 p-2 bg-white rounded-lg shadow-sm border border-blue-200">
                    <i class="ph-bold ph-eye"></i>
                  </button>
                </div>
              </div>
              
              <div>
                <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <i class="ph-bold ph-paperclip"></i> Đính kèm cận lâm sàng
                </h4>
                <div class="flex gap-3">
                  <div class="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-xl shadow-sm cursor-pointer hover:border-indigo-300 transition-colors">
                    <div class="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center">
                      <i class="ph-fill ph-file-pdf"></i>
                    </div>
                    <div>
                      <p class="text-xs font-semibold text-slate-700">KQXN_Mau.pdf</p>
                      <p class="text-[10px] text-slate-400">1.2 MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-6 pt-4 border-t border-slate-100 flex justify-end gap-3">
            <button class="px-4 py-2 border border-slate-200 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
              <i class="ph-bold ph-printer"></i> In bệnh án
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { patientHistory } from '../../data';

const expanded = ref(patientHistory[0]?.id); // Mặc định mở record đầu tiên

const toggle = (id) => {
  if (expanded.value === id) expanded.value = null;
  else expanded.value = id;
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' });
};
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
.animate-expand { animation: expand 0.2s ease-out; transform-origin: top; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
@keyframes expand { from { opacity: 0; transform: scaleY(0.95); } to { opacity: 1; transform: scaleY(1); } }
</style>
