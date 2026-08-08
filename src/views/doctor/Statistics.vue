<template>
  <div class="p-8 max-w-7xl mx-auto h-full overflow-y-auto">
    <div class="mb-8">
      <h1 class="text-2xl font-bold text-slate-800 tracking-tight">Thống kê & Báo cáo</h1>
      <p class="text-sm text-slate-500 mt-1">Tổng quan hoạt động chuyên môn của bạn</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
          <i class="ph-fill ph-users text-2xl"></i>
        </div>
        <div>
          <p class="text-xs text-slate-400 font-medium">Bệnh nhân tuần này</p>
          <h3 class="text-xl font-bold text-slate-800">188</h3>
          <p class="text-xs text-emerald-500 font-medium mt-1"><i class="ph ph-trend-up"></i> +12%</p>
        </div>
      </div>
      <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
          <i class="ph-fill ph-check-circle text-2xl"></i>
        </div>
        <div>
          <p class="text-xs text-slate-400 font-medium">Tỷ lệ hoàn thành</p>
          <h3 class="text-xl font-bold text-slate-800">95%</h3>
          <p class="text-xs text-slate-400 font-medium mt-1">Trong ngày</p>
        </div>
      </div>
      <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
          <i class="ph-fill ph-star text-2xl"></i>
        </div>
        <div>
          <p class="text-xs text-slate-400 font-medium">Đánh giá hài lòng</p>
          <h3 class="text-xl font-bold text-slate-800">4.9/5</h3>
          <p class="text-xs text-emerald-500 font-medium mt-1"><i class="ph ph-trend-up"></i> +0.1</p>
        </div>
      </div>
      <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex items-center gap-4">
        <div class="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
          <i class="ph-fill ph-clock text-2xl"></i>
        </div>
        <div>
          <p class="text-xs text-slate-400 font-medium">Thời gian trung bình/ca</p>
          <h3 class="text-xl font-bold text-slate-800">15p</h3>
          <p class="text-xs text-red-500 font-medium mt-1"><i class="ph ph-trend-down"></i> -2p</p>
        </div>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Bar Chart -->
      <div class="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <i class="ph-fill ph-chart-bar text-indigo-500"></i>
          Số lượng bệnh nhân theo ngày
        </h2>
        <div class="h-72 w-full">
          <Bar :data="chartData.weeklyPatients" :options="barOptions" />
        </div>
      </div>

      <!-- Doughnut Chart -->
      <div class="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
        <h2 class="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
          <i class="ph-fill ph-pie-chart text-indigo-500"></i>
          Cơ cấu dịch vụ chỉ định
        </h2>
        <div class="h-64 w-full flex items-center justify-center">
          <Doughnut :data="chartData.serviceDistribution" :options="doughnutOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js'
import { Bar, Doughnut } from 'vue-chartjs'
import { chartData } from '../../data'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: { color: '#f1f5f9' },
      border: { display: false }
    },
    x: {
      grid: { display: false },
      border: { display: false }
    }
  },
  elements: {
    bar: {
      borderRadius: 8,
      backgroundColor: '#6366f1' // indigo-500
    }
  }
}

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        usePointStyle: true,
        padding: 20,
        font: { family: "'Inter', sans-serif" }
      }
    }
  },
  cutout: '70%'
}
</script>
