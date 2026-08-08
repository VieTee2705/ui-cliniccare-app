// Mock Data cho Hệ thống ClinicCare Hub

export const users = {
  receptionist: {
    id: 'R01',
    name: 'Nguyễn Thị A',
    role: 'Lễ tân',
    avatar: 'https://ui-avatars.com/api/?name=Nguyen+Thi+A&background=e0e7ff&color=4f46e5&rounded=true&bold=true'
  },
  doctor: {
    id: 'D01',
    name: 'BS. Lê Tuấn',
    role: 'Bác sĩ',
    department: 'Khoa Nội chung',
    avatar: 'https://ui-avatars.com/api/?name=Le+Tuan&background=c7d2fe&color=3730a3&rounded=true'
  },
  patient: {
    id: 'P01',
    name: 'Trần Văn Bình',
    role: 'Bệnh nhân',
    avatar: 'https://ui-avatars.com/api/?name=Tran+Van+Binh&background=e2e8f0&color=475569&rounded=true'
  }
}

export const doctors = [
  { id: 'D01', name: 'BS. Lê Tuấn', department: 'Khoa Nội chung', avatar: 'https://ui-avatars.com/api/?name=Le+Tuan&background=c7d2fe&color=3730a3&rounded=true', status: 'online' },
  { id: 'D02', name: 'BS. Vũ Đức', department: 'Khoa Xét nghiệm', avatar: 'https://ui-avatars.com/api/?name=Vu+Duc&background=fef08a&color=854d0e&rounded=true', status: 'online' },
  { id: 'D03', name: 'BS. Nguyễn Hà', department: 'Răng Hàm Mặt', avatar: 'https://ui-avatars.com/api/?name=Nguyen+Ha&background=a7f3d0&color=065f46&rounded=true', status: 'online' },
  { id: 'D04', name: 'BS. Trần Kim', department: 'Khoa Nhi', avatar: 'https://ui-avatars.com/api/?name=Tran+Kim&background=fbcfe8&color=9d174d&rounded=true', status: 'offline' },
  { id: 'D05', name: 'BS. Phạm Hùng', department: 'Chẩn đoán hình ảnh', avatar: 'https://ui-avatars.com/api/?name=Pham+Hung&background=fed7aa&color=c2410c&rounded=true', status: 'online' },
  { id: 'D06', name: 'BS. Lê Ngọc', department: 'Sản Phụ Khoa', avatar: 'https://ui-avatars.com/api/?name=Le+Ngoc&background=e9d5ff&color=6b21a8&rounded=true', status: 'online' },
]

export const patients = [
  { id: 'P01', code: '#BN-1024', name: 'Trần Văn Bình', phone: '0901234567', gender: 'Nam', dob: '1985-04-12', address: 'Quận 1, TP.HCM' },
  { id: 'P02', code: '#BN-1025', name: 'Phạm Thị Mai', phone: '0912345678', gender: 'Nữ', dob: '1990-08-22', address: 'Quận 3, TP.HCM' },
  { id: 'P03', code: '#BN-1021', name: 'Hoàng Kim Yến', phone: '0923456789', gender: 'Nữ', dob: '1995-11-05', address: 'Quận Bình Thạnh, TP.HCM' },
  { id: 'P04', code: '#BN-1026', name: 'Lý Công Nhật', phone: '0934567890', gender: 'Nam', dob: '1988-02-28', address: 'Quận 7, TP.HCM' },
  { id: 'P05', code: '#BN-1027', name: 'Ngô Thanh Sơn', phone: '0945678901', gender: 'Nam', dob: '1975-12-10', address: 'Thủ Đức, TP.HCM' },
  { id: 'P06', code: '#BN-1028', name: 'Lê Ngọc Hoa', phone: '0956789012', gender: 'Nữ', dob: '2001-05-19', address: 'Quận 4, TP.HCM' },
  { id: 'P07', code: '#BN-1029', name: 'Đinh Tùng', phone: '0967890123', gender: 'Nam', dob: '1992-09-30', address: 'Quận 10, TP.HCM' },
  { id: 'P08', code: '#BN-1030', name: 'Vũ Minh Ánh', phone: '0978901234', gender: 'Nữ', dob: '2015-03-14', address: 'Quận 2, TP.HCM' },
  { id: 'P09', code: '#BN-1031', name: 'Bùi Gia Bảo', phone: '0989012345', gender: 'Nam', dob: '2018-07-07', address: 'Quận 5, TP.HCM' },
  { id: 'P10', code: '#BN-1032', name: 'Nguyễn Cẩm Tú', phone: '0990123456', gender: 'Nữ', dob: '1960-01-25', address: 'Quận 11, TP.HCM' },
]

export const stats = {
  receptionist: {
    todayAppointments: 142,
    waitingPatients: 28,
    completedPatients: 85,
    dailyRevenue: '45.8M'
  },
  doctor: {
    totalPatients: 36,
    waiting: 8,
    completed: 28
  }
}

