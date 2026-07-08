<template>
  <div class="flex flex-col h-full">
    <!-- Header: Patient Info -->
    <div class="bg-white border-b border-slate-200 p-6 shrink-0 z-10 shadow-sm">
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-5">
          <div class="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 shadow-sm">
            <i class="ph-fill ph-user text-3xl"></i>
          </div>
          <div>
            <div class="flex items-center gap-3">
              <h1 class="text-2xl font-bold text-slate-800">{{ currentPatient?.name || 'Đang tải...' }}</h1>
              <span class="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md text-xs font-semibold">{{ currentPatient?.code || '' }}</span>
            </div>
            <div class="flex gap-4 mt-2 text-sm text-slate-500">
              <span class="flex items-center gap-1.5"><i class="ph ph-gender-intersex"></i> {{ currentPatient?.gender || 'N/A' }}</span>
              <span class="flex items-center gap-1.5"><i class="ph ph-calendar-blank"></i> {{ currentPatient?.dob || 'N/A' }}</span>
              <span class="flex items-center gap-1.5"><i class="ph ph-phone"></i> {{ currentPatient?.phone || 'N/A' }}</span>
            </div>
          </div>
        </div>
        
        <div class="flex gap-3">
          <button class="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors">Tạm dừng</button>
          <button class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-soft hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <i class="ph ph-check-circle text-lg"></i>
            Hoàn tất khám
          </button>
        </div>
      </div>
    </div>

    <!-- Workspace Area -->
    <div class="flex-1 flex overflow-hidden">
      <!-- Sidebar Tabs -->
      <div class="w-64 bg-slate-50 border-r border-slate-200 p-4 shrink-0 overflow-y-auto">
        <nav class="space-y-2">
          <button 
            @click="activeTab = 'history'"
            :class="[
              'w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-medium transition-all',
              activeTab === 'history' ? 'bg-white text-indigo-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:bg-slate-100 border border-transparent'
            ]"
          >
            <i class="ph ph-files text-xl" :class="activeTab === 'history' ? 'text-indigo-500' : ''"></i>
            Hồ sơ bệnh án
          </button>
          
          <button 
            @click="activeTab = 'clinical'"
            :class="[
              'w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-medium transition-all',
              activeTab === 'clinical' ? 'bg-white text-indigo-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:bg-slate-100 border border-transparent'
            ]"
          >
            <i class="ph ph-stethoscope text-xl" :class="activeTab === 'clinical' ? 'text-indigo-500' : ''"></i>
            Khám lâm sàng
          </button>
          
          <button 
            @click="activeTab = 'subclinical'"
            :class="[
              'w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-medium transition-all',
              activeTab === 'subclinical' ? 'bg-white text-indigo-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:bg-slate-100 border border-transparent'
            ]"
          >
            <i class="ph ph-test-tube text-xl" :class="activeTab === 'subclinical' ? 'text-indigo-500' : ''"></i>
            Cận lâm sàng
          </button>
          
          <button 
            @click="activeTab = 'prescription'"
            :class="[
              'w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left font-medium transition-all',
              activeTab === 'prescription' ? 'bg-white text-indigo-700 shadow-sm border border-slate-200' : 'text-slate-600 hover:bg-slate-100 border border-transparent'
            ]"
          >
            <i class="ph ph-pill text-xl" :class="activeTab === 'prescription' ? 'text-indigo-500' : ''"></i>
            Kê đơn thuốc
          </button>
        </nav>
      </div>

      <!-- Tab Content Area -->
      <div class="flex-1 overflow-y-auto bg-white p-8">
        
        <!-- Tab 1: Hồ sơ bệnh án -->
        <div v-show="activeTab === 'history'" class="max-w-4xl animate-fade-in">
          <h2 class="text-xl font-bold text-slate-800 mb-6">Lịch sử khám bệnh & Tiền sử</h2>
          
          <!-- Cảnh báo dị ứng -->
          <div class="bg-red-50 border border-red-200 p-4 rounded-2xl flex gap-3 mb-6">
            <i class="ph-fill ph-warning-circle text-2xl text-red-500 mt-0.5"></i>
            <div>
              <h4 class="font-semibold text-red-800">Cảnh báo Dị ứng</h4>
              <p class="text-sm text-red-600 mt-1">Bệnh nhân bị dị ứng với: <strong>Penicillin</strong>, <strong>Hải sản</strong>.</p>
            </div>
          </div>
          
          <!-- Timeline lịch sử -->
          <div class="relative border-l-2 border-slate-100 ml-4 space-y-8">
            <div class="relative pl-6">
              <span class="absolute -left-2.5 top-1 w-5 h-5 bg-indigo-100 border-4 border-white rounded-full flex items-center justify-center">
                <span class="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
              </span>
              <p class="text-sm font-semibold text-indigo-600 mb-1">12/05/2026</p>
              <div class="bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm">
                <h4 class="font-semibold text-slate-800">Khám Tổng quát</h4>
                <p class="text-sm text-slate-600 mt-2">Chẩn đoán: Viêm họng cấp. Đã kê đơn kháng sinh và tư vấn nghỉ ngơi.</p>
              </div>
            </div>
            
            <div class="relative pl-6">
              <span class="absolute -left-2.5 top-1 w-5 h-5 bg-slate-100 border-4 border-white rounded-full flex items-center justify-center">
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full"></span>
              </span>
              <p class="text-sm font-semibold text-slate-500 mb-1">10/01/2026</p>
              <div class="bg-slate-50 border border-slate-100 p-5 rounded-2xl shadow-sm">
                <h4 class="font-semibold text-slate-800">Khám Tiêu hoá</h4>
                <p class="text-sm text-slate-600 mt-2">Chẩn đoán: Rối loạn tiêu hoá nhẹ. Cho men tiêu hoá.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 2: Khám lâm sàng -->
        <div v-show="activeTab === 'clinical'" class="max-w-4xl animate-fade-in">
          <h2 class="text-xl font-bold text-slate-800 mb-6">Khám lâm sàng</h2>
          
          <div class="space-y-6">
            <!-- Sinh hiệu cơ bản -->
            <div class="grid grid-cols-4 gap-4">
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p class="text-xs text-slate-500 font-medium">Huyết áp (mmHg)</p>
                <input type="text" value="120/80" class="w-full bg-transparent font-bold text-lg text-slate-800 focus:outline-none mt-1">
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p class="text-xs text-slate-500 font-medium">Nhịp tim (bpm)</p>
                <input type="text" value="75" class="w-full bg-transparent font-bold text-lg text-slate-800 focus:outline-none mt-1">
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p class="text-xs text-slate-500 font-medium">Nhiệt độ (°C)</p>
                <input type="text" value="37.2" class="w-full bg-transparent font-bold text-lg text-slate-800 focus:outline-none mt-1">
              </div>
              <div class="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <p class="text-xs text-slate-500 font-medium">SpO2 (%)</p>
                <input type="text" value="98" class="w-full bg-transparent font-bold text-lg text-slate-800 focus:outline-none mt-1">
              </div>
            </div>
            
            <!-- Lý do & Triệu chứng -->
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Lý do khám / Triệu chứng</label>
              <textarea rows="3" placeholder="Mô tả triệu chứng bệnh nhân gặp phải..." class="w-full bg-white border border-slate-300 rounded-xl p-4 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"></textarea>
            </div>
            
            <!-- Chẩn đoán sơ bộ -->
            <div>
              <label class="block text-sm font-semibold text-slate-700 mb-2">Chẩn đoán sơ bộ (Mã ICD-10)</label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i class="ph ph-magnifying-glass text-slate-400"></i>
                </div>
                <input type="text" placeholder="Tìm mã bệnh ICD-10..." class="w-full bg-white border border-slate-300 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors">
              </div>
              <div class="mt-3 flex gap-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-lg text-xs font-medium">
                  J02.9 - Viêm họng cấp không xác định
                  <button class="hover:text-red-500"><i class="ph ph-x"></i></button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tab 3: Cận lâm sàng -->
        <div v-show="activeTab === 'subclinical'" class="max-w-4xl animate-fade-in">
          <h2 class="text-xl font-bold text-slate-800 mb-6">Chỉ định Cận lâm sàng</h2>
          
          <div class="grid grid-cols-2 gap-8">
            <div>
              <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Xét nghiệm Máu</h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" class="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500">
                  <span class="text-sm font-medium text-slate-700">Huyết đồ (Công thức máu)</span>
                </label>
                <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" class="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500">
                  <span class="text-sm font-medium text-slate-700">Sinh hoá máu cơ bản</span>
                </label>
              </div>
            </div>
            
            <div>
              <h3 class="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Chẩn đoán Hình ảnh</h3>
              <div class="space-y-3">
                <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer bg-indigo-50/50 border-indigo-200">
                  <input type="checkbox" checked class="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500">
                  <span class="text-sm font-medium text-indigo-800">X-Quang Phổi thẳng</span>
                </label>
                <label class="flex items-center gap-3 p-3 border border-slate-200 rounded-xl hover:bg-slate-50 cursor-pointer">
                  <input type="checkbox" class="w-5 h-5 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500">
                  <span class="text-sm font-medium text-slate-700">Siêu âm Ổ bụng</span>
                </label>
              </div>
            </div>
          </div>
          
          <div class="mt-8 border-t border-slate-100 pt-6">
            <button class="bg-indigo-100 text-indigo-700 px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-200 transition-colors flex items-center gap-2">
              <i class="ph ph-printer"></i>
              In phiếu chỉ định
            </button>
          </div>
        </div>

        <!-- Tab 4: Kê đơn thuốc -->
        <div v-show="activeTab === 'prescription'" class="max-w-4xl animate-fade-in">
          <h2 class="text-xl font-bold text-slate-800 mb-6">Kê đơn thuốc</h2>
          
          <!-- Thanh tìm kiếm thuốc -->
          <div class="relative mb-6">
            <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <i class="ph ph-magnifying-glass text-slate-400"></i>
            </div>
            <input type="text" placeholder="Tìm tên thuốc, hoạt chất..." class="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all">
          </div>
          
          <!-- Danh sách thuốc đã chọn -->
          <div class="border border-slate-200 rounded-2xl overflow-hidden">
            <table class="w-full text-left">
              <thead class="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Tên thuốc</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase w-24">SL</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase">Cách dùng</th>
                  <th class="px-4 py-3 text-xs font-semibold text-slate-500 uppercase w-16"></th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100">
                <tr class="bg-white">
                  <td class="px-4 py-4">
                    <p class="font-medium text-slate-800">Paracetamol 500mg</p>
                    <p class="text-xs text-slate-500">Viên nén</p>
                  </td>
                  <td class="px-4 py-4">
                    <input type="number" value="10" class="w-16 border border-slate-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:border-indigo-500">
                  </td>
                  <td class="px-4 py-4">
                    <input type="text" value="Sáng 1 viên, Tối 1 viên sau ăn" class="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-indigo-500">
                  </td>
                  <td class="px-4 py-4 text-center">
                    <button class="text-slate-400 hover:text-red-500 transition-colors"><i class="ph ph-trash text-lg"></i></button>
                  </td>
                </tr>
                <tr class="bg-white">
                  <td class="px-4 py-4">
                    <p class="font-medium text-slate-800">Amoxicillin 500mg</p>
                    <p class="text-xs text-slate-500">Viên nang</p>
                  </td>
                  <td class="px-4 py-4">
                    <input type="number" value="14" class="w-16 border border-slate-300 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:border-indigo-500">
                  </td>
                  <td class="px-4 py-4">
                    <input type="text" value="Ngày uống 2 lần, mỗi lần 1 viên" class="w-full border border-slate-300 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-indigo-500">
                  </td>
                  <td class="px-4 py-4 text-center">
                    <button class="text-slate-400 hover:text-red-500 transition-colors"><i class="ph ph-trash text-lg"></i></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- Ghi chú đơn thuốc -->
          <div class="mt-6">
            <label class="block text-sm font-semibold text-slate-700 mb-2">Lời dặn của bác sĩ</label>
            <textarea rows="2" placeholder="Ví dụ: Uống nhiều nước, tái khám sau 7 ngày..." class="w-full bg-white border border-slate-300 rounded-xl p-4 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"></textarea>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { patients } from '../../data';

const route = useRoute();
const patientId = route.params.patientId;

const activeTab = ref('history'); // history, clinical, subclinical, prescription

const currentPatient = computed(() => {
  return patients.find(p => p.id === patientId) || patients[0];
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(5px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>