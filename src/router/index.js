import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/home", component: () => import("../views/Menu.vue") },

  // Patient Portal
  {
    path: "/patient",
    component: () => import("../layouts/PublicLayout.vue"),
    children: [
      {
        path: "",
        name: "PatientHome",
        component: () => import("../views/patient/Home.vue"),
      },
      {
        path: "login",
        name: "PatientLogin",
        component: () => import("../views/patient/Login.vue"),
      },
      {
        path: "services",
        name: "PatientServices",
        component: () => import("../views/patient/Services.vue"),
      },
      {
        path: "booking",
        name: "PatientBooking",
        component: () => import("../views/patient/BookingFlow.vue"),
      },
    ],
  },
  {
    path: "/patient/dashboard",
    component: () => import("../layouts/PatientLayout.vue"),
    children: [
      {
        path: "",
        name: "PatientDashboard",
        component: () => import("../views/patient/Dashboard.vue"),
      },
      {
        path: "appointments",
        name: "PatientAppointments",
        component: () => import("../views/patient/Appointments.vue"),
      },
      {
        path: "history",
        name: "PatientHistory",
        component: () => import("../views/patient/History.vue"),
      },
      {
        path: "billing",
        name: "PatientBilling",
        component: () => import("../views/patient/Billing.vue"),
      },
      {
        path: "profile",
        name: "PatientProfile",
        component: () => import("../views/patient/Profile.vue"),
      },
      {
        path: "notifications",
        name: "PatientNotifications",
        component: () => import("../views/patient/Notifications.vue"),
      },
    ],
  },

  // Doctor Portal
  {
    path: "/doctor/login",
    name: "DoctorLogin",
    component: () => import("../views/doctor/Login.vue"),
  },
  {
    path: "/doctor",
    component: () => import("../layouts/DoctorLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "DoctorDashboard",
        component: () => import("../views/doctor/Dashboard.vue"),
      },
      {
        path: "queue",
        name: "DoctorQueue",
        component: () => import("../views/doctor/PatientQueue.vue"),
      },
      {
        path: "workspace/:patientId",
        name: "DoctorWorkspace",
        component: () => import("../views/doctor/Workspace.vue"),
      },
      {
        path: "schedule",
        name: "DoctorSchedule",
        component: () => import("../views/doctor/Schedule.vue"),
      },
      {
        path: "profile",
        name: "DoctorProfile",
        component: () => import("../views/doctor/Profile.vue"),
      },
      {
        path: "payslip",
        name: "DoctorPayslip",
        component: () => import("../views/doctor/Payslip.vue"),
      },
      {
        path: "statistics",
        name: "DoctorStats",
        component: () => import("../views/doctor/Statistics.vue"),
      },
    ],
  },

  // Receptionist Portal
  {
    path: "/receptionist/login",
    name: "ReceptionistLogin",
    component: () => import("../views/receptionist/Login.vue"),
  },
  {
    path: "/receptionist",
    component: () => import("../layouts/ReceptionistLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "ReceptionistDashboard",
        component: () => import("../views/receptionist/Dashboard.vue"),
      },
      {
        path: "appointments",
        name: "ReceptionistAppointments",
        component: () => import("../views/receptionist/Appointments.vue"),
      },
      {
        path: "checkin",
        name: "ReceptionistCheckin",
        component: () => import("../views/receptionist/Checkin.vue"),
      },
      {
        path: "billing",
        name: "ReceptionistBilling",
        component: () => import("../views/receptionist/Billing.vue"),
      },
      {
        path: "pharmacy",
        name: "ReceptionistPharmacy",
        component: () => import("../views/receptionist/Pharmacy.vue"),
      },
      {
        path: "reports",
        name: "ReceptionistReports",
        component: () => import("../views/receptionist/Reports.vue"),
      },
      {
        path: "profile",
        name: "ReceptionistProfile",
        component: () => import("../views/receptionist/Profile.vue"),
      },
      {
        path: "schedule",
        name: "ReceptionistSchedule",
        component: () => import("../views/receptionist/Schedule.vue"),
      },
      {
        path: "payslip",
        name: "ReceptionistPayslip",
        component: () => import("../views/receptionist/Payslip.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