export const queue = [
  { id: 1, patientId: 'P01', patientName: 'Trần Văn Bình', service: 'Khám Nội chung', doctorId: 'D01', doctorName: 'BS. Lê Tuấn', status: 'waiting', statusText: 'Đang chờ khám' },
  { id: 2, patientId: 'P02', patientName: 'Phạm Thị Mai', service: 'Xét nghiệm Máu', doctorId: 'D02', doctorName: 'BS. Vũ Đức', status: 'testing', statusText: 'Đang xét nghiệm' },
  { id: 3, patientId: 'P03', patientName: 'Hoàng Kim Yến', service: 'Nhổ răng khôn', doctorId: 'D03', doctorName: 'BS. Nguyễn Hà', status: 'completed', statusText: 'Đã khám xong' },
  { id: 4, patientId: 'P04', patientName: 'Lý Công Nhật', service: 'Khám Tổng quát', doctorId: 'D01', doctorName: 'BS. Lê Tuấn', status: 'waiting', statusText: 'Đang chờ khám' },
  { id: 5, patientId: 'P05', patientName: 'Ngô Thanh Sơn', service: 'Khám Tổng quát', doctorId: 'D01', doctorName: 'BS. Lê Tuấn', status: 'completed', statusText: 'Đã khám xong' },
  { id: 6, patientId: 'P06', patientName: 'Lê Ngọc Hoa', service: 'Siêu âm Ổ bụng', doctorId: 'D05', doctorName: 'BS. Phạm Hùng', status: 'testing', statusText: 'Đang xét nghiệm' },
  { id: 7, patientId: 'P07', patientName: 'Đinh Tùng', service: 'Tư vấn Tim mạch', doctorId: 'D01', doctorName: 'BS. Lê Tuấn', status: 'waiting', statusText: 'Đang chờ khám' },
  { id: 8, patientId: 'P08', patientName: 'Vũ Minh Ánh', service: 'Khám Nhi', doctorId: 'D04', doctorName: 'BS. Trần Kim', status: 'waiting', statusText: 'Đang chờ khám' },
  { id: 9, patientId: 'P09', patientName: 'Bùi Gia Bảo', service: 'Khám Nhi', doctorId: 'D04', doctorName: 'BS. Trần Kim', status: 'completed', statusText: 'Đã khám xong' },
  { id: 10, patientId: 'P10', patientName: 'Nguyễn Cẩm Tú', service: 'Khám Sản Phụ Khoa', doctorId: 'D06', doctorName: 'BS. Lê Ngọc', status: 'waiting', statusText: 'Đang chờ khám' },
  { id: 11, patientId: 'P03', patientName: 'Hoàng Kim Yến', service: 'Tái khám Nội tiết', doctorId: 'D01', doctorName: 'BS. Lê Tuấn', status: 'waiting', statusText: 'Đang chờ khám' },
]

export const services = [
  { id: 'S1', name: 'Khám Tổng quát', price: 200000, category: 'Khám bệnh' },
  { id: 'S2', name: 'Khám Nội chung', price: 150000, category: 'Khám bệnh' },
  { id: 'S3', name: 'Xét nghiệm Máu', price: 350000, category: 'Cận lâm sàng' },
  { id: 'S4', name: 'Nhổ răng khôn', price: 1500000, category: 'Răng Hàm Mặt' },
  { id: 'S5', name: 'Siêu âm Ổ bụng', price: 250000, category: 'Cận lâm sàng' },
  { id: 'S6', name: 'Khám Nhi', price: 200000, category: 'Khám bệnh' },
  { id: 'S7', name: 'Chụp X-Quang Phổi', price: 180000, category: 'Cận lâm sàng' },
  { id: 'S8', name: 'Khám Sản Phụ Khoa', price: 250000, category: 'Khám bệnh' },
]

export const schedules = [
  { id: 1, title: 'Khám Nội - BN Trần Văn Bình', date: new Date().toISOString().split('T')[0], time: '08:00', type: 'appointment', color: 'bg-blue-100 text-blue-700 border-blue-200' },
  { id: 2, title: 'Khám Nội - BN Phạm Thị Mai', date: new Date().toISOString().split('T')[0], time: '09:00', type: 'appointment', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' },
  { id: 3, title: 'Hội chẩn khoa', date: new Date().toISOString().split('T')[0], time: '11:00', type: 'meeting', color: 'bg-orange-100 text-orange-700 border-orange-200' },
  { id: 4, title: 'Khám Nội - BN Lý Công Nhật', date: new Date().toISOString().split('T')[0], time: '14:00', type: 'appointment', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  { id: 5, title: 'Nghỉ bù', date: new Date(Date.now() + 86400000).toISOString().split('T')[0], time: 'All day', type: 'leave', color: 'bg-slate-100 text-slate-600 border-slate-200' }
]

export const chartData = {
  weeklyPatients: {
    labels: ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'CN'],
    datasets: [
      {
        label: 'Số ca khám',
        backgroundColor: '#4f46e5',
        data: [25, 32, 28, 45, 38, 20, 0]
      }
    ]
  },
  serviceDistribution: {
    labels: ['Khám bệnh', 'Cận lâm sàng', 'Tiểu phẫu'],
    datasets: [
      {
        backgroundColor: ['#4f46e5', '#10b981', '#f59e0b'],
        data: [60, 30, 10]
      }
    ]
  }
}

