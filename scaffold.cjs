const fs = require('fs');
const path = require('path');

const dirs = [
  'src/layouts',
  'src/views/patient',
  'src/views/doctor',
  'src/views/receptionist'
];

dirs.forEach(dir => fs.mkdirSync(path.join(__dirname, dir), { recursive: true }));

const files = [
  'src/layouts/PublicLayout.vue',
  'src/layouts/PatientLayout.vue',
  'src/layouts/DoctorLayout.vue',
  'src/layouts/ReceptionistLayout.vue',
  'src/views/patient/Home.vue',
  'src/views/patient/Login.vue',
  'src/views/patient/Services.vue',
  'src/views/patient/BookingFlow.vue',
  'src/views/patient/Dashboard.vue',
  'src/views/patient/Appointments.vue',
  'src/views/patient/History.vue',
  'src/views/patient/Billing.vue',
  'src/views/patient/Profile.vue',
  'src/views/patient/Notifications.vue',
  'src/views/doctor/Login.vue',
  'src/views/doctor/Dashboard.vue',
  'src/views/doctor/PatientQueue.vue',
  'src/views/doctor/Workspace.vue',
  'src/views/doctor/Schedule.vue',
  'src/views/doctor/Profile.vue',
  'src/views/doctor/Payslip.vue',
  'src/views/doctor/Statistics.vue',
  'src/views/receptionist/Login.vue',
  'src/views/receptionist/Dashboard.vue',
  'src/views/receptionist/Appointments.vue',
  'src/views/receptionist/Checkin.vue',
  'src/views/receptionist/Billing.vue',
  'src/views/receptionist/Pharmacy.vue',
  'src/views/receptionist/Reports.vue',
  'src/views/receptionist/Profile.vue',
  'src/views/receptionist/Schedule.vue',
  'src/views/receptionist/Payslip.vue'
];

const template = `<template>
  <div class="p-8">
    <h1 class="text-2xl font-bold text-indigo-900 mb-4">{{ title }}</h1>
    <p class="text-slate-500">Trang này đang được xây dựng...</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const title = computed(() => route.name);
</script>`;

const layoutTemplate = `<template>
  <div class="flex h-screen overflow-hidden bg-slate-50 text-gray-800">
    <aside class="w-64 bg-slate-900 text-white p-4">Layout Sidebar</aside>
    <main class="flex-1 overflow-y-auto">
      <router-view />
    </main>
  </div>
</template>`;

files.forEach(file => {
  const isLayout = file.includes('Layout');
  fs.writeFileSync(path.join(__dirname, file), isLayout ? layoutTemplate : template);
});

console.log('Scaffold complete.');
