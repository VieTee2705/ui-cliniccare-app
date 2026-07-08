<template>
  <div class="flex-1 bg-slate-50 py-12">
    <div class="max-w-3xl mx-auto px-6">
      
      <!-- Wizard Header -->
      <div class="mb-10 text-center">
        <h1 class="text-3xl font-bold text-slate-800 mb-2">Đặt lịch khám</h1>
        <p class="text-slate-500">Hoàn thành các bước dưới đây để đặt lịch nhanh chóng</p>
      </div>

      <!-- Progress Bar -->
      <div class="flex justify-between items-center mb-12 relative">
        <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0"></div>
        <div class="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-600 rounded-full z-0 transition-all duration-500" :style="{ width: ((step - 1) / 2) * 100 + '%' }"></div>
        
        <div class="relative z-10 flex flex-col items-center gap-2" v-for="s in 3" :key="s">
          <div :class="[
            'w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 border-2',
            step >= s ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-slate-300 text-slate-400'
          ]">
            <i v-if="step > s" class="ph-bold ph-check text-lg"></i>
            <span v-else>{{ s }}</span>
          </div>
          <span :class="['text-xs font-medium', step >= s ? 'text-indigo-700' : 'text-slate-400']">
            {{ s === 1 ? 'Dịch vụ' : s === 2 ? 'Ngày giờ' : 'Xác nhận' }}
          </span>
        </div>
      </div>

      <!-- Main Form Area -->
      <div class="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 min-h-[400px] flex flex-col">
        
        <!-- Step 1: Chọn dịch vụ & Bác sĩ -->
        <div v-show="step === 1" class="flex-1 animate-fade-in">
          <h2 class="text-xl font-bold text-slate-800 mb-6">Chọn Dịch vụ & Chuyên khoa</h2>
          
          <div class="space-y-4">
            <label v-for="svc in services" :key="svc.id" class="flex items-center justify-between p-4 border border-slate-200 rounded-2xl cursor-pointer hover:border-indigo-300 transition-colors" :class="{'bg-indigo-50 border-indigo-500 ring-1 ring-indigo-500': selectedService === svc.id}">
              <div class="flex items-center gap-4">
                <input type="radio" :value="svc.id" v-model="selectedService" class="w-5 h-5 text-indigo-600 focus:ring-indigo-500">
                <div>
                  <h4 class="font-semibold text-slate-800">{{ svc.name }}</h4>
                </div>
              </div>
              <span class="font-bold text-indigo-700">{{ formatPrice(svc.price) }}</span>
            </label>
          </div>
        </div>

        <!-- Step 2: Chọn Ngày Giờ -->
        <div v-show="step === 2" class="flex-1 animate-fade-in">
          <h2 class="text-xl font-bold text-slate-800 mb-6">Chọn thời gian khám</h2>
          
          <div class="mb-6">
            <label class="block text-sm font-semibold text-slate-700 mb-3">Ngày khám</label>
            <input type="date" v-model="selectedDate" class="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
          </div>

          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-3">Khung giờ có sẵn</label>
            <div class="grid grid-cols-3 gap-3">
              <button v-for="time in availableTimes" :key="time" 
                @click="selectedTime = time"
                :class="[
                  'py-3 rounded-xl text-sm font-medium border transition-colors',
                  selectedTime === time ? 'bg-indigo-600 border-indigo-600 text-white shadow-md' : 'bg-white border-slate-200 text-slate-600 hover:border-indigo-300 hover:bg-slate-50'
                ]">
                {{ time }}
              </button>
            </div>
          </div>
        </div>

        <!-- Step 3: Xác nhận -->
        <div v-show="step === 3" class="flex-1 animate-fade-in">
          <div class="text-center mb-8">
            <div class="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
              <i class="ph-fill ph-check-circle"></i>
            </div>
            <h2 class="text-2xl font-bold text-slate-800">Thông tin lịch hẹn</h2>
            <p class="text-slate-500 mt-2">Vui lòng kiểm tra lại thông tin trước khi xác nhận</p>
          </div>

          <div class="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
            <div class="flex justify-between pb-4 border-b border-slate-200">
              <span class="text-slate-500">Dịch vụ:</span>
              <span class="font-semibold text-slate-800">{{ getServiceName(selectedService) }}</span>
            </div>
            <div class="flex justify-between pb-4 border-b border-slate-200">
              <span class="text-slate-500">Ngày khám:</span>
              <span class="font-semibold text-slate-800">{{ selectedDate }}</span>
            </div>
            <div class="flex justify-between pb-4 border-b border-slate-200">
              <span class="text-slate-500">Giờ khám:</span>
              <span class="font-semibold text-slate-800">{{ selectedTime }}</span>
            </div>
            <div class="flex justify-between pt-2">
              <span class="text-slate-500">Tạm tính:</span>
              <span class="font-bold text-xl text-indigo-700">{{ formatPrice(getServicePrice(selectedService)) }}</span>
            </div>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="mt-8 pt-6 border-t border-slate-100 flex justify-between">
          <button v-if="step > 1" @click="step--" class="px-6 py-2.5 rounded-xl font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors">
            Quay lại
          </button>
          <div v-else></div> <!-- Spacer -->
          
          <button v-if="step < 3" @click="nextStep" :disabled="!canProceed" class="px-8 py-2.5 rounded-xl font-medium text-white transition-all shadow-soft" :class="canProceed ? 'bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-0.5' : 'bg-slate-300 cursor-not-allowed'">
            Tiếp tục
          </button>
          <button v-else @click="confirmBooking" class="px-8 py-2.5 rounded-xl font-medium text-white bg-emerald-600 hover:bg-emerald-700 shadow-soft hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <i class="ph-bold ph-check"></i>
            Xác nhận đặt lịch
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { services } from '../../data';

const router = useRouter();
const step = ref(1);

const selectedService = ref(null);
const selectedDate = ref(null);
const selectedTime = ref(null);

const availableTimes = ['08:00', '08:30', '09:00', '09:30', '10:00', '14:00', '14:30', '15:00', '15:30'];

const canProceed = computed(() => {
  if (step.value === 1) return selectedService.value !== null;
  if (step.value === 2) return selectedDate.value !== null && selectedTime.value !== null;
  return true;
});

const nextStep = () => {
  if (canProceed.value) step.value++;
};

const formatPrice = (price) => {
  if (!price) return '0đ';
  return price.toLocaleString('vi-VN') + 'đ';
};

const getServiceName = (id) => {
  const svc = services.find(s => s.id === id);
  return svc ? svc.name : '';
};

const getServicePrice = (id) => {
  const svc = services.find(s => s.id === id);
  return svc ? svc.price : 0;
};

const confirmBooking = () => {
  alert('Đặt lịch thành công! Cảm ơn bạn đã sử dụng dịch vụ.');
  router.push('/patient');
};
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>