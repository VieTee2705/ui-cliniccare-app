<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
    <div class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

    <div class="max-w-5xl w-full relative z-10 text-center">
      <div class="mb-12">
        <div class="w-20 h-20 bg-indigo-600 rounded-2xl mx-auto flex items-center justify-center text-white shadow-xl mb-6">
          <i class="ph-fill ph-heartbeat text-5xl"></i>
        </div>
        <h1 class="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">ClinicCare Hub</h1>
        <p class="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
          Hệ thống Quản lý Phòng khám Đa khoa Toàn diện. Vui lòng chọn phân hệ bạn muốn truy cập.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Patient Portal -->
        <router-link to="/patient" class="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all hover:-translate-y-2 relative overflow-hidden text-left block">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div class="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
            <i class="ph-fill ph-user"></i>
          </div>
          <h2 class="text-2xl font-bold text-slate-800 mb-2">Bệnh nhân</h2>
          <p class="text-slate-500 text-sm line-clamp-3">
            Trải nghiệm tính năng đặt lịch khám, xem hồ sơ bệnh án, theo dõi sức khoẻ và thanh toán viện phí dành cho Bệnh nhân.
          </p>
          <div class="mt-6 flex items-center gap-2 text-indigo-600 font-medium text-sm">
            Truy cập ngay <i class="ph-bold ph-arrow-right transition-transform group-hover:translate-x-1"></i>
          </div>
        </router-link>

        <!-- Doctor Portal -->
        <router-link to="/doctor/login" class="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all hover:-translate-y-2 relative overflow-hidden text-left block">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div class="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
            <i class="ph-fill ph-stethoscope"></i>
          </div>
          <h2 class="text-2xl font-bold text-slate-800 mb-2">Bác sĩ</h2>
          <p class="text-slate-500 text-sm line-clamp-3">
            Phân hệ dành riêng cho Y Bác sĩ. Quản lý hàng đợi, chẩn đoán bệnh, xem hồ sơ sức khoẻ và chỉ định dịch vụ với Không gian khám chuyên dụng.
          </p>
          <div class="mt-6 flex items-center gap-2 text-blue-600 font-medium text-sm">
            Truy cập ngay <i class="ph-bold ph-arrow-right transition-transform group-hover:translate-x-1"></i>
          </div>
        </router-link>

        <!-- Receptionist Portal -->
        <router-link to="/receptionist/login" class="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-100 transition-all hover:-translate-y-2 relative overflow-hidden text-left block">
          <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div class="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
            <i class="ph-fill ph-desktop"></i>
          </div>
          <h2 class="text-2xl font-bold text-slate-800 mb-2">Lễ tân</h2>
          <p class="text-slate-500 text-sm line-clamp-3">
            Giao diện tiếp đón bệnh nhân, quản lý thanh toán, phát thuốc và báo cáo thống kê nhanh dành cho Lễ tân và Thu ngân.
          </p>
          <div class="mt-6 flex items-center gap-2 text-emerald-600 font-medium text-sm">
            Truy cập ngay <i class="ph-bold ph-arrow-right transition-transform group-hover:translate-x-1"></i>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
</style>
