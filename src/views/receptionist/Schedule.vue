<template>
  <div class="p-8 max-w-6xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <i class="ph-fill ph-calendar text-xl"></i>
          </div>
          Lịch trực
        </h1>
        <p class="text-sm text-slate-500 mt-2">Phân hệ quản lý chuyên dụng</p>
      </div>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-soft transition-colors flex items-center gap-2">
        <i class="ph ph-plus"></i> Thêm mới
      </button>
    </div>

    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden min-h-[400px] flex items-center justify-center">
      <div class="text-center p-8">
        <div class="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-300">
          <i class="ph-fill ph-calendar text-5xl"></i>
        </div>
        <h2 class="text-xl font-semibold text-slate-700 mb-2">Đang tải dữ liệu...</h2>
        <p class="text-slate-500 max-w-sm mx-auto">Giao diện này đang được kết nối với cơ sở dữ liệu. Vui lòng quay lại sau.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
</style>
