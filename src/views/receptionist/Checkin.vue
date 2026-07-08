<template>
  <div class="p-8">
    <div class="flex justify-between items-end mb-8">
      <div>
        <h1 class="text-2xl font-bold text-indigo-900 tracking-tight">Tiếp Nhận & Check-in</h1>
        <p class="text-sm text-slate-500 mt-1">Tìm kiếm bệnh nhân cũ hoặc tạo hồ sơ mới</p>
      </div>
      <button class="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-soft transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
        <i class="ph ph-user-plus text-xl"></i>
        Tạo Hồ Sơ Mới
      </button>
    </div>

    <div class="bg-white rounded-3xl shadow-soft border border-slate-100 overflow-hidden mb-8">
      <div class="p-6 border-b border-slate-100 flex gap-4">
        <div class="relative flex-1">
          <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <i class="ph ph-magnifying-glass text-slate-400"></i>
          </div>
          <input type="text" placeholder="Nhập Số điện thoại, Mã BN hoặc Họ Tên..." 
            class="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all">
        </div>
        <button class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition-colors">
          Tìm Kiếm
        </button>
      </div>

      <div class="p-6">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Kết quả tìm kiếm</h3>
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 text-xs uppercase tracking-wider text-slate-500 font-medium rounded-xl">
              <th class="px-6 py-4 rounded-l-xl">Mã BN</th>
              <th class="px-6 py-4">Họ Tên</th>
              <th class="px-6 py-4">Giới tính</th>
              <th class="px-6 py-4">Ngày sinh</th>
              <th class="px-6 py-4">Số điện thoại</th>
              <th class="px-6 py-4 rounded-r-xl">Thao tác</th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-slate-100">
            <tr v-for="p in patients" :key="p.id" class="hover:bg-slate-50 transition-colors">
              <td class="px-6 py-4 font-medium text-blue-600">{{ p.code }}</td>
              <td class="px-6 py-4 font-semibold text-slate-800">{{ p.name }}</td>
              <td class="px-6 py-4 text-slate-600">{{ p.gender }}</td>
              <td class="px-6 py-4 text-slate-600">{{ p.dob }}</td>
              <td class="px-6 py-4 text-slate-600">{{ p.phone }}</td>
              <td class="px-6 py-4">
                <button class="text-indigo-600 hover:text-indigo-800 font-medium px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors text-xs">
                  Chọn & Check-in
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { patients } from '../../data';
</script>