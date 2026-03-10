import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Chào mừng đến với dashboard của bạn
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Tổng người dùng
              </p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div className="text-3xl">👥</div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            +12% từ tháng trước
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Doanh thu
              </p>
              <p className="text-2xl font-bold">$45,231</p>
            </div>
            <div className="text-3xl">💰</div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            +23% từ tháng trước
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                Đơn hàng
              </p>
              <p className="text-2xl font-bold">573</p>
            </div>
            <div className="text-3xl">📦</div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            +7% từ tháng trước
          </p>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold">Hoạt động gần đây</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <span>📝</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Đơn hàng mới #1234</p>
              <p className="text-xs text-muted-foreground">2 phút trước</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <span>👤</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Người dùng mới đăng ký</p>
              <p className="text-xs text-muted-foreground">15 phút trước</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <span>💬</span>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Phản hồi mới từ khách hàng</p>
              <p className="text-xs text-muted-foreground">1 giờ trước</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4">
        <Button>Thêm mới</Button>
        <Button variant="outline">Xem tất cả</Button>
      </div>
    </div>
  )
}
