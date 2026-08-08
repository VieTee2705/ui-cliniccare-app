<template>
  <div v-if="isOpen" class="absolute top-14 right-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50 transform origin-top-right transition-all animate-dropdown">
    <div class="px-4 py-3 border-b border-slate-100 flex justify-between items-center bg-slate-50">
      <h3 class="font-semibold text-slate-800">Thông báo</h3>
      <button class="text-xs text-indigo-600 font-medium hover:underline">Đánh dấu đã đọc</button>
    </div>
    <div class="max-h-80 overflow-y-auto">
      <!-- Item 1 -->
      <div class="px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors relative">
        <span class="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-500"></span>
        <p class="text-xs text-slate-400 mb-1">Vừa xong</p>
        <h4 class="text-sm font-semibold text-slate-800">Bệnh nhân mới check-in</h4>
        <p class="text-xs text-slate-600 mt-1 line-clamp-2">Bệnh nhân Trần Văn Bình (#BN-1024) vừa hoàn thành thủ tục check-in và đang chờ ở cửa phòng khám.</p>
      </div>
      <!-- Item 2 -->
      <div class="px-4 py-3 border-b border-slate-50 hover:bg-slate-50 cursor-pointer transition-colors relative">
        <span class="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-500"></span>
        <p class="text-xs text-slate-400 mb-1">1 giờ trước</p>
        <h4 class="text-sm font-semibold text-slate-800">Họp giao ban toàn viện</h4>
        <p class="text-xs text-slate-600 mt-1 line-clamp-2">Ban giám đốc thông báo họp giao ban định kỳ vào 11:30 trưa nay tại Phòng họp A.</p>
      </div>
      <!-- Item 3 -->
      <div class="px-4 py-3 hover:bg-slate-50 cursor-pointer transition-colors opacity-70">
        <p class="text-xs text-slate-400 mb-1">Hôm qua</p>
        <h4 class="text-sm font-semibold text-slate-800">Cập nhật hệ thống</h4>
        <p class="text-xs text-slate-600 mt-1 line-clamp-2">Hệ thống phần mềm đã được cập nhật phiên bản 2.0. Vui lòng làm mới trang (F5).</p>
      </div>
    </div>
    <div class="px-4 py-2 bg-slate-50 border-t border-slate-100 text-center">
      <button class="text-xs font-medium text-slate-500 hover:text-indigo-600">Xem tất cả</button>
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
</script>

<style scoped>
.animate-dropdown {
  animation: dropdown 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
@keyframes dropdown {
  from { opacity: 0; transform: scale(0.95) translateY(-10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
