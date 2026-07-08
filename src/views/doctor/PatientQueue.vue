<template>
  <div class="p-8">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-2xl font-bold text-indigo-900 tracking-tight">Danh sách Hàng đợi</h1>
        <p class="text-sm text-slate-500 mt-1">Danh sách bệnh nhân đang chờ khám trong ca trực của bạn</p>
      </div>
      <div class="bg-indigo-50 text-indigo-700 px-4 py-2.5 rounded-xl font-medium border border-indigo-100 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
        Đang chờ: {{ myQueue.filter(q => q.status === 'waiting').length }}
      </div>
    </div>

    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
      <!-- Bộ lọc -->
      <div class="p-6 border-b border-slate-100 flex gap-4 bg-slate-50/50">
        <div class="relative flex-1 max-w-md">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i class="ph ph-magnifying-glass text-slate-400"></i>
          </div>
          <input type="text" placeholder="Tìm kiếm theo tên bệnh nhân..." 
            class="w-full bg-white border border-slate-200 text-slate-700 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all">
        </div>
        
        <select class="bg-white border border-slate-200 text-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-indigo-300">
          <option value="all">Tất cả trạng thái</option>
          <option value="waiting">Đang chờ khám</option>
          <option value="testing">Đang xét nghiệm</option>
          <option value="completed">Đã khám xong</option>
        </select>
      </div>

      <!-- Bảng danh sách -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-white text-xs uppercase tracking-wider text-slate-400 font-medium border-b border-slate-100">
              <th class="px-6 py-4 w-20">STT</th>
              <th class="px-6 py-4">Thông tin bệnh nhân</th>
              <th class="px-6 py-4">Dịch vụ đăng ký</th>
              <th class="px-6 py-4">Trạng thái</th>
              <th class="px-6 py-4 text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-slate-50">
            <tr v-for="q in myQueue" :key="q.id" class="hover:bg-slate-50/80 transition-colors group">
              <td class="px-6 py-4">
                <div class="w-8 h-8 rounded-full flex items-center justify-center font-bold text-slate-700 bg-slate-100 group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors">
                  {{ q.id }}
                </div>
              </td>
              <td class="px-6 py-4">
                <p class="font-semibold text-slate-800">{{ q.patientName }}</p>
                <p class="text-xs text-slate-500 mt-0.5">Mã: {{ patients.find(p => p.id === q.patientId)?.code || '#BN-0000' }}</p>
              </td>
              <td class="px-6 py-4 text-slate-600 font-medium">{{ q.service }}</td>
              <td class="px-6 py-4">
                <span 
                  class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                  :class="[
                    q.status === 'waiting' ? 'bg-orange-100 text-orange-700' : 
                    q.status === 'testing' ? 'bg-purple-100 text-purple-700' : 
                    'bg-emerald-100 text-emerald-700'
                  ]"
                >
                  <span v-if="q.status !== 'completed'" class="w-1.5 h-1.5 rounded-full" :class="[q.status === 'waiting' ? 'bg-orange-500' : 'bg-purple-500 animate-pulse']"></span>
                  <i v-else class="ph-bold ph-check"></i>
                  {{ q.statusText }}
                </span>
              </td>
              <td class="px-6 py-4 text-right">
                <router-link :to="'/doctor/workspace/' + q.patientId" 
                  class="inline-block px-4 py-2 bg-white border border-slate-200 text-indigo-600 text-sm font-medium rounded-xl shadow-sm hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                  {{ q.status === 'completed' ? 'Xem lại hồ sơ' : 'Vào khám' }}
                </router-link>
              </td>
            </tr>
            
            <!-- Trạng thái trống nếu không có bệnh nhân -->
            <tr v-if="myQueue.length === 0">
              <td colspan="5" class="px-6 py-16 text-center">
                <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-50 text-slate-300 mb-3">
                  <i class="ph ph-coffee text-3xl"></i>
                </div>
                <p class="text-slate-500 font-medium">Hiện tại không có bệnh nhân nào trong hàng đợi.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { users, queue, patients } from '../../data';

// Chỉ lấy bệnh nhân của bác sĩ đang đăng nhập
const myQueue = computed(() => {
  return queue.filter(q => q.doctorId === users.doctor.id);
});
</script>