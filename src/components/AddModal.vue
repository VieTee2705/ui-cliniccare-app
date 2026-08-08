<template>
  <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in" @click="$emit('close')"></div>
    
    <!-- Modal Content -->
    <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg relative z-10 animate-modal-pop overflow-hidden">
      <!-- Header -->
      <div class="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h2 class="text-xl font-bold text-slate-800 flex items-center gap-2">
          <div class="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
            <i class="ph-bold ph-plus"></i>
          </div>
          Thêm mới
        </h2>
        <button @click="$emit('close')" class="w-8 h-8 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors">
          <i class="ph-bold ph-x"></i>
        </button>
      </div>
      
      <!-- Body -->
      <div class="p-6 space-y-5">
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1.5">Loại mục mới</label>
          <select class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">
            <option value="appointment">Lịch khám mới</option>
            <option value="patient">Hồ sơ bệnh nhân mới</option>
            <option value="meeting">Lịch họp / Hội chẩn</option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1.5">Tiêu đề / Tên</label>
          <input type="text" placeholder="Nhập tiêu đề..." class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Ngày</label>
            <input type="date" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1.5">Giờ</label>
            <input type="time" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1.5">Ghi chú thêm</label>
          <textarea rows="3" placeholder="Nhập ghi chú chi tiết..." class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors"></textarea>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-end gap-3">
        <button @click="$emit('close')" class="px-5 py-2.5 rounded-xl font-medium text-slate-600 hover:bg-slate-200 transition-colors">Hủy bỏ</button>
        <button @click="$emit('close')" class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium shadow-soft hover:-translate-y-0.5 transition-all">Lưu lại</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})
defineEmits(['close'])
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.2s ease-out; }
.animate-modal-pop { animation: modalPop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); }

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes modalPop {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
