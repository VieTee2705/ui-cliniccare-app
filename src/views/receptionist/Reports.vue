<template>
  <div class="p-8 max-w-7xl mx-auto animate-fade-in">
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-bold text-slate-800 tracking-tight flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
            <i class="ph-fill ph-chart-bar text-xl"></i>
          </div>
          Báo cáo thống kê
        </h1>
        <p class="text-sm text-slate-500 mt-2">Tổng hợp doanh thu và lưu lượng bệnh nhân theo thời gian</p>
      </div>
      <div class="flex gap-3">
        <div class="relative">
          <select class="appearance-none bg-white border border-slate-200 text-slate-700 py-2.5 pl-4 pr-10 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 cursor-pointer text-sm">
            <option>7 ngày qua</option>
            <option>30 ngày qua</option>
            <option>Tháng này</option>
            <option>Năm nay</option>
          </select>
          <i class="ph ph-caret-down absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"></i>
        </div>
        <button class="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-soft transition-colors flex items-center gap-2">
          <i class="ph ph-download-simple"></i> Tải báo cáo
        </button>
      </div>
    </div>

    <!-- Metrics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-100 to-transparent opacity-50 rounded-bl-full -z-0"></div>
        <div class="relative z-10">
          <p class="text-sm font-medium text-slate-500 mb-2">Tổng doanh thu</p>
          <p class="text-2xl font-bold text-slate-800">{{ reports.metrics.totalRevenue }}</p>
          <div class="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md">
            <i class="ph-bold ph-trend-up"></i> 12.5% vs tuần trước
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-transparent opacity-50 rounded-bl-full -z-0"></div>
        <div class="relative z-10">
          <p class="text-sm font-medium text-slate-500 mb-2">Tổng lượt khám</p>
          <p class="text-2xl font-bold text-slate-800">{{ reports.metrics.totalPatients }}</p>
          <div class="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md">
            <i class="ph-bold ph-trend-up"></i> 8.2% vs tuần trước
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-transparent opacity-50 rounded-bl-full -z-0"></div>
        <div class="relative z-10">
          <p class="text-sm font-medium text-slate-500 mb-2">Bệnh nhân mới</p>
          <p class="text-2xl font-bold text-slate-800">{{ reports.metrics.newPatients }}</p>
          <div class="mt-2 flex items-center gap-1.5 text-xs font-medium text-amber-600 bg-amber-50 w-fit px-2 py-1 rounded-md">
            <i class="ph-bold ph-minus"></i> 0.5% vs tuần trước
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
        <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-teal-100 to-transparent opacity-50 rounded-bl-full -z-0"></div>
        <div class="relative z-10">
          <p class="text-sm font-medium text-slate-500 mb-2">Đơn thuốc đã cấp</p>
          <p class="text-2xl font-bold text-slate-800">{{ reports.metrics.prescriptions }}</p>
          <div class="mt-2 flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 w-fit px-2 py-1 rounded-md">
            <i class="ph-bold ph-trend-up"></i> 15.3% vs tuần trước
          </div>
        </div>
      </div>
    </div>

    <!-- Charts -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Revenue Chart -->
      <div class="bg-white rounded-3xl shadow-soft border border-slate-100 p-6">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-lg font-bold text-slate-800">Biểu đồ doanh thu</h2>
            <p class="text-xs text-slate-500 mt-1">7 ngày gần nhất (Triệu VNĐ)</p>
          </div>
          <button class="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
            <i class="ph-bold ph-dots-three"></i>
          </button>
        </div>
        <div class="h-72 flex items-end gap-2 justify-between">
          <Bar v-if="chartReady" :data="reports.revenueChart" :options="barOptions" />
        </div>
      </div>

      <!-- Patient Demographics Chart -->
      <div class="bg-white rounded-3xl shadow-soft border border-slate-100 p-6">
        <div class="flex items-center justify-between mb-6">
          <div>
            <h2 class="text-lg font-bold text-slate-800">Phân loại lượt khám</h2>
            <p class="text-xs text-slate-500 mt-1">Phân bổ theo loại hình khám</p>
          </div>
          <button class="p-2 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
            <i class="ph-bold ph-dots-three"></i>
          </button>
        </div>
        <div class="h-72 flex items-center justify-center">
          <Doughnut v-if="chartReady" :data="reports.patientChart" :options="doughnutOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { receptionistReports } from '../../data.js';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'vue-chartjs';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const reports = ref(receptionistReports);
const chartReady = ref(false);

onMounted(() => {
  // Add small delay to ensure rendering happens smoothly after mount
  setTimeout(() => {
    chartReady.value = true;
  }, 100);
});

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      padding: 12,
      titleFont: { family: 'Inter, sans-serif', size: 13 },
      bodyFont: { family: 'Inter, sans-serif', size: 13 },
      cornerRadius: 8,
      displayColors: false
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: '#f1f5f9',
        drawBorder: false
      },
      ticks: {
        font: { family: 'Inter, sans-serif', size: 11 },
        color: '#64748b'
      }
    },
    x: {
      grid: {
        display: false,
        drawBorder: false
      },
      ticks: {
        font: { family: 'Inter, sans-serif', size: 11 },
        color: '#64748b'
      }
    }
  },
  borderRadius: 6,
  barThickness: 32
};

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        font: { family: 'Inter, sans-serif', size: 12 },
        color: '#475569',
        usePointStyle: true,
        padding: 20
      }
    },
    tooltip: {
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      padding: 12,
      bodyFont: { family: 'Inter, sans-serif', size: 13 },
      cornerRadius: 8
    }
  },
  cutout: '70%'
};
</script>

<style scoped>
.animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.shadow-soft { box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05); }
</style>
