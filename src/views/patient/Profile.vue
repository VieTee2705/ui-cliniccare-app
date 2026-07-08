<template>
  <div class="p-8 max-w-4xl mx-auto">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-slate-800 tracking-tight">Hồ sơ cá nhân</h1>
      <p class="text-sm text-slate-500 mt-1">Quản lý thông tin bảo mật và liên hệ của bạn</p>
    </div>

    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden">
      <!-- Header banner -->
      <div class="h-32 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
        <div class="absolute -bottom-12 left-8 flex items-end gap-4">
          <img :src="users.patient.avatar" class="w-24 h-24 rounded-full border-4 border-white shadow-md bg-white" alt="Avatar">
          <div class="mb-2">
            <h2 class="text-xl font-bold text-slate-800">{{ users.patient.name }}</h2>
            <p class="text-sm text-slate-500">Bệnh nhân</p>
          </div>
        </div>
      </div>

      <div class="pt-16 p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Form Info -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Họ và tên</label>
              <input type="text" :value="users.patient.name" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Số điện thoại</label>
              <input type="text" value="0901234567" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input type="email" value="nguyenvan@email.com" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">
            </div>
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Ngày sinh</label>
              <input type="date" value="1990-05-15" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">
            </div>
          </div>

          <!-- Address & Save -->
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-1">Địa chỉ liên hệ</label>
              <textarea rows="4" class="w-full border border-slate-200 rounded-xl px-4 py-2.5 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-indigo-100 focus:outline-none transition-colors">123 Đường Nguyễn Hữu Cảnh, Phường 22, Bình Thạnh, TP.HCM</textarea>
            </div>
            <div class="pt-4">
              <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-soft hover:-translate-y-0.5 transition-all w-full">
                Cập nhật thông tin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { users } from '../../data';
</script>