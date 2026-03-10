export type Task = {
  id: string
  title: string
  description: string
  status: "todo" | "in-progress" | "done" | "cancelled"
  priority: "low" | "medium" | "high"
  dueDate: string
  createdAt: string
}

export const tasks: Task[] = [
  {
    id: "TASK-1",
    title: "Thiết kế giao diện trang chủ",
    description: "Tạo wireframe và mockup cho trang chủ mới",
    status: "done",
    priority: "high",
    dueDate: "2024-01-15",
    createdAt: "2024-01-10",
  },
  {
    id: "TASK-2",
    title: "Phát triển API authentication",
    description: "Xây dựng hệ thống đăng ký và đăng nhập",
    status: "in-progress",
    priority: "high",
    dueDate: "2024-01-20",
    createdAt: "2024-01-12",
  },
  {
    id: "TASK-3",
    title: "Viết unit test cho module user",
    description: "Tạo test cases cho các function trong user module",
    status: "todo",
    priority: "medium",
    dueDate: "2024-01-25",
    createdAt: "2024-01-14",
  },
  {
    id: "TASK-4",
    title: "Tối ưu hóa database queries",
    description: "Review và tối ưu các query chậm",
    status: "todo",
    priority: "low",
    dueDate: "2024-01-30",
    createdAt: "2024-01-15",
  },
  {
    id: "TASK-5",
    title: "Cập nhật documentation",
    description: "Viết tài liệu cho API endpoints mới",
    status: "cancelled",
    priority: "low",
    dueDate: "2024-01-18",
    createdAt: "2024-01-11",
  },
  {
    id: "TASK-6",
    title: "Fix bug checkout page",
    description: "Sửa lỗi khi người dùng thay đổi phương thức thanh toán",
    status: "in-progress",
    priority: "high",
    dueDate: "2024-01-19",
    createdAt: "2024-01-16",
  },
  {
    id: "TASK-7",
    title: "Thêm dark mode support",
    description: "Hỗ trợ giao diện tối cho toàn bộ ứng dụng",
    status: "todo",
    priority: "medium",
    dueDate: "2024-02-01",
    createdAt: "2024-01-17",
  },
  {
    id: "TASK-8",
    title: "Setup CI/CD pipeline",
    description: "Cấu hình GitHub Actions cho automated testing và deployment",
    status: "todo",
    priority: "medium",
    dueDate: "2024-02-05",
    createdAt: "2024-01-18",
  },
]
