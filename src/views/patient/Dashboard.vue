<template>
  <div class="p-8">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-indigo-900 tracking-tight">Chào buổi sáng, {{ users.patient.name }}! 👋</h1>
      <p class="text-sm text-slate-500 mt-1">Chúc bạn một ngày mới nhiều sức khỏe.</p>
    </div>

    <!-- Cảnh báo nhắc nhở sức khỏe / Lịch hẹn -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-lg mb-8 flex items-center justify-between">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
          <i class="ph-fill ph-calendar-check text-2xl"></i>
        </div>
        <div>
          <p class="font-medium text-blue-100 mb-1">Lịch khám sắp tới</p>
          <h3 class="text-lg font-bold">Khám Nội chung - 09:30 Ngày mai</h3>
          <p class="text-sm text-blue-100 mt-1">Phòng khám số 1, Tầng 2. Bác sĩ Lê Tuấn.</p>
        </div>
      </div>
      <button class="bg-white text-indigo-600 hover:bg-slate-50 px-5 py-2.5 rounded-xl font-medium shadow-sm transition-colors text-sm">
        Xem chi tiết
      </button>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      <!-- Tóm tắt sức khỏe -->
      <div class="lg:col-span-2">
        <h2 class="text-lg font-bold text-slate-800 mb-4">Chỉ số sức khỏe gần nhất</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p class="text-xs text-slate-500 font-medium mb-1">Huyết áp</p>
            <p class="text-xl font-bold text-slate-800">120/80</p>
            <p class="text-xs text-emerald-500 font-medium mt-1">Bình thường</p>
          </div>
          <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p class="text-xs text-slate-500 font-medium mb-1">Nhịp tim</p>
            <p class="text-xl font-bold text-slate-800">75 <span class="text-xs text-slate-400 font-normal">bpm</span></p>
            <p class="text-xs text-emerald-500 font-medium mt-1">Bình thường</p>
          </div>
          <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p class="text-xs text-slate-500 font-medium mb-1">Cân nặng</p>
            <p class="text-xl font-bold text-slate-800">65 <span class="text-xs text-slate-400 font-normal">kg</span></p>
          </div>
          <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <p class="text-xs text-slate-500 font-medium mb-1">Chiều cao</p>
            <p class="text-xl font-bold text-slate-800">170 <span class="text-xs text-slate-400 font-normal">cm</span></p>
          </div>
        </div>

        <h2 class="text-lg font-bold text-slate-800 mb-4">Lịch sử khám bệnh gần đây</h2>
        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <div class="p-5 border-b border-slate-100 hover:bg-slate-50 transition-colors flex justify-between items-center cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <i class="ph-fill ph-stethoscope text-xl"></i>
              </div>
              <div>
                <h4 class="font-semibold text-slate-800">Khám Tổng quát</h4>
                <p class="text-xs text-slate-500 mt-0.5">12/05/2026 • BS. Lê Tuấn</p>
              </div>
            </div>
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">Đã hoàn thành</span>
          </div>
          <div class="p-5 hover:bg-slate-50 transition-colors flex justify-between items-center cursor-pointer">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
                <i class="ph-fill ph-tooth text-xl"></i>
              </div>
              <div>
                <h4 class="font-semibold text-slate-800">Nhổ răng khôn</h4>
                <p class="text-xs text-slate-500 mt-0.5">10/01/2026 • BS. Nguyễn Hà</p>
              </div>
            </div>
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-100 text-emerald-700">Đã hoàn thành</span>
          </div>
        </div>
      </div>

      <!-- Lối tắt & Thông tin thuốc -->
      <div class="space-y-6">
        <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-6">
          <h2 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <i class="ph-fill ph-pill text-indigo-500"></i>
            Đơn thuốc đang dùng
          </h2>
          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <h4 class="font-semibold text-slate-800 mb-1">Amoxicillin 500mg</h4>
            <p class="text-xs text-slate-500 mb-3">Ngày uống 2 lần, mỗi lần 1 viên sau ăn.</p>
            <div class="w-full bg-slate-200 rounded-full h-2 mb-1">
              <div class="bg-indigo-600 h-2 rounded-full" style="width: 70%"></div>
            </div>
            <div class="flex justify-between text-xs text-slate-500">
              <span>Còn 4 viên</span>
              <span>Đã uống 10 viên</span>
            </div>
          </div>
        </div>

        <div class="bg-indigo-50 rounded-3xl border border-indigo-100 p-6 text-center">
          <div class="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm text-indigo-500 mb-4 border border-indigo-100">
            <i class="ph-fill ph-user-md text-3xl"></i>
          </div>
          <h3 class="font-bold text-indigo-900 mb-2">Cần tư vấn y tế?</h3>
          <p class="text-sm text-indigo-700/80 mb-4">Đội ngũ bác sĩ của chúng tôi luôn sẵn sàng hỗ trợ bạn.</p>
          <button class="w-full bg-white text-indigo-600 border border-indigo-200 hover:border-indigo-300 font-medium py-2.5 rounded-xl transition-colors">
            Gọi Tổng Đài Khẩn Cấp
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { users } from '../../data';
</script>