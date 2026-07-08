<template>
  <div class="flex-1">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-indigo-50/50 to-white pt-20 pb-32 overflow-hidden">
      <div class="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      <div class="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-indigo-100/50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <!-- Hero Text -->
        <div class="max-w-2xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 font-medium text-sm mb-6 border border-indigo-100">
            <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            Hệ thống quản lý y tế hiện đại
          </div>
          <h1 class="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6 tracking-tight">
            Chăm sóc sức khoẻ <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">toàn diện & tận tâm</span>
          </h1>
          <p class="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
            Trải nghiệm dịch vụ y tế chuẩn quốc tế với đội ngũ bác sĩ chuyên môn cao. Đặt lịch khám dễ dàng, quản lý hồ sơ sức khoẻ thông minh ngay trên ClinicCare.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/patient/booking" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all flex items-center justify-center gap-3 text-lg">
              <i class="ph-bold ph-calendar-plus text-xl"></i>
              Đặt lịch khám ngay
            </router-link>
            <router-link to="/patient/services" class="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-3 text-lg">
              Tìm bác sĩ
            </router-link>
          </div>
          
          <div class="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
            <div class="flex items-center gap-2">
              <i class="ph-fill ph-check-circle text-emerald-500 text-xl"></i>
              <span>Nhanh chóng</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="ph-fill ph-check-circle text-emerald-500 text-xl"></i>
              <span>Bảo mật</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="ph-fill ph-check-circle text-emerald-500 text-xl"></i>
              <span>Tiện lợi</span>
            </div>
          </div>
        </div>

        <!-- Hero Image/Graphic -->
        <div class="relative hidden lg:block">
          <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 rounded-3xl transform rotate-3 scale-105"></div>
          <div class="relative bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Doctor Consultation" class="rounded-2xl w-full h-[500px] object-cover" />
            
            <!-- Floating Card 1 -->
            <div class="absolute -bottom-6 -left-12 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style="animation-duration: 3s;">
              <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl">
                <i class="ph-bold ph-check"></i>
              </div>
              <div>
                <p class="text-sm text-slate-500 font-medium">Bác sĩ chuyên khoa</p>
                <p class="text-lg font-bold text-slate-800">50+</p>
              </div>
            </div>
            
            <!-- Floating Card 2 -->
            <div class="absolute top-12 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style="animation-duration: 4s; animation-delay: 1s;">
              <div class="flex -space-x-2">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=A&background=random" alt="">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=B&background=random" alt="">
                <img class="w-8 h-8 rounded-full border-2 border-white" src="https://ui-avatars.com/api/?name=C&background=random" alt="">
              </div>
              <p class="text-xs font-semibold text-slate-700">10k+ Bệnh nhân<br/>tin tưởng</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Dịch vụ chuyên khoa nổi bật</h2>
          <p class="text-slate-500">Chúng tôi cung cấp các dịch vụ y tế đa dạng, đáp ứng mọi nhu cầu chăm sóc sức khoẻ của bạn với trang thiết bị hiện đại nhất.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Service Card 1 -->
          <div class="bg-slate-50 rounded-3xl p-8 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 transition-colors group cursor-pointer">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
              <i class="ph-fill ph-stethoscope text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Khám Tổng quát</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Đánh giá toàn diện tình trạng sức khoẻ, tầm soát các bệnh lý nguy hiểm tiềm ẩn.</p>
          </div>

          <!-- Service Card 2 -->
          <div class="bg-slate-50 rounded-3xl p-8 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 transition-colors group cursor-pointer">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
              <i class="ph-fill ph-tooth text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Răng Hàm Mặt</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Chăm sóc răng miệng, thẩm mỹ nha khoa với công nghệ không đau tiên tiến.</p>
          </div>

          <!-- Service Card 3 -->
          <div class="bg-slate-50 rounded-3xl p-8 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 transition-colors group cursor-pointer">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
              <i class="ph-fill ph-baby text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Nhi Khoa</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Chăm sóc sức khoẻ toàn diện cho trẻ sơ sinh và trẻ nhỏ với sự tận tâm.</p>
          </div>

          <!-- Service Card 4 -->
          <div class="bg-slate-50 rounded-3xl p-8 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 transition-colors group cursor-pointer">
            <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
              <i class="ph-fill ph-test-tube text-3xl"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-800 mb-3">Xét nghiệm</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Hệ thống phòng lab chuẩn quốc tế, trả kết quả nhanh chóng và chính xác.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>