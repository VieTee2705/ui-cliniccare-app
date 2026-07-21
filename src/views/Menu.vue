<template>
  <div class="min-h-screen bg-slate-50 px-4 py-8 text-slate-900">
    <div class="mx-auto max-w-7xl">
      <div class="mb-8 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">ClinicCare</p>
        <h1 class="mt-2 text-3xl font-bold sm:text-4xl">Menu tổng hợp hệ thống</h1>
        <p class="mx-auto mt-3 max-w-2xl text-slate-600">
          Truy cập nhanh vào các phân hệ bệnh nhân, bác sĩ và lễ tân.
        </p>
      </div>

      <div class="grid gap-6 lg:grid-cols-3">
        <section
          v-for="group in groups"
          :key="group.title"
          class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div class="mb-5">
            <h2 class="text-xl font-semibold">{{ group.title }}</h2>
            <p class="mt-2 text-sm text-slate-500">{{ group.description }}</p>
          </div>

          <div class="space-y-3">
            <router-link
              v-for="item in group.items"
              :key="item.label"
              :to="item.to"
              class="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-cyan-500 hover:bg-cyan-50"
            >
              <span>
                <span class="block font-medium text-slate-800">{{ item.label }}</span>
                <span class="text-sm text-slate-500">{{ item.caption }}</span>
              </span>
              <span class="text-cyan-600">→</span>
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const groups = [
  {
    title: 'Bệnh nhân',
    description: 'Quản lý lịch hẹn, hồ sơ và thanh toán.',
    items: [
      { label: 'Trang chủ', caption: 'Cổng bệnh nhân', to: '/patient' },
      { label: 'Đăng nhập', caption: 'Đăng nhập bệnh nhân', to: '/patient/login' },
      { label: 'Dịch vụ', caption: 'Xem dịch vụ', to: '/patient/services' },
      { label: 'Đặt lịch', caption: 'Quy trình đặt lịch', to: '/patient/booking' },
      { label: 'Tổng quan', caption: 'Dashboard bệnh nhân', to: '/patient/dashboard' },
      { label: 'Lịch hẹn', caption: 'Danh sách lịch hẹn', to: '/patient/dashboard/appointments' },
      { label: 'Lịch sử', caption: 'Xem lịch sử khám', to: '/patient/dashboard/history' },
      { label: 'Hóa đơn', caption: 'Thanh toán và hóa đơn', to: '/patient/dashboard/billing' },
      { label: 'Hồ sơ', caption: 'Cập nhật thông tin', to: '/patient/dashboard/profile' },
      { label: 'Thông báo', caption: 'Thông báo mới', to: '/patient/dashboard/notifications' },
    ],
  },
  {
    title: 'Bác sĩ',
    description: 'Theo dõi hàng chờ, lịch làm việc và hồ sơ bệnh nhân.',
    items: [
      { label: 'Dashboard', caption: 'Tổng quan bác sĩ', to: '/doctor/dashboard' },
      { label: 'Hàng chờ', caption: 'Xem bệnh nhân đang chờ', to: '/doctor/queue' },
      { label: 'Phòng làm việc', caption: 'Mở workspace bệnh nhân', to: { name: 'DoctorWorkspace', params: { patientId: '1' } } },
      { label: 'Lịch làm việc', caption: 'Quản lý lịch khám', to: '/doctor/schedule' },
      { label: 'Hồ sơ', caption: 'Thông tin bác sĩ', to: '/doctor/profile' },
      { label: 'Phiếu lương', caption: 'Xem bảng lương', to: '/doctor/payslip' },
      { label: 'Thống kê', caption: 'Báo cáo hoạt động', to: '/doctor/statistics' },
    ],
  },
  {
    title: 'Lễ tân',
    description: 'Điều phối lịch hẹn, check-in và báo cáo vận hành.',
    items: [
      { label: 'Dashboard', caption: 'Tổng quan lễ tân', to: '/receptionist/dashboard' },
      { label: 'Lịch hẹn', caption: 'Quản lý đặt lịch', to: '/receptionist/appointments' },
      { label: 'Check-in', caption: 'Check-in bệnh nhân', to: '/receptionist/checkin' },
      { label: 'Hóa đơn', caption: 'Thanh toán tại quầy', to: '/receptionist/billing' },
      { label: 'Nhà thuốc', caption: 'Quản lý thuốc', to: '/receptionist/pharmacy' },
      { label: 'Báo cáo', caption: 'Phân tích vận hành', to: '/receptionist/reports' },
      { label: 'Hồ sơ', caption: 'Thông tin lễ tân', to: '/receptionist/profile' },
      { label: 'Lịch làm việc', caption: 'Sắp xếp lịch', to: '/receptionist/schedule' },
      { label: 'Phiếu lương', caption: 'Bảng lương', to: '/receptionist/payslip' },
    ],
  },
]
</script>
